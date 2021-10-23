import axios from "axios";
export const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);

  // const { url, onSuccess, onFailure } = action.type;

  // try {
  //   const response = await axios.get(url);
  //   dispatch({ type: onSuccess, payload: response });
  // } catch (error) {
  //   dispatch({ type: onFailure, payload: error });
  // }
};
