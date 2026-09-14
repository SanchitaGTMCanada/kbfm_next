"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  HiUserGroup,
  HiSparkles,
  HiUsers,
  HiStar,
  HiShieldCheck,
  HiHeart,
  HiArchiveBox,
  HiBriefcase,
  HiOutlineHeart,
  HiShoppingCart,
  HiWrenchScrewdriver,
  HiDocumentText,
} from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";

export default function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);

  const serviceItems = [
    {
      number: "01",
      title: "Security Services",
      description:
        "Protecting people, property, and assets with trained and licensed security professionals.",
      icon: HiShieldCheck,
      image: "/assets/services/service-1.jpeg",
    },

    {
      number: "02",
      title: "Cleaning Services",
      description:
        "Professional cleaning solutions designed to create healthy, safe, and welcoming environments.",
      icon: HiSparkles,
      image: "/assets/services/service-3.jpeg",
    },

    {
      number: "03",
      title: "Caregiver & Personal Support Services",
      description:
        "Compassionate support that helps individuals maintain independence, dignity, and quality of life.",
      icon: HiHeart,
      image: "/assets/services/service-2.jpeg",
    },

    {
      number: "04",
      title: "General Labour Services",
      description:
        "Reliable and flexible workforce solutions supporting a wide range of labour and operational needs.",
      icon: HiUserGroup,
      image: "/assets/services/service-4.jpeg",
    },

    {
      number: "05",
      title: "Warehouse & Inventory Services",
      description:
        "Efficient warehouse and inventory support to help businesses maintain organized, accurate, and productive operations.",
      icon: HiArchiveBox,
      image: "/assets/services/warehouse.jpg",
    },

    {
      number: "06",
      title: "Employment Services",
      description:
        "Connecting employers with dependable talent and helping individuals find meaningful employment opportunities.",
      icon: HiBriefcase,
      image: "/assets/services/employment.jpg",
    },

    {
      number: "07",
      title: "Home Healthcare Services",
      description:
        "Dedicated healthcare support delivered in the comfort of home with a focus on safety, comfort, and well-being.",
      icon: HiOutlineHeart,
      image: "/assets/services/homehealth.jpg",
    },

    {
      number: "08",
      title: "Errands & Shopping Services",
      description:
        "Convenient assistance with everyday errands, shopping, and personal tasks to make daily life easier.",
      icon: HiShoppingCart,
      image: "/assets/services/errands.jpg",
    },

    {
      number: "09",
      title: "Maintenance & Handyman Services",
      description:
        "Reliable maintenance and handyman solutions for repairs, upkeep, and everyday property needs.",
      icon: HiWrenchScrewdriver,
      image: "/assets/services/handyman.jpg",
    },

    {
      number: "10",
      title: "Administrative & Office Support",
      description:
        "Professional administrative support that helps businesses stay organized, efficient, and focused on their priorities.",
      icon: HiDocumentText,
      image: "/assets/services/officesupport.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        flex
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-[#FBF8FC]
        to-[#EFE4F0]
        py-24
        sm:py-28
        lg:py-32
      "
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Main secondary purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          -top-[180px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#5B2E91]/12
          blur-[140px]
        "
      />

      {/* Center white glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[30%]
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-white/80
          blur-[150px]
        "
      />

      {/* Right secondary purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[25%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#5B2E91]/10
          blur-[140px]
        "
      />

      {/* Bottom secondary purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          left-[25%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#5B2E91]/12
          blur-[150px]
        "
      />

      {/* =====================================================
          DECORATIVE DOT GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-8
          top-28
          grid
          grid-cols-5
          gap-3
          opacity-25
          sm:left-14
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1
              rounded-full
              bg-[#5B2E91]
            "
          />
        ))}
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-10
          top-[34%]
          grid
          grid-cols-5
          gap-3
          opacity-15
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1
              rounded-full
              bg-[#5B2E91]
            "
          />
        ))}
      </div>

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-[18%]
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#5B2E91]/15
        "
      />

      <motion.div
        animate={{
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-[15%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#5B2E91]/15
        "
      />

      {/* =====================================================
          MAIN CONTENT
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
          padding: "20px",
        }}
      >
        <Container className="w-full max-w-none flex flex-col justify-center">

          {/* =================================================
              SECTION HEADER
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              mx-auto
              flex
              w-full
              flex-col
              items-center
              justify-center
              text-center
            "
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3
              "
              style={{
                margin: "20px 0px 20px 0px",
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "1px",
                  borderRadius: "999px",
                  background: "#642E60",
                  opacity: 0.35,
                }}
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
                Our Services
              </span>

              <span
                style={{
                  width: "30px",
                  height: "1px",
                  borderRadius: "999px",
                  background: "#642E60",
                  opacity: 0.35,
                }}
              />
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

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
              Professional Services,
              <span className="block">
                Delivered with{" "}
                <span className="text-[#5B2E91]">
                  Care
                </span>
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-[15px]
                leading-7
                text-[#6F6873]
                sm:text-[16px]
              "
              style={{
                margin: "20px 0px 20px 0px",
                fontSize: "15px",
              }}
            >
              Reliable, compassionate, and high-quality services designed to
              meet the needs of Northern communities.
            </p>

            {/* Primary divider */}
            <div
              style={{
                width: "45px",
                height: "2px",
                margin: "28px auto 0",
                borderRadius: "999px",
                background: "#642E60",
                opacity: 0.7,
              }}
            />
          </motion.div>

          {/* =================================================
              SERVICES CAROUSEL
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[1400px]
              px-5
              sm:px-8
              lg:px-12
            "
            style={{
              marginTop: "35px",
              marginBottom: "30px",
            }}
          >
            <div className="relative">

              {/* =================================================
                  LEFT ARROW
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  setServiceIndex((prev) =>
                    prev === 0
                      ? serviceItems.length - 1
                      : prev - 1
                  );
                }}
                aria-label="Previous services"
                className="
                  absolute
                  left-0
                  top-1/2
                  z-30
                  flex
                  h-12
                  w-12
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#642E60]/20
                  bg-white
                  text-[#642E60]
                  shadow-[0_8px_25px_rgba(100,46,96,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-x-1/2
                  hover:-translate-y-1/2
                  hover:border-[#642E60]
                  hover:bg-[#642E60]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(100,46,96,0.18)]
                  active:scale-95
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* =================================================
                  RIGHT ARROW
              ================================================= */}

              <button
                type="button"
                onClick={() => {
                  setServiceIndex((prev) =>
                    prev === serviceItems.length - 1
                      ? 0
                      : prev + 1
                  );
                }}
                aria-label="Next services"
                className="
                  absolute
                  right-0
                  top-1/2
                  z-30
                  flex
                  h-12
                  w-12
                  translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#642E60]/20
                  bg-white
                  text-[#642E60]
                  shadow-[0_8px_25px_rgba(100,46,96,0.10)]
                  transition-all
                  duration-300
                  hover:translate-x-1/2
                  hover:-translate-y-1/2
                  hover:border-[#642E60]
                  hover:bg-[#642E60]
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(100,46,96,0.18)]
                  active:scale-95
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* =================================================
                  CARDS VIEWPORT
              ================================================= */}

              <div
                className="
                  overflow-hidden
                  px-3
                  sm:px-4
                "
              >
                <motion.div
                  key={serviceIndex}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-4
                    lg:gap-6
                  "
                >
                  {[
                    serviceItems[serviceIndex],
                    serviceItems[
                      (serviceIndex + 1) % serviceItems.length
                    ],
                    serviceItems[
                      (serviceIndex + 2) % serviceItems.length
                    ],
                    serviceItems[
                      (serviceIndex + 3) % serviceItems.length
                    ],
                  ].map((service, index) => (
                    <StairServiceCard
                      key={`${service.number}-${serviceIndex}`}
                      service={service}
                      index={index}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* =================================================
                CAROUSEL INDICATORS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {serviceItems.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setServiceIndex(index)}
                  aria-label={`Go to service ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      serviceIndex === index
                        ? "w-8 bg-[#642E60]"
                        : "w-2 bg-[#D8C9E3] hover:bg-[#642E60]/60"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-16
              rounded-[24px]
              border
              border-[#642E60]/10
              bg-white/65
              px-6
              py-6
              shadow-[0_20px_60px_rgba(100,46,96,0.07)]
              backdrop-blur-xl
              sm:px-10
              sm:py-7
            "
            style={{
              margin: "40px 0px 40px 0px",
            }}
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-8
                gap-y-5
              "
            >
              <TrustPoint
                icon={HiShieldCheck}
                text="Licensed & Insured"
              />

              <div
                className="
                  hidden
                  h-8
                  w-px
                  bg-[#642E60]/10
                  sm:block
                "
              />

              <TrustPoint
                icon={HiUsers}
                text="Trained Professionals"
              />

              <div
                className="
                  hidden
                  h-8
                  w-px
                  bg-[#642E60]/10
                  sm:block
                "
              />

              <TrustPoint
                icon={HiStar}
                text="Quality Assured"
              />

              <div
                className="
                  hidden
                  h-8
                  w-px
                  bg-[#642E60]/10
                  sm:block
                "
              />

              <TrustPoint
                icon={HiHeart}
                text="Community Focused"
              />
            </div>
          </motion.div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM SECONDARY PURPLE WAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-[380px]
          w-full
          overflow-hidden
        "
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="
            absolute
            bottom-0
            left-0
            block
            h-full
            w-full
          "
        >
          <defs>
            <linearGradient
              id="servicesWaveGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#5B2E91"
                stopOpacity="0.04"
              />

              <stop
                offset="25%"
                stopColor="#5B2E91"
                stopOpacity="0.22"
              />

              <stop
                offset="50%"
                stopColor="#5B2E91"
                stopOpacity="0.52"
              />

              <stop
                offset="72%"
                stopColor="#5B2E91"
                stopOpacity="0.42"
              />

              <stop
                offset="90%"
                stopColor="#5B2E91"
                stopOpacity="0.18"
              />

              <stop
                offset="100%"
                stopColor="#5B2E91"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M0,270
              C170,120
              310,330
              500,230
              C690,130
              760,70
              940,175
              C1120,280
              1240,280
              1440,120
              L1440,400
              L0,400
              Z
            "
            fill="url(#servicesWaveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}

/* ============================================================
   STAIR SERVICE CARD
============================================================ */

function StairServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
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
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#E3D7EB]
        bg-white
        shadow-[0_12px_35px_rgba(100,46,96,0.10)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#642E60]/30
        hover:shadow-[0_22px_50px_rgba(100,46,96,0.16)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative
          h-[190px]
          w-full
          shrink-0
          overflow-visible
        "
      >
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-t-[24px]
          "
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Primary plum image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#321A30]/75
              via-[#642E60]/20
              to-transparent
            "
          />

          {/* White blend */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[85px]
              bg-gradient-to-t
              from-white
              via-white/65
              to-transparent
            "
          />
        </div>

        {/* =================================================
            NUMBER
        ================================================= */}

        <div
          className="
            absolute
            left-5
            top-5
            z-30
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            border-[2px]
            border-white/80
            bg-[#642E60]
            text-[11px]
            font-bold
            tracking-[0.08em]
            text-white
            shadow-[0_6px_18px_rgba(100,46,96,0.25)]
          "
        >
          {service.number}
        </div>

        {/* =================================================
            ICON
        ================================================= */}

        <div
          className="
            absolute
            bottom-[-21px]
            left-5
            z-40
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-[15px]
            border-[2px]
            border-[#C6A15B]
            bg-white
            text-[#642E60]
            shadow-[0_8px_24px_rgba(100,46,96,0.15)]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-2
          "
        >
          {Icon && (
            <Icon
              className="
                h-[23px]
                w-[23px]
              "
            />
          )}
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          -mt-[20px]
          flex
          min-h-[235px]
          flex-1
          flex-col
          overflow-hidden
          rounded-t-[30px]
          bg-gradient-to-br
          from-white
          via-[#FCF9FF]
          to-[#F6EFFC]
        "
        style={{
          paddingTop: "34px",
          paddingRight: "24px",
          paddingBottom: "22px",
          paddingLeft: "24px",
        }}
      >
        {/* Decorative Circle */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-35px]
            top-[-35px]
            h-[110px]
            w-[110px]
            rounded-full
            bg-[#5B2E91]/10
            opacity-60
          "
        />

        {/* =================================================
            SERVICE LABEL
        ================================================= */}

        <div
          className="
            relative
            flex
            items-center
          "
          style={{
            marginBottom: "9px",
          }}
        >
          <span
            className="
              block
              h-[3px]
              rounded-full
              bg-[#642E60]
              transition-all
              duration-500
              group-hover:w-14
            "
            style={{
              width: "34px",
              marginRight: "9px",
            }}
          />

          {/* PRIMARY COLOUR */}
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.20em]
              text-[#642E60]
            "
          >
            Professional Service
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="
            relative
            text-[20px]
            font-bold
            leading-[1.3]
            tracking-[-0.01em]
            text-[#642E60]
            transition-colors
            duration-300
            group-hover:text-[#5B2E91]
          "
          style={{
            minHeight: "47px",
            paddingTop: "0px",
            paddingRight: "2px",
            paddingBottom: "0px",
            paddingLeft: "2px",
          }}
        >
          {service.title}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div
          style={{
            marginTop: "14px",
            paddingTop: "4px",
            paddingRight: "6px",
            paddingBottom: "4px",
            paddingLeft: "6px",
            minHeight: "78px",
          }}
        >
          <p
            className="
              m-0
              overflow-hidden
              text-[12px]
              leading-[1.7]
              text-[#6B5D69]
            "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
            }}
          >
            {service.description}
          </p>
        </div>

        {/* =================================================
            BOTTOM AREA
        ================================================= */}

        <div
          className="
            relative
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-[#E6D9EF]
          "
          style={{
            marginTop: "15px",
            paddingTop: "12px",
          }}
        >
          {/* SERVICE NUMBER */}

          <div
            className="
              flex
              items-center
            "
          >
            <span
              className="
                flex
                h-[25px]
                w-[25px]
                items-center
                justify-center
                rounded-full
                border
                border-[#642E60]/20
                bg-[#642E60]/10
                text-[9px]
                font-bold
                text-[#642E60]
              "
            >
              {service.number}
            </span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#8A7A91]
              "
              style={{
                marginLeft: "8px",
              }}
            >
              KBFM Services
            </span>
          </div>

          {/* EXPLORE */}

          <a
            href="#booking"
            className="
              group/explore
              flex
              items-center
              rounded-full
              border
              border-[#642E60]/15
              bg-white
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#642E60]
              shadow-[0_4px_12px_rgba(100,46,96,0.05)]
              transition-all
              duration-300
              hover:border-[#642E60]
              hover:bg-[#642E60]
              hover:text-white
            "
            style={{
              gap: "7px",
              paddingTop: "6px",
              paddingRight: "11px",
              paddingBottom: "6px",
              paddingLeft: "11px",
            }}
          >
            <span className="text-[#642E60] transition-colors duration-300 group-hover/explore:text-white">
              Explore
            </span>

            <span
              className="
                text-[13px]
                leading-none
                text-[#642E60]
                transition-all
                duration-300
                group-hover/explore:translate-x-1
                group-hover/explore:text-white
              "
            >
              →
            </span>
          </a>
        </div>

        {/* Bottom primary accent */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            bg-[#642E60]/30
          "
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   TRUST POINT
============================================================ */

function TrustPoint({
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
    >
      <Icon
        className="
          text-[20px]
          text-[#642E60]
        "
      />

      <span
        className="
          text-[12px]
          font-semibold
          text-[#625B66]
        "
      >
        {text}
      </span>
    </div>
  );
}