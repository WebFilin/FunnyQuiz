import React, { FC } from "react";

import style from "./buttonsAnswer.module.css";

import { IAnswers } from "../../types/IQuestions";

interface IButtonsAnswer {
  answers: IAnswers[];
  answersHandler: (isCorrect: boolean) => void;
}

const ButtonsAnswer: FC<IButtonsAnswer> = ({ answers, answersHandler }) => {
  // Отключаем кнопки после выбора ответа
  const [btnStatus, setBtnStatus] = React.useState<boolean>(false);

  //   Формируем массив кнопок
  const allBtn = React.useRef<any>(null);
  const arrBtns = React.useRef<any>([]);

  React.useEffect(() => {
    arrBtns.current = Array.from(allBtn.current?.children);
  }, []);

  React.useEffect(() => {
    // Сбрасываем  disabled кнопок
    setBtnStatus(false);

    //  Обнуляем фон элементов
    arrBtns.current.map((elem: any) => {
      elem.style.backgroundColor = "";
    });
  }, [answers, arrBtns]);

  function checkAnswer(checkBtn: any, checkAnswer: boolean) {
    setBtnStatus(true);
    coloraizeBtnCheck(checkBtn);
    answersHandler(checkAnswer);
    colorazeCorrectBtn();
  }

  // Получаем кнопку по клику
  function coloraizeBtnCheck(checkBtn: any) {
    const target = checkBtn.currentTarget.value;

    checkBtn.target.style.backgroundColor = `${
      target === "true" ? "green" : "red"
    }`;
  }

  //   При неправильном выборе подсвечиваем правильный ответ
  function colorazeCorrectBtn() {
    arrBtns.current.map((elem: any) => {
      if (elem.value === "true") {
        elem.style.backgroundColor = "green";
      }
    });
  }

  return (
    <div className={style.wrapper} ref={allBtn}>
      {answers.map((elem) => (
        <button
          className={style.button}
          disabled={btnStatus}
          key={elem.id}
          value={`${elem.isCorrect}`}
          onClick={(event) => {
            checkAnswer(event, elem.isCorrect);
          }}
        >
          {elem.answerTxt}
        </button>
      ))}
    </div>
  );
};

export default ButtonsAnswer;
