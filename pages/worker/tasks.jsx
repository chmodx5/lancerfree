/* eslint-disable react/jsx-key */
import React from "react";
import FilterSearch from "../../src/components/elements/FilterSearch";
import { AppTabs, WorkerLayout, AppTable, Pagination } from "./../../src/";

const tasks = () => {
  return (
    <div className="w-full">
      <AppTabs
        tabHeaders={["bids", "current ", "completed ", "all"]}
        tabItems={[
          <div className=" space-y-4">
            <FilterSearch />
            <AppTable
              tableHeader={[
                "Project",
                "total bids",
                "average bids",
                "my bids",
                "outcome",
              ]}
              tableData={[
                {
                  Project: "bids",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
                {
                  Project: "two",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
              ]}
            />
            <Pagination />
          </div>,
          <div className=" space-y-4">
            <FilterSearch />
            <AppTable
              tableHeader={[
                "Project",
                "total bids",
                "average bids",
                "my bids",
                "outcome",
              ]}
              tableData={[
                {
                  Project: "bids",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
                {
                  Project: "two",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
              ]}
            />
            <Pagination />
          </div>,
          <div className=" space-y-4">
            <FilterSearch />
            <AppTable
              tableHeader={[
                "Project",
                "total bids",
                "average bids",
                "my bids",
                "outcome",
              ]}
              tableData={[
                {
                  Project: "bids",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
                {
                  Project: "two",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
              ]}
            />
            <Pagination />
          </div>,
          <div className=" space-y-4">
            <FilterSearch />
            <AppTable
              tableHeader={[
                "Project",
                "total bids",
                "average bids",
                "my bids",
                "outcome",
              ]}
              tableData={[
                {
                  Project: "bids",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
                {
                  Project: "two",
                  "Total Bids": "bids",
                  "Average Bids": "dfas",
                  "My Bids": "dfas",
                  Outcome: "dfas",
                },
              ]}
            />
            <Pagination />
          </div>,
        ]}
      />
    </div>
  );
};

export default tasks;
tasks.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
