import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}