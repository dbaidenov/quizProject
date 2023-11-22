import "./index.scss";
import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./data/questions";

const widthProgress = 100 / questions.length;

function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [end, setEnd] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const editQuestionNum = function (e) {
    if (
      questions[questionNum].variants[questions[questionNum].correct] ===
      e.target.innerHTML
    ) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (questionNum === questions.length - 1) {
      setEnd(true);
      return;
    }

    setQuestionNum(questionNum + 1);
  };

  const restartGame = function () {
    setEnd(false);
    setQuestionNum(0);
    setCorrectAnswers(0);
  };

  return (
    <div className="App">
      {end === false && (
        <Game
          question={questions[questionNum]}
          editQuestionNum={editQuestionNum}
          questionNum={questionNum}
          widthProgress={widthProgress}
        />
      )}
      {end === true && (
        <Result correctAnswers={correctAnswers} restartGame={restartGame} />
      )}
    </div>
  );
}

export default App;
