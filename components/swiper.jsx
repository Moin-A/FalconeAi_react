import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../ReduxSrore/middleware/apiMiddleware";
import Button from "./button";

export default function App({ List = [] }) {
  const { currentPlanet, currentVehicle, planet, vehicle, id } = useSelector(
    (state) => state.Select
  );
  let planetList = Object.values(planet).map((x) => x.name);

  const dispatch = useDispatch();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        className="mySwiper   flex"
      >
        {List.map((item) => (
          <SwiperSlide className="group ">
            <Card dat={item} />

            {item.speed && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => {
                  dispatch(buttonClick({ item }));
                }}
              >
                <Button
                  item={item}
                  disabled={
                    currentPlanet.distance > item.max_distance ||
                    item.name === currentVehicle.name ||
                    item.total_no == 0 ||
                    id === 4
                  }
                />
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
                  disabled={
                    currentVehicle.max_distance < item.distance ||
                    planetList.includes(item.name) ||
                    id === 4
                  }
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
