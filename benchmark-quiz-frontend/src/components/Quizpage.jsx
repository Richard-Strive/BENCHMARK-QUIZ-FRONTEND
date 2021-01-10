import React, { useState, useEffect } from "react";

import "./Quizpage.css";

export default function Quiz({ id }) {
  const [quiz, setQuiz] = useState([]);

  const url = `http://localhost:5000/exam/${id}/answer`;

  const getQuiz = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        header: {
          "Content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(),
      });
      console.log(await response);
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
        <h1 className="animate__animated animate__backInDown">
          I AM THE QUESTION
        </h1>
      </div>
      <div className="quiz_row">
        <div className="question_one">
          {" "}
          <p>Bla Bla Bla</p>
        </div>
        <div className="question_two">
          <p>Bla Bla Bla </p>
        </div>
      </div>
      <div className="quiz_row">
        <div className="question_one">
          <p>Bla Bla Bla </p>
        </div>
        <div className="question_two">
          {" "}
          <p>Bla Bla Bla</p>
        </div>
      </div>
    </div>
  );
}
