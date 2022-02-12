import Head from "next/head";
import React from "react";
import { AutoComplete } from "../components/AutoComplete";
import { data } from "../utils/data";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AutoComplete
        value={[data[1], data[2]]}
        onChange={(newValue) => console.log(newValue)}
        options={data}
        getLabel={(item) => item.name}
        getValue={(item) => item.name}
        resetOnSelect
      />
    </div>
  );
};

export default Index;
