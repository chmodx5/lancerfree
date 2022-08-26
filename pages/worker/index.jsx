import React from "react";
import { WorkerLayout, Sidebar, Card, Project, Pagination } from "./../../src/";

const index = () => {
  return (
    <div className="grid grid-cols-12 space-x-4 ">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="flex items-center space-x-4">
              <label className=" text-sm font-semibold  text-gray-900 dark:text-gray-400 w-20">
                Sort By
              </label>

              <select id="countries" className="form-input">
                <option selected value="US">
                  Latest
                </option>
                <option value="CA">Oldest</option>
                <option value="FR">Lowest Price</option>
                <option value="DE">Highest Price</option>
                <option value="DE">Fewest Bids</option>
                <option value="DE">Most Bids</option>
              </select>
            </div>
          </div>
        </Card>
        <Pagination /> <br />
        <div className="flex-row space-y-4 mb-4">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
