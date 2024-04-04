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
  const address = req.query.address;
  console.log(address);

 
    console.log("storyKey");
    try {

      const url = `https://deep-index.moralis.io/api/v2.2/${address}/nft?chain=${CHAIN}&format=decimal&media_items=false`;
      const options = {
          method: "GET",
          headers: {
              //set header  application/json'
              'accept': 'application/json',

              "X-API-Key": "dF5uzb8ne8xx6k3v4bCbAnoS0rOAseWz50uvO53qO1lReWsCTs8QAqEBeq1CzkXP"
          }
      }
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
        res.status(200).send('OK');
    } catch (e) {
        console.error(e);
    }
}
