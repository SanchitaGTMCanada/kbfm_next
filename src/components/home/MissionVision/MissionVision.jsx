"use client";

import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiEye,
  HiFlag,
} from "react-icons/hi2";

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-[#FBF9FD]"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* =========================================================
          BACKGROUND PHOTO OVERLAY
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: 0.035,
          }}
        />

        {/* Soft purple overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,249,253,0.98) 0%, rgba(248,242,251,0.95) 50%, rgba(241,231,248,0.98) 100%)",
          }}
        />

        {/* Center light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "180px",
            background:
              "linear-gradient(to top, #FBF9FD 0%, rgba(251,249,253,0) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "420px",
          height: "420px",
          left: "-220px",
          top: "250px",
          background: "#DCC8EE",
          opacity: 0.16,
          filter: "blur(110px)",
        }}
      />

      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "420px",
          height: "420px",
          right: "-220px",
          bottom: "100px",
          background: "#C8A8DD",
          opacity: 0.15,
          filter: "blur(110px)",
        }}
      />

      {/* =========================================================
          MAIN CENTERED CONTAINER
      ========================================================= */}
      <div
        className="relative mx-auto w-[90%]"
        style={{
          maxWidth: "1180px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto text-center"
        //   style={{
        //     maxWidth: "850px",
        //   }}
        >
          {/* Label */}
          <div
            className="flex items-center justify-center"
            style={{
              gap: "15px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                width: "55px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #A66CFF)",
              }}
            />

            <span
              style={{
                color: "#795096",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.32em",
              }}
            >
              OUR PURPOSE
            </span>

            <span
              style={{
                width: "55px",
                height: "1px",
                background:
                  "linear-gradient(to left, transparent, #A66CFF)",
              }}
            />
          </div>

          {/* Main Heading */}
          <h2
            style={{
              margin: 0,
              color: "#40205F",
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: "1.05",
              fontWeight: 800,
              letterSpacing: "-0.045em",
            }}
          >
            More Than a Service.
          </h2>

          <h3
            style={{
              margin: "3px 0 0",
              background:
                "linear-gradient(90deg, #6A3695, #A66CFF, #6A3695)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: "1.05",
              fontWeight: 800,
              letterSpacing: "-0.045em",
            }}
          >
            A Purpose.
          </h3>

          <p
            style={{
              margin: "22px auto 0",
              maxWidth: "760px",
              color: "#594B59",
              fontSize: "16px",
              lineHeight: "1.8",
              fontWeight: 500,
            }}
          >
            Our mission defines how we serve today, while our vision guides
            where we are going tomorrow — always with Northern communities at
            the heart of what we do.
          </p>
        </motion.div>

        {/* =======================================================
            TIMELINE AREA
        ======================================================= */}
        <div
          className="relative mx-auto"
          style={{
    
            marginTop: "75px",
          }}
        >
          {/* =====================================================
              CENTRAL TIMELINE
          ===================================================== */}
          <div
            className="pointer-events-none absolute hidden lg:block"
            style={{
              left: "50%",
              top: "35px",
              bottom: "35px",
              width: "1px",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, transparent 0%, #C6A5D9 10%, #C6A5D9 90%, transparent 100%)",
            }}
          />

          {/* =====================================================
              MISSION ROW
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-1 items-stretch lg:grid-cols-[1fr_90px_1fr]"
          >
            {/* =================================================
                MISSION CONTENT — LEFT
            ================================================= */}
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E2D4EA] bg-white"
              style={{
                paddingTop: "30px",
                paddingRight: "32px",
                paddingBottom: "30px",
                paddingLeft: "32px",
                boxShadow:
                  "0 20px 55px rgba(91,46,145,0.09)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute left-0 right-0 top-0"
                style={{
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #5B2E91, #A66CFF)",
                }}
              />

              {/* Decorative number */}
              <div
                className="pointer-events-none absolute right-[-8px] top-[-30px]"
                style={{
                  color: "#5B2E91",
                  opacity: 0.045,
                  fontSize: "145px",
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                01
              </div>

              {/* Header */}
              <div
                className="relative flex items-center"
                style={{
                  gap: "17px",
                }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-[18px]"
                  style={{
                    width: "64px",
                    height: "64px",
                    background:
                      "linear-gradient(135deg, #5B2E91, #8F55C4)",
                    color: "#fff",
                    boxShadow:
                      "0 10px 24px rgba(91,46,145,0.22)",
                  }}
                >
                  <HiFlag size={28} />
                </div>

                <div>
                  <p
                    style={{
                      margin: 0,
                      color: "#866B94",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.28em",
                    }}
                  >
                    WHERE WE BEGIN
                  </p>

                  <h3
                    style={{
                      margin: "5px 0 0",
                      color: "#452367",
                      fontSize: "28px",
                      lineHeight: 1.1,
                      fontWeight: 800,
                    }}
                  >
                    Our Mission
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  marginTop: "22px",
                  marginBottom: "18px",
                  background: "#E9DFEF",
                }}
              />

              {/* Mission text */}
              <p
                style={{
                  margin: 0,
                  color: "#554450",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 500,
                }}
              >
                To deliver reliable, skilled, and compassionate staffing
                services across security, caregiving, cleaning, and janitorial
                operations throughout the Northwest Territories while creating
                meaningful employment opportunities and exceeding client
                expectations.
              </p>

              {/* Keywords */}
              <div
                className="flex flex-wrap"
                style={{
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                {[
                  "Reliable",
                  "Skilled",
                  "Compassionate",
                  "Local Employment",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      paddingTop: "7px",
                      paddingRight: "12px",
                      paddingBottom: "7px",
                      paddingLeft: "12px",
                      borderRadius: "999px",
                      background: "#F4ECF8",
                      color: "#76518D",
                      fontSize: "10px",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                CENTER NODE — 01
            ================================================= */}
            <div
              className="relative z-20 flex items-center justify-center"
              style={{
                marginTop: "28px",
                marginBottom: "28px",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "72px",
                  height: "72px",
                  border: "7px solid #FBF9FD",
                  background:
                    "linear-gradient(135deg, #5B2E91, #A66CFF)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 800,
                  boxShadow:
                    "0 12px 30px rgba(91,46,145,0.25)",
                }}
              >
                01
              </div>
            </div>

            {/* =================================================
                MISSION PHOTO — RIGHT
                SAME HEIGHT AS CONTENT
            ================================================= */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative h-full min-h-[310px] overflow-hidden rounded-[30px]"
              style={{
                boxShadow:
                  "0 20px 55px rgba(91,46,145,0.14)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                alt="Professional team working together"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Purple overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(62,30,84,0.08) 10%, rgba(91,46,145,0.62) 100%)",
                }}
              />

              {/* Border */}
              <div
                className="absolute inset-0 rounded-[30px]"
                style={{
                  border:
                    "1px solid rgba(255,255,255,0.28)",
                }}
              />

              {/* Top label */}
              <div
                className="absolute left-5 right-5 top-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    paddingTop: "7px",
                    paddingRight: "11px",
                    paddingBottom: "7px",
                    paddingLeft: "11px",
                    borderRadius: "999px",
                    background:
                      "rgba(255,255,255,0.16)",
                    border:
                      "1px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontSize: "9px",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  OUR MISSION
                </span>

                <span
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    fontWeight: 800,
                  }}
                >
                  01
                </span>
              </div>

              {/* Bottom content */}
              <div
                className="absolute bottom-5 left-5"
                style={{
                  paddingRight: "20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  People. Service.
                </p>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#F1E8F6",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Care at the heart of what we do.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              VISION ROW
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-1 items-stretch lg:grid-cols-[1fr_90px_1fr]"
            style={{
              marginTop: "75px",
            }}
          >
            {/* =================================================
                VISION PHOTO — LEFT
                SAME HEIGHT AS CONTENT
            ================================================= */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative order-2 h-full min-h-[310px] overflow-hidden rounded-[30px] lg:order-1"
              style={{
                boxShadow:
                  "0 20px 55px rgba(91,46,145,0.14)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
                alt="Community and teamwork"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Purple overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(91,46,145,0.62) 0%, rgba(62,30,84,0.08) 90%)",
                }}
              />

              {/* Border */}
              <div
                className="absolute inset-0 rounded-[30px]"
                style={{
                  border:
                    "1px solid rgba(255,255,255,0.28)",
                }}
              />

              {/* Top label */}
              <div
                className="absolute left-5 right-5 top-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    paddingTop: "7px",
                    paddingRight: "11px",
                    paddingBottom: "7px",
                    paddingLeft: "11px",
                    borderRadius: "999px",
                    background:
                      "rgba(255,255,255,0.16)",
                    border:
                      "1px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontSize: "9px",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  OUR VISION
                </span>

                <span
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    fontWeight: 800,
                  }}
                >
                  02
                </span>
              </div>

              {/* Bottom content */}
              <div
                className="absolute bottom-5 left-5"
                style={{
                  paddingRight: "20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  Trust. Excellence.
                </p>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#F1E8F6",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Building stronger Northern communities.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                CENTER NODE — 02
            ================================================= */}
           <div
  className="relative z-20 order-1 flex items-center justify-center lg:order-2"
  style={{
    marginTop: "28px",
    marginBottom: "28px",
  }}
>
  <div
    className="flex items-center justify-center rounded-full"
    style={{
      width: "72px",
      height: "72px",
      border: "7px solid #A66CFF",
      background: "#fff",
      color: "#5B2E91",
      fontSize: "14px",
      fontWeight: 800,
      boxShadow:
        "0 0 0 3px rgba(166,108,255,0.15), 0 12px 30px rgba(91,46,145,0.22)",
    }}
  >
    02
  </div>
</div>

            {/* =================================================
                VISION CONTENT — RIGHT
            ================================================= */}
            <div
              className="relative order-3 flex h-full flex-col overflow-hidden rounded-[30px] text-white"
              style={{
                paddingTop: "30px",
                paddingRight: "32px",
                paddingBottom: "30px",
                paddingLeft: "32px",
                background:
                  "linear-gradient(135deg, #482365 0%, #5B2E91 55%, #7547A0 100%)",
                boxShadow:
                  "0 22px 55px rgba(91,46,145,0.20)",
              }}
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: "230px",
                  height: "230px",
                  right: "-70px",
                  top: "-80px",
                  background: "#CDA8FF",
                  opacity: 0.14,
                  filter: "blur(45px)",
                }}
              />

              {/* Decorative number */}
              <div
                className="pointer-events-none absolute right-[-8px] top-[-30px]"
                style={{
                  color: "#fff",
                  opacity: 0.065,
                  fontSize: "145px",
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                02
              </div>

              {/* Header */}
              <div
                className="relative flex items-center"
                style={{
                  gap: "17px",
                }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-[18px]"
                  style={{
                    width: "64px",
                    height: "64px",
                    background:
                      "rgba(255,255,255,0.13)",
                    border:
                      "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  <HiEye size={29} />
                </div>

                <div>
                  <p
                    style={{
                      margin: 0,
                      color: "#D6BEE3",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.28em",
                    }}
                  >
                    WHERE WE&apos;RE GOING
                  </p>

                  <h3
                    style={{
                      margin: "5px 0 0",
                      color: "#fff",
                      fontSize: "28px",
                      lineHeight: 1.1,
                      fontWeight: 800,
                    }}
                  >
                    Our Vision
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  marginTop: "22px",
                  marginBottom: "18px",
                  background:
                    "rgba(255,255,255,0.18)",
                }}
              />

              {/* Vision text */}
              <p
                style={{
                  margin: 0,
                  color: "#F3EAF7",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 500,
                }}
              >
                To become the Northwest Territories&apos; most trusted and
                respected provider of integrated staffing and facility support
                services, recognized for excellence, integrity, innovation,
                and commitment to Northern communities.
              </p>

              {/* Keywords */}
              <div
                className="flex flex-wrap"
                style={{
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                {[
                  "Trusted",
                  "Excellence",
                  "Integrity",
                  "Innovation",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      paddingTop: "7px",
                      paddingRight: "12px",
                      paddingBottom: "7px",
                      paddingLeft: "12px",
                      borderRadius: "999px",
                      background:
                        "rgba(255,255,255,0.11)",
                      border:
                        "1px solid rgba(255,255,255,0.13)",
                      color: "#F4EAF9",
                      fontSize: "10px",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bottom statement */}
              <div
                className="flex items-center"
                style={{
                  gap: "8px",
                  marginTop: "22px",
                  color: "#E5D5EC",
                  fontSize: "10px",
                  fontWeight: 700,
                }}
              >
                <HiCheckCircle size={15} />
                Building stronger Northern communities
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            CLOSING STATEMENT
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{
            marginTop: "70px",
          }}
        >
          <div
            className="mx-auto"
            style={{
              width: "70px",
              height: "1px",
              marginBottom: "22px",
              background:
                "linear-gradient(90deg, transparent, #9D70BA, transparent)",
            }}
          />

          <p
            style={{
              margin: 0,
              color: "#5B4B5F",
              fontSize: "15px",
              lineHeight: 1.7,
              fontWeight: 600,
            }}
          >
            Serving the North with{" "}
            <span
              style={{
                color: "#6C3A91",
                fontWeight: 800,
              }}
            >
              Care, Security, and Integrity.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}