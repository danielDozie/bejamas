import React from 'react'
import Category from './Category'
import PriceRange from './PriceRange'

export const Sidebar = () => {
    return (
        <div className="w-full py-10">
            <Category />
            <div className="border-solid border-gray-300 border-b-2 my-8 w-10" />
            <PriceRange />

        </div>
    )
}
