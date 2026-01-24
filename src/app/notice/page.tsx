import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "커뮤니티 | 대한내과",
    description: "병원 공지사항 및 건강 정보.",
};

export default function Notice() {
    return (
        <div style={{ padding: "100px 0", textAlign: "center" }}>
            <div className="container">
                <h1>커뮤니티</h1>
                <p style={{ marginTop: "20px", color: "#666" }}>준비 중인 페이지입니다.</p>
            </div>
        </div>
    );
}
