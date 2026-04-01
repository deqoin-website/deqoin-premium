"use client";

import { ArrowRight, CheckCircle2, Award, History, Compass } from "lucide-react";

const stats = [
  { num: "10+", label: "Yıllık Deneyim", icon: History },
  { num: "150+", label: "Tamamlanan Proje", icon: CheckCircle2 },
  { num: "3", label: "Uzman Hizmet Alanı", icon: Compass },
  { num: "100%", label: "Müşteri Memnuniyeti", icon: Award },
];

const values = [
  {
    title: "Mükemmeliyetçilik",
    desc: "Her detayı, milimetrik bir kusursuzlukla planlıyor ve uyguluyoruz. Tasarımın özü, küçük ayrıntılarda saklıdır.",
  },
  {
    title: "Bütünsel Yaklaşım",
    desc: "Tasarım, uygulama ve malzeme seçimini iç içe geçmiş bir süreç olarak görüyoruz; estetiği teknikle harmanlıyoruz.",
  },
  {
    title: "Zamansızlık",
    desc: "Modası geçen trendler yerine, yıllar boyu karakterini koruyan, zamana meydan okuyan mekânlar yaratıyoruz.",
  },
  {
    title: "Müşteri Odaklılık",
    desc: "Kullanıcı alışkanlıklarını ve hayallerini merkeze alarak, her projeyi biricik bir hikâye olarak ele alıyoruz.",
  },
];

export default function AboutDetail() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden" 
        style={{ background: "#1a1a1a" }}
      >
        <div className="container-deqoin relative z-10">
          <div className="max-w-4xl">
            <span className="line-separator mb-4" />
            <p className="text-burgundy-light uppercase tracking-widest text-[0.65rem] mb-6 font-medium">Hakkımızda</p>
            <h1 className="text-white font-cormorant text-5xl md:text-7xl font-light leading-[1.1] mb-8">
              Mekanın Ruhu, <span className="italic">Zamanın İzinde</span> <br />
              deqoin design studio
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-inter leading-relaxed max-w-2xl font-light">
              Nevşehir / Kapadokya merkezli stüdyomuzda, geleneksel doku ile modernizmi buluşturuyor; yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>
        </div>
        {/* Background Accent */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
          style={{ 
            background: "linear-gradient(to left, var(--burgundy), transparent)",
          }}
        />
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-warm-white overflow-hidden">
        <div className="container-deqoin text-charcoal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8 leading-tight">
                Tasarımın <span className="italic text-burgundy">Kalbine</span> Yolculuk
              </h2>
              <div className="space-y-6 text-text-muted leading-relaxed font-inter font-light">
                <p>
                  2014 yılında Kapadokya&apos;nın büyülü coğrafyasında temelleri atılan deqoin design studio, iç mimarlık dünyasına yeni bir soluk getirme vizyonuyla doğdu. Başladığımız ilk günden itibaren, mekânların sadece duvarlardan ve eşyalardan ibaret olmadığını; onların yaşayan birer organizma, birer hikâye anlatıcısı olduğunu savunduk.
                </p>
                <p>
                  Kapadokya&apos;nın taş işçiliği ve doğal dokusunu, modern tasarımın minimalist çizgileriyle harmanlamayı kendimize görev edindik. Butik otel projelerinden prestijli konutlara, ticari ofislerden restorasyon çalışmalarına kadar geniş bir yelpazede &apos;premium&apos; hizmet sunuyoruz.
                </p>
                <p>
                  Bizim için tasarım; estetik bir kaygıdan öte, fonksiyonellikle ruhun buluştuğu noktadır. Müşterilerimizin hayat tarzını analiz ederek, onlara sadece bir ev ya da ofis değil; yansıttıkları kimliğin mekânsal bir karşılığını teslim ediyoruz.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80" 
                   alt="Studio Philosophy" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 />
              </div>
              {/* Floating Element */}
              <div 
                className="absolute -bottom-8 -left-8 p-10 hidden md:block" 
                style={{ background: "var(--burgundy)" }}
              >
                <p className="text-white font-cormorant italic text-2xl font-light">
                  &quot;Tasarım, bir problemi <br /> çözmenin en zarif yoludur.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Subtle Integration) */}
      <section className="py-20 border-y border-border-light bg-white">
        <div className="container-deqoin">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <item.icon size={32} className="text-burgundy opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-cormorant text-4xl font-light text-charcoal mb-1">
                  {item.num}
                </div>
                <div className="font-inter text-[0.65rem] uppercase tracking-widest text-text-muted">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="container-deqoin relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">Hizmet Felsefemiz</h2>
            <div className="w-16 h-px bg-burgundy mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-12 hover:shadow-xl transition-all duration-500 border-b-2 border-transparent hover:border-burgundy">
                <h3 className="font-cormorant text-2xl font-light text-charcoal mb-4 italic">{v.title}</h3>
                <p className="text-text-muted font-inter font-light text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="font-cormorant text-[25vw] uppercase font-bold tracking-tighter">Premium</span>
        </div>
      </section>

      {/* Expertise & Call to Action */}
      <section className="py-24 bg-warm-white">
        <div className="container-deqoin">
          <div className="bg-[#1a1a1a] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-white font-cormorant text-4xl md:text-5xl font-light mb-6 leading-tight">
                  Kapadokya&apos;nın <span className="italic">Kalbinde</span> <br /> Hayallerinizi Gerçeğe Dönüştürelim
                </h2>
                <p className="text-white/60 font-inter font-light">
                  Uzman ekibimiz ve kurumsal disiplinimizle projenizin her aşamasında yanınızdayız. deqoin ile tasarım sadece bir çizim değil, bir bütünlük hikayesidir.
                </p>
              </div>
              <a 
                href="/#contact"
                className="group inline-flex items-center gap-4 bg-burgundy hover:bg-white text-white hover:text-charcoal px-10 py-5 transition-all duration-500 text-[0.7rem] uppercase tracking-widest font-semibold"
              >
                İletişime Geçin
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="grid grid-cols-12 h-full">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="border-r border-white/10 last:border-0" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
