"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { HiArrowRight } from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";


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

  const handleNavigation = (e, href) => {
    if (!href) return;

    e.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    const headerHeight = 120;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

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

    {/* =====================================================
    BACKGROUND SLIDER
===================================================== */}

<div className="absolute inset-0 bg-[#111116]">

  {/* =====================================================
      CHANGING BACKGROUND IMAGE
  ===================================================== */}

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

      IMPORTANT:
      This NEVER animates.
      Therefore darkness remains while images change.
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

      Darker only behind the heading/text.
      Right side image remains visible.
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
      VERY SUBTLE PURPLE BRAND TINT
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-[4]

      bg-gradient-to-r

      from-[#5B2E91]/10
      via-[#5B2E91]/[0.03]
      to-transparent
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
                  border-[#D4AF37]/70
                  bg-black/20
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                "
                style={{
                  paddingLeft: "12px",
                  paddingRight: "16px",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {/* Gold indicator */}

                <span
                  className="
                    h-2.5
                    w-2.5
                    flex-shrink-0
                    rounded-full
                    bg-[#D4AF37]
                    shadow-[0_0_12px_rgba(212,175,55,0.7)]
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
                      via-[#E7D7F5]
                      to-[#B78CDA]
                      bg-clip-text
                      text-transparent
                      drop-shadow-[0_4px_18px_rgba(91,46,145,0.45)]
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
                }}
              >
                K.B.F.M. Global Services N.W.T. Ltd. provides
                dependable security, caregiving, cleaning, and
                facility support services with professionalism,
                integrity, and a commitment to the communities
                we serve.
              </motion.p>

              {/* =====================================================
                  CTA BUTTONS
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.7,
                }}
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                "
                style={{
                  marginTop: "28px",
                  marginBottom: "42px",
                }}
              >
                {/* =================================================
                    PRIMARY CTA
                ================================================= */}

                <Button
                  href="#contact"
                  onClick={(e) =>
                    handleNavigation(e, "#contact")
                  }
                  className="
                    group
                    rounded-full
                    border
                    border-[#D4AF37]
                    bg-gradient-to-r
                    from-[#5B2E91]
                    to-[#7B4DB8]
                    px-6
                    py-3
                    font-semibold
                    text-white
                    shadow-[0_12px_30px_rgba(62,32,102,0.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:from-[#3E2066]
                    hover:to-[#5B2E91]
                    hover:shadow-[0_18px_40px_rgba(62,32,102,0.45)]
                  "
                >
                  Book Now
                </Button>

                {/* =================================================
                    SECONDARY CTA
                ================================================= */}

                <Link
                  href="#services"
                  onClick={(e) =>
                    handleNavigation(e, "#services")
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/40
                    bg-white/10
                    px-6
                    py-3
                    font-semibold
                    text-[14px]
                    text-white
                    backdrop-blur-xl
                    shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF37]
                    hover:bg-[#5B2E91]/80
                    hover:shadow-[0_12px_30px_rgba(91,46,145,0.30)]
                  "
                  style={{padding:"10px"}}
                >
                  <span className="text-white">
                    Explore Services
                  </span>

                  <HiArrowRight
                    className="
                      text-[18px]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </motion.div>

              {/* =====================================================
                  SERVICE HIGHLIGHTS
              ===================================================== */}

 {/* =====================================================
    SERVICE HIGHLIGHTS
===================================================== */}

{/*  */}
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
            border-white/40
            bg-black/10
            p-1.5
            backdrop-blur-sm
            shadow-[0_5px_20px_rgba(0,0,0,0.2)]
          "
        >
          <span
            className="
              h-2.5
              w-1
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_10px_rgba(212,175,55,0.7)]
            "
          />
        </div>
      </motion.div>
    </section>
  );
}