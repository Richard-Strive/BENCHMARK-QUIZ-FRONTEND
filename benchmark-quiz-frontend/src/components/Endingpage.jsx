import React from "react";
import "./Endingpage.css";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Endingpage() {

  
  //   const { width, height } = useWindowSize();
  return (
    <div className="endingpage">
      <h1 className="animate_animated animate__hinge">
        Weldone Surviv... ehm... Striver!!!
      </h1>

      <Confetti className="confetti" />
    </div>
  );
}

export default Endingpage;
