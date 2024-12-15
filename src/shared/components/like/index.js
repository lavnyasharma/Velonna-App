import { TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import LottieView from "lottie-react-native";

export default function LikeComponent({ onLike }) {
  const { isDarkMode } = useDarkMode();
  const [liked, setLiked] = useState(false); // Manage liked state
  const animationRef = useRef(null); // Reference for LottieView to control animation
  useEffect(()=>{
handleLikeToggle()
  },[])
  const handleLikeToggle = () => {
    setLiked((prev) => !prev);
    onLike?.(); // Call external onLike handler if provided

    // Play animation based on the liked state
    if (liked) {
      animationRef.current.play(10, 60); // Play from frame 0 to 50 for like animation
    } else {
      animationRef.current.play(60, 70); // Play from frame 50 to 100 for unlike animation
    }
  };

  return (
    <TouchableOpacity onPress={handleLikeToggle}>
      <LottieView
        ref={animationRef} // Reference to control the animation
        source={require('@/animation/like.json')} // Ensure this path is correct
        autoPlay={false} // Don't autoplay
        
        loop={false} // No loop, play once
        style={{ height: 60, width: 60 }}
        onAnimationFinish={() => {
          console.log("Animation finished");
        }}
        onError={(error) => {
          console.error("Lottie animation failed to load:", error);
        }}
      />
    </TouchableOpacity>
  );
}
