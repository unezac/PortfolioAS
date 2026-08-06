import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/vanguard/LanguageSwitcher";
import "./globals.css";
const baseUrl = "https://abdellahselmani.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Abdellah Selmani - AI Engineer & Systems Builder",
  description:
    "AI engineer building practical systems around backend services, automation, and event-driven architecture. Current focus: MoneyBott.",
  openGraph: {
    title: "Abdellah Selmani - AI Engineer & Systems Builder",
    description:
      "AI engineer building practical systems around backend services, automation, and event-driven architecture.",
    url: baseUrl,
    siteName: "Abdellah Selmani",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellah Selmani - AI Engineer & Systems Builder",
    description:
      "AI engineer building practical systems around backend services, automation, and event-driven architecture.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdellah Selmani",
              givenName: "Abdellah",
              familyName: "Selmani",
              jobTitle: "AI Engineer & Systems Builder",
              email: "selmaniabde78@gmail.com",
              url: baseUrl,
              sameAs: [
                "https://github.com/unezac",
                "https://linkedin.com/in/abdellahselmani",
              ],
              knowsAbout: [
                { "@type": "Thing", name: "Artificial Intelligence" },
                { "@type": "Thing", name: "Event-Driven Architecture" },
                { "@type": "Thing", name: "Autonomous Systems" },
                { "@type": "Thing", name: "Backend Engineering" },
                { "@type": "Thing", name: "Trading Systems" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "MoneyBott",
              description:
                "Experimental autonomous trading platform built around event-driven execution, governance checkpoints, and structured observability.",
              keywords: ["trading", "AI", "event-driven", "governance", "FastAPI", "Redis"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Vanguard 4-Layer Background Architecture */}
        <div className="layer-ambient" aria-hidden="true"></div>
        <div className="layer-noise" aria-hidden="true"></div>
        <div className="layer-grid" aria-hidden="true"></div>
        
        {/* Main Content */}
        <LanguageProvider>
          <LanguageSwitcher />
          <main className="relative z-0">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
