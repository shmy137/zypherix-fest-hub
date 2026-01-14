import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // if URL has hash like #rules
        if(hash) {
            const el = document.querySelector(hash);
            if(el) {
                // wait a bit so page renders
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 50);
                return;
            }
        }

        // normal route change
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname, hash]);

    return null;
}