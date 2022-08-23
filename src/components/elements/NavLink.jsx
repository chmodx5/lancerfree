import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, title }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`${
          router.asPath === href && "text-primary "
        } font-bold capitalize hover:text-primary`}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
