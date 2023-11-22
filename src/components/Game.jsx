function Game({ question, editQuestionNum, widthProgress, questionNum }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${widthProgress * (questionNum + 1)}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((question, index) => (
          <li onClick={editQuestionNum} key={index}>
            {question}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
