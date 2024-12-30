import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryController } from './category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product, Category],
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
