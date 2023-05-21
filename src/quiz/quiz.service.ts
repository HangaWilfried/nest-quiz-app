import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from 'src/dto/createQuiz';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz)
        private quizesRepository: Repository<Quiz>
    ) {}

    getAllQuiz() {
        return [1, 2, 3, 4];
    }

    async createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto> {
        return await this.quizesRepository.save(quiz);
    }
}
