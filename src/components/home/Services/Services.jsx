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
  HiPhone,
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
        
        "/assets/services/service-1.jpeg",
    },

    {
      number: "02",
      title: "Caregiving & Personal Support",
      description:
        "Compassionate support that helps individuals maintain independence, dignity, and quality of life.",
      icon: HiHeart,
      image:
        
        "/assets/services/service-2.jpeg",
    },

    {
      number: "03",
      title: "Cleaning Services",
      description:
        "Professional cleaning solutions designed to create healthy, safe, and welcoming environments.",
      icon: HiSparkles,
      image:
        
        "/assets/services/service-3.jpeg",
    },

    {
      number: "04",
      title: "Janitorial & Facility Maintenance",
      description:
        "Complete facility support that keeps workplaces clean, safe, and operating efficiently.",
      icon: HiBuildingOffice2,
      image:
        
        "/assets/services/service-4.jpeg",
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
              style={{margin:"20px 0px 20px 0px", fontSize:"15px"}}
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

  const handleBookNow = (e) => {
    e.preventDefault();

    const section = document.querySelector("#booking");

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
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
        x: index % 2 === 0 ? -25 : 25,
        scale: 0.98,
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
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative w-full"
    >
      {/* =====================================================
          PREMIUM CARD
      ===================================================== */}

      <div
        className="
          relative
          min-h-[510px]
          overflow-hidden

          rounded-[32px]

          border
          border-white

          bg-white/80

          shadow-[0_25px_70px_rgba(62,32,102,0.10)]

          backdrop-blur-xl

          transition-all
          duration-700

          group-hover:-translate-y-3
          group-hover:shadow-[0_35px_90px_rgba(62,32,102,0.18)]

          sm:min-h-[530px]
          lg:min-h-[540px]
        "
      >

        {/* =================================================
            SOFT PURPLE AMBIENT LIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#7B4DB8]/10

            blur-[90px]

            transition-all
            duration-700

            group-hover:bg-[#7B4DB8]/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32

            h-[300px]
            w-[300px]

            rounded-full

            bg-[#B998D5]/12

            blur-[90px]

            transition-all
            duration-700

            group-hover:bg-[#B998D5]/20
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
              scale: 1.1,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
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
                duration-[1600ms]
                ease-out

                group-hover:scale-110
              "
            />
          </motion.div>

          {/* =================================================
              PREMIUM IMAGE FADE
          ================================================= */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-white
              via-white/60
              via-[45%]
              to-white/5
            "
          />

          {/* Bottom image fade */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0

              h-[45%]

              bg-gradient-to-t
              from-white/35
              to-transparent
            "
          />

          {/* Image hover tint */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-[#5B2E91]/10
              via-transparent
              to-[#7B4DB8]/20

              opacity-0

              transition-opacity
              duration-700

              group-hover:opacity-100
            "
          />

          {/* =================================================
              IMAGE LIGHT SWEEP
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-y-0
              -left-[120%]

              w-[80%]

              rotate-[15deg]

              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent

              opacity-0

              group-hover:opacity-100
            "
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            whileHover={{
              left: "140%",
            }}
          />
        </div>

        {/* =================================================
            TOP NUMBER
        ================================================= */}

        <div
          className="
            absolute
            left-7
            top-7

            z-30

            flex
            items-end
            gap-3
          "
        >
          <span
            className="
              text-[58px]
              font-semibold
              leading-[0.8]

              tracking-[-3px]

              text-[#E6D9EE]

              transition-all
              duration-500

              group-hover:text-[#D8C6E4]

              sm:text-[64px]
            "
          >
            {service.number}
          </span>

          <span
            className="
              mb-1

              h-[2px]
              w-12

              rounded-full

              bg-gradient-to-r
              from-[#5B2E91]
              to-[#B998D5]

              transition-all
              duration-500

              group-hover:w-20
            "
          />
        </div>

        {/* =================================================
            FLOATING ICON
        ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            absolute
            left-7
            top-[120px]

            z-30

            flex
            h-[62px]
            w-[62px]

            items-center
            justify-center

            rounded-[19px]

            border
            border-white/30

            bg-gradient-to-br
            from-[#5B2E91]
            via-[#6D48A8]
            to-[#7B4DB8]

            text-white

            shadow-[0_16px_35px_rgba(91,46,145,0.28)]

            transition-all
            duration-500

            group-hover:shadow-[0_20px_45px_rgba(91,46,145,0.38)]
          "
        >
          <Icon className="text-[29px]" />
        </motion.div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-20

            flex
            min-h-[510px]

            w-[70%]

            flex-col
            justify-end

            p-7

            sm:min-h-[530px]
            sm:p-8

            lg:min-h-[540px]
            lg:p-9
          "
            style={{padding:"20px"}}
        >

          {/* =================================================
              SERVICE LABEL
          ================================================= */}

          <div
            className="
              mb-4

              flex
              items-center
              gap-2
            "

             style={{marginBottom:"20px" , marginTop:"-30px" , marginLeft:"10px"}}
          >
            <span
              className="
                h-[6px]
                w-[6px]

                rounded-full

                bg-[#7B4DB8]

                shadow-[0_0_10px_rgba(123,77,184,0.55)]
              "
            
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]

                text-[#806F8C]
              "

         style={{fontSize:"19px"}}
            >
              Professional Service
            </span>
          </div>

          {/* =================================================
              ACCENT LINE
          ================================================= */}

          <div
            className="
              mb-5

              h-[3px]
              w-11

              rounded-full

              bg-gradient-to-r
              from-[#5B2E91]
              via-[#7B4DB8]
              to-transparent

              transition-all
              duration-500

              group-hover:w-20
            "
             style={{ marginLeft:"10px"}}
          />

          {/* =================================================
              TITLE
          ================================================= */}

          <h3
            className="
              max-w-[430px]

              text-[27px]
              font-semibold
              leading-[1.08]

              tracking-[-1px]

              text-[#3E2066]

              transition-colors
              duration-300

              group-hover:text-[#5B2E91]

              sm:text-[30px]
            "

             style={{marginBottom:"20px",marginLeft:"7px"}}
          >
            {service.title}
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-4

              max-w-[420px]

              text-[13px]
              leading-[1.8]

              text-[#2D2D2D]/65

              sm:text-[14px]
            "
             style={{marginBottom:"20px" ,marginLeft:"7px"}}
          >
            {service.description}
          </p>

          {/* =================================================
              BOOK NOW
          ================================================= */}

     <motion.a
  href="#booking"
  onClick={handleBookNow}
  whileHover={{
    y: -3,
  }}
  whileTap={{
    scale: 0.985,
  }}
  className="
    group/book
    relative
    mt-6
    flex
    w-full
    max-w-[380px]
    items-center
    justify-between
    overflow-hidden
    rounded-[20px]
    border
    border-[#E7DDF0]
    bg-white
    shadow-[0_12px_35px_rgba(62,32,102,0.09)]
    transition-all
    duration-500
    hover:border-[#CDB8DD]
    hover:shadow-[0_20px_45px_rgba(62,32,102,0.16)]
  "
  style={{
    padding: "9px 10px 9px 10px",
  }}
>
  {/* ==============================================
      SUBTLE PURPLE LIGHT
  ============================================== */}

  <span
    className="
      pointer-events-none
      absolute
      -left-16
      top-1/2
      h-24
      w-24
      -translate-y-1/2
      rounded-full
      bg-[#7B4DB8]/10
      blur-2xl
      transition-all
      duration-500
      group-hover/book:bg-[#7B4DB8]/20
    "
  />

  {/* ==============================================
      LEFT CONTENT
  ============================================== */}

  <span
    className="
      relative
      z-10
      flex
      items-center
      gap-3
    "
  >

    {/* Phone Icon */}

    <span
      className="
        relative
        flex
        h-[44px]
        w-[44px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[14px]
        bg-gradient-to-br
        from-[#F4EFF8]
        to-[#E9DDF2]
        text-[#5B2E91]
        shadow-[inset_0_1px_0_rgba(255,255,255,.8)]
        transition-all
        duration-500
        group-hover/book:scale-105
        group-hover/book:from-[#5B2E91]
        group-hover/book:to-[#7B4DB8]
        group-hover/book:text-white
      "
    >
      <HiPhone
        className="
          relative
          z-10
          text-[19px]
          transition-transform
          duration-500
          group-hover/book:rotate-[-8deg]
        "
      />

      {/* Icon glow */}

      <span
        className="
          absolute
          inset-0
          rounded-[14px]
          bg-white/20
          opacity-0
          transition-opacity
          duration-300
          group-hover/book:opacity-100
        "
      />
    </span>


    {/* Text */}

    <span className="text-left">

      <span
        className="
          block
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#9A90A2]
        "
      >
        Ready to get started?
      </span>

      <span
        className="
          mt-1
          block
          text-[14px]
          font-bold
          tracking-[-0.2px]
          text-[#3E2066]
          transition-colors
          duration-300
          group-hover/book:text-[#5B2E91]
        "
      >
        Book This Service
      </span>

    </span>

  </span>


  {/* ==============================================
      RIGHT ARROW
  ============================================== */}

  <span
    className="
      relative
      z-10
      flex
      h-[44px]
      w-[44px]
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      from-[#5B2E91]
      to-[#7B4DB8]
      text-white
      shadow-[0_8px_20px_rgba(91,46,145,0.28)]
      transition-all
      duration-500
      group-hover/book:translate-x-1
      group-hover/book:shadow-[0_12px_28px_rgba(91,46,145,0.38)]
    "
  >

    <HiArrowUpRight
      className="
        text-[18px]
        transition-transform
        duration-500
        group-hover/book:rotate-[-8deg]
      "
    />

  </span>


  {/* ==============================================
      HOVER LIGHT SWEEP
  ============================================== */}

  <motion.span
    className="
      pointer-events-none
      absolute
      inset-y-0
      -left-[80%]
      w-[45%]
      rotate-[18deg]
      bg-gradient-to-r
      from-transparent
      via-white/50
      to-transparent
      opacity-0
      group-hover/book:opacity-100
    "
    animate={{
      x: ["0%", "360%"],
    }}
    transition={{
      duration: 1.1,
      repeat: Infinity,
      repeatDelay: 2.5,
      ease: "easeInOut",
    }}
  />

</motion.a>

        </div>

        {/* =================================================
            LEFT PURPLE ACCENT
        ================================================= */}

        <span
          className="
            absolute
            left-0
            top-0
            bottom-0

            z-40

            w-[3px]

            bg-gradient-to-b
            from-[#5B2E91]
            via-[#7B4DB8]
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
            right-7
            top-7

            z-40

            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-full

            border
            border-white/70

            bg-white/80

            text-[#5B2E91]

            shadow-[0_10px_25px_rgba(62,32,102,0.10)]

            backdrop-blur-xl

            transition-all
            duration-500

            group-hover:border-[#5B2E91]
            group-hover:bg-[#5B2E91]
            group-hover:text-white

            group-hover:rotate-[-8deg]
          "
        >
          <HiArrowUpRight className="text-[17px]" />
        </motion.div>

        {/* =================================================
            BOTTOM GLASS HIGHLIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-0
            left-0
            right-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent

            opacity-80
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