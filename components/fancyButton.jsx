import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const Buttonfncy = ({ dispatchfunc, innerText }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div class="w-full lg:max-w-full lg:flex">
      {innerText === "SUBMIT" && (
        <button
          class="relative flex items-center justify-center w-1/4 px-5 py-5 text-lg font-medium text-white rounded-xl group"
          onClick={() => {
            router.push("/ResultScreen");
            dispatch(dispatchfunc());
          }}
        >
          <span class="absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
          <span class="absolute inset-0 border-2 border-gray-900 rounded-xl"></span>
          <span class="relative">{innerText}</span>
        </button>
      )}
      {innerText !== "SUBMIT" && (
        <button
          class="relative flex items-center justify-center w-1/4 px-5 py-5 text-lg font-medium text-white rounded-xl group"
          onClick={() => dispatch(dispatchfunc())}
        >
          <span class="absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
          <span class="absolute inset-0 border-2 border-gray-900 rounded-xl"></span>
          <span class="relative">{innerText}</span>
        </button>
      )}
    </div>
  );
};

export default Buttonfncy;
