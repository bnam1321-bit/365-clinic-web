import type { Metadata } from "next";
import SplitHero from "@/components/ui/SplitHero";

export const metadata: Metadata = {
    title: "커뮤니티 | 365내과연합의원",
    description: "병원 공지사항 및 건강 정보.",
};

export default function Notice() {
    return (
        <main>
            <SplitHero 
                badge="COMMUNITY"
                title="알림 마당"
                subtitle="365내과연합의원의 공지사항 및 새로운 소식을 알려드립니다."
            />
            <div style={{ padding: "8rem 0", textAlign: "center", backgroundColor: "white" }}>
                <div className="container">
                    <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-primary-dark)" }}>준비 중입니다</h2>
                    <p style={{ marginTop: "15px", color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>더욱 알찬 소식으로 찾아뵙겠습니다. 잠시만 기다려 주세요.</p>
                </div>
            </div>
        </main>
    );
}
