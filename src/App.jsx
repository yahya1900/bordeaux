import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
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

const routes = [
  { label: 'Accueil', path: '/', component: HomePage },
  { label: 'Logements', path: '/logements', component: ListingsPage },
  { label: 'Services', path: '/services', component: ServicesPage },
  { label: 'A propos', path: '/a-propos', component: AboutPage },
  { label: 'Contact', path: '/contact', component: ContactPage },
];

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuABbsJzEPqCs_g31iC4tAuDb8UTsORMGZXYNqsLCsNB4QTXMatJwFQyuDZXsruUBs-ODx0qSIoSWx71glL83ypf4lkFNQIZGpZaMDzFeWkcdWKyH5Hs8nfCoovidKSTHRhdf9Nw5ueF7IkTON28QPZ6gMKebJ6h5S1gnNwbtRg6lwFDC4Vy6rKd_0OFvjz88R9h7sozGs5ecRk8G3ZHegSGMwmyqb-or5PTc5BiPsNjN4ug1YzPWfAzBHPWElESC8qFPbmRfb_wohM';

const philosophyImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsRkeBUHN7iSfB16Maa63PetWFr7eCVb8hKD178cmjDvOeQPQNpQ31aATrYE7aLL-RQjgtU1VxnswHMqKnyjCZXKFzay7GgEzmXIZ5T5UE8ndPe-GEHm7P6_yYqMLji4Wwtx9JOTYml9lD09IMxGcUrlJDPwath6Fj-GdZSsDcmEuwF-60VrPh33KIoYtRcErbsiPdlvEoHzHWUiiqXiUhGf_pJchcQPugYOy_gKDONMZTZiPS6NzjlrgVw_zQOC9VL7v98xmMJpI';

const welcomeImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVqaEaoBOI7jWFWlDRwgV1xmxm21ezEACI1D04Sz5JzXytNH2IyBKOxKxVLWdglKvpLcFAxpnUSiD0vNspWAgu7RWISFspoPg0FYuTK3QQrp_hcwx6f5gwwIZE1NVQiKIhRU14B3MUwYCl4o4KmYInAeeqcQrEQuqGu1_TpSRi7_DWZl-eG47dLfUgYJK5wNV-cbd4Xk9dNkQY2h5ovOQQwHfD2DgZ28LVbYOTu5ofcp0i03JovRKVXmhtifykTC3stGSekmBQ9TQ';

const serviceHeroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAuWW3tnSwheLm2EGNmrIk_v649hYHFHzlygUuQ-fyr5HsXiKIsOY92K6LElCxPUdE9GKC_o2_k7T6QfGPjwWrB58iHZDKBvWFb_fArP_g9qqh_r35ab0O3v5ngHtKyA71shYiZFx-1mgeL_c8pCWTH5cGnPzoXLfXx1sc-cEzBa4qncJ33bMy1x0lE60R3OYL92eMwH-js04E6qmSpADcr3CIq1uR0DL0STsVcJM8V6QP9VJehe0TuAMfmGe8hgL-Fx38jlLO9_T0';

const ownerImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5dKzcjO71HJY0_brhGebWv3EwvpO-XQRzJCn1e5uJwawhUb8npesztm4Ri55UIiQ2wHML2KVLvE5xeDGDBSYHSGVH_xhwzvhS9VgG_5T0YfZSJWsp51Iy8cegPBYlMx8tSQ9qIlthlc9IN1i2D5ajdy0_tmD252OKWRgOOWFtitNkDFleiWPkQgHQxIzRQMxMXMaVolScnoPIOmy_h26WiLBEyKbb6jPSK8rmV69S93IEvKbWyA81EG34gyyF7R2Okg0rrvh0dZs';

const aboutHeroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD5CFOyRZMq9_JKJyrUIREfGHwknb4H1rtXcnDRPj8i0644aIagQHY4D5_acsvgASHzAYiZ8_CJvZvooBVoREqNGS9vvaW7iOdEJh9GBX1J2_GnsmmGxjdCxPaLEzTnfsgdvAiCCScTA3UjiPLROlnCDAQug7E7sSYtKN2xwgJ0srI2OyDRicYIN0Xqmt1DlNfj1j1luGGEWu77VX8iQ0-S6H7clc7IRVRGt4kCS1WWKNmPgyGsduoZHW14MC_L6IwhjVUrF8hWKkc';

const aboutPortraitImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDMwH-NjT0lUG8SmOGhX669nqPzrcYERVYHN00AMXDCzb27eYfChoWq4dKYuPteAaiAmNvdVRvHm38PNMEgZP8te8Dhg4f3ZR359YvE9WOLNhMYf_6XVxnxSc5K-rEnbL_hUZjxqy35QwwJUE4Vkw_qDAnSYibSG9bZdDPtJw8bGpWsLnb2tnDv7P9Nmjbl1TyRRxdkZhEt2hMSFfHi-4UQZl0c9IfSAs5so1ZZsdsMl0Ndp4R67vscQGxKeUOvkFx6vMmqZh8AKHA';

const aboutDiningImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPUR0iPnAZPCedpp3A3B7741BsFBR_LJJd8LO-MEPzKb4iXqDbQoyS27r1JPFY9ol1PeFCbxiV68yR0JpiO6ZjIuszrYpj3U6a74FHV42qFVQn0sPgsIJZA7wKSuHiagQ-fv6n7I_UBrBE58E-3LU4yUwDdOjiai7SaRSlf0tw0RjMKXS5Cr2ez_XM4PS3D8RyobgPqKYMoqS82QMJQm2EcGy_mK8qx8nwFHvlZoezLcqjjRBy_S7OVtvnS5AVSX4mJan5kcDOcgY';

const mapImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBICNOEDj5mTzRvXDiZBrx1YTEm5eHqDcjKF_CwpRvUJ9rwl3ijqeo3ZZxepUxcC4JSsu-Sq3DX2bvZxxnY8mnwTd2B3igIZEmtAwQy6n-5W_6w4rUGOv97o-xLANeLMC3sSMf2dK2FhHU5pWxnD5H8orcjdfBSN_eAvjCsYj8qaAHk04ZdZTuIn3GVgfsLr0i7lC6wGu1QkR4rz1QgQmoPt3beDkl0MCBmm8u7NEVV45DlEg6ytin9DboIHrVioDZl7S20q8m3n40';

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

const serviceCards = [
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
  const route = useHashRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const routeMap = useMemo(() => new Map(routes.map((item) => [item.path, item.component])), []);
  const Page = routeMap.get(route) || HomePage;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from('.page-hero', { y: 28, opacity: 0, duration: 0.75, ease: 'power3.out' });
      gsap.from('.page-media', { scale: 1.04, opacity: 0, duration: 1.1, ease: 'power3.out' });

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        });
      });

      gsap.utils.toArray('.image-reveal').forEach((element) => {
        gsap.to(element, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 78%',
          },
        });
      });
    }, appRef);

    return () => context.revert();
  }, [route]);

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-background text-charcoal">
      <Header activePath={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Page />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}

function useHashRoute() {
  const [route, setRoute] = useState(() => normalizePath(window.location.hash.replace('#', '')));

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = normalizePath(window.location.hash.replace('#', ''));
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', updateRoute);

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }

    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  return route;
}

function normalizePath(value) {
  const path = value && value.startsWith('/') ? value : `/${value || ''}`;
  const cleanPath = path.length > 1 ? path.replace(/\/$/, '') : path;
  return routes.some((item) => item.path === cleanPath) ? cleanPath : '/';
}

function routeHref(path) {
  return `#${path}`;
}

function Header({ activePath, menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-background/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4 lg:h-24">
        <a href={routeHref('/')} className="font-serif text-[22px] font-semibold italic text-primary sm:text-2xl">
          Bordeaux Heritage
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {routes.map((item) => (
            <a
              key={item.path}
              className={`nav-link font-serif text-[15px] ${activePath === item.path ? 'text-primary after:scale-x-100' : ''}`}
              href={routeHref(item.path)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={routeHref('/contact')} className="font-serif text-[15px] text-muted transition-colors hover:text-primary">
            Espace client
          </a>
          <a
            href={routeHref('/contact')}
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
          {routes.map((item) => (
            <a
              key={item.path}
              href={routeHref(item.path)}
              className={`flex items-center justify-between border-b border-outline/15 py-4 font-serif text-xl ${
                activePath === item.path ? 'text-secondary' : 'text-primary'
              }`}
            >
              {item.label}
              <ChevronRight size={19} strokeWidth={1.5} />
            </a>
          ))}
        </nav>
        <a
          href={routeHref('/contact')}
          className="section-shell flex items-center justify-center gap-2 rounded bg-primary px-5 py-4 font-serif text-white"
        >
          Demander une selection
          <ArrowRight size={18} strokeWidth={1.6} />
        </a>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative min-h-[900px] overflow-hidden pt-20 text-white sm:min-h-[860px] lg:pt-24">
        <div className="absolute inset-0">
          <img className="page-media h-full w-full object-cover" src={heroImage} alt="Place de la Bourse a Bordeaux au coucher du soleil" />
          <div className="absolute inset-0 bg-primary/35" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>

        <div className="section-shell relative z-10 grid min-h-[780px] items-end gap-8 pb-10 pt-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:pb-16">
          <div className="page-hero max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase text-white/90">Locations saisonnieres premium a Bordeaux</p>
            <h1 className="font-serif text-[44px] font-semibold leading-[1.08] sm:text-[58px] lg:text-[76px]">
              L art de vivre bordelais, dans des adresses choisies avec exigence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Appartements de caractere, conciergerie privee et sejours fluides pour voyageurs, professionnels et
              proprietaires qui veulent un service net.
            </p>
          </div>

          <div className="reveal rounded-lg bg-white p-4 text-charcoal shadow-ambient sm:p-5 lg:self-end">
            <BookingForm />
          </div>

          <div className="col-span-full grid gap-3 pt-2 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ['34', 'biens verifies'],
              ['24/7', 'assistance sejour'],
              ['4.9/5', 'experience voyageurs'],
            ].map(([value, label]) => (
              <div key={label} className="reveal border-t border-white/35 pt-4">
                <strong className="block font-serif text-3xl font-semibold">{value}</strong>
                <span className="text-sm text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Philosophy />
      <FeaturedListings />
      <HomeCta />
    </>
  );
}

function ListingsPage() {
  return (
    <PageFrame
      eyebrow="Exclusive curation"
      title="Refined living in the heart of Bordeaux."
      copy="Explore apartments, lofts and heritage residences selected for comfort, location and architectural value."
    >
      <div className="grid gap-10 lg:grid-cols-[270px_minmax(0,1fr)]">
        <FiltersPanel />
        <div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {properties.concat(properties.slice(0, 2)).map((property, index) => (
              <PropertyCard key={`${property.title}-${index}`} property={property} index={index} />
            ))}
          </div>
          <div className="reveal mt-16 flex items-center justify-center gap-6">
            <button className="font-serif text-outline">Precedent</button>
            <span className="border-b border-primary font-serif text-primary">01</span>
            <span className="font-serif text-outline">02</span>
            <button className="font-serif text-primary">Suivant</button>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function ServicesPage() {
  return (
    <PageFrame
      eyebrow="Art de vivre"
      title="Des services d exception pour une experience bordelaise sans friction."
      copy="Voyageurs, professionnels ou proprietaires: chaque service est pense pour garder le sejour simple, precis et confortable."
    >
      <section className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="image-reveal min-h-[320px] overflow-hidden rounded-lg bg-surface-container lg:col-span-7">
          <img className="h-full min-h-[320px] w-full object-cover" src={serviceHeroImage} alt="Chambre premium dans un appartement bordelais" />
        </div>
        <div className="reveal lg:col-span-5">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Pour les voyageurs</p>
          <h2 className="font-serif text-[32px] font-medium leading-tight text-primary sm:text-[40px]">
            Le confort d un palace, l intimite d un foyer.
          </h2>
          <div className="mt-8 grid gap-5">
            <Feature icon={Gem} title="Linge premium" text="Draps soigneusement choisis, serviettes moelleuses et preparation impeccable." />
            <Feature icon={Wine} title="Panier de bienvenue" text="Produits locaux, vins de Bordeaux et guide d adresses sur mesure." />
            <Feature icon={KeyRound} title="Arrivee fluide" text="Check-in autonome ou accueil personnalise selon le rythme du sejour." />
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-lg bg-surface-container p-5 sm:p-8 lg:p-12">
        <div className="reveal mb-10 text-center">
          <p className="mb-4 text-sm font-bold uppercase text-primary">Pour les professionnels</p>
          <h2 className="font-serif text-[32px] font-medium text-primary">Productivite et serenite</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <OwnersCompact />
    </PageFrame>
  );
}

function AboutPage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0">
          <img className="page-media h-full w-full object-cover" src={aboutHeroImage} alt="Architecture classique de Bordeaux" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/10" />
        </div>
        <div className="section-shell relative z-10 flex min-h-[650px] items-center">
          <div className="page-hero max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase text-primary">Notre histoire</p>
            <h1 className="font-serif text-[42px] font-semibold leading-tight text-primary sm:text-[58px]">
              L art de vivre bordelais, sublime par l excellence.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Depuis notre creation, nous preservons l ame architecturale de Bordeaux tout en offrant une experience
              de sejour moderne, precise et chaleureuse.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-7">
          <h2 className="font-serif text-[34px] font-medium text-primary sm:text-[44px]">Notre mission</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Bordeaux Heritage est ne d une passion pour le patrimoine bati et l hospitalite de luxe. Sejourner dans une
            ville historique doit etre une immersion totale dans son elegance, sans compromis sur le confort.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            Nous selectionnons des proprietes d exception, allions charme ancien et usages contemporains, et apportons
            une conciergerie capable d anticiper les attentes.
          </p>
        </div>
        <div className="reveal relative lg:col-span-5">
          <div className="overflow-hidden rounded-lg bg-surface-container">
            <img className="aspect-[3/4] w-full object-cover" src={aboutPortraitImage} alt="Studio de creation et architecture interieure" />
          </div>
          <div className="absolute -bottom-7 left-5 rounded bg-primary p-6 text-white shadow-lift sm:-left-8 sm:p-8">
            <strong className="block font-serif text-4xl">150+</strong>
            <span className="text-sm uppercase text-white/75">biens d exception geres</span>
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-20 md:py-28">
        <div className="section-shell">
          <div className="reveal mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase text-primary">Nos valeurs</p>
            <h2 className="font-serif text-[34px] font-medium text-primary">Les piliers de notre engagement</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <ValueCard icon={Star} title="Excellence" text="Un souci du detail constant, de la selection des tissus a la preparation de chaque arrivee." />
            <ValueCard icon={ShieldCheck} title="Confiance" text="Transparence pour les proprietaires et fiabilite absolue pour les voyageurs internationaux." />
            <ValueCard icon={MapPin} title="Expertise locale" text="Une connaissance intime des quartiers bordelais et un reseau local rigoureusement choisi." />
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-8 border-y border-outline/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['12', 'annees d experience'],
            ['4.9/5', 'note moyenne voyageurs'],
            ['3200+', 'sejours realises'],
            ['15', 'partenaires viticoles'],
          ].map(([value, label]) => (
            <div key={label} className="reveal text-center">
              <strong className="block font-serif text-[42px] font-semibold text-primary">{value}</strong>
              <span className="text-sm uppercase text-muted">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-12 pb-20 md:pb-28 lg:grid-cols-2 lg:items-center">
        <div className="image-reveal order-2 overflow-hidden rounded-lg lg:order-1">
          <img className="h-[420px] w-full object-cover md:h-[600px]" src={aboutDiningImage} alt="Table elegante dans une demeure bordelaise" />
        </div>
        <div className="reveal order-1 lg:order-2">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Notre engagement</p>
          <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
            Plus qu une location, une immersion culturelle.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Chaque demeure raconte une histoire: plafonds anciens, parquets d epoque, pierre blonde et vues sur les
            quartiers qui font le caractere de Bordeaux.
          </p>
          <div className="mt-8 grid gap-4">
            <CheckLine text="Selection rigoureuse des quartiers historiques" />
            <CheckLine text="Conciergerie privee pendant le sejour" />
            <CheckLine text="Experiences exclusives dans le vignoble" />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Get in touch"
      title="Concierge services tailored to your Bordeaux journey."
      copy="Whether you are seeking a private vineyard tour, a curated stay, or a property management partner, our local team can help."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <section className="reveal rounded-lg border border-outline/10 bg-white p-5 shadow-ambient sm:p-8 lg:col-span-7 lg:p-12">
          <h2 className="mb-8 font-serif text-[31px] font-medium text-primary">Inquiry form</h2>
          <form className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <TextInput label="First name" placeholder="Jean" />
              <TextInput label="Last name" placeholder="Dupont" />
            </div>
            <TextInput label="Email address" placeholder="jean.dupont@example.com" type="email" />
            <label>
              <span className="mb-2 block text-sm font-bold text-primary">Service of interest</span>
              <select className="h-12 w-full rounded border border-outline/20 bg-background px-4 outline-none transition focus:border-primary">
                <option>Luxury apartment rental</option>
                <option>Private vineyard tour</option>
                <option>Personal concierge</option>
                <option>Property management</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-bold text-primary">Message</span>
              <textarea
                rows="5"
                className="w-full rounded border border-outline/20 bg-background px-4 py-3 outline-none transition focus:border-primary"
                placeholder="Tell us about your travel plans."
              />
            </label>
            <button type="button" className="inline-flex min-h-14 items-center justify-center gap-2 rounded bg-primary px-6 font-serif text-white transition hover:bg-primary-container">
              Send inquiry
              <ArrowRight size={18} strokeWidth={1.6} />
            </button>
          </form>
        </section>

        <aside className="grid gap-6 lg:col-span-5">
          <div className="reveal rounded-lg bg-surface-container p-6 sm:p-8">
            <div className="grid gap-8">
              <ContactLine icon={MapPin} label="Office address" text="12 Quai des Chartrons, 33000 Bordeaux" />
              <ContactLine icon={Phone} label="Private line" text="+33 5 56 00 00 00" />
              <ContactLine icon={Mail} label="Direct inquiries" text="concierge@bordeauxheritage.com" />
            </div>
            <p className="mt-8 border-t border-outline/20 pt-6 italic leading-7 text-muted">
              We value your privacy as much as your experience. Our concierge team typically responds within 4
              business hours.
            </p>
          </div>
          <div className="reveal relative min-h-[360px] overflow-hidden rounded-lg bg-surface-container">
            <img className="h-full min-h-[360px] w-full object-cover grayscale" src={mapImage} alt="Carte du quartier des Chartrons a Bordeaux" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lift">
                <MapPin size={23} strokeWidth={1.8} />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded bg-white/90 p-4 shadow-ambient">
              <p className="text-sm font-bold uppercase text-primary">Visit our studio</p>
              <p className="text-sm text-muted">Located in the historic Chartrons district.</p>
            </div>
          </div>
        </aside>
      </div>
    </PageFrame>
  );
}

function PageFrame({ eyebrow, title, copy, children }) {
  return (
    <section className="section-shell pt-32 md:pt-40">
      <header className="page-hero mb-12 max-w-3xl md:mb-16">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">{eyebrow}</p>
        <h1 className="font-serif text-[40px] font-semibold leading-tight text-primary sm:text-[56px]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy}</p>
      </header>
      <div className="pb-20 md:pb-28">{children}</div>
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
      <a
        href={routeHref('/logements')}
        className="mt-1 inline-flex min-h-14 items-center justify-center gap-2 rounded bg-secondary px-5 py-4 font-serif text-white transition hover:bg-[#9e2015]"
      >
        <Search size={18} strokeWidth={1.8} />
        Rechercher
      </a>
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
          sans compliquer le sejour.
        </p>
        <div className="mt-9 grid gap-5">
          <Feature icon={ShieldCheck} title="Biens inspectes" text="Photos, equipements, literie et maintenance controles avant chaque mise en ligne." />
          <Feature icon={Gem} title="Interieurs calibres" text="Matiere, lumiere, mobilier et circulation penses pour une sensation premium au quotidien." />
        </div>
      </div>

      <div className="relative min-h-[460px] lg:col-span-7 lg:min-h-[640px]">
        <div className="image-reveal absolute right-0 top-0 h-[72%] w-full overflow-hidden rounded-lg bg-surface-container shadow-lift md:w-[78%]">
          <img className="h-full w-full object-cover" src={philosophyImage} alt="Appartement haussmannien lumineux a Bordeaux" />
        </div>
        <div className="image-reveal absolute bottom-0 left-0 h-[45%] w-[70%] overflow-hidden rounded-lg border-[10px] border-background bg-limestone shadow-ambient sm:w-[48%]">
          <img className="h-full w-full object-cover" src={welcomeImage} alt="Panier d accueil premium avec vin et produits locaux" />
        </div>
      </div>
    </section>
  );
}

function FeaturedListings() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase text-secondary">Selection heritage</p>
            <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
              Quelques adresses de la collection.
            </h2>
          </div>
          <a href={routeHref('/logements')} className="inline-flex items-center gap-2 font-serif text-primary">
            Voir tous les logements
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

function FiltersPanel() {
  return (
    <aside className="reveal rounded-lg border border-outline/10 bg-white p-5 shadow-ambient lg:sticky lg:top-32 lg:self-start">
      <h2 className="mb-6 text-sm font-bold uppercase text-primary">Filtres</h2>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
        <FilterGroup title="Availability" items={['Check in', 'Check out']} input />
        <FilterGroup title="Property type" items={['Haussmann apartments', 'Country estates', 'Contemporary lofts', 'Historic chateaux']} />
        <FilterGroup title="Amenities" items={['Wine cellar', 'Concierge service', 'Private balcony', 'Workspace']} />
      </div>
    </aside>
  );
}

function FilterGroup({ title, items, input = false }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase text-outline">{title}</h3>
      <div className="grid gap-3">
        {items.map((item) =>
          input ? (
            <label key={item} className="block border-b border-outline/20 pb-2">
              <span className="block text-[11px] font-bold uppercase text-outline">{item}</span>
              <input className="mt-1 w-full bg-transparent outline-none placeholder:text-muted/40" placeholder="Select date" />
            </label>
          ) : (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-muted">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              {item}
            </label>
          ),
        )}
      </div>
    </div>
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

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="reveal rounded-lg border border-outline/10 bg-white p-6 shadow-ambient md:p-8">
      <span className="mb-7 flex h-14 w-14 items-center justify-center rounded bg-primary text-white">
        <Icon size={25} strokeWidth={1.5} />
      </span>
      <h3 className="font-serif text-2xl font-medium text-primary">{service.title}</h3>
      <p className="mt-4 leading-7 text-muted">{service.text}</p>
    </article>
  );
}

function OwnersCompact() {
  return (
    <section className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="reveal lg:col-span-5">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Pour proprietaires</p>
        <h2 className="font-serif text-[32px] font-medium leading-tight text-primary sm:text-[40px]">
          Gestion patrimoniale, revenus optimises et standards constants.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          Nous gerons diffusion, prix, accueil, menage et maintenance pour proteger le niveau de votre bien.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {ownerMetrics.map((metric) => (
            <div key={metric.label} className="rounded bg-white p-5 shadow-ambient">
              <strong className="block font-serif text-3xl font-semibold text-primary">{metric.value}</strong>
              <span className="mt-1 block text-sm text-muted">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="image-reveal overflow-hidden rounded-lg bg-primary lg:col-span-7">
        <img className="h-[360px] w-full object-cover opacity-90 md:h-[520px]" src={ownerImage} alt="Equipe de gestion immobiliere premium a Bordeaux" />
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

function ValueCard({ icon: Icon, title, text }) {
  return (
    <article className="reveal rounded-lg bg-white p-8 shadow-ambient">
      <Icon className="mb-8 text-primary" size={34} strokeWidth={1.5} />
      <h3 className="font-serif text-2xl font-medium text-primary">{title}</h3>
      <p className="mt-4 leading-7 text-muted">{text}</p>
    </article>
  );
}

function CheckLine({ text }) {
  return (
    <p className="flex items-center gap-3 text-muted">
      <CheckCircle2 className="text-primary" size={19} strokeWidth={1.6} />
      <span>{text}</span>
    </p>
  );
}

function ContactLine({ icon: Icon, label, text }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 shrink-0 text-primary" size={20} strokeWidth={1.5} />
      <div>
        <p className="text-xs font-bold uppercase text-outline">{label}</p>
        <p className="mt-1 font-serif text-xl text-primary">{text}</p>
      </div>
    </div>
  );
}

function TextInput({ label, placeholder, type = 'text' }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-primary">{label}</span>
      <input
        type={type}
        className="h-12 w-full rounded border border-outline/20 bg-background px-4 outline-none transition focus:border-primary"
        placeholder={placeholder}
      />
    </label>
  );
}

function HomeCta() {
  return (
    <section className="bg-primary py-20 text-center text-white md:py-24">
      <div className="section-shell max-w-3xl">
        <h2 className="reveal font-serif text-[34px] font-medium leading-tight sm:text-[48px]">
          Pret a vivre l experience Heritage ?
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Decouvrez notre collection exclusive ou demandez une selection personnalisee a notre equipe locale.
        </p>
        <div className="reveal mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={routeHref('/logements')} className="rounded bg-white px-8 py-4 font-serif text-primary transition hover:bg-surface-low">
            Explorer les biens
          </a>
          <a href={routeHref('/contact')} className="rounded border border-white px-8 py-4 font-serif text-white transition hover:bg-white/10">
            Contact concierge
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-outline/15 bg-white pb-24 lg:pb-0">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <div>
          <a href={routeHref('/')} className="font-serif text-2xl font-semibold italic text-primary">
            Bordeaux Heritage
          </a>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            Locations saisonnieres de prestige, conciergerie et gestion haut de gamme au coeur de Bordeaux.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Navigation</h3>
          <div className="mt-4 grid gap-3">
            {routes.map((item) => (
              <a key={item.path} href={routeHref(item.path)} className="text-sm text-muted transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
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
        2026 Bordeaux Heritage Premium Rentals. Tous droits reserves.
      </div>
    </footer>
  );
}

function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-outline/15 bg-white/95 p-3 backdrop-blur-xl lg:hidden">
      <a href={routeHref('/contact')} className="flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-5 font-serif text-white">
        Demander une selection
        <ArrowRight size={17} strokeWidth={1.6} />
      </a>
    </div>
  );
}

export default App;
