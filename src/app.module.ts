import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [ProductModule],
  controllers: [ProductController, CategoryController],
  providers: [ProductService],
})
export class AppModule {}
