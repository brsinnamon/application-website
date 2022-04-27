import type { NextPage } from "next";
import Head from "next/head";
import SubHeading from "../components/SubHeading";

const Home: NextPage = () => {
  return (
    <div id="content">
      <Head>
        <title>Applications</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Web application testing site of applications for mariners or maritime professionals."
        />
        <meta name="keywords" content="maritime, mariner, amsa" />
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
          href="https://application-website-beta.vercel.app/"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div id="header">
        <h1>AppMarine</h1>
        <p>
          Easy reference page with various tools for maritime professionals.
        </p>
        <p>
          Developed throughout my career as a Mariner and shared here for your
          use!
        </p>
      </div>

      <div className="column left">
        <h2>Calculators for Mariners</h2>
        <p>Helper tools for mariners on the job.</p>
        <a href="/SRACalculatorPage">
          <SubHeading title="Safety Risk Assessment"></SubHeading>
        </a>
        <SubHeading title="Fuel Usage"></SubHeading>
        <SubHeading title="Tide Percentage Springs"></SubHeading>
        <h2>Useful References</h2>
        <p>Quick reference links for mariners.</p>
        <SubHeading title="COLREGS"></SubHeading>
        <SubHeading title="Lights and Shapes Handy Billy"></SubHeading>
        <SubHeading title="Current NAVAREA Warnings"></SubHeading>
      </div>

      <div className="column right">
        <h2>Web Dev Bookmarks</h2>
        <p>Easy reference docs for web development.</p>
        <SubHeading title="Linux Terminal Commands"></SubHeading>
        <SubHeading title="React"></SubHeading>
        <SubHeading title="Next.js"></SubHeading>
        <SubHeading title="Flask"></SubHeading>
      </div>
    </div>
  );
};

export default Home;
