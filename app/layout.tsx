import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "PPF e Envelopamento Premium em Sorocaba | 3G Customs",
    description: "Especialistas em PPF, Envelopamento Premium, Insulfilm e Customização Automotiva em Sorocaba. Wanel Ville, Sorocaba/SP.",
    keywords: "PPF Sorocaba, envelopamento Sorocaba, insulfilm Sorocaba, customização automotiva Sorocaba, 3G Customs",
    icons: {
        icon: [
            { url: 'https://i.imgur.com/iIfRz7g.png' },
        ],
        apple: [
            { url: 'https://i.imgur.com/iIfRz7g.png' },
        ],
    },
    other: {
        "geo.region": "BR-SP",
        "geo.placename": "Sorocaba",
        "geo.position": "-23.490159;-47.502967",
        "ICBM": "-23.490159, -47.502967",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Configuração JSON-LD
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "3G Customs",
            "url": "https://3gcustoms.com.br",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Paulo Emanuel de Almeida, 590",
                "addressLocality": "Sorocaba",
                "addressRegion": "SP",
                "postalCode": "18053-505",
                "addressCountry": "BR"
            },
            "telephone": "+55 15 97401-8037",
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Estética Automotiva",
            "provider": { "@type": "AutoRepair", "name": "3G Customs" },
            "areaServed": "Sorocaba",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços 3G Customs",
                "itemListElement": [
                    "PPF", "Envelopamento Premium", "Insulfilm",
                    "Customização", "Martelinho de Ouro", "Tapeçaria", "Multimídia"
                ]
            }
        }
    ];

    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${inter.className} bg-black text-white selection:bg-white/20 selection:text-black antialiased`}>
                {children}
                <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
                    {JSON.stringify(jsonLd)}
                </Script>
            </body>
        </html>
    );
}
