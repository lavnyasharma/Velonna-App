import { UnLike, Like as LikeIcon, LikeDark, UnLikeDark } from "@/shared/assets/icons";
import { TouchableOpacity } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function LikeComponent({liked, onLike}) {
  const { isDarkMode } = useDarkMode();

  return (
    <TouchableOpacity onPress={onLike}>
      {isDarkMode ? (
        <>
          {liked ? <LikeDark /> : <UnLikeDark />}
        </>
      ) : (
        <>
          {liked ? <LikeIcon /> : <UnLike />}
        </>
      )}
    </TouchableOpacity>
  );
}
