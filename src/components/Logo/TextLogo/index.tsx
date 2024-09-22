import Image from "next/image";
import React from "react";

function TextLogo() {
  return (
   <Image
   src="/step-text.png"
   alt="Logo do site"
   width={150}
   height={30}
   className="object-contain"
   />
  );
}

export default TextLogo;
