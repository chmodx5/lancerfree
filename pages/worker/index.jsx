import React from "react";
// import { Project } from "../../Components/elements/index";
import { WorkerLayout } from "./../../src/components/layout/index";
// import { Card } from "../../Components/elements";
// import Button from "@mui/material/Button";

const index = () => {
  return (
    <div className=" grid grid-cols-12 space-x-3">
      index
      {/* <div className=" col-span-3">
        <Card>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          ab! Eos molestias laudantium neque fugiat reiciendis, incidunt ea
          deleniti fuga iure sit voluptas blanditiis enim cum impedit maiores
          possimus aut?
        </Card>
      </div>
      <div className="col-span-9 space-y-2 ">
        <Card>
          <div className="flex px-2 justify-between">
            <div className="text-sm">
              <span className="font-bold text-base">Projects </span>
              <span className=" text-xs">1 - 10 of 100 results</span>
            </div>

            <span>sortby</span>
          </div>
        </Card>
        <Button variant="contained" color="primary">
          dfsdfasd
        </Button>
        <Project />
        <Project />
        <Project />

        <Card> */}
      {/* pagination section */}
      {/*  <div className="flex justify-between px-2">
            <div className="text-sm">
              <span className="font-bold text-base">Projects </span>
              <span className=" text-xs">1 - 10 of 100 results</span>
            </div>
            <div className="flex justify-between">
              <button className="px-2 py-1 text-sm font-semibold text-gray-600 hover:text-gray-800">
                <span className="">prev</span>
              </button>
              <button className="px-2 py-1 text-sm font-semibold text-gray-600 hover:text-gray-800">
                <span className="">next</span>
              </button>
            </div>
          </div>
        </Card>
      </div> */}
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
