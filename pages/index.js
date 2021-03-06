import Head from "next/head";
import { loadapi } from "../ReduxSrore/Slices/ApiReducer";
import React, { useEffect } from "react";
import Swiper from "../components/swiper";
import { useDispatch, useSelector } from "react-redux";
import Statusbar from "../components/statusbar";

export default function Home({ posts }) {
  const dispatch = useDispatch();
  const { planetList, vehiclesList } = useSelector((state) => state.Api);
  useEffect(() => dispatch(loadapi({ posts })), []);

  return (
    <div>
      <Head>
        <title>Falcon Ai - The Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-2.5 rounded border border-green-600 m-1">
          <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 flex justify-center text-blueGray-800">
            Planets
          </h3>
          <Swiper List={planetList} />
        </div>
        <div className="p-2.5 rounded border border-green-600 m-1">
          <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 flex justify-center text-blueGray-800">
            Vehicles
          </h3>
          <Swiper List={vehiclesList} />
        </div>
      </div>
      <Statusbar />
    </div>
  );
}

export async function getStaticProps() {
  const res1 = await fetch("https://findfalcone.herokuapp.com/planets");
  const res2 = await fetch("https://findfalcone.herokuapp.com/vehicles");

  const posts1 = await res1.json();
  const posts2 = await res2.json();

  return {
    props: {
      posts: { posts1, posts2 },
    },
  };
}
