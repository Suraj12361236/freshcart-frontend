import React from "react";

export function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border w-full rounded-xl p-2 outline-none focus:ring-2 focus:ring-green-400"
    />
  );
}
