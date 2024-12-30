import { IsString, IsInt } from 'class-validator';
export class CreateProductDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  @IsInt()
  categoryId: number;
}
