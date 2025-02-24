function Questions({ questions, dispatch, answer }) {
  return (
    <div>
      <div className="options">
        <h4>{questions.question}</h4>
        <div className="options">
          {questions.options.map((option, index) => (
            <button
              className={`btn btn-option ${index === answer ? "answer" : ""} ${
                answer !== null
                  ? index === questions.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              disabled={answer !== null}
              key={option}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
