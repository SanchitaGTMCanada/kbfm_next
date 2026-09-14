"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  HiArrowUpRight,
 HiUserGroup,

  HiSparkles,
  HiBuildingOffice2,
  HiUsers,
  HiStar,
  HiPhone,
} from "react-icons/hi2";
import {
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
import services from "./servicesData";

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
    image: "/assets/services/service-5.jpeg",
  },

  {
    number: "06",
    title: "Employment Services",
    description:
      "Connecting employers with dependable talent and helping individuals find meaningful employment opportunities.",
    icon: HiBriefcase,
    image: "/assets/services/service-6.jpeg",
  },

  {
    number: "07",
    title: "Home Healthcare Services",
    description:
      "Dedicated healthcare support delivered in the comfort of home with a focus on safety, comfort, and well-being.",
    icon: HiOutlineHeart,
    image: "/assets/services/service-7.jpeg",
  },

  {
    number: "08",
    title: "Errands & Shopping Services",
    description:
      "Convenient assistance with everyday errands, shopping, and personal tasks to make daily life easier.",
    icon: HiShoppingCart,
    image: "/assets/services/service-8.jpeg",
  },

  {
    number: "09",
    title: "Maintenance & Handyman Services",
    description:
      "Reliable maintenance and handyman solutions for repairs, upkeep, and everyday property needs.",
    icon: HiWrenchScrewdriver,
    image: "/assets/services/service-9.jpeg",
  },

  {
    number: "10",
    title: "Administrative & Office Support",
    description:
      "Professional administrative support that helps businesses stay organized, efficient, and focused on their priorities.",
    icon: HiDocumentText,
    image: "/assets/services/service-10.jpeg",
  },
];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-white
        via-[#FAF7FD]
        to-[#E9DDF4]

        py-24
        sm:py-28
        lg:py-32
        flex
        justify-center
      "
    
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Large purple glow - top left */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          -top-[180px]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#6D48A8]/10

          blur-[140px]
        "
      />

      {/* Large white glow - center */}

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

      {/* Purple glow - right */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[25%]

          h-[550px]
          w-[550px]

          rounded-full

          bg-[#8B65B4]/10

          blur-[140px]
        "
      />

      {/* Bottom lavender glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          left-[25%]

          h-[650px]
          w-[650px]

          rounded-full

          bg-[#B998D5]/15

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

          opacity-30

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

              bg-[#7B4DB8]
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

          opacity-20
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1

              rounded-full

              bg-[#9670B9]
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
          border-[#7B4DB8]/10
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
          border-[#8B65B4]/10
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
            style={{padding:"20px"}}
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
    {/* Eyebrow */}

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
        className="
          h-[1px]
          w-12
          bg-[#7B4DB8]/50
        "
      />

      <span
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#6D48A8]
        "
      >
        Our Services
      </span>

      <span
        className="
          h-[1px]
          w-12
          bg-[#7B4DB8]/50
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
        text-[#452D2D]

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
        <span
          className="
            bg-gradient-to-r
            from-[#5B2E91]
            via-[#8060A7]
            to-[#B99BD1]
            bg-clip-text
            text-transparent
          "
        >
          Care
        </span>
      </span>
    </h2>

    {/* Description */}

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
      Reliable, compassionate, and high-quality
      services designed to meet the needs of
      Northern communities.
    </p>

    {/* Small divider */}

    <div
      className="
        mx-auto
        mt-7
        h-[3px]
        w-14
        rounded-full
        bg-gradient-to-r
        from-[#6D48A8]
        via-[#B998D5]
        to-[#6D48A8]
      "
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

    {/* =================================================
        CAROUSEL WRAPPER
    ================================================= */}

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
          border-[#D4AF37]/60

          bg-white

          text-[#5B2E91]

          shadow-[0_10px_30px_rgba(91,46,145,0.18)]

          transition-all
          duration-300

          hover:-translate-x-1/2
          hover:-translate-y-1/2
          hover:bg-[#5B2E91]
          hover:text-white
          hover:shadow-[0_15px_40px_rgba(91,46,145,0.28)]

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
          border-[#D4AF37]/60

          bg-white

          text-[#5B2E91]

          shadow-[0_10px_30px_rgba(91,46,145,0.18)]

          transition-all
          duration-300

          hover:translate-x-1/2
          hover:-translate-y-1/2
          hover:bg-[#5B2E91]
          hover:text-white
          hover:shadow-[0_15px_40px_rgba(91,46,145,0.28)]

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
          {/* =================================================
              DESKTOP — 4 SERVICES
          ================================================= */}

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
                ? "w-8 bg-[#5B2E91]"
                : "w-2 bg-[#CDBBDD] hover:bg-[#9C76BD]"
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
      border-white/80

      bg-white/60

      px-6
      py-6

      shadow-[0_20px_60px_rgba(91,46,145,0.08)]

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
          bg-[#D9CDE2]
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
          bg-[#D9CDE2]
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
          bg-[#D9CDE2]
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
          BOTTOM PURPLE WAVE
      ===================================================== */}

  {/* =====================================================
    SOFT WAVE TRANSITION INTO ABOUT SECTION
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

      h-full
      w-full

      block
    "
  >
    <defs>

      {/* =============================================
          PURPLE → TRANSPARENT
      ============================================= */}

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
    stopOpacity="0.08"
  />

  <stop
    offset="25%"
    stopColor="#5B2E91"
    stopOpacity="0.35"
  />

  <stop
    offset="50%"
    stopColor="#5B2E91"
    stopOpacity="0.65"
  />

  <stop
    offset="72%"
    stopColor="#7043A0"
    stopOpacity="0.52"
  />

  <stop
    offset="90%"
    stopColor="#7043A0"
    stopOpacity="0.25"
  />

  <stop
    offset="100%"
    stopColor="#7043A0"
    stopOpacity="0"
  />
</linearGradient>

    </defs>

    {/* =============================================
        TALLER WAVE
    ============================================= */}

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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
        border-[#E6D9F1]
        bg-white
        shadow-[0_12px_35px_rgba(91,46,145,0.10)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4BDE8]
        hover:shadow-[0_22px_50px_rgba(91,46,145,0.18)]
      "
    >
      {/* =========================================
          IMAGE
      ========================================= */}
      <div
        className="
          relative
          h-[190px]
          w-full
          shrink-0
          overflow-visible
        "
      >
        {/* IMAGE */}
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

          {/* DARK IMAGE OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#2B1740]/70
              via-[#5B2E91]/10
              to-transparent
            "
          />

          {/* WHITE BLEND INTO CONTENT */}
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

        {/* =====================================
            NUMBER
        ===================================== */}
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
            border-[3px]
            border-white
            bg-[#5B2E91]
            text-[11px]
            font-bold
            tracking-[0.08em]
            text-white
            shadow-[0_6px_18px_rgba(45,20,70,0.30)]
          "
        >
          {service.number}
        </div>

        {/* =====================================
            ICON
        ===================================== */}
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
            border-[3px]
            border-white
            bg-white
            text-[#5B2E91]
            shadow-[0_8px_24px_rgba(45,20,70,0.20)]
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

      {/* =========================================
          CONTENT
      ========================================= */}
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
        {/* DECORATIVE CIRCLE */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-35px]
            top-[-35px]
            h-[110px]
            w-[110px]
            rounded-full
            bg-[#EBDDF7]
            opacity-40
          "
        />

        {/* =====================================
            SERVICE LABEL
        ===================================== */}
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
              bg-gradient-to-r
              from-[#5B2E91]
              to-[#A66CFF]
              transition-all
              duration-500
              group-hover:w-14
            "
            style={{
              width: "34px",
              marginRight: "9px",
            }}
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.20em]
              text-[#8865A6]
            "
          >
            Professional Service
          </span>
        </div>

        {/* =====================================
            TITLE
        ===================================== */}
        <h3
          className="
            relative
            text-[20px]
            font-bold
            leading-[1.3]
            tracking-[-0.01em]
            text-[#41235E]
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

        {/* =====================================
            DESCRIPTION
            NO SCROLL
        ===================================== */}
    
          {/* LEFT ACCENT */}
        
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
      text-[#685E6D]
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

        {/* =====================================
            BOTTOM AREA
        ===================================== */}
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
                bg-[#EDE2F6]
                text-[9px]
                font-bold
                text-[#5B2E91]
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
    border-[#D8C5E7]
    bg-white
    text-[9px]
    font-bold
    uppercase
    tracking-[0.12em]
    text-[#5B2E91]
    shadow-[0_4px_12px_rgba(91,46,145,0.07)]
    transition-all
    duration-300
    hover:border-[#5B2E91]
    hover:bg-[#5B2E91]
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
  <span className="text-[#5B2E91] transition-colors duration-300 group-hover/explore:text-white">
    Explore
  </span>

  <span
    className="
      text-[13px]
      leading-none
      text-[#5B2E91]
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

        {/* BOTTOM GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#A66CFF]/50
            to-transparent
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

          text-[#6D48A8]
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