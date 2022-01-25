import React from 'react';
import HoverCards from './HoverCards';
import BestSelling from "./BestSelling"
import DiscountBanner from "./DiscountBanner"
import TrendingOutfits from "./TrendingOutfits"

const Hero = () => {
    return (
        <>
            <div className="hero pl-5 pr-5 h-screen flex flex-col justify-start lg:justify-center lg:text-left md:text-center text-center">
                <h1 className="lg:text-8xl sm:text-6xl text-5xl tracking-wide md:ml-16 pt-60 lg:mb-60 mb-16">The White <br /> Collection</h1>
            </div>
            <HoverCards />
            <BestSelling />
            <DiscountBanner />
            <TrendingOutfits />
        </>
    )
};

export default Hero;
