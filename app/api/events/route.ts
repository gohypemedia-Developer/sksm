import { foundationEvents } from "@/data/events";
export async function GET() { return Response.json({ events: foundationEvents }); }
