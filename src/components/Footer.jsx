import React from 'react';
// import Facebook from "../assets/facebook.svg"
// import Twitter from "../assets/twitter.svg"
// import Pinterest from "../assets/pinterest.svg"

const Footer = () => {
    return (
        <div className="footer p-10 ">
            <div className="grid md:grid-cols-6 gap-8 mb-10">
                <div className="company-list col-span-1">
                    <h1 className="text-3xl mb-5">Company</h1>
                    <ul className="text-gray-500">
                        <li className='mb-5'>Contact</li>
                        <li className='mb-5'>About Us</li>
                        <li className='mb-5'>Store Locations</li>
                        <li className='mb-5'>Careers</li>
                    </ul>
                </div>
                <div className="help-list col-span-1">
                    <h1 className="text-3xl mb-5">Help</h1>
                    <ul className="text-gray-500">
                        <li className='mb-5'>Order Tracking</li>
                        <li className='mb-5'>FAQs</li>
                        <li className='mb-5'>Privacy Policy</li>
                        <li className='mb-5'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="company-list sm:col-span-1 col-span-2">
                    <h1 className="text-3xl mb-10">Follow Us</h1>
                    <h1 className="text-gray-500 mb-10">And get free shipping on all our Products</h1>
                    {/* <ul className="text-gray-500 grid grid-cols-3 gap-5">
                        <li><img className='footer-icons' src={Facebook} alt="" /></li>
                        <li><img className='footer-icons' src={Twitter} alt="" /></li>
                        <li><img className='footer-icons' src={Pinterest} alt="" /></li>
                    </ul> */}
                </div>
                <div className="company-list col-span-3">
                    <h1 className="text-2xl mb-10 ">Sign up now & get 10% off</h1>
                    <h1 className="mb-5 text-gray-500">Be the first to know about out new arrivals anbd exculsive offers</h1>
                    <div className="footer-input grid sm:grid-cols-3 row-span-2 gap-8">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="footer-input-field p-3 col-span-2"
                        />
                        <div className="flex justify-center sm:col-span-1 col-span-2 sm:row-span-1 row-span-2 text-white text-center bg-black items-center">SUBSCRIBE</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-gray-500">
                <div className="flex">
                    <div className="mr-5">Privacy Policy</div>
                    <div>Terms & Conditions</div>
                </div>
                <div>
                    @2020 Lusion- ARJ's Theme
                </div>
            </div>
        </div>
    );
};

export default Footer
