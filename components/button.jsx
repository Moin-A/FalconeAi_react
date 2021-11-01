import React from "react";

function Button({ disabled, item, currentVehicle }) {
  return (
    <button
      disabled={disabled}
      name="vehicle"
      class="buttons disabled:cursor-not-allowed cursor-pointer fill-mode focus:animate-spin-slow bg-green-400 rounded-lg p-2 hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
      tabindex="0"
    >
      SELECT
    </button>
  );
}

export default Button;
