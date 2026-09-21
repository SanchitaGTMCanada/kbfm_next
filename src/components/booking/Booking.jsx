"use client";

import { motion } from "framer-motion";

import {
  HiCalendarDays,
  HiSparkles,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiBuildingOffice2,
  HiHeart,
  HiUserGroup,
} from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";
import Form from "./Form";

export default function Booking() {
  return (
    <section
      id="booking"
      className="
        relative
        flex
        w-full
        justify-center
        overflow-x-hidden
        overflow-y-hidden
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FAF6FC 34%, #F4ECF8 68%, #EAE0F2 100%)", marginTop:"30px"
      }}
    >
      {/* =====================================================
          RESPONSIVE FORM RULES
      ===================================================== */}

      <style>{`
        #booking .booking-form-wrap {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        #booking .booking-form-wrap form {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        #booking .booking-form-wrap input,
        #booking .booking-form-wrap textarea,
        #booking .booking-form-wrap select,
        #booking .booking-form-wrap button {
          max-width: 100%;
          box-sizing: border-box;
        }

        #booking .booking-form-wrap input,
        #booking .booking-form-wrap textarea,
        #booking .booking-form-wrap select {
          min-width: 0;
        }

        @media (max-width: 767px) {
          #booking .booking-form-wrap .grid-cols-2,
          #booking .booking-form-wrap .md\\:grid-cols-2,
          #booking .booking-form-wrap .md\\:grid-cols-3 {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          #booking .booking-form-wrap input,
          #booking .booking-form-wrap textarea,
          #booking .booking-form-wrap select {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          #booking .booking-form-wrap .md\\:grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      {/* =====================================================
          WHITE CENTER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[34%]
          h-[520px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-white
          blur-[115px]
          sm:h-[620px]
          sm:w-[820px]
          lg:h-[700px]
          lg:w-[900px]
        "
        style={{
          opacity: 0.78,
        }}
      />

      {/* =====================================================
          PRIMARY PLUM GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 22, 0],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[250px]
          top-[6%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#642E60]/[0.06]
          blur-[120px]
          sm:h-[520px]
          sm:w-[520px]
          lg:h-[600px]
          lg:w-[600px]
        "
      />

      {/* =====================================================
          SECONDARY PURPLE GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, -18, 0],
          y: [0, 22, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[5%]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#5B2E91]/[0.075]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
          lg:h-[550px]
          lg:w-[550px]
        "
      />

      {/* =====================================================
          GOLD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[4%]
          hidden
          h-[280px]
          w-[280px]
          rounded-full
          blur-[100px]
          sm:block
        "
        style={{
          background: "rgba(198,161,91,0.045)",
        }}
      />

      {/* =====================================================
          WATERMARK ICONS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-70px]
          top-[7%]
          hidden
          text-[#5B2E91]/[0.045]
          sm:block
        "
        style={{
          transform: "rotate(-10deg)",
        }}
      >
        <HiCalendarDays
          style={{
            width: "250px",
            height: "250px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-[-65px]
          top-[12%]
          hidden
          text-[#642E60]/[0.04]
          sm:block
        "
        style={{
          transform: "rotate(12deg)",
        }}
      >
        <HiSparkles
          style={{
            width: "290px",
            height: "290px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-[30%]
          hidden
          text-[#5B2E91]/[0.028]
          md:block
        "
        style={{
          transform: "rotate(-7deg)",
        }}
      >
        <HiShieldCheck
          style={{
            width: "330px",
            height: "330px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-[3%]
          bottom-[8%]
          hidden
          text-[#642E60]/[0.04]
          lg:block
        "
        style={{
          transform: "rotate(-7deg)",
        }}
      >
        <HiBuildingOffice2
          style={{
            width: "280px",
            height: "280px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-[18%]
          bottom-[5%]
          hidden
          text-[#5B2E91]/[0.04]
          lg:block
        "
        style={{
          transform: "rotate(8deg)",
        }}
      >
        <HiHeart
          style={{
            width: "280px",
            height: "280px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-[2%]
          bottom-[30%]
          hidden
          text-[#642E60]/[0.035]
          lg:block
        "
        style={{
          transform: "rotate(7deg)",
        }}
      >
        <HiUserGroup
          style={{
            width: "250px",
            height: "250px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-[48%]
          top-[11%]
          hidden
          text-[#C6A15B]/[0.025]
          md:block
        "
        style={{
          transform: "translateX(-50%) rotate(8deg)",
        }}
      >
        <HiCheckCircle
          style={{
            width: "340px",
            height: "340px",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[55%]
          hidden
          text-[#5B2E91]/[0.007]
          sm:block
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <HiSparkles
          style={{
            width: "420px",
            height: "420px",
          }}
        />
      </div>

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}
{/* DECORATIVE CIRCLES */}

<div
  className="
    pointer-events-none
    absolute
    -left-[280px]
    top-[10%]
    hidden
    h-[650px]
    w-[650px]
    rounded-full
    border
    border-[#642E60]/25
    lg:block
  "
/>

<div
  className="
    pointer-events-none
    absolute
    -left-[220px]
    top-[17%]
    hidden
    h-[500px]
    w-[500px]
    rounded-full
    border-3
    border-[#5B2E91]/22
    lg:block
  "
/>

<div
  className="
    pointer-events-none
    absolute
    -right-[280px]
    bottom-[2%]
    hidden
    h-[650px]
    w-[650px]
    rounded-full
    border
    border-[#5B2E91]/25
    lg:block
  "
/>

      {/* =====================================================
          FLOATING DOTS
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[18%]
          h-2.5
          w-2.5
          rounded-full
          bg-[#642E60]
          sm:h-3
          sm:w-3
        "
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[9%]
          h-2
          w-2
          rounded-full
          bg-[#C6A15B]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-[2000]
          mx-auto
          flex
          w-full
          max-w-[1300px]
          justify-center
          px-3
          sm:px-5
          md:px-7
          lg:px-10
        "
      >
        <Container>
          <div className="relative z-20 w-full">
            {/* =================================================
                HEADER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto text-center"
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  sm:gap-3
                "
                style={{
                  marginBottom: "18px",
                }}
              >
                <span
                  className="
                    h-[1px]
                    w-8
                    bg-gradient-to-r
                    from-transparent
                    to-[#642E60]/50
                    sm:w-12
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#642E60]
                    sm:text-[11px]
                    sm:tracking-[0.28em]
                  "
                >
                  Let's Connect
                </span>

                <span
                  className="
                    h-[1px]
                    w-8
                    bg-gradient-to-l
                    from-transparent
                    to-[#642E60]/50
                    sm:w-12
                  "
                />
              </div>

              <h2
                className="
                  text-[31px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-1px]
                  sm:text-[40px]
                  sm:tracking-[-1.3px]
                  md:text-[50px]
                  lg:text-[58px]
                  xl:text-[64px]
                "
                style={{
                  marginTop: "10px",
                  marginBottom: "12px",
                  color: "#642E60",
                }}
              >
                Request a{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #642E60 0%, #5B2E91 55%, #76508C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Service
                </span>
              </h2>

              <p
                className="
                  mx-auto
                 
                  text-[13px]
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                  md:text-[16px]
                "
                style={{
                  marginTop: "12px",
                  marginBottom: "18px",
                  color: "#6F6873",
                }}
              >
                Complete the form below and our team will contact you
                shortly to discuss your requirements.
              </p>

              <div
                className="
                  mx-auto
                  h-[3px]
                  w-10
                  rounded-full
                  sm:w-12
                "
                style={{
                  background:
                    "linear-gradient(90deg, #642E60 0%, #5B2E91 65%, #C6A15B 100%)",
                }}
              />
            </motion.div>

            {/* =================================================
                MAIN CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[1220px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#D6C8DF]
                bg-white
                shadow-[0_20px_60px_rgba(62,32,102,0.10)]
                sm:rounded-[30px]
                lg:rounded-[36px]
              "
              style={{
                marginTop: "45px",
              }}
            >
              {/* TOP ACCENT */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  z-20
                  h-[3px]
                "
                style={{
                  background:
                    "linear-gradient(90deg, #642E60 0%, #5B2E91 55%, #C6A15B 100%)",
                }}
              />

              <div
                className="
                  grid
                  min-w-0
                  grid-cols-1
                  lg:grid-cols-[minmax(320px,390px)_minmax(0,1fr)]
                "
              >
                {/* =================================================
                    LEFT PANEL
                ================================================= */}

                <div
                  className="
                    relative
                    min-w-0
                    overflow-hidden
                    text-white
                  "
                  style={{
                    background:
                      "linear-gradient(145deg, #40213C 0%, #54294F 38%, #642E60 68%, #5B2E91 100%)",
                  }}
                >
                  {/* Gold glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-16
                      h-[240px]
                      w-[240px]
                      rounded-full
                      blur-[60px]
                    "
                    style={{
                      background:
                        "rgba(198,161,91,0.12)",
                    }}
                  />

                  {/* Purple glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-[250px]
                      w-[250px]
                      rounded-full
                      blur-[60px]
                    "
                    style={{
                      background:
                        "rgba(91,46,145,0.25)",
                    }}
                  />

                  {/* Decorative rings */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-[90px]
                      top-[25%]
                      h-[270px]
                      w-[270px]
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-[50px]
                      top-[31%]
                      h-[190px]
                      w-[190px]
                      rounded-full
                      border
                      border-[#C6A15B]/15
                    "
                  />

                  {/* LEFT CONTENT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      min-w-0
                      flex-col
                    "
                    style={{
                      padding:
                        "34px 24px 30px 24px",
                    }}
                  >
                    <div>
                      {/* =================================================
                          MAIN SHINY ICON
                      ================================================= */}

                      <motion.div
                        initial={{
                          scale: 0.85,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="
                          relative
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-[22px]
                          border
                          border-[#E6D3A8]/40
                          bg-gradient-to-br
                          from-[#8A5C86]
                          via-[#642E60]
                          to-[#5B2E91]
                          shadow-[0_12px_35px_rgba(91,46,145,0.38)]
                          backdrop-blur-md
                          sm:h-[72px]
                          sm:w-[72px]
                          sm:rounded-[24px]
                        "
                        style={{
                          marginBottom: "22px",
                        }}
                      >
                        {/* Rotating ring */}

                        <motion.span
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            pointer-events-none
                            absolute
                            -inset-[5px]
                            rounded-[26px]
                            border
                            border-[#C6A15B]/25
                            sm:rounded-[28px]
                          "
                        />

                        {/* Pulsing glow */}

                        <motion.span
                          animate={{
                            scale: [1, 1.18, 1],
                            opacity: [
                              0.18,
                              0.38,
                              0.18,
                            ],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            pointer-events-none
                            absolute
                            -inset-3
                            rounded-[28px]
                            bg-[#C6A15B]/20
                            blur-xl
                          "
                        />

                        {/* Shine sweep */}


                        {/* Inner highlight */}

                        <span
                          className="
                            pointer-events-none
                            absolute
                            inset-[3px]
                            rounded-[19px]
                            border
                            border-white/15
                            bg-white/[0.06]
                            sm:rounded-[21px]
                          "
                        />

                        {/* Icon */}

                        <motion.div
                          animate={{
                            rotate: [0, 4, -4, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <HiSparkles
                            className="
                              text-[27px]
                              text-[#FFF8E8]
                              drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]
                              sm:text-[31px]
                            "
                          />
                        </motion.div>

                        {/* Gold sparkle */}

                        <motion.span
                          animate={{
                            scale: [1, 1.7, 1],
                            opacity: [
                              0.4,
                              0.9,
                              0.4,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            right-[7px]
                            top-[7px]
                            z-20
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#F6D98C]
                            shadow-[0_0_10px_rgba(246,217,140,0.95)]
                          "
                        />
                      </motion.div>

                      {/* Label */}

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.24em]
                          sm:text-[10px]
                          sm:tracking-[0.3em]
                        "
                        style={{
                          color: "#D9C5E1",
                        }}
                      >
                        Let's Connect
                      </span>

                      {/* Heading */}

                      <h3
                        className="
                          text-[28px]
                          font-semibold
                          leading-[1.08]
                          tracking-[-0.8px]
                          sm:text-[34px]
                          sm:tracking-[-1px]
                        "
                        style={{
                          marginTop: "10px",
                          marginBottom: "14px",
                          color: "#FAF5FB",
                        }}
                      >
                        Tell us how
                        <br />

                        <span
                          style={{
                            color: "#E7D7ED",
                          }}
                        >
                          we can help.
                        </span>
                      </h3>

                      <p
                        className="
                          max-w-[560px]
                          text-[13px]
                          leading-6
                          sm:text-[14px]
                          sm:leading-7
                        "
                        style={{
                          color: "#E2D2E8",
                          marginBottom: "26px",
                        }}
                      >
                        Whether you need one service or ongoing support,
                        our team is ready to understand your requirements.
                      </p>

                      {/* Industries */}

                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.24em]
                          sm:text-[10px]
                          sm:tracking-[0.28em]
                        "
                        style={{
                          color: "#D6BEE0",
                          marginBottom: "14px",
                        }}
                      >
                        Industries We Serve
                      </p>

                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-3
                          min-[400px]:grid-cols-2
                          sm:gap-x-4
                          sm:gap-y-4
                        "
                      >
                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Government Departments"
                          variant="gold"
                        />

                        <IndustryItem
                          icon={HiHeart}
                          text="Healthcare Facilities"
                          variant="rose"
                        />

                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Commercial Businesses"
                          variant="purple"
                        />

                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Industrial Operations"
                          variant="violet"
                        />

                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Residential Clients"
                          variant="lavender"
                        />

                        <IndustryItem
                          icon={HiUserGroup}
                          text="Non-Profit Organizations"
                          variant="goldPurple"
                        />

                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Property Management Companies"
                          variant="plum"
                        />

                        <IndustryItem
                          icon={HiBuildingOffice2}
                          text="Construction Companies"
                          variant="silverPurple"
                        />
                      </div>

                      {/* Accent */}

                      <div
                        className="
                          h-[3px]
                          w-10
                          rounded-full
                        "
                        style={{
                          marginTop: "22px",
                          background:
                            "linear-gradient(90deg, #C6A15B 0%, #8A68A0 100%)",
                        }}
                      />
                    </div>

                    {/* Trust */}

                    <div
                      className="
                        grid
                        gap-2.5
                        sm:gap-3
                      "
                      style={{
                        marginTop: "26px",
                      }}
                    >
                      <TrustItem
                        icon={HiShieldCheck}
                        title="Reliable & Professional"
                        description="Trusted local support"
                      />

                      <TrustItem
                        icon={HiUserGroup}
                        title="Community Focused"
                        description="Built around local needs"
                      />

                      <TrustItem
                        icon={HiBuildingOffice2}
                        title="Multiple Services"
                        description="One trusted partner"
                      />
                    </div>
                  </div>
                </div>

                {/* =================================================
                    RIGHT FORM
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                  }}
                  className="
                    relative
                    min-w-0
                    w-full
                    bg-white
                  "
                  style={{
                    padding: "30px 20px 34px 20px",
                  }}
                >
                  {/* Decorative ring */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      hidden
                      h-[170px]
                      w-[170px]
                      rounded-full
                      border
                      border-[#642E60]/10
                      sm:block
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      top-5
                      hidden
                      h-[80px]
                      w-[80px]
                      rounded-full
                      border
                      border-[#C6A15B]/20
                      sm:block
                    "
                  />

                  {/* Heading */}

                  <div
                    className="relative z-10"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#C6A15B]
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.22em]
                          text-[#5B2E91]
                          sm:text-[10px]
                          sm:tracking-[0.28em]
                        "
                      >
                        Request Information
                      </span>
                    </div>

                    <h3
                      className="
                        text-[27px]
                        font-semibold
                        leading-tight
                        tracking-[-0.8px]
                        sm:text-[32px]
                        lg:text-[36px]
                      "
                      style={{
                        color: "#4A2850",
                        marginBottom: "9px",
                      }}
                    >
                      Request a{" "}
                      <span
                        style={{
                          color: "#5B2E91",
                        }}
                      >
                        Service
                      </span>
                    </h3>

                    <p
                      className="
                        max-w-[680px]
                        text-[12px]
                        leading-6
                        sm:text-[13px]
                      "
                      style={{
                        color: "#6F6873",
                      }}
                    >
                      Complete the form below and our team will contact
                      you shortly to discuss your requirements.
                    </p>
                  </div>

                  {/* Form */}

                  <div
                    className="
                      relative
                      z-10
                      w-full
                      min-w-0
                      max-w-full
                    "
                    style={{
                      padding: "4px",
                    }}
                  >
                    <div className="booking-form-wrap w-full">
                      <Form />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                TRUST STRIP
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mx-auto
                flex
          
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-2
                px-2
                sm:gap-x-8
                sm:gap-y-3
              "
              style={{
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              <TrustStripItem
                icon={HiShieldCheck}
                text="Professional Service"
              />

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-[#D9D9E3]
                  sm:block
                "
              />

              <TrustStripItem
                icon={HiCheckCircle}
                text="Reliable Support"
              />

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-[#D9D9E3]
                  sm:block
                "
              />

              <TrustStripItem
                icon={HiHeart}
                text="Community Focused"
              />

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-[#D9D9E3]
                  sm:block
                "
              />

              <TrustStripItem
                icon={HiArrowRight}
                text="Quick Response"
              />
            </motion.div>
          </div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[80px]
          w-full
        "
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.78), rgba(255,255,255,0))",
        }}
      />
    </section>
  );
}

/* ============================================================
   INDUSTRY ITEM
============================================================ */

function IndustryItem({
  icon: Icon,
  text,
  variant = "purple",
}) {
  const variants = {
    gold: {
      background:
        "linear-gradient(135deg, rgba(198,161,91,0.20), rgba(255,255,255,0.04))",
      border: "rgba(246,217,140,0.28)",
      icon: "#F6D98C",
      glow: "rgba(246,217,140,0.28)",
      shine: "rgba(255,248,224,0.45)",
    },

    rose: {
      background:
        "linear-gradient(135deg, rgba(154,94,130,0.22), rgba(255,255,255,0.04))",
      border: "rgba(214,163,195,0.25)",
      icon: "#E9C8DF",
      glow: "rgba(214,163,195,0.24)",
      shine: "rgba(255,235,249,0.40)",
    },

    purple: {
      background:
        "linear-gradient(135deg, rgba(91,46,145,0.24), rgba(100,46,96,0.12))",
      border: "rgba(172,139,205,0.25)",
      icon: "#D9C0E9",
      glow: "rgba(172,139,205,0.28)",
      shine: "rgba(235,220,255,0.42)",
    },

    violet: {
      background:
        "linear-gradient(135deg, rgba(124,81,157,0.23), rgba(91,46,145,0.10))",
      border: "rgba(192,167,216,0.24)",
      icon: "#E0CFF0",
      glow: "rgba(192,167,216,0.26)",
      shine: "rgba(244,236,255,0.42)",
    },

    lavender: {
      background:
        "linear-gradient(135deg, rgba(132,101,157,0.20), rgba(255,255,255,0.05))",
      border: "rgba(209,193,222,0.25)",
      icon: "#E4D7EC",
      glow: "rgba(209,193,222,0.25)",
      shine: "rgba(250,244,255,0.45)",
    },

    goldPurple: {
      background:
        "linear-gradient(135deg, rgba(198,161,91,0.14), rgba(91,46,145,0.18))",
      border: "rgba(209,183,132,0.26)",
      icon: "#E8D39D",
      glow: "rgba(198,161,91,0.23)",
      shine: "rgba(255,244,207,0.42)",
    },

    plum: {
      background:
        "linear-gradient(135deg, rgba(100,46,96,0.25), rgba(126,76,122,0.12))",
      border: "rgba(202,151,193,0.23)",
      icon: "#E7CFE3",
      glow: "rgba(202,151,193,0.24)",
      shine: "rgba(255,236,252,0.42)",
    },

    silverPurple: {
      background:
        "linear-gradient(135deg, rgba(214,200,221,0.18), rgba(91,46,145,0.16))",
      border: "rgba(217,203,224,0.25)",
      icon: "#E4DCE9",
      glow: "rgba(217,203,224,0.24)",
      shine: "rgba(255,252,255,0.45)",
    },
  };

  const colors =
    variants[variant] || variants.purple;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.4,
      }}
      whileHover={{
        y: -2,
      }}
      className="
        group
        flex
        min-w-0
        items-center
        gap-2.5
      "
      style={{
        padding: "2px 0",
      }}
    >
      {/* Shiny icon */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          relative
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-xl
        "
        style={{
          background: colors.background,
          border: `1px solid ${colors.border}`,
          boxShadow: `0 6px 18px ${colors.glow}`,
          color: colors.icon,
        }}
      >
        {/* Rotating border */}

        <motion.span
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            -inset-[4px]
            rounded-[14px]
            border
          "
          style={{
            borderColor: `${colors.icon}25`,
          }}
        />

        {/* Pulse */}

        <motion.span
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -inset-1
            rounded-xl
            blur-md
          "
          style={{
            background: colors.glow,
          }}
        />

        {/* Shine */}

      

        {/* Inner glass */}

        <span
          className="
            pointer-events-none
            absolute
            inset-[2px]
            rounded-[10px]
            border
            border-white/10
            bg-white/[0.04]
          "
        />

        {/* Icon */}

        <motion.div
          animate={{
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <Icon
            className="text-[15px]"
            style={{
              filter:
                "drop-shadow(0 0 5px rgba(255,255,255,0.30))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Text */}

      <p
        className="
          min-w-0
          text-[12px]
          font-medium
          leading-4
          sm:text-[13px]
        "
        style={{
          color: "#E8DDEA",
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-2xl
        backdrop-blur-md
      "
      style={{
        padding: "11px 12px",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(198,161,91,0.18), rgba(255,255,255,0.08))",
          color: "#E7D7ED",
          border:
            "1px solid rgba(198,161,91,0.16)",
          boxShadow:
            "0 6px 18px rgba(198,161,91,0.10)",
        }}
      >
        <Icon className="text-[18px]" />
      </div>

      <div className="min-w-0">
        <p
          className="
            truncate
            text-[13px]
            font-semibold
            sm:text-[14px]
          "
          style={{
            color: "#F5EEF7",
          }}
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[11px]
            sm:text-[12px]
          "
          style={{
            color: "#D8C8DE",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   TRUST STRIP ITEM
============================================================ */

function TrustStripItem({
  icon: Icon,
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
      style={{
        padding: "4px 0",
      }}
    >
      <Icon
        className="
          text-[16px]
          sm:text-[18px]
        "
        style={{
          color: "#5B2E91",
        }}
      />

      <span
        className="
          text-[11px]
          font-medium
          sm:text-[13px]
        "
        style={{
          color: "#4E4652",
        }}
      >
        {text}
      </span>
    </div>
  );
}