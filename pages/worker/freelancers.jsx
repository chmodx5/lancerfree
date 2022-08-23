import React from "react";
import { WorkerLayout } from "./../../src/";

const freelancers = () => {
  return <div>freelancers</div>;
};

export default freelancers;

freelancers.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
