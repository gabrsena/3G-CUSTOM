export const LOGO_URL = "https://i.imgur.com/6dX0dHL.png";
export const INSTAGRAM_URL = "https://www.instagram.com/3g_customss/";
export const WHATSAPP_LINK = "https://wa.me/5515974018037?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Vim%20atrav%C3%A9s%20do%20site%20da%203G%20Customs.";
export const HERO_BADGE_IMG = "https://i.imgur.com/s2AO3y7.png";
export const CONTACT_PHONE = "(15) 97401-8037";

export const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Serviços', href: '/#serviços' },
    { name: 'Galeria', href: '/#galeria' },
    { name: 'Sobre Nós', href: '/#sobre-nos' },
    { name: 'Contato', href: '/#contato' },
];

export const servicesData: Record<string, {
    name: string;
    title: string;
    description: string;
    iconName: string;
    benefits: string[];
    faq: { q: string, a: string }[];
}> = {
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

export const servicesList = Object.keys(servicesData).map(slug => ({
    ...servicesData[slug],
    href: `/servicos/${slug}`,
    slug
}));

export const galleryProjects = [
    { url: "https://i.imgur.com/Yq3CL4I.jpeg", title: "Proteção Full PPF Colorido", car: "" },
    { url: "https://i.imgur.com/e6yhP6A.jpeg", title: "Envelopamento Premium", car: "" },
    { url: "https://i.imgur.com/rm67cV8.jpeg", title: "Estética Avançada", car: "" },
    { url: "https://i.imgur.com/ErzEJA1.jpeg", title: "Personalização de Luxo", car: "" },
    { url: "https://i.imgur.com/2pE3lzX.jpeg", title: "Insulfilm", car: "" },
    { url: "https://i.imgur.com/87Ci9sm.jpeg", title: "Multimídia", car: "" },
    { url: "https://i.imgur.com/py2rTaD.jpeg", title: "Tapeçaria", car: "" }
];

export const faqData = [
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
