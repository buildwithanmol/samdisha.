import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
    email: String, password: String, token: String
})

export const Admin = models?.Admin || model('Admin', AdminSchema)