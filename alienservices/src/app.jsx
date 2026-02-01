import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Palette, 
  MessageSquare, 
  ChevronRight, 
  ExternalLink, 
  ShieldCheck, 
  Zap,
  Layout,
  ArrowLeft,
  Scale
} from 'lucide-react';

/**
 * AlienServices - Main Landing Page Component
 * All-in-one file including Home and Terms of Service
 */
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'tos'
  
  const discordLink = "https://discord.gg/DHn4KKrx";
  // In a real hosting environment, ensure static.png is in the /public folder
  const logoPath = "static.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Design di Loghi",
      description: "Creiamo identità visive aliene e memorabili per il tuo brand o community.",
      icon: <Palette className="w-8 h-8 text-emerald-400" />,
      tag: "Creative"
    },
    {
      title: "Setup Professionali",
      description: "Configurazioni complete per gaming, streaming e produttività ottimizzate al massimo.",
      icon: <Layout className="w-8 h-8 text-emerald-400" />,
      tag: "Optimized"
    },
    {
      title: "Setup VPS",
      description: "Installazione e messa in sicurezza di server virtuali per ogni tipo di esigenza.",
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      tag: "Cloud"
    },
    {
      title: "Bot Discord",
      description: "Sviluppo di bot personalizzati per automatizzare e gestire la tua community.",
      icon: <Terminal className="w-8 h-8 text-emerald-400" />,
      tag: "Dev"
    }
  ];

  // --- Page Components ---

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> STATUS: OPERATIVI NEL SETTORE 7
          </div>
          
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/40 transition duration-1000 opacity-70"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-emerald-400/60 bg-neutral-900">
                <img 
                  src={logoPath} 
                  alt="AlienServices Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/512/0a0a0a/34d399?text=ALIEN+SERVICES"; }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            L'ECCELLENZA <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent italic">NON È DI QUESTO MONDO.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
            Siamo AlienServices. Trasformiamo la tua presenza digitale con setup professionali, design d'élite e infrastrutture server ad alte prestazioni.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-emerald-500 text-neutral-950 font-bold rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Richiedi un Servizio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('servizi').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-xl hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto"
            >
              Esplora i Servizi
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servizi" className="py-24 bg-neutral-900/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri <span className="text-emerald-400">Sistemi</span></h2>
            <p className="text-neutral-500">Soluzioni professionali per ogni esigenza digitale.</p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(52,211,153,0.1)]">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <a 
                  href={discordLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest hover:text-emerald-300 transition-colors"
                >
                  Ordina tramite Ticket <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">Perché la nostra <br /><span className="text-emerald-400">tecnologia è superiore?</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Precisione Totale", desc: "Non lasciamo nulla al caso. Ogni riga di codice e ogni pixel è curato." },
                  { title: "Infrastruttura Sicura", desc: "Le nostre VPS sono blindate e i bot Discord sono ottimizzati per la stabilità." },
                  { title: "Supporto Alieni", desc: "Siamo disponibili quasi 24/7 per risolvere ogni tua problematica." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Zap size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl border border-neutral-800 p-2 bg-neutral-900/50">
                <img 
                  src={logoPath} 
                  alt="Quality" 
                  className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const ToSPage = () => (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <button 
        onClick={() => navigateTo('home')}
        className="flex items-center gap-2 text-emerald-400 mb-10 hover:text-emerald-300 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Torna alla Home
      </button>
      
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-[2rem] p-8 md:p-16 backdrop-blur-sm">
        <div className="flex items-center gap-5 mb-12 border-b border-neutral-800 pb-8">
          <div className="p-4 bg-emerald-500/10 rounded-2xl">
            <Scale className="text-emerald-400" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Termini di <span className="text-emerald-400">Servizio</span></h1>
            <p className="text-neutral-500 text-sm mt-1">Leggere attentamente prima di procedere all'acquisto.</p>
          </div>
        </div>
        
        <div className="space-y-10 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-emerald-400 font-mono text-sm">01.</span> Accordo Contrattuale
            </h2>
            <p>Utilizzando i servizi di AlienServices (sito o Discord), l'utente accetta integralmente questi termini. La fornitura dei servizi inizia solo dopo la conferma del ticket nel nostro server ufficiale.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-emerald-400 font-mono text-sm">02.</span> Specifiche Tecniche
            </h2>
            <p>I servizi includono setup VPS, bot Discord personalizzati, configurazioni streaming e design grafici. Ogni specifica tecnica viene definita nel contratto del ticket e non può essere modificata post-consegna senza costi aggiuntivi.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-emerald-400 font-mono text-sm">03.</span> Pagamenti e Rimborsi
            </h2>
            <p>Accettiamo i metodi di pagamento sicuri indicati sul Discord. Essendo prodotti digitali altamente personalizzati, non offriamo rimborsi una volta che il processo di sviluppo è iniziato, salvo gravi inadempienze da parte nostra.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-emerald-400 font-mono text-sm">04.</span> Diritti e Licenze
            </h2>
            <p>Per i loghi e i bot, la proprietà intellettuale viene trasferita al cliente al saldo finale. AlienServices si riserva il diritto di citare il lavoro svolto nel proprio portfolio pubblico per scopi promozionali.</p>
          </section>

          <div className="pt-10 border-t border-neutral-800 text-sm text-neutral-500 flex justify-between items-center">
            <span>Aggiornato: 01 Febbraio 2026</span>
            <span className="px-3 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/20 text-emerald-400 uppercase text-[10px] tracking-widest font-bold">Documento Ufficiale</span>
          </div>
        </div>
      </div>
    </div>
  );

  // --- Main Layout ---

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-400 scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-emerald-500/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/30 bg-neutral-900 group-hover:border-emerald-400 transition-colors">
              <img src={logoPath} alt="L" className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; }} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
              Alien<span className="text-emerald-400">Services</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <button onClick={() => navigateTo('home')} className={`hover:text-emerald-400 transition-colors ${currentPage === 'home' ? 'text-emerald-400' : 'text-neutral-400'}`}>Home</button>
            <button onClick={() => navigateTo('tos')} className={`hover:text-emerald-400 transition-colors ${currentPage === 'tos' ? 'text-emerald-400' : 'text-neutral-400'}`}>Termini</button>
            <a 
              href={discordLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-emerald-500 text-neutral-950 rounded-lg hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(52,211,153,0.2)] flex items-center gap-2"
            >
              Unisciti <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' ? <HomePage /> : <ToSPage />}
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-neutral-900 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src={logoPath} alt="Logo" className="w-8 h-8 rounded-lg" onError={(e) => { e.target.style.display='none'; }} />
              <span className="font-black tracking-tight italic">ALIENSERVICES</span>
            </div>
            <p className="text-neutral-600 text-sm">
              Portiamo il tuo progetto fuori dall'orbita terrestre con soluzioni digitali d'avanguardia.
            </p>
          </div>
          
          <div className="flex justify-center gap-8 text-sm font-bold text-neutral-500 uppercase tracking-widest">
            <button onClick={() => navigateTo('home')} className="hover:text-emerald-400">Home</button>
            <button onClick={() => navigateTo('tos')} className="hover:text-emerald-400">Terms</button>
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">Discord</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-neutral-500 text-xs">© 2026 AlienServices.</p>
            <p className="text-emerald-500/40 text-[10px] uppercase font-mono mt-1">Codificato nel Settore 7</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;