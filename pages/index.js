import Head from "next/head";
import Main from "../components/Main";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Keech | Web Developer</title>
        <meta name="description" content="Dan Keech's portfolio" />
        <link rel="icon" href="/assets/favicon.ico" />
        
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
