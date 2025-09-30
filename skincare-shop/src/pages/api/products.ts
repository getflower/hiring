// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "@/data/products";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products);
}
