import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section */}
      <div></div>

      {/* right section */}
      <div></div>
    </header>
  );
}

export default Header;
