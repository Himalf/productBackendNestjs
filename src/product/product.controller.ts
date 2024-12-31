import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { DeleteResult } from 'typeorm';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
  @Put(':id')
  async update(
    @Body() createProductDto: CreateProductDto,
    @Param('id') id: number,
  ): Promise<Product> {
    return this.productService.update(createProductDto, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.productService.delete(id);
  }
}
