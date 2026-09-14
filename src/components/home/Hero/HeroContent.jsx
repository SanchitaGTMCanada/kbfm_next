"use client";

import Link from "next/link";
import heroData from "./heroData";
import Button from "@/components/ui/Button/Button";

export default function HeroContent() {
  return (
    <div>

      {/* BADGE */}
   <span
  style={{
    width: "10px",
    height: "10px",
    minWidth: "10px",
    borderRadius: "50%",
    background: "#5B2E91",
    border: "2px solid #C6A15B",
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(198,161,91,0.7)",
  }}
/>

      {/* HEADING */}
      <h1
        className="
          mt-6
          text-[64px]
          font-bold
          leading-[1.1]
          text-white
        "
      >
        {heroData.title}
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          mt-7
          max-w-[620px]
          text-lg
          leading-8
          text-gray-200
        "
      >
        {heroData.description}
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex items-center gap-5">

        {/* PRIMARY BUTTON */}
        <Button href={heroData.primaryBtn.link}>
          {heroData.primaryBtn.text}
        </Button>

        {/* SECONDARY LINK */}
        <Link
          href={heroData.secondaryBtn.link}
          className="
            font-semibold
            text-white
            transition-all
            duration-300
            hover:text-[#C6A15B]
          "
        >
          {heroData.secondaryBtn.text}
        </Link>

      </div>

    </div>
  );
}