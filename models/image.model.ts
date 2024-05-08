import { Schema, model, models } from 'mongoose'

const ImageSchema = new Schema({
    url: String,
    alt: String,
})

export const Image = models?.Image || model('Image', ImageSchema)