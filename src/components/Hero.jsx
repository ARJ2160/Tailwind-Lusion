import BestSelling from './BestSelling';
import BottomNav from './BottomNav';
import DiscountBanner from './DiscountBanner';
import Footer from './Footer';
import HoverCards from './HoverCards';
import ImageGrid from './ImageGrid';
import React from 'react';
import TrendingOutfits from './TrendingOutfits';

const Hero = ({ cartToggle }) => {
  return (
    <>
      <div className='hero pl-5 pr-5 h-screen flex flex-col justify-start lg:justify-center lg:text-left md:text-center text-center mt-20'>
        <h1 className='lg:text-8xl sm:text-6xl text-5xl tracking-wide md:ml-16 pt-36 lg:mb-60 mb-16'>
          The White <br /> Collection
        </h1>
      </div>
      <HoverCards />
      <BestSelling />
      <DiscountBanner />
      <TrendingOutfits />
      <ImageGrid />
      <Footer />
      <BottomNav cartToggle={cartToggle} />
    </>
  );
};

export default Hero;
