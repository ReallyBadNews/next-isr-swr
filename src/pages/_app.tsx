import "@/styles/index.css";
import "tailwindcss/utilities.css";
import * as React from "react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
