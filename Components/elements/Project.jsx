import React from "react";
import Card from "./Card";
import Chip from "./Chip";
import Rating from "./Rating";
import Reviews from "./Reviews";

const Project = () => {
  return (
    <Card>
      <div className="px-3 py-2">
        <div className="flex justify-between">
          <h3 className="text-xl capitalize text-primary font-bold mb-4">
            project title
          </h3>
          <p className="font-bold">2 bids</p>
        </div>

        <p className="mb-2  text-sm font-semibold">
          Budget kes: <span>1500</span> - <span>3000</span>
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          nostrum aliquam. Asperiores corrupti itaque, hic atque repellat
          corporis culpa facilis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eveniet, magnam!
        </p>
        <div className="space-x-2 mt-4">
          {["html", "css", "js", "react", "node", "mongodb"].map((item) => (
            <Chip key={item} text={item} />
          ))}
        </div>
        <div className="py-4 flex justify-between">
          <div className="flex">
            <Rating rating={3} />
            <Reviews reviews={40} />
          </div>

          <p>18 mins ago</p>
        </div>
      </div>
    </Card>
  );
};

export default Project;
