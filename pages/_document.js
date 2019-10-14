import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }

  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="A collaction of my data visualisations"
          />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="https://use.typekit.net/hes1zwd.css" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/favicon.ico"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body, html {
              font-family: gill-sans-nova, sans-serif;
              font-weight: 300;
              font-style: normal;
              font-size: 62.5%;

              color: #333;

              margin: 0;
              padding: 0;
              box-sizing: border-box;

              user-select: none;
            }
        `}</style>
      </html>
    );
  }
}