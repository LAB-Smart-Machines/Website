import "../static/styles/theme.css";
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
// https://github.com/zeit/next.js/blob/master/errors/app-container-deprecated.md

import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
