"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kbfm_scam_alert_seen";

export default function ScamAlertPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // =====================================================
    // SHOW ONLY ONCE PER BROWSER SESSION
    // =====================================================

    const alreadySeen = sessionStorage.getItem(STORAGE_KEY);

    if (alreadySeen === "true") {
      return;
    }

    setOpen(true);

    // Allow initial render before starting animation
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 40);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    // =====================================================
    // START CLOSE ANIMATION
    // =====================================================

    setVisible(false);

    // =====================================================
    // MARK AS SEEN FOR THIS SESSION
    // =====================================================

    sessionStorage.setItem(STORAGE_KEY, "true");

    // =====================================================
    // REMOVE AFTER ANIMATION
    // =====================================================

    window.setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
    }, 350);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-[999999999999]
        flex
        items-center
        justify-center
        bg-[#120d16]/75
        px-3
        py-3
        sm:p-[18px]
        backdrop-blur-[7px]
        transition-all
        duration-300
        ease-out
        ${
          visible
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }
      `}
      style={{
        transitionProperty: "opacity, background-color",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="scam-alert-title"
    >
      <div
        className={`
          relative
          flex
          w-full
          max-w-[720px]
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-[#d8ccdf]
          bg-white
          shadow-[0_30px_100px_rgba(35,18,40,0.35)]
          transition-all
          duration-[350ms]
          ease-out
          max-h-[calc(100dvh-24px)]
          sm:max-h-[calc(100dvh-36px)]
          sm:rounded-[24px]
          ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.97] opacity-0"
          }
        `}
        style={{
          transitionProperty: "transform, opacity",
        }}
      >
        {/* =====================================================
            TOP ACCENT
        ===================================================== */}

        <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#642E60] via-[#C6A15B] to-[#5B2E91]" />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            shrink-0
            border-b
            border-[#eee7f0]
            bg-gradient-to-br
            from-[#fffaff]
            via-white
            to-[#f7f1f9]
          "
          style={{
            padding: "18px 20px",
          }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* ALERT ICON */}

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#fff2f0]
                text-[#c24135]
                shadow-sm
                sm:h-14
                sm:w-14
              "
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#642E60] sm:text-[10px] sm:tracking-[0.2em]">
                KBFM Group of Companies
              </p>

              <h2
                id="scam-alert-title"
                className="
                  text-[26px]
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-[#241B27]
                  sm:text-[30px]
                "
              >
                Scam Alert!
              </h2>
            </div>

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close scam alert"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#e2d9e5]
                bg-white
                text-[#6f6372]
                transition
                duration-200
                hover:border-[#642E60]
                hover:bg-[#642E60]
                hover:text-white
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            scrollbar-thin
            scrollbar-thumb-[#d8ccdf]
            scrollbar-track-transparent
          "
          style={{
            padding: "20px",
          }}
        >
          <div className="space-y-5 text-[15px] leading-7 text-[#514754]">
            {/* =====================================================
                OFFICIAL WEBSITE
            ===================================================== */}

            <div
              className="
                rounded-2xl
                border
                border-[#e2d8e5]
                bg-[#faf7fb]
              "
              style={{
                padding: "16px",
              }}
            >
              <p>
                KBFM Group of Companies Professional Services Ltd. operates
                one official website only:
              </p>

              <a
                href="https://www.kbfmgroup.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  break-all
                  font-extrabold
                  text-[#642E60]
                  underline
                  decoration-[#C6A15B]
                  decoration-2
                  underline-offset-4
                  transition
                  duration-200
                  hover:text-[#5B2E91]
                "
              >
                <span className="break-all">www.kbfmgroup.ca</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </a>
            </div>

            {/* =====================================================
                WARNING
            ===================================================== */}

            <p>
              Any other website using our business name, logo, or similar
              branding is not operated by, affiliated with, or authorized by
              KBFM Group of Companies Professional Services Ltd.
            </p>

            {/* =====================================================
                SECURITY NOTICE
            ===================================================== */}

            <div
              className="
                rounded-2xl
                border
                border-[#eadfcb]
                bg-[#fffaf0]
              "
              style={{
                padding: "16px",
              }}
            >
              <div className="flex gap-3">
                <div className="mt-1 shrink-0 text-[#B3883A]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2 4 5v6c0 5.5 3.4 9.8 8 11 4.6-1.2 8-5.5 8-11V5l-8-3Z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>

                <p className="min-w-0">
                  For your safety and security, please confirm the address
                  reads{" "}
                  <strong className="font-extrabold text-[#241B27]">
                    kbfmgroup.ca
                  </strong>{" "}
                  before you submit personal information, share documents, or
                  make a payment.
                </p>
              </div>
            </div>

            {/* =====================================================
                DISCLAIMER
            ===================================================== */}

            <p>
              We accept no responsibility for transactions, communications, or
              losses arising from unauthorized websites.
            </p>

            {/* =====================================================
                CONTACT INTRO
            ===================================================== */}

            <p>
              If you are unsure whether you are on the correct site, contact us
              directly before you proceed:
            </p>

            {/* =====================================================
                CONTACT
            ===================================================== */}

            <div
              className="
                rounded-2xl
                border
                border-[#e2d8e5]
                bg-white
                shadow-[0_8px_30px_rgba(52,28,65,0.06)]
              "
              style={{
                padding: "16px",
              }}
            >
              <p className="font-extrabold text-[#241B27]">
                Kenneth Bornking, Owner
              </p>

              <div
                className="space-y-2.5"
                style={{
                  marginTop: "12px",
                }}
              >
                {/* PHONE */}

                <a
                  href="tel:+18674471131"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#faf7fb]
                    text-sm
                    font-semibold
                    text-[#642E60]
                    transition
                    duration-200
                    hover:bg-[#f1e8f3]
                  "
                  style={{
                    padding: "10px 12px",
                  }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#642E60] text-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 0 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wide text-[#8b7d8f]">
                      Phone
                    </span>

                    <span className="break-all">
                      +1 (867) 447 1131
                    </span>
                  </span>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:info@kbfmgroup.ca"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#faf7fb]
                    text-sm
                    font-semibold
                    text-[#642E60]
                    transition
                    duration-200
                    hover:bg-[#f1e8f3]
                  "
                  style={{
                    padding: "10px 12px",
                  }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5B2E91] text-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        rx="2"
                      />

                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wide text-[#8b7d8f]">
                      Email
                    </span>

                    <span className="break-all">
                      info@kbfmgroup.ca
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* =====================================================
                SIGNATURE
            ===================================================== */}

            <p
              className="font-medium text-[#6c606f]"
              style={{
                paddingTop: "2px",
              }}
            >
              Thanks,
              <br />
              Kenneth Bornking
              <br />
              KBFM Group of Companies Professional Services Ltd.
            </p>
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div
          className="
            shrink-0
            flex
            flex-col
            gap-2.5
            border-t
            border-[#eee7f0]
            bg-[#fcfafd]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          style={{
            padding: "12px 20px",
          }}
        >
          <p className="text-[10px] leading-4 text-[#8a7d8d] sm:text-[11px] sm:leading-5">
            Please verify the website address before sharing information.
          </p>

          <button
            type="button"
            onClick={handleClose}
            className="
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#642E60]
              text-sm
              font-bold
              text-white
              shadow-[0_8px_20px_rgba(100,46,96,0.2)]
              transition
              duration-200
              hover:bg-[#5B2E91]
              sm:w-auto
            "
            style={{
              padding: "10px 24px",
            }}
          >
            Continue to Website
          </button>
        </div>
      </div>
    </div>
  );
}