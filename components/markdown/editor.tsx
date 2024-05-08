'use client'
import React, { useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import { useRecoilState } from "recoil";
import { contentState } from "@/utils/atoms";

export default function Editor({ code }: { code?: string }) {
    const [content, setContent] = useRecoilState<string>(contentState);

    useEffect(() => {
        if (!code) {
            return;
        } else {
            setContent(code);
        }
    }, [code, setContent])

    return (
        <div className="">
            <h1 className="mb-2"> Editor </h1>
            <MDEditor
                value={content}
                onChange={(e: any) => { setContent(e) }}
            />
            <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}