import { useDispatch, useSelector } from "react-redux";
import Buttonfncy from "./fancyButton";
import { reset, Submit } from "../ReduxSrore/middleware/apiMiddleware";

const statusbar = () => {
  const dispatch = useDispatch();
  const { vehicle, planet } = useSelector((state) => state.Select);

  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
      <div role="alert" class="flex flex-row items-baseline ">
        <div class="pt-8 flex-wrap  flex gap-8">
          <div class="flex flex-col">
            <div class="py-3 my-2 w-1\/2  bg-green-300 text-green-800 rounded border border-green-600">
              Voyage 1
            </div>
            <div class="h-8 mb-1 bg-gray-200 border border-gray-300  w-20">
              {planet[0] && planet[0].name}
            </div>
            <div class="h-11 mb-1 bg-gray-200 border border-gray-300  w-20">
              {vehicle[0] && vehicle[0].name}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="py-3 my-2 w-1\/2  bg-green-300 text-green-800 rounded border border-green-600">
              Voyage 2
            </div>
            <div class="h-8 mb-1 bg-gray-200 border border-gray-300  w-20">
              {planet[1] && planet[1].name}
            </div>
            <div class="h-11 mb-1 bg-gray-200 border border-gray-300  w-20">
              {vehicle[1] && vehicle[1].name}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="py-3 my-2 w-1\/2  bg-green-300 text-green-800 rounded border border-green-600">
              Voyage 3
            </div>
            <div class="h-8 mb-1 bg-gray-200 border border-gray-300  w-20">
              {planet[2] && planet[2].name}
            </div>
            <div class="h-11 mb-1 bg-gray-200 border border-gray-300  w-20">
              {vehicle[2] && vehicle[2].name}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="py-3 my-2 w-1\/2  bg-green-300 text-green-800 rounded border border-green-600">
              Voyage 4
            </div>
            <div class="h-8 mb-1 bg-gray-200 border border-gray-300  w-20">
              {planet[3] && planet[3].name}
            </div>
            <div class="h-11 mb-1 bg-gray-200 border border-gray-300  w-20">
              {vehicle[3] && vehicle[3].name}
            </div>
          </div>
        </div>
      </div>
      <Buttonfncy dispatchfunc={Submit} innerText={"SUBMIT"} />
      <Buttonfncy dispatchfunc={reset} innerText={"RESET"} />
    </div>
  );
};

export default statusbar;
