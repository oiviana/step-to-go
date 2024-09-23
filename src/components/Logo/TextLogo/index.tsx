import Image from "next/image";
import React from "react";

export type LogoSizeProps = {
  width: number;
  height: number;
}

function TextLogo({ width, height }:LogoSizeProps) {
  return (
   <Image
   src="/step-text.png"
   alt="Logo do site"
   width={width}
   height={height}
   className="object-contain"
   />
  );
}

export default TextLogo;
