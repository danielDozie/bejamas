import React from 'react';

export default function Cart() {
  const backImage = '../images/pocSlider.jpeg';
  return (
    <>
      <div className="block invisible">
        <div className="relative">
          <div className="absolute bg-white z-50 text-black w-full md:w-1/3 h-64 top-0 right-0 font-400 text-center border-4">
            <div className="flex justify-end p-4 mb-2">
              <span>
                <a href="">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L20 20" stroke="black" stroke-width="4" />
                    <path d="M2 20L20 2" stroke="black" stroke-width="4" />
                  </svg>
                </a>
              </span>
            </div>
            <div className="w-full px-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-black font-bold justify-start text-left text-lg mt-2">Samurai King Resting</h2>
                  <h1 className="text-gray-500 font-normal text-2xl justify-start text-left mt-2">$10000</h1>
                </div>
                <div>
                  <div className="bg-center bg-cover h-20 w-32 object-cover" style={{ backgroundImage: `url(${backImage})` }} />
                </div>
              </div>
              <div className="border-solid border-gray-300 border-b-2 mt-6 w-full mb-4"></div>
              <div className="">
                <button class="border-2 border-black bg-white text-black w-full h-12 text-2xl text-center">
                  <span class="place-content-center uppercase">Clear</span>
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
