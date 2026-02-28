"use client";

import React, { useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { galleryProjects, INSTAGRAM_URL } from '@/lib/constants';

interface Project {
    url: string;
    title: string;
    car: string;
    isPriority?: boolean;
}

const ProjectCard: React.FC<Project> = ({ url, title, car, isPriority }) => (
    <div className="snap-center shrink-0 w-[280px] md:w-[380px] aspect-[3/4] relative group overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

        <Image
            src={url}
            alt={title}
            fill
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
        />

        <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-700 z-20"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            {car && (
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-3 block overflow-hidden">
                    <span className="inline-block transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">{car}</span>
                </p>
            )}
            <h4 className="text-lg md:text-2xl font-black chrome-text uppercase tracking-tight leading-none mb-6">
                {title}
            </h4>
            <div className="w-10 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-white/40 transition-all duration-1000"></div>
        </div>
    </div>
);

export const Gallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const move = clientWidth * 0.75;

            if (direction === 'right') {
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;
                if (isAtEnd) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft + move, behavior: 'smooth' });
                }
            } else {
                const isAtStart = scrollLeft <= 50;
                if (isAtStart) {
                    scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft - move, behavior: 'smooth' });
                }
            }
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 4500);
        return () => clearInterval(interval);
    }, [scroll]);

    return (
        <section id="galeria" className="py-24 md:py-32 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center md:text-left">
                <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-gray-500 mb-4 md:mb-5">Portfólio 3G Customs</p>
                <h2 className="text-3xl md:text-6xl font-black chrome-text uppercase tracking-tighter">Estética Automotiva de Luxo</h2>
            </div>

            <div className="relative group/gallery">
                <div className="hidden md:block">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-16 h-16 chrome-button flex items-center justify-center rounded-full group/btn z-40 opacity-0 group-hover/gallery:opacity-100 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={32} className="text-black group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-16 h-16 chrome-button flex items-center justify-center rounded-full group/btn z-40 opacity-0 group-hover/gallery:opacity-100 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                        aria-label="Próximo"
                    >
                        <ChevronRight size={32} className="text-black group-hover/btn:scale-110 transition-transform" />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 md:gap-8 px-6 md:px-[calc((100vw-1280px)/2)] scrollbar-hide snap-x snap-mandatory pb-12 scroll-smooth"
                >
                    {galleryProjects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} isPriority={idx === 0} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10 mt-8 md:mt-12">
                <div className="md:hidden flex gap-8">
                    <button
                        onClick={() => scroll('left')}
                        className="w-16 h-16 chrome-button flex items-center justify-center rounded-full active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                        aria-label="Scroll Esquerda"
                    >
                        <ChevronLeft size={28} className="text-black" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-16 h-16 chrome-button flex items-center justify-center rounded-full active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                        aria-label="Scroll Direita"
                    >
                        <ChevronRight size={28} className="text-black" />
                    </button>
                </div>

                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    className="chrome-button px-12 py-5 font-black text-xs tracking-[0.3em] uppercase rounded-none transition-all flex items-center gap-4 group w-full md:w-auto text-center justify-center"
                >
                    <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                    Siga no Instagram
                </a>
            </div>
        </section>
    );
};
