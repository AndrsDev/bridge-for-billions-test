import { NextApiRequest, NextApiResponse } from 'next'

const DISCOGS_CONSUMER_KEY = process.env.DISCOGS_CONSUMER_KEY;
const DISCOGS_CONSUMER_SECRET = process.env.DISCOGS_CONSUMER_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(`https://api.discogs.com/database/search?=&key=${DISCOGS_CONSUMER_KEY}&secret=${DISCOGS_CONSUMER_SECRET}`);
    const data = await response.json();
    res.statusCode = 200
    res.json(data.results);
  } catch (e){
    res.statusCode = 400
    res.json(null)
  }
}
