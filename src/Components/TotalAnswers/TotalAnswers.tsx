import React, { FC } from "react";

import style from "./totalAnswers.module.css";

interface ITotalQuest {
  score: number;
  totalQuest: number;
}

const TotalAnswers: FC<ITotalQuest> = ({ score, totalQuest }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <p>
          Правильных ответов {score} из {totalQuest}
        </p>
        <p> {(score / totalQuest) * 100}% успеха</p>
      </div>
    </div>
  );
};

export default TotalAnswers;
