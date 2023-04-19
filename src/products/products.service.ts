import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsDto } from './dto/create-product.dto';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>
  ){}


  async create(createProductsDto: CreateProductsDto) {
    const food = await this.productsRepository.create(createProductsDto)
    await this.productsRepository.save(food)

    return food;
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    return this.productsRepository.findOneBy({id});
  }

  async update(id: string, updateProductsDto: CreateProductsDto) {
    const findFood = await this.findOne(id);
    const updatedFood = await this.productsRepository.merge(
      findFood,
      updateProductsDto
    )
    return this.productsRepository.save(updatedFood);
  }

  async remove(id: string) {
    const food = await this.findOne(id);
    await this.productsRepository.remove(food);
    return'Produto eliminado satisfactoramente';
  }
}
