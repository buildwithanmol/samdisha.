'use client'
import MDEditor from "@uiw/react-md-editor"

const BlogContent = ({ content }: { content: string }) => {
    console.log(content)
    return <MDEditor.Markdown source={content} style={{ color: '#fcfcfc', background: '#0E141B' }} />
}

export default BlogContent