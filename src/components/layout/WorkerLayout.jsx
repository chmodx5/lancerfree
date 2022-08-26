import React from "react";
import WorkerNavBar from "../blocks/WorkerNavBar";

const WorkerLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <WorkerNavBar />
      <div className="container mx-auto mt-20">{children}</div>
    </div>
  );
};

export default WorkerLayout;
