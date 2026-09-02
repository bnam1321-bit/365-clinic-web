import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "Yeti", // Naver Search Bot
                allow: "/",
            },
        ],
        sitemap: "https://365med.co.kr/sitemap.xml",
    };
}
