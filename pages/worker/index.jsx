import React from "react";
import { WorkerLayout, Sidebar, Card, Project } from "./../../src/";

const index = () => {
  return (
    <div className="grid grid-cols-12 space-x-4 ">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">
              Projects
              <span className="font-medium  text-sm"> 1-20 of 200 results</span>
            </h1>
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
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  100
                </span>{" "}
                Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium  bg-gray-200 border border-gray-300 rounded-l hover:bg-gray-400 hover:text-white ">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Prev
                </button>
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium  bg-gray-200 border border-gray-300 rounded-r hover:bg-gray-400 hover:text-white">
                  Next
                  <svg
                    aria-hidden="true"
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Card>
        <br />

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
        <Card>
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px font-semibold">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 rounded-l hover:bg-gray-400 hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-4 text-sm font-semibold  bg-gray-200 border border-gray-300 hover:bg-gray-400 hover:text-white rounded-r"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </Card>
      </div>
    </div>
  );
};

export default index;
index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
