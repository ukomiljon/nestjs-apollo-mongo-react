import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { identity } from 'rxjs';
import { DatasourcesService } from './datasources.service';
import { DatasourceDto } from './dto/datasource.dto';
import { Datasource } from './interfaces/datasource.interface';

@Controller('datasources')
export class DatasourcesController {

    constructor(private readonly datasourcesService: DatasourcesService) {
    }


    @Get()
    async get(): Promise<any[]> {
        return await this.datasourcesService.find()
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<any> {
        return await this.datasourcesService.findOne(id)
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    async create(@Body() datasource: DatasourceDto): Promise<any> {
        return await this.datasourcesService.create(datasource)
    }

    @Put('id:')
    async update(@Param('id') id: string, @Body() datasource: DatasourceDto): Promise<any> {
        return await this.datasourcesService.update(id, datasource)
    }

    @Delete(':id')
    async delete(@Param() id: string) {
        return await this.datasourcesService.delete(id)
    }

}
