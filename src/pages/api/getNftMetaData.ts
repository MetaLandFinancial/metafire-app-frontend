// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import Moralis from 'moralis';
// import { initMoralis } from '../../utils/initMoralis';




// TODO : error control is needed here
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const CHAIN = 'eth';
  const nftAsset = req.query.nftAsset;
  const tokenId = req.query.tokenId;
  console.log(nftAsset);

 
    console.log("getting nfts");
    try {

      const url = `https://deep-index.moralis.io/api/v2.2/nft/${nftAsset}/${tokenId}?chain=${CHAIN}&format=decimal&normalizeMetadata=true&media_items=false`;
      const options = {
          method: "GET",
          headers: {
              //set header  application/json'
              'accept': 'application/json',

              "X-API-Key": "dF5uzb8ne8xx6k3v4bCbAnoS0rOAseWz50uvO53qO1lReWsCTs8QAqEBeq1CzkXP"
          }
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        // If there's an error with the request to the external API, return the status and error message
        return res.status(response.status).json({ message: 'Failed to fetch NFT data' });
      }
    
      const data = await response.json();
    
      // Log the data for debugging purposes
      // console.log(data);
    
      // Return the fetched data as JSON
      res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}
