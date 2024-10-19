import { newsData } from "@/data/newsData";

export async function GET(req, { params }) {
  const { id } = params;
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return new Response(JSON.stringify({ message: "News not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(newsItem), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
