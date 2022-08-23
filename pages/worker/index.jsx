import React from "react";
import { WorkerLayout } from "./../../src/components/layout/index";

const index = () => {
  return <div>worker</div>;
};

export default index;
index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
