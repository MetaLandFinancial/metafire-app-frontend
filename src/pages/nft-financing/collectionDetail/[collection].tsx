"use client"
import * as React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import "./financing.css";
import HeroF from "./HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";
import leftArrow from "../../../../public/assets/arrow_left.svg";
import rightArrow from "../../../../public/assets/arrow-right.svg";

type CollectionSlugsType = {
    [key: string]: string;
  };
  
  // Use the defined type for your object
  const collectionSlugs: CollectionSlugsType = {
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" : "boredapeyachtclub",
    "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258" : "otherdeed",
    "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949" : "beanzofficial",
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6" : "mutant-ape-yacht-club",
    "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b" : "clonex"
  };
  
  function getCollectionSlug(address: string): string {
    if (typeof address !== 'string') {
        console.error("Invalid address provided:", address);
        return ""; // Return a default value or handle the error as appropriate
      }
    return collectionSlugs[address.toLowerCase()];
  }
  

export default function  Collection () {


    const router = useRouter();
    // Ensure collection is a string, and provide a default empty string if undefined
    const collection = typeof router.query.collection === 'string' ? router.query.collection : "";


    const [nftData, setNftData] = useState<any[]>([]);
    const [nextPageKey, setNextPageKey] = useState<string>('');
    const [pageKeyStack, setPageKeyStack] = useState<string[]>([]); 

    useEffect(() => {
        // console.log("address is: ", collection);
        const slug = getCollectionSlug(collection);
        // console.log("slug is: ", slug);
        // console.log("NFT Equity Page");
        fetchNFTData(nextPageKey);
    }, [collection]);

    async function fetchNFTData(nextKey: string) {
        const slug = getCollectionSlug(collection);
        // console.log("slug is: ", slug);
        const url = `/api/getNftsByCollection?collectionSlug=${slug}${nextKey ? `&next=${nextKey}` : ''}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.listings) {
            window.scrollTo(0, 0);
            setNftData(data.listings);
            setNextPageKey(data.next);

        }
    }
    
    function goToNextPage() {
        if (nextPageKey) {
            setPageKeyStack(["", ...pageKeyStack, nextPageKey]); // Push current page key onto stack
            fetchNFTData(nextPageKey);
        }
    }

    function goToPreviousPage() {
        // console.log("pageKeyStack", pageKeyStack);
        if (pageKeyStack.length > 1) { // Ensure there's a previous page
            const newStack = [...pageKeyStack];
            newStack.pop(); // Remove the current key
            const prevKey = newStack.pop(); // Get the previous key
    
            // Check if prevKey is undefined before calling fetchNFTData
            if (typeof prevKey === 'string') {
                setPageKeyStack(newStack);
                // console.log("prevKey", prevKey);
                fetchNFTData(prevKey);
            } else {
                // Handle the case where prevKey is unexpectedly undefined
                console.error("Previous key is undefined.");
            }
        }
    }
    

    return(
        <div >
            {/* <h1>{collection}</h1> */}
            <HeroF  />
            {/* <Pagenv /> */}
            <FinanceMain  collectionAddress={collection} nftData={nftData}/>
            <div className="pagination flex gap-2 items-center justify-center pt-7">
              <button onClick={goToPreviousPage} className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={leftArrow.src} alt=""/>
              </button>
              <button onClick={goToNextPage} disabled={!nextPageKey} className={"w-[40px] h-[40px] border border-[#798295] rounded-[6px] flex justify-center items-center"}>
                  <img src={rightArrow.src} alt=""/>
              </button>
            </div>
        </div>
    )
};
 
