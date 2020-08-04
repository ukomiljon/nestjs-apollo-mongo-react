import { Document } from 'mongoose'

export class Datasource extends Document {
    readonly name: string
    readonly connection: string
    readonly port: string
    readonly user: string
    readonly password: string
    readonly databaseName: string
    readonly createdDate: Date
    readonly modifiedDate: Date
}

 
 