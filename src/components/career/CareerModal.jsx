"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiBriefcase,
  HiArrowUpTray,
  HiChatBubbleLeftRight,
  HiSparkles,
  HiShieldCheck,
} from "react-icons/hi2";

import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  job: "",
  message: "",
  resume: null,
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];

export default function CareerModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* =========================================================
     SWEETALERT CONFIG
  ========================================================= */

  const swalOptions = {
    customClass: {
      popup: "career-swal-popup",
      confirmButton: "career-swal-button",
    },

    didOpen: () => {
      const container = document.querySelector(".swal2-container");

      if (container) {
        container.style.zIndex = "99999999999";
      }
    },
  };

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      const extension = `.${file.name
        .split(".")
        .pop()
        .toLowerCase()}`;

      /* File type validation */

      if (
        !ALLOWED_FILE_TYPES.includes(file.type) &&
        !ALLOWED_FILE_EXTENSIONS.includes(extension)
      ) {
        setErrors((prev) => ({
          ...prev,
          resume: "Only PDF, DOC or DOCX files are allowed.",
        }));

        setForm((prev) => ({
          ...prev,
          resume: null,
        }));

        e.target.value = "";

        return;
      }

      /* File size validation */

      if (file.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({
          ...prev,
          resume: "Resume size must not exceed 5MB.",
        }));

        setForm((prev) => ({
          ...prev,
          resume: null,
        }));

        e.target.value = "";

        return;
      }

      setForm((prev) => ({
        ...prev,
        resume: file,
      }));

      setErrors((prev) => ({
        ...prev,
        resume: "",
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validate = () => {
    const err = {};

    if (!form.fullName.trim()) {
      err.fullName = "Full name is required.";
    }

    if (!form.phone.trim()) {
      err.phone = "Phone number is required.";
    } else if (form.phone.trim().length < 7) {
      err.phone = "Please enter a valid phone number.";
    }

    if (!form.email.trim()) {
      err.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(form.email.trim())) {
        err.email = "Please enter a valid email address.";
      }
    }

    if (!form.job.trim()) {
      err.job = "Job position is required.";
    }

    if (!form.resume) {
      err.resume = "Resume is required.";
    } else {
      const extension = `.${form.resume.name
        .split(".")
        .pop()
        .toLowerCase()}`;

      if (
        !ALLOWED_FILE_TYPES.includes(form.resume.type) &&
        !ALLOWED_FILE_EXTENSIONS.includes(extension)
      ) {
        err.resume = "Only PDF, DOC or DOCX files are allowed.";
      }

      if (form.resume.size > MAX_FILE_SIZE) {
        err.resume = "Resume size must not exceed 5MB.";
      }
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("fullName", form.fullName.trim());
      formData.append("phone", form.phone.trim());
      formData.append("email", form.email.trim());
      formData.append("job", form.job.trim());
      formData.append("message", form.message.trim());

      if (form.resume) {
        formData.append("resume", form.resume);
      }

      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "Something went wrong while submitting your application."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit career application."
        );
      }

      /* =====================================================
         SUCCESSFUL SUBMISSION
      ===================================================== */

      // Reset form
      setForm(initialForm);

      // Clear validation errors
      setErrors({});

      // Close the Career Modal FIRST
      onClose();

      /*
        Wait for Headless UI modal closing animation,
        then show SweetAlert success popup.
      */
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Application Submitted",
          text:
            result.message ||
            "Thank you for applying. Your application has been received successfully.",
          confirmButtonColor: "#642E60",
          iconColor: "#5B2E91",
          ...swalOptions,
        });
      }, 300);
    } catch (err) {
      console.error("Career Form Error:", err);

      /* =====================================================
         ERROR POPUP
      ===================================================== */

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          err?.message ||
          "Something went wrong. Please try again.",
        confirmButtonColor: "#642E60",
        iconColor: "#B42318",
        ...swalOptions,
      });
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const handleClose = () => {
    if (loading) return;

    setErrors({});

    onClose();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999999999]"
        onClose={handleClose}
      >
        {/* =====================================================
            BACKDROP
        ===================================================== */}

        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              fixed
              inset-0
              bg-[#2A1730]/70
              backdrop-blur-md
            "
          />
        </TransitionChild>

        {/* =====================================================
            MODAL WRAPPER
        ===================================================== */}

        <div
          className="fixed inset-0 overflow-y-auto"
          style={{
            padding: "10px",
          }}
        >
          <div
            className="
              flex
              min-h-full
              items-center
              justify-center
              p-4
            "
          >
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transform transition ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-2 scale-98"
            >
              <DialogPanel
                className="
                  relative
                  w-full
                  max-w-5xl
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#5B2E91]/15
                  bg-white
                  shadow-[0_30px_100px_rgba(72,35,101,0.25)]
                "
              >
                {/* =================================================
                    MODAL BACKGROUND EFFECTS
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-28
                    -top-28
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#642E60]/10
                    blur-[100px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    bottom-0
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-[#5B2E91]/10
                    blur-[110px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/70
                    blur-[120px]
                  "
                />

                {/* =================================================
                    BACKGROUND WATERMARK ICONS
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[-70px]
                    top-[100px]
                    text-[#642E60]/[0.035]
                  "
                >
                  <HiSparkles
                    style={{
                      width: "240px",
                      height: "240px",
                    }}
                  />
                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-70px]
                    right-[-45px]
                    text-[#5B2E91]/[0.035]
                  "
                >
                  <HiShieldCheck
                    style={{
                      width: "260px",
                      height: "260px",
                    }}
                  />
                </div>

                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}

                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  disabled={loading}
                  className="
                    group
                    absolute
                    right-5
                    top-4
                    z-50
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#642E60]/10
                    bg-white/90
                    text-[#642E60]
                    shadow-[0_8px_25px_rgba(91,46,145,0.12)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#642E60]
                    hover:bg-gradient-to-br
                    hover:from-[#642E60]
                    hover:to-[#5B2E91]
                    hover:text-white
                    hover:shadow-[0_12px_30px_rgba(91,46,145,0.25)]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  <IoClose
                    size={22}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-90
                    "
                  />
                </button>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    max-h-[90vh]
                    overflow-y-auto
                    p-6
                    sm:p-8
                    lg:p-10
                  "
                  style={{
                    padding: "24px",
                  }}
                >
                  {/* =================================================
                      HEADER
                  ================================================= */}

                  <div
                    className="
                      mb-8
                      rounded-[24px]
                      border
                      border-[#5B2E91]/10
                      bg-gradient-to-br
                      from-[#FCF9FD]
                      via-[#F8F1FB]
                      to-[#F1E8F7]
                      px-5
                      py-6
                      sm:px-7
                    "
                    style={{
                      padding: "20px",
                    }}
                  >
                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-[#642E60]
                          to-[#5B2E91]
                          text-white
                          shadow-[0_8px_22px_rgba(91,46,145,0.20)]
                        "
                      >
                        <HiBriefcase className="text-[18px]" />
                      </div>

                      <div>
                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.24em]
                            text-[#5B2E91]
                          "
                        >
                          Careers
                        </p>

                        <div
                          className="
                            mt-1
                            h-[2px]
                            w-9
                            rounded-full
                            bg-[#C6A15B]
                          "
                        />
                      </div>
                    </div>

                    <h3
                      className="
                        text-3xl
                        font-bold
                        leading-tight
                        tracking-[-0.8px]
                        text-[#452D2D]
                        sm:text-4xl
                      "
                      style={{
                        marginLeft: "4px",
                      }}
                    >
                      Apply{" "}
                      <span
                        className="
                          bg-gradient-to-r
                          from-[#642E60]
                          via-[#5B2E91]
                          to-[#70428C]
                          bg-clip-text
                          text-transparent
                        "
                      >
                        Now
                      </span>
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        text-[14px]
                        leading-6
                        text-[#716A75]
                      "
                      style={{
                        marginLeft: "4px",
                        marginBottom: "10px",
                      }}
                    >
                      Fill in the details below and upload your resume.
                      We look forward to learning more about you and
                      your experience.
                    </p>
                  </div>

                  {/* =================================================
                      FORM
                  ================================================= */}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {/* =================================================
                        ROW 1
                    ================================================= */}

                    <div className="grid gap-5 md:grid-cols-2">

                      {/* FULL NAME */}

                      <div
                        style={{
                          marginBottom: "15px",
                        }}
                      >
                        <label
                          className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-[#452D2D]
                          "
                          style={{
                            marginBottom: "7px",
                            paddingLeft: "5px",
                          }}
                        >
                          Full Name *
                        </label>

                        <div className="relative">
                          <HiUser
                            size={18}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#642E60]
                            "
                          />

                          <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="
                              h-14
                              w-full
                              rounded-2xl
                              border
                              border-[#DCCFE2]
                              bg-[#FCFAFD]
                              pr-4
                              text-[15px]
                              text-[#352A37]
                              outline-none
                              transition-all
                              duration-300
                              placeholder:text-[#9A919F]
                              focus:border-[#642E60]
                              focus:bg-white
                              focus:ring-4
                              focus:ring-[#642E60]/10
                            "
                            style={{
                              paddingLeft: "40px",
                            }}
                          />
                        </div>

                        {errors.fullName && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* PHONE */}

                      <div
                        style={{
                          marginBottom: "15px",
                        }}
                      >
                        <label
                          className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-[#452D2D]
                          "
                          style={{
                            marginBottom: "7px",
                            paddingLeft: "5px",
                          }}
                        >
                          Phone Number *
                        </label>

                        <div className="relative">
                          <HiPhone
                            size={18}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#642E60]
                            "
                          />

                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (867) 447-1500"
                            className="
                              h-14
                              w-full
                              rounded-2xl
                              border
                              border-[#DCCFE2]
                              bg-[#FCFAFD]
                              pr-4
                              text-[15px]
                              text-[#352A37]
                              outline-none
                              transition-all
                              duration-300
                              placeholder:text-[#9A919F]
                              focus:border-[#642E60]
                              focus:bg-white
                              focus:ring-4
                              focus:ring-[#642E60]/10
                            "
                            style={{
                              paddingLeft: "40px",
                            }}
                          />
                        </div>

                        {errors.phone && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        ROW 2
                    ================================================= */}

                    <div className="grid gap-5 md:grid-cols-2">

                      {/* EMAIL */}

                      <div
                        style={{
                          marginBottom: "15px",
                        }}
                      >
                        <label
                          className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-[#452D2D]
                          "
                          style={{
                            marginBottom: "7px",
                            paddingLeft: "5px",
                          }}
                        >
                          Email Address *
                        </label>

                        <div className="relative">
                          <HiEnvelope
                            size={18}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#642E60]
                            "
                          />

                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="
                              h-14
                              w-full
                              rounded-2xl
                              border
                              border-[#DCCFE2]
                              bg-[#FCFAFD]
                              pr-4
                              text-[15px]
                              text-[#352A37]
                              outline-none
                              transition-all
                              duration-300
                              placeholder:text-[#9A919F]
                              focus:border-[#5B2E91]
                              focus:bg-white
                              focus:ring-4
                              focus:ring-[#5B2E91]/10
                            "
                            style={{
                              paddingLeft: "40px",
                            }}
                          />
                        </div>

                        {errors.email && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* JOB */}

                      <div
                        style={{
                          marginBottom: "15px",
                        }}
                      >
                        <label
                          className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-[#452D2D]
                          "
                          style={{
                            marginBottom: "7px",
                            paddingLeft: "5px",
                          }}
                        >
                          Job Position *
                        </label>

                        <div className="relative">
                          <HiBriefcase
                            size={18}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#642E60]
                            "
                          />

                          <input
                            type="text"
                            name="job"
                            value={form.job}
                            onChange={handleChange}
                            placeholder="Plumber"
                            className="
                              h-14
                              w-full
                              rounded-2xl
                              border
                              border-[#DCCFE2]
                              bg-[#FCFAFD]
                              pr-4
                              text-[15px]
                              text-[#352A37]
                              outline-none
                              transition-all
                              duration-300
                              placeholder:text-[#9A919F]
                              focus:border-[#642E60]
                              focus:bg-white
                              focus:ring-4
                              focus:ring-[#642E60]/10
                            "
                            style={{
                              paddingLeft: "40px",
                            }}
                          />
                        </div>

                        {errors.job && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.job}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        RESUME UPLOAD
                    ================================================= */}

                    <div
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      <label
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-[#452D2D]
                        "
                        style={{
                          marginLeft: "5px",
                          marginBottom: "7px",
                        }}
                      >
                        Upload Resume *
                      </label>

                      <label
                        className="
                          group
                          relative
                          flex
                          cursor-pointer
                          items-center
                          justify-between
                          rounded-2xl
                          border-2
                          border-dashed
                          border-[#C9B7D3]
                          bg-gradient-to-r
                          from-[#FCF9FD]
                          via-[#FAF5FC]
                          to-[#F5EDF9]
                          px-5
                          py-5
                          transition-all
                          duration-300
                          hover:border-[#642E60]
                          hover:bg-[#F7F0FA]
                          hover:shadow-[0_12px_30px_rgba(91,46,145,0.08)]
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-4
                          "
                          style={{
                            padding: "5px",
                          }}
                        >
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#642E60]/10
                              text-[#642E60]
                              transition-all
                              duration-300
                              group-hover:bg-gradient-to-br
                              group-hover:from-[#642E60]
                              group-hover:to-[#5B2E91]
                              group-hover:text-white
                            "
                          >
                            <HiArrowUpTray size={22} />
                          </div>

                          <div>
                            <p
                              className="
                                max-w-[260px]
                                truncate
                                font-semibold
                                text-[#452D2D]
                              "
                            >
                              {form.resume
                                ? form.resume.name
                                : "Upload Your Resume"}
                            </p>

                            <p className="mt-1 text-sm text-[#776E7C]">
                              PDF, DOC or DOCX (Maximum 5MB)
                            </p>
                          </div>
                        </div>

                        <span
                          className="
                            hidden
                            rounded-full
                            bg-gradient-to-r
                            from-[#642E60]
                            to-[#5B2E91]
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_8px_20px_rgba(91,46,145,0.18)]
                            transition-all
                            duration-300
                            group-hover:shadow-[0_10px_25px_rgba(91,46,145,0.28)]
                            md:block
                          "
                          style={{
                            padding: "8px 16px",
                            marginRight: "5px",
                          }}
                        >
                          Browse
                        </span>

                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>

                      {errors.resume && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.resume}
                        </p>
                      )}
                    </div>

                    {/* =================================================
                        MESSAGE
                    ================================================= */}

                    <div
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      <label
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-[#452D2D]
                        "
                        style={{
                          marginLeft: "5px",
                          marginBottom: "7px",
                        }}
                      >
                        Message (Optional)
                      </label>

                      <div className="relative">
                        <HiChatBubbleLeftRight
                          size={18}
                          className="
                            absolute
                            left-4
                            top-5
                            text-[#642E60]
                          "
                        />

                        <textarea
                          rows={5}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about yourself..."
                          className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-[#DCCFE2]
                            bg-[#FCFAFD]
                            pr-4
                            text-[15px]
                            leading-7
                            text-[#352A37]
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-[#9A919F]
                            focus:border-[#5B2E91]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-[#5B2E91]/10
                          "
                          style={{
                            paddingLeft: "40px",
                            paddingTop: "15px",
                          }}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        SUBMIT BUTTON
                    ================================================= */}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="
                          group
                          relative
                          flex
                          h-14
                          w-full
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#C6A15B]/40
                          bg-gradient-to-r
                          from-[#642E60]
                          via-[#5B2E91]
                          to-[#70428C]
                          font-semibold
                          text-white
                          shadow-[0_15px_35px_rgba(91,46,145,0.24)]
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:shadow-[0_22px_45px_rgba(91,46,145,0.32)]
                          active:scale-[0.98]
                          disabled:cursor-not-allowed
                          disabled:opacity-70
                        "
                      >
                        {/* Animated Shine */}

                        <span
                          className="
                            absolute
                            left-[-130%]
                            top-0
                            h-full
                            w-[40%]
                            -skew-x-12
                            bg-gradient-to-r
                            from-transparent
                            via-white/30
                            to-transparent
                            transition-all
                            duration-700
                            ease-out
                            group-hover:left-[140%]
                          "
                        />

                        {/* Gold Accent Glow */}

                        <span
                          className="
                            absolute
                            inset-0
                            rounded-2xl
                            bg-[#C6A15B]/10
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        {loading ? (
                          <div className="relative z-10 flex items-center gap-3">
                            <div
                              className="
                                h-5
                                w-5
                                animate-spin
                                rounded-full
                                border-2
                                border-white
                                border-t-transparent
                              "
                            />

                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <span
                            className="
                              relative
                              z-10
                              flex
                              items-center
                              gap-2
                              tracking-wide
                            "
                          >
                            Submit Application

                            <span
                              className="
                                text-[#E7D5A8]
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            >
                              →
                            </span>
                          </span>
                        )}
                      </button>
                    </div>

                    {/* =================================================
                        TRUST NOTE
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        pt-1
                        text-center
                        text-[11px]
                        text-[#817786]
                      "
                    >
                      <HiShieldCheck className="text-[14px] text-[#642E60]" />

                      Your information is handled securely and
                      confidentially.
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}