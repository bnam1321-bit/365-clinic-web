import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://365med.co.kr"),
  title: {
    default: "365내과연합의원 - 임학역 3번 출구 앞 30m",
    template: "%s | 365내과연합의원",
  },
  description: "인천 계양구 임학역 3번 출구 앞 365내과연합의원. 대학병원 출신 전문의 3인 진료, 5대암 종합건강검진, 위·대장내시경, 초음파센터, 만성질환, 통증치료, 공휴일 진료.",
  keywords: [
    "365내과연합의원",
    "365내과의원",
    "계양구 내과",
    "임학역 내과",
    "계양구 건강검진",
    "임학역 건강검진",
    "계양구 내시경",
    "임학역 내시경",
    "계양구 초음파",
    "계양구 공휴일 진료 내과",
    "임학역 공휴일 병원",
  ],
  authors: [{ name: "365내과연합의원" }],
  creator: "365내과연합의원",
  alternates: {
    canonical: "https://365med.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://365med.co.kr",
    siteName: "365내과연합의원",
    title: "365내과연합의원 - 임학역 3번 출구 앞 30m",
    description: "인천 계양구 임학역 앞 365내과연합의원. 대학병원 출신 전문의 3인 진료, 5대암 종합건강검진, 위·대장내시경, 초음파센터, 공휴일 진료.",
    images: [
      {
        url: "/images/clinic_main.jpg",
        width: 1200,
        height: 630,
        alt: "365내과연합의원",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "7bad7d45390bcf329427f789e6cbbc912cf105ec",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "365내과연합의원",
    "image": "https://365med.co.kr/images/clinic_main.jpg",
    "@id": "https://365med.co.kr",
    "url": "https://365med.co.kr",
    "telephone": "032-542-3659",
    "faxNumber": "032-542-3655",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "장제로 867 상우메디칼빌딩 3층",
      "addressLocality": "계양구",
      "addressRegion": "인천광역시",
      "postalCode": "21040",
      "addressCountry": "KR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "PublicHolidays",
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  };

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="7bad7d45390bcf329427f789e6cbbc912cf105ec" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
