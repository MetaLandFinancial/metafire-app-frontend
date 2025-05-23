// pages/api/opensea/stats.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import {HttpsProxyAgent} from 'https-proxy-agent';
import fetch from 'node-fetch';
const axios = require('axios');
// var request = require('request')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { collectionSlug,next } = req.query;
  console.log('collectionSlug', collectionSlug);
  const PROXY_URL = process.env.PROXY_URL||'';
  const listingLimit = 12;


    try {
      const requestOptions: any = {
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': process.env.OPENSEA_API_KEY as string,
        },
      };
  
      // If PROXY_URL is provided, use it as the httpsAgent
      if (PROXY_URL) {
        const proxyAgent = new HttpsProxyAgent(PROXY_URL);
        requestOptions.httpsAgent = proxyAgent;
      }
      
      let response;
      // const response = await axios.get(`https://api.opensea.io/api/v2/listings/collection/${collectionSlug}/all?limit=${listingLimit}`, requestOptions);
      if(next){
        response = await axios.get(`https://api.opensea.io/api/v2/listings/collection/${collectionSlug}/best?limit=${listingLimit}&next=${next}`, requestOptions);
        console.log('next', next);
      }else{
        response = await axios.get(`https://api.opensea.io/api/v2/listings/collection/${collectionSlug}/best?limit=${listingLimit}`, requestOptions);
      }
      
  
      // Log or process the response data
      console.log('NFT stats', response.status);

      if (response.status === 200) {
        const data = await response.data;
        console.log('nft stat data', data);
        res.status(200).json(data);
      } else {
        throw new Error(`Failed to fetch data from OpenSea, status: ${response.status}`);
      }
    } catch (error) {
      console.log('error', error);
      res.status(500).json({ error: error instanceof Error ? error.message : 'An error occurred' });
    }
  
}
