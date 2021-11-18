export default function Statistics({ good, neutral, bad, totalFeedbacks, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {totalFeedbacks}</li>
        <li>Positive feedback : {positivePercentage > 0 ? positivePercentage : 0}%</li>
      </ul>
    </div>
  );
}