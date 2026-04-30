import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Gem,
  Home,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wifi,
  Wine,
  X,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Logements', href: '#logements' },
  { label: 'Services', href: '#services' },
  { label: 'Proprietaires', href: '#proprietaires' },
  { label: 'Contact', href: '#contact' },
];

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuABbsJzEPqCs_g31iC4tAuDb8UTsORMGZXYNqsLCsNB4QTXMatJwFQyuDZXsruUBs-ODx0qSIoSWx71glL83ypf4lkFNQIZGpZaMDzFeWkcdWKyH5Hs8nfCoovidKSTHRhdf9Nw5ueF7IkTON28QPZ6gMKebJ6h5S1gnNwbtRg6lwFDC4Vy6rKd_0OFvjz88R9h7sozGs5ecRk8G3ZHegSGMwmyqb-or5PTc5BiPsNjN4ug1YzPWfAzBHPWElESC8qFPbmRfb_wohM';

const properties = [
  {
    title: 'Le Grand Theatre Suite',
    location: 'Triangle d Or, Bordeaux',
    price: '320',
    guests: '4',
    beds: '2',
    baths: '2',
    tag: 'Signature',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVg7qfQeF3wopQP4F4NyZK0AxYfmwooXL8XcRqSqtmTBHTm77fg1Oxdb_eCZCy8ZiJnLQKWzZStAnl2NeCsRnpfjdHFYpG-pefySPPfgd1tddBrEZv4ZAokCgmrIWmVNwPLrEAWG20GT2JNUDO6nDi-UrVH-3cPgpLfxDJmDm_4ZKPEJMstOgg87hSBO4w2YVJC9v-vaLkSVpxc958i0PB_FNhAQtWp4W4Oj-odGW1igxG67pqTiflQ3x4jhRdOovu7eIqgTwK09I',
  },
  {
    title: 'Chartrons Riverside Loft',
    location: 'Quais des Chartrons',
    price: '245',
    guests: '2',
    beds: '1',
    baths: '1',
    tag: 'Calme',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ve1DBp_50nhPu_scWTV6hMgniyUm5elxa6rZuznOToQXJ3TU5fnL1G4FcXH8Fvj4fEwo7qcCXrYWTWONdTkj5weFFIxA7jIfXDRdLmT6B0aBH-12COaik6bPzZt5gUJCZ2zXNfZDfK6UO8fypzoI6Ced_cuFGyH2JUOhbs8YWUujtXS8KF5ka5ZTQXvHgPzes1gq69WwVtUDAL83QQ240Zk1Tx9Gtkr7ASPPEq25ar3G_UBnHTv4gasQE_Qzl4JB96_tUnrBQNI',
  },
  {
    title: 'Saint-Pierre Penthouse',
    location: 'Vieux Bordeaux',
    price: '480',
    guests: '6',
    beds: '3',
    baths: '2',
    tag: 'Vue',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5W9P6R2DB_baewiMhPUoudT2XlqqHUKHe2uzArNEc6-Tsvyxca6TvoTO6BiF2CJMEmoA1-FSA5z7bq16jlpQyCtMt816_3XtrzDJiI-26N_zYycFGTjTKoLMgQ7VXe1lFxZ3J6OQxbK59LpvdRcmLEr6AUvkiqgytyl_CuNzaLzqkSf9IOnVWND-k8Rqthl-3Z-kh8OUcNyw7ak_jX1Qey1DjCUY2NFPKRoObLfWxck-U_XYkG9Np12pg6-qvzQ2jsXtIKh9wpGY',
  },
  {
    title: 'Palais Gallien Residence',
    location: 'Jardin Public',
    price: '450',
    guests: '2',
    beds: '1',
    baths: '1',
    tag: 'Recommande',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnAB90F9bjVVLyCo4tWZcF5Te9lYsBRqTFL9lOdOyU5Tg25EyQmvSBMcKMiyUhJn-5CR6skXBL_COrWP1j4Ydd0GwQgsZ7naRC53yjUD15Yzem1oXkB7ua3Y3sfM1zQnAOkG2ZjGJ--fYKixgseZPFaggqVIhFuvWh8db2raKK22jus_ls09rWW2-BQKc6cAgnpaUm_ijWt44ivrXD4hEaeXPcoMghwyU5ix0ALfLfWF8QfgQIKbnONCn_4w5mDjRQZPZJiJe9coI',
  },
];

const services = [
  {
    icon: Sparkles,
    title: 'Conciergerie privee',
    text: 'Reservations, transferts, tables confidentielles et experiences viticoles orchestrees avant votre arrivee.',
  },
  {
    icon: ShieldCheck,
    title: 'Standards hoteliers',
    text: 'Linge premium, inspection qualite, menage detaille et assistance disponible pendant tout le sejour.',
  },
  {
    icon: Wifi,
    title: 'Sejours business',
    text: 'Fibre rapide, bureaux lumineux, check-in autonome et facturation simplifiee pour les deplacements professionnels.',
  },
];

const ownerMetrics = [
  { value: '+28%', label: 'revenu moyen optimise' },
  { value: '4.9/5', label: 'satisfaction voyageurs' },
  { value: '24h', label: 'suivi operationnel' },
];

function App() {
  const appRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTimeline
        .from('.hero-image', { scale: 1.08, duration: 1.5 })
        .from('.hero-kicker, .hero-title, .hero-copy', { y: 34, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=1.05')
        .from('.booking-panel', { y: 28, opacity: 0, duration: 0.75 }, '-=0.5')
        .from('.hero-stat', { y: 16, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.35');

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
          },
        });
      });

      gsap.utils.toArray('.image-reveal').forEach((element) => {
        gsap.to(element, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 78%',
          },
        });
      });

      gsap.utils.toArray('.float-media').forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      });
    }, appRef);

    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-background text-charcoal">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <Philosophy />
        <Listings />
        <Services />
        <Owners />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-background/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4 lg:h-24">
        <a href="#accueil" onClick={closeMenu} className="font-serif text-[22px] font-semibold italic text-primary sm:text-2xl">
          Bordeaux Heritage
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link font-serif text-[15px]" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="font-serif text-[15px] text-muted transition-colors hover:text-primary">
            Espace client
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 font-serif text-[15px] text-white transition hover:bg-primary-container"
          >
            Reserver
            <ArrowRight size={17} strokeWidth={1.7} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-outline/25 text-primary lg:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-20 z-40 bg-background px-4 pb-7 shadow-ambient transition lg:hidden ${
          menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-outline/15 py-4 font-serif text-xl text-primary"
            >
              {item.label}
              <ChevronRight size={19} strokeWidth={1.5} />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={closeMenu}
          className="section-shell flex items-center justify-center gap-2 rounded bg-primary px-5 py-4 font-serif text-white"
        >
          Demander une selection
          <ArrowRight size={18} strokeWidth={1.6} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative min-h-[900px] overflow-hidden pt-20 text-white sm:min-h-[860px] lg:pt-24">
      <div className="absolute inset-0">
        <img
          className="hero-image h-full w-full object-cover"
          src={heroImage}
          alt="Place de la Bourse a Bordeaux au coucher du soleil"
        />
        <div className="absolute inset-0 bg-primary/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid min-h-[780px] items-end gap-8 pb-10 pt-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:pb-16">
        <div className="max-w-4xl">
          <p className="hero-kicker mb-5 text-sm font-bold uppercase text-white/90">Locations saisonnieres premium a Bordeaux</p>
          <h1 className="hero-title font-serif text-[44px] font-semibold leading-[1.08] sm:text-[58px] lg:text-[76px]">
            L art de vivre bordelais, dans des adresses choisies avec exigence.
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Appartements de caractere, conciergerie privee et sejours fluides pour voyageurs, professionnels et
            proprietaires qui veulent un service net.
          </p>
        </div>

        <div className="booking-panel rounded-lg bg-white p-4 text-charcoal shadow-ambient sm:p-5 lg:self-end">
          <BookingForm />
        </div>

        <div className="col-span-full grid gap-3 pt-2 sm:grid-cols-3 lg:max-w-3xl">
          {[
            ['34', 'biens verifies'],
            ['24/7', 'assistance sejour'],
            ['4.9/5', 'experience voyageurs'],
          ].map(([value, label]) => (
            <div key={label} className="hero-stat border-t border-white/35 pt-4">
              <strong className="block font-serif text-3xl font-semibold">{value}</strong>
              <span className="text-sm text-white/75">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  return (
    <form className="grid gap-3">
      <Field icon={MapPin} label="Destination" placeholder="Bordeaux centre" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <Field icon={CalendarDays} label="Arrivee" placeholder="Vos dates" />
        <Field icon={Users} label="Voyageurs" placeholder="2 adultes" />
      </div>
      <button
        type="button"
        className="mt-1 inline-flex min-h-14 items-center justify-center gap-2 rounded bg-secondary px-5 py-4 font-serif text-white transition hover:bg-[#9e2015]"
      >
        <Search size={18} strokeWidth={1.8} />
        Rechercher
      </button>
    </form>
  );
}

function Field({ icon: Icon, label, placeholder }) {
  return (
    <label className="flex min-h-16 items-center gap-3 rounded border border-outline/20 bg-white px-4 py-3 transition focus-within:border-primary">
      <Icon className="shrink-0 text-primary" size={19} strokeWidth={1.6} />
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold uppercase text-outline">{label}</span>
        <input
          className="mt-1 w-full border-0 bg-transparent p-0 text-[15px] text-charcoal outline-none placeholder:text-muted/50"
          placeholder={placeholder}
        />
      </span>
    </label>
  );
}

function Philosophy() {
  return (
    <section className="section-shell grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-8">
      <div className="reveal lg:col-span-5">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Notre philosophie</p>
        <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[42px]">
          Une curation precise, une hospitalite sans friction.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          Chaque adresse est selectionnee pour son architecture, son confort reel et sa capacite a raconter Bordeaux
          sans jamais compliquer le sejour.
        </p>
        <div className="mt-9 grid gap-5">
          <Feature icon={ShieldCheck} title="Biens inspectes" text="Photos, equipements, literie et maintenance controles avant chaque mise en ligne." />
          <Feature icon={Gem} title="Interieurs calibres" text="Matiere, lumiere, mobilier et circulation penses pour une sensation premium au quotidien." />
        </div>
      </div>

      <div className="relative min-h-[460px] lg:col-span-7 lg:min-h-[640px]">
        <div className="image-reveal float-media absolute right-0 top-0 h-[72%] w-full overflow-hidden rounded-lg bg-surface-container shadow-lift md:w-[78%]">
          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRkeBUHN7iSfB16Maa63PetWFr7eCVb8hKD178cmjDvOeQPQNpQ31aATrYE7aLL-RQjgtU1VxnswHMqKnyjCZXKFzay7GgEzmXIZ5T5UE8ndPe-GEHm7P6_yYqMLji4Wwtx9JOTYml9lD09IMxGcUrlJDPwath6Fj-GdZSsDcmEuwF-60VrPh33KIoYtRcErbsiPdlvEoHzHWUiiqXiUhGf_pJchcQPugYOy_gKDONMZTZiPS6NzjlrgVw_zQOC9VL7v98xmMJpI"
            alt="Appartement haussmannien lumineux a Bordeaux"
          />
        </div>
        <div className="image-reveal absolute bottom-0 left-0 h-[45%] w-[70%] overflow-hidden rounded-lg border-[10px] border-background bg-limestone shadow-ambient sm:w-[48%]">
          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqaEaoBOI7jWFWlDRwgV1xmxm21ezEACI1D04Sz5JzXytNH2IyBKOxKxVLWdglKvpLcFAxpnUSiD0vNspWAgu7RWISFspoPg0FYuTK3QQrp_hcwx6f5gwwIZE1NVQiKIhRU14B3MUwYCl4o4KmYInAeeqcQrEQuqGu1_TpSRi7_DWZl-eG47dLfUgYJK5wNV-cbd4Xk9dNkQY2h5ovOQQwHfD2DgZ28LVbYOTu5ofcp0i03JovRKVXmhtifykTC3stGSekmBQ9TQ"
            alt="Panier d accueil premium avec vin et produits locaux"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-surface-container text-primary">
        <Icon size={21} strokeWidth={1.6} />
      </span>
      <span>
        <strong className="block font-serif text-xl font-medium text-primary">{title}</strong>
        <span className="mt-1 block leading-7 text-muted">{text}</span>
      </span>
    </div>
  );
}

function Listings() {
  return (
    <section id="logements" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase text-secondary">Selection heritage</p>
            <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
              Logements pour week-end, mission ou long sejour.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-serif text-primary">
            Voir toute la collection
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>

        <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 lg:grid-cols-4">
          {properties.map((property, index) => (
            <PropertyCard key={property.title} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property, index }) {
  return (
    <article className={`reveal group min-w-[82vw] md:min-w-0 ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
        <img
          src={property.image}
          alt={`${property.title}, ${property.location}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-bold uppercase text-primary shadow-ambient">
          {property.tag}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-serif text-[23px] font-medium leading-tight text-primary">{property.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} strokeWidth={1.5} />
            {property.location}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <strong className="block font-serif text-2xl font-medium text-primary">{property.price} EUR</strong>
          <span className="text-xs text-outline">par nuit</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
        <Meta icon={Users} value={`${property.guests} voyageurs`} />
        <Meta icon={BedDouble} value={`${property.beds} lits`} />
        <Meta icon={Bath} value={`${property.baths} bains`} />
      </div>
    </article>
  );
}

function Meta({ icon: Icon, value }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded bg-surface-low px-3 py-2">
      <Icon size={15} strokeWidth={1.5} />
      {value}
    </span>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell py-20 md:py-28">
      <div className="reveal max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Services</p>
        <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
          Le confort d un palace, l independance d un appartement.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
        {services.map((service) => (
          <article key={service.title} className="reveal rounded-lg border border-outline/10 bg-white p-6 shadow-ambient md:p-8">
            <span className="mb-7 flex h-14 w-14 items-center justify-center rounded bg-primary text-white">
              <service.icon size={25} strokeWidth={1.5} />
            </span>
            <h3 className="font-serif text-2xl font-medium text-primary">{service.title}</h3>
            <p className="mt-4 leading-7 text-muted">{service.text}</p>
          </article>
        ))}
      </div>

      <div className="reveal mt-12 grid overflow-hidden rounded-lg bg-primary text-white lg:grid-cols-[0.95fr_1fr]">
        <div className="min-h-[340px] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuWW3tnSwheLm2EGNmrIk_v649hYHFHzlygUuQ-fyr5HsXiKIsOY92K6LElCxPUdE9GKC_o2_k7T6QfGPjwWrB58iHZDKBvWFb_fArP_g9qqh_r35ab0O3v5ngHtKyA71shYiZFx-1mgeL_c8pCWTH5cGnPzoXLfXx1sc-cEzBa4qncJ33bMy1x0lE60R3OYL92eMwH-js04E6qmSpADcr3CIq1uR0DL0STsVcJM8V6QP9VJehe0TuAMfmGe8hgL-Fx38jlLO9_T0"
            alt="Chambre premium dans un appartement bordelais"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase text-primary-soft">Voyageurs et professionnels</p>
          <h3 className="mt-4 font-serif text-[31px] font-medium leading-tight sm:text-[40px]">
            Arrivee autonome, accueil sur mesure, suivi humain.
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeatureDark icon={KeyRound} title="Check-in simple" />
            <FeatureDark icon={Wine} title="Experiences locales" />
            <FeatureDark icon={BriefcaseBusiness} title="Facturation pro" />
            <FeatureDark icon={Star} title="Guide personnalise" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureDark({ icon: Icon, title }) {
  return (
    <span className="flex items-center gap-3 rounded border border-white/15 bg-white/10 px-4 py-3">
      <Icon size={19} strokeWidth={1.5} />
      <span className="text-sm">{title}</span>
    </span>
  );
}

function Owners() {
  return (
    <section id="proprietaires" className="bg-limestone py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-5">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Pour proprietaires</p>
          <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
            Gestion patrimoniale, revenus optimises et standards constants.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Nous gerons la diffusion, les prix, l accueil, le menage et la maintenance pour que votre bien conserve
            son niveau tout en gagnant en performance.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {ownerMetrics.map((metric) => (
              <div key={metric.label} className="rounded bg-white/75 p-5">
                <strong className="block font-serif text-3xl font-semibold text-primary">{metric.value}</strong>
                <span className="mt-1 block text-sm text-muted">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal grid gap-4 lg:col-span-7 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-primary lg:row-span-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5dKzcjO71HJY0_brhGebWv3EwvpO-XQRzJCn1e5uJwawhUb8npesztm4Ri55UIiQ2wHML2KVLvE5xeDGDBSYHSGVH_xhwzvhS9VgG_5T0YfZSJWsp51Iy8cegPBYlMx8tSQ9qIlthlc9IN1i2D5ajdy0_tmD252OKWRgOOWFtitNkDFleiWPkQgHQxIzRQMxMXMaVolScnoPIOmy_h26WiLBEyKbb6jPSK8rmV69S93IEvKbWyA81EG34gyyF7R2Okg0rrvh0dZs"
              alt="Equipe de gestion immobiliere premium a Bordeaux"
              className="h-full min-h-[360px] w-full object-cover opacity-85"
            />
          </div>
          <OwnerTile icon={Home} title="Mise en valeur" text="Shooting, annonce, positionnement tarifaire et distribution multicanale." />
          <OwnerTile icon={Sparkles} title="Operations" text="Menage, linge, consommables, petites interventions et inspections regulieres." />
        </div>
      </div>
    </section>
  );
}

function OwnerTile({ icon: Icon, title, text }) {
  return (
    <article className="rounded-lg bg-background p-7 shadow-ambient">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-primary text-white">
        <Icon size={22} strokeWidth={1.5} />
      </span>
      <h3 className="font-serif text-2xl font-medium text-primary">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{text}</p>
    </article>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell grid gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="reveal">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Contact</p>
        <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
          Parlons de votre prochain sejour ou de votre bien.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          Une equipe locale vous repond avec une selection adaptee, que vous veniez pour deux nuits ou pour confier une
          adresse d exception.
        </p>
        <div className="mt-8 grid gap-3 text-muted">
          <ContactLine icon={Phone} text="+33 5 56 00 00 00" />
          <ContactLine icon={Mail} text="contact@bordeaux-heritage.fr" />
          <ContactLine icon={MapPin} text="24 Rue Esprit des Lois, 33000 Bordeaux" />
        </div>
      </div>

      <form className="reveal rounded-lg bg-white p-5 shadow-ambient sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput label="Nom" placeholder="Votre nom" />
          <TextInput label="Email" placeholder="vous@email.fr" type="email" />
          <TextInput label="Projet" placeholder="Sejour, bien, partenariat" className="sm:col-span-2" />
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-bold text-primary">Message</span>
            <textarea
              rows="5"
              className="w-full rounded border border-outline/20 bg-background px-4 py-3 outline-none transition focus:border-primary"
              placeholder="Dites-nous ce que vous recherchez."
            />
          </label>
        </div>
        <button
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-primary px-6 py-4 font-serif text-white transition hover:bg-primary-container sm:w-auto"
        >
          Envoyer la demande
          <ArrowRight size={18} strokeWidth={1.6} />
        </button>
      </form>
    </section>
  );
}

function ContactLine({ icon: Icon, text }) {
  return (
    <p className="flex items-center gap-3">
      <Icon className="text-primary" size={19} strokeWidth={1.5} />
      <span>{text}</span>
    </p>
  );
}

function TextInput({ label, placeholder, type = 'text', className = '' }) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-bold text-primary">{label}</span>
      <input
        type={type}
        className="h-12 w-full rounded border border-outline/20 bg-background px-4 outline-none transition focus:border-primary"
        placeholder={placeholder}
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-outline/15 bg-white pb-24 lg:pb-0">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <div>
          <a href="#accueil" className="font-serif text-2xl font-semibold italic text-primary">
            Bordeaux Heritage
          </a>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            Locations saisonnieres de prestige, conciergerie et gestion haut de gamme au coeur de Bordeaux.
          </p>
        </div>
        <FooterLinks title="Navigation" items={['Logements', 'Services', 'Proprietaires', 'Contact']} />
        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Newsletter</h3>
          <p className="mt-4 text-sm leading-6 text-muted">Recevez nos nouvelles adresses et inspirations locales.</p>
          <div className="mt-5 flex rounded border border-outline/20 bg-background p-1">
            <input className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" placeholder="Votre email" />
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white" aria-label="Envoyer">
              <ArrowRight size={17} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-outline/10 py-6 text-sm text-outline">
        © 2026 Bordeaux Heritage Premium Rentals. Tous droits reserves.
      </div>
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase text-primary">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted transition hover:text-primary">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-outline/15 bg-white/95 p-3 backdrop-blur-xl lg:hidden">
      <a href="#contact" className="flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-5 font-serif text-white">
        Demander une selection
        <ArrowRight size={17} strokeWidth={1.6} />
      </a>
    </div>
  );
}

export default App;
