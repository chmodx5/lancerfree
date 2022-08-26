/* eslint-disable react/jsx-key */
import React from "react";
import {
  WorkerLayout,
  AppTabs,
  Profile,
  Reviews,
  AppTable,
  FilterSearch,
  Pagination,
  PostProject,
} from "./../../src/";

const account = () => {
  const PostedProjects = () => (
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
    </div>
  );
  return (
    <div className="w-full">
      <AppTabs
        tabHeaders={["profile", "reviews", "Posted Projects", "Post Project"]}
        tabItems={[
          <Profile />,
          <Reviews />,
          <PostedProjects />,
          <PostProject />,
        ]}
      />
    </div>
  );
};

account.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
export default account;
