"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import {
  HiArrowTopRightOnSquare,
  HiArrowUpRight,
  HiChevronDown,
  HiMagnifyingGlass,
  HiInformationCircle,
  HiFlag,
  HiShieldCheck,
  HiXMark,
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

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /* =====================================================
     RESPONSIVE SERVICES SUBMENU
  ===================================================== */

  const [activeService, setActiveService] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [serviceSubmenuStyle, setServiceSubmenuStyle] = useState({
    left: 0,
    top: 0,
    width: 360,
    maxHeight: 600,
  });

  const [mounted, setMounted] = useState(false);

  const serviceCloseTimer = useRef(null);
  const serviceSubmenuRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  /* =====================================================
     STICKY HEADER
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     NAVIGATION
  ===================================================== */

const serviceCategories = [
  {
    title: "Private Security Services",
    icon: "🛡️",
    items: [
      "Mobile Patrol",
      "Event Security Guards",
      "Executive Protection",
      "Gatehouse Concierge",
      "Surveillance Operations",
      "Retail Security",
      "Construction Security",
    ],
  },

  {
    title: "Cleaning & Janitorial Services",
    icon: "✨",
    items: [
      "Offices & Residential",
      "Carpet & Window Cleaning",
      "Auto Detailing",
      "Deep Cleaning",
      "Move In & Move Out",
      "Restaurant & Kitchen",
      "Garage & Basement",
      "Outdoor & Exterior",
      "Schools, Churches & Day Care",
      "Snow Removal",
      "Floor Waxing & Polishing",
      "Facility Maintenance",
      "Junk Removal",
      "Duct & Vent Cleaning",
    ],
  },

  {
    title: "Private Healthcare Services",
    icon: "♥",
    items: [
      "Caregiver",
      "Personal Support Worker",
      "Companionship",
      "Special Child & Adult Care",
      "Nanny & Child Care",
      "Errand Helper",
    ],
  },

  {
    title: "Remote Camp Services",
    icon: "⌂",
    items: [
      "Camp Housekeeping",
      "Kitchen Helper",
      "Dishwasher",
      "Dining Attendant",
      "Sandwich Maker",
      "Camp Janitorial",
    ],
  },

  {
    title: "General Labour Services",
    icon: "◈",
    items: [
      "General Labourer",
      "Construction Worker",
      "Retail Space",
      "Store Restocking",
      "Housekeeping",
      "Warehouse Support",
    ],
  },
];

  /* =====================================================
     RESPONSIVE SERVICE SUBMENU POSITIONING
  ===================================================== */

  const openServiceSubmenu = (event, category) => {
    if (serviceCloseTimer.current) {
      clearTimeout(serviceCloseTimer.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const edge = 14;
    const gap = 10;

    const submenuWidth = Math.min(360, viewportWidth - edge * 2);

    const fitsRight =
      rect.right + gap + submenuWidth <= viewportWidth - edge;

    let left = fitsRight
      ? rect.right + gap
      : rect.left - submenuWidth - gap;

    left = Math.max(
      edge,
      Math.min(left, viewportWidth - submenuWidth - edge)
    );

    let top = rect.top;

    top = Math.max(
      edge,
      Math.min(top, viewportHeight - edge - 260)
    );

    setServiceSubmenuStyle({
      left,
      top,
      width: submenuWidth,
      maxHeight: viewportHeight - edge * 2,
    });

    setServicesOpen(true);
    setActiveService(category.title);
  };

  const scheduleServiceClose = () => {
    if (serviceCloseTimer.current) {
      clearTimeout(serviceCloseTimer.current);
    }

    serviceCloseTimer.current = setTimeout(() => {
      setActiveService(null);
      setServicesOpen(false);
    }, 350);
  };

  const cancelServiceClose = () => {
    if (serviceCloseTimer.current) {
      clearTimeout(serviceCloseTimer.current);
      serviceCloseTimer.current = null;
    }
  };

  useLayoutEffect(() => {
    if (!activeService || !serviceSubmenuRef.current) return;

    const rect = serviceSubmenuRef.current.getBoundingClientRect();
    const edge = 14;
    let top = serviceSubmenuStyle.top;

    if (rect.bottom > window.innerHeight - edge) {
      top -= rect.bottom - (window.innerHeight - edge);
    }

    if (top < edge) top = edge;

    if (Math.abs(top - serviceSubmenuStyle.top) > 1) {
      setServiceSubmenuStyle((current) => ({ ...current, top }));
    }
  }, [activeService, serviceSubmenuStyle.top]);

  useEffect(() => {
    const handleResize = () => {
      setActiveService(null);
      setServicesOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (serviceCloseTimer.current) {
        clearTimeout(serviceCloseTimer.current);
      }
    };
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

  /* =====================================================
     WEBSITE SEARCH - ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    if (!searchOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  /* =====================================================
     WEBSITE SEARCH
  ===================================================== */

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!searchOpen || !query) {
      setSearchResults([]);
      return;
    }

    const results = [];
    const seen = new Set();

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const id = section.getAttribute("id");

      if (!id || seen.has(id)) return;

      const text = section.innerText
        ?.replace(/\s+/g, " ")
        .trim();

      if (!text) return;

      const heading =
        section
          .querySelector("h1, h2, h3")
          ?.textContent?.trim() ||
        id
          .split("-")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" ");

      const searchableText =
        `${heading} ${text}`.toLowerCase();

      if (searchableText.includes(query)) {
        seen.add(id);

        const originalIndex = text
          .toLowerCase()
          .indexOf(query);

        let preview = text;

        if (originalIndex > 35) {
          preview = `...${text.slice(
            Math.max(0, originalIndex - 35),
            originalIndex + 95
          )}...`;
        } else {
          preview = text.slice(0, 130);

          if (text.length > 130) {
            preview += "...";
          }
        }

        results.push({
          id,
          heading,
          preview,
        });
      }
    });

    setSearchResults(results.slice(0, 8));
  }, [searchOpen, searchQuery]);

  /* =====================================================
     SEARCH RESULT CLICK
  ===================================================== */

  const handleSearchResultClick = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setSearchOpen(false);
    setSearchQuery("");
    setOpen(false);

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  /* =====================================================
     OPEN SEARCH
  ===================================================== */

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setOpen(false);
  };

  /* =====================================================
     CLOSE SEARCH
  ===================================================== */

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const serviceSubmenuPortal =
    mounted && activeService
      ? createPortal(
          (() => {
            const category = serviceCategories.find(
              (item) => item.title === activeService
            );

            if (!category) return null;

            return (
              <div
                ref={serviceSubmenuRef}
                className="
                  fixed
                  z-[9999999999]
                  overflow-y-auto
                  rounded-[18px]
                  border
                  border-[#D8CCDF]
                  bg-white
                  shadow-[0_20px_50px_rgba(52,28,65,0.18)]
                "
                style={{
                  left: serviceSubmenuStyle.left,
                  top: serviceSubmenuStyle.top,
                  width: serviceSubmenuStyle.width,
                  maxHeight: serviceSubmenuStyle.maxHeight,
                  padding: "16px",
                  boxSizing: "border-box",
                }}
                onMouseEnter={cancelServiceClose}
                onMouseLeave={scheduleServiceClose}
              >
                <div
                  className="
                    rounded-[12px]
                    border
                    border-[#EEE7F2]
                    bg-[#FBF9FD]
                  "
                  style={{
                    padding: "10px 12px",
                    marginBottom: "12px",
                  }}
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#642E60]
                    "
                  >
                    Services
                  </p>

                  <h4
                    className="
                      mt-1
                      text-[16px]
                      font-semibold
                      leading-tight
                      text-[#3D3040]
                    "
                  >
                    {category.title}
                  </h4>
                </div>

                <div
                  className={
                    category.items.length > 8
                      ? "grid grid-cols-2 gap-2"
                      : "space-y-2"
                  }
                >
                  {category.items.map((service) => (
                    <Link
                      key={service}
                      href="#services"
                      onClick={(e) =>
                        handleNavigation(e, "#services")
                      }
                      className="
                        group/sub
                        flex
                        rounded-[11px]
                        border
                        border-transparent
                        bg-[#F8F5FA]
                        text-[11px]
                        font-medium
                        leading-4
                        text-[#514557]
                        transition-all
                        duration-200
                        hover:border-[#DED2E6]
                        hover:bg-[#F1E8F7]
                        hover:text-[#5B2E91]
                      "
                      style={{
                        padding: "9px 11px 9px 10px",
                        marginBottom: "8px",
                        alignItems: "center",
                        gap: "5px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#8E6AA1]
                          transition-all
                          duration-200
                          group-hover/sub:bg-[#642E60]
                        "
                      />

                      <span>{service}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })(),
          document.body
        )
      : null;

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
              >
                <Image
                  src="/assets/logos/logo-new.png"
                  alt="K.B.F.M. Group of Companies Professional Services Ltd."
                  width={140}
                  height={50}
                  priority
                  className="
                    h-auto
                    w-[140px]
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
      className="group relative"
      onMouseEnter={() => {
        // About is completely independent from the Services dropdown.
        cancelServiceClose();
        setActiveService(null);
        setServicesOpen(false);
      }}
    >
      {/* =================================================
          ABOUT BUTTON
      ================================================= */}

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
            bottom-[2px]
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-white
            transition-all
            duration-300
            group-hover:w-8
          "
        />
      </button>

      {/* =================================================
          ABOUT DROPDOWN
      ================================================= */}

      <div
        className="
          invisible
          absolute
          left-1/2
          top-[calc(100%-1px)]
          z-[99999]

          w-[300px]

          -translate-x-1/2
          translate-y-3

          rounded-[10px]

          border
          border-[#D8CCDF]

          bg-white/98

          opacity-0

          shadow-[0_25px_65px_rgba(52,28,65,0.20)]

          backdrop-blur-2xl

          transition-all
          duration-300

          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
        style={{
          padding: "12px",
          marginTop: "10px",
        }}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            border-b
            border-[#EAE2EF]

            bg-gradient-to-r
            from-[#FBF8FD]
            via-white
            to-[#F8F3FB]
          "
          style={{
            padding: "14px 14px 13px 14px",
          }}
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#642E60]
            "
          >
            About Us
          </p>

          <h3
            className="
              mt-1
              text-[17px]
              font-semibold
              tracking-[-0.2px]
              text-[#382C3B]
            "
          >
            Discover Our Company
          </h3>

          <p
            className="
              mt-1
              text-[10px]
              leading-5
              text-[#786D7D]
            "
          >
            Learn more about who we are and what
            makes us different.
          </p>
        </div>

        {/* =================================================
            ITEMS
        ================================================= */}

        <div
          className="
            bg-gradient-to-b
            from-[#FBF8FD]
            via-white
            to-[#F5EFF8]
          "
          style={{
            padding: "12px",
          }}
        >
          {/* =================================================
              ABOUT US
          ================================================= */}

          <Link
            href="#about"
            onClick={(e) =>
              handleNavigation(e, "#about")
            }
            className="
              group/item
              flex
              items-center
              justify-between

              rounded-[11px]

              border
              border-transparent

              bg-[#F8F5FA]

              text-[13px]
              font-medium

              text-[#514557]

              transition-all
              duration-200

              hover:border-[#DED2E6]
              hover:bg-[#F1E8F7]
              hover:text-[#5B2E91]
            "
            style={{
              padding: "10px 11px",
              marginBottom: "6px",
            }}
          >
            <span
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <HiInformationCircle
                className="
                  shrink-0
                  text-[16px]
                  text-[#642E60]
                  transition-colors
                  duration-200
                  group-hover/item:text-[#5B2E91]
                "
              />

              <span>
                About Us
              </span>
            </span>

            <HiArrowUpRight
              className="
                shrink-0
                text-[13px]
                text-[#998B9F]
                opacity-0
                transition-all
                duration-200
                group-hover/item:translate-x-0.5
                group-hover/item:-translate-y-0.5
                group-hover/item:text-[#5B2E91]
                group-hover/item:opacity-100
              "
            />
          </Link>

          {/* =================================================
              MISSION VISION VALUES
          ================================================= */}

          <Link
            href="#mission-vision"
            onClick={(e) =>
              handleNavigation(
                e,
                "#mission-vision"
              )
            }
            className="
              group/item
              flex
              items-center
              justify-between

              rounded-[11px]

              border
              border-transparent

              bg-[#F8F5FA]

              text-[13px]
              font-medium

              text-[#514557]

              transition-all
              duration-200

              hover:border-[#DED2E6]
              hover:bg-[#F1E8F7]
              hover:text-[#5B2E91]
            "
            style={{
              padding: "10px 11px",
              marginBottom: "6px",
            }}
          >
            <span
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <HiFlag
                className="
                  shrink-0
                  text-[16px]
                  text-[#642E60]
                  transition-colors
                  duration-200
                  group-hover/item:text-[#5B2E91]
                "
              />

              <span>
                Mission, Vision & Values
              </span>
            </span>

            <HiArrowUpRight
              className="
                shrink-0
                text-[13px]
                text-[#998B9F]
                opacity-0
                transition-all
                duration-200
                group-hover/item:translate-x-0.5
                group-hover/item:-translate-y-0.5
                group-hover/item:text-[#5B2E91]
                group-hover/item:opacity-100
              "
            />
          </Link>

          {/* =================================================
              WHY CHOOSE US
          ================================================= */}

          <Link
            href="#why-choose-us"
            onClick={(e) =>
              handleNavigation(
                e,
                "#why-choose-us"
              )
            }
            className="
              group/item
              flex
              items-center
              justify-between

              rounded-[11px]

              border
              border-transparent

              bg-[#F8F5FA]

              text-[13px]
              font-medium

              text-[#514557]

              transition-all
              duration-200

              hover:border-[#DED2E6]
              hover:bg-[#F1E8F7]
              hover:text-[#5B2E91]
            "
            style={{
              padding: "10px 11px",
            }}
          >
            <span
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <HiShieldCheck
                className="
                  shrink-0
                  text-[16px]
                  text-[#642E60]
                  transition-colors
                  duration-200
                  group-hover/item:text-[#5B2E91]
                "
              />

              <span>
                Why Choose Us
              </span>
            </span>

            <HiArrowUpRight
              className="
                shrink-0
                text-[13px]
                text-[#998B9F]
                opacity-0
                transition-all
                duration-200
                group-hover/item:translate-x-0.5
                group-hover/item:-translate-y-0.5
                group-hover/item:text-[#5B2E91]
                group-hover/item:opacity-100
              "
            />
          </Link>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            border-t
            border-[#EAE3EE]
            bg-[#FBF9FD]
            rounded-b-[10px]
          "
          style={{
            padding: "10px 12px",
          }}
        >
          <Link
            href="#about"
            onClick={(e) =>
              handleNavigation(
                e,
                "#about"
              )
            }
            className="
              flex
              items-center
              justify-center
              gap-1.5

              rounded-full

              bg-[#642E60]

              text-[10px]
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#5B2E91]
            "
            style={{
              padding: "8px 12px",
              color: "#fff",
            }}
          >
            Explore About Us

            <HiArrowUpRight
              className="text-[12px]"
            />
          </Link>
        </div>
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
      className="group relative"
      onMouseEnter={(event) => openServiceSubmenu(event, item)}
      onMouseLeave={scheduleServiceClose}
    >
      {/* =================================================
          SERVICES BUTTON
      ================================================= */}

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
            bottom-[2px]
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-[10px]
            bg-white
            transition-all
            duration-300
            group-hover:w-8
          "
        />
      </button>

      {/* =================================================
          SERVICES MAIN DROPDOWN
      ================================================= */}

      <div
        className={`
          absolute
          left-1/2
          top-[calc(100%-1px)]
          z-[99999]
          mt-4
          w-[min(390px,calc(100vw-24px))]
          max-h-[calc(100vh-110px)]
          overflow-y-auto
          -translate-x-1/2
          rounded-[20px]
          border
          border-[#D8CCDF]
          bg-white/98
          shadow-[0_25px_65px_rgba(52,28,65,0.20)]
          backdrop-blur-2xl
          transition-all
          duration-300
          ${
            servicesOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-3 opacity-0 pointer-events-none"
          }
        `}
        onMouseEnter={cancelServiceClose}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            border-b
            border-[#EAE2EF]
 rounded-[20px]
            bg-gradient-to-r
            from-[#FBF8FD]
            via-white
            to-[#F8F3FB]
          "
          style={{
            padding: "18px 20px 16px 20px",
          }}
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#642E60]
            "
          >
            Our Services
          </p>

          <h3
            className="
              mt-1
              text-[19px]
              font-semibold
              tracking-[-0.3px]
              text-[#382C3B]
            "
          >
            Explore Our Core Services
          </h3>

          <p
            className="
              mt-1.5
              text-[11px]
              leading-5
              text-[#786D7D]
            "
          >
            Hover over a service category to explore
            the services available.
          </p>
        </div>

        {/* =================================================
            MAIN 5 SERVICES
        ================================================= */}

        <div
          className="
            w-full
            bg-gradient-to-b
            from-[#FBF8FD]
            via-white
            to-[#F5EFF8]
          "
          style={{
            padding: "18px 18px 20px 18px",
          }}
        >
          <div className="space-y-2">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="
                  group/service
                  relative
                "
                style={{ marginBottom: "10px" }}
                onMouseEnter={(event) =>
                  openServiceSubmenu(event, category)
                }
                onMouseLeave={scheduleServiceClose}
              >
                {/* =================================================
                    MAIN SERVICE ITEM
                ================================================= */}

                <Link
                  href="#services"
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      "#services"
                    )
                  }
                  className="
                    relative

                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-[15px]

                    border
                    border-[#E2D7E8]

                    bg-white

                    text-left

                    shadow-[0_5px_18px_rgba(91,46,145,0.045)]

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-[#CFC0D9]
                    hover:bg-[#FCFAFD]
                    hover:shadow-[0_10px_24px_rgba(91,46,145,0.10)]
                  "
                  style={{
                    padding:
                      "12px 14px 12px 16px",
                  }}
                >
                  {/* ACTIVE LEFT INDICATOR */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-1/2

                      h-0
                      w-[3px]

                      -translate-y-1/2

                      rounded-full

                      bg-gradient-to-b
                      from-[#642E60]
                      to-[#5B2E91]

                      transition-all
                      duration-200

                      group-hover/service:h-8
                    "
                  />

                  {/* LEFT CONTENT */}

                  <span
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    {/* ICON */}

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-[13px]

                        bg-[#642E60]/[0.07]

                        text-[16px]
                        text-[#642E60]

                        shadow-[0_5px_15px_rgba(91,46,145,0.06)]

                        transition-all
                        duration-200

                        group-hover/service:bg-[#642E60]
                        group-hover/service:text-white
                      "
                    >
                      {category.icon}
                    </span>

                    {/* TITLE */}

                    <span
                      className="
                        min-w-0

                        text-[13px]
                        font-semibold
                        leading-5

                        text-[#453747]

                        transition-colors
                        duration-200

                        group-hover/service:text-[#5B2E91]
                      "
                    >
                      {category.title}
                    </span>
                  </span>

                  {/* RIGHT ARROW */}

                  <HiArrowUpRight
                    className="
                      ml-3
                      shrink-0

                      text-[15px]
                      text-[#998B9F]

                      transition-all
                      duration-200

                      group-hover/service:translate-x-0.5
                      group-hover/service:-translate-y-0.5
                      group-hover/service:text-[#5B2E91]
                    "
                  />
                </Link>

              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between

            border-t
            border-[#EAE3EE]

            rounded-b-[20px]

            bg-[#FBF9FD]
          "
          style={{
            padding: "12px 18px 12px 20px",
          }}
        >
          <span
            className="
              text-[10px]
              font-medium
              text-[#7B7180]
            "
          >
            Explore our complete service capabilities
          </span>

          <Link
            href="#services"
            onClick={(e) =>
              handleNavigation(
                e,
                "#services"
              )
            }
            className="
              inline-flex
              items-center
              gap-1.5

              rounded-full

              bg-[#642E60]

              text-[10px]
              font-semibold
              text-white

              shadow-[0_7px_18px_rgba(100,46,96,0.18)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#5B2E91]
            "
            style={{
              padding: "8px 13px",color: "#fff"
            }}
          >
            View All Services

            <HiArrowUpRight className="text-[12px]" />
          </Link>
        </div>
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
                        Careers
                      </span>

                      {/* UNDERLINE */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          bottom-[2px]
                          left-1/2

                          h-[2px]
                          w-0

                          -translate-x-1/2

                          rounded-full

                          bg-white

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
                        bottom-[2px]
                        left-1/2
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-white
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
                SEARCH + BOOK NOW
            ===================================================== */}

            <div
              className="
                relative
                z-10
                hidden
                lg:flex
                items-center
                justify-end
                gap-3
              "
            >
              {/* SEARCH BUTTON */}

              <button
                type="button"
                onClick={handleSearchOpen}
                aria-label="Search website"
                title="Search website"
                className="
                  group
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#642E60]/20
                  bg-white/70
                  text-[#642E60]
                  shadow-[0_8px_22px_rgba(91,46,145,0.10)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#5B2E91]/35
                  hover:bg-[#F8F2FB]
                  hover:text-[#5B2E91]
                  hover:shadow-[0_12px_30px_rgba(91,46,145,0.16)]
                "
              >
                <HiMagnifyingGlass
                  className="
                    text-[19px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </button>

              {/* BOOK NOW */}

              <Button
                href="#booking"
                onClick={(e) =>
                  handleNavigation(
                    e,
                    "#booking"
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
                MOBILE ACTIONS
            ===================================================== */}

            <div
              className="
                relative
                z-10

                flex
                items-center
                gap-2

                lg:hidden
              "
            >
              {/* MOBILE SEARCH BUTTON */}

              <button
                type="button"
                onClick={handleSearchOpen}
                aria-label="Search website"
                title="Search website"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#D4AF37]/60

                  bg-white/85

                  text-[#5B2E91]

                  shadow-[0_8px_25px_rgba(91,46,145,0.18)]

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:-translate-y-0.5
                "
              >
                <HiMagnifyingGlass className="text-[20px]" />
              </button>

              {/* MOBILE MENU BUTTON */}

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
        </div>
      </header>

      {serviceSubmenuPortal}

      {/* =====================================================
          WEBSITE SEARCH OVERLAY
      ===================================================== */}
{/* =====================================================
    WEBSITE SEARCH OVERLAY
===================================================== */}

<AnimatePresence>
  {searchOpen && (
    <motion.div
      className="
        fixed
        inset-0
        z-[1000000000]

        flex
        items-start
        justify-center

        bg-[#241B27]/35

        px-4
        pt-24

        backdrop-blur-[12px]

        sm:pt-28
      "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleSearchClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -15,
          scale: 0.98,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          w-full
          max-w-[760px]

          overflow-hidden

          rounded-[28px]

          border
          border-[#D7C9E0]

          bg-white/95

          shadow-[0_25px_80px_rgba(62,32,102,0.22)]

          backdrop-blur-xl
        "
      >
        {/* =================================================
            SEARCH HEADER
        ================================================= */}

        <div
          className="
            border-b
            border-[#ECE5F0]
            bg-gradient-to-r
            from-[#FBF8FD]
            via-white
            to-[#F7F1FA]
          "
          style={{
            padding: "18px",
          }}
        >
          <div
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-[#D8CADE]

              bg-white

              shadow-[0_8px_25px_rgba(91,46,145,0.06)]
            "
            style={{
              padding: "4px 8px 4px 15px",
            }}
          >
            {/* SEARCH ICON */}

            <HiMagnifyingGlass
              className="
                shrink-0
                text-[21px]
                text-[#642E60]
              "
            />

            {/* SEARCH INPUT */}

            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search anything on this website..."
              className="
                min-w-0
                flex-1
                bg-transparent
                py-3
                text-[15px]
                text-[#3F3040]
                outline-none
                placeholder:text-[#9A909D]
                sm:text-[16px]
              "
            />

            {/* SINGLE CUSTOM CLOSE BUTTON */}

            <button
              type="button"
              onClick={handleSearchClose}
              aria-label="Close search"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#F4EDF8]

                text-[#642E60]

                transition-all
                duration-200

                hover:bg-[#ECE0F3]
                hover:text-[#5B2E91]
              "
            >
              <HiXMark className="text-[18px]" />
            </button>

            {/* ESC BUTTON */}

            <button
              type="button"
              onClick={handleSearchClose}
              aria-label="Close search"
              className="
                flex
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#F4EDF8]

                text-[11px]
                font-bold
                tracking-wide
                text-[#642E60]

                transition-all
                duration-200

                hover:bg-[#ECE0F3]
                hover:text-[#5B2E91]
              "
              style={{
                padding: "8px 12px",
                minWidth: "46px",
                minHeight: "34px",
              }}
            >
              ESC
            </button>
          </div>
        </div>

        {/* =================================================
            SEARCH RESULTS
        ================================================= */}

        <div
          className="
            max-h-[60vh]
            overflow-y-auto
          "
          style={{
            padding: "14px",
          }}
        >
          {/* =================================================
              EMPTY SEARCH STATE
          ================================================= */}

          {!searchQuery.trim() ? (
            <div
              className="
                flex
                min-h-[270px]
                flex-col
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#FBF8FD]
                via-white
                to-[#F5EDF9]

                text-center
              "
              style={{
                padding: "35px 24px",
              }}
            >
              <div
                className="
                  mb-5

                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-[#642E60]/[0.08]

                  text-[#642E60]

                  shadow-[0_10px_25px_rgba(91,46,145,0.08)]
                "
              >
                <HiMagnifyingGlass className="text-[28px]" />
              </div>

              <h3
                className="
                  text-[20px]
                  font-semibold
                  leading-tight
                  text-[#402E40]
                "
              >
                Search the website
              </h3>

              <p
                className="
                  mt-3
                  max-w-[560px]

                  text-center

                  text-[13px]
                  leading-6

                  text-[#746B78]

                  sm:text-[14px]
                "
              >
                Search services, company information,
                contact details, support information,
                and other content across the website.
              </p>
            </div>
          ) : searchResults.length > 0 ? (
            /* =================================================
               SEARCH RESULTS FOUND
            ================================================= */

            <div className="space-y-2">
              <p
                className="
                  px-2
                  pb-1

                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-[#7B6D80]
                "
              >
                Search Results
              </p>

              {searchResults.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() =>
                    handleSearchResultClick(result.id)
                  }
                  className="
                    group

                    flex
                    w-full
                    items-start
                    gap-3

                    rounded-2xl

                    border
                    border-transparent

                    bg-[#FAF7FC]

                    text-left

                    transition-all
                    duration-200

                    hover:border-[#D9CBE1]
                    hover:bg-[#F4ECF8]
                  "
                  style={{
                    padding: "13px 14px",
                  }}
                >
                  <span
                    className="
                      mt-0.5

                      flex
                      h-9
                      w-9
                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      bg-[#642E60]/[0.08]

                      text-[#642E60]

                      transition-all

                      group-hover:bg-[#642E60]
                      group-hover:text-white
                    "
                  >
                    <HiArrowTopRightOnSquare className="text-[15px]" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className="
                        block
                        text-[14px]
                        font-semibold
                        text-[#422F42]
                      "
                    >
                      {result.heading}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[12px]
                        leading-5
                        text-[#756C79]
                      "
                    >
                      {result.preview}
                    </span>
                  </span>

                  <HiArrowUpRight
                    className="
                      mt-1
                      shrink-0
                      text-[16px]
                      text-[#8A7890]

                      transition-transform
                      duration-200

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </button>
              ))}
            </div>
          ) : (
            /* =================================================
               NO RESULTS
            ================================================= */

            <div
              className="
                rounded-2xl

                border
                border-dashed
                border-[#D8CCDF]

                text-center
              "
              style={{
                padding: "34px 20px",
              }}
            >
              <div
                className="
                  mx-auto
                  mb-3

                  flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-full

                  bg-[#F4EDF8]

                  text-[#642E60]
                "
              >
                <HiMagnifyingGlass className="text-[21px]" />
              </div>

              <h3
                className="
                  text-[17px]
                  font-semibold
                  text-[#433344]
                "
              >
                No matching results
              </h3>

              <p
                className="
                  mt-1
                  text-[12px]
                  text-[#7D7380]
                "
              >
                Try another keyword such as security,
                cleaning, caregiving, services, contact,
                or careers.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onCareerClick={handleCareerOpen}
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