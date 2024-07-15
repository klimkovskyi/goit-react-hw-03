import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedback = () => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");

    if (savedFeedback?.length) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const [FeedbackType, setFeedbackType] = useState(initialFeedback);

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(FeedbackType));
  }, [FeedbackType]);

  const updateFeedback = FeedbackType => {
    setFeedbackType(prevFeedback => ({
      ...prevFeedback,
      [FeedbackType]: prevFeedback[FeedbackType] + 1,
    }));
  };

  const totalFeedback =
    FeedbackType.good + FeedbackType.neutral + FeedbackType.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((FeedbackType.good / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setFeedbackType({ good: 0, bad: 0, neutral: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          FeedbackType={FeedbackType}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
