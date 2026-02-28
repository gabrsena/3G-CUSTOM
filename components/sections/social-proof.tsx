import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
    return (
        <section id="sobre" className="py-20 md:py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="flex space-x-2 md:space-x-3 mb-6 md:mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={20} fill="currentColor" className="chrome-text md:w-7 md:h-7" />
                    ))}
                </div>
                <h2 className="text-6xl md:text-9xl font-black mb-3 md:mb-4 chrome-text tracking-tighter">4.9</h2>
                <p className="text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-500 mb-12 md:mb-16">Avaliação no Google My Business</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full">
                    {[
                        { name: "Carlos M.", comment: "O PPF ficou impecável na 3G Customs. Trabalho de artista mesmo no Wanel Ville." },
                        { name: "Roberta S.", comment: "Melhor atendimento de Sorocaba e região. Profissionalismo em cada etapa." },
                        { name: "Guilherme F.", comment: "Minha Porsche parece que acabou de sair da fábrica. A estética superou tudo." }
                    ].map((review, i) => (
                        <div key={i} className="flex flex-col items-center p-4">
                            <p className="italic text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">"{review.comment}"</p>
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70">{review.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
