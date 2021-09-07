import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl: [800px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white my-3 px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transation duration-150 outline-none">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
