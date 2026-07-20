"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    const { theme } = useContext(ThemeContext);

    return <>
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div
                    className={`absolute top-0 z-[-2] h-screen w-screen ${theme === "dark"
                        ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                        : "bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
                        }`}
                />
            </div>

            <div className={`container mx-auto px-8 ${theme}`}>
                {children}
            </div>
        </div>
    </>
}

export default Container