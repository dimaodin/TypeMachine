import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  startAgain,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
      How fast can you type?
      </h1>
      <h1 data-aos="fade-down" className="challenge-section-header">
      🕖🚀
      </h1>
      <TestContainer
        testInfo={testInfo}
        selectedParagraph={selectedParagraph}
        onInputChange={onInputChange}
        words={words}
        characters={characters}
        wpm={wpm}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
