"use client";

import Link from "next/link";

import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineArrowUpRight,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineSparkles,
} from "react-icons/hi2";

import { FaLinkedinIn } from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const footerNavigation = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Us",
    href: "#about",
  },
 
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact Us",
    href: "#contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Private Security Services",
    href: "#services",
  },
  {
    title: "Caregiving & Personal Support",
    href: "#services",
  },
  {
    title: "Cleaning Services",
    href: "#services",
  },
  {
    title: "Janitorial & Facility Maintenance",
    href: "#services",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const handleNavigation = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

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
    <footer
      id="contact"
      className="
        relative
        overflow-hidden

        bg-[#3E2066]

        text-white
        w-[100%]
        flex justify-center
      "
      style={{
        marginTop: "50px",
      }}
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Large Purple Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -left-[220px]
          top-[80px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#7B4DB8]/20

          blur-[150px]
        "
      />

      {/* Gold Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -right-[220px]
          bottom-[50px]

          h-[480px]
          w-[480px]

          rounded-full

          bg-[#D4AF37]/10

          blur-[150px]
        "
      />

      {/* White Glow */}

      <div
        className="
          pointer-events-none

          absolute
          left-[40%]
          top-[20%]

          h-[280px]
          w-[280px]

          rounded-full

          bg-white/5

          blur-[120px]
        "
      />

      {/* Decorative Circle */}

      <div
        className="
          pointer-events-none

          absolute
          -right-[180px]
          top-[80px]

          h-[500px]
          w-[500px]

          rounded-full

          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          -left-[150px]
          bottom-[100px]

          h-[360px]
          w-[360px]

          rounded-full

          border
          border-[#D4AF37]/10
        "
      />

      {/* =====================================================
          MAIN FOOTER
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
              <div
        className="
          relative
          z-10

          w-[100%]

          mx-auto

         

          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
          lg:py-24
        "
        style={{padding:"20px"}}
      >
        {/* =================================================
            TOP BRAND AREA
        ================================================= */}

        <div
          className="
            mb-14

            flex
            flex-col

            gap-8

            border-b
            border-white/10

            pb-12

            lg:flex-row
            lg:items-end
            lg:justify-between
          "

          style={{marginBottom:"10px"}}
        >
          {/* Brand */}

          <div className="max-w-[620px]">
            {/* Small Label */}

            <div
              className="
                mb-5

                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-10

                  bg-[#D4AF37]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]

                  text-[#D4AF37]
                "
              >
                Northern Service
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-[32px]
                font-semibold
                leading-[1.1]
                tracking-[-1px]

                text-white

                sm:text-[40px]
              "

              style={{color:"white"}}
            >
              K.B.F.M. Global Services
            </h2>

            {/* Description */}

            <p
              className="
                mt-5

                max-w-[600px]

                text-[14px]
                leading-7

                text-white/65

                sm:text-[15px]
              "

              style={{margin:"20px 0px 20px 0px"}}
            >
              Serving the North with care, security,
              and integrity. Reliable staffing and
              facility support services delivered
              throughout the Northwest Territories.
            </p>
          </div>

          {/* CTA */}

          <Link
            href="#booking"
            onClick={(e) =>
              handleNavigation(e, "#booking")
            }
            className="
              group

              inline-flex
              w-fit

              items-center
              gap-3

              rounded-full

              border
              border-[#D4AF37]

              bg-[#D4AF37]

              px-5
              py-3

              text-[13px]
              font-semibold

              text-[#3E2066]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-white
              hover:border-white
            "
            style={{marginBottom:"10px", paddingLeft:"10px"}}
          >
            Request a Free Quote

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

                transition-transform
                duration-300

                group-hover:rotate-45
              "
            >
              <HiOutlineArrowUpRight className="text-[15px]" />
            </span>
          </Link>
        </div>

        {/* =================================================
            FOOTER GRID
        ================================================= */}

        <div
          className="
            grid

            gap-12

            sm:grid-cols-2

            lg:grid-cols-[1fr_1fr_1.2fr]
          "
        >
          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div>
            <div
              className="
                mb-6

                flex
                items-center
                gap-3
              "
              style={{padding:"15px", paddingLeft:"0px"}}
            >
              <HiOutlineSparkles
                className="
                  text-[18px]
                  text-[#D4AF37]
                "
              />

              <h3
                className="
                  text-[15px]
                  font-semibold

                  text-white
                "

                style={{color:"white"}}
              >
                Navigation
              </h3>
            </div>

            <ul className="space-y-3.5">
              {footerNavigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href
                      )
                    }
                    className="
                      group

                      inline-flex
                      items-center
                      gap-2

                      text-[13px]

                      text-white/55

                      transition-all
                      duration-300

                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1

                        rounded-full

                        bg-[#D4AF37]

                        opacity-0

                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <div
              className="
                mb-6

                flex
                items-center
                gap-3
              "

              style={{padding:"15px", paddingLeft:"0px"}}
            >
              <HiOutlineShieldCheck
                className="
                  text-[18px]
                  text-[#D4AF37]
                "
              />

              <h3
                className="
                  text-[15px]
                  font-semibold

                  text-white
                "
                    style={{color:"white"}}
              >
                Our Services
              </h3>
            </div>

            <ul className="space-y-4">
              

               {services.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href
                      )
                    }
                    className="
                      group

                      inline-flex
                      items-center
                      gap-2

                      text-[13px]

                      text-white/55

                      transition-all
                      duration-300

                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1

                        rounded-full

                        bg-[#D4AF37]

                        opacity-0

                        transition-opacity
                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT CARD
          ================================================= */}

          <div style={{margin:"20px 0px"}}>
            <div
              className="
                rounded-[28px]

                border
                border-white/10

                bg-white/[0.07]

                backdrop-blur-xl
              "
              style={{
                padding: "25px",
              }}
            >
              {/* Heading */}

              <div
                className="
                  mb-7

                  flex
                  items-center
                  gap-3
                "
                style={{marginBottom:"15px"}}
              >
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-[#D4AF37]

                    text-[#3E2066]
                  "
                >
                  <HiOutlineHeart className="text-[20px]" />
                </div>

                <div>
                  <span
                    className="
                      block

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]

                      text-[#D4AF37]
                    "
                  >
                    Get In Touch
                  </span>

                  <h3
                    className="
                      mt-1

                      text-[20px]
                      font-semibold

                      text-white
                    "
                    style={{color:'white'}}
                  >
                    Contact Us
                  </h3>
                </div>
              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <div
                className="
                  mb-5

                  flex
                  items-start
                  gap-4
                "

                style={{marginBottom:"10px"}}
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
                  <HiOutlinePhone className="text-[18px]" />
                </div>

                <div>
                  <span
                    className="
                      block

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]

                      text-white/35
                    "
                  >
                    Phone
                  </span>

                  <a
                    href="tel:8676882503"
                    className="
                      mt-1
                      block

                      text-[13px]

                      text-white/80

                      transition

                      hover:text-[#D4AF37]
                    "
                  >
                    867-688-2503
                  </a>
                </div>
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div
                className="
                  mb-5

                  flex
                  items-start
                  gap-4
                "

                  style={{marginBottom:"10px"}}
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
                  <HiOutlineEnvelope className="text-[18px]" />
                </div>

                <div>
                  <span
                    className="
                      block

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]

                      text-white/35
                    "
                  >
                    Email
                  </span>

                  <a
                    href="mailto:pastorbornking@yahoo.fr"
                    className="
                      mt-1
                      block

                      break-all

                      text-[13px]

                      text-white/80

                      transition

                      hover:text-[#D4AF37]
                    "
                  >
                    pastorbornking@yahoo.fr
                  </a>
                </div>
              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
                  style={{marginBottom:"10px"}}
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
                  <HiOutlineMapPin className="text-[18px]" />
                </div>

                <div>
                  <span
                    className="
                      block

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]

                      text-white/35
                    "
                  >
                    Office
                  </span>

                  <p
                    className="
                      mt-1

                      text-[13px]
                      leading-6

                      text-white/75
                    "
                  >
                    K.B.F.M. Global Services N.W.T. Ltd.
                    <br />
                    Unit 9, 5010 49th Street
                    <br />
                    Yellowknife, Northwest Territories
                    <br />
                    X1A 2N4
                  </p>
                </div>
              </div>

              {/* Website */}

             
            </div>
          </div>
        </div>

        {/* =================================================
            BUSINESS HOURS
        ================================================= */}

     

        {/* =================================================
            BOTTOM AREA
        ================================================= */}

        <div
          className="
            mt-12

            border-t
            border-white/10

            pt-7
          "
        >
          <div
            className="
              flex
              flex-col

              gap-6

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Copyright */}

            <p
              className="
                text-[11px]

                text-white/40
              "

              style={{margin:"10px 0px" , color:"gold"}}
            >
              © {new Date().getFullYear()} K.B.F.M. Global
              Services N.W.T. Ltd. All rights reserved.
            </p>

            {/* Social */}

         
          </div>
        </div>

        {/* =================================================
            FINAL TAGLINE
        ================================================= */}

      
      </div>
        </div>
  
    </footer>
  );
}