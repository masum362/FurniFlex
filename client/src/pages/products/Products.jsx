import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import data from '@/lib/data.json';

import product1 from '@/assets/products/product1.png';

import { IoBagOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Products = () => {

    const [products ,setProducts ] = useState([])
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(data.length / limit);
    const pages = [...Array(numberOfPages).keys()]

    console.log(skip, limit)

    const handleBtn = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSkip(pageNumber * limit)

    }

    const handlePrev = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            setSkip(newPage * limit)


        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            const newPage = currentPage + 1;
           
            setCurrentPage(newPage);
            setSkip(newPage * limit)
        }
    }


    function calculateDiscountPercentage(mrp, sellPrice) {
        const discountAmount = mrp - sellPrice;
        const discountPercentage = (discountAmount / mrp) * 100;
        return Math.ceil(discountPercentage);
    }

    useEffect(() => {
        let arr= []
        for (let i = skip; i < limit + skip; i++) {
            console.log({skip,limit})
            console.log(data[i]);
            arr.push(data[i]);
        }
        setProducts(arr)
    }, [skip,limit])
    
console.log({products})

    return (
        <div className="py-8 px-4">
            <Tabs defaultValue="rocking-chair" className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
                <div className=" col-span-1 border-r flex w-full p-4">
                    <TabsList className="flex md:flex-col gap-4 w-full text-start ">
                        <TabsTrigger value="rocking-chair" className="text-start">Rocking Chair</TabsTrigger>
                        <TabsTrigger value="side-chair" className="text-start">Side chair</TabsTrigger>
                        <TabsTrigger value="lounge-chair" className="text-start">Lounge chair</TabsTrigger>
                    </TabsList>
                </div>
                <div className="col-span-4">
                    <TabsContent value="rocking-chair">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
                            {
                                products.map(product => (
                                    <div key={product.id} className="p-4 border shadow-sm flex flex-col gap-4 rounded-lg">
                                        <figure className="bg-secondary flex items-center justify-center">
                                            <img src={product.image} alt="product image" />
                                        </figure>
                                        <h1 className="text-xl font-semibold">{product.title}</h1>
                                        <div className="flex items-center gap-2 text-lg">
                                            <span className="font-semibold">€{product.price.cost}.00</span>
                                            <span className="text-[#ABABAB]">€{product.price.mrp}.00</span>
                                            <span className="text-[#B92E2E] font-semibold">{calculateDiscountPercentage(product.price.mrp, product.price.cost)}% OFF</span>
                                        </div>
                                        <p>It has a backrest that can be tilted back, and often a footrest extended </p>
                                        <Button className="flex gap-2 h-12"><span className="text-white">< IoBagOutline /></span> Add to cart</Button>
                                    </div>
                                ))
                            }

                        </div>
                    </TabsContent>
                    <TabsContent value="side-chair">  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
                            {
                                products.map(product => (
                                    <div key={product.id} className="p-4 border shadow-sm flex flex-col gap-4 rounded-lg">
                                        <figure className="bg-secondary flex items-center justify-center">
                                            <img src={product.image} alt="product image" />
                                        </figure>
                                        <h1 className="text-xl font-semibold">{product.title}</h1>
                                        <div className="flex items-center gap-2 text-lg">
                                            <span className="font-semibold">€{product.price.cost}.00</span>
                                            <span className="text-[#ABABAB]">€{product.price.mrp}.00</span>
                                            <span className="text-[#B92E2E] font-semibold">{calculateDiscountPercentage(product.price.mrp, product.price.cost)}% OFF</span>
                                        </div>
                                        <p>It has a backrest that can be tilted back, and often a footrest extended </p>
                                        <Button className="flex gap-2 h-12"><span className="text-white">< IoBagOutline /></span> Add to cart</Button>
                                    </div>
                                ))
                            }

                        </div></TabsContent>
                    <TabsContent value="lounge-chair">  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
                            {
                                products.map(product => (
                                    <div key={product.id} className="p-4 border shadow-sm flex flex-col gap-4 rounded-lg">
                                        <figure className="bg-secondary flex items-center justify-center">
                                            <img src={product.image} alt="product image" />
                                        </figure>
                                        <h1 className="text-xl font-semibold">{product.title}</h1>
                                        <div className="flex items-center gap-2 text-lg">
                                            <span className="font-semibold">€{product.price.cost}.00</span>
                                            <span className="text-[#ABABAB]">€{product.price.mrp}.00</span>
                                            <span className="text-[#B92E2E] font-semibold">{calculateDiscountPercentage(product.price.mrp, product.price.cost)}% OFF</span>
                                        </div>
                                        <p>It has a backrest that can be tilted back, and often a footrest extended </p>
                                        <Button className="flex gap-2 h-12"><span className="text-white">< IoBagOutline /></span> Add to cart</Button>
                                    </div>
                                ))
                            }

                        </div></TabsContent>
                </div>
            </Tabs>
            <div className='flex items-center justify-center gap-4 py-12 '>
                    <button className='btn' disabled={currentPage === 0} onClick={handlePrev}>Prev</button>
                    {
                        pages?.map(page => <Button variant={"outline "} className={`btn ${page === currentPage ? "bg-transparent border border-black" : "border border-gray-300   "}`} onClick={() => handleBtn(page)} key={page}>{page + 1}</Button>)
                    }
                    <button className='btn' disabled={currentPage === pages.length - 1} onClick={handleNext}>Next</button>
                </div>

        </div>
    )
}

export default Products