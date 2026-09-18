"use client";

import Link from "next/link";
import heroData from "./heroData";
import Button from "@/components/ui/Button/Button";

export default function HeroContent() {
  return (
    <div className="w-full max-w-full">

      {/* =====================================================
          BADGE
      ===================================================== */}

      <div className="flex items-center">
        <span
          style={{
            width: "10px",
            height: "10px",
            minWidth: "10px",
            borderRadius: "50%",
            background: "#5B2E91",
            border: "2px solid #C6A15B",
            boxSizing: "border-box",
            boxShadow:
              "0 0 10px rgba(198,161,91,0.7)",
          }}
        />
      </div>

      {/* =====================================================
          HEADING
      ===================================================== */}

      <h1
        className="
          mt-4
          w-full
          text-[36px]
          font-bold
          leading-[1.02]
          tracking-[-1px]
          text-white

          sm:mt-5
          sm:text-[46px]
          sm:leading-[1.05]

          md:text-[56px]
          md:leading-[1.08]

          lg:mt-6
          lg:text-[64px]
          lg:leading-[1.1]
          lg:tracking-[-2px]
        "

        style={{minHeight:"192px"}}
      >
        {heroData.title}
      </h1>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-4
          w-full
          max-w-[620px]
          text-[14px]
          leading-6
          text-gray-200

          sm:mt-5
          sm:text-[16px]
          sm:leading-7

          lg:mt-7
          lg:text-lg
          lg:leading-8
        "
      >
        {heroData.description}
      </p>

      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-3

          sm:mt-8
          sm:gap-4

          lg:mt-10
          lg:gap-5
        "
      >
        {/* PRIMARY */}

        <Button href={heroData.primaryBtn.link}>
          {heroData.primaryBtn.text}
        </Button>

        {/* SECONDARY */}

        <Link
          href={heroData.secondaryBtn.link}
          className="
            whitespace-nowrap
            font-semibold
            text-white
            transition-colors
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