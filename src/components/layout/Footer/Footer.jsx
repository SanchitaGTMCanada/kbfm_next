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

import {
 
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

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
        w-full
        overflow-hidden
        text-white
        flex
        justify-center
      "
      style={{
      
        background:
          "linear-gradient(135deg, #241326 0%, #3A1D44 34%, #5B2E91 72%, #45204D 100%)",
      }}
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* White glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[40px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.055]
          blur-[150px]
        "
      />

      {/* Primary plum glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          top-[32%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#642E60]/30
          blur-[150px]
        "
      />

      {/* Secondary purple glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[8%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#5B2E91]/35
          blur-[160px]
        "
      />

      {/* Secondary bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          bottom-[-180px]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#5B2E91]/28
          blur-[150px]
        "
      />

      {/* Subtle white centre glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[38%]
          top-[18%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-white/[0.035]
          blur-[120px]
        "
      />

      {/* Very subtle gold accent glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[30%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#C6A15B]/[0.025]
          blur-[110px]
        "
      />

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          top-[55px]
          h-[540px]
          w-[540px]
          rounded-full
          border
          border-white/[0.10]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[130px]
          top-[145px]
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#5B2E91]/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[80px]
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-white/[0.06]
        "
      />

      {/* =====================================================
          FLOATING DECORATIVE DOTS
      ===================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          left-[11%]
          top-[16%]
          h-2
          w-2
          rounded-full
          bg-white/30
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#5B2E91]/70
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[28%]
          h-2
          w-2
          rounded-full
          bg-white/20
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          right-[22%]
          bottom-[20%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#C6A15B]/50
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
          max-w-[1500px]
        "
        style={{
          margin: "40px 0px 40px 0px",
        }}
      >
        <div
          className="
            relative
            z-10
            w-full
            mx-auto
            px-6
            py-16
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
          style={{
            padding: "20px",
          }}
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
            style={{
              marginBottom: "10px",
            }}
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
                    rounded-full
                    bg-[#C6A15B]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#E3D7EF]
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
                style={{
                  color: "#FFFFFF",
                }}
              >
                K.B.F.M. Group of Companies Professional Services Ltd.
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
                style={{
                  margin: "20px 0px 20px 0px",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "15px",
                }}
              >
                Serving the North with care, security, and integrity.
                Reliable staffing and facility support services delivered
                throughout the Northwest Territories.
              </p>
            </div>

            {/* CTA */}
<Link
  href="#booking"
  onClick={(e) => handleNavigation(e, "#booking")}
  className="
    group
    inline-flex
    w-fit
    items-center
    gap-3
    rounded-full
    border
    border-[white]/40
    bg-gradient-to-r
    from-[#642E60]
    via-[#6F3C7F]
    to-[#5B2E91]
    px-5
    py-3
    text-[13px]
    font-semibold
    text-white
    shadow-[0_12px_30px_rgba(91,46,145,0.20)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:from-[#5B2E91]
    hover:via-[#70408A]
    hover:to-[#642E60]
    hover:shadow-[0_16px_38px_rgba(91,46,145,0.28)]
  "
  style={{
    marginBottom: "10px",
    paddingLeft: "14px",
  }}
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
      text-[#642E60]
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
                style={{
                  padding: "15px",
                  paddingLeft: "0px",
                }}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    text-[#D9C9E7]
                  "
                >
                  <HiOutlineSparkles className="text-[18px]" />
                </div>

                <h3
                  className="
                    text-[15px]
                    font-semibold
                    text-white
                  "
                  style={{
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  Navigation
                </h3>
              </div>

              <ul className="space-y-3.5">
                {footerNavigation.map((item) => (
                  <li key={item.title} style={{marginLeft:"30px"}}>
                    <Link
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        text-[13px]
                        text-white/55
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#C6A15B]
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
                style={{
                  padding: "15px",
                  paddingLeft: "0px",
                }}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    text-[#D9C9E7]
                  "
                >
                  <HiOutlineShieldCheck className="text-[18px]" />
                </div>

                <h3
                  className="
                    text-[15px]
                    font-semibold
                    text-white
                  "
                  style={{
                    color: "white",
                  }}
                >
                  Our Services
                </h3>
              </div>

              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.title} style={{marginLeft:"30px"}}>
                    <Link
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        text-[13px]
                        text-white/55
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#C6A15B]
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

            <div
              style={{
                margin: "20px 0px",
              }}
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#5B2E91]/30
                  bg-white/[0.10]
                  backdrop-blur-xl
                "
                style={{
                  padding: "25px",
                  boxShadow:
                    "0 25px 65px rgba(20,8,24,0.22)",
                }}
              >
                {/* Contact card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-[180px]
                    w-[180px]
                    rounded-full
                    bg-[#5B2E91]/20
                    blur-[65px]
                  "
                />

                {/* Heading */}

                <div className="flex flex-row items-center justify-between gap-4">
  {/* Contact Header */}
  <div
    className="
      relative
      z-10
      flex
      flex-row
      items-center
      gap-3
    "
    style={{
      marginBottom: "15px",
    }}
  >
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-[#642E60]
        text-white
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
          text-[#E3D7EF]
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
        style={{color:"white", letterSpacing:"2px"}}
      >
        Contact Us
      </h3>
    </div>
  </div>

<div className="flex flex-row items-center gap-3">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/kbfmgroup/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      group
      flex h-11 w-11
      items-center justify-center
      rounded-full
      border border-[#642E60]
      bg-[#642E60]
      text-white
      shadow-[0_8px_25px_rgba(100,46,96,0.35)]
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-110
      hover:bg-[#5B2E91]
      hover:shadow-[0_10px_30px_rgba(100,46,96,0.5)]
    "
  >
    <FaInstagram className="text-[18px]" />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61594533931368"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="
      group
      flex h-11 w-11
      items-center justify-center
      rounded-full
      border border-[#642E60]
      bg-[#642E60]
      text-white
      shadow-[0_8px_25px_rgba(100,46,96,0.35)]
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-110
      hover:bg-[#5B2E91]
      hover:shadow-[0_10px_30px_rgba(100,46,96,0.5)]
    "
  >
    <FaFacebookF className="text-[17px]" />
  </a>
</div>
</div>

                <div className="relative z-10">
                  {/* PHONE */}

                  <div
                    className="
                      mb-5
                      flex
                      items-start
                      gap-4
                    "
                    style={{
                      marginBottom: "10px",
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
                        border
                        border-white/10
                        bg-white/[0.08]
                        text-[#D9C9E7]
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
                        href="tel:8674471131"
                        className="
                          mt-1
                          block
                          text-[13px]
                          text-white/80
                          transition
                          hover:text-white
                        "
                      >
                        +1 867 447 1131
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div
                    className="
                      mb-5
                      flex
                      items-start
                      gap-4
                    "
                    style={{
                      marginBottom: "10px",
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
                        border
                        border-white/10
                        bg-white/[0.08]
                        text-[#D9C9E7]
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
                        href="mailto:info@kbfmgroup.ca"
                        className="
                          mt-1
                          block
                          break-all
                          text-[13px]
                          text-white/80
                          transition
                          hover:text-white
                        "
                      >
                        info@kbfmgroup.ca
                      </a>
                    </div>
                  </div>

                  {/* ADDRESS */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                    style={{
                      marginBottom: "10px",
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
                        border
                        border-white/10
                        bg-white/[0.08]
                        text-[#D9C9E7]
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
                          text-white/90
                        "
                        style={{
                          color: "white",
                        }}
                      >
                        K.B.F.M. Group of Companies Professional Services Ltd.
                        <br />
                        Unit 9, 5010 49th Street , Ground floor,center square Mall
                        <br />
                        Yellowknife, Northwest Territories
                        <br />
                        X1A 2N4
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>

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
                style={{
                  margin: "10px 0px",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                © {new Date().getFullYear()} K.B.F.M. Group of Companies
                Professional Services Ltd. All rights reserved.
              </p>

  
            </div>
          </div>

          {/* =================================================
              FINAL TAGLINE
          ================================================= */}

    
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
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
          from-[#241326]/80
          to-transparent
        "
      />
    </footer>
  );
}