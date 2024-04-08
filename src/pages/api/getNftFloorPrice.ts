// pages/api/opensea/stats.ts
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { collectionSlug } = req.query;
  console.log('collectionSlug', collectionSlug);


  // if (req.method === 'GET') {
  //   try {
  //     const response = await fetch(`https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`, {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'X-API-KEY': '94e2fcc99ba841e8abaf09eed154e8ed' // Be cautious with your API keys
  //       }
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       res.status(200).json(data);
  //     } else {
  //       throw new Error(`Failed to fetch data from OpenSea, status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error instanceof Error ? error.message : 'An error occurred' });
  //   }
  // } else {
  //   res.setHeader('Allow', ['GET']);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
}
