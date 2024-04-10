// pages/api/opensea/stats.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import {HttpsProxyAgent} from 'https-proxy-agent';
// const HttpsProxyAgent = require('https-proxy-agent');
import fetch from 'node-fetch';
const axios = require('axios');
var request = require('request')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { collectionSlug } = req.query;
  console.log('collectionSlug', collectionSlug);


    try {
      const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:7890');
      // const response = await fetch(`https://api.opensea.io/api/v2/collections/boredapeyachtclub/stats`, {
      //   method: 'GET',
      //   headers: {
      //     'Accept': 'application/json',
      //     'X-API-KEY': '94e2fcc99ba841e8abaf09eed154e8ed' // Be cautious with your API keys
      //   },
      //   agent: 'http://127.0.0.1:7890'

      // });

      const response = await axios.get(`https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`, {
        httpsAgent: proxyAgent,
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': '94e2fcc99ba841e8abaf09eed154e8ed',
        },
      });
  
      // Log or process the response data
      console.log('NFT stats', response.status);
      
      // let nft;
      // request({
      //   url: `https://api.opensea.io/api/v2/collections/boredapeyachtclub/stats`,
      //   headers: {
      //     'Accept': 'application/json',
      //     'X-API-KEY': '94e2fcc99ba841e8abaf09eed154e8ed' 
      //   },
      //   host: '127.0.0.1', //我电脑上启动的ss代理地址
      //   port: 7890 //代理端口
      // }, function(err:any, resp:any, body:any) {
      //   // console.log(body)
      //   nft = body;
      // })
      // console.log('response', nft);

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
