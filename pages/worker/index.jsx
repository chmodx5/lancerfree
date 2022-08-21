import React from "react";
import { Project } from "../../Components/elements/index";
import { WorkerLayout } from "./../../Components/Layouts/";

const index = () => {
  return (
    <div className=" h-full container mx-auto">
      worker
      <div className="w-3/4 float-right space-y-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
