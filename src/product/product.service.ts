import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }
  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }
  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }
}
