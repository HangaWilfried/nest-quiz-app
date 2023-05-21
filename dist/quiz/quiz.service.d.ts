import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from 'src/dto/createQuiz';
export declare class QuizService {
    private quizesRepository;
    constructor(quizesRepository: Repository<Quiz>);
    getAllQuiz(): number[];
    createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto>;
}
