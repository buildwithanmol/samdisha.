import { url_converter } from '@/app/(root)/latest/page';
import { get_categories, get_popular } from '@/utils/actions';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Sidebar = async () => {
    const data = await get_categories();
    const popular = await get_popular();
    return (
        <div className='col-span-1'>
            <div className='space-y-2'>
                <h1 className='text-accent uppercase text-md font-medium tracking-widest '> Top Categories </h1>

                <div className='flex flex-wrap gap-2 py-2'>
                    {
                        data && data.map((item, index) => (
                            <Link key={index} href={`/topic/${item}`} className='hover:bg-button/5 capitalize text-sm bg-button px-2 py-1 rounded-lg text-white'>{item}</Link>
                        ))
                    }
                </div>
            </div>

            <br />
            <br />

            <div className='space-y-2'>
                <h1 className='text-accent uppercase text-md font-medium tracking-widest '> Popular Content </h1>
                <div className='flex flex-col gap-2 py-2'>
                    {
                        popular && popular.map((item, index) => (
                            <Link key={index} href={`/blog/${url_converter(item.title)}`} className='flex items-center gap-3 font-light text-md'> <ArrowRight className='text-font ' /> {item.title}</Link>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Sidebar