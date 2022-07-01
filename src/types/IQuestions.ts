export interface IAnswers {
  id: number;
  answerTxt: string;
  isCorrect: boolean;
}

export interface IQuestions {
  id: number;
  questionsTitle: string;
  answersList: IAnswers[];
}
