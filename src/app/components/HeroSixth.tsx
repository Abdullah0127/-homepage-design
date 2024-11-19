import Image from "next/image";
import { MagnifyingGlassIcon, ShieldCheckIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid"; // Import Heroicons


function HeroSixth() {
    return (
        <div>


            <div className="ml-28 mr-20  mt-5 ">
                <p className="text-2xl font-bold">Recommended Items</p>
                <div className="grid grid-cols-5 gap-4 mt-3 ">
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/sweeter1.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">T-shirts with multiple <br /> multiple colours for men</p>
                        </div>
                    </div>

                    {/* 2nd div used  */}

                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 2.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Jeans short for men <br /> blue colour</p>
                        </div>
                    </div>

                    {/* 3rd div used  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 30.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-2">
                            <p className="font-bold">$12.50</p>
                            <p className="text-sm">Brown medium coat <br /> medium size</p>
                        </div>
                    </div>

                    {/* 4th div used  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 24.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$35.00</p>
                            <p className="text-sm">lether wallet</p>
                        </div>
                    </div>

                    {/* 5th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 26.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Jeans bag for travel <br />for men</p>
                        </div>
                    </div>

                    {/*6th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/Bitmap.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Trouser for men</p>
                        </div>
                    </div>

                    {/* 7th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 86.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Head set for gaming <br /> with mic</p>
                        </div>
                    </div>
                    {/* 8th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 26.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Jeans bag for travel <br />for men</p>
                        </div>
                    </div>

                    {/* 9th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 90.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Sand Bowl </p>
                        </div>
                    </div>

                    {/* 10th div used for  */}
                    <div className=" h-64 w-full border bg-white rounded-md">
                        <Image src="/Images/image 85.2.png" alt=" show error" layout="intrinsic"
                            width={170}
                            height={170} className="ml-10 "></Image>
                        <div className="ml-3 mt-3">
                            <p className="font-bold">$10.30</p>
                            <p className="text-sm">Electric  <br /> Tea port</p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
            </div>


          {/* Our Extra Services Section */}
<div className="ml-28 mr-20  mt-4 p-4 relative">
<p className="text-2xl font-bold">Our Extra Services</p>

    <div className="flex gap-7 ">
        {/* 1st Service */}
        <div className="relative mt-3 border bg-white rounded-md ">
            {/* Image with Darker Overlay */}
            <div className="relative b">
                <Image
                    src="/Images/image 108.png"
                    alt="Service Hub"
                    layout="intrinsic"
                    width={300}
                    height={160}
                    className="filter brightness-100 saturate-200"
                />
                {/* Optional overlay for dark effect */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Search Icon */}
            <div className="absolute top-32 left-60 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <MagnifyingGlassIcon className="h-12 w-12 text-gray-500 bg-white rounded-full p-2 shadow-lg" />
            </div>

            {/* Text */}
            <p className="ml-4 mt-4 font-bold">Source from <br /> Industry Hubs</p>
        </div>

        {/* 2nd Service - Custom Icon */}
        <div className="relative mt-3 border bg-white rounded-md">
            <div className="relative ">
                <Image
                    src="/Images/image 104.png"
                    alt="Custom Service"
                    layout="intrinsic"
                    width={300}
                    height={160}
                    className="filter brightness-100 saturate-200"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            <div className="absolute top-32 left-60 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <UserIcon className="h-12 w-12 text-blue-500 bg-white rounded-full p-2 shadow-lg" />
            </div>

            <p className="ml-4 mt-4 font-bold">Personalized <br /> Solutions</p>
        </div>

        {/* 3rd Service - Order Icon */}
        <div className="relative mt-3 border bg-white rounded-md">
            <div className="relative">
                <Image
                    src="/Images/image 106.png"
                    alt="Order Services"
                    layout="intrinsic"
                    width={300}
                    height={160}
                    className="filter brightness-100 saturate-200"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            <div className="absolute top-32 left-60 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <ShoppingCartIcon className="h-12 w-12 text-green-500 bg-white rounded-full p-2 shadow-lg" />
            </div>

            <p className="ml-4 mt-4 font-bold">Order <br /> Management</p>
        </div>

        {/* 4th Service - Security Icon */}
        <div className="relative mt-3 border bg-white rounded-md">
            <div className="relative">
                <Image
                    src="/Images/image 107.png"
                    alt="Security Services"
                    layout="intrinsic"
                    width={300}
                    height={160}
                    className="filter brightness-100 saturate-200"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            <div className="absolute top-32 left-60 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <ShieldCheckIcon className="h-12 w-12 text-red-500 bg-white rounded-full p-2 shadow-lg" />
            </div>

            <p className="ml-4 mt-4 font-bold">Secure <br /> Transactions</p>
        </div>
    </div>
</div>


        </div>

    );
}

export default HeroSixth;