import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokepidaman.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: '_2M7aIipRYBOnrewppHKZarAfLj-t2WuEjJCdxLgg_0',
        yandex: '9f9903212bba70bb',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "logo": "https://bokepidaman.pages.dev/favicon.ico",
        "url": "https://bokepidaman.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepidaman.pages.dev"
            },
            "foundingDate":"2024-01-26"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepidaman.pages.dev",
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepidaman.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
