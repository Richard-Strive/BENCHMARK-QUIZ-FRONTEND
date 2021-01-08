import React from "react";
import Registration from "./subcomponents/Registration";
import "./landing.css";

function Landing() {
  return (
    <div className="landing_page">
      <h1 className="animate__animated animate__backInLeft">
        WELCOME TO YOUR FIRST BENCHMARK
      </h1>
      <div className="animate__animated animate__backInRight">
        <Registration />
      </div>
    </div>
  );
}

export default Landing;
