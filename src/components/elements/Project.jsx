import React from "react";
import Chip from "./Chip";
import Rating from "./Rating";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import Card from "./Card";
import Link from "next/link";

const Project = () => {
  return (
    <Card>
      <Link href="/worker/project/id">
        <div className="hover:cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl text-primary capitalize">
              the project name
            </h3>
            <div className="flex space-x-4 text-lg ">
              <p className="font-semibold  text-gray-700"> 10 bids </p>
              <div>
                <p className="font-bold">Kes 700</p>

                <p className="text-sm">Average bid</p>
              </div>
            </div>
          </div>
          <p className="font-semibold mb-2">Budget kes 200 - 400</p>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            accusamus placeat nostrum ducimus mollitia consequatur fugiat
            laboriosam veniam molestias dolore non, excepturi natus, et numquam
            ut. Debitis optio minima vero?......
          </div>
          <div className="py-2">
            <ul>
              <li>
                <Chip item={"something"} />
              </li>
            </ul>
          </div>
          <div className="flex space-x-8">
            <Rating rating={1.2} />
            <div className="flex items-center space-x-2 text-base">
              <BsFillChatLeftTextFill className="text-xl" />
              <span className="-mt-2">10 Reviews</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default Project;
