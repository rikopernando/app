import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { SITE } from "@/lib/site";
import { organizationSchema, websiteSchema, ldJson } from "@/lib/json-ld";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} — ${SITE.tagline}`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "SMP Negeri 1 Sumber Jaya",
    "SMPN 1 Sumber Jaya",
    "SMP Lampung Barat",
    "Sekolah SMP Sumber Jaya",
    "PPDB SMP 2026",
    "Kurikulum Merdeka",
    "NPSN 10803558",
  ],
  authors: [{ name: "SMP Negeri 1 Sumber Jaya" }],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.shortName,
    title: `${SITE.shortName} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} — ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(websiteSchema) }}
        />
      </head>
      <body className="bg-cream-50 text-ink antialiased">
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: { fontFamily: "var(--font-jakarta), sans-serif" },
          }}
        />
      </body>
    </html>
  );
}
