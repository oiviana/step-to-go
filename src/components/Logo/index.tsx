import Image from "next/image";
import React from "react";
import { LogoSizeProps } from "./TextLogo";

function Logo({width, height }:LogoSizeProps) {
  return (
   <Image
   src="/step-to-go-logo.png"
   alt="Logo do site"
   width={width}
   height={height}
   />
  );
}

export default Logo;
