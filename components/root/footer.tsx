import { get_categories } from '@/utils/actions';
import Link from 'next/link';
import React from 'react'

const Footer = async () => {
  const data = await get_categories();
  return (
    <footer className='bg-gradient-to-t from-primary to-transition px-8 md:px-0'>
      <div className='center grid grid-cols-1   md:grid-cols-4 py-6'>
        <div className='col-span-2'>
          <div>
            <h1 className='text-font font-medium text-2xl'><span className='text-white'>Samdisha</span>.</h1>
            <p>Thanks for reading!</p>
          </div>
          <br />
          <br />
          <p className='light_text hidden md:block'>© 2023 Samdisha. All rights reserved.</p>
        </div>
        <div className='col-span-1'>
          <p className='light_text'>Topics</p>
          <div className='flex flex-col gap-2 pt-2'>
            {
              data && data.map((item, index) => (
                <Link key={index} href={`/topic/${item}`} className='hover:text-font capitalize'>{item}</Link>
              ))
            }
          </div>
        </div>
        <div className='col-span-1'>
          <p className='light_text'>Links</p>
          <div className='flex flex-col gap-2 pt-2'>
            {[{ name: 'Instagram', href: '/instagram' }, { name: 'Facebook', href: '/' }].map((item, index) => (
              <Link key={index} href={item.href} className='hover:text-font'>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer