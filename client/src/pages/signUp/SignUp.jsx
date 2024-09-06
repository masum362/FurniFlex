import chairImage from '@/assets/chair.png'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"



const SignUp = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    return (
        <div className='flex items-center justify-center h-screen  '>
            <div className='flex items-center justify-center gap-4 flex-col'>
                <div className='flex items-center justify-center w-full gap-4 flex-col'>
                    <p className='text-lg font-semibold'>Welcome To</p>
                    <h1 className='text-5xl font-bold'>Furni<span className='text-theme'>Flex</span></h1>
                    <p>Signup for purchase your desire products</p>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Button type="submit">Sign Up</Button>
                    </form>
                </div>
            </div>
            <div className=' relative'>
                <img src={chairImage} alt="chair-furniture" className='w-full h-full ' />
            </div>
        </div>
    )
}

export default SignUp