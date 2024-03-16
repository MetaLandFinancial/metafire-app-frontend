import React from 'react';

import FavouriteImgOne from "@/../public/assets/heartSvg.svg"
import EthIcon from "@/../public/assets/etm_icon.svg"
import {myCollections} from "@/utils/data";
import Pagination from "@/components/shared/Pagination";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: "40px",
                height: "40px",
                border: "1px solid rgba(187, 207, 255, 0.40)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: "40px",
                height: "40px",
                border: "1px solid rgba(187, 207, 255, 0.40)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, rgba(71, 118, 230, 0.04) 0%, rgba(142, 84, 233, 0.04) 100%);"
            }}
            onClick={onClick}
        />
    );
}


const MyNfts = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        variableWidth: true,
        pauseOnHover: true,
        speed: 500,
        centerPadding: "50px",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>

    };
    return (
        <section
            className={"section_img pt-[50px] md:pt-[94px] pb-[100px] md:pb-[250px] bg-no-repeat bg-cover bg-center"}>
            <div className="main_container max-w-[1300px]">
                <div className="my_collection_wrapper">

                    <div className="section_title pb-10">
                        <h2 className={"text-3xl md:text-5xl font-medium text-white"}>
                            My Collections
                        </h2>
                    </div>

                    <div className="my_collection_summery hidden md:grid md:grid-cols-12 md:gap-6">
                        {
                            myCollections.map((myCollectionsItems, index) => (
                                <div className="col-span-12 lg:col-span-4" key={index}>
                                    <div
                                        className="card_wrapper p-3 bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button border border-gray-600 rounded-[15px]">
                                        <div className="card_img flex justify-center">
                                            <img src={myCollectionsItems.collectionImg.src} alt=""/>
                                        </div>

                                        <div className="card_description p-3">
                                            <div className="title flex justify-between items-center py-5">
                                                <h2 className={"text-2xl font-bold text-white"}>
                                                    {myCollectionsItems.collectionName}
                                                </h2>

                                                <button
                                                    className="border border-[#4776E6] h-[37px] w-[37px] flex justify-center items-center rounded-full">
                                                    <img src={FavouriteImgOne.src} alt="favourite-img"/>
                                                </button>
                                            </div>

                                            <div className="items_wrapper border border-gray-600 rounded-[10px] mb-5">
                                                <div
                                                    className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                    <div className="left">
                                                        <h4 className={"text-base font-medium text-white"}>
                                                            {myCollectionsItems.floorTitle}
                                                        </h4>
                                                    </div>
                                                    <div className="right">
                                                        <p className={"text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>
                                                            <img src={EthIcon.src} alt="icon"/>
                                                            {myCollectionsItems.floorPrice}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                    <div className="left">
                                                        <h4 className={"text-base font-medium text-white"}>
                                                            {myCollectionsItems.factorTitle}
                                                        </h4>
                                                    </div>
                                                    <div className="right">
                                                        <p className={"text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                            {myCollectionsItems.liquidationFactor}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                    <div className="left">
                                                        <h4 className={"text-base font-medium text-white"}>
                                                            {myCollectionsItems.auctionTitle}
                                                        </h4>
                                                    </div>
                                                    <div className="right">
                                                        <p className={"text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                            {myCollectionsItems.currentAuctionPrice}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                    <div className="left">
                                                        <h4 className={"text-base font-medium text-white"}>
                                                            {myCollectionsItems.bidderTitle}
                                                        </h4>
                                                    </div>
                                                    <div className="right">
                                                        <p className={"text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                            {myCollectionsItems.bidder}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="items flex items-center justify-between p-4">
                                                    <div className="left">
                                                        <h4 className={"text-base font-medium text-white"}>
                                                            {myCollectionsItems.auctionEndTitle}
                                                        </h4>
                                                    </div>
                                                    <div className="right">
                                                        <p className={"text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                            {myCollectionsItems.auctionEnd}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="buttons flex justify-between">
                                                <button
                                                    className={"w-[166px] py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[7px]"}>
                                                    {myCollectionsItems.auctionBtn}
                                                </button>

                                                <button
                                                    className={"w-[166px] py-3 bg-gradient-to-r from-rgba-blue-500-15 to-rgba-purple-600-15 border border-gray-600 rounded-[7px]"}>
                                                    {myCollectionsItems.buyNowBtn}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="my_collection_summery md:hidden">
                        <Slider {...settings}>
                            {
                                myCollections.map((myCollectionsItems, index) => (
                                    <div className="" key={index}>
                                        <div
                                            className="card_wrapper w-[210px] mr-5 p-3 bg-gradient-to-r from-rgba-blue-500 to-rgba-purple-600 shadow-button border border-gray-600 rounded-[15px]">
                                            <div className="card_img flex justify-center">
                                                <img src={myCollectionsItems.collectionImg.src} alt=""/>
                                            </div>

                                            <div className="card_description p-3">
                                                <div className="title flex justify-between items-center py-5">
                                                    <h2 className={"text-[10px] md:text-2xl font-bold text-white"}>
                                                        {myCollectionsItems.collectionName}
                                                    </h2>

                                                    <button
                                                        className="border border-[#4776E6] h-[37px] w-[37px] flex justify-center items-center rounded-full">
                                                        <img src={FavouriteImgOne.src} alt="favourite-img"/>
                                                    </button>
                                                </div>

                                                <div
                                                    className="items_wrapper border border-gray-600 rounded-[10px] mb-5">
                                                    <div
                                                        className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                        <div className="left">
                                                            <h4 className={"text-[10px] md:text-base font-medium text-white"}>
                                                                {myCollectionsItems.floorTitle}
                                                            </h4>
                                                        </div>
                                                        <div className="right">
                                                            <p className={"text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>
                                                                <img src={EthIcon.src} alt="icon"/>
                                                                {myCollectionsItems.floorPrice}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                        <div className="left">
                                                            <h4 className={"text-[10px] md:text-base font-medium text-white"}>
                                                                {myCollectionsItems.factorTitle}
                                                            </h4>
                                                        </div>
                                                        <div className="right">
                                                            <p className={"text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                                {myCollectionsItems.liquidationFactor}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                        <div className="left">
                                                            <h4 className={"text-[10px] md:text-base font-medium text-white"}>
                                                                {myCollectionsItems.auctionTitle}
                                                            </h4>
                                                        </div>
                                                        <div className="right">
                                                            <p className={"text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                                {myCollectionsItems.currentAuctionPrice}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="items flex items-center justify-between border-b border-b-gray-600 p-4">
                                                        <div className="left">
                                                            <h4 className={"text-[10px] md:text-base font-medium text-white"}>
                                                                {myCollectionsItems.bidderTitle}
                                                            </h4>
                                                        </div>
                                                        <div className="right">
                                                            <p className={"text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                                {myCollectionsItems.bidder}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="items flex items-center justify-between p-4">
                                                        <div className="left">
                                                            <h4 className={"text-[10px] md:text-base font-medium text-white"}>
                                                                {myCollectionsItems.auctionEndTitle}
                                                            </h4>
                                                        </div>
                                                        <div className="right">
                                                            <p className={"text-[10px] md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center gap-2"}>

                                                                {myCollectionsItems.auctionEnd}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="buttons flex justify-between gap-2">
                                                    <button
                                                        className={"w-[166px] text-[10px] md:text-base py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[7px]"}>
                                                        {myCollectionsItems.auctionBtn}
                                                    </button>

                                                    <button
                                                        className={"w-[166px] text-[10px] md:text-base py-2 md:py-3 bg-gradient-to-r from-rgba-blue-500-15 to-rgba-purple-600-15 border border-gray-600 rounded-[7px]"}>
                                                        {myCollectionsItems.buyNowBtn}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>


                    <Pagination/>
                </div>
            </div>
        </section>
    );
};

export default MyNfts;