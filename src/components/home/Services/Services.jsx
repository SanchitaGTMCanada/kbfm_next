"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  HiArchiveBox,
  HiArrowUpRight,
  HiHeart,
  HiShieldCheck,
  HiSparkles,
  HiStar,
  HiUsers,
  HiUserGroup,
  HiXMark,
} from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";

/* ============================================================
   SERVICE DATA
============================================================ */

const serviceItems = [
  {
    number: "01",
    title: "Private Security Services",
    description:
      "Professional security solutions designed to protect people, property, assets, and communities with trained and dependable professionals.",
    icon: HiShieldCheck,
    image: "/assets/services/service-1.jpeg",
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
    number: "02",
    title: "Cleaning & Janitorial Services",
    description:
      "Reliable cleaning and facility support solutions that create clean, healthy, safe, and welcoming spaces.",
    icon: HiSparkles,
    image: "/assets/services/service-3.jpeg",
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
    number: "03",
    title: "Private Healthcare Services",
    description:
      "Compassionate care and personal support that helps individuals maintain independence, dignity, comfort, and quality of life.",
    icon: HiHeart,
    image: "/assets/services/service-2.jpeg",
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
    number: "04",
    title: "Remote Camp Services",
    description:
      "Dependable remote camp support that keeps accommodation, dining, housekeeping, and daily operations running smoothly.",
    icon: HiArchiveBox,
    image: "/assets/services/service-4.jpeg",
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
    number: "05",
    title: "General Labour Services",
    description:
      "Flexible workforce solutions for businesses that need reliable people across construction, retail, warehouse, and operational environments.",
    icon: HiUserGroup,
    image: "/assets/services/warehouse.jpg",
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

/* ============================================================
   MAIN SERVICES COMPONENT
============================================================ */

export default function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [selectedService, setSelectedService] =
    useState(null);

  /* ==========================================================
     OPEN MODAL
  ========================================================== */

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  /* ==========================================================
     CLOSE MODAL
  ========================================================== */

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  /* ==========================================================
     BOOK NOW
  ========================================================== */

  const handleBookNow = () => {
    setSelectedService(null);

    setTimeout(() => {
      const bookingSection =
        document.getElementById("booking");

      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 120);
  };

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeServiceModal();
      }
    };

    if (selectedService) {
      document.body.style.overflow = "hidden";

      window.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedService]);

  /* ==========================================================
     VISIBLE CAROUSEL SERVICES
  ========================================================== */

  const getVisibleServices = () => {
    return Array.from(
      { length: 4 },
      (_, offset) =>
        serviceItems[
          (serviceIndex + offset) %
            serviceItems.length
        ]
    );
  };

  return (
    <>
      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        id="services"
        className="
          relative
          flex
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-white
          via-[#FBF8FC]
          to-[#EFE4F0]
          py-24
          sm:py-28
          lg:py-32
        "
      >
        {/* =================================================
            BACKGROUND GLOWS
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[220px]
            -top-[180px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#5B2E91]/12
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-white/80
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[200px]
            top-[25%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#5B2E91]/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[280px]
            left-[25%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#5B2E91]/12
            blur-[150px]
          "
        />

        {/* =================================================
            DOT GRID LEFT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-8
            top-28
            grid
            grid-cols-5
            gap-3
            opacity-25
            sm:left-14
          "
        >
          {Array.from({ length: 25 }).map(
            (_, index) => (
              <span
                key={index}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#5B2E91]
                "
              />
            )
          )}
        </div>

        {/* =================================================
            DOT GRID RIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-[34%]
            grid
            grid-cols-5
            gap-3
            opacity-15
          "
        >
          {Array.from({ length: 25 }).map(
            (_, index) => (
              <span
                key={index}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#5B2E91]
                "
              />
            )
          )}
        </div>

        {/* =================================================
            DECORATIVE CIRCLE LEFT
        ================================================= */}

        <motion.div
          animate={{
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-24
            top-[18%]
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[#5B2E91]/15
          "
        />

        {/* =================================================
            DECORATIVE CIRCLE RIGHT
        ================================================= */}

        <motion.div
          animate={{
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-20
            bottom-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#5B2E91]/15
          "
        />

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-20
            flex
            w-[90%]
            justify-center
            px-5
            sm:px-8
          "
        >
          <Container className="w-full max-w-none">
            {/* =================================================
                SECTION HEADER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                flex
                w-full
                flex-col
                items-center
                text-center
              "
              style={{
                padding: "20px",
              }}
            >
              {/* EYEBROW */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
                style={{
                  margin: "20px 0px",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "1px",
                    borderRadius: "999px",
                    background: "#642E60",
                    opacity: 0.35,
                  }}
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#642E60]
                  "
                >
                  Our Services
                </span>

                <span
                  style={{
                    width: "30px",
                    height: "1px",
                    borderRadius: "999px",
                    background: "#642E60",
                    opacity: 0.35,
                  }}
                />
              </div>

              {/* TITLE */}

              <h2
                className="
                  text-[40px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-1.5px]
                  text-[#642E60]
                  sm:text-[50px]
                  md:text-[58px]
                  lg:text-[64px]
                "
                style={{
                  margin: "20px 0px",
                }}
              >
                Professional Services,
                <span className="block">
                  Delivered with{" "}
                  <span className="text-[#5B2E91]">
                    Care
                  </span>
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-[#6F6873]
                  sm:text-[16px]
                "
                style={{
                  margin: "20px 0px",
                }}
              >
                Reliable, compassionate, and
                high-quality services designed to
                meet the needs of Northern
                communities.
              </p>

              {/* DIVIDER */}

              <div
                style={{
                  width: "45px",
                  height: "2px",
                  margin: "28px auto 0",
                  borderRadius: "999px",
                  background: "#642E60",
                  opacity: 0.7,
                }}
              />
            </motion.div>

            {/* =================================================
                SERVICES CAROUSEL
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[1400px]
              "
              style={{
                marginTop: "35px",
                marginBottom: "30px",
                padding: "0px 18px",
              }}
            >
              <div className="relative">
                {/* LEFT ARROW */}

                <button
                  type="button"
                  onClick={() =>
                    setServiceIndex((prev) =>
                      prev === 0
                        ? serviceItems.length - 1
                        : prev - 1
                    )
                  }
                  aria-label="Previous services"
                  className="
                    absolute
                    left-0
                    top-1/2
                    z-30
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#642E60]/20
                    bg-white
                    text-[#642E60]
                    shadow-[0_8px_25px_rgba(100,46,96,0.10)]
                    transition-all
                    duration-300
                    hover:border-[#642E60]
                    hover:bg-[#642E60]
                    hover:text-white
                    active:scale-95
                  "
                >
                  <span className="text-[22px]">
                    ←
                  </span>
                </button>

                {/* RIGHT ARROW */}

                <button
                  type="button"
                  onClick={() =>
                    setServiceIndex((prev) =>
                      prev ===
                      serviceItems.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  aria-label="Next services"
                  className="
                    absolute
                    right-0
                    top-1/2
                    z-30
                    flex
                    h-12
                    w-12
                    translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#642E60]/20
                    bg-white
                    text-[#642E60]
                    shadow-[0_8px_25px_rgba(100,46,96,0.10)]
                    transition-all
                    duration-300
                    hover:border-[#642E60]
                    hover:bg-[#642E60]
                    hover:text-white
                    active:scale-95
                  "
                >
                  <span className="text-[22px]">
                    →
                  </span>
                </button>

                {/* CARDS */}

                <div
                  className="
                    overflow-hidden
                    px-3
                    sm:px-4
                  "
                >
                  <motion.div
                    key={serviceIndex}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      grid
                      grid-cols-1
                      gap-6
                      sm:grid-cols-2
                      lg:grid-cols-4
                    "
                  >
                    {getVisibleServices().map(
                      (service, index) => (
                        <StairServiceCard
                          key={`${service.number}-${serviceIndex}`}
                          service={service}
                          index={index}
                          onOpen={() =>
                            openServiceModal(service)
                          }
                        />
                      )
                    )}
                  </motion.div>
                </div>
              </div>

              {/* =================================================
                  CAROUSEL INDICATORS
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {serviceItems.map(
                  (service, index) => (
                    <button
                      key={service.number}
                      type="button"
                      onClick={() =>
                        setServiceIndex(index)
                      }
                      aria-label={`Go to service ${
                        index + 1
                      }`}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          serviceIndex === index
                            ? "w-8 bg-[#642E60]"
                            : "w-2 bg-[#D8C9E3] hover:bg-[#642E60]/60"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </div>

            {/* =================================================
                TRUST STRIP
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                mx-auto
                rounded-[24px]
                border
                border-[#642E60]/10
                bg-white/65
                shadow-[0_20px_60px_rgba(100,46,96,0.07)]
                backdrop-blur-xl
              "
              style={{
                margin: "40px 0px",
                padding: "24px",
              }}
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-8
                  gap-y-5
                "
              >
                <TrustPoint
                  icon={HiShieldCheck}
                  text="Licensed & Insured"
                />

                <div
                  className="
                    hidden
                    h-8
                    w-px
                    bg-[#642E60]/10
                    sm:block
                  "
                />

                <TrustPoint
                  icon={HiUsers}
                  text="Trained Professionals"
                />

                <div
                  className="
                    hidden
                    h-8
                    w-px
                    bg-[#642E60]/10
                    sm:block
                  "
                />

                <TrustPoint
                  icon={HiStar}
                  text="Quality Assured"
                />

                <div
                  className="
                    hidden
                    h-8
                    w-px
                    bg-[#642E60]/10
                    sm:block
                  "
                />

                <TrustPoint
                  icon={HiHeart}
                  text="Community Focused"
                />
              </div>
            </motion.div>
          </Container>
        </div>

        {/* =================================================
            BOTTOM WAVE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-10
            h-[380px]
            w-full
            overflow-hidden
          "
        >
          <svg
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            className="
              absolute
              bottom-0
              left-0
              block
              h-full
              w-full
            "
          >
            <defs>
              <linearGradient
                id="servicesWaveGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#5B2E91"
                  stopOpacity="0.04"
                />

                <stop
                  offset="25%"
                  stopColor="#5B2E91"
                  stopOpacity="0.22"
                />

                <stop
                  offset="50%"
                  stopColor="#5B2E91"
                  stopOpacity="0.52"
                />

                <stop
                  offset="72%"
                  stopColor="#5B2E91"
                  stopOpacity="0.42"
                />

                <stop
                  offset="90%"
                  stopColor="#5B2E91"
                  stopOpacity="0.18"
                />

                <stop
                  offset="100%"
                  stopColor="#5B2E91"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="
                M0,270
                C170,120
                310,330
                500,230
                C690,130
                760,70
                940,175
                C1120,280
                1240,280
                1440,120
                L1440,400
                L0,400
                Z
              "
              fill="url(#servicesWaveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================
          SERVICE DETAILS MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[9999999999]
              flex
              items-center
              justify-center
              bg-[#241B27]/40
              p-4
              backdrop-blur-[8px]
              sm:p-6
            "
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#D8CCDF]
                bg-white
                shadow-[0_30px_90px_rgba(52,28,65,0.28)]
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#40213C]
                  via-[#642E60]
                  to-[#5B2E91]
                "
                style={{
                  padding:
                    "28px 24px 26px 24px",
                }}
              >
                {/* BACKGROUND GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-white/10
                    blur-2xl
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    left-[35%]
                    h-40
                    w-40
                    rounded-full
                    bg-[#C6A15B]/10
                    blur-3xl
                  "
                />

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  onClick={closeServiceModal}
                  aria-label="Close service details"
                  className="
                    absolute
                    right-4
                    top-4
                    z-30
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-200
                    hover:border-white/40
                    hover:bg-white/20
                    active:scale-95
                  "
                >
                  <HiXMark className="text-[21px]" />
                </button>

                {/* HEADER CONTENT */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    gap-4
                    pr-14
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[58px]
                      w-[58px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[17px]
                      border-[2px]
                      border-[#C6A15B]
                      bg-white
                      text-[#642E60]
                      shadow-[0_8px_24px_rgba(0,0,0,0.14)]
                    "
                  >
                    {(() => {
                      const ServiceIcon =
                        selectedService.icon;

                      return (
                        <ServiceIcon className="h-7 w-7" />
                      );
                    })()}
                  </div>

                  {/* TEXT */}

               <div className="min-w-0">
  <p
    className="
      !text-[#F1DFAF]
      text-[9px]
      font-bold
      uppercase
      tracking-[0.24em]
    "
  >
    Professional Service
  </p>

  <h3
    className="
      mt-1.5
      !text-white
      text-[24px]
      font-bold
      leading-[1.15]
      tracking-[-0.5px]
      sm:text-[29px]
    "
    style={{
      color: "#FFFFFF",
    }}
  >
    {selectedService.title}
  </h3>

  <p
    className="
      mt-2.5
      max-w-[610px]
      !text-[#F6EFF8]
      text-[12px]
      leading-6
      sm:text-[13px]
    "
    style={{
      color: "#F6EFF8",
    }}
  >
    {selectedService.description}
  </p>
</div>
                </div>
              </div>

              {/* =================================================
                  MODAL BODY
              ================================================= */}

              <div
                className="
                  max-h-[48vh]
                  overflow-y-auto
                  bg-gradient-to-b
                  from-white
                  via-[#FBF8FD]
                  to-[#F5EFF8]
                "
                style={{
                  padding:
                    "22px 24px 22px 24px",
                }}
              >
                {/* BODY HEADER */}

                <div
                  className="
                    mb-5
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#642E60]
                      "
                    >
                      Available Services
                    </p>

                    <h4
                      className="
                        mt-1
                        text-[18px]
                        font-semibold
                        leading-tight
                        text-[#3D3040]
                        sm:text-[20px]
                      "
                      style={{marginTop: "4px", marginBottom: "10px"}}
                    >
                      Choose the service you need
                    </h4>
                  </div>

                  {/* SERVICE COUNT */}

                  <span
                    className="
                      shrink-0
                      whitespace-nowrap
                      rounded-full
                      border
                      border-[#DCCBE4]
                      bg-[#F4EBF8]
                      text-[10px]
                      font-bold
                      tracking-[0.01em]
                      text-[#642E60]
                    "
                    style={{
                      padding: "7px 12px",marginBottom:"10px"
                    }}
                  >
                    {selectedService.items.length}{" "}
                    Services
                  </span>
                </div>

                {/* SERVICE LIST */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-2.5
                    sm:grid-cols-2
                  "
                >
                  {selectedService.items.map(
                    (service, index) => (
                      <div
                        key={service}
                        className="
                          group/service-item
                          flex
                          items-center
                          gap-3
                          rounded-[12px]
                          border
                          border-[#E4DAE9]
                          bg-white
                          text-[12px]
                          font-medium
                          text-[#514557]
                          shadow-[0_4px_14px_rgba(91,46,145,0.04)]
                          transition-all
                          duration-200
                          hover:border-[#D6C4DF]
                          hover:bg-[#FBF8FD]
                          hover:text-[#5B2E91]
                        "
                        style={{
                          padding:
                            "11px 12px",
                        }}
                      >
                        <span
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#642E60]/[0.08]
                            text-[9px]
                            font-bold
                            text-[#642E60]
                            transition-colors
                            duration-200
                            group-hover/service-item:bg-[#642E60]
                            group-hover/service-item:text-white
                          "
                        >
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="leading-5">
                          {service}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  MODAL FOOTER
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#EAE3EE]
                  bg-[#FBF9FD]
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
                style={{
                  padding:
                    "15px 24px 17px 24px",
                }}
              >
                <p
                  className="
                    text-[11px]
                    leading-5
                    text-[#786D7D]
                  "
                >
                  Ready to get started? Book your
                  required service with our team.
                </p>

                <button
                  type="button"
                  onClick={handleBookNow}
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#642E60]
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(100,46,96,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#5B2E91]
                    active:scale-95
                  "
                  style={{
                    padding:
                      "10px 17px",
                  }}
                >
                  Book Now

                  <HiArrowUpRight className="text-[14px]" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function StairServiceCard({
  service,
  index,
  onOpen,
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
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
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      className="
        group
        relative
        flex
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#E3D7EB]
        bg-white
        text-left
        shadow-[0_12px_35px_rgba(100,46,96,0.10)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#642E60]/30
        hover:shadow-[0_22px_50px_rgba(100,46,96,0.16)]
        focus:outline-none
        focus:ring-2
        focus:ring-[#642E60]/30
      "
    >
      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div
        className="
          relative
          h-[190px]
          w-full
          shrink-0
        "
      >
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-t-[24px]
          "
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              25vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#321A30]/75
              via-[#642E60]/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[85px]
              bg-gradient-to-t
              from-white
              via-white/65
              to-transparent
            "
          />
        </div>

        {/* NUMBER */}

        <div
          className="
            absolute
            left-5
            top-5
            z-20
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            border-[2px]
            border-white/80
            bg-[#642E60]
            text-[11px]
            font-bold
            tracking-[0.08em]
            text-white
            shadow-[0_6px_18px_rgba(100,46,96,0.25)]
          "
        >
          {service.number}
        </div>

        {/* ICON */}

        <div
          className="
            absolute
            bottom-[-21px]
            left-5
            z-30
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-[15px]
            border-[2px]
            border-[#C6A15B]
            bg-white
            text-[#642E60]
            shadow-[0_8px_24px_rgba(100,46,96,0.15)]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-2
          "
        >
          <Icon className="h-[23px] w-[23px]" />
        </div>
      </div>

      {/* ======================================================
          CARD CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          -mt-[20px]
          flex
          min-h-[245px]
          flex-1
          flex-col
          overflow-hidden
          rounded-t-[30px]
          bg-gradient-to-br
          from-white
          via-[#FCF9FF]
          to-[#F6EFFC]
        "
        style={{
          padding:
            "34px 24px 22px",
        }}
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-35px]
            top-[-35px]
            h-[110px]
            w-[110px]
            rounded-full
            bg-[#5B2E91]/10
            opacity-60
          "
        />

        {/* LABEL */}

        <div
          className="
            relative
            flex
            items-center
          "
          style={{
            marginBottom: "9px",
          }}
        >
          <span
            className="
              block
              h-[3px]
              rounded-full
              bg-[#642E60]
              transition-all
              duration-500
              group-hover:w-14
            "
            style={{
              width: "34px",
              marginRight: "9px",
            }}
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.20em]
              text-[#642E60]
            "
          >
            Professional Service
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            relative
            min-h-[52px]
            text-[19px]
            font-bold
            leading-[1.3]
            tracking-[-0.01em]
            text-[#642E60]
            transition-colors
            duration-300
            group-hover:text-[#5B2E91]
          "
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}

        <div
          style={{
            marginTop: "12px",
            padding:
              "4px 6px",
            minHeight: "78px",
          }}
        >
          <p
            className="
              m-0
              overflow-hidden
              text-[12px]
              leading-[1.7]
              text-[#6B5D69]
            "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
            }}
          >
            {service.description}
          </p>
        </div>

        {/* BOTTOM */}

        <div
          className="
            relative
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-[#E6D9EF]
          "
          style={{
            marginTop: "15px",
            paddingTop: "12px",
          }}
        >
          <div
            className="
              flex
              items-center
            "
          >
            <span
              className="
                flex
                h-[25px]
                w-[25px]
                items-center
                justify-center
                rounded-full
                border
                border-[#642E60]/20
                bg-[#642E60]/10
                text-[9px]
                font-bold
                text-[#642E60]
              "
            >
              {service.number}
            </span>

            <span
              className="
                ml-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#8A7A91]
              "
            >
              KBFM Services
            </span>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen();
            }}
            className="
              group/explore
              flex
              items-center
              rounded-full
              border
              border-[#642E60]/15
              bg-white
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#642E60]
              shadow-[0_4px_12px_rgba(100,46,96,0.05)]
              transition-all
              duration-300
              hover:border-[#642E60]
              hover:bg-[#642E60]
              hover:text-white
            "
            style={{
              gap: "7px",
              padding:
                "6px 11px",
            }}
          >
            View Services

            <HiArrowUpRight
              className="
                text-[13px]
                text-[#642E60]
                transition-all
                duration-300
                group-hover/explore:translate-x-1
                group-hover/explore:text-white
              "
            />
          </button>
        </div>

        {/* ACCENT */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            bg-[#642E60]/30
          "
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   TRUST POINT
============================================================ */

function TrustPoint({
  icon: Icon,
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <Icon
        className="
          text-[20px]
          text-[#642E60]
        "
      />

      <span
        className="
          text-[12px]
          font-semibold
          text-[#625B66]
        "
      >
        {text}
      </span>
    </div>
  );
}