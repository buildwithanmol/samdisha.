import { Schema, model, models } from 'mongoose'


const BlogSchema = new Schema({
    title: String,
    og: {
        title: String,
        description: String,
        tags: [String]
    },
    subTitle: String,
    tableOfContents: [{ title: String, link: String }],
    content: String,
    likes: Number,
    category: String
})

export const Blog = models?.Blog || model('Blog', BlogSchema)