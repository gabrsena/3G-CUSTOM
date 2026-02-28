module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_PHONE",
    ()=>CONTACT_PHONE,
    "HERO_BADGE_IMG",
    ()=>HERO_BADGE_IMG,
    "INSTAGRAM_URL",
    ()=>INSTAGRAM_URL,
    "LOGO_URL",
    ()=>LOGO_URL,
    "WHATSAPP_LINK",
    ()=>WHATSAPP_LINK,
    "faqData",
    ()=>faqData,
    "galleryProjects",
    ()=>galleryProjects,
    "navItems",
    ()=>navItems,
    "servicesData",
    ()=>servicesData,
    "servicesList",
    ()=>servicesList
]);
const LOGO_URL = "https://i.imgur.com/6dX0dHL.png";
const INSTAGRAM_URL = "https://www.instagram.com/3g_customss/";
const WHATSAPP_LINK = "https://wa.me/5515974018037?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Vim%20atrav%C3%A9s%20do%20site%20da%203G%20Customs.";
const HERO_BADGE_IMG = "https://i.imgur.com/s2AO3y7.png";
const CONTACT_PHONE = "(15) 97401-8037";
const navItems = [
    {
        name: 'Home',
        href: '/#home'
    },
    {
        name: 'Serviços',
        href: '/#serviços'
    },
    {
        name: 'Galeria',
        href: '/#galeria'
    },
    {
        name: 'Sobre Nós',
        href: '/#sobre-nos'
    },
    {
        name: 'Contato',
        href: '/#contato'
    }
];
const servicesData = {
    "ppf": {
        name: "PPF",
        title: "PPF (Paint Protection Film)",
        description: "Proteção invisível de poliuretano que protege a pintura contra riscos e pedregulhos com propriedades de regeneração e auto-cura no Wanel Ville em Sorocaba.",
        iconName: "Shield",
        benefits: [
            "Proteção definitiva contra pedras e riscos",
            "Tecnologia regenerativa (auto-healing) com calor",
            "Brilho profundo equivalente à pintura original",
            "Preserva 100% da originalidade de fábrica",
            "Garantia estendida contra amarelamento e ressecamento"
        ],
        faq: [
            {
                q: "Qual a durabilidade do PPF aplicado pela 3G Customs em Sorocaba?",
                a: "A durabilidade média é de 5 a 10 anos, dependendo da linha de material escolhida e dos cuidados de manutenção."
            },
            {
                q: "O PPF altera a cor original do carro?",
                a: "Não. O filme transparente é 100% óptico e ressalta o brilho da pintura. Oferecemos também películas coloridas ou com efeito fosco (matte)."
            },
            {
                q: "Posso polir um carro com PPF?",
                a: "Apenas com produtos e técnicas específicas para poliuretano. Por conta da propriedade autorregenerativa, microrriscos somem sozinhos expostos ao sol."
            }
        ]
    },
    "envelopamento": {
        name: "Envelopamento Premium",
        title: "Envelopamento Premium",
        description: "Transformação estética completa com vinis importados mundiais. Acabamentos foscos, acetinados ou cores exclusivas.",
        iconName: "Layers",
        benefits: [
            "Mudança radical de cor sem desvalorizar o veículo",
            "Materiais importados certificados de altíssima durabilidade",
            "Processo de montagem e desmontagem artesanal (sem riscos de avarias)",
            "Reversibilidade completa a qualquer momento",
            "Acabamentos perfeitos de porta-malas e extremidades para visual de pintura"
        ],
        faq: [
            {
                q: "É necessário documentar a mudança de cor do envelopamento?",
                a: "Sim, caso envolva mais de 50% da área externa original do veículo em uma cor divergente da original."
            },
            {
                q: "Quais os tipos de acabamentos de envelopamento disponíveis na 3G Customs?",
                a: "Fosco (matte), brilhante intenso, acetinado (satin), metálico e ultra gloss."
            }
        ]
    },
    "insulfilm": {
        name: "Insulfilm Premium",
        title: "Películas (Insulfilm)",
        description: "Proteção térmica de última geração cerâmica. Redução de calor e raios UV sem comprometer a visibilidade.",
        iconName: "Sparkles",
        benefits: [
            "Retenção de até 99% dos raios UV e alta retenção de calor (IR)",
            "Tecnologia Nano Cerâmica e Carbono (não desbota nem fica roxo)",
            "Mantém excelente visibilidade noturna de dentro para fora",
            "Aumento da eficiência do ar condicionado",
            "Maior segurança antivandalismo dependendo da película"
        ],
        faq: [
            {
                q: "As películas da 3G Customs ficam roxas com o tempo?",
                a: "Não, utilizamos apenas películas em base de Nano Cerâmica ou Carbono Premium, garantindo durabilidade extrema e eficácia térmica sem desbotar."
            },
            {
                q: "Posso instalar película no vidro parabrisa?",
                a: "Sim, existem linhas transparentes e de tom leve que protegem contra calor extremo sem prejudicar a visibilidade noturna nem quebrar as regras de trânsito."
            }
        ]
    },
    "customizacao": {
        name: "Customização Automotiva",
        title: "Customização",
        description: "Engenharia de alto padrão para elevar a estética exclusiva do seu veículo com total precisão.",
        iconName: "Cog",
        benefits: [
            "Estilização Chrome Delete (remoção de cromados)",
            "Pintura e personalização de pinças de freio",
            "Emblemas, frisos e rodas customizados",
            "Soluções em harmonia com as linhas do carro"
        ],
        faq: [
            {
                q: "O que é Chrome Delete?",
                a: "É a aplicação detalhada de vinil sobre partes cromadas do veículo como logos e guarnições das portas, deixando uma aparência all-black ou personalizada."
            }
        ]
    },
    "martelinho-de-ouro": {
        name: "Martelinho de Ouro",
        title: "Martelinho de Ouro",
        description: "Remoção técnica de amassados preservando a originalidade da pintura de fábrica com maestria.",
        iconName: "Hammer",
        benefits: [
            "Preservação da pintura original e valor do veículo",
            "Procedimento limpo e ecologicamente focado",
            "Sem massa e sem repintura",
            "Tempo hábil muito inferior ao serviço de funilaria convencional"
        ],
        faq: [
            {
                q: "O martelinho resolve todos os amassados?",
                a: "Não, funciona onde a pintura não tiver sido trincada ou arranhada gravemente sob a deformação metálica."
            }
        ]
    },
    "tapecaria": {
        name: "Tapeçaria Automotiva",
        title: "Tapeçaria",
        description: "Restauração e personalização de interiores com materiais nobres e acabamento artesanal de elite.",
        iconName: "Palette",
        benefits: [
            "Bancos com costuras programadas originais e esportivas",
            "Volantes em Couro Premium ou Alcantara",
            "Restauração minuciosa para manter o cheiro do novo",
            "Customizações sob medida dos tecidos"
        ],
        faq: [
            {
                q: "A 3G Customs reveste forros de teto em Sorocaba?",
                a: "Sim, fazemos a refação em carros luxuosos que sofreram afundamento do forro ou até envelopamento em tecido Suede preto original."
            }
        ]
    },
    "multimidia": {
        name: "Som e Multimídia",
        title: "Multimídia",
        description: "Integração de sistemas de som e entretenimento de alta fidelidade para uma experiência premium ao dirigir.",
        iconName: "Speaker",
        benefits: [
            "Som focado em fidelidade SQ (Sound Quality)",
            "Integração de sistemas CarPlay e Android Auto Originais",
            "Isolamento acústico focado nas portas e capô do veículo",
            "Preservação da fiação elétrica original."
        ],
        faq: [
            {
                q: "Modificar o som perde a garantia elétrica da fábrica?",
                a: "Nossas opções respeitam toda infra plug and play, o que costuma tranquilizar sobre problemas de garantia."
            }
        ]
    }
};
const servicesList = Object.keys(servicesData).map((slug)=>({
        ...servicesData[slug],
        href: `/servicos/${slug}`,
        slug
    }));
const galleryProjects = [
    {
        url: "https://i.imgur.com/Yq3CL4I.jpeg",
        title: "Proteção Full PPF Colorido",
        car: ""
    },
    {
        url: "https://i.imgur.com/e6yhP6A.jpeg",
        title: "Envelopamento Premium",
        car: ""
    },
    {
        url: "https://i.imgur.com/rm67cV8.jpeg",
        title: "Estética Avançada",
        car: ""
    },
    {
        url: "https://i.imgur.com/ErzEJA1.jpeg",
        title: "Personalização de Luxo",
        car: ""
    },
    {
        url: "https://i.imgur.com/2pE3lzX.jpeg",
        title: "Insulfilm",
        car: ""
    },
    {
        url: "https://i.imgur.com/87Ci9sm.jpeg",
        title: "Multimídia",
        car: ""
    },
    {
        url: "https://i.imgur.com/py2rTaD.jpeg",
        title: "Tapeçaria",
        car: ""
    }
];
const faqData = [
    {
        q: "A 3G Customs atende toda a região de Sorocaba?",
        a: "Sim, somos especialistas em estética automotiva de luxo (PPF, Envelopamento) atendendo clientes de Sorocaba, Votorantim, Itu e toda a região metropolitana que buscam exclusividade e proteção.",
        map: false
    },
    {
        q: "Os materiais que vocês utilizam possuem seguro?",
        a: "Sim, trabalhamos com as melhores marcas do mercado e todos os produtos que usamos possuem garantia de fábrica.",
        map: false
    },
    {
        q: "A 3G Customs realiza personalização automotiva completa?",
        a: "Sim. Somos uma oficina de customização automotiva em Sorocaba focada em transformar projetos em realidade. Desde ajustes estéticos finos até modificações completas, nossa equipe técnica aplica engenharia de precisão para garantir exclusividade e segurança.",
        map: false
    },
    {
        q: "Como funciona o agendamento de serviços na 3G Customs?",
        a: "Para garantir a exclusividade e o tempo necessário para cada projeto de estética, trabalhamos com agendamento prévio. Você pode entrar em contato conosco diretamente pelo WhatsApp para garantir sua vaga em nossa agenda técnica em Sorocaba.",
        map: false
    },
    {
        q: "Qual o diferencial da estética automotiva da 3G Customs?",
        a: "Nosso diferencial está na \"Engenharia de Detalhamento\". Enquanto outras oficinas focam no básico, a 3G Customs foca na entrega de valor e durabilidade, utilizando produtos de linha profissional e processos rigorosos de controle de qualidade em Sorocaba.",
        map: false
    }
];
}),
"[project]/components/layout/header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/header.tsx <module evaluation>", "Header");
}),
"[project]/components/layout/header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/header.tsx", "Header");
}),
"[project]/components/layout/header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/layout/header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/layout/header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/layout/footer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/footer.tsx <module evaluation>", "Footer");
}),
"[project]/components/layout/footer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/footer.tsx", "Footer");
}),
"[project]/components/layout/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/layout/footer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/layout/footer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ui/whatsapp-btn.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppBtn",
    ()=>WhatsAppBtn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WhatsAppBtn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WhatsAppBtn() from the server but WhatsAppBtn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/whatsapp-btn.tsx <module evaluation>", "WhatsAppBtn");
}),
"[project]/components/ui/whatsapp-btn.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppBtn",
    ()=>WhatsAppBtn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WhatsAppBtn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WhatsAppBtn() from the server but WhatsAppBtn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/whatsapp-btn.tsx", "WhatsAppBtn");
}),
"[project]/components/ui/whatsapp-btn.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$whatsapp$2d$btn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/whatsapp-btn.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$whatsapp$2d$btn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ui/whatsapp-btn.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$whatsapp$2d$btn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/servicos/[service]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$whatsapp$2d$btn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/whatsapp-btn.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesList"].map((service)=>({
            service: service.slug
        }));
}
async function generateMetadata({ params }) {
    const { service: slug } = await params;
    const serviceData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesData"][slug];
    if (!serviceData) {
        return {
            title: 'Serviço não encontrado'
        };
    }
    return {
        title: `${serviceData.title} em Sorocaba | 3G Customs`,
        description: `${serviceData.description} na 3G Customs, Wanel Ville, Sorocaba/SP`
    };
}
async function ServicePage({ params }) {
    const { service: slug } = await params;
    const serviceData = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesData"][slug];
    if (!serviceData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {
                scrolled: true
            }, void 0, false, {
                fileName: "[project]/app/servicos/[service]/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-24 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-black text-center px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black chrome-text uppercase mb-6",
                                children: [
                                    serviceData.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-2xl md:text-4xl block mt-2",
                                        children: "em Sorocaba"
                                    }, void 0, false, {
                                        fileName: "[project]/app/servicos/[service]/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/servicos/[service]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 max-w-2xl mx-auto text-lg md:text-xl",
                                children: serviceData.description
                            }, void 0, false, {
                                fileName: "[project]/app/servicos/[service]/page.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/servicos/[service]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-[#050505]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-8 chrome-text uppercase tracking-widest text-center",
                                    children: "Benefícios Exclusivos"
                                }, void 0, false, {
                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: serviceData.benefits.map((benefit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-4 glass-card p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-green-500 mt-1",
                                                    children: "✔"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: benefit
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/servicos/[service]/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/servicos/[service]/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/servicos/[service]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    serviceData.faq.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-8 chrome-text uppercase tracking-widest text-center",
                                    children: "Dúvidas Frequentes"
                                }, void 0, false, {
                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: serviceData.faq.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-white/10 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: faq.q
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: faq.a
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/servicos/[service]/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/servicos/[service]/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/servicos/[service]/page.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/servicos/[service]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 text-center px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black mb-8",
                                children: [
                                    "Agende seu orçamento para ",
                                    serviceData.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/servicos/[service]/page.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WHATSAPP_LINK"],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block chrome-button px-10 py-5 font-black uppercase tracking-widest text-sm",
                                children: "Falar no WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/app/servicos/[service]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/servicos/[service]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/servicos/[service]/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/servicos/[service]/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$whatsapp$2d$btn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhatsAppBtn"], {}, void 0, false, {
                fileName: "[project]/app/servicos/[service]/page.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/servicos/[service]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/servicos/[service]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/servicos/[service]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45c09094._.js.map