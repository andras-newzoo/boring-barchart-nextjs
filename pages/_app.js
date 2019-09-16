import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
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
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body, html {
            font-family: gill-sans-nova, sans-serif;
            font-weight: 300;
            font-style: normal;
            color: #333

            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    );
  }
}
