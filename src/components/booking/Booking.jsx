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

import Left from "./Left";
import Form from "./Form";

export default function Booking() {
  return (
    <section
      id="booking"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
        flex
        justify-center
      "
      style={{
        display: "flex",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FAF6FC 38%, #F2EAF7 72%, #E9DDF1 100%)",
      }}
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      {/* White center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white
          blur-[120px]
        "
        style={{
          opacity: 0.78,
        }}
      />

      {/* Primary plum glow */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[260px]
          top-[5%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#642E60]/[0.055]
          blur-[130px]
        "
      />

      {/* Secondary purple glow */}

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[250px]
          bottom-[5%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#5B2E91]/[0.075]
          blur-[130px]
        "
      />

      {/* Soft secondary upper glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[3%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#5B2E91]/[0.025]
          blur-[110px]
        "
      />

      {/* =====================================================
          LARGE BACKGROUND WATERMARK ICONS
      ===================================================== */}

      {/* Calendar */}

      <div
        className="pointer-events-none absolute"
        style={{
          top: "7%",
          left: "-55px",
          color: "#5B2E91",
          opacity: 0.055,
          transform: "rotate(-10deg)",
          zIndex: 0,
        }}
      >
        <HiCalendarDays
          style={{
            width: "300px",
            height: "300px",
          }}
        />
      </div>

      {/* Sparkles */}

      <div
        className="pointer-events-none absolute"
        style={{
          top: "13%",
          right: "-60px",
          color: "#642E60",
          opacity: 0.045,
          transform: "rotate(12deg)",
          zIndex: 0,
        }}
      >
        <HiSparkles
          style={{
            width: "320px",
            height: "320px",
          }}
        />
      </div>

      {/* Shield */}

      <div
        className="pointer-events-none absolute"
        style={{
          left: "26%",
          top: "28%",
          color: "#5B2E91",
          opacity: 0.032,
          transform: "rotate(-7deg)",
          zIndex: 0,
        }}
      >
        <HiShieldCheck
          style={{
            width: "380px",
            height: "380px",
          }}
        />
      </div>

      {/* Building */}

      <div
        className="pointer-events-none absolute"
        style={{
          left: "6%",
          bottom: "8%",
          color: "#642E60",
          opacity: 0.045,
          transform: "rotate(-7deg)",
          zIndex: 0,
        }}
      >
        <HiBuildingOffice2
          style={{
            width: "300px",
            height: "300px",
          }}
        />
      </div>

      {/* Heart */}

      <div
        className="pointer-events-none absolute"
        style={{
          right: "20%",
          bottom: "5%",
          color: "#5B2E91",
          opacity: 0.045,
          transform: "rotate(8deg)",
          zIndex: 0,
        }}
      >
        <HiHeart
          style={{
            width: "300px",
            height: "300px",
          }}
        />
      </div>

      {/* Community */}

      <div
        className="pointer-events-none absolute"
        style={{
          right: "3%",
          bottom: "30%",
          color: "#642E60",
          opacity: 0.04,
          transform: "rotate(7deg)",
          zIndex: 0,
        }}
      >
        <HiUserGroup
          style={{
            width: "270px",
            height: "270px",
          }}
        />
      </div>

      {/* Check */}

      <div
        className="pointer-events-none absolute"
        style={{
          left: "48%",
          top: "11%",
          color: "#5B2E91",
          opacity: 0.028,
          transform: "translateX(-50%) rotate(8deg)",
          zIndex: 0,
        }}
      >
        <HiCheckCircle
          style={{
            width: "390px",
            height: "390px",
          }}
        />
      </div>

      {/* Large center watermark */}

      <div
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
          color: "#5B2E91",
          opacity: 0.008,
          zIndex: 0,
        }}
      >
        <HiSparkles
          style={{
            width: "520px",
            height: "520px",
          }}
        />
      </div>

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          top-[10%]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#642E60]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[17%]
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#5B2E91]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          bottom-[2%]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#5B2E91]/10
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
          right-[12%]
          top-[18%]
          h-3
          w-3
          rounded-full
          bg-[#642E60]
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
          left-[9%]
          bottom-[18%]
          h-2
          w-2
          rounded-full
          bg-[#5B2E91]
        "
      />

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
          marginTop: "40px",
        }}
      >
        <Container>
          <div
            className="
              relative
              z-20
              w-full
            "
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
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
              {/* Eyebrow */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[1px]
                    w-12
                    bg-gradient-to-r
                    from-transparent
                    to-[#642E60]/50
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#642E60]
                  "
                >
                  Let's Connect
                </span>

                <span
                  className="
                    h-[1px]
                    w-12
                    bg-gradient-to-l
                    from-transparent
                    to-[#642E60]/50
                  "
                />
              </div>

              {/* Heading */}

              <h2
                className="
                  text-[40px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-1.5px]
                  text-[#642E60]
                  sm:text-[50px]
                  md:text-[58px]
                  lg:text-[64px]
                "
                style={{
                  margin: "20px 0px 20px 0px",
                }}
              >
                Request a Service
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                
                  text-[15px]
                  leading-7
                  text-[#6F6873]
                  sm:text-[16px]
                "
                style={{
                  margin: "20px 0px 20px 0px",
                  fontSize: "17px",
                }}
              >
                Complete the form below and our team will contact you
                shortly to discuss your requirements.
              </p>

              {/* Primary / Secondary divider */}

              <div
                className="
                  mx-auto
                  mt-7
                  h-[3px]
                  w-12
                  rounded-full
                  bg-gradient-to-r
                  from-[#642E60]
                  to-[#5B2E91]
                "
              />
            </motion.div>

            {/* =================================================
                MAIN CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                mt-16
                w-full
                overflow-hidden
                rounded-[36px]
                border
                border-[#D6C8DF]
                bg-white
                shadow-[0_30px_100px_rgba(62,32,102,0.12)]
                lg:mt-20
              "
            >
              {/* TOP BRAND ACCENT */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  z-20
                  h-[3px]
                  bg-gradient-to-r
                  from-[#642E60]
                  via-[#5B2E91]
                  to-[#642E60]
                "
              />

              <div
                className="
                  grid
                  lg:grid-cols-[390px_1fr]
                "
              >
                {/* =================================================
                    LEFT PANEL
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#3E203A]
                    via-[#54294F]
                    to-[#5B2E91]
                    text-white
                  "
                >
                  {/* Background glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-28
                      -top-28
                      h-[330px]
                      w-[330px]
                      rounded-full
                      bg-[#8D70A7]/20
                      blur-[50px]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-28
                      -left-28
                      h-[300px]
                      w-[300px]
                      rounded-full
                      bg-[#642E60]/25
                      blur-[50px]
                    "
                  />

                  {/* Decorative ring */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-[100px]
                      top-[25%]
                      h-[300px]
                      w-[300px]
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-[55px]
                      top-[31%]
                      h-[210px]
                      w-[210px]
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  {/* Content */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                      justify-between
                    "
                    style={{
                      padding: "48px 42px",
                    }}
                  >
                    <div>
                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.05,
                        }}
                        className="
                          mb-8
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-[20px]
                          border
                          border-white/15
                          bg-white/10
                          text-[#E5D8EA]
                          backdrop-blur-md
                        "
                      >
                        <HiSparkles className="text-[28px]" />
                      </motion.div>

                      {/* Label */}

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.3em]
                          text-[#D7C3E0]
                        "
                      >
                        Let's Connect
                      </span>

                      {/* Heading */}

                      <h3
                        className="
                          mt-4
                          text-[34px]
                          font-semibold
                          leading-[1.1]
                          tracking-[-1px]
                          text-white
                          sm:text-[38px]
                        "
                        style={{
                          color: "#F1E8F4",
                        }}
                      >
                        Tell us how
                        <br />
                        we can help.
                      </h3>

                      <p
                        className="
                          mt-6
                          text-[14px]
                          leading-7
                          text-white/70
                        "
                        style={{
                          color: "#E8DDEA",
                          fontSize: "15px",
                        }}
                      >
                        Whether you need one service or ongoing support,
                        our team is ready to understand your requirements.
                      </p>

                      {/* INDUSTRIES WE SERVE */}

                      <div
                        className="mt-10"
                        style={{
                          marginTop: "30px",
                        }}
                      >
                        <p
                          className="
                            mb-5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.28em]
                            text-[#D7C3E0]
                          "
                          style={{
                            margin: "10px 0px 10px 0px",
                            fontSize: "16px",
                          }}
                        >
                          Industries We Serve
                        </p>

                        <div
                          className="
                            grid
                            grid-cols-2
                            gap-x-5
                            gap-y-4
                          "
                        >
                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Government Departments"
                          />

                          <IndustryItem
                            icon={HiHeart}
                            text="Healthcare Facilities"
                          />

                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Commercial Businesses"
                          />

                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Industrial Operations"
                          />

                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Residential Clients"
                          />

                          <IndustryItem
                            icon={HiUserGroup}
                            text="Non-Profit Organizations"
                          />

                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Property Management Companies"
                          />

                          <IndustryItem
                            icon={HiBuildingOffice2}
                            text="Construction Companies"
                          />
                        </div>
                      </div>

                      {/* Secondary accent line */}

                      <div
                        className="
                          mt-7
                          h-[3px]
                          w-12
                          rounded-full
                          bg-gradient-to-r
                          from-[#642E60]
                          to-[#8A68A0]
                        "
                      />
                    </div>

                    {/* Trust features */}

                    <div
                      className="
                        mt-12
                        space-y-3
                      "
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
                    x: 30,
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
                  className="relative bg-white"
                  style={{
                    padding: "54px",
                  }}
                >
                  {/* Decorative circle */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-[190px]
                      w-[190px]
                      rounded-full
                      border
                      border-[#642E60]/10
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-5
                      top-5
                      h-[90px]
                      w-[90px]
                      rounded-full
                      border
                      border-[#5B2E91]/10
                    "
                  />

                  {/* Form heading */}

                  <div
                    className="relative z-10"
                    style={{
                      marginBottom: "30px",
                    }}
                  >
                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#642E60]
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.28em]
                          text-[#5B2E91]
                        "
                      >
                        Request Information
                      </span>
                    </div>

                    <h3
                      className="
                        text-[32px]
                        font-semibold
                        leading-tight
                        tracking-[-1px]
                        text-[#642E60]
                        sm:text-[36px]
                      "
                    >
                      Request a Service
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[13px]
                        leading-6
                        text-[#2D2D2D]
                      "
                      style={{
                        opacity: 0.58,
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
                    "
                    style={{
                      padding: "5px",
                    }}
                  >
                    <Form />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                BOTTOM TRUST STRIP
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
                mt-9
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-8
                gap-y-4
              "
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "20px",
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
          h-[100px]
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

function IndustryItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-white/10
          text-[#D7C3E0]
        "
      >
        <Icon className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4
          text-white/75
        "
        style={{
          color: "#E8DDEA",
          fontSize: "14px",
        }}
      >
        {text}
      </p>
    </div>
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
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/[0.07]
        backdrop-blur-md
      "
      style={{
        padding: "13px 15px",
        margin: "20px 0px 20px 0px",
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
          bg-white/10
          text-[#D7C3E0]
        "
      >
        <Icon className="text-[19px]" />
      </div>

      <div>
        <p
          className="
            text-[12px]
            font-semibold
            text-white
          "
          style={{
            color: "#F0E5F2",
            fontSize: "16px",
          }}
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[10px]
            text-white/50
          "
          style={{
            color: "#E8DDEA",
            fontSize: "13px",
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
        margin: "20px 0px 20px 0px",
      }}
    >
      <Icon
        className="
          text-[18px]
          text-[#5B2E91]
        "
      />

      <span
        className="
          text-[11px]
          font-medium
          text-[#2D2D2D]
        "
        style={{
          opacity: 0.68,
          fontSize: "15px",
        }}
      >
        {text}
      </span>
    </div>
  );
}