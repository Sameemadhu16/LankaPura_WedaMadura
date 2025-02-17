"use client";

import React from "react";
import bannerImage from "../assets/landing_banner.jpg"; // Import your local image

export function Simple3DCard() {
  return (
    <div className="perspective-container">
      <div className="card bg-gray-50 relative group hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <h2 className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </h2>
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective
        </p>
        <div className="mt-4">
          {/* Using a standard img tag */}
          <img
            src={bannerImage}
            alt="thumbnail"
            className="h-60 w-full object-cover rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center mt-20">
          <a
            href="https://twitter.com/mannupaaji"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </a>
          <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
