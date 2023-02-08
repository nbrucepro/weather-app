/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout";
import Banner from "components/Banner";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Loader from "components/Loader";
import { weatherState } from "types";
import { useDebounce } from "../utils/general";
import WeatherCard from "components/WeatherCard";
import Alert from "components/Alert";

const Home: NextPage = () => {
  const [weather, setWeather] = useState<weatherState>();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    async function fetchWeather() {
      setLoader(true);
      setWeather(undefined);
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debouncedQuery?.trim()}&appid=4e50e1cef8a010c08588308ee1909b2a`
        )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            if (data?.cod !== 200) {
              setError(data?.message || "Error");
              setWeather(undefined);
            } else {
              setWeather({
                temperature: data.main?.temp,
                description: data.weather[0]?.description,
                humidity: data.main?.humidity,
                windSpeed: data.wind?.speed,
                icon: data.weather[0]?.icon,
              });
              setError(null);
            }
          }
        })
        .catch((e: any) => {
          setError(e);
        });
        setLoader(false);
    }
    if(debouncedQuery){
      fetchWeather();
    }
  },[debouncedQuery]);

  const onQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
    setWeather(undefined);
    setError(null);
  };

  const onQueryClear = () => {
    setQuery("");
  };
  const onDismiss = () => {
    setError(null);
  }

console.log(error);
  return (
    <Layout>
      <div className="isolate bg-white">
        <Banner
          message="Get ready to learn how to build weather app with our YouTube tutorial! We can't wait to share it with you."
          link="/"
        />
        <Header />
        <main>
          <div className="relative">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
Weather
              </h1>
              <SearchBar
          query={query}
          onQuery={onQuery}
          onQueryClear={onQueryClear}
        />
        <div className="mt-16 flex gap-x-4 sm:justify-center">
          <Loader status={loader} />
          {query && weather && ! loader &&(
             <WeatherCard {...weather}/>
          )}
          {query && ! loader &&(
             <Alert error={error} onDismiss={onDismiss}/>
          )}
        </div>
       
            </div>
              </div> 
          </div>
        </main>
      </div>
    </Layout>
    // </GetStarted>
    // </Footer>
  );
};

export default Home;
