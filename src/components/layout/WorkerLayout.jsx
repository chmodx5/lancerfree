import React from "react";
import { WorkerNavBar } from "../blocks";

const WorkerLayout = ({ children }) => {
  return (
    <div>
      <WorkerNavBar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default WorkerLayout;
