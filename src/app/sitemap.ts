import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://365med.co.kr";
    const lastModified = new Date();

    const routes = [
        "",
        "/about",
        "/checkup",
        "/endoscopy",
        "/ultrasound",
        "/clinic",
        "/pain",
        "/guide",
        "/notice",
        "/services",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
    }));
}
