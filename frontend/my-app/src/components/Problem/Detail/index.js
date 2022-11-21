import React from "react";
import Split from "react-split";
import ProblemCodeLayout from "./ProblemCodeLayout";
import ProblemDescription from "./ProblemDescripion";
import "./style.css";

const ProblemDetailInfo = () => {
  return (
    <div>
      <Split
        className="wrap"
        sizes={[25, 75]}
        minSize={250}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <ProblemDescription />
        <ProblemCodeLayout />
      </Split>
    </div>
  );
};

export default ProblemDetailInfo;
