import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import React from 'react'

const Homepage = () => {
  return (
    <div className="container flex flex-col gap-5 w-full mx-auto">

            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 flex flex-col xl:flex-row items-center justify-center xl:gap-20 gap-10">

                <div className="flex flex-col gap-10 xl:w-1/2 w-full">

                <div className="flex flex-col gap-8 text-center xl:text-start">
                <h1 className="text-4xl xl:text-[65px] font-bold title-font text-gray-900 mb-4">Unleash the power of<br/><span className="font-bold text-4xl xl:text-[60px]">&nbsp;Buy<span className="text-indigo-600">Or</span>Bye</span></h1>
                <p className="text-base leading-relaxed mx-auto text-gray-500">Powerful, self-serve product and growth analytics to help you convert, engage and retain more.<br/>Smart shopping starts here! </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                </div>


                <Searchbar/>
                </div>

                <div className="w-full md:w-1/2 relative">
                <HeroCarousel/>

                <img alt="hand-drawn-arrow" loading="lazy" className="absolute max-xl:hidden -left-[18%] -bottom-[8%] z-0" src="/images/hand-drawn-arrow.svg"/>
                </div>
            </div>
            </section>

    </div>
  )
}

export default Homepage