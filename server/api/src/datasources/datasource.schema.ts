import { Schema } from 'mongoose'

export const DatasourceSchema = new Schema({
    name: { type: String, required: true },
    connection: { type: String, required: true },
    port: { type: Number, required: true },
    user: { type: String, required: true },
    password: { type: String, required: true },
    databaseName: { type: String, required: true }
})