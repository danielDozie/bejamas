import React from 'react';

export default function MobileFilter() {
    return (
        <>
        <div className="overflow-y-scroll" style={{ 'max-height': 600}}>
        <div className="flex justify-between px-4 bg-white">
                                        <div className=" flex text-xl font-bold py-5 ">
                                            <h1>FILTER</h1>
                                        </div>
                                        <div className="py-5 font-bold text-xl">
                                        <a href="#">
                                            <h1>X</h1>
                                            </a>
                                        </div>
                                    </div>
        <div className="flex flex-col text-lg font-normal px-4 mb-4">
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">People</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Premium</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Pets</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Lanmark</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Cities</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Nature</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">People</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Premium</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Pets</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Lanmark</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Cities</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Nature</span>
            </label>
        </div>

        {/*Price Range */}

        <div className="flex justify-between px-4 bg-white">
                                        <div className=" flex text-xl font-bold py-5 ">
                                            <h1>PRICE RANGE</h1>
                                        </div>
                                    </div>
        <div className="flex flex-col text-lg font-normal px-4 mb-4">
        <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">Lower Than $20</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">20$ - $100</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">$100 - $200</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-3 text-gray-700">More $200</span>
                </label>
        </div>

        
        </div>
    </>
    );
}

