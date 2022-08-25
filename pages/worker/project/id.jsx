import { useState } from "react";
import { Tab } from "@headlessui/react";
import { WorkerLayout, Card } from "./../../../src/";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const id = () => {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-primary p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                " px-10 rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.4] hover:text-white"
              )
            }
          >
            Details
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                " px-10 rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.4] hover:text-white"
              )
            }
          >
            Proposals
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("pt-2")}>
            <Card>
              <p>
                tab one Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis adipisci dicta inventore voluptatem voluptatum, esse
                maxime deleniti reiciendis eos enim consequuntur veritatis
                delectus dolor magni natus aperiam accusamus perspiciatis nisi?
              </p>
            </Card>
          </Tab.Panel>
          <Tab.Panel className={classNames("pt-2")}>
            <Card>
              <p>
                tab one Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis adipisci dicta inventore voluptatem voluptatum, esse
                maxime deleniti reiciendis eos enim consequuntur veritatis
                delectus dolor magni natus aperiam accusamus perspiciatis nisi?
              </p>
            </Card>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default id;
id.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
