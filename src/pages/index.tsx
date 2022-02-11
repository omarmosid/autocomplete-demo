import Head from "next/head";
import React from "react";
import { AutoComplete } from "../components/AutoComplete";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AutoComplete />
    </div>
  );
};

export default Index;