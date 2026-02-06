
import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Shield, 
  Layers, 
  Sparkles, 
  Cog, 
  Star, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Music2,
  MessageCircle,
  Plus,
  Minus,
  Award,
  Users,
  Target,
  Clock,
  Hammer,
  Palette,
  Speaker
} from 'lucide-react';

// --- Types & Interfaces ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Project {
  url: string;
  title: string;
  car: string;
  isPriority?: boolean;
}

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Sobre Nós', href: '#sobre-nos' },
  { name: 'Contato', href: '#contato' },
];

const LOGO_URL = "https://i.imgur.com/6dX0dHL.png";
const INSTAGRAM_URL = "https://www.instagram.com/3g_customss/?hl=pt-br";
const CONTACT_PHONE = "(15) 97401-8037";
const WHATSAPP_LINK = "https://wa.me/5515974018037?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Vim%20atrav%C3%A9s%20do%20site%20da%203G%20Customs.";
const HERO_BADGE_IMG = "https://i.imgur.com/s2AO3y7.png";

// --- Components ---

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 md:py-4 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'py-4 md:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Espaçador flex-1 para manter o nav centralizado no desktop */}
        <div className="flex-1 hidden md:block"></div>

        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs font-bold text-gray-400 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex-1 flex justify-end md:hidden">
          <button 
            className="text-white p-2 hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu Principal"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center space-y-8 md:space-y-10 transition-all duration-700 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-all duration-300 p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={40} strokeWidth={1} />
        </button>

        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="text-2xl font-light tracking-[0.3em] uppercase chrome-text"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [asyncVideoSrc, setAsyncVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    setAsyncVideoSrc("https://i.imgur.com/Vaz3k7h.mp4");
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className={`absolute inset-0 z-0 transition-transform duration-[5000ms] cubic-bezier(0.16, 1, 0.3, 1) ${videoLoaded ? 'scale-100' : 'scale-110 md:scale-125'}`}>
        <img 
          src="https://i.imgur.com/Vaz3k7h.jpg" 
          alt="3G Customs Sorocaba Wanel Ville" 
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover md:object-center object-[20%_center] transition-all duration-[2000ms] ${videoLoaded ? 'opacity-0 blur-2xl' : 'opacity-70 grayscale-[20%]'}`}
        />
        {asyncVideoSrc && (
          <video
            autoPlay muted loop playsInline
            onPlaying={() => setVideoLoaded(true)}
            poster="https://i.imgur.com/Vaz3k7h.jpg"
            className={`absolute inset-0 w-full h-full object-cover md:object-center object-[20%_center] transition-opacity duration-[3000ms] cubic-bezier(0.4, 0, 0.2, 1) ${videoLoaded ? 'opacity-70 grayscale-[10%]' : 'opacity-0'}`}
          >
            <source src={asyncVideoSrc} type="video/mp4" />
          </video>
        )}
      </div>
      
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-6 md:mb-10 py-1">
          <img 
            src={HERO_BADGE_IMG} 
            alt="3G Customs Badge" 
            className="w-64 md:w-96 h-auto mb-6 animate-reveal drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            style={{ animationDelay: '0.1s' }}
          />
          <span className="text-[10px] md:text-xs font-extrabold tracking-[0.4em] md:tracking-[0.5em] uppercase chrome-text border-b border-white/20 pb-3 block animate-reveal" style={{ animationDelay: '0.3s' }}>
            Referência em Personalização e Proteção de Luxo em Sorocaba/SP
          </span>
        </div>
        
        <h1 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 leading-[1.1] tracking-tighter">
          <div className="overflow-hidden py-2">
             <span className="chrome-text block drop-shadow-2xl animate-reveal" style={{ animationDelay: '0.6s' }}>Excelência em PPF e Envelopamento de Luxo</span>
          </div>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed animate-fade-scale" style={{ animationDelay: '1s' }}>
            Engenharia de Proteção e Estética de Luxo. Onde o cuidado artesanal encontra as tecnologias mais avançadas de PPF e personalização.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <a href="#serviços" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 chrome-button font-black text-xs md:text-sm tracking-[0.25em] uppercase rounded-none transition-all text-center">
            NOSSOS SERVIÇOS
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="relative p-[1px] group transition-all duration-700 overflow-hidden rounded-none cursor-default min-w-[280px] md:min-w-[320px] flex-shrink-0 md:flex-shrink">
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-30 md:opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <div className="relative h-full glass-card p-8 md:p-12 bg-[#050505] group-hover:bg-[#0a0a0a] transition-all duration-700 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
      
      <div className="text-gray-400 mb-6 md:mb-10 chrome-text inline-block transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight uppercase group-hover:chrome-text transition-colors duration-500">
        {title}
      </h3>
      
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow">
        {description}
      </p>
      
      <div className="mt-8 md:mt-10 opacity-0 md:opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
        <a href={WHATSAPP_LINK} target="_blank" className="text-[10px] font-black tracking-[0.2em] uppercase border-b border-white/40 hover:border-white pb-1 hover:text-white transition-all">
          Orçamento
        </a>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: "PPF (Paint Protection Film)",
      description: "Proteção invisível de poliuretano que protege a pintura contra riscos e pedregulhos com propriedades de regeneração.",
      icon: <Shield size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Envelopamento Premium",
      description: "Transformação estética completa with vinis mundiais. Acabamentos foscos, acetinados ou cores exclusivas.",
      icon: <Layers size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Películas (Insulfilm)",
      description: "Proteção térmica de última geração cerâmica. Redução de calor e raios UV sem comprometer a visibilidade.",
      icon: <Sparkles size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Customização",
      description: "Engenharia de alto padrão para elevar a estética exclusiva do seu veículo com total precisão.",
      icon: <Cog size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Martelinho de Ouro",
      description: "Remoção técnica de amassados preservando a originalidade da pintura de fábrica com maestria.",
      icon: <Hammer size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Tapeçaria",
      description: "Restauração e personalização de interiores with materiais nobres e acabamento artesanal de elite.",
      icon: <Palette size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    },
    {
      title: "Multimídia",
      description: "Integração de sistemas de som e entretenimento de alta fidelidade para uma experiência premium ao dirigir.",
      icon: <Speaker size={36} className="md:w-11 md:h-11" strokeWidth={1} />
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      if (direction === 'right') {
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      } else {
        const isAtStart = scrollLeft <= 10;
        if (isAtStart) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section id="serviços" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-gray-500 mb-4 md:mb-5">Especialistas em Estética Automotiva de Luxo</p>
            <h2 className="text-3xl md:text-6xl font-black chrome-text uppercase tracking-tighter">Serviços de Alta Performance e Customização</h2>
          </div>
          <div className="hidden md:flex gap-4">
             <button 
                onClick={() => scroll('left')} 
                className="p-3 chrome-button rounded-sm group active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                aria-label="Scroll Esquerda"
             >
               <ChevronLeft size={24} className="text-black" />
             </button>
             <button 
                onClick={() => scroll('right')} 
                className="p-3 chrome-button rounded-sm group active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                aria-label="Scroll Direita"
             >
               <ChevronRight size={24} className="text-black" />
             </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-10 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {services.map((service, index) => (
            <div key={index} className="snap-center">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-8 mt-4">
           <button onClick={() => scroll('left')} className="p-4 chrome-button rounded-full active:scale-95 shadow-xl"><ChevronLeft size={20} className="text-black" /></button>
           <button onClick={() => scroll('right')} className="p-4 chrome-button rounded-full active:scale-95 shadow-xl"><ChevronRight size={20} className="text-black" /></button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<Project> = ({ url, title, car, isPriority }) => (
  <div className="snap-center shrink-0 w-[280px] md:w-[380px] aspect-[3/4] relative group overflow-hidden border border-white/5">
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
    
    <img 
      src={url} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
      loading={isPriority ? "eager" : "lazy"}
      // @ts-ignore
      fetchPriority={isPriority ? "high" : "auto"}
      decoding="async"
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

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    { url: "https://i.imgur.com/Yq3CL4I.jpeg", title: "Proteção Full PPF Colorido", car: "" },
    { url: "https://i.imgur.com/e6yhP6A.jpeg", title: "Envelopamento Premium", car: "" },
    { url: "https://i.imgur.com/rm67cV8.jpeg", title: "Estética Avançada", car: "" },
    { url: "https://i.imgur.com/ErzEJA1.jpeg", title: "Personalização de Luxo", car: "" },
    { url: "https://i.imgur.com/2pE3lzX.jpeg", title: "Insulfilm", car: "" }
  ];

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
          {projects.map((project, idx) => (
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

const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1 hidden lg:block">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-white/10"></div>
            <div className="relative z-10 p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/20">
               <img 
                src="https://i.imgur.com/6cNW3KV.jpg" 
                alt="Equipe técnica 3G Customs Sorocaba" 
                loading="lazy"
                decoding="async"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
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
                Localizada estrategicamente no Wanel Ville, em Sorocaba, a 3G Customs nasceu para transformar veículos em verdadeiras obras de arte. Somos um ateliê de customização onde cada projeto é tratado com exclusividade absoluta.
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

const SocialProof: React.FC = () => {
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

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    { 
      q: "A 3G Customs atende toda a região de Sorocaba?", 
      a: "Sim, somos especialistas em estética automotiva de luxo (PPF, Envelopamento) atendendo clientes de Sorocaba, Votorantim, Itu e toda a região metropolitana que buscam exclusividade e proteção.",
      map: false
    },
    {
      q: "Os materiais que vocês utilizam possuem seguro?",
      a: "Sim, trabalhamos with as melhores marcas do mercado e todos os produtos que usamos possuem garantia de fábrica.",
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
      a: "Nosso diferencial está na \"Engenharia de Detalhamento\". Enquanto outras oficinas focam no básico, a 3G Customs foca na entrega de value e durabilidade, utilizando produtos de linha profissional e processos rigorosos de controle de qualidade.",
      map: false
    }
  ];

  return (
    <footer id="contato" className="bg-[#000000] border-t border-white/5" itemScope itemType="https://schema.org/AutoRepair">
      {/* Seção FAQ devidamente marcada com FAQPage para SEO/GEO */}
      <div 
        className="bg-[#050505] py-16 md:py-24 border-b border-white/5" 
        itemScope 
        itemType="https://schema.org/FAQPage"
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
          <img src={LOGO_URL} alt="Logo 3G Customs Sorocaba" loading="lazy" decoding="async" className="h-12 md:h-16 w-auto brightness-110 mb-8" itemProp="image" />
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
            © 2024 3G Customs Sorocaba. Projetos de Alta Estética Automotiva. Criado por <a href="https://www.upperagency.com.br/" target="_blank" className="hover:chrome-text transition-all">UPPER</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Threshold para trocar a transparência da barra - geralmente ao sair do Hero
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-black antialiased">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutUs />
        <SocialProof />
      </main>
      <Footer />

      {/* Floating Premium WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        aria-label="WhatsApp 3G Customs"
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-700 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full border border-white/30 animate-[pulse-premium-outer_3s_infinite_cubic-bezier(0.4,0,0.2,1)]"></div>
          <div className="chrome-border rounded-full p-[2px] shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
            <div className="chrome-border-inner rounded-full p-4 md:p-5 flex items-center justify-center bg-black group-hover:bg-white/5 transition-colors">
              <MessageCircle size={28} className="text-white md:w-8 md:h-8" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

// --- Mount ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
