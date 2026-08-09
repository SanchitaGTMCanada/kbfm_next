"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Button({
  href = "#",
  children,
  className = "",
  onClick,
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    // Smooth scroll for section links
    if (href.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[#D4AF37]
        bg-[#5B2E91]
        px-2
        py-2
        pl-6
        font-semibold
        text-white
        shadow-[0_10px_30px_rgba(91,46,145,0.20)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#3E2066]
        hover:shadow-[0_16px_40px_rgba(91,46,145,0.30)]
        ${className}
      `}
    >
      <span
        className="
          ml-[10px]
          whitespace-nowrap
          text-white
        "
        style={{marginLeft:"10px"}}
      >
        {children}
      </span>

      <span
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#5B2E91]
          transition-all
          duration-300
          group-hover:rotate-45
          group-hover:text-[#3E2066]
        "
      >
        <HiArrowUpRight size={18} />
      </span>
    </Link>
  );
}