"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function loading() {
  const [loading, isLoading] = useState(true);
  return (
    <div className="m-2 p-4 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-4"></h1>
      {loading ? (
        <Skeleton count={10} />
      ) : (
        `Next.js skeleton loading`
      )}
      <br />
      <hr />
      <br />
      <input
        type="checkbox"
        checked={loading}
        onChange={(e) => isLoading(e.target.checked)}
      />{" "}
      Loading
    </div>
  );
}