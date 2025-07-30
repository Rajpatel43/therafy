// src/app/api/physio-news/route.js
import { scrapePhysioNews } from "@/lib/scrape-news";

export async function GET() {
  try {
    const news = await scrapePhysioNews();
    return Response.json({ news });
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return new Response("News fetch error", { status: 500 });
  }
}
