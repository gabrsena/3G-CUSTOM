"use client";

import React, { useRef } from 'react';
import { Shield, Layers, Sparkles, Cog, Hammer, Palette, Speaker, ChevronLeft, ChevronRight } from 'lucide-react';
import { servicesList, WHATSAPP_LINK } from '@/lib/constants';

const getIcon = (name: string) => {
    const props = { size: 36, className: "md:w-11 md:h-11", strokeWidth: 1 };
    switch (name) {
        case 'Shield': return <Shield {...props} />;
        case 'Layers': return <Layers {...props} />;
        case 'Sparkles': return <Sparkles {...props} />;
        case 'Cog': return <Cog {...props} />;
        case 'Hammer': return <Hammer {...props} />;
        case 'Palette': return <Palette {...props} />;
        case 'Speaker': return <Speaker {...props} />;
        default: return <Shield {...props} />;
    }
};

export const Services: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;

            if (direction === 'right') {
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
                if (isAtEnd) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
                }
            } else {
                const isAtStart = scrollLeft <= 10;
                if (isAtStart) {
                    scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section id="serviços" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-gray-500 mb-4 md:mb-5">Especialistas em Estética Automotiva de Luxo</p>
                        <h2 className="text-3xl md:text-6xl font-black chrome-text uppercase tracking-tighter">Serviços de Alta Performance e Customização</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 chrome-button rounded-sm group active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            aria-label="Scroll Esquerda"
                        >
                            <ChevronLeft size={24} className="text-black" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 chrome-button rounded-sm group active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            aria-label="Scroll Direita"
                        >
                            <ChevronRight size={24} className="text-black" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 md:gap-8 pb-10 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                >
                    {servicesList.map((service, index) => (
                        <div key={index} className="snap-center relative p-[1px] group transition-all duration-700 overflow-hidden rounded-none w-[85vw] min-w-[85vw] md:w-[380px] md:min-w-[380px] flex-shrink-0 block">
                            <a href={service.href} className="absolute inset-0 z-10 w-full h-full"><span className="sr-only">Ver {service.title}</span></a>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-30 md:opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative h-full glass-card p-6 md:p-12 bg-[#050505] group-hover:bg-[#0a0a0a] transition-all duration-700 flex flex-col pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>

                                <div className="text-gray-400 mb-6 md:mb-10 chrome-text inline-block transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                                    {getIcon(service.iconName)}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight uppercase group-hover:chrome-text transition-colors duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-8 md:mt-10 opacity-100 md:opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-0 transition-all duration-700 pointer-events-auto z-20">
                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase border-b border-white/40 hover:border-white pb-1 hover:text-white transition-all cursor-pointer">
                                        Ver Serviço
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden flex justify-center gap-8 mt-4">
                    <button onClick={() => scroll('left')} className="p-4 chrome-button rounded-full active:scale-95 shadow-xl"><ChevronLeft size={20} className="text-black" /></button>
                    <button onClick={() => scroll('right')} className="p-4 chrome-button rounded-full active:scale-95 shadow-xl"><ChevronRight size={20} className="text-black" /></button>
                </div>
            </div>
        </section>
    );
};
