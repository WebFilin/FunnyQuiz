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

  const btnColorCorect: string = "#9cea15f3";
  const BtnColorWrong: string = "#dc143c";

  //   Формируем массив кнопок
  const allBtn = React.useRef<HTMLDivElement>(null);

//   !так же не ясно чо ему надо тут <Array<HTMLElement>> вызывает ошибку
  const arrBtns = React.useRef<any>([]);

  React.useEffect(() => {
    arrBtns.current = allBtn.current
      ? Array.from(allBtn?.current.children)
      : [];
  }, []);

  React.useEffect(() => {
    // Сбрасываем  disabled кнопок
    setBtnStatus(false);

    //  Обнуляем фон элементов
    arrBtns.current.map((elem: HTMLButtonElement) => {
      elem.style.backgroundColor = "";
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
//   !Непонятно что типизировать здесь - по идее это тот же HTMLButtonElement
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
