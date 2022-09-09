// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { HelloWorld } from "lib";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const message = HelloWorld();

  res.status(200).json({ message: message })
}
