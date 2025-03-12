import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { productName, quantity, price } = req.body;

        // จำลองการบันทึกลงฐานข้อมูล
        console.log("🛒 Order received:", { productName, quantity, price });

        return res.status(200).json({ message: "Order received", data: req.body });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}