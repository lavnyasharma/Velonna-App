import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import Typography from "@/shared/components/Typography";
import React from "react";

export default function TitleScreen({ value }) {
  return (
    <Typography
      customStyle={{
        fontSize: normalize(24),
        fontFamily: FONT.SEMI_BOLD,
      }}
      value={value}
    />
  );
}
