import React from "react";

import { WorkerLayout, UserCard, Pagination, FilterSearch } from "./../../src/";

const freelancers = () => {
  return (
    <div className="space-y-4">
      <FilterSearch />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <Pagination />
    </div>
  );
};

export default freelancers;

freelancers.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
