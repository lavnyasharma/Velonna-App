import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCart, deleteFromCart } from '../apis'; // Ensure these functions are correctly imported

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {
      const cartData = await getCart(); // Get the cart data from API
      setCart(cartData); // Set the entire cart data
      setItemCount(cartData.cart_item.length); // Set the item count
      setSubtotal(cartData.subtotal); // Set the subtotal
      setTotalDiscount(cartData.total_discount); // Set total discount
      setTotal(cartData.total); // Set the total
    } catch (error) {
      console.error('Failed to fetch cart:', error); // Log error if fetching fails
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await deleteFromCart(cartItemId); // Call delete API
      fetchCart(); // Re-fetch the cart after deleting an item
      setCart((prevCart) => {
        const updatedCartItems = prevCart.cart_item.filter(item => item.id !== cartItemId);
        const updatedSubtotal = updatedCartItems.reduce((sum, item) => sum + item.price, 0);
        const updatedTotal = updatedSubtotal - totalDiscount; // Adjust total with discounts

        return {
          ...prevCart,
          cart_item: updatedCartItems,
          subtotal: updatedSubtotal,
          total: updatedTotal,
        };
      });
    } catch (error) {
      console.error('Failed to remove item from cart:', error); // Log error if removing fails
    }
  };

  useEffect(() => {
   
    fetchCart(); // Fetch cart data when component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <CartContext.Provider
      value={{
        cart,
        itemCount,
        subtotal,
        totalDiscount,
        total,
        fetchCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
