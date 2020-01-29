import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import favicon from "../images/favicon/favicon-32x32.png";

const App = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Laboratorio Smart Machines</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      {/* <!-- Icon in the highest resolution we need it for --> */}
      <link rel="icon" sizes="192x192" href={favicon}></link>
      {/* {Google Fonts} */}
      <link
        href="https://fonts.googleapis.com/css?family=Abril+Fatface|Raleway:400,500&display=swap"
        rel="stylesheet"
      />
      >
    </Head>

    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </React.Fragment>
);

export default App;
