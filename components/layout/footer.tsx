"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, MapPin, Phone, Clock, Plus, Minus, Music2 } from 'lucide-react';
import { faqData, LOGO_URL, WHATSAPP_LINK, CONTACT_PHONE, INSTAGRAM_URL } from '@/lib/constants';

const FAQAccordionItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    showMap?: boolean;
}> = ({ question, answer, isOpen, onClick, showMap }) => {
    return (
        <div
            className="border-b border-white/5 py-4 md:py-6"
            itemProp="mainEntity"
            itemScope
            itemType="https://schema.org/Question"
        >
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left focus:outline-none group py-2"
                aria-expanded={isOpen}
            >
                <h3 itemProp="name" className={`text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {question}
                </h3>
                <span className="text-gray-500 shrink-0">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                </span>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0'}`}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
            >
                <div className="pl-4 md:pl-6 border-l border-white/10">
                    <p itemProp="text" className="text-gray-500 text-[11px] md:text-sm leading-relaxed font-light mb-4 md:mb-6">
                        {answer}
                    </p>
                    {showMap && isOpen && (
                        <div className="w-full h-[180px] md:h-[250px] bg-white/5 overflow-hidden animate-fade-in grayscale invert opacity-70 hover:opacity-100 transition-opacity rounded-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1843236779435!2d-47.50296712373023!3d-23.490159478809964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f591147a7b87%3A0xc6a87c10b271d293!2sAv.%20Paulo%20Emanuel%20de%20Almeida%2C%20590%20-%20Vila%20Bar%C3%A3o%2C%20Sorocaba%20-%20SP%2C%2018053-505!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Mapa 3G Customs Sorocaba"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Footer: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <footer id="contato" className="bg-[#000000] border-t border-white/5" itemScope itemType="https://schema.org/AutoRepair">
            <div
                className="bg-[#050505] py-16 md:py-24 border-b border-white/5"
            >
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-xl md:text-3xl font-black chrome-text uppercase tracking-tighter mb-8 md:mb-12 text-center">Dúvidas Frequentes sobre Estética Automotiva em Sorocaba</h2>
                    <div className="space-y-1">
                        {faqData.map((faq, index) => (
                            <FAQAccordionItem
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                showMap={faq.map}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12">
                <div className="flex flex-col items-center justify-center mb-20 md:mb-24">
                    <Image src={LOGO_URL} alt="Logo 3G Customs Sorocaba" width={160} height={64} className="h-12 md:h-16 w-auto brightness-110 mb-8" itemProp="image" />
                    <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed text-center font-light max-w-lg uppercase tracking-[0.3em] md:tracking-[0.4em]" itemProp="description">
                        Especialistas em proteção e estética automotiva de alto padrão em Sorocaba/SP. Referência no bairro Wanel Ville.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 items-start">
                    <div className="flex flex-col items-center md:items-start space-y-8 bg-white/5 p-8 md:p-10 border border-white/5 group hover:border-white/20 transition-all">
                        <div className="flex items-center space-x-4">
                            <MapPin size={24} className="text-gray-400 group-hover:chrome-text transition-colors" />
                            <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-gray-400">Localização em Sorocaba</h4>
                        </div>
                        <div className="space-y-4 text-center md:text-left" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">
                                <span itemProp="streetAddress">Av. Paulo Emanuel de Almeida, 590</span><br />
                                <span itemProp="addressLocality">Wanel Ville, Sorocaba</span> - <span itemProp="addressRegion">SP</span><br />
                                CEP: <span itemProp="postalCode">18053-505</span>
                            </p>
                            <a
                                href="https://maps.app.goo.gl/YourMapLinkHere"
                                target="_blank"
                                className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all"
                            >
                                Ver no Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start space-y-8 bg-white/5 p-8 md:p-10 border border-white/5 group hover:border-white/20 transition-all">
                        <div className="flex items-center space-x-4">
                            <Phone size={24} className="text-gray-400 group-hover:chrome-text transition-colors" />
                            <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-gray-400">Contato Personalizado</h4>
                        </div>
                        <div className="space-y-6 text-center md:text-left w-full">
                            <div className="group/item">
                                <p className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">WhatsApp</p>
                                <a href={WHATSAPP_LINK} target="_blank" className="text-gray-400 text-sm md:text-base font-bold tracking-widest hover:text-white transition-colors" itemProp="telephone">
                                    {CONTACT_PHONE}
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start gap-4 pt-2">
                                <a href={INSTAGRAM_URL} target="_blank" className="p-3 border border-white/10 hover:border-white/40 transition-all group/icon" aria-label="Instagram">
                                    <Instagram size={20} className="text-gray-500 group-hover/icon:text-white" />
                                </a>
                                <a href="https://tiktok.com/@3gcustoms" target="_blank" className="p-3 border border-white/10 hover:border-white/40 transition-all group/icon" aria-label="TikTok">
                                    <Music2 size={20} className="text-gray-500 group-hover/icon:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start space-y-8 bg-white/5 p-8 md:p-10 border border-white/5 group hover:border-white/20 transition-all">
                        <div className="flex items-center space-x-4">
                            <Clock size={24} className="text-gray-400 group-hover:chrome-text transition-colors" />
                            <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-gray-400">Horário de Atendimento</h4>
                        </div>
                        <div className="space-y-4 text-center md:text-left w-full">
                            <div className="space-y-3">
                                <div className="flex justify-between md:block md:space-y-1">
                                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">Segunda a Sexta</span>
                                    <p className="text-gray-400 text-xs md:text-sm font-light">08:00h — 18:00h</p>
                                </div>
                                <div className="flex justify-between md:block md:space-y-1">
                                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">Sábado e Domingo</span>
                                    <p className="text-gray-400 text-xs md:text-sm font-light">Fechado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <p className="text-gray-600 text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">
                        © 2026 3G Customs Sorocaba. Projetos de Alta Estética Automotiva. Criado por <a href="https://www.upperagency.com.br/" target="_blank" className="font-extrabold px-1 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent hover:from-green-400 hover:to-green-300 transition-all duration-300 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">UPPER</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};
