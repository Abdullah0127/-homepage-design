import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className="flex items-center justify-center text-center mt-12 bg-slate-200 h-60">
                <div>
                    <h1 className="font-bold text-2xl">Subscribe to our newsletter</h1>
                    <p className="text-sm text-gray-600">
                        Get daily news on upcoming offers from many suppliers all over the world.
                    </p>
                    <form className="mt-4">
                        <div className="relative">
                            <FaEnvelope className="absolute top-9 left-10 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                className="pl-8 border border-gray-300 rounded-md p-2 w-72"
                            />
                            <input
                                type="button"
                                value="Subscribe"
                                className="mt-4 bg-blue-500 text-white py-2 ml-3 px-4 rounded-md"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Main footer content */}
            <div className="flex flex-col h-80 items-center justify-center   py-8">
                {/* Logo and Brand Name */}
                <div className="w-10 h-full flex justify-between items-center mb-4">
                    <Image
                        className="w-14 h-5"
                        src="/Images/logo-symbol.png"
                        alt="Logo symbol"
                        layout="responsive"
                        width={56}
                        height={20}
                    />
                    <h1 className="text-3xl font-bold text-blue-500">Brand</h1>
                </div>

                {/* Paragraph */}
                <p className="text-sm text-gray-600 text-center mb-4">Best information about the company <br /> Everyone gets excited</p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-4">
                    <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                    <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600" />
                    <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
                    <FaInstagram className="text-pink-600 text-2xl cursor-pointer hover:text-pink-800" />
                    <FaYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-800" />
                </div>

                {/* Footer Links (Optional) */}
                <div className="flex justify-between w-full max-w-4xl mx-auto mb-4">
                    <div>
                        <ul>
                            <li className='font-bold'>About</li>
                            <li>About us</li>
                            <li>Find Store</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Partership</li>
                            
                            <li>About Us</li>
                            <li>Find store</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>Information</li>
                            <li>Help center</li>
                            <li>Money Refund </li>
                            <li>Shipping</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-bold'>For users</li>
                            <li>Login</li>
                            <li>Register </li>
                            <li>Settings</li>
                            <li>My Orders</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* import Image from 'next/image'; */}

<div className="flex justify-between items-center py-4 px-6 bg-slate-200">
    <p>@ 2024 Ecommerce</p>
    <div className="flex items-center space-x-2">
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            alt="USA Flag"
            width={24}
            height={16}
            className="object-contain"
        />
        <select className="text-gray-500 text-[12px] w-[70px]" name="language" id="language">
            <option value="English">English</option>
            <option value="French">French</option>
        </select>
    </div>
</div>

        </div>
    );
}

export default Footer;
