"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import { TypeAnimation } from "react-type-animation";
import {
  HiShieldCheck,
  HiSparkles,
  HiHeart,
} from "react-icons/hi2";

const heroImages = [
  "/assets/hero/hero-1.jpg",
  "/assets/hero/hero-2.jpg",
  "/assets/hero/hero-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#15151A]
      "
    >
      {/* =====================================================
          BACKGROUND SLIDER
      ===================================================== */}

      <div className="absolute inset-0 bg-[#111116]">

        {/* CHANGING BACKGROUND IMAGE */}

        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1.04,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              opacity: {
                duration: 1.6,
                ease: "easeInOut",
              },
              scale: {
                duration: 7,
                ease: "easeOut",
              },
            }}
            style={{
              backgroundImage: `url(${heroImages[current]})`,
              backgroundSize: "cover",
              backgroundPosition: "70% center",
            }}
          />
        </AnimatePresence>

        {/* =====================================================
            PERMANENT DARK OVERLAY
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-black/25
          "
        />

        {/* =====================================================
            LEFT CONTENT PROTECTION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[3]
            bg-gradient-to-r
            from-[#111116]/75
            via-[#15131A]/40
            via-[48%]
            to-transparent
            to-[82%]
          "
        />

        {/* =====================================================
            PURPLE BRAND TINT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[4]
            bg-gradient-to-r
            from-[#5B2E91]/20
            via-[#5B2E91]/[0.06]
            to-transparent
          "
        />

        {/* =====================================================
            SUBTLE PURPLE GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[25%]
            z-[4]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#5B2E91]/10
            blur-[120px]
          "
        />

        {/* =====================================================
            TOP CINEMATIC FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[5]
            h-40
            bg-gradient-to-b
            from-black/30
            via-black/10
            to-transparent
          "
        />

        {/* =====================================================
            BOTTOM CINEMATIC FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[5]
            h-48
            bg-gradient-to-t
            from-black/45
            via-black/15
            to-transparent
          "
        />

        {/* =====================================================
            SUBTLE EDGE VIGNETTE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[6]
            shadow-[inset_0_0_150px_rgba(0,0,0,0.20)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          flex
          justify-center
        "
      >
        <Container className="relative z-20 h-full">

          <div
            className="
              flex
              min-h-[calc(100svh-110px)]
              items-center
              py-8
              lg:py-0
            "
            style={{
              paddingTop: "155px",
              paddingBottom: "75px",
            }}
          >

            <div
              className="
                w-full
                max-w-[850px]
              "
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >

              {/* =====================================================
                  BADGE
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#5B2E91]
                  bg-black/25
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(91,46,145,0.28)]
                "
                style={{
                  paddingLeft: "12px",
                  paddingRight: "16px",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >

                {/* Purple indicator */}
{/* Gold bordered brand indicator */}

<span
  className="
    h-2.5
    w-2.5
    flex-shrink-0
    rounded-full
    border-1
    border-[#FDD017]
    bg-[#5B2E91]
    
  "
/>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-white
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                    sm:text-[12px]
                  "
                >
                  Trusted • Professional • Reliable
                </span>

              </motion.div>

              {/* =====================================================
                  MAIN HEADING
              ===================================================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  text-[46px]
                  font-bold
                  leading-[1.04]
                  tracking-[-2px]
                  text-white
                  sm:text-[56px]
                  md:text-[66px]
                  lg:text-[76px]
                "
                style={{
                  marginTop: "28px",
                }}
              >

                {/* Main heading */}

                <span
                  className="
                    block
                    text-white
                    drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]
                  "
                >
                  Serving the North with
                </span>

                {/* Animated heading */}

                <span
                  className="block"
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      "Care & Integrity",
                      2500,
                      "Security & Trust",
                      2500,
                      "Professional Service",
                      2500,
                      "Commitment & Care",
                      2500,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                    className="
                      inline-block
                      bg-gradient-to-r
                      from-[#FFFFFF]
                      via-[#D8C0EA]
                      to-[#9B6AC4]
                      bg-clip-text
                      text-transparent
                      drop-shadow-[0_4px_18px_rgba(91,46,145,0.65)]
                    "
                  />
                </span>

              </motion.h1>

              {/* =====================================================
                  DESCRIPTION
              ===================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.7,
                }}
                className="
                  max-w-[700px]
                  text-[16px]
                  font-medium
                  leading-[1.9]
                  text-white
                  drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]
                  sm:text-[18px]
                "
                style={{
                  marginTop: "28px",
                  marginBottom: "30px",
                  paddingRight: "20px",
                  color: "white",
                  fontSize: "19px",
                }}
              >
                K.B.F.M. Group of Companies Professional Services Ltd. provides
                dependable security, caregiving, cleaning, and facility support
                services with professionalism, integrity, and a commitment to
                the communities we serve.
              </motion.p>

              {/* =====================================================
                  PREMIUM THREE ICON DESIGN
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  items-center
                "
                style={{
                  marginTop: "38px",
                  marginBottom: "42px",
                }}
              >

                {/* =================================================
                    LEFT ICON
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#5B2E91]/60
                    bg-white/[0.12]
                    backdrop-blur-xl
                    shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Strong purple glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[-12px]
                      rounded-full
                      bg-[#5B2E91]/25
                      blur-[18px]
                    "
                  />

                  {/* Inner glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[7px]
                      rounded-xl
                      bg-[#5B2E91]/20
                      blur-[4px]
                    "
                  />

                  <HiShieldCheck
                    className="
                      relative
                      z-10
                      text-[30px]
                      text-white
                      drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]
                      drop-shadow-[0_0_18px_rgba(91,46,145,0.95)]
                    "
                  />

                </motion.div>

                {/* =================================================
                    CONNECTOR
                ================================================= */}

                <div
                  className="
                    relative
                    mx-4
                    h-[2px]
                    w-[55px]
                    overflow-hidden
                    rounded-full
                    bg-[#5B2E91]/30
                  "
                >

                  <motion.span
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-transparent
                      via-[#A66CFF]
                      to-transparent
                      shadow-[0_0_12px_rgba(166,108,255,0.9)]
                    "
                  />

                </div>

                {/* =================================================
                    CENTER ICON
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -9, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-[76px]
                    w-[76px]
                    items-center
                    justify-center
                    rounded-[24px]
                    border
                    border-[#A66CFF]/70
                    bg-gradient-to-br
                    from-[#FFFFFF]/20
                    via-[#5B2E91]/70
                    to-[#452367]/90
                    backdrop-blur-2xl
                    shadow-[0_15px_50px_rgba(91,46,145,0.55)]
                  "
                >

                  {/* Large outer glow */}

                  <motion.span
                    animate={{
                      opacity: [0.25, 0.65, 0.25],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-[-13px]
                      rounded-[30px]
                      bg-[#5B2E91]/30
                      blur-[15px]
                    "
                  />

                  {/* Outer border */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[-6px]
                      rounded-[28px]
                      border
                      border-[#A66CFF]/40
                    "
                  />

                  {/* Inner glass */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[8px]
                      rounded-[18px]
                      border
                      border-[#A66CFF]/30
                      bg-white/[0.07]
                    "
                  />

                  {/* Icon glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      h-10
                      w-10
                      rounded-full
                      bg-[#A66CFF]/25
                      blur-[10px]
                    "
                  />

                  <HiSparkles
                    className="
                      relative
                      z-10
                      text-[35px]
                      text-white
                      drop-shadow-[0_0_6px_rgba(255,255,255,1)]
                      drop-shadow-[0_0_22px_rgba(166,108,255,1)]
                    "
                  />

                </motion.div>

                {/* =================================================
                    CONNECTOR
                ================================================= */}

                <div
                  className="
                    relative
                    mx-4
                    h-[2px]
                    w-[55px]
                    overflow-hidden
                    rounded-full
                    bg-[#5B2E91]/30
                  "
                >

                  <motion.span
                    animate={{
                      x: ["220%", "-120%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      right-0
                      top-0
                      h-full
                      w-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-transparent
                      via-[#A66CFF]
                      to-transparent
                      shadow-[0_0_12px_rgba(166,108,255,0.9)]
                    "
                  />

                </div>

                {/* =================================================
                    RIGHT ICON
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#5B2E91]/60
                    bg-white/[0.12]
                    backdrop-blur-xl
                    shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Purple glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[-12px]
                      rounded-full
                      bg-[#5B2E91]/25
                      blur-[18px]
                    "
                  />

                  {/* Inner glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[7px]
                      rounded-xl
                      bg-[#5B2E91]/20
                      blur-[4px]
                    "
                  />

                  <HiHeart
                    className="
                      relative
                      z-10
                      text-[29px]
                      text-white
                      drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]
                      drop-shadow-[0_0_18px_rgba(91,46,145,0.95)]
                    "
                  />

                </motion.div>

              </motion.div>

            </div>
          </div>

        </Container>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
        "
      >

        <div
          className="
            flex
            h-11
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-[#5B2E91]/70
            bg-black/10
            p-1.5
            backdrop-blur-sm
            shadow-[0_5px_20px_rgba(91,46,145,0.25)]
          "
        >

          <span
            className="
              h-2.5
              w-1
              rounded-full
              bg-[#5B2E91]
              shadow-[0_0_10px_rgba(91,46,145,0.9)]
            "
          />

        </div>

      </motion.div>

    </section>
  );
}