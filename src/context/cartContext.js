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
      console.log("heheh")
      const cartData = await getCart();
      console.log(cartData)
      setCart(cartData);
      setItemCount(cartData.cart_item.length);
      setSubtotal(cartData.subtotal);
      setTotalDiscount(cartData.total_discount);
      setTotal(cartData.total);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await deleteFromCart(cartItemId);
      fetchCart(); // Refresh cart data after deletion
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
