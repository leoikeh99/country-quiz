import React from "react";
import win from "../images/win.svg";

const Results = ({ result }) => {
  return (
    <div className="results">
      <img src={win} alt="win.svg" />
      <h2>Results</h2>
      <p>
        You got <span>{result}</span> correct answers
      </p>
      <button onClick={() => window.location.reload()}>
        <i className="fas fa-redo"></i> Try again
      </button>
    </div>
  );
};
export default Results;
