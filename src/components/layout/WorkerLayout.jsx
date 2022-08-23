import React from "react";
import WorkerNavBar from "../blocks/WorkerNavBar";

const WorkerLayout = ({ children }) => {
  return (
    <div>
      <WorkerNavBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default WorkerLayout;
