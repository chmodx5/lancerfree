import React from "react";
import { WorkerLayout } from "./../../src/components/layout/index";

const tasks = () => {
  return <div>Tasks</div>;
};

export default tasks;

tasks.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
