import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export default function useKeyboard() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setHeight(e.endCoordinates.height);
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setHeight(0);
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return {
    height,
    isKeyboardVisible,
  };
}
