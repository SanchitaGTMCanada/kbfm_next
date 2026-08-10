"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  HiArrowUpRight,
  HiShieldCheck,
  HiHeart,
  HiSparkles,
  HiBuildingOffice2,
  HiUsers,
  HiStar,
} from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";
import services from "./servicesData";

export default function Services() {
  const serviceItems = [
    {
      number: "01",
      title: "Private Security Services",
      description:
        "Protecting people, property, and assets with trained and licensed security professionals.",
      icon: HiShieldCheck,
      image:
        services?.[0]?.image ||
        "/images/services/service-1.jpg",
    },

    {
      number: "02",
      title: "Caregiving & Personal Support",
      description:
        "Compassionate support that helps individuals maintain independence, dignity, and quality of life.",
      icon: HiHeart,
      image:
        services?.[1]?.image ||
        "/images/services/service-2.jpg",
    },

    {
      number: "03",
      title: "Cleaning Services",
      description:
        "Professional cleaning solutions designed to create healthy, safe, and welcoming environments.",
      icon: HiSparkles,
      image:
        services?.[2]?.image ||
        "/images/services/service-3.jpg",
    },

    {
      number: "04",
      title: "Janitorial & Facility Maintenance",
      description:
        "Complete facility support that keeps workplaces clean, safe, and operating efficiently.",
      icon: HiBuildingOffice2,
      image:
        services?.[3]?.image ||
        "/images/services/service-4.jpg",
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
        >
            <Container  className="w-full max-w-none flex flex-col justify-center" >
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
             style={{margin:"20px 0px 20px 0px"}}
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
              style={{margin:"20px 0px 20px 0px"}}
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
              style={{margin:"20px 0px 20px 0px"}}
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
            2 × 2 STAIRCASE GRID
        ================================================= */}

       <div
  className="
    relative
    z-10

    mx-auto

    mt-16
    sm:mt-20
    lg:mt-24

    w-full
    max-w-[1180px]

    px-5
    sm:px-8
    lg:px-10
  "
  style={{
    margin: "20px auto",
  }}
>
  <div
    className="
      grid
      grid-cols-1

      gap-7

      md:grid-cols-2

      md:gap-x-7
      md:gap-y-12

      lg:gap-x-8
      lg:gap-y-16
    "
  >
    {/* ==============================================
        UPPER LEFT
    ============================================== */}

    <StairServiceCard
      service={serviceItems[0]}
      index={0}
    />

    {/* ==============================================
        UPPER RIGHT
    ============================================== */}

    <StairServiceCard
      service={serviceItems[1]}
      index={1}
    />

    {/* ==============================================
        LOWER LEFT
    ============================================== */}

    <div
      className="
        md:translate-x-[7%]
        lg:translate-x-[8%]
      "
    >
      <StairServiceCard
        service={serviceItems[2]}
        index={2}
      />
    </div>

    {/* ==============================================
        LOWER RIGHT
    ============================================== */}

    <div
      className="
        md:translate-x-[7%]
        lg:translate-x-[8%]
      "
    >
      <StairServiceCard
        service={serviceItems[3]}
        index={3}
      />
    </div>
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
            mt-20

           

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

          style={{margin:"40px 0px 40px 0px"}}
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

function StairServiceCard({
  service,
  index,
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
        x: index % 2 === 0 ? -30 : 30,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        w-full
      "
    >
      {/* =================================================
          CARD
      ================================================= */}

      <div
        className="
          relative

          min-h-[390px]

          overflow-hidden

          rounded-[30px]

          border
          border-white

          bg-gradient-to-br
          from-white
          via-[#FBF9FD]
          to-[#E9DDF4]

          shadow-[0_20px_60px_rgba(91,46,145,0.10)]

          transition-all
          duration-500

          group-hover:-translate-y-2

          group-hover:shadow-[0_30px_80px_rgba(91,46,145,0.18)]

          sm:min-h-[420px]

          lg:min-h-[430px]
        "
      >
        {/* =================================================
            AMBIENT CARD GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            -right-24
            -top-24

            h-64
            w-64

            rounded-full

            bg-[#8B65B4]/15

            blur-[85px]

            transition-all
            duration-700

            group-hover:bg-[#8B65B4]/28
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -bottom-24
            -left-24

            h-56
            w-56

            rounded-full

            bg-[#B998D5]/20

            blur-[75px]

            transition-all
            duration-700

            group-hover:bg-[#B998D5]/35
          "
        />

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            absolute
            right-0
            top-0

            h-full
            w-[43%]

            overflow-hidden
          "
        >
          <motion.div
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="
                (max-width: 768px) 100vw,
                43vw
              "
              className="
                object-cover

                transition-transform
                duration-[1400ms]
                ease-out

                group-hover:scale-110
              "
            />
          </motion.div>

          {/* Image white fade */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-white
              via-white/65
              to-transparent
            "
          />

          {/* Purple hover overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-[#5B2E91]/20
              via-transparent
              to-[#A98AC5]/20

              opacity-0

              transition-opacity
              duration-700

              group-hover:opacity-100
            "
          />
        </div>

        {/* =================================================
            NUMBER
        ================================================= */}

        <div
          className="
            absolute
            left-7
            top-7

            z-20

            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[52px]
              font-semibold
              leading-none

              text-[#E5D9EC]

              transition-all
              duration-500

              group-hover:text-[#D5C2E0]

              sm:text-[60px]
            "
          >
            {service.number}
          </span>

          <span
            className="
              h-[2px]
              w-10

              rounded-full

              bg-gradient-to-r
              from-[#6D48A8]
              to-[#B998D5]
            "
          />
        </div>

        {/* =================================================
            ICON
        ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            absolute
            left-7
            top-[105px]

            z-20

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            border
            border-[#C8B2D9]/50

            bg-gradient-to-br
            from-[#5B2E91]
            via-[#7043A0]
            to-[#9670B9]

            text-white

            shadow-[0_12px_30px_rgba(91,46,145,0.25)]

            transition-all
            duration-500

            group-hover:shadow-[0_18px_40px_rgba(91,46,145,0.35)]
          "
        >
          <Icon className="text-[27px]" />
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-20

            flex
            min-h-[390px]

            w-[68%]

            flex-col
            justify-end

            p-7

            sm:min-h-[420px]
            sm:p-8

            lg:min-h-[430px]
          "
        >
          {/* Accent line */}

          <div
            className="
              mb-4

              h-[3px]
              w-10

              rounded-full

              bg-gradient-to-r
              from-[#6D48A8]
              via-[#B998D5]
              to-transparent

              transition-all
              duration-500

              group-hover:w-20
            "
          />

          {/* Title */}

          <h3
            className="
              max-w-[390px]

              text-[25px]
              font-semibold
              leading-[1.12]
              tracking-[-0.5px]

              text-[#452D2D]

              transition-colors
              duration-300

              group-hover:text-[#5B2E91]

              sm:text-[29px]
            "
          >
            {service.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-3

              max-w-[400px]

              text-[13px]
              leading-6

              text-[#756E78]

              sm:text-[14px]
            "
          >
            {service.description}
          </p>

          {/* Action */}

          <div
            className="
              mt-5

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-[#D8CBE3]

                bg-white/80

                text-[#5B2E91]

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:border-[#6D48A8]
                group-hover:bg-[#6D48A8]
                group-hover:text-white

                group-hover:translate-x-1
              "
            >
              <HiArrowUpRight className="text-[17px]" />
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]

                text-[#817987]
              "
            >
              Explore Service
            </span>
          </div>
        </div>

        {/* =================================================
            PURPLE SIDE ACCENT
        ================================================= */}

        <span
          className="
            absolute
            left-0
            top-0
            bottom-0

            w-[3px]

            bg-gradient-to-b
            from-[#6D48A8]
            via-[#B998D5]
            to-transparent

            transition-all
            duration-500

            group-hover:w-[5px]
          "
        />

        {/* =================================================
            TOP RIGHT ARROW
        ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
            absolute
            right-6
            top-6

            z-30

            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-[#D9CCE4]

            bg-white/75

            text-[#5B2E91]

            shadow-[0_8px_25px_rgba(91,46,145,0.08)]

            backdrop-blur-md

            transition-all
            duration-500

            group-hover:border-[#6D48A8]
            group-hover:bg-[#6D48A8]
            group-hover:text-white

            group-hover:rotate-[-8deg]
          "
        >
          <HiArrowUpRight className="text-[16px]" />
        </motion.div>

        {/* =================================================
            HOVER LIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            -bottom-20
            -left-20

            h-44
            w-44

            rounded-full

            bg-[#7B4DB8]/15

            blur-[65px]

            opacity-0

            transition-opacity
            duration-700

            group-hover:opacity-100
          "
        />
      </div>
    </motion.article>
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