import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { servicesData, servicesList, WHATSAPP_LINK } from '@/lib/constants';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppBtn } from '@/components/ui/whatsapp-btn';

// Função obrigatória para Static Site Generation (SSG)
export function generateStaticParams() {
    return servicesList.map((service) => ({
        service: service.slug,
    }));
}

// Generate Dinâmico de SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
    const { service: slug } = await params;
    const serviceData = servicesData[slug];

    if (!serviceData) {
        return { title: 'Serviço não encontrado' };
    }

    return {
        title: `${serviceData.title} em Sorocaba | 3G Customs`,
        description: `${serviceData.description} na 3G Customs, Wanel Ville, Sorocaba/SP`,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
    const { service: slug } = await params;
    const serviceData = servicesData[slug];

    if (!serviceData) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Header scrolled={true} />

            <main className="pt-24 pb-20">
                {/* Hero do Serviço */}
                <section className="py-20 bg-black text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-black chrome-text uppercase mb-6">
                        {serviceData.title} <span className="text-gray-400 text-2xl md:text-4xl block mt-2">em Sorocaba</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                        {serviceData.description}
                    </p>
                </section>

                {/* Vantagens/Benefícios */}
                <section className="py-16 bg-[#050505]">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-8 chrome-text uppercase tracking-widest text-center">Benefícios Exclusivos</h2>
                        <ul className="space-y-4">
                            {serviceData.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4 glass-card p-6">
                                    <div className="text-green-500 mt-1">✔</div>
                                    <p className="text-gray-300">{benefit}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FAQ do Serviço */}
                {serviceData.faq.length > 0 && (
                    <section className="py-16 bg-black">
                        <div className="max-w-4xl mx-auto px-6">
                            <h2 className="text-2xl font-bold mb-8 chrome-text uppercase tracking-widest text-center">Dúvidas Frequentes</h2>
                            <div className="space-y-6">
                                {serviceData.faq.map((faq, i) => (
                                    <div key={i} className="border border-white/10 p-6">
                                        <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                        <p className="text-gray-400">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-20 text-center px-6">
                    <h2 className="text-3xl font-black mb-8">Agende seu orçamento para {serviceData.name}</h2>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block chrome-button px-10 py-5 font-black uppercase tracking-widest text-sm">
                        Falar no WhatsApp
                    </a>
                </section>
            </main>

            <Footer />
            <WhatsAppBtn />
        </div>
    );
}
