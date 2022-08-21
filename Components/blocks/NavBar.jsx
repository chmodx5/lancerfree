import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu } from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NavBar = () => {
  const location = useRouter();
  const [navLinks, setNavLinks] = useState([
    {
      name: "Home",
      path: "#hero",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "services",
      path: "#services",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ]);
  const solutions = [
    {
      name: "Insights",
      description: "Measure actions your users take",
      href: "##",
    },
    {
      name: "Automations",
      description: "Create your own targeted content",
      href: "##",
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
    },
  ];
  return (
    <>
      <nav className="bg-white border-gray-200 shadow-lg px-2 sm:px-4 py-1  rounded-b dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center ">
            <span className="self-center ml-2 text-xl font-bold whitespace-nowrap dark:text-white">
              <span className="text-primary">W. </span>
              <span>Onesmas</span>
            </span>
          </Link>

          <Popover className="">
            {({ open }) => (
              <>
                <Popover.Button
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className={`
                        ${
                          open ? "" : ""
                        }inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                `}
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 top-0 w-3/4  h-screen bg-transparent left-0">
                    <div className=" w-full rounded-r-lg h-full shadow-lg bg-white py-5">
                      <ul className="">
                        {navLinks.map((link) => (
                          <li className="flex items-center" key={link.name}>
                            <a
                              href={link.path}
                              className={`block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent w-full ${
                                location.pathname === link.path
                                  ? "text-primary"
                                  : ""
                              }`}
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link) => (
                <li className="flex items-center" key={link.name}>
                  <a
                    href={link.path}
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      location.pathname === link.path ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
