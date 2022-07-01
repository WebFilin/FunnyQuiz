import React, { FC } from "react";

import style from "./btnNext.module.css";

interface IBtnNext {
  clickHandler: () => void;
}

const BtnNext: FC<IBtnNext> = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} className={style.btn}>
      Вперед
    </button>
  );
};

export default BtnNext;
