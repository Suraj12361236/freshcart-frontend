import React from "react";

export function Card({ children }) {
  return <div className="bg-white p-6 rounded-2xl shadow-md">{children}</div>;
}

export function CardHeader({ children }) {
  return <h2 className="text-xl font-semibold mb-3">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
