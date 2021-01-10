import React, { useState, useEffect } from "react";

import "./Quizpage.css";

export default function Quiz({ id }) {
  const [quiz, setQuiz] = useState();

  const quest = {
    providedAnswer: 1,
    selectedQuestion: 3,
  };

  const getQuiz = async () => {
    try {
      const response = await fetch(`http://localhost:5000/exam/${id}`, {
        method: "GET",
        mode: "cors",

        header: {
          "Content-type": "application/json",
          accept: "application/json",
        },
        // body: JSON.stringify(quest),
      });

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        setQuiz(data);
      }

      console.log(await response.json([]));
    } catch (error) {
      console.log(error);
    }
  };
  const postAnswer = async (index) => {
    try {
      const answer = {
        providedAnswer: index,
      };

      const response = await fetch(`http://localhost:5000/exam/${id}/answer`, {
        method: "POST",
        mode: "cors",

        header: {
          "Content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(quest),
      });

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        setQuiz(data);
      }

      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  });

  return (
    <div className="quiz_page">
      <div className="quiz_question">
        <h1 className="animate__animated animate__backInDown title">
          {quiz ? `${quiz.questions[0].text}` : "LOADING"}
        </h1>
      </div>
      <div className="quiz_row">
        <div className="question_one" onClick={() => postAnswer(1)}>
          <p>{quiz ? `${quiz.questions[0].answers[0].text}` : "LOADING"}</p>
        </div>
        <div className="question_two" onClick={() => postAnswer(2)}>
          <p>{quiz ? `${quiz.questions[0].answers[1].text}` : "LOADING"}</p>
        </div>
      </div>
      <div className="quiz_row">
        <div className="question_one" onClick={() => postAnswer(3)}>
          <p>{quiz ? `${quiz.questions[0].answers[2].text}` : "LOADING"}</p>
        </div>
        <div className="question_two" onClick={() => postAnswer(4)}>
          <p>{quiz ? `${quiz.questions[0].answers[3].text}` : "LOADING"}</p>
        </div>
      </div>
    </div>
  );
}
