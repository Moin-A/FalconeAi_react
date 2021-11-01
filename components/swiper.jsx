import React, { useRef, useState } from "react";
import { bugsAdded, loadapi, dummy } from "../ReduxSrore/Slices/ApiReducer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../ReduxSrore/middleware/apiMiddleware";
import Button from "./button";

export default function App({ List = [] }) {
  const { currentPlanet, currentVehicle } = useSelector(
    (state) => state.Select
  );

  const dispatch = useDispatch();

  return (
    <>
      <Swiper className="mySwiper   flex">
        {List.map((item) => (
          <SwiperSlide className="group">
            <Card dat={item} />
            {item.speed && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => {
                  dispatch(buttonClick({ item }));
                }}
              >
                <Button disabled={currentPlanet.distance > item.max_distance} />
              </div>
            )}
            {!item.speed && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => {
                  dispatch(buttonClick({ item }));
                }}
              >
                <Button
                  item={item}
                  currentVehicle={currentVehicle}
                  disabled={currentVehicle.max_distance < item.distance}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
