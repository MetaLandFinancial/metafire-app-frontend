import React from "react";
import Image from "next/image";

const HeroF = () => {
  return (
    <div className="relative bg-[url('/img/fhero.png')] bg-cover bg-no-repeat object-cover w-full h-full ">
      <div className="pt-[55px] pb-[17px] pl-6 md:pt-[58px] md:pl-[111px] md:pb-[34px]">
        <div className="rounded-full h-[61px] w-[61px] md:h-[149px] md:w-[149px] relative z-10">
          <Image
            src="/img/monkey.png"
            alt="bgImg"
            className="w-full h-full"
            width={61}
            height={61}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroF;
