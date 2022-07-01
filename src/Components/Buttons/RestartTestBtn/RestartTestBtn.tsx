import React, { FC } from "react";

import style from "./restartTestBtn.module.css";

interface IRestartTest {
  restartFunc: () => void;
}

const RestartTestBtn: FC<IRestartTest> = ({ restartFunc }) => {
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={restartFunc}>
        Пройти тест еще раз
      </button>
    </div>
  );
};

export default RestartTestBtn;
