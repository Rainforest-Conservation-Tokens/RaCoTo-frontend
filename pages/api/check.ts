import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  isValid?: boolean;
  reason?: string;
};

const whitelist = [
  "0x77bC837f694E981DDd9660bB644800d25425e936",
  "0x9d8c061125e2c416F472feC3A18C3fD48E88bA18",
];

export default function check(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(405).send({
      status: "ERROR",
      reason: "Method not allowed",
    });
    return;
  }
  console.log(req.body);
  console.log(req.body.address);
  //   console.log(req.body);
  const address = req.body.address;
  if (!address) {
    res.status(400).send({
      status: "ERROR",
      reason: "Missing address",
    });
    return;
  }
  const isValid = whitelist.includes(address);
  res.status(200).send({
    status: "SUCCESS",
    isValid,
  });
}
