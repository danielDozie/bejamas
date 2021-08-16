import React from 'react';

export default function Category() {
    return (
        <>
            <div className="font-semibold text-md mb-2">
                <h1>Category</h1>
            </div>
            <div className="flex flex-col text-sm">
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
        </>
    );
}
