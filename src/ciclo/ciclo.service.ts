import { Injectable } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';

@Injectable()
export class CicloService {
  create(createCicloDto: CreateCicloDto) {
    return 'This action adds a new ciclo';
  }

  findAll() {
    return `This action returns all ciclo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciclo`;
  }

  update(id: number, updateCicloDto: UpdateCicloDto) {
    return `This action updates a #${id} ciclo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciclo`;
  }
}
