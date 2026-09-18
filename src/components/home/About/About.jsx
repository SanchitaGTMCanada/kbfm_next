"use client";

import Container from "@/components/ui/Container/Container";
import AboutContent from "./AboutContent";
import { HiPlay } from "react-icons/hi2";

export default function About() {
return (
<section
id="about"
className="
relative
overflow-hidden

```
    bg-gradient-to-br
    from-white
    via-[#FBF8FC]
    to-[#F0E7F2]

    flex
    justify-center

    pt-[150px]
    pb-24

    sm:pt-[170px]
    sm:pb-28

    lg:pt-[190px]
    lg:pb-32
  "
>
  {/* =====================================================
      TOP SEPARATION AREA
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-0
      top-0
      h-[150px]
      w-full

      bg-gradient-to-b
      from-[#F0E7F2]/60
      via-[#F7F1F8]/45
      to-transparent

      sm:h-[170px]
      lg:h-[190px]
    "
  />

  {/* Soft center fade */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[-40px]

      h-[180px]
      w-[70%]

      -translate-x-1/2

      rounded-full

      bg-[#642E60]/[0.06]

      blur-[80px]
    "
  />

  {/* =====================================================
      SMALL TOP DECORATIVE LINE
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[95px]

      z-10

      flex
      -translate-x-1/2

      items-center
      gap-3

      opacity-70

      sm:top-[110px]
      lg:top-[125px]
    "
  >
    <span
      className="
        h-[1px]
        w-14

        bg-gradient-to-r
        from-transparent
        to-[#642E60]/40
      "
    />

    <span
      className="
        h-1.5
        w-1.5

        rounded-full

        bg-[#642E60]/70
      "
    />

    <span
      className="
        h-[1px]
        w-14

        bg-gradient-to-l
        from-transparent
        to-[#642E60]/40
      "
    />
  </div>

  {/* =====================================================
      BACKGROUND EFFECTS
  ===================================================== */}

  {/* Large Primary Plum Glow - Left */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[220px]
      top-[8%]

      h-[600px]
      w-[600px]

      rounded-full

      bg-[#642E60]/[0.07]

      blur-[150px]
    "
  />

  {/* Large Secondary Purple Glow - Right */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[220px]
      top-[18%]

      h-[600px]
      w-[600px]

      rounded-full

      bg-[#5B2E91]/[0.08]

      blur-[150px]
    "
  />

  {/* Center White Glow */}

  <div
    className="
      pointer-events-none
      absolute
      left-[35%]
      top-[25%]

      h-[500px]
      w-[500px]

      rounded-full

      bg-white/80

      blur-[150px]
    "
  />

  {/* Bottom Secondary Purple Glow */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[-180px]
      left-[25%]

      h-[500px]
      w-[500px]

      rounded-full

      bg-[#5B2E91]/[0.09]

      blur-[150px]
    "
  />

  {/* =====================================================
      DECORATIVE OUTLINE CIRCLES
  ===================================================== */}

  {/* Large Right Circle */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[280px]
      top-[5%]

      h-[680px]
      w-[680px]

      rounded-full

      border
      border-[#642E60]/10
    "
  />

  {/* Second Right Circle */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[180px]
      top-[15%]

      h-[480px]
      w-[480px]

      rounded-full

      border
      border-[#5B2E91]/12
    "
  />

  {/* Left Bottom Circle */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[220px]
      bottom-[5%]

      h-[460px]
      w-[460px]

      rounded-full

      border
      border-[#642E60]/10
    "
  />

  {/* Small Circle */}

  <div
    className="
      pointer-events-none
      absolute
      left-[42%]
      top-[18%]

      h-[120px]
      w-[120px]

      rounded-full

      border
      border-[#5B2E91]/10
    "
  />

  {/* =====================================================
      FLOATING DOTS
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-[9%]
      top-[22%]

      h-2
      w-2

      rounded-full

      bg-[#642E60]/35
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      left-[12%]
      top-[25%]

      h-1.5
      w-1.5

      rounded-full

      bg-[#5B2E91]/35
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[12%]
      top-[30%]

      h-3
      w-3

      rounded-full

      bg-[#642E60]/25
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[22%]
      bottom-[20%]

      h-2
      w-2

      rounded-full

      bg-[#5B2E91]/35
    "
  />

  {/* =====================================================
      SMALL DOT GRID
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      bottom-[18%]

      grid
      grid-cols-5
      gap-3

      opacity-25
    "
  >
    {Array.from({ length: 25 }).map((_, index) => (
      <span
        key={index}
        className="
          h-1
          w-1

          rounded-full

          bg-[#642E60]
        "
      />
    ))}
  </div>

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-[2000]

      flex
      h-full
      w-[90%]
      mx-auto
      justify-center
    "
    style={{
      margin: "40px 0px 40px 0px",
    }}
  >
    <Container className="w-[100%] flex justify-center">
      <div
        className="
          relative
          z-10

          grid
          w-full

          items-center

          gap-16

          lg:grid-cols-2
          lg:gap-20
          xl:gap-24
        "
      >
        {/* =================================================
            ABOUT CONTENT
        ================================================= */}

        <AboutContent />

        {/* =================================================
            ABOUT VIDEO
        ================================================= */}

        <div className="relative w-full">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-[0_25px_70px_rgba(100,46,96,0.18)]
            "
          >
            <video
              src="/assets/about/about-video.mp4"
              controls
              playsInline
              preload="metadata"
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />

            {/* Decorative Border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl
                border
                border-white/20
              "
            />
          </div>

          {/* Play Button */}

          <button
            type="button"
            aria-label="Play video"
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-full

              bg-white

              text-[#642E60]

              shadow-[0_12px_35px_rgba(0,0,0,0.18)]

              opacity-0
            "
          >
            <HiPlay className="ml-1 text-2xl" />
          </button>
        </div>
      </div>
    </Container>
  </div>

  {/* =====================================================
      BOTTOM SOFT PURPLE TRANSITION
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0

      h-[120px]
      w-full

      bg-gradient-to-t
      from-[#F0E7F2]/65
      via-[#F7F1F8]/30
      to-transparent
    "
  />
</section>


);
}
