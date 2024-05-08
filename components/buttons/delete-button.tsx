'use client'
import axios from 'axios';
import { Link, Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteButton = ({ _id }: { _id: string }) => {
    const router = useRouter();
    return (
        <button className='flex items-center gap-2 bg-container text-accent ml-2 px-2 py-1 rounded-md'
            onClick={async () => {
                const data = await axios.delete(`/api/blog/${_id}`);
                if(!data.data.success) {
                    router.refresh();
                    return;
                }
                router.refresh();
                return;
            }}
        >
            <Trash2Icon size={16} /> Delete
        </button>
    )
}

export default DeleteButton