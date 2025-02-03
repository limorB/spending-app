import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Category } from '../schemas/expense.schema';

export class CreateExpenseDto {
  @IsString()
  description: string;

  @IsNumber()
  amount: number;
  s;
  @IsEnum(Category)
  category: Category;
}
