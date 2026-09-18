
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiArrowUpRight,
  HiPhone,
  HiSparkles,
  HiHome,
  HiInformationCircle,
  HiSquares2X2,
  HiEnvelope,
  HiUserGroup,
} from "react-icons/hi2";

import navigation from "@/data/navigation";

export default function MobileMenu({
  open,
  onClose,
  onCareerClick,
}) {
  /* =========================================================
     NAVIGATION HANDLER
  ========================================================= */

  const handleNavigation = (e, href) => {
    e.preventDefault();

    // Close menu immediately
    onClose();

    if (!href) return;

    // Wait one frame so the menu starts closing before scrolling
    requestAnimationFrame(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  /* =========================================================
     MENU ICON
  ========================================================= */

  const getMenuIcon = (title) => {
    switch (title?.trim().toLowerCase()) {
      case "home":
        return HiHome;

      case "about":
        return HiInformationCircle;

      case "services":
        return HiSquares2X2;

      case "contact":
        return HiEnvelope;

      case "join us":
        return HiUserGroup;

      default:
        return HiSparkles;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999999]
            lg:hidden
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.12,
            ease: "linear",
          }}
        >
          {/* =====================================================
              SIMPLE BACKDROP

              IMPORTANT:
              No backdrop-blur here.
              backdrop-filter can be expensive on mobile.
          ===================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-[#241B27]/40
            "
            onClick={onClose}
            aria-hidden="true"
          />

          {/* =====================================================
              MOBILE PANEL
          ===================================================== */}

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              right-0
              top-0
              h-full
              w-full
              max-w-[430px]
              overflow-y-auto
              overscroll-contain
              bg-gradient-to-br
              from-white
              via-[#FBF8FD]
              to-[#F0E7F6]
              shadow-[-15px_0_40px_rgba(52,27,58,0.14)]
              will-change-transform
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                px-5
                pb-8
                pt-[105px]
              "
            >
              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <nav aria-label="Mobile navigation" style={{marginTop:"130px"}}>
                <ul className="space-y-3">
                  {navigation.map((item) => {
                    const MenuIcon = getMenuIcon(item.title);

                    const isJoinUs =
                      item.title?.trim().toLowerCase() === "join us";

                    /* =================================================
                       JOIN US
                    ================================================= */

                    if (isJoinUs) {
                      return (
                        <li key={item.title}>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();

                              if (
                                typeof onCareerClick === "function"
                              ) {
                                onCareerClick();
                              }

                              onClose();
                            }}
                            className="
                              group
                              relative
                              flex
                              w-full
                              items-center
                              justify-between
                              overflow-hidden
                              rounded-[20px]
                              border
                              border-[#642E60]/10
                              bg-white
                              text-left
                              text-[#483948]
                              shadow-[0_6px_20px_rgba(91,46,145,0.05)]
                              active:scale-[0.99]
                            "
                            style={{
                              padding: "14px 16px",
                              WebkitTapHighlightColor:
                                "transparent",
                            }}
                          >
                            {/* Left accent */}

                            <span
                              className="
                                absolute
                                left-0
                                top-1/2
                                h-7
                                w-[3px]
                                -translate-y-1/2
                                rounded-full
                                bg-gradient-to-b
                                from-[#642E60]
                                to-[#5B2E91]
                              "
                              aria-hidden="true"
                            />

                            {/* Left content */}

                            <span
                              className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                              "
                            >
                              <span
                                className="
                                  flex
                                  h-9
                                  w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-[#642E60]/[0.07]
                                  text-[#642E60]
                                "
                              >
                                <MenuIcon
                                  className="text-[17px]"
                                  aria-hidden="true"
                                />
                              </span>

                              <span
                                className="
                                  truncate
                                  text-[16px]
                                  font-semibold
                                  text-[#483948]
                                "
                              >
                                {item.title}
                              </span>
                            </span>

                            {/* Right arrow */}

                            <span
                              className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#F4EDF8]
                                text-[#6B4D73]
                              "
                            >
                              <HiArrowUpRight
                                size={15}
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </li>
                      );
                    }

                    /* =================================================
                       NORMAL NAVIGATION ITEM
                    ================================================= */

                    return (
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
                            relative
                            flex
                            w-full
                            items-center
                            justify-between
                            overflow-hidden
                            rounded-[20px]
                            border
                            border-[#642E60]/10
                            bg-white
                            text-[#483948]
                            shadow-[0_6px_20px_rgba(91,46,145,0.05)]
                            active:scale-[0.99]
                          "
                          style={{
                            padding: "14px 16px",
                            marginBottom: "5px",
                            WebkitTapHighlightColor:
                              "transparent",
                          }}
                        >
                          {/* Left accent */}

                          <span
                            className="
                              absolute
                              left-0
                              top-1/2
                              h-7
                              w-[3px]
                              -translate-y-1/2
                              rounded-full
                              bg-gradient-to-b
                              from-[#642E60]
                              to-[#5B2E91]
                            "
                            aria-hidden="true"
                          />

                          {/* Left content */}

                          <span
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-3
                            "
                          >
                            <span
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#642E60]/[0.07]
                                text-[#642E60]
                              "
                            >
                              <MenuIcon
                                className="text-[17px]"
                                aria-hidden="true"
                              />
                            </span>

                            <span
                              className="
                                truncate
                                text-[16px]
                                font-semibold
                                text-[#483948]
                              "
                            >
                              {item.title}
                            </span>
                          </span>

                          {/* Right arrow */}

                          <span
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#F4EDF8]
                              text-[#6B4D73]
                            "
                          >
                            <HiArrowUpRight
                              size={15}
                              aria-hidden="true"
                            />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* =================================================
                  CONTACT CTA
              ================================================= */}

              <div className="mt-7">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#642E60]/10
                    bg-gradient-to-br
                    from-white
                    via-[#F8F2FB]
                    to-[#EEE3F5]
                    shadow-[0_12px_35px_rgba(91,46,145,0.08)]
                  "
                  style={{
                    padding: "20px",
                  }}
                >
                  {/* Gold accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[3px]
                      bg-gradient-to-b
                      from-[#C6A15B]
                      via-[#642E60]
                      to-[#5B2E91]
                    "
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Label */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#C6A15B]
                        "
                        aria-hidden="true"
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#642E60]
                        "
                      >
                        Get in Touch
                      </span>
                    </div>

                    {/* Heading */}

                    <h3
                      className="
                        mt-3
                        text-[22px]
                        font-semibold
                        leading-tight
                        tracking-[-0.4px]
                        text-[#3F3040]
                      "
                    >
                      Need our support?
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-2
                        mb-4
                        text-[13px]
                        leading-6
                        text-[#756D77]
                      "
                    >
                      Connect with our team for professional
                      services and assistance.
                    </p>

                    {/* Phone CTA */}

                    <Link
                      href="tel:+18674471500"
                      onClick={onClose}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#642E60]
                        via-[#5B2E91]
                        to-[#6B427A]
                        text-white
                        shadow-[0_10px_25px_rgba(91,46,145,0.14)]
                      "
                      style={{
                        padding: "11px 14px",
                        WebkitTapHighlightColor:
                          "transparent",
                      }}
                    >
                      {/* Phone icon */}

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/10
                          text-[#EADDAF]
                        "
                      >
                        <HiPhone
                          size={17}
                          aria-hidden="true"
                        />
                      </span>

                      {/* Text */}

                      <span className="min-w-0 flex-1">
                        <span
                          className="
                            block
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-white/60
                          "
                        >
                          Call us
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            truncate
                            text-[14px]
                            font-semibold
                            text-white
                          "
                        >
                          +1 (867) 447-1500
                        </span>
                      </span>

                      {/* Arrow */}

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                        "
                      >
                        <HiArrowUpRight
                          size={15}
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM DECORATIVE LINE
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
                aria-hidden="true"
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#642E60]/15
                  "
                />

                <span
                  className="
                    h-px
                    w-8
                    bg-[#642E60]/15
                  "
                />
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

