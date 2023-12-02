import connectMongo from "@/app/utils/connect-projects-mongo";
import Experience from "@/model/Experience";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();
    const experiences = await Experience.find();
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Server down", err }, { status: 500 });
  }
}
