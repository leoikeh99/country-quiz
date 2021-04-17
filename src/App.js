import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";
import { getQuestions } from "./functions";
import background from "./images/background.png";
import "./App.css";

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
    </div>
  );
}

export default App;
