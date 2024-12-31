import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(name: string): Promise<Category> {
    const category = this.categoryRepository.create({ name });
    return this.categoryRepository.save(category);
  }
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ where: { id } });
  }
  async update(name: string, id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (category) {
      category.name = name;
      return this.categoryRepository.save(category);
    }
    return null;
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
