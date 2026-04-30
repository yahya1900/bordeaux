import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Bath,
  BedDouble,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronRight,
  Coffee,
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
  X,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const routes = [
  { label: 'Accueil', path: '/', component: HomePage },
  { label: 'Les logements', path: '/logements', component: ListingsPage },
  { label: 'Nos services', path: '/services', component: ServicesPage },
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
    title: 'Studio Gare Saint-Jean',
    location: 'Bordeaux Gare Saint-Jean',
    price: '89',
    guests: '4',
    beds: '1',
    baths: '1',
    tag: 'Studio',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVg7qfQeF3wopQP4F4NyZK0AxYfmwooXL8XcRqSqtmTBHTm77fg1Oxdb_eCZCy8ZiJnLQKWzZStAnl2NeCsRnpfjdHFYpG-pefySPPfgd1tddBrEZv4ZAokCgmrIWmVNwPLrEAWG20GT2JNUDO6nDi-UrVH-3cPgpLfxDJmDm_4ZKPEJMstOgg87hSBO4w2YVJC9v-vaLkSVpxc958i0PB_FNhAQtWp4W4Oj-odGW1igxG67pqTiflQ3x4jhRdOovu7eIqgTwK09I',
  },
  {
    title: 'Appartement Sacre-Coeur',
    location: 'Quartier Sacre-Coeur',
    price: '115',
    guests: '2',
    beds: '1',
    baths: '1',
    tag: 'Calme',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ve1DBp_50nhPu_scWTV6hMgniyUm5elxa6rZuznOToQXJ3TU5fnL1G4FcXH8Fvj4fEwo7qcCXrYWTWONdTkj5weFFIxA7jIfXDRdLmT6B0aBH-12COaik6bPzZt5gUJCZ2zXNfZDfK6UO8fypzoI6Ced_cuFGyH2JUOhbs8YWUujtXS8KF5ka5ZTQXvHgPzes1gq69WwVtUDAL83QQ240Zk1Tx9Gtkr7ASPPEq25ar3G_UBnHTv4gasQE_Qzl4JB96_tUnrBQNI',
  },
  {
    title: 'T2 pret a vivre',
    location: 'Centre de Bordeaux',
    price: '135',
    guests: '6',
    beds: '2',
    baths: '1',
    tag: 'Famille',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5W9P6R2DB_baewiMhPUoudT2XlqqHUKHe2uzArNEc6-Tsvyxca6TvoTO6BiF2CJMEmoA1-FSA5z7bq16jlpQyCtMt816_3XtrzDJiI-26N_zYycFGTjTKoLMgQ7VXe1lFxZ3J6OQxbK59LpvdRcmLEr6AUvkiqgytyl_CuNzaLzqkSf9IOnVWND-k8Rqthl-3Z-kh8OUcNyw7ak_jX1Qey1DjCUY2NFPKRoObLfWxck-U_XYkG9Np12pg6-qvzQ2jsXtIKh9wpGY',
  },
  {
    title: 'Appartement T1 a T4',
    location: 'Bordeaux sud',
    price: '149',
    guests: '2',
    beds: '1',
    baths: '1',
    tag: 'Long sejour',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnAB90F9bjVVLyCo4tWZcF5Te9lYsBRqTFL9lOdOyU5Tg25EyQmvSBMcKMiyUhJn-5CR6skXBL_COrWP1j4Ydd0GwQgsZ7naRC53yjUD15Yzem1oXkB7ua3Y3sfM1zQnAOkG2ZjGJ--fYKixgseZPFaggqVIhFuvWh8db2raKK22jus_ls09rWW2-BQKc6cAgnpaUm_ijWt44ivrXD4hEaeXPcoMghwyU5ix0ALfLfWF8QfgQIKbnONCn_4w5mDjRQZPZJiJe9coI',
  },
];

const serviceCards = [
  {
    icon: BedDouble,
    title: 'Literie de qualite',
    text: 'Matelas confortables, draps soigneusement choisis et linge fourni pour chaque sejour.',
  },
  {
    icon: KeyRound,
    title: 'Boite a cle',
    text: 'Arrivee autonome, rapide et securisee grace a des codes changes a chaque rotation.',
  },
  {
    icon: Sparkles,
    title: 'Proprete impeccable',
    text: 'Une equipe de nettoyage professionnelle prepare chaque logement avec exigence.',
  },
  {
    icon: Wifi,
    title: 'Internet haut debit',
    text: 'Connexion incluse dans les logements pour travailler ou se divertir sereinement.',
  },
  {
    icon: Coffee,
    title: 'Eau, the et cafe',
    text: 'Quelques attentions a l arrivee pour rendre l installation plus simple et agreable.',
  },
  {
    icon: Home,
    title: 'Cuisine prete a vivre',
    text: 'Ustensiles et equipements essentiels pour cuisiner comme a la maison.',
  },
  {
    icon: Car,
    title: 'Parking sur demande',
    text: 'Location de place possible sur reservation selon les disponibilites.',
  },
  {
    icon: BookOpen,
    title: 'Guide de bienvenue',
    text: 'Recommandations d activites, restaurants et idees de sejours de quelques jours a deux semaines.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Facture professionnelle',
    text: 'Facture envoyee a la fin du sejour pour justifier les reservations business.',
  },
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
      const pageTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      pageTimeline
        .fromTo('.route-page', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.45 })
        .from('.page-media', { scale: 1.08, opacity: 0.85, duration: 1.25 }, '-=0.35')
        .from('.page-hero > *', { y: 30, opacity: 0, duration: 0.72, stagger: 0.09 }, '-=0.82')
        .from('.stagger-item', { y: 20, opacity: 0, duration: 0.55, stagger: 0.06 }, '-=0.35');

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

      gsap.utils.toArray('.motion-card').forEach((card) => {
        const image = card.querySelector('img');
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -8, duration: 0.28, ease: 'power2.out' });
          if (image) gsap.to(image, { scale: 1.06, duration: 0.55, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.34, ease: 'power2.out' });
          if (image) gsap.to(image, { scale: 1, duration: 0.65, ease: 'power2.out' });
        });
      });

      window.setTimeout(() => ScrollTrigger.refresh(), 120);
    }, appRef);

    return () => context.revert();
  }, [route]);

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-background text-charcoal">
      <Header activePath={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <div key={route} className="route-page">
          <Page />
        </div>
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
          Aquitain Home
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
            <p className="mb-5 text-sm font-bold uppercase text-white/90">Aquitain Home</p>
            <h1 className="font-serif text-[44px] font-semibold leading-[1.08] sm:text-[58px] lg:text-[76px]">
              15 studios et appartements a Bordeaux Gare Saint-Jean.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Reservez votre sejour en direct, sans frais de plateforme, avec un contact reactif pour vous accompagner
              avant et pendant votre passage a Bordeaux.
            </p>
          </div>

          <div className="reveal rounded-lg bg-white p-4 text-charcoal shadow-ambient sm:p-5 lg:self-end">
            <BookingForm />
          </div>

          <div className="col-span-full grid gap-3 pt-2 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ['15', 'studios et appartements'],
              ['0', 'frais de plateforme'],
              ['4.99/5', 'satisfaction moyenne'],
            ].map(([value, label]) => (
              <div key={label} className="stagger-item border-t border-white/35 pt-4">
                <strong className="block font-serif text-3xl font-semibold">{value}</strong>
                <span className="text-sm text-white/75">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Philosophy />
      <DirectBenefits />
      <FeaturedListings />
      <Testimonials />
      <FaqSection />
      <HomeCta />
    </>
  );
}

function ListingsPage() {
  return (
    <PageFrame
      eyebrow="Les logements"
      title="Studios et appartements au coeur de Bordeaux."
      copy="Retrouvez les logements Aquitain Home autour de Bordeaux Gare Saint-Jean. Pour connaitre le prix exact, selectionnez vos dates de sejour."
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
      eyebrow="Nos services"
      title="Nous sommes aux petits soins des voyageurs."
      copy="Aquitain Home soigne les essentiels: sommeil, proprete, autonomie, internet, cuisine equipee et reponse rapide aux demandes."
    >
      <section className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="image-reveal min-h-[320px] overflow-hidden rounded-lg bg-surface-container lg:col-span-7">
          <img className="h-full min-h-[320px] w-full object-cover" src={serviceHeroImage} alt="Chambre premium dans un appartement bordelais" />
        </div>
        <div className="reveal lg:col-span-5">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Les petits plus du sejour</p>
          <h2 className="font-serif text-[32px] font-medium leading-tight text-primary sm:text-[40px]">
            Un logement simple a vivre, de l arrivee au depart.
          </h2>
          <div className="mt-8 grid gap-5">
            <Feature icon={BedDouble} title="Sommeil soigne" text="Matelas confortables, draps fournis, serviettes et torchons disponibles dans le logement." />
            <Feature icon={KeyRound} title="Arrivee autonome" text="Les boites a cle permettent une entree rapide, avec codes renouveles entre les voyageurs." />
            <Feature icon={Coffee} title="Arrivee pratique" text="Eau, the et cafe sont prevus pour commencer le sejour tranquillement." />
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-lg bg-surface-container p-5 sm:p-8 lg:p-12">
        <div className="reveal mb-10 text-center">
          <p className="mb-4 text-sm font-bold uppercase text-primary">Equipements et assistance</p>
          <h2 className="font-serif text-[32px] font-medium text-primary">Tout pour travailler, cuisiner et profiter.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <StayReadySection />
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
            <p className="mb-4 text-sm font-bold uppercase text-primary">Qui sommes-nous ?</p>
            <h1 className="font-serif text-[42px] font-semibold leading-tight text-primary sm:text-[58px]">
              Des hotes avec pour objectif de vous faire passer un sejour inoubliable.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Issue d une famille d hoteliers, l equipe Aquitain Home met son savoir-faire au service de logements
              meubles et d une relation client directe.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-7">
          <h2 className="font-serif text-[34px] font-medium text-primary sm:text-[44px]">Notre mission</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Aquitain Home s est construit autour de l accueil et de l hebergement a Bordeaux Gare Saint-Jean. La
            priorite reste simple: proposer des logements propres, bien equipes et faciles a vivre.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            Le contact direct avec les voyageurs permet de repondre vite, d adapter les informations et de garder une
            experience humaine a chaque etape du sejour.
          </p>
        </div>
        <div className="reveal relative lg:col-span-5">
          <div className="overflow-hidden rounded-lg bg-surface-container">
            <img className="aspect-[3/4] w-full object-cover" src={aboutPortraitImage} alt="Studio de creation et architecture interieure" />
          </div>
          <div className="absolute -bottom-7 left-5 rounded bg-primary p-6 text-white shadow-lift sm:-left-8 sm:p-8">
            <strong className="block font-serif text-4xl">2008</strong>
            <span className="text-sm uppercase text-white/75">debut de l histoire</span>
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
            <ValueCard icon={Star} title="Accueil" text="Un contact fluide, disponible et serviable avant, pendant et apres le sejour." />
            <ValueCard icon={ShieldCheck} title="Fiabilite" text="Des logements propres, equipes, avec linge fourni et procedures d arrivee claires." />
            <ValueCard icon={MapPin} title="Bordeaux Gare" text="Une implantation pratique autour de la Gare Saint-Jean et du quartier Sacre-Coeur." />
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-8 border-y border-outline/15 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['2008', 'acquisition de l hotel California'],
            ['2010', 'immeuble Sacre-Coeur'],
            ['2018', 'marque Aquitain Home'],
            ['2021', 'gamme du studio au T4'],
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
            Une evolution depuis l hotel vers l appartement meuble.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            L activite a demarre avec une culture hoteliere, puis s est specialisee dans l hebergement touristique en
            appartements de standing meubles, pour des sejours touristiques, mobilite ou longue duree.
          </p>
          <div className="mt-8 grid gap-4">
            <CheckLine text="2008: acquisition de l hotel California a Bordeaux Gare" />
            <CheckLine text="2010: offre mixte hotel et appartements au Sacre-Coeur" />
            <CheckLine text="2018: specialisation dans l hebergement touristique meuble" />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Des questions ? Contactez Aquitain Home directement."
      copy="Pour une reservation, une question pratique ou un sejour professionnel, l equipe fait le maximum pour repondre rapidement."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <section className="reveal rounded-lg border border-outline/10 bg-white p-5 shadow-ambient sm:p-8 lg:col-span-7 lg:p-12">
          <h2 className="mb-8 font-serif text-[31px] font-medium text-primary">Formulaire de contact</h2>
          <form className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <TextInput label="Prenom" placeholder="Jean" />
              <TextInput label="Nom" placeholder="Dupont" />
            </div>
            <TextInput label="Telephone" placeholder="05 56 33 60 00" />
            <TextInput label="Email" placeholder="jean.dupont@example.com" type="email" />
            <label>
              <span className="mb-2 block text-sm font-bold text-primary">Sujet</span>
              <select className="h-12 w-full rounded border border-outline/20 bg-background px-4 outline-none transition focus:border-primary">
                <option>Reservation d un appartement</option>
                <option>Question avant le sejour</option>
                <option>Sejour professionnel</option>
                <option>Location moyenne ou longue duree</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-bold text-primary">Message</span>
              <textarea
                rows="5"
                className="w-full rounded border border-outline/20 bg-background px-4 py-3 outline-none transition focus:border-primary"
                placeholder="Dites-nous comment nous pouvons vous aider."
              />
            </label>
            <button type="button" className="inline-flex min-h-14 items-center justify-center gap-2 rounded bg-primary px-6 font-serif text-white transition hover:bg-primary-container">
              Envoyer
              <ArrowRight size={18} strokeWidth={1.6} />
            </button>
          </form>
        </section>

        <aside className="grid gap-6 lg:col-span-5">
          <div className="reveal rounded-lg bg-surface-container p-6 sm:p-8">
            <div className="grid gap-8">
              <ContactLine icon={MapPin} label="Adresse" text="1-3 Rue Bauducheu, 33800 Bordeaux" />
              <ContactLine icon={Phone} label="Telephone" text="05 56 33 60 00" />
              <ContactLine icon={Mail} label="Email" text="contactaquitain@gmail.com" />
            </div>
            <p className="mt-8 border-t border-outline/20 pt-6 italic leading-7 text-muted">
              Ou contactez-nous directement par telephone ou email. Nous faisons le maximum pour repondre le plus
              rapidement possible a l ensemble des demandes.
            </p>
          </div>
          <div className="reveal relative min-h-[360px] overflow-hidden rounded-lg bg-surface-container">
            <img className="h-full min-h-[360px] w-full object-cover grayscale" src={mapImage} alt="Carte de Bordeaux autour de la Gare Saint-Jean" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lift">
                <MapPin size={23} strokeWidth={1.8} />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded bg-white/90 p-4 shadow-ambient">
              <p className="text-sm font-bold uppercase text-primary">Aquitain Home</p>
              <p className="text-sm text-muted">Bordeaux Gare Saint-Jean.</p>
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
      <Field icon={MapPin} label="Destination" placeholder="Bordeaux Gare Saint-Jean" />
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
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Reservation directe</p>
        <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[42px]">
          Le bon prix, le bon contact, le bon rythme de sejour.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          En reservant via Aquitain-home.com, vous evitez les intermediaires et vous parlez directement aux hotes qui
          connaissent les logements, le quartier et les besoins des voyageurs.
        </p>
        <div className="mt-9 grid gap-5">
          <Feature icon={ShieldCheck} title="Meilleur prix garanti" text="Si un meilleur tarif existe ailleurs pour les memes dates, l equipe s aligne et ajoute un rabais complementaire." />
          <Feature icon={Gem} title="Aucun frais de plateforme" text="La reservation en direct garde le prix plus clair et le contact plus simple." />
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

function DirectBenefits() {
  return (
    <section className="bg-surface-low py-20 md:py-24">
      <div className="section-shell">
        <div className="reveal mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Avantages de la reservation en direct</p>
          <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
            Moins d intermediaires, plus de clarte.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <ValueCard icon={ShieldCheck} title="Prix plus interessant" text="La reservation via le site evite les frais de plateforme et garde un tarif direct." />
          <ValueCard icon={Phone} title="Contact reactif" text="Vous echangez avec l equipe qui connait les logements et peut vous guider simplement." />
          <ValueCard icon={Star} title="Fidelisation" text="Le site met en avant un systeme de fidelisation digitalise pour encourager les retours." />
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

function Testimonials() {
  const reviews = [
    {
      name: 'Maxime',
      text: 'Accueil chaleureux, responsable disponible, logement calme et pratique pour cuisiner tranquillement.',
    },
    {
      name: 'Floriane',
      text: 'Appartement tres propre, chauffage efficace et equipements utiles pour un sejour confortable.',
    },
    {
      name: 'Marion',
      text: 'Contact fluide et serviable, avec une vraie souplesse meme apres le depart.',
    },
    {
      name: 'Edouard',
      text: 'Appartement en excellent etat, calme en arriere cour et recommande sans hesitation.',
    },
  ];

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="reveal mb-12 text-center">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Temoignages voyageurs</p>
        <h2 className="font-serif text-[34px] font-medium text-primary sm:text-[44px]">
          Des sejours simples, propres et bien accompagnes.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <article key={review.name} className="motion-card reveal rounded-lg border border-outline/10 bg-white p-6 shadow-ambient">
            <Star className="mb-5 text-secondary" size={22} fill="currentColor" strokeWidth={1.5} />
            <p className="leading-7 text-muted">{review.text}</p>
            <p className="mt-6 font-serif text-lg text-primary">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const questions = [
    ['Arrivee et depart', 'Le check-in est possible a partir de 15h et le checkout doit etre fait au plus tard a 11h.'],
    ['Parking', 'Le parking n est pas inclus, mais des places peuvent etre disponibles dans la rue ou sur reservation.'],
    ['Linge et menage', 'Les draps, serviettes, torchons et le menage sont inclus dans le sejour.'],
    ['Facture', 'Une facture peut etre envoyee par mail a la fin du sejour, utile pour les professionnels.'],
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1fr]">
        <div className="reveal">
          <p className="mb-4 text-sm font-bold uppercase text-secondary">Questions frequentes</p>
          <h2 className="font-serif text-[34px] font-medium leading-tight text-primary sm:text-[44px]">
            Les reponses utiles avant de reserver.
          </h2>
        </div>
        <div className="grid gap-4">
          {questions.map(([question, answer]) => (
            <details key={question} className="reveal rounded-lg border border-outline/10 bg-background p-5">
              <summary className="cursor-pointer font-serif text-xl text-primary">{question}</summary>
              <p className="mt-3 leading-7 text-muted">{answer}</p>
            </details>
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
        <FilterGroup title="Equipements" items={['Internet haut debit', 'Cuisine equipee', 'Linge fourni', 'Parking sur demande']} />
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
    <article className={`motion-card reveal group min-w-[82vw] md:min-w-0 ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
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
    <article className="motion-card reveal rounded-lg border border-outline/10 bg-white p-6 shadow-ambient md:p-8">
      <span className="mb-7 flex h-14 w-14 items-center justify-center rounded bg-primary text-white">
        <Icon size={25} strokeWidth={1.5} />
      </span>
      <h3 className="font-serif text-2xl font-medium text-primary">{service.title}</h3>
      <p className="mt-4 leading-7 text-muted">{service.text}</p>
    </article>
  );
}

function StayReadySection() {
  return (
    <section className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="reveal lg:col-span-5">
        <p className="mb-4 text-sm font-bold uppercase text-secondary">Sejours pros et longue duree</p>
        <h2 className="font-serif text-[32px] font-medium leading-tight text-primary sm:text-[40px]">
          Courts, moyens ou longs sejours: une solution souple.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted">
          Les logements conviennent aux touristes comme aux professionnels en mobilite. Les factures peuvent etre
          envoyees par mail a la fin du sejour.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { value: '15h', label: 'arrivee possible' },
            { value: '11h', label: 'depart standard' },
            { value: '100%', label: 'paiement securise Stripe' },
          ].map((metric) => (
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
    <article className="motion-card reveal rounded-lg bg-white p-8 shadow-ambient">
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
          Pret a passer un excellent sejour ?
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Reservez directement au meilleur prix et profitez d un contact simple avec l equipe Aquitain Home.
        </p>
        <div className="reveal mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={routeHref('/logements')} className="rounded bg-white px-8 py-4 font-serif text-primary transition hover:bg-surface-low">
            Explorer les biens
          </a>
          <a href={routeHref('/contact')} className="rounded border border-white px-8 py-4 font-serif text-white transition hover:bg-white/10">
            Contacter l equipe
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
            Aquitain Home
          </a>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            Logements en location courte duree a destination des touristes et professionnels, autour de Bordeaux
            Gare Saint-Jean.
          </p>
          <p className="mt-4 text-sm text-outline">Paiement 100% securise via Stripe, encryption AES-256 bits.</p>
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
        Copyright 2018 - 2026 Aquitain Home. Tous droits reserves.
      </div>
    </footer>
  );
}

function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-outline/15 bg-white/95 p-3 backdrop-blur-xl lg:hidden">
      <a href={routeHref('/contact')} className="flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-5 font-serif text-white">
        Reserver en direct
        <ArrowRight size={17} strokeWidth={1.6} />
      </a>
    </div>
  );
}

export default App;
