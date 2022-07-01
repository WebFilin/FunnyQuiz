import React, { FC } from "react";

import style from "./quantityQuestions.module.css";

interface IQuantity {
  currentQuest: number;
  arrQuestions: number;
}

const QuantityQuestions: FC<IQuantity> = ({ currentQuest, arrQuestions }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>
        Вопрос {currentQuest} / {arrQuestions}
      </h2>
    </div>
  );
};

export default QuantityQuestions;
