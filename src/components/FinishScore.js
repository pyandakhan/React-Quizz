function FinishScore({ points, numPoints, highscore, dispatch }) {
  const percentage = (points / numPoints) * 100;
  let emoji;
  if (percentage > 50 && percentage < 80) {
    emoji = "😀";
  }
  if (percentage > 80 && percentage <= 100) {
    emoji = "🥇";
  }
  if (percentage < 50 && percentage > 10) {
    emoji = "☹️";
  }
  if (percentage < 10) {
    emoji = "🤦‍♂️";
  }
  return (
    <>
      <p className="result">
        {emoji} You scored {points} of of {numPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">( Highscore: {highscore} )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScore;
