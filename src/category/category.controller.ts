import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { DeleteResult } from 'typeorm';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  async create(@Body() createCategoryDto: { name: string }): Promise<Category> {
    return this.categoryService.create(createCategoryDto.name);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCategoryDto: { name: string },
  ): Promise<Category> {
    const category = this.categoryService.update(createCategoryDto.name, id);
    return this.categoryService.update(createCategoryDto.name, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const deleteCategory = this.categoryService.delete(id);
    if (id) {
      throw new NotFoundException(`id: ${id} not Found `);
    }
    return deleteCategory;
  }
}
