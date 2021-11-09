import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import {
  Planet,
  Vehicle,
  modVoyage,
  resetSelect,
} from "../Slices/SelectReducer";
import { initFailure, initSuccess } from "../Slices/statsReducer";
import { modVehicleCount, resetApi } from "../Slices/ApiReducer";
export const buttonClick = createAction("Action/buttonClick");
export const reset = createAction("Action/reset");
export const Submit = createAction("Api/Submit");

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case Submit.type:
      let planet_names = Object.values(getState().Select.planet).map(
        (x) => x.name
      );
      let vehicle_names = Object.values(getState().Select.vehicle).map(
        (x) => x.name
      );

      await fetch("https://findfalcone.herokuapp.com/token", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {},
      })
        .then((response) => response.json())
        .then(({ token }) => {
          fetch("https://findfalcone.herokuapp.com/find", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ token, planet_names, vehicle_names }),
          })
            .then((response) => response.json())
            .then((result) => {
              result.status === "success"
                ? dispatch(initSuccess({ result }))
                : dispatch(initFailure({ result }));
            });
        });

      next(action);

      return;
    case reset.type:
      next(action);
      dispatch(resetSelect());
      dispatch(resetApi());
      return;

    case buttonClick.type:
      if (payload.item.speed) {
        next(action);
        dispatch(Vehicle({ [payload.item.name]: [payload.item] }));
        dispatch(
          modVehicleCount({ data: payload.item, id: getState().Select.id })
        );

        dispatch(modVoyage("vehicle"));

        return;
      }
      next(action);
      dispatch(Planet({ [payload.item.name]: [payload.item] }));
      dispatch(modVoyage("planet"));

      return;

    default:
      return next(action);
  }
};
