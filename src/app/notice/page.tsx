"use client";

import { useState } from "react";
import styles from "./page.module.css";
import SplitHero from "@/components/ui/SplitHero";
import { FileText, Search, ShieldCheck, Info } from "lucide-react";

interface FeeItem {
    category: string;
    subCategory: string;
    name: string;
    detail?: string;
    price: string;
    note?: string;
}

const feeData: FeeItem[] = [
    // 1. 검사료 (검체, 내시경, 초음파)
    { category: "검사료", subCategory: "검체 검사", name: "독감 검사", price: "25,000 원" },
    { category: "검사료", subCategory: "검체 검사", name: "코로나 검사", price: "25,000 원" },
    { category: "검사료", subCategory: "검체 검사", name: "독감·코로나 동시 검사", price: "50,000 원" },

    { category: "검사료", subCategory: "내시경 검사", name: "위 수면관리료", price: "45,000 원" },
    { category: "검사료", subCategory: "내시경 검사", name: "대장 수면관리료 (일반)", price: "80,000 원" },
    { category: "검사료", subCategory: "내시경 검사", name: "대장 수면관리료 (치료/정밀)", price: "100,000 원" },

    { category: "검사료", subCategory: "초음파 검사", name: "갑상선 초음파", price: "40,000 원" },
    { category: "검사료", subCategory: "초음파 검사", name: "경동맥 초음파", price: "50,000 원" },
    { category: "검사료", subCategory: "초음파 검사", name: "복부 초음파", price: "50,000 원" },
    { category: "검사료", subCategory: "초음파 검사", name: "근골격 초음파", price: "100,000 원" },

    // 2. 예방 접종료
    { category: "예방접종", subCategory: "예방 접종료", name: "대상포진 (싱그릭스)", detail: "총 2회 접종", price: "250,000 원", note: "1회당" },
    { category: "예방접종", subCategory: "예방 접종료", name: "인플루엔자 - 독감 (3가)", price: "30,000 원" },
    { category: "예방접종", subCategory: "예방 접종료", name: "Tdap (아다셀)", detail: "파두풍·디프테리아·백일해", price: "50,000 원" },
    { category: "예방접종", subCategory: "예방 접종료", name: "폐렴구균 (프리베나20)", detail: "프리베나 20가", price: "150,000 원" },
    { category: "예방접종", subCategory: "예방 접종료", name: "A형 간염 (아박심)", price: "80,000 원" },
    { category: "예방접종", subCategory: "예방 접종료", name: "B형 간염 (유박스)", price: "30,000 원" },

    // 3. 치료료 (도수 & 증식)
    { category: "치료료", subCategory: "도수 치료", name: "도수치료", price: "50,000 원" },
    { category: "치료료", subCategory: "증식 치료", name: "인대증식 (사지관절)", price: "50,000 원 / 100,000 원" },
    { category: "치료료", subCategory: "증식 치료", name: "인대증식 (척추부위)", price: "50,000 원 / 100,000 원" },

    // 4. 주사료 (영양 주사 - 수액류 제외)
    { category: "주사료", subCategory: "영양 주사", name: "태반주사", price: "25,000 원" },
    { category: "주사료", subCategory: "영양 주사", name: "비타민D (주)", price: "30,000 원" },

    // 5. 제증명 수수료
    { category: "제증명 수수료", subCategory: "진단서", name: "일반 진단서", price: "20,000 원" },
    { category: "제증명 수수료", subCategory: "진단서", name: "영문 일반 진단서", price: "20,000 원" },
    { category: "제증명 수수료", subCategory: "진단서", name: "근로능력 평가용 진단서", price: "10,000 원" },
    { category: "제증명 수수료", subCategory: "진단서", name: "면허신청용 진단서", price: "35,000 원" },
    { category: "제증명 수수료", subCategory: "진단서", name: "요양원입소용 진단서", price: "35,000 원" },

    { category: "제증명 수수료", subCategory: "건강진단서 & 채용검사", name: "기숙사제출용 건강진단서", price: "35,000 원" },
    { category: "제증명 수수료", subCategory: "건강진단서 & 채용검사", name: "기숙사제출용 건강진단서 (흉부 엑스레이만)", price: "25,000 원" },
    { category: "제증명 수수료", subCategory: "건강진단서 & 채용검사", name: "마약검사 건강진단서", price: "25,000 원" },
    { category: "제증명 수수료", subCategory: "건강진단서 & 채용검사", name: "일반 채용 신체검사서", price: "30,000 원" },
    { category: "제증명 수수료", subCategory: "건강진단서 & 채용검사", name: "공무원 채용 신체검사서", price: "40,000 원" },

    { category: "제증명 수수료", subCategory: "확인서 & 사본 / 영상", name: "진료 (통원) 확인서", price: "3,000 원" },
    { category: "제증명 수수료", subCategory: "확인서 & 사본 / 영상", name: "진료기록 사본 (1-5매)", price: "1,000 원", note: "매당" },
    { category: "제증명 수수료", subCategory: "확인서 & 사본 / 영상", name: "진료기록 사본 (6매 이상)", price: "100 원", note: "매당" },
    { category: "제증명 수수료", subCategory: "확인서 & 사본 / 영상", name: "사본 재발급 (1장)", price: "1,000 원" },
    { category: "제증명 수수료", subCategory: "확인서 & 사본 / 영상", name: "진료기록 영상 (CD)", price: "10,000 원" },
];

const categories = ["전체", "검사료", "예방접종", "치료료", "주사료", "제증명 수수료"];

export default function NoticePage() {
    const [activeTab, setActiveTab] = useState("전체");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = feeData.filter((item) => {
        const matchesTab = activeTab === "전체" || item.category === activeTab;
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.detail && item.detail.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesTab && matchesSearch;
    });

    const groupedCategories = Array.from(new Set(filteredData.map((item) => item.category)));

    return (
        <main className={styles.container}>
            <SplitHero
                badge="NON-REIMBURSABLE FEES"
                title="비급여 진료비 안내"
                subtitle="의료법 제45조에 따라 365내과연합의원의 비급여 항목 및 제증명 수수료 금액을 고지합니다."
            />

            <div className={styles.noticeContent}>
                {/* Legal Banner */}
                <div className={styles.legalNoticeCard}>
                    <div className={styles.legalHeader}>
                        <Info size={22} className={styles.legalIcon} />
                        <h3>비급여 진료비 고지 안내</h3>
                    </div>
                    <p className={styles.legalText}>
                        · 의료법 제45조(비급여 진료비용 등의 고지) 및 동법 시행규칙 제42조의2 규정에 따라 본 원의 비급여 진료비용을 공지합니다.<br />
                        · 게시된 비급여 진료비용은 환자의 증상, 상태 및 진료 조건에 따라 변동될 수 있습니다.<br />
                        · 수액(영양주사 수액류) 항목은 제외된 안내표입니다.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className={styles.filterSection}>
                    <div className={styles.tabs}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.tabBtn} ${activeTab === cat ? styles.tabActive : ""}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="항목명 검색 (예: 싱그릭스, 수면, 진단서)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                {/* Tables List */}
                {filteredData.length === 0 ? (
                    <div className={styles.noResult}>
                        <FileText size={48} style={{ opacity: 0.3, marginBottom: "1rem" }} />
                        <p>검색 결과에 해당하는 비급여 항목이 없습니다.</p>
                    </div>
                ) : (
                    groupedCategories.map((cat) => {
                        const categoryItems = filteredData.filter((item) => item.category === cat);
                        
                        // Group items by subCategory inside this main category
                        const subCatMap = new Map<string, FeeItem[]>();
                        categoryItems.forEach((item) => {
                            if (!subCatMap.has(item.subCategory)) {
                                subCatMap.set(item.subCategory, []);
                            }
                            subCatMap.get(item.subCategory)!.push(item);
                        });
                        const subCatEntries = Array.from(subCatMap.entries());

                        return (
                            <div key={cat} className={styles.categorySection}>
                                <h3 className={styles.categoryTitle}>
                                    <ShieldCheck size={24} style={{ color: "var(--color-secondary)" }} />
                                    {cat}
                                    <span className={styles.categoryBadge}>{categoryItems.length}개 항목</span>
                                </h3>

                                <div className={styles.tableWrapper}>
                                    <table className={styles.feeTable}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: "25%", textAlign: "center" }}>세부 분류</th>
                                                <th style={{ width: "45%" }}>명칭 (항목명)</th>
                                                <th style={{ width: "30%", textAlign: "right" }}>비용 (비급여 진료비)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subCatEntries.map(([subCatName, items]) =>
                                                items.map((item, idx) => (
                                                    <tr key={`${subCatName}-${idx}`}>
                                                        {idx === 0 && (
                                                            <td
                                                                rowSpan={items.length}
                                                                className={styles.subCategoryCell}
                                                            >
                                                                {subCatName}
                                                            </td>
                                                        )}
                                                        <td>
                                                            <div className={styles.itemName}>{item.name}</div>
                                                            {item.detail && <div className={styles.itemSub}>{item.detail}</div>}
                                                        </td>
                                                        <td style={{ textAlign: "right" }}>
                                                            <span className={styles.priceTag}>{item.price}</span>
                                                            {item.note && <span className={styles.priceSub}>({item.note})</span>}
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    })
                )}

                {/* Table Footer Note */}
                <div className={styles.tableFooterNote}>
                    <p><strong>[참고사항]</strong></p>
                    <p>· 상기 금액은 원화(KRW) 기준이며 부가세 포함 금액입니다.</p>
                    <p>· 정확한 진료비 문의 및 기타 서류 안내는 병원 대표전화(032-542-3659)로 문의 주시면 친절히 안내해 드리겠습니다.</p>
                </div>
            </div>
        </main>
    );
}
