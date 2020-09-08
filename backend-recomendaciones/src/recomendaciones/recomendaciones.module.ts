import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecomendacionesController } from './recomendaciones.controller';
import { RecomendacionesService } from './recomendaciones.service';
import {
  Recomendacion,
  RecomendacionSchema,
} from './schemas/recomendacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recomendacion.name, schema: RecomendacionSchema },
    ]),
  ],
  controllers: [RecomendacionesController],
  providers: [RecomendacionesService],
})
export class RecomendacionesModule {}
