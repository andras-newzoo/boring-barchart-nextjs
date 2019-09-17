import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/hes1zwd.css"/>
          <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico"/>
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body, html {
            font-family: gill-sans-nova, sans-serif;
            font-weight: 300;
            font-style: normal;
            font-size: 62.5%;
            color: #333

            margin: 0;
            padding: 0;
            box-sizing: border-box;

            user-select: none;
          }
        `}</style>
      </Container>
    );
  }
}
