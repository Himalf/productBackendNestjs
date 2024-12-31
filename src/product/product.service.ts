import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { DeleteResult, Repository } from 'typeorm';
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
  async update(
    createProductDto: CreateProductDto,
    id: number,
  ): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (product) {
      Object.assign(product, createProductDto);
      return this.productRepository.save(product);
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
