"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiArrowUpRight,
  HiPhone,
  HiSparkles,
  HiOutlineHeart,
  HiOutlineShieldCheck,
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
  const handleNavigation = (e, href) => {
    e.preventDefault();

    onClose();

    if (!href) return;

    setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  };

  /* =========================================================
     MENU ICONS
  ========================================================= */

  const getMenuIcon = (title) => {
    switch (title) {
      case "Home":
        return HiHome;

      case "About":
        return HiInformationCircle;

      case "Services":
        return HiSquares2X2;

      case "Contact":
        return HiEnvelope;

      case "Join Us":
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
          transition={{ duration: 0.25 }}
        >
          {/* =====================================================
              SOFT BACKDROP
          ===================================================== */}

          <motion.div
            className="
              absolute
              inset-0
              bg-[#241B27]/35
              backdrop-blur-[10px]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* =====================================================
              FLOATING BACKGROUND GLOWS
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-20
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#642E60]/[0.10]
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              top-[35%]
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#5B2E91]/[0.10]
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[20%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#C6A15B]/[0.06]
              blur-[100px]
            "
          />

          {/* =====================================================
              MOBILE PANEL
          ===================================================== */}

          <motion.div
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
              duration: 0.45,
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
              bg-gradient-to-br
              from-white
              via-[#FBF8FD]
              to-[#F0E7F6]
              shadow-[-20px_0_70px_rgba(52,27,58,0.15)]
            "
          >
            {/* =================================================
                PANEL WATERMARKS
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                top-[20%]
                text-[#642E60]/[0.025]
              "
            >
              <HiSparkles
                style={{
                  width: "220px",
                  height: "220px",
                }}
              />
            </div>

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                bottom-[12%]
                text-[#5B2E91]/[0.025]
              "
            >
              <HiOutlineShieldCheck
                style={{
                  width: "260px",
                  height: "260px",
                }}
              />
            </div>

            <div
              className="
                pointer-events-none
                absolute
                left-[38%]
                top-[50%]
                text-[#642E60]/[0.018]
              "
            >
              <HiOutlineHeart
                style={{
                  width: "190px",
                  height: "190px",
                }}
              />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                px-5
                pb-8
              "
              style={{
                marginTop: "130px",
                padding: "20px",
              }}
            >
              {/* =================================================
                  NAVIGATION ITEMS
              ================================================= */}

              <nav>
                <ul className="space-y-3">
                  {navigation.map((item, index) => {
                    const MenuIcon = getMenuIcon(item.title);

                    return (
                      <motion.li
                        key={item.title}
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.14 + index * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {/* =================================================
                            JOIN US
                        ================================================= */}

                        {item.title?.trim().toLowerCase() === "join us" ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();

                              /*
                               * IMPORTANT:
                               * Open the career modal before closing
                               * the mobile menu.
                               */
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
                              bg-white/85
                              text-left
                              text-[#483948]
                              shadow-[0_8px_25px_rgba(91,46,145,0.05)]
                              backdrop-blur-md
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:border-[#642E60]/20
                              hover:bg-white
                              hover:shadow-[0_14px_30px_rgba(91,46,145,0.10)]
                            "
                            style={{
                              padding: "14px 16px",
                            }}
                          >
                            {/* Purple left indicator */}

                            <span
                              className="
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
                                duration-300
                                group-hover:h-7
                              "
                            />

                            {/* Left content */}

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
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-[#642E60]/[0.07]
                                  text-[#642E60]
                                  transition-all
                                  duration-300
                                  group-hover:bg-[#642E60]
                                  group-hover:text-white
                                "
                              >
                                <MenuIcon className="text-[17px]" />
                              </span>

                              <span
                                className="
                                  text-[16px]
                                  font-semibold
                                  text-[#483948]
                                  transition-colors
                                  duration-300
                                  group-hover:text-[#642E60]
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
                                transition-all
                                duration-300
                                group-hover:bg-[#EDE2F3]
                                group-hover:text-[#5B2E91]
                              "
                            >
                              <HiArrowUpRight
                                size={15}
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-0.5
                                  group-hover:-translate-y-0.5
                                "
                              />
                            </span>
                          </button>
                        ) : (
                          /* =================================================
                             NORMAL NAV ITEM
                          ================================================= */

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
                              items-center
                              justify-between
                              overflow-hidden
                              rounded-[20px]
                              border
                              border-[#642E60]/10
                              bg-white/85
                              text-[#483948]
                              shadow-[0_8px_25px_rgba(91,46,145,0.05)]
                              backdrop-blur-md
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:border-[#642E60]/20
                              hover:bg-white
                              hover:shadow-[0_14px_30px_rgba(91,46,145,0.10)]
                            "
                            style={{
                              padding: "14px 16px",
                              marginBottom: "5px",
                            }}
                          >
                            {/* Purple left indicator */}

                            <span
                              className="
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
                                duration-300
                                group-hover:h-7
                              "
                            />

                            {/* Left content */}

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
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-[#642E60]/[0.07]
                                  text-[#642E60]
                                  transition-all
                                  duration-300
                                  group-hover:bg-[#642E60]
                                  group-hover:text-white
                                "
                              >
                                <MenuIcon className="text-[17px]" />
                              </span>

                              <span
                                className="
                                  text-[16px]
                                  font-semibold
                                  text-[#483948]
                                  transition-colors
                                  duration-300
                                  group-hover:text-[#642E60]
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
                                transition-all
                                duration-300
                                group-hover:bg-[#EDE2F3]
                                group-hover:text-[#5B2E91]
                              "
                            >
                              <HiArrowUpRight
                                size={15}
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-0.5
                                  group-hover:-translate-y-0.5
                                "
                              />
                            </span>
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* =================================================
                  CONTACT CTA
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="mt-8"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[#642E60]/10
                    bg-gradient-to-br
                    from-white
                    via-[#F8F2FB]
                    to-[#EEE3F5]
                    shadow-[0_18px_45px_rgba(91,46,145,0.09)]
                  "
                  style={{
                    padding: "20px",
                    marginTop: "18px",
                  }}
                >
                  {/* Decorative watermark */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      text-[#5B2E91]/[0.045]
                    "
                  >
                    <HiOutlineHeart
                      style={{
                        width: "125px",
                        height: "125px",
                      }}
                    />
                  </div>

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
                  />

                  <div className="relative z-10">
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

                    <p
                      className="
                        mt-2
                        text-[13px]
                        leading-6
                        text-[#756D77]
                      "
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      Connect with our team for professional
                      services and assistance.
                    </p>

                    {/* Phone CTA */}

                    <Link
                      href="tel:+18674471500"
                      onClick={onClose}
                      className="
                        group
                        mt-5
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#642E60]
                        via-[#5B2E91]
                        to-[#6B427A]
                        text-white
                        shadow-[0_12px_28px_rgba(91,46,145,0.16)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_16px_35px_rgba(91,46,145,0.22)]
                      "
                      style={{
                        padding: "11px 14px",
                      }}
                    >
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
                        <HiPhone size={17} />
                      </span>

                      <span className="flex-1">
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
                            text-[14px]
                            font-semibold
                            text-white
                          "
                        >
                          +1 (867) 447-1500
                        </span>
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      >
                        <HiArrowUpRight size={15} />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  BOTTOM BRAND LINE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                }}
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-center
                "
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}