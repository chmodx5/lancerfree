import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaPinterestP,
  FaGithubAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-gray-100">
      <div className="">
        <div className="container mx-auto py-16 px-6 sm:px-0 border-y border-gray-300 dark:border-gray-500">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-12 md:col-span-4">
              <h1 className=" uppercase text-2xl font-bold mb-8">
                <span className=" text-primary">W.</span>Onesmas
              </h1>

              <p>
                If you're looking for a web developer that can help you create a
                stunning, user-friendly website, look no further! I have years
                of experience in web development and design, and I can create a
                website that's perfect for your business or personal needs.
                Contact me today to get started!
              </p>
              <div className="flex gap-5 mt-12">
                <Link to="/">
                  <BsInstagram />
                </Link>
                <Link to="/">
                  <BsTwitter />
                </Link>
                <Link to="/">
                  <FaPinterestP />
                </Link>
                <Link to="/">
                  <FaGithubAlt />
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            <div className="col-span-12 md:col-span-3">
              <p>one</p>
              <br />

              <div>
                <ul className="footer-contacts-list space-y-3">
                  {[
                    {
                      desc: "Nairobi, Kenya",
                      icon: <HiOutlineLocationMarker />,
                    },
                    {
                      desc: "(+254)746 405 792",
                      icon: <FaPhoneAlt />,
                    },
                    {
                      desc: "onesmaswanjala2021@gmail.com",
                      icon: <FaRegEnvelope />,
                    },
                  ].map((contact, index) => (
                    <li key={index}>
                      <div className="flex space-x-3 items-center">
                        <span>{contact.icon}</span>
                        <p>{contact.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:col-span-1"></div>

            <div className="col-span-12 md:col-span-3 ">
              <p>two</p>
              <br />

              <ul className="footer-contacts-list space-y-3">
                {[
                  {
                    title: "Home",
                    link: "/",
                  },
                  {
                    title: "About",
                    link: "/about",
                  },
                  {
                    title: "Portfolio",
                    link: "/portfolio",
                  },
                  {
                    title: "Contact",
                    link: "/contact",
                  },
                ].map((contact, index) => (
                  <li key={index}>
                    <Link to={contact.link} className="hover:font-semibold">
                      {contact.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" dark:bg-darkbackground py-8">
        <div className="  flex justify-center">
          <span className="text-xl">©</span>
          <span className="mr-2 ml-2">{new Date().getFullYear()} </span>
          <span> W.Onesmas </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
