import React from "react";


import Image from "next/image";
const WhitelistedCollections = () => {
  return (
    <>

      {/* <div className="relative h-full w-full before:content-[''] before:bg-[url('/img/financeWork.png')] before:absolute before:z-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-no-repeat before:bg-cover"> */}
      <div className="relative h-full w-full">
        <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-cover bg-no-repeat blur-3xl mix-blend-color-dodge">
          <Image
            src="/img/SectionBg.png"
            alt="bgImg"
            className="w-full h-full"
            layout="fill"
          />
        </div>
        <h1>Whitelisted NFTs</h1>

      </div>
    </>
  );
};

export default WhitelistedCollections;
