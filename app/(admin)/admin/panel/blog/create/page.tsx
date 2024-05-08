import PostForm from '@/components/forms/post-form'
import Editor from '@/components/markdown/editor'
import React from 'react'

const CreatePage = async () => {
  return (
    <section className='col-span-5 px-4'>
      <Editor />
      <div className='mt-2 '>
        <h1> Post Details </h1>
        <PostForm />
      </div>
    </section>
  )
}

export default CreatePage