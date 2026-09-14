"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function SubmitButton({
  loading = false,
  children = "Request Free Estimate",
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[18px]
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
      style={{
        height: "64px",

        /* K.B.F.M. Primary → Secondary */
        background:
          "linear-gradient(90deg, #642E60 0%, #5B2E91 100%)",

        color: "#FFFFFF",

        fontWeight: "700",
        fontSize: "17px",

        border: "1px solid rgba(255,255,255,0.08)",

        cursor: loading ? "not-allowed" : "pointer",

        boxShadow:
          "0 15px 35px rgba(100,46,96,0.22)",
      }}
    >
      {/* =====================================================
          SHINE EFFECT
      ===================================================== */}

      <span className="absolute inset-0 overflow-hidden rounded-[18px]">
        <span
          className="
            absolute
            left-[-150%]
            top-0
            h-full
            w-[45%]
            -skew-x-[25deg]
            bg-white/15
            transition-all
            duration-700
            group-hover:left-[150%]
          "
        />
      </span>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-3
        "
      >
        {loading ? "Submitting..." : children}

        {!loading && (
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/15
              transition-all
              duration-300
              group-hover:bg-white/20
              group-hover:translate-x-1
            "
          >
            <HiArrowRight
              size={18}
              className="transition-transform duration-300"
            />
          </span>
        )}
      </span>
    </button>
  );
}