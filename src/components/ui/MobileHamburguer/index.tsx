export default function MobileHamburguer({ openedMenu }: { openedMenu: boolean }) {
    return (
      <svg
        className="fill-v-green cursor-pointer"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primeira linha */}
        <rect
          x="3"
          y={openedMenu ? "11" : "5"} // Ajuste para alinhar corretamente
          width="18"
          height="2"
          rx="1"
          className={`transition-all duration-300 ease-in-out transform origin-center ${
            openedMenu ? "rotate-45" : ""
          }`}
        />
        
        {/* Segunda linha (sumir) */}
        <rect
          x="3"
          y="11"
          width="18"
          height="2"
          rx="1"
          className={`transition-all duration-300 ease-in-out transform origin-center ${
            openedMenu ? "opacity-0" : ""
          }`}
        />
        
        {/* Terceira linha */}
        <rect
          x="3"
          y={openedMenu ? "11" : "17"} // Ajuste para alinhar corretamente
          width="18"
          height="2"
          rx="1"
          className={`transition-all duration-300 ease-in-out transform origin-center ${
            openedMenu ? "-rotate-45" : ""
          }`}
        />
      </svg>
    );
  }