"use client"
import * as React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import "./financing.css";
import HeroF from "./HeroF";
import Pagenv from "./Pagenv";
import FinanceMain from "./FinanceMain";

export default function  Collection () {


    const router = useRouter();
    // Ensure collection is a string, and provide a default empty string if undefined
    const collection = typeof router.query.collection === 'string' ? router.query.collection : "";


    const [nftData, setNftData] = useState<any[]>([]);
    const [test, setTest] = useState("");

    useEffect(() => {
        
        console.log("NFT Equity Page");
        fetchNFT();
    }, []);

    // fetch nft fcuntion with moralis api
    const fetchNFT = async () => {
        const url = "/api/getNftsByCollection?collectionSlug=otherdeed";
        
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
            <h1>{collection}</h1>
            <HeroF />
            <Pagenv />
            <FinanceMain collectionAddress={collection} nftData={nftData}/>
        </div>
    )
};
 
