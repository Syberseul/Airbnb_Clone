import React from "react";
import Image from "next/image";

function DiscoverCard({ img, title, description }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-60 w-60 lg:h-80 lg:w-80">
        <Image className="rounded-xl" src={img} layout="fill" />
      </div>
      <div>
        <h3 className="text-lg my-2">{title}</h3>
        <h4 className="text-sm">{description}</h4>
      </div>
    </div>
  );
}

export default DiscoverCard;
