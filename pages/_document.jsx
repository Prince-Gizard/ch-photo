import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="photographer" />
          <meta
            name="description"
            content="Добро пожаловать на сайт мамы Андрея"
          />
          <meta name="keywords" content="Детский фотограф" />

          <meta property="og:title" content="Мама Андрея" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />

          <meta name="twitter:title" content="Mama" />
          <meta
            name="twitter:description"
            content=" welcome to mama's official portfolio website. im profissional photographer and videographer based on Moscow."
          />
          <meta name="twitter:image" content="" />
          <meta name="twitter:card" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
