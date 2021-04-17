import React, { Fragment, useEffect, useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";
import { getQuestions } from "./functions";
import background from "./images/background.png";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
  const [questions, setQuestions] = useState(null);
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    const a = async () => {
      const question = await getQuestions();
      setQuestions(question);
    };

    a();
  }, []);
  return (
    <div className="app">
      <img src={background} alt="" className="background" />

      {questions ? (
        <Fragment>
          <h1>COUNTRY QUIZ</h1>
          {questions && stage < 10 && (
            <Question
              question={questions[stage]}
              setStage={setStage}
              stage={stage}
              result={result}
              setResult={setResult}
            />
          )}

          {stage > 9 && <Results result={result} />}
        </Fragment>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default App;
