import { get_categories } from '@/utils/actions'
import { ArrowDown, ChevronDown, Facebook, Instagram, LucideInstagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Header = async () => {
  const data = await get_categories();
  return (
    <header className=' bg-gradient-to-b from-primary to-transition md:px-0 px-8'>
      <nav className='flex items-center justify-between center py-6'>
        <div>
          <Link href={'/'}>
          <h1 className='text-font font-medium text-2xl'><span className='text-white'>
            Samdisha</span>.</h1></Link>
        </div>
        <div className='items-start gap-4 hidden md:flex'>
          {[{ name: 'Latest', href: '/latest' }, {
            name: 'Topics', href: `/topic/${data && data[0]}`, child: (data && data.map((item) => ({ name: item, href: `/topic/${item}` })))
          }].map((item, index) => (
            <div key={index} className='relative group'>
              <Link href={item.href} className='font-light tracking-widest flex items-center gap-1'>
                {item.name} {item.child && <ChevronDown />}
              </Link>
              {item.child && <div className='hidden p-6 group-hover:block absolute bg-white text-primary mt-1 shadow-lg rounded-md'>
                {item.child.map((child, iteration) => (
                  <Link key={iteration} href={child.href} className='capitalize hover:text-font block '>
                    {child.name}
                  </Link>
                ))}
              </div>}
            </div>
          ))}
        </div>
        <div className='md:flex hidden items-center gap-2'>
          {[{ icon: <Instagram />, href: 'https://instagram.com' }, { icon: <Facebook />, href: 'https://instagram.com' }].map((item, index) => (
            <div key={index}>
              <Link href={item.href}>
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header