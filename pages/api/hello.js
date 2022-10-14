// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  if (req.method === "POST") {
    console.log("first", req.body);
    // const data = req.body.bodyData;
  }
}
