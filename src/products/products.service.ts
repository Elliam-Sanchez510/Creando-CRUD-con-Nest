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
    const products = await this.productsRepository.create(createProductsDto)
    await this.productsRepository.save(products)

    return products;
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    return this.productsRepository.findOneBy({id});
  }

  async update(id: string, updateProductsDto: CreateProductsDto) {
    const findProducts = await this.findOne(id);
    const updatedProducts = await this.productsRepository.merge(
      findProducts,
      updateProductsDto
    )
    return this.productsRepository.save(updatedProducts);
  }

  async remove(id: string) {
    const products = await this.findOne(id);
    await this.productsRepository.remove(products);
    return'Produto eliminado satisfactoramente';
  }
}
