import { questions } from "../data/questions";
function Result({ correctAnswers, restartGame }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correctAnswers} ответа из {questions.length}
      </h2>
      <button onClick={restartGame}>Попробовать снова</button>
    </div>
  );
}

export default Result;
