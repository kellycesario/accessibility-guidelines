import "../styles/globals.css";
import Head from "next/head";

import Layout from "../layouts";
import Svg from "components/ions/Svg";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Accessibility Guidelines</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The A11Y Project is an open source intiative that aims to make web Accessibility easier. It includes tips and information on how to test for Better Accessibility."
        />
        <link rel="icon" type="image" href="favicon.png" />
      </Head>
      <Layout>
        <Svg />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
