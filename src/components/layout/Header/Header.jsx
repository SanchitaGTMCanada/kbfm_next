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
      {/* =====================================================
          HEADER
      ===================================================== */}
  <div className="w-[90%] mx-auto relative z-2000 h-full flex justify-center">
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
         

     <div
          className={`
            relative

            flex
            items-center
            justify-between

            lg:grid
            lg:grid-cols-[165px_minmax(0,1fr)_230px]

            min-h-[100px]

            w-[calc(100%-32px)]
            max-w-[1380px]

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
                  bg-white/55
                  shadow-[0_15px_50px_rgba(62,32,102,0.12)]
                `
                : `
                  bg-white/40
                  shadow-[0_15px_50px_rgba(62,32,102,0.14)]
                `
            }
          `}
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",

            /* Premium frosted glass */
            backdropFilter: "blur(28px) saturate(145%)",
            WebkitBackdropFilter: "blur(28px) saturate(145%)",
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
              background: `
                linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.34) 0%,
                  rgba(255, 255, 255, 0.20) 45%,
                  rgba(255, 255, 255, 0.28) 100%
                ),
                radial-gradient(
                  ellipse 70% 120% at 50% 50%,
                  rgba(255, 255, 255, 0.10) 0%,
                  rgba(255, 255, 255, 0.04) 55%,
                  rgba(91, 46, 145, 0.03) 100%
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
              border-white/25
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
                  rgba(212, 175, 55, 0.07),
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

              gap-7
            "
          >
            {navigation.map((item) => {
              const navClass = `
                group
                relative

                text-[14px]
                font-semibold
                tracking-[0.01em]

                text-[#3E2066]

                transition-all
                duration-300

                hover:text-[#5B2E91]
              `;

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
                  className={navClass}
                >
                  {item.title}

                  {/* Gold hover underline */}

                  <span
                    className="
                      absolute
                      left-1/2
                      -bottom-2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-[#D4AF37]

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />
                </Link>
              );
            })}
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

                <HiArrowTopRightOnSquare
                  className="
                    text-[17px]

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
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
    
      </header>
    </div>
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