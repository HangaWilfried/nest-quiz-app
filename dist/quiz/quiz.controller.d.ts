import { QuizService } from './quiz.service';
import { CreateQuizDto } from 'src/dto/createQuiz';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): number[];
    createQuiz(quizData: CreateQuizDto): Promise<CreateQuizDto>;
}
