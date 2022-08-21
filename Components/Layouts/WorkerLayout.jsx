import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const WorkerLayout = ({ children }) => {
  const location = useRouter();
  return (
    <div className="min-h-screen bg-gray-200 overflow-auto">
      <>
        <nav className="bg-white border-gray-200 shadow-lg   rounded-b dark:bg-gray-900  w-full z-20">
          <div className="container flex flex-wrap justify-between items-center mx-auto py-2">
            <Link href="/" className="flex items-center ">
              <span className="self-center ml-2 text-xl font-bold whitespace-nowrap dark:text-white">
                <span className="text-primary">Lancer</span>
                <span>Free</span>
              </span>
            </Link>

            <div className="">
              <button className="flex items-center  space-x-2">
                <img
                  src="https://source.unsplash.com/random"
                  className="aspect-square h-10 rounded-full"
                  alt=""
                />
                <div className="text-sm">
                  <div className="font-bold ">@onesmas</div>
                  <div className=" text-xs text-right -mt-1">kes : 1000</div>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-gray-800 ">
            <div className="container mx-auto">
              <ul className="flex space-x-2">
                {[
                  {
                    name: "Dashboard",
                    path: "/worker",
                  },
                  {
                    name: "my tasks",
                    path: "/worker/tasks",
                  },
                  {
                    name: "inbox",
                    path: "/worker/inbox",
                  },
                  {
                    name: "freelancers",
                    path: "/worker/freelancers",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>
                      <a className="border-b-4 border-transparent inline-flex px-2 py-2 hover:border-white text-white hover:bg-gray-700 font-semibold capitalize">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
      <div className="container mx-auto pt-5">{children}</div>
    </div>
  );
};

export default WorkerLayout;
