import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExpensesModule } from './expenses/expenses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @Module({
//   imports: [
//     MongooseModule.forRoot(
//       'mongodb+srv://dev-user:oQchs7LOei8Mf1kw@cluster0.tuvju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//     ),
//     ExpensesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    ExpensesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
