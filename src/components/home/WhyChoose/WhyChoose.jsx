"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  HiMapPin,
  HiUserGroup,
  HiShieldCheck,
  HiCheckCircle,
  HiSquares2X2,
  HiAdjustmentsHorizontal,
  HiHeart,
  HiBuildingOffice2,
  HiArrowUpRight,
} from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";

/* =====================================================
   WHY CHOOSE FEATURES
===================================================== */

const features = [
  {
    icon: HiMapPin,
    title: "Locally Owned & Operated",
    description:
      "Proudly locally owned and operated in Yellowknife, with a strong understanding of Northern communities.",
  },

  {
    icon: HiUserGroup,
    title: "Trained & Supervised Staff",
    description:
      "Our team members are carefully selected, trained, and supervised to maintain professional service standards.",
  },

  {
    icon: HiShieldCheck,
    title: "Licensed & Safety Compliant",
    description:
      "We prioritize safety, accountability, and compliant operations across the services we provide.",
  },

  {
    icon: HiCheckCircle,
    title: "Reliable Service Delivery",
    description:
      "Dependable service delivery focused on professionalism, consistency, and customer satisfaction.",
  },

  {
    icon: HiSquares2X2,
    title: "Multiple Services",
    description:
      "Access security, caregiving, cleaning, and facility support through one trusted organization.",
  },

  {
    icon: HiAdjustmentsHorizontal,
    title: "Flexible Staffing Solutions",
    description:
      "Flexible staffing support designed to respond to the changing needs of our clients.",
  },

  {
    icon: HiHeart,
    title: "Community Focused",
    description:
      "We believe in strengthening Northern communities through local employment and responsible service.",
  },

  {
    icon: HiBuildingOffice2,
    title: "Serving Diverse Clients",
    description:
      "Supporting government, commercial, and residential clients throughout the Northwest Territories.",
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export default function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-white
        via-[#FAF7FD]
        to-[#E9DDF4]
        flex
        justify-center

        py-24

        sm:py-28

        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Left Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[220px]
          top-[10%]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#6D48A8]/10

          blur-[160px]
        "
      />

      {/* Right Lavender Glow */}

      <div
        className="
          pointer-events-none
          absolute

          -right-[220px]
          top-[20%]

          h-[620px]
          w-[620px]

          rounded-full

          bg-[#B998D5]/15

          blur-[160px]
        "
      />

      {/* Center White Glow */}

      <div
        className="
          pointer-events-none
          absolute

          left-[35%]
          top-[30%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-white/80

          blur-[150px]
        "
      />

      {/* Bottom Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-200px]
          left-[35%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#8060A7]/10

          blur-[150px]
        "
      />

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-[250px]
          top-[8%]

          h-[650px]
          w-[650px]

          rounded-full

          border
          border-[#7B4DB8]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          -right-[160px]
          top-[18%]

          h-[430px]
          w-[430px]

          rounded-full

          border
          border-[#B998D5]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          -left-[200px]
          bottom-[5%]

          h-[450px]
          w-[450px]

          rounded-full

          border
          border-[#7B4DB8]/10
        "
      />

      {/* =====================================================
          FLOATING DOTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-[8%]
          top-[20%]

          h-2
          w-2

          rounded-full

          bg-[#7B4DB8]/35
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          left-[12%]
          top-[24%]

          h-1.5
          w-1.5

          rounded-full

          bg-[#B998D5]/50
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[12%]
          top-[35%]

          h-3
          w-3

          rounded-full

          bg-[#6D48A8]/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[20%]
          bottom-[18%]

          h-2
          w-2

          rounded-full

          bg-[#B998D5]/50
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
          style={{margin:"40px 0px 40px 0px"}}
        >
           <Container>
        <div
          className="
            relative
            z-10

            w-full
          
          "
        >
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto

              

              text-center
            "
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
                Why Choose Us
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
            >
              Built on Trust,
              <span className="block">
                Driven by{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#5B2E91]
                    via-[#8060A7]
                    to-[#B998D5]

                    bg-clip-text
                    text-transparent
                  "
                >
                  Community
                </span>
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6

               

                text-[15px]
                leading-7

                text-[#6F6873]

                sm:text-[16px]
              "
              style={{margin:"20px 0px 20px 0px"}}
            >
              We combine local knowledge, trained professionals,
              reliable service delivery, and flexible support to
              serve communities throughout the Northwest Territories.
            </p>

            {/* Divider */}

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
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              mt-16

              grid
              items-center

              gap-14

              lg:mt-20
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-20
            "
          >
            {/* =================================================
                LEFT IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative

                mx-auto

                w-full

                max-w-[540px]

                lg:mx-0
              "
            >
              {/* Back Glow */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-5

                  h-full
                  w-full

                  rounded-[34px]

                  bg-[#8060A7]/15

                  blur-[1px]
                "
              />

              {/* Image */}

              <div
                className="
                  relative

                  h-[430px]
                  w-full

                  overflow-hidden

                  rounded-[34px]

                  border
                  border-white/80

                  bg-white/50

                  shadow-[0_25px_70px_rgba(91,46,145,0.14)]

                  sm:h-[500px]
                  lg:h-[560px]
                "
              >
                <Image
                  src="/assets/whyChoose/whychoose.jpg"
                  alt="K.B.F.M. Global Services team"
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-[1200ms]

                    hover:scale-[1.04]
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#452D2D]/75
                    via-[#452D2D]/10
                    to-transparent
                  "
                />

                {/* Image Label */}

                <div
                  className="
                    absolute
                    left-6
                    top-6

                    flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/30

                    bg-white/15

                    px-4
                    py-2

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    text-white

                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-[#D9B7F0]
                    "
                  />

                  Northern Service
                </div>

                {/* Image Bottom Content */}

                {/* =================================================
    IMAGE SOFT WHITISH-PURPLE OVERLAY
================================================= */}

<div
  className="
    absolute
    inset-0

    bg-gradient-to-t
    from-[#5B2E91]/35
    via-[#B998D5]/10
    to-white/10
  "
/>

{/* Image Label */}

<div
  className="
    absolute
    left-6
    top-6

    flex
    items-center
    gap-2

    rounded-full

    border
    border-white/50

    bg-white/65

    px-4
    py-2

    text-[10px]
    font-semibold
    uppercase
    tracking-[0.2em]

    text-[#5B2E91]

    shadow-[0_8px_25px_rgba(91,46,145,0.08)]

    backdrop-blur-md
  "
>
  <span
    className="
      h-2
      w-2

      rounded-full

      bg-[#7B4DB8]
    "
  />

  Northern Service
</div>

{/* Image Bottom Content */}

<div
  className="
    absolute
    bottom-7
    left-7
    right-7
  "
>
  <p
    className="
      text-[11px]
      font-semibold
      uppercase
      tracking-[0.25em]

      text-[#5B2E91]
    "
  >
    K.B.F.M. Global Services
  </p>

  <h3
    className="
      mt-2

      text-[28px]
      font-semibold
      leading-tight

      text-[#452D2D]

      sm:text-[32px]
    "
    style={{color:"#f0e5ff"}}
  >
    Local expertise.
    <br />
    Reliable support.
  </h3>
</div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT FEATURES
            ================================================= */}

            <div
              className="
                w-full
              "
            >
              <div
                className="
                  grid

                  gap-4

                  sm:grid-cols-2
                "
                style={{padding:"20px"}}
              >
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        group

                        relative

                        overflow-hidden

                        rounded-[22px]

                        border
                        border-white/80

                        bg-white/65

                        px-5
                        py-5

                        shadow-[0_12px_35px_rgba(91,46,145,0.06)]

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:bg-white/85

                        hover:shadow-[0_20px_45px_rgba(91,46,145,0.11)]
                      "
                    >
                      {/* Hover Accent */}

                      <div
                        className="
                          absolute
                          left-0
                          top-0

                          h-full
                          w-[3px]

                          origin-bottom
                          scale-y-0

                          rounded-full

                          bg-gradient-to-b
                          from-[#5B2E91]
                          to-[#B998D5]

                          transition-transform
                          duration-300

                          group-hover:scale-y-100
                        "
                      />

                      {/* Icon */}

                      <div
                        className="
                          mb-4

                          flex
                          h-11
                          w-11

                          items-center
                          justify-center

                          rounded-xl

                          bg-[#6D48A8]/10

                          text-[#6D48A8]

                          transition-all
                          duration-300

                          group-hover:bg-[#6D48A8]
                          group-hover:text-white
                        "
                      >
                        <Icon className="text-[21px]" />
                      </div>

                      {/* Number */}

                      <span
                        className="
                          absolute
                          right-5
                          top-5

                          text-[10px]
                          font-bold
                          tracking-[0.15em]

                          text-[#B998D5]
                        "
                        style={{padding:"10px"}}
                      >
                        0{index + 1}
                      </span>

                      {/* Title */}

                      <h3
                        className="
                          text-[15px]
                          font-semibold
                          leading-snug

                          text-[#452D2D]
                        "
                         style={{padding:"10px"}}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-2

                          text-[12px]
                          leading-5

                          text-[#746D78]
                        "
                        style={{padding:"10px"}}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              OUR COMMITMENT
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
            className="
              relative

              mt-16

              overflow-hidden

              rounded-[30px]

              border
              border-white/80

              bg-gradient-to-r
              from-[#5B2E91]
              via-[#7043A0]
              to-[#8060A7]

              px-7
              py-8

              shadow-[0_25px_70px_rgba(91,46,145,0.18)]

              sm:px-10
              sm:py-9

              lg:mt-20
              lg:px-12
              lg:py-10
            "

            style={{padding:"20px"}}
          >
            {/* Decorative Glow */}

            <div
              className="
                pointer-events-none

                absolute
                -right-20
                -top-32

                h-[300px]
                w-[300px]

                rounded-full

                bg-white/10

                blur-[50px]
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                -bottom-24
                left-1/3

                h-[220px]
                w-[220px]

                rounded-full

                bg-[#D8BCEF]/10

                blur-[60px]
              "
            />

            <div
              className="
                relative
                z-10

                grid

                items-center

                gap-7

                lg:grid-cols-[auto_1fr_auto]
                lg:gap-10
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14

                  shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-white/20

                  bg-white/10

                  text-white

                  backdrop-blur-md
                "
              >
                <HiHeart className="text-[26px]" />
              </div>

              {/* Content */}

              <div>
                <div
                  className="
                    mb-2

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]

                    text-[#E6D8F2]
                  "
                >
                  Our Commitment
                </div>

                <h3
                  className="
                    text-[24px]
                    font-semibold

                    text-white

                    sm:text-[28px]
                  "

                  style={{color:"#f0e5ff"}}
                >
                  Supporting People. Strengthening Communities.
                </h3>

                <p
                  className="
                    mt-3

                    max-w-3xl

                    text-[13px]
                    leading-6

                    text-white/75

                    sm:text-[14px]
                  "
                >
                  We are committed to creating local employment
                  opportunities while delivering exceptional service
                  throughout the Northwest Territories. Every member
                  of our team is selected, trained, and supervised to
                  ensure professionalism, accountability, and customer
                  satisfaction.
                </p>
              </div>

              {/* Arrow */}

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  h-12
                  w-12

                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  text-[#5B2E91]

                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                "
              >
                <HiArrowUpRight className="text-[20px]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
        </div>
     

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-0

          h-[100px]
          w-full

          bg-gradient-to-t
          from-[#E9DDF4]/50
          to-transparent
        "
      />
    </section>
  );
}