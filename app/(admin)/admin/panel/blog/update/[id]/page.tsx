import { get_blog } from '@/actions/blog.action'
import UpdateForm from '@/components/forms/update-form'
import Editor from '@/components/markdown/editor'
import React from 'react'

const IdPage = async ({ params }: { params: { id: string } }) => {
  const data = await get_blog(params.id)
  return (
    <section className='col-span-5 px-4'>
      <Editor code={data && (data.content)} />
      <div className='mt-2 '>
        <h1> Post Details </h1>
        <UpdateForm id={params.id} />
      </div>
    </section>
  )
}

export default IdPage