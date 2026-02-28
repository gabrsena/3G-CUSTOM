import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: 'Blog | 3G Customs',
    description: 'Dicas e novidades sobre estética automotiva, PPF e envelopamento em Sorocaba.',
};

export default function BlogIndex() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header scrolled={true} />
            <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <h1 className="text-4xl md:text-6xl font-black chrome-text uppercase mb-6">Blog 3G Customs</h1>
                <p className="text-gray-400 text-lg mb-12">Fique por dentro das novidades do mundo da estética automotiva de alto padrão.</p>

                <div className="py-20 text-center text-gray-500 border border-white/5 bg-white/5 glass-card">
                    <p>Nenhum artigo publicado ainda. Em breve teremos novidades!</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
