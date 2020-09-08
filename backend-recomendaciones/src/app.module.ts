import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecomendacionesModule } from './recomendaciones/recomendaciones.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/recomendaciones'),
    RecomendacionesModule,
  ],
})
export class AppModule {}
