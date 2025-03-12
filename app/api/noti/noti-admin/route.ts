import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // อ่านข้อมูลจาก body
        const body = await req.json();

        // ตรวจสอบข้อมูล (optional)
        if (!body.productName || !body.quantity || !body.price) {
            return NextResponse.json({ message: "Invalid request data" }, { status: 400 });
        }

        // จำลองการบันทึกลงฐานข้อมูล
        console.log("🛒 Order received:", body);

        // ส่ง response กลับไป
        return NextResponse.json({ message: "Order received", data: body });
    } catch (error) {
        return NextResponse.json({ message: "Error processing request", error: error }, { status: 500 });
    }
}