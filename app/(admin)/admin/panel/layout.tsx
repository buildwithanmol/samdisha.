import Link from 'next/link'
import React from 'react'

const PanelLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <main className='mx-auto max-w-screen-xl'>
            <header className='flex items-center justify-between py-6 border-b border-container'>
                <Link href={'/admin/panel'}>
                    <h1 className='text-font font-medium text-2xl'>
                        <span className='text-white'>
                            Samdisha
                        </span>.
                    </h1>
                </Link>
                <h1 className='font-light text-lg '>Admin Panel</h1>
            </header>
            <br />
            <div className='grid grid-cols-6'>
                <aside className='col-span-1 border-r border-container'>
                    <h1 className='text-lg tracking-widest font-light'> Dashboard </h1>
                    <div className='space-y-4 pt-4'>
                        {[{ name: 'All Blogs', href: '/admin/panel/blog/all' }, { name: 'Create Blog', href: '/admin/panel/blog/create' }].map((item, index) => (
                            <div key={index} >
                                <Link href={item.href} className='text-font font-light tracking-widest block'>{item.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </aside>
                {children}
            </div>
        </main>
    )
}

export default PanelLayout