import Container from "@/components/ui/Container/Container";
import AboutContent from "./AboutContent";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-white
        via-[#FAF7FD]
        to-[#E9DDF4]
        flex
        justify-center

        pt-[150px]
        pb-24

        sm:pt-[170px]
        sm:pb-28

        lg:pt-[190px]
        lg:pb-32
      "
    >
      {/* =====================================================
          TOP SEPARATION AREA
      ===================================================== */}

      

      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-0

          h-[150px]
          w-full

          bg-gradient-to-b
          from-[#E9DDF4]/55
          via-[#F4EFF9]/45
          to-transparent

          sm:h-[170px]
          lg:h-[190px]
        "
      />

      {/* Soft center fade */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[-40px]

          h-[180px]
          w-[70%]

          -translate-x-1/2

          rounded-full

          bg-[#B998D5]/10

          blur-[80px]
        "
      />

      {/* =====================================================
          SMALL TOP DECORATIVE LINE
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[95px]

          z-10

          flex
          -translate-x-1/2

          items-center
          gap-3

          opacity-60

          sm:top-[110px]
          lg:top-[125px]
        "
      >
        <span
          className="
            h-[1px]
            w-14

            bg-gradient-to-r
            from-transparent
            to-[#7B4DB8]/40
          "
        />

        <span
          className="
            h-1.5
            w-1.5

            rounded-full

            bg-[#7B4DB8]/50
          "
        />

        <span
          className="
            h-[1px]
            w-14

            bg-gradient-to-l
            from-transparent
            to-[#7B4DB8]/40
          "
        />
      </div>

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Large Purple Glow - Left */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[8%]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#6D48A8]/10

          blur-[150px]
        "
      />

      {/* Large Lavender Glow - Right */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          top-[18%]

          h-[600px]
          w-[600px]

          rounded-full

          bg-[#8B65B4]/10

          blur-[150px]
        "
      />

      {/* Center White Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[25%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-white/80

          blur-[150px]
        "
      />

      {/* Bottom Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[25%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#B998D5]/15

          blur-[150px]
        "
      />

      {/* =====================================================
          DECORATIVE OUTLINE CIRCLES
      ===================================================== */}

      {/* Large Right Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          top-[5%]

          h-[680px]
          w-[680px]

          rounded-full

          border
          border-[#7B4DB8]/10
        "
      />

      {/* Second Right Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[15%]

          h-[480px]
          w-[480px]

          rounded-full

          border
          border-[#B998D5]/15
        "
      />

      {/* Left Bottom Circle */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[5%]

          h-[460px]
          w-[460px]

          rounded-full

          border
          border-[#7B4DB8]/10
        "
      />

      {/* Small Circle */}

      <div
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[18%]

          h-[120px]
          w-[120px]

          rounded-full

          border
          border-[#7B4DB8]/10
        "
      />

      {/* =====================================================
          FLOATING DOTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[22%]

          h-2
          w-2

          rounded-full

          bg-[#7B4DB8]/35
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[25%]

          h-1.5
          w-1.5

          rounded-full

          bg-[#B998D5]/40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[30%]

          h-3
          w-3

          rounded-full

          bg-[#6D48A8]/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[22%]
          bottom-[20%]

          h-2
          w-2

          rounded-full

          bg-[#B998D5]/40
        "
      />

      {/* =====================================================
          SMALL DOT GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          bottom-[18%]

          grid
          grid-cols-5
          gap-3

          opacity-25
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1

              rounded-full

              bg-[#7B4DB8]
            "
          />
        ))}
      </div>

      {/* =====================================================
          CONTENT
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
          "
          style={{margin:"40px 0px 40px 0px"}}
        >
      <Container className="w-[100%] flex justify-center">
        <div
          className="
            relative
            z-10

            grid
            w-full

            items-center

            gap-16

            lg:grid-cols-2
            lg:gap-20
            xl:gap-24
          "
        >
          {/* =================================================
              ABOUT CONTENT
          ================================================= */}

          <AboutContent />

          {/* =================================================
              ABOUT IMAGES
          ================================================= */}

          <AboutImages />
        </div>
      </Container>
</div>
      {/* =====================================================
          BOTTOM SOFT PURPLE TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-0

          h-[120px]
          w-full

          bg-gradient-to-t
          from-[#E9DDF4]/60
          to-transparent
        "
      />
    </section>
  );
}