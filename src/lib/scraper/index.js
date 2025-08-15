import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY; // set in .env
export async function scrapeAmazonProduct(url) {
  if (!url) return;

//   const username = String(process.env.BRIGHT_DATA_USERNAME);
//   const password = String(process.env.BRIGHT_DATA_PASSWORD);
//   const port = 33335;
//   const session_id = (1000000 * Math.random()) | 0;

//   const proxy = {
//     protocol: 'http',
//     host: 'brd.superproxy.io',
//     port,
//     auth: {
//       username: `${username}-session-${session_id}`,
//       password,
//     },
//   };

  try {
    // const response = await axios.get(url, {
    //   proxy,
    //   httpsAgent: false,
    //   httpAgent: false,
    // });

     // 1️⃣ Call ScraperAPI instead of Bright Data
     const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPERAPI_KEY}&url=${encodeURIComponent(url)}&country_code=us`;

     const response = await axios.get(scraperUrl, {
       timeout: 30000 // optional
     });

    const $ = cheerio.load(response.data);
    const title = $('#productTitle').text().trim();
    const currentPrice = extractPrice(
        $('.priceToPay span.a-price-whole'),
        $('a.size.base.a-color-price'),
        $('a-button-selected .a-color-base'),
        $('a.price.a-text-price'),
    )
    const originalPrice = extractPrice(
        $('#priceblock_ourprice'),
        $('.a-price.a-text-price span.a-offscreen'),
        $('#listPrice'),
        $('#priceblock_dealprice'),
        $('.a-size-base.a-color-price'),
    )

    // const image = $('#imgTagWrapperId img').attr('src');
    const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image');
    const imageUrls = Object.keys(JSON.parse(images))
    const outOfStock = $('#availablity span').text().trim().toLowerCase() === 'currently unavailable';
    const currency = $('.a-price-symbol').text().trim().slice(0,1);
    const discountRate = $('.savingsPercentage').text().replace(/[-%]/g,"");

    const data = {
        url, 
        currency : currency || '$',
        image : imageUrls[0],
        title,
        currentPrice : Number(currentPrice) || Number(originalPrice),
        originalPrice : Number(originalPrice) || Number(currentPrice),
        priceHistory  : [],
        discountRate : Number(discountRate),
        category : 'category',
        reviewsCount : 100,
        stars : 4.5,
        isOutOfStock: outOfStock,
        lowestPrice : Number(currentPrice) || Number(originalPrice),
        highestPrice : Number(originalPrice) || Number(currentPrice),
    }

    return data;

  } catch (error) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
