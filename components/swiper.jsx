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
  const { planet, vehicle } = useSelector((state) => state.Select);
  const dispatch = useDispatch();
  debugger;
  return (
    <>
      <Swiper className="mySwiper   flex">
        {List.map((item) => (
          <SwiperSlide dat={item} className="group">
            <Card />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => {
                dispatch(buttonClick({ item }));
              }}
            >
              <Button />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
