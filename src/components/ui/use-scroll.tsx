'use client';
import React from 'react';

export function useScroll(threshold: number) {
    const [scrolled, setScrolled] = React.useState(false);
    const ticking = React.useRef(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > threshold);
                    ticking.current = false;
                });
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return scrolled;
}
