import Head from "next/head";
import Main from "../components/Main";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dan Keech's portfolio" />
        <title>Dan Keech | Web Developer</title>

        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Education />
    </>
  );
}
