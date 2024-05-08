import { get_blogs } from '@/actions/blog.action'
import DeleteButton from '@/components/buttons/delete-button';
import { EditIcon, Link2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const AllPage = async () => {
    const data = await get_blogs();

    return (
        <section className='col-span-5 grid grid-cols-2 gap-5 px-4'>
            {
                data && data.map((item, index) => (
                    <div key={index} className='border py-2 px-4 border-container'>
                        <div className='border-b border-container py-2 space-y-2 '>
                            <p className='uppercase tracking-widest font-semibold flex items-center gap-2'>
                                <Link className='text-accent' href={`/blog/${item._id}`}> <Link2Icon size={16} /> </Link>
                                {item.title}
                            </p>
                            <p className='text-[#7e8c9a] text-sm'>
                                {item.subTitle}
                            </p>

                            <p className='uppercase text-accent bg-container inline-block px-2 py-1 rounded-sm text-sm tracking-widest'> {item.category} </p>

                        </div>
                        <div className='py-2 flex '>
                            <Link className='flex items-center gap-2 bg-container text-font px-2 py-1 rounded-md' href={`/admin/panel/blog/update/${item._id}`} >
                                <EditIcon size={16} /> Update
                            </Link>
                            <DeleteButton _id={item._id} />
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default AllPage