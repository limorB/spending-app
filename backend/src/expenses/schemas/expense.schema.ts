import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ExpenseDocument = Expense & Document;

export enum Category {
  Food = 'food',
  Travel = 'travel',
  Utilities = 'utilities',
  Shopping = 'shopping',
  Other = 'other',
}

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class Expense {
  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ default: Date.now, type: Date, required: true })
  date: Date;

  @Prop({ required: true, enum: Category }) // Specify the enum here
  category: Category;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
