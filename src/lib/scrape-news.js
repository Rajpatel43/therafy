// src/lib/scrape-news.js
import * as cheerio from "cheerio";

export async function scrapePhysioNews() {
  const res = await fetch("https://physiotherapy.ca/news-updates", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const html = await res.text();
  const $ = cheerio.load(html);
  const newsItems = [];

  $(".news-item").each((i, el) => {
    const title = $(el).find(".news-title").text().trim();
    const link = "https://physiotherapy.ca" + $(el).find("a").attr("href");
    const date = $(el).find(".news-date").text().trim();

    if (title && link) {
      newsItems.push({ title, link, date });
    }
  });

  return newsItems.slice(0, 6); // Top 6 headlines
}
