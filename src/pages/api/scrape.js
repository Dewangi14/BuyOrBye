import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'Product URL is required' });

  try {
      connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(url);
    if(!scrapedProduct) return;
    return res.status(200).json({ status: true, data: scrapedProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
