export function extractPrice(...elements) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) {
      // Match the first occurrence of a price pattern (with optional comma)
      const match = priceText.match(/\d{1,3}(?:,\d{3})*(?:\.\d{2})?/);

      if (match) {
        // Remove commas for a clean numeric value
        return match[0].replace(/,/g, '');
      }
    }
  }
  return '';
}
