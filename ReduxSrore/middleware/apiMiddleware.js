import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import {
  Planet,
  Vehicle,
  modVoyage,
  resetSelect,
} from "../Slices/SelectReducer";
import { modVehicleCount, resetApi } from "../Slices/ApiReducer";
export const buttonClick = createAction("Action/buttonClick");
export const reset = createAction("Action/reset");

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case reset.type:
      debugger;
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

  // const { url, onSuccess, onFailure } = action.type;

  // try {
  //   const response = await axios.get(url);
  //   dispatch({ type: onSuccess, payload: response });
  // } catch (error) {
  //   dispatch({ type: onFailure, payload: error });
  // }
};
