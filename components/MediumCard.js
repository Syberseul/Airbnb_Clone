import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-60 w-60 lg:h-80 lg:w-80">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-lg mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
