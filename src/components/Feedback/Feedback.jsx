const Feedback = ({
  totalFeedback,
  positiveFeedback,
  FeedbackType: { good, neutral, bad },
}) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      {totalFeedback && <li>Positive:{positiveFeedback}%</li>}
    </ul>
  );
};

export default Feedback;
