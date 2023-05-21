import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Quiz } from './quiz/quiz.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }), 
    QuizModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.APP_DB_HOST,
      port: Number(process.env.APP_DB_PORT),
      username: process.env.APP_DB_USERNAME,
      password: process.env.APP_DB_PASSWORD,
      database: process.env.APP_DB_NAME,
      entities: [Quiz],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
