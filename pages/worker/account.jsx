import React from "react";
import { WorkerLayout } from "./../../src/";

const account = () => {
  return <div>account</div>;
};

export default account;
account.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};