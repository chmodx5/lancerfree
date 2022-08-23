import React from "react";
import { WorkerLayout } from "./../../src/";

const tasks = () => {
  return <div>tasks</div>;
};

export default tasks;
tasks.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
