import { get_blogs } from '@/actions/blog.action'
import BlogComponent from '@/components/blog/blog-component'
import React from 'react'

const LatestPage = async () => {
    const data = await get_blogs(0, 1000);
    return (
        <section className='center py-10'>
            <h1 className='text-2xl font-semibold mb-6 '>Latest Posts</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    data && data.map((item, index) => (
                        <div key={index} className="bg-container p-6 rounded-xl flex items-center justify-center">
                            <BlogComponent link={`/blog/${item._id}`} title={item.title} short_title={item.subTitle} description={item.og.description} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default LatestPage
export const dynamic = 'force-dynamic'