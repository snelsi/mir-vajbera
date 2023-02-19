import { NextResponse } from "next/server";
import path from "path";
import { readdir } from "fs/promises";

export async function GET() {
  const imagesPath = path.resolve(process.cwd(), "public", "images");
  const images = await readdir(imagesPath);

  // NextResponse extends the Web Response API
  return NextResponse.json({ images });
}
