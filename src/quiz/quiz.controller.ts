import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from 'src/dto/createQuiz';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) {}
    
    @Get("/")
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }

    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}
