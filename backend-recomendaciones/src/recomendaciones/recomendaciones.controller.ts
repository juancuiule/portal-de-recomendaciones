import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';
import { CreateRecomendacionDto } from './dto/create-recomendacion.dto';
import { Recomendacion } from './schemas/recomendacion.schema';

@Controller('recomendaciones')
export class RecomendacionesController {
  constructor(
    private readonly recomendacionesService: RecomendacionesService,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateRecomendacionDto) {
    await this.recomendacionesService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Recomendacion[]> {
    return this.recomendacionesService.findAll();
  }
}
