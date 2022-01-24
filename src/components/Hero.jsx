import React from 'react';
import HoverCards from './HoverCards';

const Hero = () => {
    return (
        <>
            <div className="hero pl-5 pr-5 min-h-screen flex flex-col justify-start lg:justify-center lg:text-left md:text-center text-center font-mono">
                <h1 className="lg:text-8xl sm:text-6xl text-6xl tracking-wide md:ml-16 pt-60 lg:mb-60 mb-16">The White <br /> Collection</h1>
            </div>
            <HoverCards />
        </>
    )
};

export default Hero;
