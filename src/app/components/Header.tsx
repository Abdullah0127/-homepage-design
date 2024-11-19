"use client"; // Add this line at the very top

import Link from "next/link";
import { FaUser, FaEnvelope, FaShoppingCart, FaClipboardList, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import Image from "next/image";

function Header() {
    const [category, setCategory] = useState("all");
    const [, setHelpOption] = useState("faq");
    const [] = useState("USD");
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [helpDropdown, setHelpDropdown] = useState(false);
    const [] = useState(false);

    return (
        <div>
            {/* Main Header */}
            <div className="w-full h-[80px] flex justify-center items-center border-b border-gray-200">
                <div className="w-[80%] h-full flex justify-between items-center">
                    {/* Left side */}
                    <div className="flex">
                        <Image
                            className="w-14 h-5"
                            src="/Images/logo-symbol.png"
                            alt="Logo symbol"
                            layout="responsive"
                            width={56}    // Width to maintain aspect ratio
                            height={20}   // Height to maintain aspect ratio
                        ></Image>
                        <h1 className="text-3xl font-bold text-blue-500">Brand</h1>
                    </div>

                    {/* Search bar with categories and search button */}
                    <div className="flex items-center border border-blue-500 rounded overflow-hidden">
                        <select
                            className="p-2 border-r border-blue-500 text-gray-700"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home</option>
                            <option value="beauty">Beauty</option>
                            <option value="sports">Sports</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-2 w-64 focus:outline-none border border-blue-500"
                        />
                        <button className="bg-blue-400 text-white px-4 py-2">Search</button>
                    </div>

                    {/* Right side with icons and labels */}
                    <div>
                        <ul className="flex gap-x-8 mr-4 text-gray-500 ">
                            <li className="flex flex-col items-center">
                                <Link href={'/'}>
                                    <FaUser className="Header-icon-wrapper" title="Portfolio" />
                                </Link>
                                <span className="text-sm">Portfolio</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <Link href={'/messages'}>
                                    <FaEnvelope className="Header-icon-wrapper" title="Messages" />
                                </Link>
                                <span className="text-sm">Messages</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <Link href={'/orders'}>
                                    <FaClipboardList className="Header-icon-wrapper" title="Orders" />
                                </Link>
                                <span className="text-sm">Orders</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <Link href={'/cart'}>
                                    <FaShoppingCart className="Header-icon-wrapper" title="Cart" />
                                </Link>
                                <span className="text-sm">Cart</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* Second Navigation Header with dropdowns */}
            <div className="w-full h-[60px] flex justify-center items-center bg-gray-100 border-b-2">
                <div className="w-[80%] h-full flex justify-between items-center">
                    {/* Left side links with dropdowns */}
                    <div className="flex gap-x-6 text-gray-700">
                        {/* All Categories Dropdown */}
                        <div className="relative">
                            <span
                                className="cursor-pointer flex items-center gap-x-1"
                                onClick={() => setCategoryDropdown(!categoryDropdown)}
                            >
                                {category === "all" ? "All Categories" : category}
                                <FaCaretDown />
                            </span>
                            {categoryDropdown && (
                                <div className="absolute bg-white border border-gray-300 mt-1 p-2 w-40 shadow-lg">
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("all"); setCategoryDropdown(false); }}
                                    >
                                        All Categories
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("electronics"); setCategoryDropdown(false); }}
                                    >
                                        Electronics
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("fashion"); setCategoryDropdown(false); }}
                                    >
                                        Fashion
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("home"); setCategoryDropdown(false); }}
                                    >
                                        Home
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("beauty"); setCategoryDropdown(false); }}
                                    >
                                        Beauty
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setCategory("sports"); setCategoryDropdown(false); }}
                                    >
                                        Sports
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Help Dropdown */}
                        <div className="relative">
                            <span
                                className="cursor-pointer flex items-center gap-x-1"
                                onClick={() => setHelpDropdown(!helpDropdown)}
                            >
                                Help
                                <FaCaretDown />
                            </span>
                            {helpDropdown && (
                                <div className="absolute bg-white border border-gray-300 mt-1 p-2 w-40 shadow-lg">
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setHelpOption("faq"); setHelpDropdown(false); }}
                                    >
                                        FAQ
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setHelpOption("support"); setHelpDropdown(false); }}
                                    >
                                        Support
                                    </div>
                                    <div
                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                        onClick={() => { setHelpOption("contact"); setHelpDropdown(false); }}
                                    >
                                        Contact Us
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Projects and Offers Links */}
                        <Link href={'/projects'}>Projects</Link>
                        <Link href={'/offers'}>Offers</Link>
                    </div>

                    {/* Right side with Currency Dropdown */}
                    <div className="flex gap-4">
                        <select className="text-gray-500 text-[12px] w-[70px]" name="currency" id="currency">
                            <option value="USD $">USD $</option>
                            <option value="EUR $">EUR $</option>
                            <option value="INR">INR</option>
                        </select>


                        <select className="text-gray-500 text-[12px] w-[70px]" name="language" id="language">
                            <option value="English">English</option>
                            <option value="French">French</option>

                        </select>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
