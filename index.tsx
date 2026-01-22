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
  MessageCircle
} from 'lucide-react';

// --- Types & Interfaces ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
];

// Nova Logo (URL atualizada)
const LOGO_URL = "https://i.imgur.com/cs4TnZ4.png";
const INSTAGRAM_URL = "https://www.instagram.com/3g_customss/?hl=pt-br";

// --- Components ---

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl py-4 shadow-[0_1px_30px_rgba(255,255,255,0.08)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Tamanho aumentado em 20% */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={LOGO_URL} 
            alt="3G Customs Logo" 
            loading="lazy"
            className="h-12 md:h-16 w-auto transition-transform duration-500 group-hover:scale-105 brightness-110" 
          />
        </div>

        {/* Desktop Menu */}
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

        {/* Mobile Toggle - Keeps it accessible but we also added one inside the overlay */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center space-y-10 transition-all duration-700 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Proeminent Close Button inside Overlay */}
        <button 
          className="absolute top-10 right-10 text-white/50 hover:text-white transition-all duration-300 hover:rotate-90 p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={48} strokeWidth={1} />
        </button>

        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="text-3xl font-light tracking-[0.3em] uppercase chrome-text hover:scale-110 transition-transform"
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Artificial delay to allow placeholder to be seen before video starts transition
    const timer = setTimeout(() => {
      setAsyncVideoSrc("https://i.imgur.com/Vaz3k7h.mp4");
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoPlay = () => {
    // Smoother transition once playing
    setTimeout(() => {
      setVideoLoaded(true);
    }, 100);
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Container - Starts at scale 125 and goes to 100 for Zoom Out effect */}
      <div className={`absolute inset-0 z-0 transition-transform duration-[5000ms] cubic-bezier(0.16, 1, 0.3, 1) ${videoLoaded ? 'scale-100' : 'scale-125'}`}>
        <img 
          src="https://i.imgur.com/Vaz3k7h.jpg" 
          alt="3G Customs Hero Background" 
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${videoLoaded ? 'opacity-0 blur-2xl' : 'opacity-70 grayscale-[20%]'}`}
        />
        {asyncVideoSrc && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onPlaying={handleVideoPlay}
            poster="https://i.imgur.com/Vaz3k7h.jpg"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] cubic-bezier(0.4, 0, 0.2, 1) ${videoLoaded ? 'opacity-70 grayscale-[10%]' : 'opacity-0'}`}
          >
            <source src={asyncVideoSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block animate-surge" style={{ animationDelay: '0.2s' }}>
          <span className="text-xs font-extrabold tracking-[0.5em] uppercase chrome-text border-b border-white/30 pb-3 block">
            Perfeição em cada detalhe
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter overflow-hidden">
          <span className="block opacity-90 animate-surge" style={{ animationDelay: '0.4s' }}>A Arte da</span>
          <span className="chrome-text block drop-shadow-2xl animate-surge" style={{ animationDelay: '0.6s' }}>Proteção Automotiva</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-14 leading-relaxed opacity-80 animate-surge" style={{ animationDelay: '0.8s' }}>
          Elevamos a estética do seu veículo ao nível de obra de arte com as tecnologias mais avançadas de PPF, Envelopamento e Películas térmicas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-surge" style={{ animationDelay: '1s' }}>
          <a href="#serviços" className="w-full sm:w-auto px-10 py-5 chrome-button font-black text-sm tracking-[0.25em] uppercase rounded-none shadow-[0_15px_40px_rgba(255,255,255,0.1)] transition-all text-center">
            DESCUBRA NOSSOS SERVIÇOS
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="glass-card p-12 group hover:bg-white/5 transition-all duration-700 relative overflow-hidden cursor-default">
    <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-1000"></div>
    <div className="text-gray-400 mb-10 icon-premium-glow chrome-text inline-block">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase group-hover:chrome-text transition-colors duration-500">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
      {description}
    </p>
    <div className="mt-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
      <a href="#contato" className="text-[11px] font-black tracking-[0.3em] uppercase border-b border-white/40 hover:border-white pb-1 hover:text-white transition-all">
        Fazer Orçamento
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "PPF (Paint Protection Film)",
      description: "Proteção invisível de poliuretano que protege a pintura contra riscos, pedregulhos e ação do tempo com propriedades de regeneração.",
      icon: <Shield size={44} strokeWidth={1} />
    },
    {
      title: "Envelopamento Premium",
      description: "Transformação estética completa com vinis das melhores marcas mundiais. Acabamentos foscos, acetinados ou cores exclusivas.",
      icon: <Layers size={44} strokeWidth={1} />
    },
    {
      title: "Películas (Insulfilm)",
      description: "Proteção térmica de última geração com nanotecnologia cerâmica. Redução de calor e raios UV sem comprometer a visibilidade.",
      icon: <Sparkles size={44} strokeWidth={1} />
    },
    {
      title: "Acessórios e Detailing",
      description: "Cuidados minuciosos e instalação de acessórios de alto padrão para elevar o luxo e a funcionalidade do seu veículo.",
      icon: <Cog size={44} strokeWidth={1} />
    }
  ];

  return (
    <section id="serviços" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-gray-500 mb-5">Nossa Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black chrome-text uppercase tracking-tighter">Soluções de Elite</h3>
          </div>
          <div className="hidden md:block">
            <div className="w-40 h-[1px] bg-white/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000",
      title: "Proteção Full PPF",
      car: "Porsche 911 GT3"
    },
    {
      url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000",
      title: "Envelopamento Premium",
      car: "Porsche Taycan"
    },
    {
      url: "https://images.unsplash.com/photo-1544636331-e268592033c2?auto=format&fit=crop&q=80&w=2000",
      title: "Estética Avançada",
      car: "BMW M4 Competition"
    },
    {
      url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=2000",
      title: "Cuidado de Performance",
      car: "Ferrari F8 Tributo"
    },
    {
      url: "https://images.unsplash.com/photo-1593441755179-1449344208d0?auto=format&fit=crop&get=80&w=2000",
      title: "Interior Detailing",
      car: "Luxury Cockpit"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [images.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [images.length, isAnimating]);

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section id="galeria" className="py-32 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-gray-500 mb-5">Galeria de Resultados</h2>
          <h3 className="text-5xl md:text-6xl font-black chrome-text uppercase tracking-tighter mb-8">Projetos Exclusivos</h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Uma seleção de veículos que passaram pelo nosso processo de transformação, onde a técnica encontra a sofisticação absoluta.
          </p>
        </div>
      </div>

      <div className="relative group max-w-[1500px] mx-auto px-6">
        <div className="relative h-[450px] md:h-[700px] overflow-hidden rounded-sm shadow-[0_0_80px_rgba(255,255,255,0.03)]">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23, 1, 0.32, 1)] transform ${
                idx === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : idx < currentIndex 
                  ? 'opacity-0 scale-110 -translate-x-full' 
                  : 'opacity-0 scale-110 translate-x-full'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[10%] brightness-75 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 flex flex-col items-start animate-fade-in">
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/50 mb-3">{image.car}</span>
                <h4 className="text-2xl md:text-5xl font-black chrome-text uppercase tracking-tight drop-shadow-lg">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Setas da Galeria - Agora visíveis no Mobile (com ajuste de posição) */}
        <button 
          onClick={handlePrev}
          className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 p-3 md:p-5 glass-card border-white/10 hover:border-white/50 transition-all duration-500 opacity-80 md:opacity-0 group-hover:opacity-100 md:translate-x-[-30px] group-hover:translate-x-0 z-20"
        >
          <ChevronLeft size={24} className="md:w-7 md:h-7 chrome-text" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 p-3 md:p-5 glass-card border-white/10 hover:border-white/50 transition-all duration-500 opacity-80 md:opacity-0 group-hover:opacity-100 md:translate-x-[30px] group-hover:translate-x-0 z-20"
        >
          <ChevronRight size={24} className="md:w-7 md:h-7 chrome-text" />
        </button>

        <div className="flex justify-center mt-16 gap-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[3px] transition-all duration-700 ${
                idx === currentIndex ? 'w-20 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]' : 'w-6 bg-gray-800 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex space-x-3 mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={28} fill="currentColor" className="chrome-text" />
          ))}
        </div>
        
        <h2 className="text-7xl md:text-9xl font-black mb-4 chrome-text tracking-tighter">4.9</h2>
        <p className="text-sm font-black tracking-[0.4em] uppercase text-gray-500 mb-16">Avaliação no Google My Business</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mt-10">
          {[
            { name: "Carlos M.", comment: "O PPF ficou impecável. Trabalho de artista mesmo. O brilho da pintura está surreal." },
            { name: "Roberta S.", comment: "Melhor atendimento de Sorocaba e região. Profissionalismo e transparência em cada etapa." },
            { name: "Guilherme F.", comment: "Minha Porsche parece que acabou de sair da fábrica. O detalhamento superou todas as expectativas." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center group">
              <p className="italic text-gray-400 text-sm mb-6 leading-relaxed font-light group-hover:text-white transition-colors duration-500">"{review.comment}"</p>
              <div className="w-8 h-[1px] bg-white/20 mb-4 group-hover:w-16 transition-all duration-700"></div>
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/70 group-hover:text-white group-hover:chrome-text transition-all">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

const Location: React.FC = () => {
  return (
    <section id="localização" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-gray-500 mb-5">Visite Nosso Ateliê</h2>
            <h3 className="text-5xl md:text-6xl font-black chrome-text uppercase tracking-tighter">Localização</h3>
          </div>
          <div className="hidden md:block">
            <div className="w-40 h-[1px] bg-white/10"></div>
          </div>
        </div>

        <div className="chrome-border p-[1px] rounded-sm overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)] h-[450px] md:h-[600px]">
          <div className="w-full h-full bg-black">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1843236779435!2d-47.50296712373023!3d-23.490159478809964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f591147a7b87%3A0xc6a87c10b271d293!2sAv.%20Paulo%20Emanuel%20de%20Almeida%2C%20590%20-%20Vila%20Bar%C3%A3o%2C%20Sorocaba%20-%20SP%2C%2018053-505!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2) brightness(0.9)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left text-gray-400">
          <div className="flex items-center space-x-4">
            <MapPin size={24} className="chrome-text" />
            <p className="text-sm tracking-widest font-light">Av. Paulo Emanuel de Almeida, 590 - Vila Barão, Sorocaba - SP</p>
          </div>
          <a 
            href="https://www.google.com/maps/dir//Av.+Paulo+Emanuel+de+Almeida,+590+-+Vila+Bar%C3%A3o,+Sorocaba+-+SP,+18053-505" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 glass-card border-white/10 hover:border-white/40 transition-all text-[10px] font-black tracking-[0.3em] uppercase"
          >
            Traçar Rota
          </a>
        </div>
      </div>
    </section>
  );
};

const SocialConnect: React.FC = () => {
  const socials = [
    { name: "Instagram", icon: <Instagram size={32} />, href: INSTAGRAM_URL, color: "hover:text-[#E4405F]" },
    { name: "TikTok", icon: <Music2 size={32} />, href: "https://tiktok.com/@3gcustoms", color: "hover:text-[#00F2EA]" }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-gray-500 mb-5">Fique por dentro</h2>
        <h3 className="text-5xl md:text-6xl font-black chrome-text uppercase tracking-tighter mb-20">Nossas Redes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socials.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`glass-card p-12 group flex flex-col items-center transition-all duration-700 hover:bg-white/5 border border-white/5 hover:border-white/20`}
            >
              <div className={`mb-8 icon-premium-glow chrome-text transition-all duration-500 ${social.color}`}>
                {social.icon}
              </div>
              <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white group-hover:chrome-text transition-all duration-500">
                {social.name}
              </span>
              <div className="mt-8 w-6 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-700"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#000000] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-10">
              <img src={LOGO_URL} alt="3G Customs Logo" loading="lazy" className="h-12 w-auto brightness-110" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light max-w-xs">
              Referência em estética e proteção automotiva de luxo. Compromisso inabalável com a perfeição e o detalhe técnico.
            </p>
            <div className="flex space-x-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/5 hover:border-white/40 transition-all rounded-full group hover:bg-white/5">
                <Instagram size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://tiktok.com/@3gcustoms" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/5 hover:border-white/40 transition-all rounded-full group hover:bg-white/5">
                <Music2 size={20} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase mb-10 text-gray-400">Navegação</h4>
            <ul className="space-y-5">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 text-xs hover:text-white hover:pl-2 transition-all font-bold uppercase tracking-widest">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] font-black tracking-[0.4em] uppercase mb-10 text-gray-400">Visite Nosso Ateliê</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <MapPin size={24} className="text-gray-400 shrink-0 mt-1" />
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Av. Paulo Emanuel de Almeida, 590<br />
                  Vila Barão, Sorocaba - SP, 18053-505
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <Phone size={24} className="text-gray-400 shrink-0" />
                <p className="text-gray-500 text-sm font-bold tracking-widest hover:text-white transition-colors cursor-pointer">(15) 3212-3456</p>
              </div>
              <div className="flex items-center space-x-5">
                <Mail size={24} className="text-gray-400 shrink-0" />
                <p className="text-gray-500 text-sm font-light hover:text-white transition-colors cursor-pointer">contato@3gcustoms.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">
            © 2024 3G Customs. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold hover:text-white transition-colors cursor-pointer">Privacidade</p>
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">
                desenvolvido e criado por <a href="https://www.upperagency.com.br/" target="_blank" rel="noopener noreferrer" className="hover:chrome-text transition-all duration-500 underline decoration-white/20 underline-offset-4">UPPER</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-black antialiased">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <SocialProof />
        <Location />
        <SocialConnect />
      </main>
      <Footer />

      {/* Improved Floating Premium Button with Sonar Effect and Refined Label */}
      <a 
        href="https://wa.me/551532123456" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp 3G Customs"
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-1000 transform flex items-center group ${
          scrolled ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 pointer-events-none'
        }`}
      >
        {/* Label - Slides out on hover with better ease */}
        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-l-full mr-[-40px] opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-700 ease-out pointer-events-none hidden md:block">
           <span className="text-[11px] font-black tracking-[0.4em] uppercase chrome-text">Falar com Especialista</span>
        </div>

        <div className="relative">
          {/* Layered Sonar Rings for Depth */}
          <div className="pulse-ring"></div>
          <div className="pulse-ring" style={{ animationDelay: '0.8s' }}></div>
          <div className="pulse-ring" style={{ animationDelay: '1.6s' }}></div>

          {/* Button Core with Continuous Shimmer */}
          <div className="chrome-border rounded-full p-[2px] shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:shadow-[0_0_150px_rgba(255,255,255,0.8)] hover:scale-115 transition-all active:scale-95 relative z-10 overflow-hidden">
            <div className="chrome-border-inner rounded-full p-4 md:p-5 flex items-center justify-center bg-black transition-all group-hover:bg-white/20 relative">
              {/* Internal Shimmer Layer */}
              <div className="absolute inset-0 chrome-float-bg opacity-30"></div>
              
              <MessageCircle size={28} className="text-white relative z-10 transition-all duration-700 group-hover:rotate-[360deg] md:w-8 md:h-8" />
            </div>
            
            {/* High Definition Gloss Reflection Overlay */}
            <div className="absolute top-[-150%] left-[-150%] w-[400%] h-[400%] bg-gradient-to-br from-white/30 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[50%] group-hover:left-[50%] transition-all duration-1000"></div>
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