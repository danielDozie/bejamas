import React from 'react';
export default function PriceRange() {
    return (
        <>
            <div className="font-semibold text-md mb-2">
                <h1>Price Range</h1>
            </div>
            <div className="flex flex-col text-sm">
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
        </>
    );
}
