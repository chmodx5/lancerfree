import React from "react";
import Card from "./Card";
import Chip from "./Chip";
import Rating from "./Rating";

const UserCard = () => {
  return (
    <Card>
      <div className="grid grid-cols-12 space-x-4">
        <div className="col-span-2">
          <img
            src="https://source.unsplash.com/random"
            className=" aspect-square w-full"
            alt=""
            srcset=""
          />
        </div>
        <div className="space-y-3 col-span-10">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">@someonelse</h3>
            <h3 className="font-semibold text-l">Bid - Kes100</h3>
          </div>

          <div className="flex space-x-3">
            <div>
              <Rating rating={3} />
            </div>
            <p>12 Reviews</p>
            <div>96% completion rate</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi ratione nobis accusamus. Laudantium neque, totam repellendus
            esse, nihil fugiat rerum cumque eius numquam provident unde sapiente
            expedita, eum harum.
          </p>
          <div className="space-x-3">
            <Chip item="skill one" />
            <Chip item="skill one" />
            <Chip item="skill one" />
            <Chip item="skill one" />
            <Chip item="skill one" />
            <Chip item="skill one" />
            <Chip item="skill one" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
