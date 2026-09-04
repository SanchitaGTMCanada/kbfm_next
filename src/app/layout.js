import "./globals.css";
import Header from "@/components/layout/Header/Header";

export const metadata = {
  metadataBase: new URL("https://kbfm-next.vercel.app/"),

  title: {
    default: "K.B.F.M. Global Services N.W.T. Ltd. | Serving the North",
    template: "%s | K.B.F.M. Global Services",
  },

  description:
    "K.B.F.M. Global Services N.W.T. Ltd. provides dependable security, caregiving, cleaning, janitorial, and facility support services throughout the Northwest Territories.",

  keywords: [
    "K.B.F.M. Global Services",
    "KBFM Global Services",
    "Security Services",
    "Private Security Services",
    "Caregiving Services",
    "Personal Support",
    "Cleaning Services",
    "Janitorial Services",
    "Facility Maintenance",
    "Facility Support",
    "Staffing Solutions",
    "Northern Services",
    "Northwest Territories",
    "Yellowknife Services",
    "Security Services Yellowknife",
    "Cleaning Services Yellowknife",
    "Caregiving Services Yellowknife",
    "Facility Maintenance Yellowknife",
  ],

  authors: [
    {
      name: "K.B.F.M. Global Services N.W.T. Ltd.",
    },
  ],

  creator: "K.B.F.M. Global Services N.W.T. Ltd.",

  publisher: "K.B.F.M. Global Services N.W.T. Ltd.",

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
    title: "K.B.F.M. Global Services N.W.T. Ltd.",

    description:
      "Reliable security, caregiving, cleaning, janitorial, and facility support services delivered throughout the Northwest Territories.",

    url: "https://kbfm-next.vercel.app/",

    siteName: "K.B.F.M. Global Services N.W.T. Ltd.",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/seo/kbfm-og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "K.B.F.M. Global Services N.W.T. Ltd.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "K.B.F.M. Global Services N.W.T. Ltd.",

    description:
      "Reliable security, caregiving, cleaning, janitorial, and facility support services throughout the Northwest Territories.",

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

        {children}
      </body>
    </html>
  );
}