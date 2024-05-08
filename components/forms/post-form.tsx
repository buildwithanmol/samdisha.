'use client'
import { contentState } from '@/utils/atoms';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod'

const postSchema = z.object({
    title: z.string().min(1),
    og: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        tags: z.string()
    }),
    subTitle: z.string().min(1),
    category: z.string().min(1)
})

type PostType = z.infer<typeof postSchema>;

const PostForm = () => {
    const [toc, setToc] = useState<{ title: string, link: string }[]>([]);

    const [content] = useRecoilState(contentState);

    const router = useRouter();

    const { handleSubmit, register, formState: { errors } } = useForm<PostType>({
        resolver: zodResolver(postSchema)
    });

    const handleAddTocItem = () => {
        setToc([...toc, { title: '', link: '' }]);
    };

    const handleRemoveTocItem = (index: number) => {
        const newToc = [...toc];
        newToc.splice(index, 1);
        setToc(newToc);
    };

    const onSubmit: SubmitHandler<PostType> = async (data) => {
        const tags = data.og.tags.split(' ');
        const object = {
            ...data,
            og: {
                tags
            },
            content,
            tableOfContents: toc
        }
        console.log(object)
        const response = await axios.post(`/api/blog`, {
            ...data,
            og: {
                title: data.og.title,
                description: data.og.description,
                tags
            },
            content,
            tableOfContents: toc
        })

        if (!response.data.success) {
            router.refresh();
            return;
        }

        router.replace('/admin/panel/blog/all')
        return;
    };

    return (
        <div className='border border-container mt-2 p-4 space-y-4'>
            <h1> Basic </h1>
            <input type="text" {...register('title')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Blog Title' />
            <input type="text" {...register('subTitle')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Short Title' />
            <input type="text" {...register('category')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Category' />
            <div className='space-y-2'>
                <h1> Open Graph </h1>
                <div className='bg-container p-5 rounded-md space-y-4'>
                    <input type="text" {...register('og.title')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Title' />
                    <input type="text" {...register('og.description')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Description' />
                    <input type="text"  {...register('og.tags')} className='w-full text-primary px-4 py-2 rounded-md ' placeholder='Tags' />
                </div>
            </div>
            <div>
                <h1 className='mb-2'>Table of Contents</h1>
                {toc.map((item, index) => (
                    <div key={index} className="flex space-x-2 my-2">
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => {
                                const newToc = [...toc];
                                newToc[index].title = e.target.value;
                                setToc(newToc);
                            }}
                            placeholder="Title"
                            className="w-full text-primary px-4 py-2 rounded-md"
                        />
                        <input
                            type="text"
                            value={item.link}
                            onChange={(e) => {
                                const newToc = [...toc];
                                newToc[index].link = e.target.value;
                                setToc(newToc);
                            }}
                            placeholder="Link"
                            className="w-full text-primary px-4 py-2 rounded-md"
                        />
                        <button onClick={() => handleRemoveTocItem(index)} className='bg-red-500 px-2 rounded-md'>Delete</button>
                    </div>
                ))}
                <button onClick={handleAddTocItem} className='bg-container text-white px-4 my-2 py-2 rounded-md'>Add</button>
            </div>
            <div>
                <button className='w-full bg-font py-2 rounded-md' onClick={handleSubmit(onSubmit)}> Create Post </button>
            </div>
        </div>
    )
}

export default PostForm