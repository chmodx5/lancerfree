import { useState } from "react";
import { useRouter } from "next/router";
import { GuestLayout } from "../Components/Layouts";

export default function Home() {
  const location = useRouter();
  const [count, setCount] = useState();
  return (
    <div>
      lorem ipsum
      {location.asPath}
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
