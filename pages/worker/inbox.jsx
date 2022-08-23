import React from "react";
import { WorkerLayout } from "./../../src/components/layout/index";

const inbox = () => {
  return <div>inbox</div>;
};

export default inbox;

inbox.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
