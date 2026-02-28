"use client";

import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Menu, X, ArrowLeft } from 'lucide-react';
import { navItems, INSTAGRAM_URL, WHATSAPP_LINK } from '@/lib/constants';

interface HeaderProps {
    scrolled: boolean;
    showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, showBackButton = false }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
                    : 'py-5 bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center md:grid md:grid-cols-3">
                    <div className="flex justify-start">
                        {showBackButton && (
                            <a href="/" className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-[2px]">Voltar</span>
                            </a>
                        )}
                    </div>

                    <nav className="hidden md:flex items-center justify-center space-x-10 lg:space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[10px] font-bold text-gray-400 hover:text-white transition-all duration-300 tracking-[0.25em] uppercase relative group whitespace-nowrap"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex justify-end items-center">
                        <button
                            className="text-white p-2 hover:bg-white/5 rounded-full transition-all md:hidden z-[110]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                        >
                            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moveu para fora do corpo recortado do Header */}
            <div
                className={`fixed inset-0 h-screen w-screen bg-black/98 backdrop-blur-3xl z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
            >
                {navItems.map((item, idx) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`text-2xl font-light tracking-[0.3em] uppercase transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="chrome-text">{item.name}</span>
                    </a>
                ))}

                <div className={`pt-12 flex gap-8 transition-all duration-700 delay-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <a href={INSTAGRAM_URL} target="_blank" className="text-gray-500 hover:text-white" aria-label="Instagram"><Instagram size={24} /></a>
                    <a href={WHATSAPP_LINK} target="_blank" className="text-gray-500 hover:text-white" aria-label="WhatsApp"><MessageCircle size={24} /></a>
                </div>
            </div>
        </>
    );
};
