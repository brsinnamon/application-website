import type { NextPage } from "next";
import Head from "next/head";
import SubHeading from "../components/SubHeading";
import SRACalculator from "../components/SRACalculator";

const Home: NextPage = () => {
  return (
    <div id="content">
      <Head>
        <title>SRA Calculator</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Safety risk assessment calculator for mariners."
        />
        <meta
          name="keywords"
          content="mariner, maritime, safety risk asssessment"
        />
        <meta name="author" content="Brendan Sinnamon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta name="apple-mobile-web-app-title" content="SGM" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="canonical"
          href="https://www.skyohttps://application-website-beta.vercel.app/pages/SRACalculatorPage"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div id="header">
        <h1>Safety Risk Assessment</h1>
        <p>Safety Risk Assessment Calculator</p>
      </div>
    </div>
  );
};

export default Home;
