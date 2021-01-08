import React from "react";
import "./Quizpage.css";

export default function Quiz() {
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
