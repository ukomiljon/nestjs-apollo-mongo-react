import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
 
import { Model } from 'mongoose';
import { Datasource } from './interfaces/datasource.interface';

@Injectable()
export class DatasourcesService { 

    constructor(
        @InjectModel('datasource')
        private readonly datasourceModule: Model<Datasource>
    ) { }

    async find(): Promise<any[]> {
        return await this.datasourceModule.find()
    }

    async findOne(id: string): Promise<any> {
        return await this.datasourceModule.findById(id)
    }

    async create(report: any): Promise<any> {
        return await new this.datasourceModule(report).save()
    }

    async update(id: string, report: any): Promise<any> {
        return await this.datasourceModule.findByIdAndUpdate(id, report)
    }

    async delete(id: string): Promise<any> {
        return await this.datasourceModule.findByIdAndRemove(id)
    }

}
