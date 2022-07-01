import React from "react";

import style from "./questionsLog.module.css";

import arrQuestionsList from "../questionsList/arrQuestionsList";

import QuantityQuestions from "../QuantityQuestions/QuantityQuestions";

import Questions from "../Questions/Questions";

import ButtonsAnswer from "../ButtonsAnswer/ButtonsAnswer";

import TotalAnswers from "../TotalAnswers/TotalAnswers";

import RestartTestBtn from "../Buttons/RestartTestBtn/RestartTestBtn";

import BtnNext from "../Buttons/BtnNext/BtnNext";

function QuestionsLog() {
  // Индекс страницы с вопросами
  const [currentQuest, setCurrentQuest] = React.useState<number>(0);

  // Индекс пройденых вопросов
  const [score, setScore] = React.useState<number>(0);

  //  Флаг окончания всех вопросов
  const [showScore, setShowScore] = React.useState<boolean>(false);

  const [showBtnNext, setShowBtnNext] = React.useState<boolean>(false);

  //   Задержка перехода на следушую страницу
  const timeoutCorectAnswer: number = 600;

  React.useEffect(() => {
    setShowBtnNext(false);
  }, [currentQuest]);

  //   Регистратор ответа на вопросы
  const handlerAnswerClick = (isCorrect: boolean) => {
    if (isCorrect && score < arrQuestionsList.length) {
      setScore(score + 1);

      // Автоматический переход при правильном выборе
      setTimeout(() => {
        nextListQuest(currentQuest + 1);
      }, timeoutCorectAnswer);
    } else {
      setShowBtnNext(true);
    }
  };

  //   Переключаем на следущий вопрос
  function nextListQuest(step: number) {
    if (step < arrQuestionsList.length) {
      setCurrentQuest(step);
    } else {
      setShowScore(true);
    }
  }

  //   При неправильном ответе переход вперед
  function stepNextQuest() {
    nextListQuest(currentQuest + 1);
  }

  // Старт теста заново
  function restartTest() {
    setCurrentQuest(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className={style.wrapper}>
      {showScore ? (
        <div className={style.body_totalAnswers}>
          <TotalAnswers score={score} totalQuest={arrQuestionsList.length} />
          <RestartTestBtn restartFunc={restartTest} />
        </div>
      ) : (
        <div className={style.body_quest}>
          <Questions
            questions={arrQuestionsList[currentQuest].questionsTitle}
          />

          <QuantityQuestions
            currentQuest={currentQuest}
            arrQuestions={arrQuestionsList.length}
          />

          <ButtonsAnswer
            answers={arrQuestionsList[currentQuest].answersList}
            answersHandler={handlerAnswerClick}
          />

          <div className={style.btn__next_wrapper}>
            {showBtnNext ? <BtnNext clickHandler={stepNextQuest} /> : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionsLog;
