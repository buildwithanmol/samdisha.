import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BlogComponent = ({ link, title, short_title, description }: {
  link: string,
  title: string,
  short_title: string,
  description: string
}) => {
  return (
    <Link href={link} className='my-4 '>
      <div className='group'>
        <h1 className='font-semibold text-white text-2xl text-md group-hover:text-font'>{title}</h1>
        <p className='text-[#7e8c9a] font-semibold my-2 '> {short_title} </p>
        <p className='line-clamp-[15px]'> {description} </p>
        <div className='mb-6 mt-2 '>
          <p className='flex items-center gap-2 font-semibold'>Read More <ArrowRight className='text-white group-hover:translate-x-2 transition-all  group-hover:text-font' size={16} /> </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogComponent