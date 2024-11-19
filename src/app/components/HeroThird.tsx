import Image from 'next/image';
import React from 'react';


function HeroThird() {
  return (
    <div>
      <div className="grid grid-cols-5 ml-28 mr-20 p-2 ">
        <div
          className="bg-white bg-opacity-80  h-64 border p-5  col-span-1  row-span-3 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Images/image 92.png")' }}
        >
          <p className='font-bold ml-2'>Home and <br /> outdoor</p>
          <input type="button" value="Source now" className='bg-white text-black w-28 cursor-pointer mt-2 rounded-lg' />
        </div>

        {/* 2nd div  */}
        <div className="bg-white bg-opacity-80  p-5 border  h-32 relative">
          <p className=''>Soft Chairs</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/1.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>

        {/* 3rd div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Sofa & Chairs</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/6.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>

        {/* 4th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Beds</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/5.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>

        {/* 5th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Water Mugs</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/3.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>
        {/* 6th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Kitchen Mixer</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/9.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>
        {/* 7th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Blenders</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/8.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>
        {/* 8th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Home Applience</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/7.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>
        {/* 9th div */}
        <div className="bg-white bg-opacity-80  p-5 border relative h-32">
        <p className=''>Small Tree</p>
          <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
          <div className='absolute bottom-0 right-0'> <Image src="/Images/4.png" alt='Show error' layout="intrinsic"
            width={90}
            height={90}
            className=""></Image></div>
        </div>      </div>
    </div>
  );
}

export default HeroThird;
