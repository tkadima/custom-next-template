import { NextApiRequest, NextApiResponse } from 'next';
import { openDB } from '../../../database/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDB();
  const data = await db.all('SELECT * FROM your_table');
  res.status(200).json(data);
}
