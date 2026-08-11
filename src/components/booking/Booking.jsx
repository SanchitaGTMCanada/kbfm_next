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
        bg-[#F7F3FC]

        py-24
        sm:py-28
        lg:py-32
        flex 
        justify-center
      "

      
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
          opacity: 0.85,
        }}
      />

      {/* Purple glow */}

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

          bg-[#5B2E91]/[0.07]

          blur-[130px]
        "
      />

      {/* Gold glow */}

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

          bg-[#D4AF37]/[0.07]

          blur-[130px]
        "
      />

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
          border-[#5B2E91]/10
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
          border-[#D4AF37]/10
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
          FLOATING GOLD DOT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.35, 0.7, 0.35],
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

          bg-[#D4AF37]
        "
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.45, 0.2],
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

          style={{marginTop:"40px"}}
          
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
            className="
              mx-auto
              
              text-center
            "
          >
            {/* Eyebrow */}

         

            {/* Heading */}

        


            {/* Gold divider */}

            <div
              className="
                mx-auto
                mt-7

                h-[3px]
                w-12

                rounded-full

                bg-[#D4AF37]
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
              border-[#D9D9E3]

              bg-white

              shadow-[0_30px_100px_rgba(62,32,102,0.10)]

              lg:mt-20
            "
          >
            {/* =================================================
                TOP GOLD ACCENT
            ================================================= */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0

                z-20

                h-[3px]

                bg-gradient-to-r
                from-[#5B2E91]
                via-[#D4AF37]
                to-[#7B4DB8]
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
                  from-[#3E2066]
                  via-[#4B247D]
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

                    bg-[#7B4DB8]/30

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

                    bg-[#D4AF37]/10

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
                    border-[#D4AF37]/20
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

                        text-[#D4AF37]

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

                        text-[#D4AF37]
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

                      style={{color:"#dfcbfa"}}
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
                      style={{color:"#f4e0fa", fontSize:"15px"}}
                    >
                      Whether you need one service or
                      ongoing support, our team is ready
                      to understand your requirements.
                    </p>

                    {/* =================================================
    INDUSTRIES WE SERVE
================================================= */}

<div className="mt-10" style={{marginTop:"30px"}}>

  <p
    className="
      mb-5

      text-[9px]
      font-bold
      uppercase
      tracking-[0.28em]

      text-[#D4AF37]
    "
    style={{margin:"10px 0px 10px 0px", fontSize:"16px", color:"#d5bcf5"}}
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

    {/* Government */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "

        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Government Departments
      </p>
    </div>


    {/* Healthcare */}

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

          text-[#D4AF37]
        "
      >
        <HiHeart className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Healthcare Facilities
      </p>
    </div>


    {/* Commercial */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Commercial Businesses
      </p>
    </div>


    {/* Industrial */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Industrial Operations
      </p>
    </div>


    {/* Residential */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Residential Clients
      </p>
    </div>


    {/* Non Profit */}

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

          text-[#D4AF37]
        "
      >
        <HiUserGroup className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Non-Profit Organizations
      </p>
    </div>


    {/* Property Management */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Property Management Companies
      </p>
    </div>


    {/* Construction */}

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

          text-[#D4AF37]
        "
      >
        <HiBuildingOffice2 className="text-[16px]" />
      </div>

      <p
        className="
          text-[10px]
          font-medium
          leading-4

          text-white/75
        "
        style={{color:"#f4e0fa",fontSize:"14px"}}
      >
        Construction Companies
      </p>
    </div>

  </div>

</div>

                    {/* Gold line */}

                    <div
                      className="
                        mt-7

                        h-[3px]
                        w-12

                        rounded-full

                        bg-[#D4AF37]
                      "
                    />
                  </div>

                  {/* Trust features */}

                  <div
                    className="
                      mt-12

                      space-y-3
                      gap-6
                    "
                  >
                    {/* Item */}

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
                        padding: "13px 15px", margin:"20px 0px 20px 0px"
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

                          text-[#D4AF37]
                        "
                      >
                        <HiShieldCheck className="text-[19px]" />
                      </div>

                      <div>
                        <p
                          className="
                            text-[12px]
                            font-semibold
                            text-white
                          "

                          style={{color:"#dfcbfa", fontSize:"16px"}}
                        >
                          Reliable & Professional
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-white/50
                          "
                            style={{color:"#f4e0fa", fontSize:"13px"}}
                        >
                          Trusted local support
                        </p>
                      </div>
                    </div>

                    {/* Item */}

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
                        padding: "13px 15px", margin:"20px 0px 20px 0px"
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

                          text-[#D4AF37]
                        "
                      >
                        <HiUserGroup className="text-[19px]" />
                      </div>

                      <div>
                        <p
                          className="
                            text-[12px]
                            font-semibold
                            text-white
                          "
                            style={{color:"#dfcbfa", fontSize:"16px"}}
                        >
                          Community Focused
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-white/50
                          "
                            style={{color:"#f4e0fa",fontSize:"13px"}}
                        >
                          Built around local needs
                        </p>
                      </div>
                    </div>

                    {/* Item */}

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
                        padding: "13px 15px", margin:"20px 0px 20px 0px"
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

                          text-[#D4AF37]
                        "
                      >
                        <HiBuildingOffice2 className="text-[19px]" />
                      </div>

                      <div>
                        <p
                          className="
                            text-[12px]
                            font-semibold
                            text-white
                          "
                            style={{color:"#dfcbfa",fontSize:"16px"}}
                        >
                          Multiple Services
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-white/50
                          "
                            style={{color:"#f4e0fa",fontSize:"13px"}}
                        >
                          One trusted partner
                        </p>
                      </div>
                    </div>
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
                className="
                  relative

                  bg-white
                "
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
                    border-[#D4AF37]/20
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
                  className="
                    relative
                    z-10
                  "
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

                        bg-[#D4AF37]
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

                      text-[#2D2D2D]

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
                    Complete the form below and our team
                    will contact you shortly to discuss your
                    requirements.
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
              marginTop:"20px"
            }}

          >
            <div
              className="
                flex
                items-center
                gap-2
              "
              style={{margin:"20px 0px 20px 0px"}}
            >
              <HiShieldCheck
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
                  opacity: 0.68,fontSize:"15px"
                }}
              >
                Professional Service
              </span>
            </div>

            <span
              className="
                hidden
                h-4
                w-px

                bg-[#D9D9E3]

                sm:block
              "
            />

            <div
              className="
                flex
                items-center
                gap-2
              "
 style={{margin:"20px 0px 20px 0px"}}

            >
              <HiCheckCircle
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
                  opacity: 0.68,fontSize:"15px"
                }}
              >
                Reliable Support
              </span>
            </div>

            <span
              className="
                hidden
                h-4
                w-px

                bg-[#D9D9E3]

                sm:block
              "
            />

            <div
              className="
                flex
                items-center
                gap-2
              "
               style={{margin:"20px 0px 20px 0px"}}
            >
              <HiHeart
                className="
                  text-[18px]
                  text-[#D4AF37]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium

                  text-[#2D2D2D]
                "
                style={{
                  opacity: 0.68,fontSize:"15px"
                }}
              >
                Community Focused
              </span>
            </div>

            <span
              className="
                hidden
                h-4
                w-px

                bg-[#D9D9E3]

                sm:block
              "
            />

            <div
              className="
                flex
                items-center
                gap-2
              "
               style={{margin:"20px"}}
            >
              <HiArrowRight
                className="
                  text-[18px]
                  text-[#D4AF37]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium

                  text-[#2D2D2D]
                "
                style={{
                  opacity: 0.68,fontSize:"15px"
                }}
              >
                Quick Response
              </span>
            </div>
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

          bg-gradient-to-t
          from-white
          to-transparent
        "
      />
    </section>
  );
}