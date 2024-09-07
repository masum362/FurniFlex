import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Input } from '../ui/input';

const CustomInput = React.forwardRef(({ id, label, placeholder, type, className,errors, ...props }, ref) => {

    return (
        <>
            <div className='w-full px-2 py-1 flex items-start flex-col border rounded-md relative '>
                <label htmlFor={id} className={cn(
                    'text-sm text-gray-500 ',
                    className,
                )}>{label}</label>
                <Input type={type} placeholder={placeholder} className='border-none  outline-none text-black '
                    {...props} ref={ref} />

            </div>
            {/* {
                errors[type] && <span className='text-red-500'>{errors[type]?.message}</span>
            } */}
        </>
    )
}
)
export default CustomInput