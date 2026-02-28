"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HERO_BADGE_IMG } from '@/lib/constants';

export const Hero: React.FC = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [asyncVideoSrc, setAsyncVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        setAsyncVideoSrc("https://i.imgur.com/Vaz3k7h.mp4");
    }, []);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className={`absolute inset-0 z-0 transition-transform duration-[5000ms] cubic-bezier(0.16, 1, 0.3, 1) ${videoLoaded ? 'scale-100' : 'scale-110 md:scale-125'}`}>
                <Image
                    src="https://i.imgur.com/Vaz3k7h.jpg"
                    alt="3G Customs Sorocaba Wanel Ville"
                    fill
                    priority
                    quality={90}
                    // @ts-ignore
                    fetchPriority="high"
                    sizes="100vw"
                    className={`absolute inset-0 object-cover object-[20%_center] md:object-center transition-all duration-[2000ms] ${videoLoaded ? 'opacity-0 blur-2xl' : 'opacity-70 grayscale-[20%]'}`}
                />
                {asyncVideoSrc && (
                    <video
                        autoPlay muted loop playsInline
                        preload="metadata"
                        onPlaying={() => setVideoLoaded(true)}
                        poster="https://i.imgur.com/Vaz3k7h.jpg"
                        className={`absolute inset-0 w-full h-full object-cover object-[20%_center] md:object-center transition-opacity duration-[3000ms] cubic-bezier(0.4, 0, 0.2, 1) ${videoLoaded ? 'opacity-70 grayscale-[10%]' : 'opacity-0'}`}
                    >
                        <source src={asyncVideoSrc} type="video/mp4" />
                    </video>
                )}
            </div>

            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="flex flex-col items-center mb-6 md:mb-10 py-1">
                    <Image
                        src={HERO_BADGE_IMG}
                        alt="3G Customs Badge"
                        width={384}
                        height={384}
                        priority
                        className="w-64 md:w-96 h-auto mb-6 animate-reveal drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        style={{ animationDelay: '0.1s' }}
                    />
                    <span className="text-[10px] md:text-xs font-extrabold tracking-[0.4em] md:tracking-[0.5em] uppercase chrome-text border-b border-white/20 pb-3 block animate-reveal" style={{ animationDelay: '0.3s' }}>
                        Referência em Personalização e Proteção de Luxo em Sorocaba/SP
                    </span>
                </div>

                <h1 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 leading-[1.1] tracking-tighter">
                    <div className="overflow-hidden py-2">
                        <span className="chrome-text block drop-shadow-2xl animate-reveal" style={{ animationDelay: '0.6s' }}>Excelência em PPF e Envelopamento de Luxo</span>
                    </div>
                </h1>

                <div className="max-w-2xl mx-auto mb-10 md:mb-16">
                    <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed animate-fade-scale" style={{ animationDelay: '1s' }}>
                        Onde o cuidado artesanal encontra as tecnologias mais avançadas de PPF e personalização.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                    <a href="/#serviços" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 chrome-button font-black text-xs md:text-sm tracking-[0.25em] uppercase rounded-none transition-all text-center">
                        NOSSOS SERVIÇOS
                    </a>
                </div>
            </div>
        </section>
    );
};
