import React from "react";
import { WorkerLayout } from "./../../src/";

const inbox = () => {
  return <div>inbox</div>;
};

export default inbox;

inbox.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
