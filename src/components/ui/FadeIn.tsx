"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
    className?: string; // Add className prop
}

export default function FadeIn({ children, delay = 0, direction = "up", fullWidth = false, className = "" }: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    const initial = { opacity: 0, ...directions[direction] };
    const whileInView = { opacity: 1, x: 0, y: 0 };

    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
