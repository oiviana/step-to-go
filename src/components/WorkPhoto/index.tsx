import Image from "next/image";

export default function WorkPhoto() {
  return (
    <div className="wrapper">
      <div className="maskedPhoto">
        <Image
          src="/me-working.png"
          className="shadow-lg"
          width={1200}
          height={450}
          alt="Lucas Viana"
          priority={false}
        />
      </div>

      {/* Glow atrás (opcional) */}
      <div className="glow" aria-hidden="true" />
    </div>
  );
}
