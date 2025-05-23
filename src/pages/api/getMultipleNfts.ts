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
    console.log("getting multiple nfts")
    if (req.method === 'POST') {
      try {
        const moralisResponse = await fetch('https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs?chain=eth', {
          method: 'POST',
          headers: {
            'accept': 'application/json',

            'X-API-Key': process.env.MORALIS_API_KEY as string,
            'content-type': 'application/json'
          },
          body: JSON.stringify(req.body), // Forward the request body received by the Next.js API route to Moralis
        });
  
        if (!moralisResponse.ok) {
          throw new Error(`Error from Moralis API: ${moralisResponse.statusText}`);
        }
  
        const data = await moralisResponse.json();
        console.log(data);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An error occurred' });
      }
    } else {
      // Handle any non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
