import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import HomeData from "@/models/HomeData";

export async function GET() {
    console.log("START GET");

    try {
        await connectDB();

        const homeData = await HomeData.findOne({}).lean();

        if (!homeData) {
            return NextResponse.json(
                { message: "No home data found" },
                { status: 404 }
            );
        }

        return NextResponse.json(JSON.parse(JSON.stringify(homeData)));
    } catch (error) {
        console.error("GET /api/home error:", error);

        return NextResponse.json(
            { message: "Failed to fetch home data" },
            { status: 500 }
        );
    }
}