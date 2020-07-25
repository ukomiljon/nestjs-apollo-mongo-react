import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasourcesService } from './datasources/datasources.service';
import { DatasourcesModule } from './datasources/datasources.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DatasourcesModule,
    MongooseModule.forRoot('mongodb://localhost/reactbi')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
