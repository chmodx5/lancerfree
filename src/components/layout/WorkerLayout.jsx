import React from "react";
import { WorkerNavBar } from "../blocks";

const WorkerLayout = ({ children }) => {
  return (
    <div>
      <WorkerNavBar />

      {children}
    </div>
  );
};

export default WorkerLayout;
