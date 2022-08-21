import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu } from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const WorkerLayout = ({ children }) => {
  const location = useRouter();
  return (
    <div className="min-h-screen bg-gray-200 overflow-auto">
      <>
        <nav className="bg-white border-gray-200 shadow-lg px-2 sm:px-4 py-1  rounded-b dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center ">
              <span className="self-center ml-2 text-xl font-bold whitespace-nowrap dark:text-white">
                <span className="text-primary">Lancer</span>
                <span>Free</span>
              </span>
            </Link>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="flex items-center">
                  <a
                    href="#"
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      location.pathname === "/" ? "text-primary" : ""
                    }`}
                  >
                    lsdfgsdfg
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

      {children}
    </div>
  );
};

export default WorkerLayout;
