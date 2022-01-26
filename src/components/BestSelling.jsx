import React from 'react';
import Basket from "../assets/basket.svg"
import Search from "../assets/search.svg"
import Compare from "../assets/compare.svg"

const BestSelling = () => {
    return (
        <div className="best-selling p-10 h-fit">
            <div className="best-selling-header flex items-center justify-between py-10">
                <h1 className="lg:text-6xl sm:text-4xl text-4xl mr-10">Best Selling</h1>
                <p className="md:text-lg text-base text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                <div className="best-selling-card group">
                    <div className="best-selling-image">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Layer-133-1_900x.jpg?v=1613979352" alt="" />
                            <div className="tooltips group-hover:scale-100">
                                <div className="basket">
                                    <img src={Basket} alt="" />
                                </div>
                                <div className="search">
                                    <img src={Search} alt="" />
                                </div>
                                <div className="compare">
                                    <img src={Compare} alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8 text-gray-500">Quilted Guillet with Hood</h1>
                            <p className="text-xl">$ 179.89</p>
                        </a>
                    </div>
                </div>
                <div className="best-selling-card">
                    <div className="best-selling-image group">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Layer-134_360x.jpg?v=1613978975" alt="" />
                            <div className="tooltips group-hover:scale-100">
                                <div className="basket">
                                    <img src={Basket} alt="" />
                                </div>
                                <div className="search">
                                    <img src={Search} alt="" />
                                </div>
                                <div className="compare">
                                    <img src={Compare} alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8 text-gray-500">Short Straight Coat</h1>
                            <p className="text-xl">$ 410.00</p>
                        </a>
                    </div>
                </div>
                <div className="best-selling-card">
                    <div className="best-selling-image group">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Layer-142_360x.jpg?v=1613979206" alt="" /> 
                            <div className="tooltips group-hover:scale-100">
                                <div className="basket">
                                    <img src={Basket} alt="" />
                                </div>
                                <div className="search">
                                    <img src={Search} alt="" />
                                </div>
                                <div className="compare">
                                    <img src={Compare} alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8 text-gray-500">Shearling Jacket</h1>
                            <p className="text-xl">$ 459.99</p>
                        </a>
                    </div>
                </div>
                <div className="best-selling-card">
                    <div className="best-selling-image group">
                        <a href="/">
                            <img src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/Untitled-2_360x.jpg?v=1613978783" alt="" />
                            <div className="tooltips group-hover:scale-100">
                                <div className="basket">
                                    <img src={Basket} alt="" />
                                </div>
                                <div className="search">
                                    <img src={Search} alt="" />
                                </div>
                                <div className="compare">
                                    <img src={Compare} alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="accessory-details">
                        <a className="items-center" href="/">
                            <h1 className="text-xl mr-8 text-gray-500">Puffer Gillet</h1>
                            <p className="text-xl">$ 410.00</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BestSelling;

