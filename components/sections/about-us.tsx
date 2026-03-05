import React from 'react';
import Image from 'next/image';
import { Award, Users, Target, Sparkles } from 'lucide-react';

export const AboutUs: React.FC = () => {
    return (
        <section id="sobre-nos" className="py-20 md:py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="relative order-2 lg:order-1 hidden lg:block">
                        <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-white/10"></div>
                        <div className="relative z-10 p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/20 h-[600px]">
                            <Image
                                src="/sobre-nos.webp"
                                alt="Equipe técnica 3G Customs Sorocaba"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-white/10"></div>
                    </div>

                    <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
                        <div className="text-center md:text-left">
                            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D40000] mb-4 md:mb-5">Líder em Customização Automotiva</p>
                            <h2 className="text-3xl md:text-5xl font-black chrome-text uppercase tracking-tighter leading-tight mb-6 md:mb-8">
                                Customização, PPF e Películas: Excelência em Cada Detalhe
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8">
                                Localizada estrategicamente no Wanel Ville, em Sorocaba, a 3G Customs nasceu para transformar veículos em verdadeiras obras de arte. Somos um ateliê de customização onde cada projeto é tratado com exclusividade absoluta em Sorocaba/SP.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                            <div className="space-y-3 md:space-y-4 group">
                                <Award size={28} className="text-white/80 group-hover:chrome-text transition-all md:w-8 md:h-8" />
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Qualidade Premium</h4>
                                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">Materiais importados para garantir durabilidade e acabamento impecável em Sorocaba.</p>
                            </div>
                            <div className="space-y-3 md:space-y-4 group">
                                <Users size={28} className="text-white/80 group-hover:chrome-text transition-all md:w-8 md:h-8" />
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Time Especialista</h4>
                                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">Técnicos certificados e treinados para o mercado de luxo automobilístico.</p>
                            </div>
                            <div className="space-y-3 md:space-y-4 group">
                                <Target size={28} className="text-white/80 group-hover:chrome-text transition-all md:w-8 md:h-8" />
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Foco no Detalhe</h4>
                                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">A perfeição está nos detalhes. Do corte do PPF à vitrificação final, nada passa despercebido.</p>
                            </div>
                            <div className="space-y-3 md:space-y-4 group">
                                <Sparkles size={28} className="text-white/80 group-hover:chrome-text transition-all md:w-8 md:h-8" />
                                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Exclusividade</h4>
                                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">Soluções personalizadas que refletem a personalidade de cada cliente em Sorocaba.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
