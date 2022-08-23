import React from "react";
import { WorkerLayout, Sidebar } from "./../../src/";

const index = () => {
  return (
    <div className="grid grid-cols-12 space-x-4 py-4">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, atque?
        Dolorum, animi amet nihil quo excepturi recusandae accusamus, blanditiis
        eaque, aperiam itaque libero! Itaque praesentium blanditiis perferendis
        voluptas eligendi earum?
      </div>
    </div>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
