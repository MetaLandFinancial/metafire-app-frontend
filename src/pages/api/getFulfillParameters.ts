// Get Multiple NFTs
// /https://docs.moralis.io/web3-data-api/evm/reference/get-multiple-nfts?tokens=[{%22token_address%22:%220xa4991609c508b6d4fb7156426db0bd49fe298bd8%22,%22token_id%22:%2212%22},{%22token_address%22:%220x3c64dc415ebb4690d1df2b6216148c8de6dd29f7%22,%22token_id%22:%221%22},{%22token_address%22:%220xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%22,%22token_id%22:%22200%22}]&normalizeMetadata=false&media_items=true&chain=eth


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import Moralis from 'moralis';
// import { initMoralis } from '../../utils/initMoralis';


// pages/api/getMultipleNfts.js
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { nftAsset, nftTokenId, userAddress } = req.query;
    console.log("nfAsset", nftAsset);
    console.log("nftTokenId", nftTokenId);
    console.log("userAddress", userAddress);

    try {
        const response = await fetch(`https://prod-api.metafire.financial/api/fulfill/${nftAsset}/${nftTokenId}/${userAddress}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            "x-api-key": process.env.METAFIRE_API_KEY as string,
        },
        });

        if (!response.ok) {
        throw new Error(`Error from Opensea API: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An error occurred' });
    }
    
}
  
