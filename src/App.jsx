import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const logements = [
  {
    title: "Studio confort Gare Saint-Jean",
    location: "Bordeaux Sud, 6 min à pied de la gare",
    price: "Dès 59 € / nuit",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio meublé lumineux avec lit double, bureau et cuisine équipée à Bordeaux",
    tags: ["Studio", "Cuisine équipée", "Wi-Fi", "Linge inclus"],
  },
  {
    title: "Appartement meublé pour séjour pro",
    location: "Proche tram C et centre historique",
    price: "Meilleur prix direct",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Appartement meublé à Bordeaux avec chambre calme et décoration chaleureuse",
    tags: ["Facture", "Long séjour", "Arrivée autonome", "Ménage inclus"],
  },
  {
    title: "Appartement familial à Bordeaux",
    location: "Quartier calme près de Saint-Jean",
    price: "Sans frais plateforme",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    alt: "Appartement familial avec salon, cuisine ouverte et espace repas à Bordeaux",
    tags: ["2 à 4 voyageurs", "Calme", "Tout équipé", "Contact direct"],
  },
];

const seoKeywords = [
  "appartement Bordeaux pas cher",
  "studio Bordeaux Gare Saint-Jean",
  "location meublée Bordeaux",
  "logement courte durée Bordeaux",
  "appart hôtel Bordeaux",
  "séjour professionnel Bordeaux",
];

const faqs = [
  {
    question: "Comment réserver un appartement à Bordeaux pas cher ?",
    answer:
      "Le plus simple est de réserver en direct avec Aquitain Home. Vous évitez les frais de plateforme et vous accédez au meilleur tarif disponible pour les mêmes dates.",
  },
  {
    question: "Où sont situés les logements Aquitain Home ?",
    answer:
      "Les studios et appartements sont situés à Bordeaux, avec un positionnement pratique autour de la Gare Saint-Jean, du tram et des accès vers le centre-ville.",
  },
  {
    question: "Les logements conviennent-ils aux longs séjours ?",
    answer:
      "Oui. Les logements sont meublés, équipés et adaptés aux séjours touristiques, professionnels, moyens séjours et longues durées selon disponibilité.",
  },
  {
    question: "Puis-je obtenir une facture pour mon entreprise ?",
    answer:
      "Oui. Aquitain Home peut délivrer une facture professionnelle à la fin du séjour, pratique pour les déplacements de travail à Bordeaux.",
  },
];

function App() {
  const rootRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    document.getElementById("logements")?.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='hero']", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from("[data-animate='card']", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        delay: 0.25,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-paper text-ink">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="sticky top-0 z-50 border-b border-bordeaux-100/80 bg-paper/95 backdrop-blur-xl">
        <nav className="container-page flex items-center justify-between py-4" aria-label="Navigation principale">
          <a href="/" className="flex items-center gap-3" aria-label="Aquitain Home accueil">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-bordeaux-800 font-display text-lg font-bold text-white">
              AH
            </span>
            <span>
              <span className="block font-display text-xl font-bold text-bordeaux-800">Aquitain Home</span>
              <span className="hidden text-xs font-semibold uppercase text-gold-700 sm:block">
                Logements Bordeaux
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-stone-700 md:flex">
            <a href="#logements" className="hover:text-bordeaux-800">
              Les logements
            </a>
            <a href="#avantages" className="hover:text-bordeaux-800">
              Réservation directe
            </a>
            <a href="#faq" className="hover:text-bordeaux-800">
              FAQ
            </a>
          </div>

          <a
            href="#reservation"
            className="rounded-full bg-bordeaux-800 px-4 py-2.5 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-bordeaux-900 sm:px-5"
          >
            Réserver
          </a>
        </nav>
      </header>

      <main id="contenu">
        <section className="relative overflow-hidden">
          <div className="container-page grid gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 lg:py-24">
            <div>
              <p data-animate="hero" className="mb-4 text-sm font-extrabold uppercase text-gold-700">
                15 studios et appartements à Bordeaux Gare Saint-Jean
              </p>
              <h1
                data-animate="hero"
                className="max-w-3xl font-display text-4xl font-bold leading-tight text-bordeaux-900 sm:text-5xl lg:text-6xl"
              >
                Appartement à Bordeaux pas cher, meublé et réservé en direct.
              </h1>
              <p data-animate="hero" className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                Aquitain Home propose des logements courte durée et longue durée à Bordeaux : studios,
                appartements équipés, meilleur prix garanti, aucun frais de plateforme et contact direct
                avec l’hôte.
              </p>

              <form
                id="reservation"
                data-animate="hero"
                onSubmit={handleSearch}
                className="mt-8 grid gap-3 rounded-2xl border border-bordeaux-100 bg-white p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_auto]"
                aria-label="Recherche de disponibilité"
              >
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase text-stone-500">Arrivée</span>
                  <input type="date" className="w-full rounded-xl border-stone-200 bg-linen px-3 py-3 text-sm outline-none focus:border-bordeaux-800 focus:ring-bordeaux-800" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase text-stone-500">Départ</span>
                  <input type="date" className="w-full rounded-xl border-stone-200 bg-linen px-3 py-3 text-sm outline-none focus:border-bordeaux-800 focus:ring-bordeaux-800" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase text-stone-500">Voyageurs</span>
                  <select className="w-full rounded-xl border-stone-200 bg-linen px-3 py-3 text-sm outline-none focus:border-bordeaux-800 focus:ring-bordeaux-800">
                    <option>1 adulte</option>
                    <option>2 adultes</option>
                    <option>3 voyageurs</option>
                    <option>4 voyageurs</option>
                  </select>
                </label>
                <button className="rounded-xl bg-gold-400 px-6 py-3 font-extrabold text-bordeaux-900 transition hover:bg-gold-100 lg:self-end" type="submit">
                  Chercher
                </button>
              </form>

              <ul data-animate="hero" className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-stone-700">
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">Meilleur prix garanti</li>
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">Sans commission</li>
                <li className="rounded-full bg-white px-4 py-2 shadow-sm">Facture professionnelle</li>
              </ul>
            </div>

            <figure data-animate="hero" className="hero-media relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft md:min-h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
                alt="Appartement meublé confortable pour un séjour à Bordeaux avec lit, bureau et lumière naturelle"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl bg-white/92 p-5 shadow-soft backdrop-blur-md">
                <p className="text-sm font-bold uppercase text-gold-700">Aquitain Home</p>
                <p className="mt-1 font-display text-2xl font-bold text-bordeaux-900">Votre logement à deux pas de Bordeaux Saint-Jean</p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="avantages" className="bg-linen py-16 md:py-20">
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase text-gold-700">Réservation directe</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-bordeaux-900 sm:text-4xl">
                Pourquoi réserver votre logement à Bordeaux avec Aquitain Home ?
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Aucun frais de plateforme", "Un tarif plus clair pour trouver un appartement à Bordeaux pas cher, sans intermédiaire inutile."],
                ["Contact direct et réactif", "Une équipe disponible pour les questions avant, pendant et après votre séjour à Bordeaux."],
                ["Logements prêts à vivre", "Cuisine équipée, Wi-Fi, linge, serviettes et ménage inclus pour une arrivée simple."],
              ].map(([title, text]) => (
                <article key={title} data-animate="card" className="rounded-2xl bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold text-bordeaux-800">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="logements" className="py-16 md:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-extrabold uppercase text-gold-700">Les logements</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-bordeaux-900 sm:text-4xl">
                  Studios et appartements meublés à Bordeaux.
                </h2>
              </div>
              <p className="max-w-md text-stone-700">
                Sélection pensée pour les voyageurs, étudiants, familles et professionnels qui veulent un logement central, équipé et fiable.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {logements.map((logement) => (
                <article key={logement.title} data-animate="card" className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <img src={logement.image} alt={logement.alt} className="h-64 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <p className="text-sm font-extrabold uppercase text-gold-700">{logement.price}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-bordeaux-900">{logement.title}</h3>
                    <p className="mt-2 text-stone-600">{logement.location}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {logement.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-bordeaux-100 bg-bordeaux-50 px-3 py-1 text-xs font-bold text-bordeaux-800">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bordeaux-900 py-16 text-white md:py-20">
          <div className="container-page grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase text-gold-400">Séjours à Bordeaux</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Un logement adapté à chaque besoin.
              </h2>
              <p className="mt-5 leading-8 text-white/75">
                Que vous veniez pour un week-end, une mission professionnelle ou une installation plus longue,
                Aquitain Home met en avant des solutions simples, centrales et meublées près de la Gare Saint-Jean.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {seoKeywords.map((keyword) => (
                <li key={keyword} className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold text-white shadow-soft backdrop-blur">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase text-gold-700">Questions fréquentes</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-bordeaux-900 sm:text-4xl">
                Tout savoir avant de réserver.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="group rounded-2xl bg-white p-6 shadow-soft" open={item.question.includes("pas cher")}>
                  <summary className="cursor-pointer list-none font-display text-xl font-bold text-bordeaux-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7 text-stone-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container-page overflow-hidden rounded-[2rem] bg-linen p-8 shadow-soft md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase text-gold-700">Prêt à séjourner à Bordeaux ?</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-bordeaux-900">
                  Réservez votre appartement à Bordeaux au meilleur prix direct.
                </h2>
              </div>
              <a href="#reservation" className="inline-flex justify-center rounded-full bg-bordeaux-800 px-8 py-4 font-extrabold text-white shadow-lift transition hover:bg-bordeaux-900">
                Voir les disponibilités
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-2xl font-bold">Aquitain Home</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
              Logements en location courte, moyenne et longue durée à Bordeaux Gare Saint-Jean.
              Réservation directe, meilleur prix garanti et accompagnement réactif.
            </p>
          </div>
          <nav aria-label="Liens du site" className="space-y-2 text-sm text-white/70">
            <a href="#logements" className="block hover:text-white">Nos logements</a>
            <a href="#avantages" className="block hover:text-white">Nos avantages</a>
            <a href="#faq" className="block hover:text-white">FAQ</a>
          </nav>
          <div className="text-sm text-white/70">
            <p className="font-bold text-white">Paiement sécurisé</p>
            <p className="mt-2 leading-7">Réservation directe, sans frais de plateforme, avec facture disponible pour les professionnels.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
