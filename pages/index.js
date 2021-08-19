import UpperSection from '../components/UpperSection'
import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar'
import MobileFilter from '../components/MobileFilter';
import { Products } from '../components/Products';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import { Sorting } from '@/components/Sorting';
import { Pagination } from "react-custom-pagination";



export default function Home() {
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    //get current Posts
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);

    // when user clicks on number this function will execute
    const paginate = (number) => {
        setCurrentPage(number);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(<LoadingSpinner />);
            const res = await axios.get(process.env.API_URL);
            const productResult = res.data.products;
            setProducts(productResult);
            setLoading(false);
        }
        fetchProducts();
    }, [])

    return (
        <>
            <UpperSection />
            <div className="max-w-7xl py-4 lg:px-16">
                {showMobileFilter ? (
                    <>
                        <div
                            className="justify-center items-center flex fixed inset-0 z-50"
                        >
                            <div className="relative mx-auto w-full h-full">
                                {/*header*/}
                                <div className="flex fixed w-full justify-between px-4 bg-gray-200">
                                    <div className=" flex font-normal text-sm py-5 ">
                                        <h1>Photography</h1><span className="px-1">/</span><span className="font-light text-gray-500"> Premium Photos</span>
                                    </div>
                                    <div className="py-5">
                                        <svg width="23" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.8119 0H5.18805C2.32736 0 0 2.32736 0 5.18805V23.812C0 26.6726 2.32736 29 5.18805 29H23.812C26.6726 29 29 26.6726 29 23.8119V5.18805C29 2.32736 26.6726 0 23.8119 0ZM27.3008 23.8119C27.3008 25.7357 25.7357 27.3008 23.8119 27.3008H5.18805C3.26431 27.3008 1.69922 25.7357 1.69922 23.8119V5.18805C1.69922 3.26431 3.26431 1.69922 5.18805 1.69922H23.812C25.7357 1.69922 27.3008 3.26431 27.3008 5.18805V23.8119Z" fill="black" />
                                            <path d="M24.5103 6.3702H11.5701C11.2143 5.31357 10.2149 4.55017 9.03986 4.55017C7.86479 4.55017 6.86537 5.31357 6.50961 6.3702H4.48975C4.02054 6.3702 3.64014 6.7506 3.64014 7.21981C3.64014 7.68902 4.02054 8.06942 4.48975 8.06942H6.50966C6.86542 9.12605 7.86485 9.88946 9.03991 9.88946C10.215 9.88946 11.2144 9.12605 11.5702 8.06942H24.5103C24.9795 8.06942 25.3599 7.68902 25.3599 7.21981C25.3599 6.7506 24.9795 6.3702 24.5103 6.3702ZM9.03986 8.19024C8.50477 8.19024 8.06943 7.7549 8.06943 7.21981C8.06943 6.68473 8.50477 6.24939 9.03986 6.24939C9.57494 6.24939 10.0103 6.68473 10.0103 7.21981C10.0103 7.7549 9.57494 8.19024 9.03986 8.19024Z" fill="black" />
                                            <path d="M24.5103 13.6504H22.4904C22.1346 12.5938 21.1351 11.8304 19.9601 11.8304C18.7851 11.8304 17.7857 12.5938 17.4299 13.6504H4.48975C4.02054 13.6504 3.64014 14.0308 3.64014 14.5C3.64014 14.9692 4.02054 15.3496 4.48975 15.3496H17.4299C17.7857 16.4063 18.7852 17.1697 19.9602 17.1697C21.1352 17.1697 22.1347 16.4063 22.4904 15.3496H24.5103C24.9795 15.3496 25.3599 14.9692 25.3599 14.5C25.3599 14.0308 24.9795 13.6504 24.5103 13.6504ZM19.9602 15.4704C19.4251 15.4704 18.9897 15.0351 18.9897 14.5C18.9897 13.9649 19.4251 13.5296 19.9602 13.5296C20.4953 13.5296 20.9306 13.9649 20.9306 14.5C20.9306 15.0351 20.4953 15.4704 19.9602 15.4704Z" fill="black" />
                                            <path d="M24.5103 20.9306H15.2102C14.8545 19.8739 13.855 19.1105 12.68 19.1105C11.5049 19.1105 10.5055 19.8739 10.1497 20.9306H4.48975C4.02054 20.9306 3.64014 21.311 3.64014 21.7802C3.64014 22.2494 4.02054 22.6298 4.48975 22.6298H10.1497C10.5055 23.6864 11.5049 24.4498 12.68 24.4498C13.855 24.4498 14.8545 23.6864 15.2102 22.6298H24.5103C24.9795 22.6298 25.3599 22.2494 25.3599 21.7802C25.3599 21.311 24.9795 20.9306 24.5103 20.9306ZM12.68 22.7507C12.1449 22.7507 11.7096 22.3153 11.7096 21.7802C11.7096 21.2452 12.1449 20.8098 12.68 20.8098C13.2151 20.8098 13.6504 21.2451 13.6504 21.7802C13.6504 22.3153 13.2151 22.7507 12.68 22.7507Z" fill="black" />
                                        </svg>
                                    </div>
                                </div>
                                {/*content*/}
                                <MobileFilter setShowMobileFilter={setShowMobileFilter} />
                                <div className="flex absolute inset-x-0 bottom-0 items-center bg-white h-20 border-t-2 justify-around">
                                    <button
                                        className="border-2 border-black w-40 h-10 text-black background-white font-bold text-lg uppercase "
                                        onClick={() => setShowMobileFilter(false)}
                                    >
                                        Clear
                                    </button>
                                    <button
                                        className="border-2 border-black w-40 h-10 text-white bg-black font-bold text-lg uppercase "
                                        onClick={() => setShowMobileFilter(false)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                        <Sorting setProducts={setProducts} setShowMobileFilter={setShowMobileFilter} setLoading={setLoading} />
                <div className="flex justify-center md:justify-between">
                    <div className="hidden md:inline-flex md:max-w-3/12">
                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                    {/* Products */}
                    <div className="md:max-w-9/12">
                        <Products products={currentProducts} loading={loading} />
                    </div>
                </div>
            </div>
            <div className="py-12 text-black">

                {/* Pagination */}
            <Pagination
                totalPosts={products.length}
                showLastText={'Last'}
                showFirstText={"First"}
                showFirst={true}
                showIndex={true}
                view={3}
                postsPerPage={productsPerPage}
                paginate={paginate}
                justify={'center'}
                color={'black'}
                indexbgColor={'unset'}
                bgColor={'unset'}
                selectColor={'unset'}
            />
            </div>
        </>
    );
}
