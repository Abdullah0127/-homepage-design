"use client"; // Add this line at the very top

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"; // Importing an icon for the avatar

// Define the type for the categories
type Category = "sports" | "computers" | "shoes";  // Define the valid keys for categoryImages

function HeroOne() {
  // Set the selectedCategory state with the Category type
  const [selectedCategory, setSelectedCategory] = useState<Category>("sports");

  // Category Images
  const categoryImages: Record<Category, string> = {
    sports: "/Images/banner.png",  // Replace with actual image paths
    computers: "/Images/banner.png",
    shoes: "/Images/banner.png",
  };

  return (
    <div className="flex w-full h-full">
      {/* Left side - Navigation */}
      <div className="w-64 bg-gray-100 p-4 ml-32 mt-4 rounded-lg">
        <ul className="space-y-4">
          <li>
            <Link href="#" onClick={() => setSelectedCategory("sports")}>
              Sports
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("computers")}>
              Automobiles
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("computers")}>
              Computer Tech
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("computers")}>
              Home Interiors
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("shoes")}>
              Shoes
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("shoes")}>
              Clothes and Wear
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("shoes")}>
              Tools, Equipment
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setSelectedCategory("shoes")}>
              Machinery Tools
            </Link>
          </li>
        </ul>
      </div>

      {/* Middle section - Images based on selected category */}
      <div className="w-2/4 flex justify-center items-center p-4">
        <div className="w-auto">
          {/* Display the selected category image using next/image */}
          <Image
            src={categoryImages[selectedCategory]}
            alt={selectedCategory}
            layout="intrinsic" // Ensures the image has its own intrinsic size
            width={700} // Set width
            height={320} // Set height to 320px (20rem)
            className="object-cover" // Ensures the image covers the area, cropping if necessary
          />
        </div>
      </div>

      {/* Right side - Welcome and Message Box */}
      <div className="flex flex-col items-center space-y-4 mt-4">
        {/* Welcome Box */}
        <div className="w-56 h-48 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
          <FaUserCircle size={50} className="text-blue-500 mb-2" /> {/* Circle avatar */}
          <p className="text-lg font-semibold mb-2">Hi, User!</p>
          <p className="text-sm text-gray-600 mb-4">Let get started</p>
          <button className="bg-white text-blue-500 px-4 py-2 h-10 w-40 rounded-lg">
            Join Now
          </button>
        </div>

        {/* Red Message Box */}
        <div className="w-56 h-40 rounded-lg bg-red-500 flex items-center justify-center">
          <p className="text-white p-4 text-lg font-semibold">
           Get us 10% USD for free supplier
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
