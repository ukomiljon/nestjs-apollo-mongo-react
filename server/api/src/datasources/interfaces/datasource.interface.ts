import { Document, Mongoose } from 'mongoose'

export interface Datasource extends Document {
    readonly name: string,
    readonly connection: string,
    readonly port: number,
    readonly user: string,
    readonly password: string,
    readonly databaseName: string
}

 