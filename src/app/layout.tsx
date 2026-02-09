import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "365내과연합의원 - 임학역 3번 출구",
  description: "인천 계양구 임학역 앞, 이현석/노영석/지재연 전문의 3인 진료, 대학병원급 건강검진 센터.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
