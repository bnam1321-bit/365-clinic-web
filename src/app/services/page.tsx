import styles from "./page.module.css";
import { Activity, ShieldCheck, Zap, Syringe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "진료 안내 | 대한내과",
    description: "건강검진, 만성질환 관리, 수액 클리닉, 예방접종 안내.",
};

export default function Services() {
    const services = [
        {
            id: "checkup",
            title: "건강검진 센터",
            description: "정확한 조기 진단을 위한 정밀 종합 검진",
            icon: <Activity size={40} />,
            items: ["공단 일반건강검진", "5대 암 검진 (위, 대장, 간, 유방, 자궁경부)", "초음파 클리닉", "채용 신체검사"],
        },
        {
            id: "chronic",
            title: "만성질환 클리닉",
            description: "합병증 예방을 위한 체계적인 관리",
            icon: <ShieldCheck size={40} />,
            items: ["고혈압 / 당뇨병 / 고지혈증", "갑상선 질환", "골다공증", "호흡기 및 알레르기 질환"],
        },
        {
            id: "iv",
            title: "수액 / 영양 클리닉",
            description: "지친 몸에 활력을 불어넣는 1:1 맞춤 수액",
            icon: <Zap size={40} />,
            items: ["만성피로 개선", "면역력 강화", "숙취 해소", "비타민 D 주사"],
        },
        {
            id: "vaccine",
            title: "예방접종",
            description: "건강한 생활을 위한 필수 예방접종",
            icon: <Syringe size={40} />,
            items: ["독감 (인플루엔자)", "대상포진", "폐렴구균", "A형/B형 간염"],
        },
    ];

    return (
        <div className={styles.services}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>진료 안내</h1>
                    <p className={styles.pageSubtitle}>대한내과의 주요 진료 과목을 안내해 드립니다.</p>
                </div>
            </section>

            <section className={styles.serviceList}>
                <div className={`container ${styles.grid}`}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <ul className={styles.itemList}>
                                    {service.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
