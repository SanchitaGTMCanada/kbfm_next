"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import Button from "@/components/ui/Button/Button";
import navigation from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <header
        className={`
          fixed
          top-6
          left-0
          z-50
          flex
          w-full
          justify-center
          transition-all
          duration-500

          ${sticky ? "py-3" : "py-5"}
        `}
      >
        <div className="w-[90%] mx-auto relative z-2000 h-full flex justify-center">
          <div
            className={`
              relative

              flex
              items-center
              justify-between

              lg:grid
              lg:grid-cols-[165px_minmax(0,1fr)_230px]

              min-h-[100px]

              w-[100%]

              px-4
              lg:px-8

              rounded-2xl

              overflow-hidden

              border
              border-white/60

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

              backdropFilter: "blur(28px) saturate(145%)",
              WebkitBackdropFilter:
                "blur(28px) saturate(145%)",
            }}
          >
            {/* =====================================================
                PREMIUM WHITE GLASS OVERLAY
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
                      rgba(255,255,255,0.28) 0%,
                      rgba(255,255,255,0.14) 45%,
                      rgba(255,255,255,0.24) 100%
                    ),
                    radial-gradient(
                      ellipse 70% 120% at 50% 50%,
                      rgba(255,255,255,0.10) 0%,
                      rgba(255,255,255,0.04) 55%,
                      rgba(91,46,145,0.03) 100%
                    )
                  `,
              }}
            />

            {/* =====================================================
                SOFT WHITE HIGHLIGHT
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
                SUBTLE PURPLE GLASS LIGHT
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
                maxWidth: "160px",
              }}
            >
              <Link
                href="#home"
                onClick={(e) =>
                  handleNavigation(e, "#home")
                }
                className="
                  flex
                  h-full
                  items-center
                  justify-center
                "
              >
                {/* KEEP YOUR EXISTING LOGO / IMAGE CODE HERE */}

                {/* Example:

                <Image
                  src="/assets/logo.png"
                  alt="K.B.F.M. Global Services"
                  width={140}
                  height={60}
                  priority
                />

                */}
              </Link>
            </div>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav
              className="
                relative
                z-10

                hidden
                lg:flex

                items-center
                justify-center

                gap-8
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.href
                    )
                  }
                  className="
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
                  "
                >
                  {/* =================================================
                      MENU TEXT
                  ================================================= */}

  <span
  className={`
    relative
    z-10
    whitespace-nowrap

    text-[18px]
    font-normal
    tracking-[0.01em]

    transition-all
    duration-300

    ${
      sticky
        ? `
          text-[#452D2D]
          group-hover:text-[#5B3535]
        `
        : `
          text-white
          group-hover:text-[#F5EDEB]
        `
    }
  `}
>
  {item.title}
</span>
                  {/* =================================================
                      SUBTLE PURPLE GLOW
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      left-1/2
                      top-1/2

                      h-8
                      w-16

                      -translate-x-1/2
                      -translate-y-1/2

                      rounded-full

                      bg-[#9B6BC8]/10

                      blur-xl

                      opacity-0

                      transition-opacity
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      PREMIUM PURPLE UNDERLINE
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      left-1/2
                      bottom-[5px]

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-transparent
                      via-[#8B5CC6]
                      to-transparent

                      transition-all
                      duration-300

                      group-hover:w-8
                    "
                  />

                  {/* =================================================
                      GOLD MICRO ACCENT
                  ================================================= */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      bottom-[3px]
                      left-1/2

                      h-[3px]
                      w-[3px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#D4AF37]

                      opacity-0

                      shadow-[0_0_8px_rgba(212,175,55,0.75)]

                      transition-all
                      duration-300

                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* =====================================================
                REQUEST A QUOTE
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
                  Request a Quote

                  
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
    </>
  );
}