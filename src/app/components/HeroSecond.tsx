"use client"; // Add this line at the very top
import Image from "next/image";
import { useState, useEffect } from "react";


function HeroSecond() {
    const targetDate = "2024-12-31T23:59:59"; // Set your target date here
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    function calculateTimeLeft() {
        const now = new Date().getTime();  // Convert current date to timestamp
        const target = new Date(targetDate).getTime();  // Convert target date to timestamp
        const difference = target - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className="flex flex-wrap gap-4  ">
            <div className="w-64 h-48 border ml-32 mt-7 rounded-lg p-4 ">
                <p className="font-bold">Deals and offers</p>
                <p>Hygiene Equipment</p>
                <div className="mt-4 bg-white p-2 rounded-lg text-center">
                    {/* <p className="font-semibold">Time Remaining</p> */}
                    <div className="flex justify-center space-x-2">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-sm">{timeLeft.days}d</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-sm">{timeLeft.hours}h</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-sm">{timeLeft.minutes}m</p>
                        </div>
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-sm">{timeLeft.seconds}s</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* first one image  */}
            <div className=" w-48 h-48  border mt-7 rounded-lg p-4">
                <div className="flex justify-center items-center">
                    <Image
                        src="/Images/image 35.png"
                        alt="Show error"
                        layout="intrinsic"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p>Smart Watches</p>
                    <div className="bg-green-300  rounded-lg w-14 flex justify-center">
                    <p>-25%</p>
                </div>
                </div>
                
                {/* second one image  */}
            </div>
            <div className="w-48 h-48  border mt-7 rounded-lg p-4">

            <div className="flex justify-center items-center">
                    <Image
                        src="/Images/image 34.png"
                        alt="Show error"
                        layout="intrinsic"
                        width={90}
                        height={90}
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p>Laptops</p>
                    <div className="bg-green-300  rounded-lg w-14 flex justify-center">
                    <p>-25%</p>
                </div>
                </div>
            </div>

            {/* third one image  */}
            <div className="w-48 h-48  border mt-7 rounded-lg p-4">
            <div className="flex justify-center items-center">
                    <Image
                        src="/Images/image 28.png"
                        alt="Show error"
                        layout="intrinsic"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p>Cameras</p>
                    <div className="bg-green-300  rounded-lg w-14 flex justify-center">
                    <p>-25%</p>
                </div>
                </div>

            </div>

            {/* fourth one image  */}
            <div className="w-48 h-48  border mt-7 rounded-lg p-4">
            <div className="flex justify-center items-center">
                    <Image
                        src="/Images/image 29.png"
                        alt="Show error"
                        layout="intrinsic"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p>Headphones</p>
                    <div className="bg-green-300  rounded-lg w-14 flex justify-center">
                    <p>-25%</p>
                </div>
                </div>

            </div>

            {/* fifth one image  */}
            <div className="w-48 h-48  border mt-7 rounded-lg p-4">
            <div className="flex justify-center items-center">
                    <Image
                        src="/Images/image 23.png"
                        alt="Show error"
                        layout="intrinsic"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p>Canon Camera</p>
                    <div className="bg-green-300  rounded-lg w-14 flex justify-center">
                    <p>-25%</p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default HeroSecond;
