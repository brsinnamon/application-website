import type { NextPage } from "next";
import Head from "next/head";
import Track from "../components/Track";

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
        <h1>SKY ORB: hello game music</h1>
        <p>Orchestral and electronica music composer for games.</p>
      </div>

      <div className="column left">
        <h2>Orchestral Tracks</h2>
        <p>My showreel soundtrack for RPG-style games.</p>

        <Track
          title="Battle Encounter I"
          url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1169727778&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          download=""
        ></Track>

        <Track
          title="Battle Encounter II"
          url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202495410&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          download=""
        ></Track>

        <h2>Free Music Asset Packs For Indie Games</h2>
        <p>
          The following tracks are released under a Creative Commons Attribution
          license and are free for you to download and use in your indie game!
          Download the license under each track.
        </p>
        <p>
          Every track in the pack is loopable and over 3 minutes long to set the
          atmospheric mood of your game. They will create an immersive
          experience for the player.{" "}
        </p>

        <Track
          title="Waterfall Ruins"
          url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251576133&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          download=""
        ></Track>
      </div>

      <div className="column right">
        <h2>Q&amp;A</h2>
        <h3>
          I&apos;d like to use your free music, how does this license work?
        </h3>
        <p>
          Free tracks are released under Creative Commons. Attribute in your
          game with <i>&ldquo;Brendan Sinnamon (skyorbmusic.com)&rdquo;</i>.
        </p>
        <p>
          You are free to download, use and remix the free tracks any way you
          like! Make sure to include the attribution in your game.
        </p>
        <p>
          Get in touch with me if you do use it, I love hearing from game
          developers who use my music (published or not).
        </p>

        <h3>Who are you?</h3>
        <p>
          My name is Brendan and I write music for games. I&apos;ve been writing
          and studying music for a long time and I am inspired by the music of
          RPG and indie games.
        </p>
        <p>
          If you would like to get in touch with me about your project, I would
          be more than happy to chat about your vision and discuss how I can
          contribute. Big or small.
        </p>

        <h3>Who does your artwork?</h3>
        <p>
          I generate my own artwork using AI models. You can do the same thing
          here:{" "}
          <a href="https://colab.research.google.com/drive/1lx9AGsrh7MlyJhK9UrNTK8pYpARnx457?usp=sharing#scrollTo=g7EDme5RYCrt">
            generate your own images with artificial intelligence
          </a>
          .
        </p>

        <h3>How can I contact you?</h3>
        <p>
          Email me at <i>skyorbmusic@gmail.com</i>
        </p>
      </div>
    </div>
  );
};

export default Home;
