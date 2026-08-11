"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import {
  HiArrowTopRightOnSquare,
  HiChevronDown,
} from "react-icons/hi2";

import Button from "@/components/ui/Button/Button";
import navigation from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import CareerModal from "@/components/career/CareerModal";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  /* =====================================================
     STICKY HEADER
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (e, href) => {
    if (!href) return;

    if (href.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      setOpen(false);
    }
  };

  /* =====================================================
     OPEN CAREER MODAL
  ===================================================== */

  const handleCareerOpen = () => {
    setCareerOpen(true);
    setOpen(false);
  };

  const handleCareerClose = () => {
    setCareerOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          top-6
          left-0
          z-[999999999]

          flex
          w-full
          justify-center

          transition-all
          duration-500

          ${sticky ? "py-3" : "py-5"}
        `}
      >
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
          {/* =====================================================
              NAVBAR CONTAINER
          ===================================================== */}

          <div
            className={`
              relative

              flex
              items-center
              justify-between

              lg:grid
              lg:grid-cols-[165px_minmax(0,1fr)_230px]

              min-h-[100px]

              w-full

              px-4
              lg:px-8

              rounded-2xl

              overflow-visible

              border

              transition-all
              duration-500

              ${
                sticky
                  ? `
                    bg-white/95
                    border-[#D9D9E3]
                    shadow-[0_15px_50px_rgba(69,45,45,0.12)]
                  `
                  : `
                    bg-white/[0.12]
                    border-white/30
                    shadow-[0_15px_50px_rgba(40,25,45,0.10)]
                  `
              }
            `}
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",

              backdropFilter:
                "blur(28px) saturate(145%)",

              WebkitBackdropFilter:
                "blur(28px) saturate(145%)",
            }}
          >
            {/* =====================================================
                PREMIUM GLASS OVERLAY
            ===================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0
                z-0

                rounded-2xl
              "
              style={{
                background: sticky
                  ? `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.72) 0%,
                      rgba(255,255,255,0.58) 50%,
                      rgba(255,255,255,0.72) 100%
                    ),

                    radial-gradient(
                      ellipse 70% 120% at 50% 50%,
                      rgba(255,255,255,0.22) 0%,
                      rgba(255,255,255,0.10) 55%,
                      rgba(91,46,145,0.03) 100%
                    )
                  `
                  : `
                    linear-gradient(
                      135deg,
                      rgba(255,255,255,0.10) 0%,
                      rgba(255,255,255,0.05) 45%,
                      rgba(255,255,255,0.09) 100%
                    ),

                    radial-gradient(
                      ellipse 70% 120% at 50% 50%,
                      rgba(255,255,255,0.04) 0%,
                      rgba(255,255,255,0.02) 55%,
                      rgba(91,46,145,0.02) 100%
                    )
                  `,
              }}
            />

            {/* =====================================================
                INNER BORDER
            ===================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-[1px]
                z-0

                rounded-[15px]

                border
                border-white/15
              "
            />

            {/* =====================================================
                LEFT GLASS LIGHT
            ===================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                -left-24
                top-1/2
                z-0

                h-32
                w-64

                -translate-y-1/2

                rounded-full

                bg-[#5B2E91]/[0.06]

                blur-3xl
              "
            />

            {/* =====================================================
                RIGHT GLASS LIGHT
            ===================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                -right-24
                top-1/2
                z-0

                h-32
                w-64

                -translate-y-1/2

                rounded-full

                bg-[#7B4DB8]/[0.07]

                blur-3xl
              "
            />

            {/* =====================================================
                SUBTLE GOLD LIGHT
            ===================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0
                z-0
              "
              style={{
                background: `
                  radial-gradient(
                    circle at 50% 100%,
                    rgba(212,175,55,0.07),
                    transparent 42%
                  )
                `,
              }}
            />

            {/* =====================================================
                LOGO
            ===================================================== */}

            <div
              className="
                relative
                z-10

                flex
                h-full
                items-center

                flex-shrink-0
              "
              style={{
                maxWidth: "180px",
              }}
            >
              <Link
                href="#home"
                onClick={(e) =>
                  handleNavigation(e, "#home")
                }
                className={`
                  flex
                  items-center
                  justify-center

                  rounded-xl

                  transition-all
                  duration-300

                  ${
                    !sticky
                      ? "bg-white/70 backdrop-blur-sm"
                      : "bg-transparent"
                  }
                `}
                style={{
                  padding: !sticky
                    ? "5px 9px"
                    : "0px",
                }}
              >
                <Image
                  src="/assets/logos/logo.png"
                  alt="K.B.F.M. Global Services N.W.T. Ltd."
                  width={150}
                  height={60}
                  priority
                  className="
                    h-auto
                    w-[150px]
                    object-contain
                  "
                />
              </Link>
            </div>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav
              className="
                relative
                z-[100]

                hidden
                lg:flex

                items-center
                justify-center

                gap-8
              "
            >
              {navigation.map((item) => {
                /* =================================================
                   ABOUT DROPDOWN
                ================================================= */

                if (item.title === "About") {
                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        relative
                      "
                    >
                      {/* ABOUT BUTTON */}

                      <button
                        type="button"
                        className={`
                          group

                          relative

                          flex
                          items-center
                          justify-center

                          gap-1

                          rounded-full

                          px-5
                          py-3

                          text-[18px]
                          font-normal
                          tracking-[0.01em]

                          transition-all
                          duration-300

                          hover:-translate-y-[1px]

                          ${
                            sticky
                              ? `
                                text-[#452D2D]
                                hover:text-[#5B3535]
                              `
                              : `
                                !text-white
                                hover:!text-white
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            relative
                            z-10

                            whitespace-nowrap
                          "
                        >
                          About
                        </span>

                        <HiChevronDown
                          className="
                            relative
                            z-10

                            text-[15px]

                            transition-transform
                            duration-300

                            group-hover:rotate-180
                          "
                        />

                        {/* UNDERLINE */}

                        <span
                          className="
                            pointer-events-none

                            absolute
                            bottom-[5px]
                            left-1/2

                            h-[2px]
                            w-0

                            -translate-x-1/2

                            rounded-full

                            bg-[#D4AF37]

                            transition-all
                            duration-300

                            group-hover:w-8
                          "
                        />
                      </button>

                      {/* ABOUT DROPDOWN */}

                      <div
                        className="
                          invisible

                          absolute

                          left-1/2

                          top-[calc(100%-1px)]

                          z-[99999]

                          mt-3

                          w-[280px]

                          -translate-x-1/2
                          translate-y-2

                          rounded-2xl

                          border
                          border-[#D9D9E3]

                          bg-white

                          p-2

                          opacity-0

                          shadow-[0_20px_50px_rgba(69,45,45,0.20)]

                          transition-all
                          duration-300

                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                        style={{
                          padding: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {/* ABOUT US */}

                        <Link
                          href="#about"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#about"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <span>
                            About Us
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>

                        {/* MISSION VISION VALUES */}

                        <Link
                          href="#mission-vision-values"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#mission-vision-values"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                          }}
                        >
                          <span>
                            Mission, Vision & Values
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>
                      </div>
                    </div>
                  );
                }

                /* =================================================
                   SERVICES DROPDOWN
                ================================================= */

                if (item.title === "Services") {
                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        relative
                      "
                    >
                      {/* SERVICES BUTTON */}

                      <button
                        type="button"
                        className={`
                          group

                          relative

                          flex
                          items-center
                          justify-center

                          gap-1

                          rounded-full

                          px-5
                          py-3

                          text-[18px]
                          font-normal
                          tracking-[0.01em]

                          transition-all
                          duration-300

                          hover:-translate-y-[1px]

                          ${
                            sticky
                              ? `
                                text-[#452D2D]
                                hover:text-[#5B3535]
                              `
                              : `
                                !text-white
                                hover:!text-white
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            relative
                            z-10

                            whitespace-nowrap
                          "
                        >
                          Services
                        </span>

                        <HiChevronDown
                          className="
                            relative
                            z-10

                            text-[15px]

                            transition-transform
                            duration-300

                            group-hover:rotate-180
                          "
                        />

                        {/* UNDERLINE */}

                        <span
                          className="
                            pointer-events-none

                            absolute
                            bottom-[5px]
                            left-1/2

                            h-[2px]
                            w-0

                            -translate-x-1/2

                            rounded-full

                            bg-[#D4AF37]

                            transition-all
                            duration-300

                            group-hover:w-8
                          "
                        />
                      </button>

                      {/* SERVICES DROPDOWN */}

                      <div
                        className="
                          invisible

                          absolute

                          left-1/2

                          top-[calc(100%-4px)]

                          z-[99999]

                          mt-3

                          w-[340px]

                          -translate-x-1/2
                          translate-y-2

                          rounded-2xl

                          border
                          border-[#D9D9E3]

                          bg-white

                          p-2

                          opacity-0

                          shadow-[0_20px_50px_rgba(69,45,45,0.20)]

                          transition-all
                          duration-300

                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                        style={{
                          padding: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {/* PRIVATE SECURITY */}

                        <Link
                          href="#private-security"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#private-security"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <span>
                            Private Security Services
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>

                        {/* CAREGIVING */}

                        <Link
                          href="#caregiving"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#caregiving"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <span>
                            Caregiving & Personal Support
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>

                        {/* CLEANING */}

                        <Link
                          href="#cleaning"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#cleaning"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <span>
                            Cleaning Services
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>

                        {/* JANITORIAL */}

                        <Link
                          href="#janitorial"
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              "#janitorial"
                            )
                          }
                          className="
                            group/item

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-4
                            py-3.5

                            text-[15px]
                            font-medium

                            text-[#452D2D]

                            transition-all
                            duration-200

                            bg-[#F7F3FC]
                            hover:text-[#5B2E91]
                          "
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <span>
                            Janitorial & Facility Maintenance
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5

                              shrink-0

                              rounded-full

                              bg-[#D4AF37]

                              opacity-0

                              transition-opacity
                              duration-200

                              group-hover/item:opacity-100
                            "
                          />
                        </Link>
                      </div>
                    </div>
                  );
                }

                /* =================================================
                   JOIN US
                ================================================= */

                if (item.title === "Join Us") {
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={handleCareerOpen}
                      className={`
                        group

                        relative

                        flex
                        items-center
                        justify-center

                        rounded-full

                        px-5
                        py-3

                        text-[18px]
                        font-normal
                        tracking-[0.01em]

                        transition-all
                        duration-300

                        hover:-translate-y-[1px]

                        ${
                          sticky
                            ? `
                              text-[#452D2D]
                              hover:text-[#5B3535]
                            `
                            : `
                              !text-white
                              hover:!text-white
                            `
                        }
                      `}
                    >
                      <span
                        className="
                          relative
                          z-10

                          whitespace-nowrap
                        "
                      >
                        Join Us
                      </span>

                      {/* UNDERLINE */}

                      <span
                        className="
                          pointer-events-none

                          absolute
                          bottom-[5px]
                          left-1/2

                          h-[2px]
                          w-0

                          -translate-x-1/2

                          rounded-full

                          bg-[#D4AF37]

                          transition-all
                          duration-300

                          group-hover:w-8
                        "
                      />
                    </button>
                  );
                }

                /* =================================================
                   NORMAL MENU ITEMS
                   Home / Contact
                ================================================= */

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href
                      )
                    }
                    className={`
                      group

                      relative

                      flex
                      items-center
                      justify-center

                      rounded-full

                      px-5
                      py-3

                      text-[18px]
                      font-normal
                      tracking-[0.01em]

                      transition-all
                      duration-300

                      hover:-translate-y-[1px]

                      ${
                        sticky
                          ? `
                            text-[#452D2D]
                            hover:text-[#5B3535]
                          `
                          : `
                            !text-white
                            hover:!text-white
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        relative
                        z-10

                        whitespace-nowrap
                      "
                    >
                      {item.title}
                    </span>

                    {/* UNDERLINE */}

                    <span
                      className="
                        pointer-events-none

                        absolute
                        bottom-[5px]
                        left-1/2

                        h-[2px]
                        w-0

                        -translate-x-1/2

                        rounded-full

                        bg-[#D4AF37]

                        transition-all
                        duration-300

                        group-hover:w-8
                      "
                    />
                  </Link>
                );
              })}
            </nav>

            {/* =====================================================
                BOOK NOW
            ===================================================== */}

            <div
              className="
                relative
                z-10

                hidden
                lg:flex

                items-center
                justify-end
              "
            >
              <Button
                href="#contact"
                onClick={(e) =>
                  handleNavigation(
                    e,
                    "#contact"
                  )
                }
                className="
                  group

                  relative
                  overflow-hidden

                  rounded-full

                  border
                  border-[#D4AF37]

                  bg-[#5B2E91]

                  px-6
                  py-3

                  font-semibold
                  text-[14px]
                  text-white

                  shadow-[0_12px_30px_rgba(91,46,145,0.25)]

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:bg-[#3E2066]

                  hover:shadow-[0_18px_45px_rgba(91,46,145,0.32)]
                "
              >
                <span
                  className="
                    relative
                    z-10

                    flex
                    items-center
                    gap-2

                    whitespace-nowrap
                  "
                >
                  Book Now

               
                </span>
              </Button>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              className="
                relative
                z-10

                lg:hidden

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                bg-[#5B2E91]

                text-white

                border
                border-[#D4AF37]/60

                shadow-[0_8px_25px_rgba(91,46,145,0.25)]

                transition-all
                duration-300

                hover:bg-[#3E2066]
                hover:-translate-y-0.5
              "
            >
              {open ? (
                <IoClose className="text-[25px]" />
              ) : (
                <HiOutlineMenuAlt3 className="text-[24px]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* =====================================================
          CAREER MODAL
      ===================================================== */}

      <CareerModal
        open={careerOpen}
        onClose={handleCareerClose}
      />
    </>
  );
}