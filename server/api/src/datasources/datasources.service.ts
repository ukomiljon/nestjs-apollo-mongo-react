import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Datasource } from './interfaces/datasource.interface';

@Injectable()
export class DatasourcesService {
    constructor(
        @InjectModel('datasource')
        private readonly datasourceModel: Model<Datasource>) {

    }

    async find(): Promise<any[]> {
        return await this.datasourceModel.find()
    }

    async findOne(id: string): Promise<any> {
        return await this.datasourceModel.findById(id)
    }

    async create(datasource: any): Promise<any> {
        return await new this.datasourceModel(datasource).save()
    }

    async update(id: string, datasource: any): Promise<any> {
        return await this.datasourceModel.findByIdAndUpdate(id, datasource)
    }

    async delete(id: string): Promise<any> {
        return await this.datasourceModel.findByIdAndRemove(id)
    }

}
