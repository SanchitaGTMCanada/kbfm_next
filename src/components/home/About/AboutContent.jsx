"use client";

import { motion } from "framer-motion";

import {
  HiArrowUpRight,
  HiCheckCircle,
  HiMapPin,
  HiBuildingOffice2,
  HiHeart,
  HiShieldCheck,
} from "react-icons/hi2";

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -35,
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
        z-10

        w-full

        pt-16
        sm:pt-20
        lg:pt-24
        lg:pr-8
      "
    >
         
      {/* =================================================
          SECTION SEPARATOR
      ================================================= */}

      {/* <div
        className="
          mb-10

          flex
          items-center

          gap-4
        "
      >
        <span
          className="
            h-[1px]
            w-14

            bg-gradient-to-r
            from-transparent
            to-[#7B4DB8]/50
          "
        />

        <span
          className="
            flex
            h-9
            w-9

            items-center
            justify-center

            rounded-full

            border
            border-[#D9CBE5]

            bg-white/70

            text-[#6D48A8]

            shadow-[0_8px_25px_rgba(91,46,145,0.08)]

            backdrop-blur-md
          "
        >
          <HiBuildingOffice2 className="text-[17px]" />
        </span>

        <span
          className="
            h-[1px]
            w-14

            bg-gradient-to-r
            from-[#7B4DB8]/50
            to-transparent
          "
        />
      </div> */}

      {/* =================================================
          EYEBROW
      ================================================= */}

    

      <div
        className="
          mb-6

          flex
          items-center

          gap-3
        "
      >
        <span
          className="
            h-[2px]
            w-10

            rounded-full

            bg-[#7B4DB8]/60
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
          About Us
        </span>
      </div>

      {/* =================================================
          HEADING
      ================================================= */}

      <h2
        className="
          max-w-[650px]

          text-[42px]
          font-semibold
          leading-[1.05]
          tracking-[-1.8px]

          text-[#452D2D]

          sm:text-[50px]
          md:text-[58px]
          lg:text-[62px]
        "
        style={{margin:"20px 0px 20px 0px"}}
      >
        Reliable Services.

        <span className="block">
          Trusted{" "}
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
            Locally Delivered.
          </span>
        </span>
      </h2>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <div
        className="
          mt-7

          max-w-[650px]

          space-y-5

          text-[15px]
          leading-7

          text-[#6F6873]

          sm:text-[16px]
        "
          style={{margin:"20px 0px 20px 0px"}}
      >
        <p>
          At K.B.F.M. Global Services N.W.T. Ltd.,
          we believe every client deserves reliable,
          professional, and locally delivered services.
        </p>

        <p>
          Founded in 2025, our company was established
          to address the growing need for dependable
          security, caregiving, cleaning, and facility
          support throughout the Northwest Territories.
        </p>

        <p>
          Unlike single-service providers, we offer
          multiple essential services under one trusted
          organization, making it easier for businesses,
          government departments, healthcare providers,
          and homeowners to access quality support from
          a single partner.
        </p>
      </div>

      {/* =================================================
          SERVICE APPROACH
      ================================================= */}

      <div
        className="
          mt-9

          grid
          gap-3

          sm:grid-cols-3
        "
      
      >
        {/* Local */}

        <div
          className="
            group

            rounded-2xl

            border
            border-white

            bg-white/60

            px-4
            py-4

            shadow-[0_10px_30px_rgba(91,46,145,0.05)]

            backdrop-blur-md

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white/80
            hover:shadow-[0_15px_35px_rgba(91,46,145,0.10)]
          "
            style={{padding:"10px"}}
        >
          <div
            className="
              mb-3

              flex
              h-10
              w-10

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
            <HiMapPin className="text-[20px]" />
          </div>

          <p
            className="
              text-[13px]
              font-semibold

              text-[#452D2D]
            "
            style={{margin:"10px 0px 10px 0px"}}
          >
            Locally Delivered
          </p>

          <p
            className="
              mt-1

              text-[11px]
              leading-5

              text-[#7B737E]
            "
          >
            Serving Northern communities
          </p>
        </div>

        {/* One Partner */}

        <div
          className="
            group

            rounded-2xl

            border
            border-white

            bg-white/60

            px-4
            py-4

            shadow-[0_10px_30px_rgba(91,46,145,0.05)]

            backdrop-blur-md

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white/80
            hover:shadow-[0_15px_35px_rgba(91,46,145,0.10)]
          "
          style={{padding:"10px"}}
        >
          <div
            className="
              mb-3

              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-[#8060A7]/10

              text-[#8060A7]

              transition-all
              duration-300

              group-hover:bg-[#8060A7]
              group-hover:text-white
            "

          >
            <HiBuildingOffice2 className="text-[20px]" />
          </div>

          <p
            className="
              text-[13px]
              font-semibold

              text-[#452D2D]
            "
            style={{margin:"10px 0px 10px 0px"}}
          >
            One Trusted Partner
          </p>

          <p
            className="
              mt-1

              text-[11px]
              leading-5

              text-[#7B737E]
            "
          >
            Multiple essential services
          </p>
        </div>

        {/* Community */}

        <div
          className="
            group

            rounded-2xl

            border
            border-white

            bg-white/60

            px-4
            py-4

            shadow-[0_10px_30px_rgba(91,46,145,0.05)]

            backdrop-blur-md

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white/80
            hover:shadow-[0_15px_35px_rgba(91,46,145,0.10)]
          "
            style={{padding:"10px"}}
        >
          <div
            className="
              mb-3

              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-[#B998D5]/20

              text-[#6D48A8]

              transition-all
              duration-300

              group-hover:bg-[#6D48A8]
              group-hover:text-white
            "
          
          >
            <HiHeart className="text-[20px]" />
          </div>

          <p
            className="
              text-[13px]
              font-semibold

              text-[#452D2D]
            "

            style={{margin:"10px 0px 10px 0px"}}
          >
            Community Focused
          </p>

          <p
            className="
              mt-1

              text-[11px]
              leading-5

              text-[#7B737E]
            "
          >
            Professional & compassionate
          </p>
        </div>
      </div>

      {/* =================================================
          TRUST LINE
      ================================================= */}

      <div
        className="
          mt-7

          flex
          items-center
          gap-2
        "
        style={{marginTop:"25px", marginBottom:"10px"}}
      >
        <HiShieldCheck
          className="
            text-[19px]
            text-[#6D48A8]
          "
        />

        <span
          className="
            text-[12px]
            font-medium

            text-[#756D79]
          "
         
        >
          Reliable support from one trusted organization
        </span>
      </div>

      {/* =================================================
          CTA
      ================================================= */}

      <div className="mt-8">
        <motion.a
          href="#services"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            bg-gradient-to-r
            from-[#5B2E91]
            to-[#8060A7]

            px-6
            py-3.5

            text-[14px]
            font-semibold

            text-white

            shadow-[0_12px_30px_rgba(91,46,145,0.20)]

            transition-all
            duration-300

            hover:shadow-[0_16px_40px_rgba(91,46,145,0.28)]
          "
          style={{padding:"5px", marginLeft:"10px", color:"white"}}
        >
          Explore Our Services

          <span
            className="
              flex
              h-7
              w-7

              items-center
              justify-center

              rounded-full

              bg-white

              text-[#5B2E91]
            "
          >
            <HiArrowUpRight className="text-[15px]" />
          </span>
        </motion.a>
      </div>
      
      
    </motion.div>
  );
}