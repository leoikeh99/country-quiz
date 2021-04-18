import React, { useState } from "react";
import { cleanString } from "../functions";
import globe from "../images/globe.svg";

const Question = ({ question, setStage, stage, result, setResult }) => {
  const [answered, setAnswered] = useState(false);
  const letters = ["A", "B", "C", "D"];

  const select = (option) => {
    if (!answered) {
      setAnswered(true);
      if (option === question.answer) {
        document.getElementById(cleanString(option)).className = "success";
        document.querySelector(`#${cleanString(option)} i`).style.display =
          "block";
        setResult(result + 1);
      } else {
        document.getElementById(cleanString(option)).className = "danger";
        document.getElementById(cleanString(question.answer)).className =
          "success";
        document.querySelector(
          `#${cleanString(question.answer)} i`
        ).style.display = "block";
        document.querySelector(`#${cleanString(option)} i`).style.display =
          "block";
      }
    }
  };

  const next = () => {
    setStage(stage + 1);
    setAnswered(false);
  };
  return (
    <div className="question">
      <img className="globe" src={globe} alt="globe.svg" />
      {question.image && (
        <img src={question.image} alt="flag" className="flag"></img>
      )}
      <p>{question.question}</p>
      <ul>
        {question.options.map((option) => (
          <li
            key={option}
            id={cleanString(option)}
            onClick={() => select(option)}
          >
            <span>
              {letters[question.options.findIndex((val) => val === option)]}
            </span>
            <span style={{ marginRight: "15px" }}>{option}</span>
            {question.answer === option ? (
              <i
                className="far fa-check-circle"
                style={{ display: "none" }}
              ></i>
            ) : (
              <i
                className="far fa-times-circle"
                style={{ display: "none" }}
              ></i>
            )}
          </li>
        ))}
      </ul>
      {answered && <button onClick={next}>Next</button>}
      <span className="q">Q{stage + 1}/10</span>
    </div>
  );
};
export default Question;
