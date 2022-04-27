import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div id="content">
      <Head>
        <title>SKY ORB MUSIC</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Game music composer." />
        <meta
          name="keywords"
          content="music, soundtrack, gamemusic, orchestral, gamemusicmaker, game, indie, maker, audio"
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
        <link rel="canonical" href="https://www.skyorbmusic.com" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div id="header">
        <h1>HELLO SKY ORB MUSIC</h1>
        <p>Orchestral and electronica music composer for games.</p>
      </div>
    </div>
  );
};

export default Home;
