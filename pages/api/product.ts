import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../app/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const result = await db.query('SELECT * FROM product');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
