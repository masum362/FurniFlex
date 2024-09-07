import product1 from '@/assets/products/product1.png'
import { IoCloseOutline } from "react-icons/io5";
import { FaEuroSign } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Button } from '@/components/ui/button';


const Cart = () => {
    return (
        <div>

            <div className='grid grid-cols-4 p-8'>

                <div className=' col-span-3 space-y-4 '>
                    <h1 className='text-2xl font-semibold py-2'>An overview of your order</h1>
                    <div className='flex flex-col bg-[#FAFAFA] border-b'>
                        <div className='flex justify-between p-4  '>
                            <div className='flex items-center gap-4'>
                                <span className='border border-secondary bg-white flex items-center'>
                                    <p className='p-2 font-bold cursor-pointer '>-</p>
                                    <p className='p-2 font-bold text-black '>1</p>
                                    <p className='p-2 font-bold cursor-pointer'>+</p>
                                </span>
                                <div className='flex gap-4'>
                                    <div className='bg-[#EAEAEA] rounded-lg'>
                                        <img src={product1} alt="product image" className='w-20 h-20' />
                                    </div>
                                    <h1 className='text-lg font-semibold'>product title is here</h1>
                                </div>
                            </div>
                            <div>
                                <span className='cursor-pointer font-bold text-lg'><IoCloseOutline /></span>
                            </div>
                        </div>
                        <p className='flex items-center font-bold text-black justify-end p-2'><span className=''>< FaEuroSign /></span>299.00</p>
                    </div>
                </div>
                <div className=' col-span-1 p-4 space-y-4 '>
                    <h1 className='text-2xl font-semibold px-4 '>Oder details</h1>
                    <div className='p-4 space-y-2 bg-[#FAFAFA] rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <p>Subtotal</p>
                            <p className='flex items-center  justify-end'><span className=''>< FaEuroSign /></span>299.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Shipping</p>
                            <p className='flex items-center justify-end '>Free</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center justify-center'>Estimated Tax <IoIosInformationCircleOutline />
                            </p>
                            <p className='flex items-center justify-end'><span className=''>< FaEuroSign /></span>-</p>
                        </div>
                        <div className='flex items-center justify-between border-t pt-4'>
                            <p>Total</p>
                            <p className='flex items-center justify-end font-semibold text-black'><span className=''>< FaEuroSign /></span>299.00</p>
                        </div>

                    </div>
                    <Button className="w-full h-12">Go to Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart