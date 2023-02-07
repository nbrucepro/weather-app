/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import Banner from "components/Banner";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import { weatherState } from "types";

const Home: NextPage = () => {
  const [query,setQuery] = useState('');
  const [error,setError] = useState(null);
  const [loader,setLoader] = useState(false);
  const [weather,setWeather] = useState<weatherState>();
  
  const onQuery = (e:ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  const onQueryClear = () => {
    setQuery('');
  };

  return (
    <Layout>
      <div className="isolate bg-white">
        <Banner
        message="Get ready to learn how to build weather app with our YouTube tutorial! We can't wait to share it with you."
        link="/"
        />
        <Header/>
        <SearchBar query={query} onQuery={onQuery} onQueryClear={onQueryClear}/>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <Loader status={loader}/>
          {
            query && (
              <></>
            )
          }

        </div>
        </div>
    </Layout>
  );
};

export default Home;