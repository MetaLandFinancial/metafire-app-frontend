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
  const { collectionSlug } = req.query;
  console.log('collectionSlug', collectionSlug);
  const PROXY_URL = process.env.PROXY_URL||'';


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
  
      const response = await axios.get(`https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`, requestOptions);
  
  
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
