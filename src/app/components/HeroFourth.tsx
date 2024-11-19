import Image from 'next/image';
import React from 'react';

function HeroFourth(){
    return (
        <div>
        <div className="grid grid-cols-5 ml-28 mr-20 p-2 ">
          <div
            className="bg-white bg-opacity-80  h-64 border p-5  col-span-1  row-span-3 bg-cover bg-center"
            style={{ backgroundImage: 'url("/Images/image 98.png")' }}
          >
            <p className='font-bold ml-2'>Consumer <br /> Electronics and <br /> Gadgets</p>
            <input type="button" value="Source now" className='bg-white text-black w-28 rounded-lg cursor-pointer mt-2' />
          </div>
  
          {/* 2nd div  */}
          <div className="bg-white bg-opacity-80  p-5 border  h-32 relative">
            <p className=''>Smart Watches</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/88.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
  
          {/* 3rd div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Cameras</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/6.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
  
          {/* 4th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Headphones</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/9.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
  
          {/* 5th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Tea pot</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/10.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
          {/* 6th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Gaming Set</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/5.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
          {/* 7th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Laptops & PC</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/7.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
          {/* 8th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Smart Phones</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/2.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>
          {/* 9th div */}
          <div className="bg-white bg-opacity-80  p-5 border relative h-32">
          <p className=''>Tecno Industry</p>
            <p className='text-gray-300 text-sm'>From <br /> USD 19</p>
            <div className='absolute bottom-0 right-0'> <Image src="/Images/1.1.png" alt='Show error' layout="intrinsic"
              width={90}
              height={90}
              className=""></Image></div>
          </div>      </div>
      </div>
    );
}
 export default HeroFourth;