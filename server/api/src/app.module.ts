import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { DatasourcesModule } from './datasources/datasources.module';

@Module({
  imports: [
    ReportsModule,
    MongooseModule.forRoot('mongodb://localhost/reactbi-db', { useNewUrlParser: true, useUnifiedTopology: true }),
    DatasourcesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
