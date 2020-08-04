import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReportDto } from './report.dto';
import { ReportsService } from './reports.service'

 
@Controller('reports')
export class ReportsController {

    constructor(private readonly reportsService: ReportsService) {
    }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.reportsService.findAll()
    }

    @Get(':id') //'localhost:3000/reports/123
    async findOne(@Param('id') id: string): Promise<any> {
        return await this.reportsService.find(id)
    }
 

    @Post()
    async create(@Body() report: ReportDto): Promise<any> {
        return await this.reportsService.create(report)
    } 
   
    @Put(':id')
    async update(@Param('id') id: string, @Body() report: ReportDto): Promise<any> {
        return await this.reportsService.update(id, report)
    }

    @Delete(':id') //'localhost:3000/reports/123
    async delete(@Param('id') id: string): Promise<any> {
        return await this.reportsService.delete(id)
    }
}


// Datasource 
//   name: string 
//   connection: string 
//   port: number 
//   user: string 
//   password: string 
//   databaseName: string