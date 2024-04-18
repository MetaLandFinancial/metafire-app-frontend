"use client"
import * as React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import "./financing.css";
import HeroF from "./HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

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
    return collectionSlugs[address.toLowerCase()];
  }
  

export default function  Collection () {


    const router = useRouter();
    // Ensure collection is a string, and provide a default empty string if undefined
    const collection = typeof router.query.collection === 'string' ? router.query.collection : "";


    const [nftData, setNftData] = useState<any[]>([]);
    const [test, setTest] = useState("");

    useEffect(() => {
        console.log("address is: ", collection);
        const slug = getCollectionSlug(collection);
        console.log("slug is: ", slug);
        console.log("NFT Equity Page");
        fetchNFT(slug);
    }, [collection]);

    // fetch nft fcuntion with moralis api
    const fetchNFT = async (collectionSlug: string) => {
        const url = `/api/getNftsByCollection?collectionSlug=${collectionSlug}`;
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // console.log(data.result);
        // const metadata = data.result[0].metadata;
        // const ojbMetadata = JSON.parse(metadata);

        // const array = [22, 33, 44];
        if(data && data.listings) {
            // Store the fetched data in state
            // setTest(data.result[0].name);
            setNftData(data.listings);
        }
    };


    return(
        <div>
            {/* <h1>{collection}</h1> */}
            <HeroF />
            <Pagenv />
            <FinanceMain collectionAddress={collection} nftData={nftData}/>
        </div>
    )
};
 
