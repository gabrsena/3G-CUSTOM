import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// Futuro: gerar params baseados nos posts
export function generateStaticParams() {
    return [];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Por enquanto, tudo dá not found, pois não temos db de posts
    notFound();

    return (
        <div className="min-h-screen flex flex-col">
            <Header scrolled={true} />
            <main className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl font-black mb-8 chrome-text">Post: {slug}</h1>
            </main>
            <Footer />
        </div>
    );
}
