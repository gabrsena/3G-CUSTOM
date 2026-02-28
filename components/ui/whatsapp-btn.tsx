"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export const WhatsAppBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar botão a partir de 300px de scroll
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Checar estado inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            aria-label="WhatsApp 3G Customs"
            className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        >
            <div className="relative group">
                <div className="absolute inset-0 rounded-full border border-white/30 animate-[pulse-premium-outer_3s_infinite_cubic-bezier(0.4,0,0.2,1)]"></div>
                <div className="chrome-border rounded-full p-[2px] shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <div className="chrome-border-inner rounded-full p-4 md:p-5 flex items-center justify-center bg-black group-hover:bg-white/5 transition-colors">
                        <MessageCircle size={28} className="text-white md:w-8 md:h-8" />
                    </div>
                </div>
            </div>
        </a>
    );
};
