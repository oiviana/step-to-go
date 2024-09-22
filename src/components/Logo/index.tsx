import Image from "next/image";
import React from "react";

function Logo() {
  return (
   <Image
   src="/step-to-go-logo.png"
   alt="Logo do site"
   width={100}
   height={53}
   />
  );
}

export default Logo;
