import React from "react";

import style from "./app.module.css";

import QuestionsBody from "../Components/QuestionsBody/QuestionsBody";

function App() {
  return (
    <main className={style.wrapper}>
      <QuestionsBody />
    </main>
  );
}

export default App;
