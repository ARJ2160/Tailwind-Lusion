import React from 'react';

const Navbar = ({ toggle }) => {
    return (
        <div className="navbar h-20 flex sm:justify-around justify-between items-center bg-transparent px-5">
            <div className="navbar-links">
                <ul className="nav-links xl:flex hidden">
                    <select className="mr-5" name="USD" id="">
                        <option value="USD">USD</option>
                        <option value="USD">INR</option>
                        <option value="USD">EUR</option>
                    </select>
                    <li className="mr-5">
                        <a href="/">Home</a>
                    </li>
                    <li className="mr-5">
                        <a href="/">Shop</a>
                    </li>
                    <li className="mr-5">
                        <a href="/">Product</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-logo flex flex-wrap justify-center items-center">
                <h1 className="nav-logo-image">
                    <a href="/">
                        <img className="h-8" src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/Logo2.png?v=1605760886" alt="Navbar-Logo" />
                    </a>
                </h1>
            </div>
            <div className="navbar-icons xl:flex justify-end hidden">
                <ul className="xl:flex justify-around hidden">
                    <li className='mr-5'>Pages</li>
                    <li className='mr-5'>Elements</li>
                    <li className='mr-5'>Blog</li>
                </ul>
                <div className="navbar-icons-search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-5 cursor-pointer" fill="#000" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
                    </svg>
                </div>
                <div className="navbar-icons-user">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-5 cursor-pointer" fill="#000" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                    </svg>
                </div>
                <div className="navbar-icons-user">
                    <svg width="24" height="24" fill="#000" className="mr-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                </div>
                <div className="navbar-icons-user">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-5 cursor-pointer" fill="#000" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
                    </svg>
                </div>
            </div>
            <div className="navbar-toggler xl:hidden block" onClick={ toggle }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" fill="#000"/>
                </svg>
            </div>
        </div>
    )
};

export default Navbar;
