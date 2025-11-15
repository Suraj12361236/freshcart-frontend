import React from "react";

export function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="border w-full rounded-xl p-2 outline-none focus:ring-2 focus:ring-green-400"
      rows={4}
    />
  );
}
