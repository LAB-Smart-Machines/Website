import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import favicon from "../static/images/favicon/favicon-32x32.png";

const App = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Laboratorio Smart Machines</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      {/* <!-- Icono --> */}
      <link rel="icon" sizes="192x192" href={favicon}></link>
      {/* {Google Fonts} */}
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Raleway:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </React.Fragment>
);

export default App;
