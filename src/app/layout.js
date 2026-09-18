
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import ScamAlertPopup from "@/components/ScamAlertPopup";

export const metadata = {
  metadataBase: new URL("https://kbfmgroup.ca/"),

  title: "Security & Facility Services | K.B.F.M. Global",

  description:
    "K.B.F.M. Global Services provides dependable security, caregiving, cleaning, janitorial, and facility maintenance services throughout the Northwest Territories.",

  keywords: [
    "Security Services",
    "Caregiving Services",
    "Cleaning Services",
    "Janitorial Services",
    "Facility Maintenance",
  ],

  authors: [
    {
      name: "K.B.F.M. Group of Companies Professional Services Ltd.",
    },
  ],

  creator: "K.B.F.M. Group of Companies Professional Services Ltd.",

  publisher: "K.B.F.M. Group of Companies Professional Services Ltd.",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Security & Facility Services | K.B.F.M. Global",

    description:
      "Reliable security, caregiving, cleaning, janitorial, and facility maintenance services throughout the Northwest Territories.",

    url: "https://kbfmgroup.ca/",

    siteName: "K.B.F.M. Global Services",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/seo/kbfm-og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "K.B.F.M. Global Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Security & Facility Services | K.B.F.M. Global",

    description:
      "Reliable security, caregiving, cleaning, janitorial, and facility maintenance services throughout the Northwest Territories.",

    images: ["/seo/kbfm-og-image-v2.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Security, Caregiving, Cleaning & Facility Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
        />
      </head>

      <body>
        <Header />
        <ScamAlertPopup />

        {children}
      </body>
    </html>
  );
}

