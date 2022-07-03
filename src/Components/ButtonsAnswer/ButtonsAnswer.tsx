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

  const btnColorCorect = "#9cea15f3";
  const BtnColorWrong = "#dc143c";

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
      elem.style.backgroundColor = null;
    });
  }, [answers, arrBtns]);

  function checkAnswer(
    checkBtn: React.MouseEvent<HTMLButtonElement>,
    checkAnswer: boolean
  ) {
    setBtnStatus(true);
    coloraizeBtnCheck(checkBtn.target);
    answersHandler(checkAnswer);
    colorazeCorrectBtn();
  }

  // Получаем кнопку по клику
  function coloraizeBtnCheck(checkBtn: any) {
    checkBtn.style.backgroundColor = `${
      checkBtn.value === "true" ? btnColorCorect : BtnColorWrong
    }`;
  }

  //   При неправильном выборе подсвечиваем правильный ответ
  function colorazeCorrectBtn() {
    arrBtns.current.map((elem: HTMLButtonElement) => {
      if (elem.value === "true") {
        elem.style.backgroundColor = btnColorCorect;
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
