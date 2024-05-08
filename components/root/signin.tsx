'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const AdminSchema = z.object({
    email: z.string().email().min(1).max(200),
    password: z.string().min(1).max(200)
})

type AdminType = z.infer<typeof AdminSchema>;

const SignInComponent = () => {
    const [disabled, setDisabled] = useState(false)
    const { formState: { errors }, register, handleSubmit } = useForm<AdminType>({ resolver: zodResolver(AdminSchema) });
    const router = useRouter();
    const onSubmit: SubmitHandler<AdminType> = async (data) => {
        try {
            setDisabled(true)
            const response = await axios.post('/api/admin', {
                ...data
            })
            if (!response.data.success) {
                router.refresh();
                return;
            }
            router.refresh();
            router.replace('/admin/panel')
        } catch (error) {
            setDisabled(true)
            router.refresh();
            console.log(error)
        } finally {
            setDisabled(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 max-w-[400px] w-full'>
            <div className=''>
                <Link href={'/'}>
                    <h1 className='text-font font-medium text-2xl'>
                        <span className='text-white'>Samdisha</span>.
                    </h1>
                </Link>
                <p className='text-sm font-medium'> Admin Signin </p>
            </div>
            <input type="email" className='px-4 py-2 rounded text-primary' placeholder="Email" {...register('email')} />
            {errors?.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            <input type="password" className='px-4 py-2 rounded text-primary' placeholder="Password" {...register('password')} />
            {errors?.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
            <button disabled={disabled} className='bg-font px-4 py-2 rounded' type="submit">Submit</button>
        </form>
    )
}

export default SignInComponent