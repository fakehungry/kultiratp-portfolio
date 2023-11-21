import connectMongo from "@/app/utils/connect-projects-mongo";
import Project from "@/model/Project";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Server down", err }, { status: 500 });
  }
}
