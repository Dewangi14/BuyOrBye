import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { useState } from 'react'

const Searchbar = () => {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isValidAmazonProductURL = (url) => {

      try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;
         if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')){
           return true;
         }
      }catch (error){
        return false;
      }

    }
    const handleSubmit = async (e) => {

      e.preventDefault();
      const isValidLink = isValidAmazonProductURL(prompt);
      if(!isValidLink) return alert('Please provide a valid Amazon link')
      try{
        setIsLoading(true);

        //Scrape the product page

        const response = await fetch('/api/scrape', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: prompt })
        });
  
        const result = await response.json();
  
        if (!response.ok) throw new Error(result.error);
        console.log("Scraped Product:", result.data);
  
        // You can store the result to state here if needed

      }catch(e){
        console.log("Error : ", e)
      }
      finally{
        setIsLoading(false)
      }
    }
  return (
    <form className="w-full flex items-center justify-between border border-stone-200 rounded-xl p-1 mt-10" onSubmit={handleSubmit}>

        <div className="w-5/6">
            <input className="outline-none w-full h-full p-5 xl:p-4 text-lg placeholder:text-lg" placeholder={"Enter product link"} value={prompt} onChange={(e)=>{setPrompt(e.target.value)}}/>
        </div>

        <div className="h-full w-1/6">

            <button type="submit" disabled={isLoading} className={`p-5 xl:p-4 ${isLoading? "bg-indigo-300" :"bg-indigo-500"} rounded-lg text-white w-full h-full text-lg font-semibold`}>Search</button>
            
        </div>

    </form>
  )
}

export default Searchbar