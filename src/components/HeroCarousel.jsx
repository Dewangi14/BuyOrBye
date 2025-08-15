import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    {
        imgUrl : "/images/mouse.jpeg",
        alt:"mouse"
    },
    {
        imgUrl : "/images/airpods.jpg",
        alt:"airpods"
    },
    {
        imgUrl : "/images/headphones.jpg",
        alt:"headphones"
    },
    {
        imgUrl : "/images/smartwatch.jpg",
        alt:"smartwatch"
    },
]
const HeroCarousel = () => {
  return (
    <div className="hero-carousel mt-5">

<Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>

    {
        heroImages?.map((item, idx)=>{
            return(

                
                <img src={item?.imgUrl} alt={item?.alt} width={60} height={100} key={item?.alt} className="object-cover xl:h-[700px] h-full w-full rounded-4xl"/>
           

            )
        })
    }
            
            </Carousel>

    </div>
  )
}

export default HeroCarousel