import { galleryData } from "@/data/gallery";
export async function GET() { return Response.json(galleryData); }
