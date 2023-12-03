import connectMongo from "@/app/utils/connect-projects-mongo";
import Design from "@/model/Design";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();
    const designs = await Design.find();
    return NextResponse.json({ designs }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Server down", err }, { status: 500 });
  }
}
