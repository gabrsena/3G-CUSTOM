"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Gallery } from '@/components/sections/gallery';
import { AboutUs } from '@/components/sections/about-us';
import { SocialProof } from '@/components/sections/social-proof';
import { Footer } from '@/components/layout/footer';
import { WhatsAppBtn } from '@/components/ui/whatsapp-btn';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <Services />
                <Gallery />
                <AboutUs />
                <SocialProof />
            </main>
            <Footer />
            <WhatsAppBtn />
        </div>
    );
}
