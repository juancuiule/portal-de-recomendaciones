import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recomendacion } from './schemas/recomendacion.schema';
import { CreateRecomendacionDto } from './dto/create-recomendacion.dto';

@Injectable()
export class RecomendacionesService {
  constructor(
    @InjectModel(Recomendacion.name)
    private recomendacionModel: Model<Recomendacion>,
  ) {}

  async create(
    createRecomendacionDto: CreateRecomendacionDto,
  ): Promise<Recomendacion> {
    const createdRecomendacion = new this.recomendacionModel(
      createRecomendacionDto,
    );
    return createdRecomendacion.save();
  }

  async findAll(): Promise<Recomendacion[]> {
    return this.recomendacionModel.find().exec();
  }
}
