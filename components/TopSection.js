import React from 'react';

const backImage='../images/pocSlider.jpeg';

export default function TopSection() {
  return (
    <>
    <div className="max-w-7xl mb-16 px-4 md:px-0">
          <div className="flex justify-between py-10 h-20 md:px-8 lg:px-0">
              <div className="text-dark text-2xl md:text-xl font-semibold"><h1>Samurai King Resting</h1></div>
              <button className="hidden md:block btn-lg w-40 h-7 bg-black text-center text-sm text-white font-500"> ADD TO CART</button>
          </div>

          <div className="flex">
            <div className="relative bg-local bg-center bg-cover w-full mt-3 object-cover" style={{backgroundImage: `url(${backImage})`, height: '500px'}}>
                <div className="bg-white text-black w-40 h-14 absolute bottom-0 left-0 font-400 text-center pt-4"><span className="place-content-center">Photo of the day</span></div>
            </div>
          </div>
            <div>
              <button className="md:hidden btn-lg w-full h-12 mt-5 bg-black text-center text-sm text-white font-500"> ADD TO CART</button>
            </div>

          <div className="mt-10">
              <div className="flex">
              <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-8/12">
                        <div className="font-semibold font-xl mb-2"><h1>About the Samurai King Resting</h1></div>
                        <span className="hidden md:block font-semibold font-lg text-gray-500 pt-4">Pets</span>
                        <div className="mt-2">
                            <p className="mt-6 text-gray-500 font-light text-sm w-full md:w-2/3 md:mt-0">
                            So how did the classical Latin become so incoherent? According to McClintock, 
                            a 15th century typesetter likely scrambled part of Cicero's De Finibus 
                            in order to provide placeholder text to mockup various fonts for a type specimen book.
                            So how did the classical Latin become so incoherent? <br /><br/>According to McClintock, 
                            a 15th century typesetter likely scrambled part of Cicero's De Finibus in order 
                            to provide placeholder text to mockup various fonts for a type specimen book. 
                            So how did the classical Latin become so incoherent? According to McClintock.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12">
                        <div className="font-semibold text-xl mt-4 md:mt-0 md:text-right"><h1>People also buy</h1></div>
                        <div className="flex">
                            <div className="flex flex-row mt-5 md:justify-end md:space-x-8 md:mt-10">
                            <div className="mx-1 md:mx-0">
                              <img className="object-cover h-36 w-28" src="../images/yellow.jpeg"/>
                            </div>
                            <div className="mx-1 md:mx-0">
                              <img className="object-cover h-36 w-28" src="../images/jeffery.jpeg" />
                            </div>
                            <div className="mx-1 md:mx-0">
                            <img className="object-cover h-36 w-28" src="../images/ballon.jpeg"/>
                            </div>
                            </div>
                        </div>
                        <div className="font-semibold text-sm md:text-right mt-7"><h1>Details</h1></div>
                        <div className="font-thin text-xs md:text-right mt-2">
                        <p>Dimension: 1200 x 1020</p>
                        <p>Size: 15mb</p>
                        </div>
                    </div>
                    </div>
              </div>
          </div>
    
    </div>
      {/**Border */}
      <div className="border-solid border-gray-300 border-b-2"></div>
    </>
  );
}

