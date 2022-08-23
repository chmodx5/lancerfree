import * as React from "react";
import "./../styles/globals.css";

export default function MyApp({
  Component,

  pageProps,
}) {
  //setsup the layout( adv - stores the state of the layout )
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
