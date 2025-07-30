const API_KEY = "fb9d7505413843099bfe090d6dc86d9c";

export async function fetchNews() {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ca&language=en&category=health&q=physiotherapy OR medical`
    );

    if (!response.ok) {
      throw new Error("News API Error");
    }

    const { results } = await response.json();
    return results || [];
  } catch (error) {
    console.error("News fetch failed:", error.message);
    return [];
  }
}
