import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Crosshair, Eye, Smile, MonitorPlay, Keyboard, ChevronRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <Crosshair className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">FaceCursor</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#technology" className="hover:text-foreground transition-colors">Technologie</a>
            <a href="#gaming" className="hover:text-foreground transition-colors">Gaming & Web</a>
          </nav>
          <a href="#download" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download voor Windows 11
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 text-sm font-medium text-blue-400"
          >
            <Shield className="w-4 h-4" />
            <span>Exclusief ontworpen voor Windows 11</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight max-w-4xl leading-tight mb-8"
          >
            Bestuur Windows met <br className="hidden md:block"/>
            <span className="text-gradient">precisie via je gezicht.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
          >
            Download de FaceCursor app en transformeer je webcam in een geavanceerde muis. Knipper om te klikken, open je mond om te scrollen. Aangedreven door de state-of-the-art <strong>deepghs/insightface</strong> AI.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <a href="#download" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Nu (Gratis)
            </a>
            <a href="#technology" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2">
              Lees hoe het werkt
            </a>
          </motion.div>
        </section>

        {/* Feature UI Demo / Mockup */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Window Controls */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-muted-foreground font-mono">FaceCursor Dashboard - Windows 11</div>
            </div>
            {/* Fake App Content  */}
            <div className="p-8 grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-time Gelaatsherkenning</h3>
                    <p className="text-muted-foreground text-sm">Status: <span className="text-green-400">Actief & Geconfigureerd</span></p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                    <button className="px-3 py-1 text-xs font-medium bg-white/10 rounded-md text-white shadow-sm">Work</button>
                    <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-white">Gaming</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Eye className="text-blue-400" />
                      <div>
                        <p className="font-medium">Ogen Dicht / Knipperen</p>
                        <p className="text-xs text-muted-foreground">Linkermuisklik / Vasthouden</p>
                      </div>
                    </div>
                    <div className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Actief</div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Smile className="text-purple-400" />
                      <div>
                        <p className="font-medium">Mond Openen</p>
                        <p className="text-xs text-muted-foreground">Scrollen (Verticaal)</p>
                      </div>
                    </div>
                    <div className="text-xs font-mono bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Actief</div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Keyboard className="text-green-400" />
                      <div>
                        <p className="font-medium">Toetsenbord Integratie</p>
                        <p className="text-xs text-muted-foreground">Ondertekent input, muis staat stil</p>
                      </div>
                    </div>
                    <div className="text-xs font-mono bg-green-500/20 text-green-300 px-2 py-1 rounded">Actief</div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-6">
                  {/* Abstract Face Mesh Graphic */}
                  <div className="relative w-48 h-48">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 border-2 border-blue-500/30 rounded-[40%] flex items-center justify-center"
                    >
                      <Crosshair className="w-8 h-8 text-blue-500/50" />
                    </motion.div>
                    
                    {/* Pulsing Eye trackers */}
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
                    
                    {/* Mouth tracker */}
                    <motion.div 
                      animate={{ height: ['4px', '20px', '4px'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-16 bg-purple-400 rounded-full opacity-60" 
                    />
                  </div>
                  
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground">
                     AI Model: deepghs/insightface
                  </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Advanced Features (Creative extra) */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Gemaakt voor Power Users</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ga verder dan simpele muisklikken en configureer macro's en multi-expressies.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2 text-lg">Multi-Monitor</h4>
                <p className="text-sm text-muted-foreground">Kijk simpelweg naar je tweedescherm om de cursor direct daar naartoe te teleporteren, sneller dan met een muis.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2 text-lg">Auto-Pauze</h4>
                <p className="text-sm text-muted-foreground">Het systeem herkent wanneer je aan het typen bent of wegkijkt, en zet de cursor automatisch stil.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2 text-lg">Macro Expressies</h4>
                <p className="text-sm text-muted-foreground">Verbind een "dubbele knipper" aan het sluiten van een tabblad of aan een speciale aanval in games.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <span className="text-red-400 font-bold">4</span>
                </div>
                <h4 className="font-bold mb-2 text-lg">Toegankelijkheid</h4>
                <p className="text-sm text-muted-foreground">Gemaakt met een "Access for All" filosofie. Perfect voor gebruikers met fysieke beperkingen.</p>
              </div>
           </div>
        </section>

        {/* Features Split */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Navigeer zonder grenzen in je browser.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Lees je favoriete blogs, scrol door nieuws en open nieuwe tabbladen. We hebben de gevoeligheid perfect afgestemd voor een vlekkeloze webervaring.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Kijk naar kleine knoppen met sub-pixel precisie.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Natuurlijk scrollen door licht je mond te openen.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Typen doe je nog steeds supernel via je toetsenbord.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-white/10 grid place-items-center aspect-square">
               <MonitorPlay className="w-32 h-32 text-blue-400 opacity-80" />
            </div>
          </div>
        </section>

        {/* Gaming Split */}
        <section id="gaming" className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-red-500/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse relative z-10">
            <div className="order-2 md:order-1 bg-gradient-to-tr from-purple-900/20 to-red-900/20 rounded-2xl p-8 border border-white/10 grid place-items-center aspect-square">
               <Crosshair className="w-32 h-32 text-purple-400 opacity-80" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Volledige controller support voor Games.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Of je nu een complexe RTS speelt of een simpele puzzle game. FaceCursor integreert direct met de Windows HID-laag, waardoor games het als een echte muis zien. Geen anti-cheat problemen.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400 w-5 h-5 flex-shrink-0" />
                  <span>Houd je ogen dicht om een klik vast te houden (slepen).</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400 w-5 h-5 flex-shrink-0" />
                  <span>Lag-vrije 144hz tracking (afhankelijk van webcam FPS).</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400 w-5 h-5 flex-shrink-0" />
                  <span>Compatibel met Steam, Epic Games en Xbox PC app.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive AI Tech */}
        <section id="technology" className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">De Kracht Onder de Motorkap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
              FaceCursor is gebouwd op de schouders van open-source giganten. We gebruiken het lichtgewicht maar krachtige <strong>insightface</strong> model via HuggingFace voor real-time 68-point face landmark mapping.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="glass-panel p-8 rounded-2xl">
                <Zap className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">&lt; 10ms Latency</h3>
                <p className="text-muted-foreground">Door het gebruik van Windows ML C++ inferentie minimaliseren we de vertraging tussen jouw gezicht en de muiscursor.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl">
                <Eye className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Micro-Expressies</h3>
                <p className="text-muted-foreground">Onderscheid tussen een natuurlijke knipper en een intentionele 'klik'. De sensitiviteit is volledig zelf in te stellen.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl">
                <Shield className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">100% Lokaal Privacy</h3>
                <p className="text-muted-foreground">Jouw camerabeelden verlaten nooit je pc. De insightface inferentie wordt volledig on-device op je GPU of CPU uitgevoerd.</p>
              </div>
            </div>
        </section>

        {/* CTA section */}
        <section id="download" className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="glass-panel p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Klaar om je handen rust te geven?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Download FaceCursor voor Windows 11. Werkt met elke standaard webcam. Binnen 2 minuten geïnstalleerd.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mx-auto">
                <Download className="w-5 h-5" />
                Download FaceCursor (v1.2.0)
              </button>
              <p className="text-xs text-muted-foreground mt-4">Systeemvereisten: Windows 11 (64-bit), Webcam (720p of hoger), 4GB RAM.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-12 text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Crosshair className="w-5 h-5" />
            <span className="font-display font-bold text-lg">FaceCursor</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          <div className="text-xs">
            Powered by <a href="https://huggingface.co/deepghs/insightface" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Hugging Face (InsightFace)</a>.
          </div>
        </div>
      </footer>
    </div>
  );
}
