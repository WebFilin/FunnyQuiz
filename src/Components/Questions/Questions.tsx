import React, { FC } from "react";

import style from "./questions.module.css";

interface IQuestions {
  questions: string;
}

const Questions: FC<IQuestions> = ({ questions }) => {
  return (
    <div className={style.wrapper}>
      <h1  className={style.title}>{questions}</h1>
    </div>
  );
};

export default Questions;
