"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  HiArrowUpRight,
  HiPhone,
  HiCalendarDays,
} from "react-icons/hi2";



export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  const handleBooking = (e) => {
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
        y: 70,
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
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-[30px]

        border
        border-[#E8DFF0]

        bg-white

        shadow-[0_18px_55px_rgba(69,45,45,0.07)]

        transition-all
        duration-500

        hover:-translate-y-2

        hover:border-[#CDB7DF]

        hover:shadow-[0_30px_75px_rgba(91,46,145,0.14)]

        ${service.featured ? "lg:col-span-2" : ""}
      `}
    >

      {/* =====================================================
          IMAGE SECTION
      ===================================================== */}

      <div
        className="
          relative
          aspect-[4/3]
          w-full
          shrink-0
          overflow-hidden
        "
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            33vw
          "
          className="
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-110
          "
        />

        {/* Image Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#2E1A43]/95
            via-[#3E2754]/35
            to-transparent
          "
        />

        {/* Top Soft Overlay */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0

            h-24

            bg-gradient-to-b
            from-black/15
            to-transparent
          "
        />

        {/* =================================================
            SERVICE NUMBER
        ================================================= */}

        <div
          className="
            absolute
            left-6
            top-6

            flex
            h-8
            min-w-8

            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-black/20

            px-2

            text-[11px]
            font-bold
            tracking-[0.12em]

            text-white/85

            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* =================================================
            SERVICE ICON
        ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          className="
            absolute
            right-6
            top-6

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            border
            border-white/30

            bg-white/15

            text-white

            shadow-[0_12px_35px_rgba(0,0,0,0.22)]

            backdrop-blur-xl

            transition-all
            duration-500
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-[-5px]

              rounded-2xl

              bg-[#B998D5]/15

              blur-md
            "
          />

          <Icon
            size={26}
            className="
              relative
              z-10

              drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
            "
          />
        </motion.div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
          "
        >
          {service.tag && (
            <span
              className="
                mb-2

                block

                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]

                text-[#E8DDF2]
              "
            >
              {service.tag}
            </span>
          )}

          <h3
            className="
              max-w-[340px]

              text-[25px]
              font-semibold
              leading-[1.12]
              tracking-[-0.5px]

              text-white

              sm:text-[28px]
            "
          >
            {service.title}
          </h3>
        </div>
      </div>


      {/* =====================================================
          PREMIUM CONTENT SECTION
      ===================================================== */}

      <div
        className="
          relative

          flex
          flex-1
          flex-col

          bg-white
        "
        style={{
          padding: "26px 26px 24px 26px",
        }}
      >

        {/* =================================================
            SMALL SERVICE LABEL
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
          "
          style={{
            marginBottom: "16px",
          }}
        >
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-[#F5EFF9]

              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]

              text-[#6D48A8]
            "
            style={{
              padding: "7px 11px",
            }}
          >
            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-[#8060A7]

                shadow-[0_0_8px_rgba(128,96,167,0.5)]
              "
            />

            {service.tag || "Professional Service"}
          </span>

          {/* Service Number */}

          <span
            className="
              text-[11px]
              font-semibold
              tracking-[0.18em]

              text-[#B7AFBC]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        {service.description && (
          <p
            className="
              line-clamp-3

              text-[14px]
              leading-[1.8]

              text-[#716A78]
            "
            style={{
              marginBottom: "22px",fontSize:"15px"
            }}
          
          >
            {service.description}
          </p>
        )}


        {/* =================================================
            SERVICE DETAILS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2

            overflow-hidden

            rounded-2xl

            border
            border-[#EEE8F3]

            bg-[#FBF9FD]
          "
          style={{
            marginBottom: "22px",
          }}
        >

          {/* =================================================
              STARTING PRICE
          ================================================= */}

          <div
            className="
              border-r
              border-[#EEE8F3]
            "
            style={{
              padding: "15px",
            }}
          >
            <span
              className="
                block

                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]

                text-[#A39AA9]
              "
            >
              Starting From
            </span>

            <div
              className="
                mt-2

                text-[23px]
                font-bold
                leading-none

                text-[#4B286F]
              "
            >
              {service.startingPrice}
            </div>
          </div>


          {/* =================================================
              DURATION
          ================================================= */}

          <div
            style={{
              padding: "15px",
            }}
          >
            <span
              className="
                block

                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]

                text-[#A39AA9]
              "
            >
              Duration
            </span>

            <div
              className="
                mt-2

                flex
                items-center
                gap-2

                text-[13px]
                font-semibold

                text-[#5E5665]
              "
            >
              <HiCalendarDays
                className="
                  text-[16px]
                  text-[#8060A7]
                "
              />

              {service.duration || "Flexible"}
            </div>
          </div>
        </div>


        {/* =================================================
            BOOK NOW SECTION
        ================================================= */}

        <div
          className="
            mt-auto

            rounded-[20px]

            border
            border-[#DDD0E8]

            bg-gradient-to-r
            from-[#F8F4FB]
            via-[#F1EAF7]
            to-[#F8F4FB]

            shadow-[0_8px_25px_rgba(91,46,145,0.06)]
          "
          style={{
            padding: "10px",
          }}
        >
          <motion.a
            href="#booking"
            onClick={handleBooking}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group/book

              flex
              w-full

              items-center
              justify-between

              rounded-[14px]

              bg-[#5B2E91]

              text-white

              shadow-[0_8px_22px_rgba(91,46,145,0.20)]

              transition-all
              duration-300

              hover:bg-[#6D48A8]

              hover:shadow-[0_12px_28px_rgba(91,46,145,0.28)]
            "
            style={{
              padding: "11px 12px 11px 15px",
            }}
          >

            {/* LEFT SIDE */}

            <span
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/15

                  bg-white/15
                "
              >
                <HiPhone
                  className="
                    text-[17px]
                    text-white
                  "
                />
              </span>

              <span className="text-left">
                <span
                  className="
                    block

                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]

                    text-white/60
                  "
                >
                  Need this service?
                </span>

                <span
                  className="
                    mt-0.5

                    block

                    text-[13px]
                    font-bold

                    text-white
                  "
                >
                  Book Now
                </span>
              </span>
            </span>


            {/* RIGHT ARROW */}

            <span
              className="
                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                bg-white

                text-[#5B2E91]

                transition-all
                duration-300

                group-hover/book:translate-x-1
              "
            >
              <HiArrowUpRight
                className="
                  text-[17px]
                "
              />
            </span>

          </motion.a>
        </div>


        {/* =================================================
            DECORATIVE BOTTOM LINE
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-0
            left-1/2

            h-[2px]
            w-0

            -translate-x-1/2

            rounded-full

            bg-gradient-to-r
            from-[#8060A7]
            via-[#B998D5]
            to-[#8060A7]

            transition-all
            duration-500

            group-hover:w-[45%]
          "
        />

      </div>


      {/* =====================================================
          DECORATIVE BACKGROUND CIRCLE
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -bottom-24
          -right-24

          h-56
          w-56

          rounded-full

          bg-[#7B4DB8]/[0.035]

          transition-all
          duration-700

          group-hover:scale-150
        "
      />

    </motion.article>
  );
}