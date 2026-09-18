"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import { TypeAnimation } from "react-type-animation";

import {
  HiShieldCheck,
  HiSparkles,
  HiHeart,
} from "react-icons/hi2";

/* =========================================================
   HERO BACKGROUND VIDEO

   Place your video here:
   /public/assets/hero/hero-video.mp4
========================================================= */

const heroVideo = "/assets/hero/hero-video.mp4";

/* =========================================================
   HERO TEXT
========================================================= */

const heroWords = [
  "Care & Integrity",
  "Security & Trust",
  "Professional Service",
  "Commitment & Care",
];

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  /* =========================================================
     DEVICE / MOTION DETECTION
  ========================================================= */

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateDevice = () => {
      setIsMobile(mobileQuery.matches);
    };

    const updateMotion = () => {
      setReduceMotion(motionQuery.matches);
    };

    updateDevice();
    updateMotion();

    mobileQuery.addEventListener(
      "change",
      updateDevice
    );

    motionQuery.addEventListener(
      "change",
      updateMotion
    );

    return () => {
      mobileQuery.removeEventListener(
        "change",
        updateDevice
      );

      motionQuery.removeEventListener(
        "change",
        updateMotion
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#15151A]
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <div className="absolute inset-0 bg-[#111116]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "70% center",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* =====================================================
            LEFT CONTENT PROTECTION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-gradient-to-r
            from-[#111116]/80
            via-[#15131A]/45
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
            z-[3]
            bg-gradient-to-r
            from-[#5B2E91]/20
            via-[#5B2E91]/[0.06]
            to-transparent
          "
        />

        {/* =====================================================
            DESKTOP PURPLE GLOW

            Disabled on mobile.
        ===================================================== */}

        {!isMobile && !reduceMotion && (
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
        )}

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
            h-32
            bg-gradient-to-b
            from-black/30
            via-black/10
            to-transparent
            sm:h-40
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
            h-40
            bg-gradient-to-t
            from-black/45
            via-black/15
            to-transparent
            sm:h-48
          "
        />

        {/* =====================================================
            EDGE VIGNETTE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[6]
            bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.18)_100%)]
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
              paddingTop: isMobile
                ? "134px"
                : "155px",

              paddingBottom: isMobile
                ? "65px"
                : "75px",
            }}
          >
            <div
              className="
                w-full
                max-w-[850px]
                px-2
                sm:px-[10px]
              "
            >

              {/* =================================================
                  TRUST BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.55,
                  delay: reduceMotion
                    ? 0
                    : 0.1,
                  ease: "easeOut",
                }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#5B2E91]
                  bg-black/25
                  shadow-[0_6px_22px_rgba(91,46,145,0.20)]
                "
                style={{
                  padding:
                    "7px 16px 7px 12px",
                }}
              >
                {/* Purple / Gold indicator */}

                <span
                  className="
                    flex
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    border
                    border-[#FDD017]
                    bg-[#5B2E91]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-white
                    sm:text-[12px]
                    sm:tracking-[3px]
                  "
                >
                  Trusted • Professional • Reliable
                </span>
              </motion.div>

              {/* =================================================
                  MAIN HEADING
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.65,
                  delay: reduceMotion
                    ? 0
                    : 0.15,
                  ease: "easeOut",
                }}
                className="
                  text-[44px]
                  font-bold
                  leading-[1.04]
                  tracking-[-1.8px]
                  text-white
                  sm:text-[56px]
                  md:text-[66px]
                  lg:text-[76px]
                  lg:tracking-[-2px]
                "
                style={{
                  marginTop: "27px", minHeight:"192px"
                }}
              >
                {/* =================================================
                    STATIC HEADING
                ================================================= */}

                <span
                  className="
                    block
                    text-white
                    drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]
                  "
                >
                  Serving the North with
                </span>

                {/* =================================================
                    TYPEWRITER HEADING
                ================================================= */}

                <span
                  className="block"
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      heroWords[0],
                      2500,
                      heroWords[1],
                      2500,
                      heroWords[2],
                      2500,
                      heroWords[3],
                      2500,
                    ]}
                    wrapper="span"
                    speed={
                      isMobile
                        ? 38
                        : 45
                    }
                    deletionSpeed={
                      isMobile
                        ? 50
                        : 45
                    }
                    repeat={Infinity}
                    className="
                      inline-block
                      bg-gradient-to-r
                      from-[#FFFFFF]
                      via-[#D8C0EA]
                      to-[#9B6AC4]
                      bg-clip-text
                      text-transparent
                    "
                  />
                </span>
              </motion.h1>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.55,
                  delay: reduceMotion
                    ? 0
                    : 0.35,
                  ease: "easeOut",
                }}
                className="
                  max-w-[700px]
                  text-[16px]
                  font-medium
                  leading-[1.8]
                  text-white
                  sm:text-[18px]
                "
                style={{
                  marginTop: "28px",
                  marginBottom: "30px",
                  paddingRight: "20px",

                  /*
                   * Explicit white color so the text remains
                   * readable over the background image.
                   */
                  color: "#FFFFFF",
                }}
              >
                K.B.F.M. Group of Companies Professional
                Services Ltd. provides dependable security,
                caregiving, cleaning, and facility support
                services with professionalism, integrity, and
                a commitment to the communities we serve.
              </motion.p>

              {/* =================================================
                  THREE ICON DESIGN
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion
                    ? 0
                    : 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 0.6,
                  delay: reduceMotion
                    ? 0
                    : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center"
                style={{
                  marginTop: "38px",
                  marginBottom: "42px",
                }}
              >

                {/* =================================================
                    LEFT ICON
                ================================================= */}

                <motion.div
                  animate={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          y: [0, -6, 0],
                        }
                  }
                  transition={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="
                    relative
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#5B2E91]/60
                    bg-white/[0.12]
                    shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                    sm:h-[58px]
                    sm:w-[58px]
                  "
                >
                  <HiShieldCheck
                    className="
                      relative
                      z-10
                      text-[29px]
                      text-white
                      sm:text-[30px]
                    "
                  />
                </motion.div>

                {/* =================================================
                    CONNECTOR 1
                ================================================= */}

                <div
                  className="
                    relative
                    mx-3
                    h-[2px]
                    w-[40px]
                    overflow-hidden
                    rounded-full
                    bg-[#5B2E91]/35
                    sm:mx-4
                    sm:w-[55px]
                  "
                >
                  {!reduceMotion && (
                    <motion.span
                      animate={{
                        x: [
                          "-120%",
                          "220%",
                        ],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-1/2
                        rounded-full
                        bg-[#A66CFF]
                      "
                    />
                  )}
                </div>

                {/* =================================================
                    CENTER ICON
                ================================================= */}

                <motion.div
                  animate={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          y: [0, -8, 0],
                          scale: [
                            1,
                            1.035,
                            1,
                          ],
                        }
                  }
                  transition={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="
                    relative
                    flex
                    h-[70px]
                    w-[70px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[23px]
                    border
                    border-[#A66CFF]/70
                    bg-gradient-to-br
                    from-white/20
                    via-[#5B2E91]/75
                    to-[#452367]/90
                    shadow-[0_12px_38px_rgba(91,46,145,0.40)]
                    sm:h-[76px]
                    sm:w-[76px]
                    sm:rounded-[24px]
                  "
                >
                  {/* Inner border */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-[8px]
                      rounded-[17px]
                      border
                      border-[#A66CFF]/30
                      bg-white/[0.06]
                    "
                  />

                  {/* Icon */}

                  <HiSparkles
                    className="
                      relative
                      z-10
                      text-[32px]
                      text-white
                      sm:text-[35px]
                    "
                  />
                </motion.div>

                {/* =================================================
                    CONNECTOR 2
                ================================================= */}

                <div
                  className="
                    relative
                    mx-3
                    h-[2px]
                    w-[40px]
                    overflow-hidden
                    rounded-full
                    bg-[#5B2E91]/35
                    sm:mx-4
                    sm:w-[55px]
                  "
                >
                  {!reduceMotion && (
                    <motion.span
                      animate={{
                        x: [
                          "220%",
                          "-120%",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        right-0
                        top-0
                        h-full
                        w-1/2
                        rounded-full
                        bg-[#A66CFF]
                      "
                    />
                  )}
                </div>

                {/* =================================================
                    RIGHT ICON
                ================================================= */}

                <motion.div
                  animate={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          y: [0, -6, 0],
                        }
                  }
                  transition={
                    isMobile || reduceMotion
                      ? undefined
                      : {
                          duration: 4.2,
                          delay: 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="
                    relative
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#5B2E91]/60
                    bg-white/[0.12]
                    shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                    sm:h-[58px]
                    sm:w-[58px]
                  "
                >
                  <HiHeart
                    className="
                      relative
                      z-10
                      text-[28px]
                      text-white
                      sm:text-[29px]
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

          Hidden on mobile to remove another continuously
          animated element.
      ===================================================== */}

      {!isMobile && (
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }
          }
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
              shadow-[0_5px_18px_rgba(91,46,145,0.22)]
            "
          >
            <span
              className="
                h-2.5
                w-1
                rounded-full
                bg-[#5B2E91]
              "
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}