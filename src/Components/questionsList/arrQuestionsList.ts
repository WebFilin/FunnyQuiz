import { IQuestions } from "../../types/IQuestions";

const arrQuestionsList: IQuestions[] = [
  {
    id: 1,
    questionsTitle: "Столица РФ",
    answersList: [
      { id: 1, answerTxt: "Новосибирск", isCorrect: false },
      { id: 2, answerTxt: "Челябинск", isCorrect: false },
      { id: 3, answerTxt: "Москва", isCorrect: true },
      { id: 4, answerTxt: "Екатеринбург", isCorrect: false },
    ],
  },

  {
    id: 2,
    questionsTitle: "Столица Германии",
    answersList: [
      { id: 1, answerTxt: "Прага", isCorrect: false },
      { id: 2, answerTxt: "Берлин", isCorrect: true },
      { id: 3, answerTxt: "Гамбург", isCorrect: false },
      { id: 4, answerTxt: "Баден - Баден", isCorrect: false },
    ],
  },

  {
    id: 3,
    questionsTitle: "Столица Франции",
    answersList: [
      { id: 1, answerTxt: "Тулуза", isCorrect: false },
      { id: 2, answerTxt: "Ницца", isCorrect: false },
      { id: 3, answerTxt: "Лион", isCorrect: false },
      { id: 4, answerTxt: "Париж", isCorrect: true },
    ],
  },

  {
    id: 4,
    questionsTitle: "Столица Чехия",
    answersList: [
      { id: 1, answerTxt: "Карловы Вары", isCorrect: false },
      { id: 2, answerTxt: "Якутск", isCorrect: false },
      { id: 3, answerTxt: "Прага", isCorrect: true },
      { id: 4, answerTxt: "Брно", isCorrect: false },
    ],
  },
];

export default arrQuestionsList;
