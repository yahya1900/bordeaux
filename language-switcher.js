(() => {
    if (window.BordeauxI18nLoaded) return;
    window.BordeauxI18nLoaded = true;

    const storageKey = "preferredLanguage";
    const translations = {
        "meta.home.title": {
            fr: "Bordeaux Heritage | Accueil",
            en: "Bordeaux Heritage | Home",
            es: "Bordeaux Heritage | Inicio"
        },
        "meta.about.title": {
            fr: "Bordeaux Heritage | À propos",
            en: "Bordeaux Heritage | About",
            es: "Bordeaux Heritage | Nosotros"
        },
        "meta.accommodations.title": {
            fr: "Bordeaux Heritage | Logements",
            en: "Bordeaux Heritage | Accommodations",
            es: "Bordeaux Heritage | Alojamientos"
        },
        "meta.contact.title": {
            fr: "Bordeaux Heritage | Contact",
            en: "Bordeaux Heritage | Contact",
            es: "Bordeaux Heritage | Contacto"
        },
        "nav.accommodations": {
            fr: "Logements",
            en: "Accommodations",
            es: "Alojamientos"
        },
        "nav.services": {
            fr: "Services",
            en: "Services",
            es: "Servicios"
        },
        "nav.about": {
            fr: "À propos",
            en: "About",
            es: "Nosotros"
        },
        "nav.contact": {
            fr: "Contact",
            en: "Contact",
            es: "Contacto"
        },
        "nav.login": {
            fr: "Connexion",
            en: "Login",
            es: "Iniciar sesión"
        },
        "nav.book": {
            fr: "Réserver",
            en: "Book Now",
            es: "Reservar"
        },
        "common.localGuide": {
            fr: "Guide local",
            en: "Local Guide",
            es: "Guía local"
        },
        "common.sustainability": {
            fr: "Durabilité",
            en: "Sustainability",
            es: "Sostenibilidad"
        },
        "common.privacy": {
            fr: "Politique de confidentialité",
            en: "Privacy Policy",
            es: "Política de privacidad"
        },
        "common.terms": {
            fr: "Conditions d'utilisation",
            en: "Terms of Service",
            es: "Condiciones de servicio"
        },
        "common.legal": {
            fr: "LÉGAL",
            en: "Legal",
            es: "LEGAL"
        },
        "common.explore": {
            fr: "Explorer",
            en: "Explore",
            es: "Explorar"
        },
        "common.exploration": {
            fr: "Exploration",
            en: "Exploration",
            es: "Exploración"
        },
        "common.discover": {
            fr: "DÉCOUVRIR",
            en: "Discover",
            es: "DESCUBRIR"
        },
        "common.navigation": {
            fr: "Navigation",
            en: "Navigation",
            es: "Navegación"
        },
        "common.company": {
            fr: "SOCIÉTÉ",
            en: "Company",
            es: "EMPRESA"
        },
        "common.newsletter": {
            fr: "Newsletter",
            en: "Newsletter",
            es: "Newsletter"
        },
        "common.newsletterCopy": {
            fr: "Recevez des inspirations de voyage sélectionnées et des avant-premières de propriétés exclusives.",
            en: "Receive curated travel inspiration and exclusive property previews.",
            es: "Reciba inspiración de viaje seleccionada y avances exclusivos de propiedades."
        },
        "common.emailPlaceholder": {
            fr: "Votre adresse e-mail",
            en: "Your email address",
            es: "Su dirección de correo electrónico"
        },
        "common.concierge": {
            fr: "Conciergerie",
            en: "Concierge",
            es: "Conserjería"
        },
        "common.conciergeServices": {
            fr: "Services de conciergerie",
            en: "Concierge Services",
            es: "Servicios de conserjería"
        },
        "common.copyright": {
            fr: "© 2024 Bordeaux Heritage Premium Rentals. Tous droits réservés.",
            en: "© 2024 Bordeaux Heritage Premium Rentals. All rights reserved.",
            es: "© 2024 Bordeaux Heritage Premium Rentals. Todos los derechos reservados."
        },
        "common.designed": {
            fr: "CONÇU POUR L'EXCELLENCE",
            en: "DESIGNED FOR EXCELLENCE",
            es: "DISEÑADO PARA LA EXCELENCIA"
        },
        "home.hero.eyebrow": {
            fr: "Locations Courte Durée Exclusives",
            en: "Exclusive Short-Term Rentals",
            es: "Alquileres de corta estancia exclusivos"
        },
        "home.hero.title": {
            fr: "L'art de vivre au cœur de Bordeaux",
            en: "The Art of Living in the Heart of Bordeaux",
            es: "El arte de vivir en el corazón de Burdeos"
        },
        "home.search.destination": {
            fr: "Destination",
            en: "Destination",
            es: "Destino"
        },
        "home.search.destinationPlaceholder": {
            fr: "Où séjourner ?",
            en: "Where to stay?",
            es: "¿Dónde alojarse?"
        },
        "home.search.duration": {
            fr: "Durée du séjour",
            en: "Stay Duration",
            es: "Duración de la estancia"
        },
        "home.search.datesPlaceholder": {
            fr: "Ajouter des dates",
            en: "Add dates",
            es: "Añadir fechas"
        },
        "home.search.guests": {
            fr: "Voyageurs",
            en: "Guests",
            es: "Huéspedes"
        },
        "home.search.guestsPlaceholder": {
            fr: "Ajouter des voyageurs",
            en: "Add guests",
            es: "Añadir huéspedes"
        },
        "home.search.button": {
            fr: "Rechercher",
            en: "Search",
            es: "Buscar"
        },
        "home.philosophy.eyebrow": {
            fr: "Notre philosophie",
            en: "Our Philosophy",
            es: "Nuestra filosofía"
        },
        "home.philosophy.title": {
            fr: "La sélection comme standard d'excellence.",
            en: "Curation as a Standard of Excellence.",
            es: "La selección como estándar de excelencia."
        },
        "home.philosophy.copy": {
            fr: "Nous ne proposons pas seulement un hébergement ; nous ouvrons la porte à l'art de vivre bordelais. Chaque bien de notre collection est choisi pour sa valeur architecturale, son raffinement intérieur et sa proximité avec le pouls culturel de la ville.",
            en: "We don't just provide accommodation; we offer a gateway to the authentic Bordeaux lifestyle. Each property in our portfolio is hand-selected for its architectural merit, interior refinement, and proximity to the city's cultural pulse.",
            es: "No ofrecemos solo alojamiento; abrimos una puerta al auténtico estilo de vida bordelés. Cada propiedad de nuestra colección se selecciona por su valor arquitectónico, su refinamiento interior y su proximidad al pulso cultural de la ciudad."
        },
        "home.standards.title": {
            fr: "Standards irréprochables",
            en: "Impeccable Standards",
            es: "Estándares impecables"
        },
        "home.standards.copy": {
            fr: "Services de conciergerie professionnels et linge de qualité hôtelière dans chaque appartement patrimonial.",
            en: "Professional concierge services and hotel-grade linens in every heritage apartment.",
            es: "Servicios profesionales de conserjería y ropa de cama de calidad hotelera en cada apartamento histórico."
        },
        "home.interiors.title": {
            fr: "Intérieurs sélectionnés",
            en: "Curated Interiors",
            es: "Interiores seleccionados"
        },
        "home.interiors.copy": {
            fr: "Des espaces pensés par le design, avec artisans locaux et esthétique française contemporaine.",
            en: "Design-led spaces featuring local artisans and contemporary French aesthetics.",
            es: "Espacios guiados por el diseño, con artesanos locales y estética francesa contemporánea."
        },
        "home.featured.eyebrow": {
            fr: "Collection en vedette",
            en: "Featured Collection",
            es: "Colección destacada"
        },
        "home.featured.title": {
            fr: "La sélection Heritage",
            en: "The Heritage Selection",
            es: "La selección Heritage"
        },
        "home.featured.all": {
            fr: "Voir tous les biens",
            en: "View all properties",
            es: "Ver todas las propiedades"
        },
        "home.location.golden": {
            fr: "Triangle d'Or, Bordeaux",
            en: "Golden Triangle, Bordeaux",
            es: "Triángulo de Oro, Burdeos"
        },
        "home.location.riverside": {
            fr: "Loft en bord de Garonne",
            en: "Riverside Loft",
            es: "Loft junto al río"
        },
        "home.location.oldTown": {
            fr: "Vieux Bordeaux",
            en: "Old Town Bordeaux",
            es: "Casco antiguo de Burdeos"
        },
        "home.twoBeds": {
            fr: "2 lits",
            en: "2 Beds",
            es: "2 camas"
        },
        "home.oneBed": {
            fr: "1 lit",
            en: "1 Bed",
            es: "1 cama"
        },
        "home.threeBeds": {
            fr: "3 lits",
            en: "3 Beds",
            es: "3 camas"
        },
        "home.twoGuests": {
            fr: "2 voyageurs",
            en: "2 Guests",
            es: "2 huéspedes"
        },
        "home.fourGuests": {
            fr: "4 voyageurs",
            en: "4 Guests",
            es: "4 huéspedes"
        },
        "home.sixGuests": {
            fr: "6 voyageurs",
            en: "6 Guests",
            es: "6 huéspedes"
        },
        "home.perNight": {
            fr: "par nuit",
            en: "per night",
            es: "por noche"
        },
        "home.testimonials.eyebrow": {
            fr: "Impressions voyageurs",
            en: "Guest Impressions",
            es: "Impresiones de huéspedes"
        },
        "home.testimonials.title": {
            fr: "Un engagement pour l'hospitalité",
            en: "A Commitment to Hospitality",
            es: "Un compromiso con la hospitalidad"
        },
        "home.testimonial.one": {
            fr: "\"Un séjour inoubliable. L'appartement était bien plus qu'un lieu pour dormir : c'était une immersion dans l'histoire de Bordeaux. Le service de conciergerie nous a aidés à réserver des visites privées de vignobles, le moment fort de notre voyage.\"",
            en: "\"An unforgettable stay. The apartment was more than just a place to sleep—it was an immersion into Bordeaux's history. The concierge service helped us book private vineyard tours that were the highlight of our trip.\"",
            es: "\"Una estancia inolvidable. El apartamento fue mucho más que un lugar para dormir: fue una inmersión en la historia de Burdeos. El servicio de conserjería nos ayudó a reservar visitas privadas a viñedos, el punto culminante del viaje.\""
        },
        "home.testimonial.two": {
            fr: "\"Une attention au détail impeccable. De la qualité du linge au guide local sélectionné, tout chez Bordeaux Heritage respire le premium. Vraiment la meilleure façon de vivre la ville comme un local.\"",
            en: "\"Impeccable attention to detail. From the linen quality to the curated local guide, everything about Bordeaux Heritage feels premium. Truly the only way to experience the city as a local would.\"",
            es: "\"Una atención al detalle impecable. Desde la calidad de la ropa de cama hasta la guía local seleccionada, todo en Bordeaux Heritage se siente premium. Realmente la única forma de vivir la ciudad como un local.\""
        },
        "home.location.london": {
            fr: "Londres, Royaume-Uni",
            en: "London, UK",
            es: "Londres, Reino Unido"
        },
        "home.location.amsterdam": {
            fr: "Amsterdam, Pays-Bas",
            en: "Amsterdam, NL",
            es: "Ámsterdam, Países Bajos"
        },
        "home.cta.title": {
            fr: "Prêt à découvrir votre maison à Bordeaux ?",
            en: "Ready to discover your home in Bordeaux?",
            es: "¿Listo para descubrir su hogar en Burdeos?"
        },
        "home.cta.copy": {
            fr: "Explorez notre collection d'appartements de luxe et commencez à planifier votre expérience française sur mesure dès aujourd'hui.",
            en: "Explore our curated collection of luxury apartments and start planning your bespoke French experience today.",
            es: "Explore nuestra colección seleccionada de apartamentos de lujo y empiece hoy a planificar su experiencia francesa a medida."
        },
        "home.cta.properties": {
            fr: "Parcourir les biens",
            en: "Browse Properties",
            es: "Ver propiedades"
        },
        "home.cta.concierge": {
            fr: "Contacter la conciergerie",
            en: "Contact Concierge",
            es: "Contactar con conserjería"
        },
        "home.footer.copy": {
            fr: "Un art de vivre court séjour pour le voyageur moderne. Découvrez l'âme architecturale de Bordeaux à travers notre collection de demeures historiques.",
            en: "Elevated short-term living for the modern traveler. Experience the architectural soul of Bordeaux through our curated portfolio of historic residences.",
            es: "Estancias de corta duración elevadas para el viajero moderno. Experimente el alma arquitectónica de Burdeos a través de nuestra colección de residencias históricas."
        },
        "about.hero.eyebrow": {
            fr: "NOTRE HISTOIRE",
            en: "OUR STORY",
            es: "NUESTRA HISTORIA"
        },
        "about.hero.title": {
            fr: "L'art de vivre bordelais, sublimé par l'excellence.",
            en: "The Bordeaux art of living, elevated by excellence.",
            es: "El arte de vivir bordelés, elevado por la excelencia."
        },
        "about.hero.copy": {
            fr: "Depuis notre création, nous nous engageons à préserver l'âme architecturale de Bordeaux tout en offrant une expérience de séjour moderne et raffinée.",
            en: "Since our founding, we have been committed to preserving Bordeaux's architectural soul while offering a modern, refined stay experience.",
            es: "Desde nuestra creación, nos comprometemos a preservar el alma arquitectónica de Burdeos mientras ofrecemos una experiencia de estancia moderna y refinada."
        },
        "about.mission.title": {
            fr: "Notre Mission",
            en: "Our Mission",
            es: "Nuestra misión"
        },
        "about.mission.copyOne": {
            fr: "Bordeaux Heritage est né d'une passion pour le patrimoine bâti et l'hospitalité de luxe. Nous croyons que séjourner dans une ville aussi historique que Bordeaux doit être une immersion totale dans son élégance intemporelle.",
            en: "Bordeaux Heritage was born from a passion for built heritage and luxury hospitality. We believe that staying in a city as historic as Bordeaux should be a complete immersion in its timeless elegance.",
            es: "Bordeaux Heritage nació de una pasión por el patrimonio construido y la hospitalidad de lujo. Creemos que alojarse en una ciudad tan histórica como Burdeos debe ser una inmersión total en su elegancia atemporal."
        },
        "about.mission.copyTwo": {
            fr: "Notre mission est de curater des propriétés d'exception, d'allier le confort contemporain au charme de l'ancien, et d'offrir un service de conciergerie personnalisé qui dépasse les attentes des voyageurs les plus exigeants.",
            en: "Our mission is to curate exceptional properties, combine contemporary comfort with historic charm, and offer personalized concierge service that exceeds the expectations of the most discerning travelers.",
            es: "Nuestra misión es seleccionar propiedades excepcionales, combinar el confort contemporáneo con el encanto histórico y ofrecer un servicio de conserjería personalizado que supere las expectativas de los viajeros más exigentes."
        },
        "about.managed": {
            fr: "Biens d'exception gérés",
            en: "Exceptional properties managed",
            es: "Propiedades excepcionales gestionadas"
        },
        "about.values.eyebrow": {
            fr: "NOS VALEURS",
            en: "OUR VALUES",
            es: "NUESTROS VALORES"
        },
        "about.values.title": {
            fr: "Les piliers de notre engagement",
            en: "The pillars of our commitment",
            es: "Los pilares de nuestro compromiso"
        },
        "about.excellence.copy": {
            fr: "Un souci du détail obsessionnel, de la sélection des tissus à la préparation millimétrée de chaque arrivée.",
            en: "An obsessive attention to detail, from fabric selection to the meticulous preparation of every arrival.",
            es: "Una atención obsesiva al detalle, desde la selección de telas hasta la preparación minuciosa de cada llegada."
        },
        "about.excellence.title": {
            fr: "Excellence",
            en: "Excellence",
            es: "Excelencia"
        },
        "about.trust.title": {
            fr: "Confiance",
            en: "Trust",
            es: "Confianza"
        },
        "about.trust.copy": {
            fr: "Une transparence totale envers nos propriétaires et une fiabilité absolue pour nos voyageurs internationaux.",
            en: "Total transparency for our owners and absolute reliability for our international travelers.",
            es: "Transparencia total para nuestros propietarios y fiabilidad absoluta para nuestros viajeros internacionales."
        },
        "about.local.title": {
            fr: "Expertise Locale",
            en: "Local Expertise",
            es: "Experiencia local"
        },
        "about.local.copy": {
            fr: "Une connaissance intime des quartiers bordelais et un réseau de partenaires locaux rigoureusement sélectionnés.",
            en: "An intimate knowledge of Bordeaux neighborhoods and a carefully selected network of local partners.",
            es: "Un conocimiento íntimo de los barrios de Burdeos y una red de socios locales cuidadosamente seleccionados."
        },
        "about.years": {
            fr: "ANNÉES D'EXPÉRIENCE",
            en: "YEARS OF EXPERIENCE",
            es: "AÑOS DE EXPERIENCIA"
        },
        "about.rating": {
            fr: "NOTE MOYENNE VOYAGEURS",
            en: "AVERAGE GUEST RATING",
            es: "VALORACIÓN MEDIA DE HUÉSPEDES"
        },
        "about.stays": {
            fr: "SÉJOURS RÉALISÉS",
            en: "STAYS COMPLETED",
            es: "ESTANCIAS REALIZADAS"
        },
        "about.partners": {
            fr: "PARTENAIRES VITICOLES",
            en: "WINE PARTNERS",
            es: "SOCIOS VITÍCOLAS"
        },
        "about.commitment.eyebrow": {
            fr: "NOTRE ENGAGEMENT",
            en: "OUR COMMITMENT",
            es: "NUESTRO COMPROMISO"
        },
        "about.commitment.title": {
            fr: "Plus qu'une location, une immersion culturelle",
            en: "More than a rental, a cultural immersion",
            es: "Más que un alquiler, una inmersión cultural"
        },
        "about.commitment.copy": {
            fr: "Chaque demeure de notre collection raconte une histoire. Des plafonds à la française aux parquets d'époque en passant par les escaliers en pierre monumentaux, nous sélectionnons des lieux qui vibrent au rythme de l'histoire de Bordeaux.",
            en: "Every residence in our collection tells a story. From French-style ceilings to period parquet floors and monumental stone staircases, we select places that resonate with Bordeaux's history.",
            es: "Cada residencia de nuestra colección cuenta una historia. Desde techos a la francesa hasta suelos de parquet de época y escaleras monumentales de piedra, seleccionamos lugares que vibran con la historia de Burdeos."
        },
        "about.commitment.pointOne": {
            fr: "Sélection rigoureuse des quartiers historiques",
            en: "Careful selection of historic neighborhoods",
            es: "Selección rigurosa de barrios históricos"
        },
        "about.commitment.pointTwo": {
            fr: "Conciergerie privée 24h/24 et 7j/7",
            en: "Private concierge 24/7",
            es: "Conserjería privada 24/7"
        },
        "about.commitment.pointThree": {
            fr: "Expériences exclusives dans le vignoble",
            en: "Exclusive vineyard experiences",
            es: "Experiencias exclusivas en viñedos"
        },
        "about.commitment.button": {
            fr: "Découvrir nos services",
            en: "Discover our services",
            es: "Descubrir nuestros servicios"
        },
        "about.cta.title": {
            fr: "Prêt à vivre l'expérience Heritage ?",
            en: "Ready to experience Heritage?",
            es: "¿Listo para vivir la experiencia Heritage?"
        },
        "about.cta.copy": {
            fr: "Découvrez notre collection exclusive d'appartements et de demeures de prestige au cœur de la ville lumière du Sud-Ouest.",
            en: "Discover our exclusive collection of prestigious apartments and residences in the heart of the Southwest's city of light.",
            es: "Descubra nuestra colección exclusiva de apartamentos y residencias de prestigio en el corazón de la ciudad luminosa del Suroeste."
        },
        "about.cta.button": {
            fr: "Explorer nos biens",
            en: "Explore our properties",
            es: "Explorar nuestras propiedades"
        },
        "about.footer.copy": {
            fr: "Spécialiste de la location saisonnière de prestige à Bordeaux, nous offrons des séjours inoubliables alliant authenticité et luxe moderne.",
            en: "Specialists in premium short-term rentals in Bordeaux, we offer unforgettable stays combining authenticity and modern luxury.",
            es: "Especialistas en alquiler vacacional premium en Burdeos, ofrecemos estancias inolvidables que combinan autenticidad y lujo moderno."
        },
        "accommodations.hero.eyebrow": {
            fr: "SÉLECTION EXCLUSIVE",
            en: "EXCLUSIVE CURATION",
            es: "SELECCIÓN EXCLUSIVA"
        },
        "accommodations.hero.title": {
            fr: "Un art de vivre raffiné au cœur de Bordeaux",
            en: "Refined Living in the Heart of Bordeaux",
            es: "Vida refinada en el corazón de Burdeos"
        },
        "accommodations.availability": {
            fr: "Disponibilité",
            en: "Availability",
            es: "Disponibilidad"
        },
        "accommodations.checkIn": {
            fr: "ARRIVÉE",
            en: "CHECK IN",
            es: "LLEGADA"
        },
        "accommodations.checkOut": {
            fr: "DÉPART",
            en: "CHECK OUT",
            es: "SALIDA"
        },
        "accommodations.selectDate": {
            fr: "Choisir une date",
            en: "Select date",
            es: "Seleccionar fecha"
        },
        "accommodations.propertyType": {
            fr: "Type de bien",
            en: "Property Type",
            es: "Tipo de propiedad"
        },
        "accommodations.haussmann": {
            fr: "Appartements haussmanniens",
            en: "Haussmann Apartments",
            es: "Apartamentos haussmannianos"
        },
        "accommodations.estates": {
            fr: "Demeures de campagne",
            en: "Country Estates",
            es: "Fincas rurales"
        },
        "accommodations.lofts": {
            fr: "Lofts contemporains",
            en: "Contemporary Lofts",
            es: "Lofts contemporáneos"
        },
        "accommodations.chateaux": {
            fr: "Châteaux historiques",
            en: "Historic Châteaux",
            es: "Castillos históricos"
        },
        "accommodations.capacity": {
            fr: "Capacité",
            en: "Capacity",
            es: "Capacidad"
        },
        "accommodations.amenities": {
            fr: "Équipements",
            en: "Amenities",
            es: "Servicios"
        },
        "accommodations.wineCellar": {
            fr: "Cave à vin",
            en: "Wine Cellar",
            es: "Bodega"
        },
        "accommodations.conciergeService": {
            fr: "Service de conciergerie",
            en: "Concierge Service",
            es: "Servicio de conserjería"
        },
        "accommodations.privatePool": {
            fr: "Piscine privée",
            en: "Private Pool",
            es: "Piscina privada"
        },
        "accommodations.recommended": {
            fr: "RECOMMANDÉ",
            en: "RECOMMENDED",
            es: "RECOMENDADO"
        },
        "accommodations.perNight": {
            fr: "/nuit",
            en: "/night",
            es: "/noche"
        },
        "accommodations.goldenCentral": {
            fr: "Triangle d'Or, centre de Bordeaux",
            en: "Golden Triangle, Bordeaux Central",
            es: "Triángulo de Oro, centro de Burdeos"
        },
        "accommodations.oneBedroom": {
            fr: "1 chambre",
            en: "1 Bedroom",
            es: "1 dormitorio"
        },
        "accommodations.saintEmilion": {
            fr: "Région viticole de Saint-Émilion",
            en: "Saint-Émilion Wine Region",
            es: "Región vinícola de Saint-Émilion"
        },
        "accommodations.fourBedrooms": {
            fr: "4 chambres",
            en: "4 Bedrooms",
            es: "4 dormitorios"
        },
        "accommodations.workspace": {
            fr: "Espace de travail",
            en: "Workspace",
            es: "Espacio de trabajo"
        },
        "accommodations.wineBar": {
            fr: "Bar à vin",
            en: "Wine Bar",
            es: "Bar de vinos"
        },
        "accommodations.cityHall": {
            fr: "Quartier de l'Hôtel de Ville",
            en: "Hôtel de Ville District",
            es: "Distrito del Ayuntamiento"
        },
        "accommodations.balcony": {
            fr: "Balcon privé",
            en: "Private Balcony",
            es: "Balcón privado"
        },
        "accommodations.previous": {
            fr: "Précédent",
            en: "Previous",
            es: "Anterior"
        },
        "accommodations.next": {
            fr: "Suivant",
            en: "Next",
            es: "Siguiente"
        },
        "accommodations.footer.copy": {
            fr: "Nous sélectionnons les plus belles expériences de vie à Bordeaux et dans ses régions viticoles historiques. Un luxe discret pour les voyageurs exigeants.",
            en: "Curating the finest living experiences in Bordeaux and its historic wine regions. Quiet luxury for the discerning traveler.",
            es: "Seleccionamos las mejores experiencias de vida en Burdeos y sus regiones vinícolas históricas. Lujo sereno para el viajero exigente."
        },
        "contact.hero.eyebrow": {
            fr: "Contactez-nous",
            en: "Get in Touch",
            es: "Contáctenos"
        },
        "contact.hero.title": {
            fr: "Des services de conciergerie adaptés à votre voyage bordelais.",
            en: "Concierge services tailored to your Bordeaux journey.",
            es: "Servicios de conserjería adaptados a su viaje a Burdeos."
        },
        "contact.hero.copy": {
            fr: "Que vous recherchiez une visite privée de vignoble ou un séjour sur mesure au cœur de la ville, notre équipe conçoit votre escapade française idéale.",
            en: "Whether you are seeking a private vineyard tour or a curated stay in the heart of the city, our team is dedicated to crafting your perfect French escape.",
            es: "Ya busque una visita privada a un viñedo o una estancia seleccionada en el corazón de la ciudad, nuestro equipo está dedicado a crear su escapada francesa perfecta."
        },
        "contact.form.title": {
            fr: "Formulaire de demande",
            en: "Inquiry Form",
            es: "Formulario de consulta"
        },
        "contact.firstName": {
            fr: "Prénom",
            en: "First Name",
            es: "Nombre"
        },
        "contact.lastName": {
            fr: "Nom",
            en: "Last Name",
            es: "Apellido"
        },
        "contact.email": {
            fr: "Adresse e-mail",
            en: "Email Address",
            es: "Correo electrónico"
        },
        "contact.service": {
            fr: "Service souhaité",
            en: "Service of Interest",
            es: "Servicio de interés"
        },
        "contact.villa": {
            fr: "Location de villa de luxe",
            en: "Luxury Villa Rental",
            es: "Alquiler de villa de lujo"
        },
        "contact.vineyard": {
            fr: "Visite privée de vignoble",
            en: "Private Vineyard Tour",
            es: "Visita privada a viñedos"
        },
        "contact.personalConcierge": {
            fr: "Conciergerie personnelle",
            en: "Personal Concierge",
            es: "Conserjería personal"
        },
        "contact.events": {
            fr: "Organisation d'événements",
            en: "Event Planning",
            es: "Planificación de eventos"
        },
        "contact.message": {
            fr: "Message",
            en: "Message",
            es: "Mensaje"
        },
        "contact.messagePlaceholder": {
            fr: "Parlez-nous de vos projets de voyage...",
            en: "Tell us about your travel plans...",
            es: "Cuéntenos sobre sus planes de viaje..."
        },
        "contact.submit": {
            fr: "Envoyer la demande",
            en: "Send Inquiry",
            es: "Enviar consulta"
        },
        "contact.commitment.title": {
            fr: "Notre engagement",
            en: "Our Commitment",
            es: "Nuestro compromiso"
        },
        "contact.commitment.copy": {
            fr: "Nous accordons autant d'importance à votre confidentialité qu'à votre expérience. Toutes les demandes sont traitées avec une discrétion absolue. Notre équipe de conciergerie répond généralement sous 4 heures ouvrées pour que votre organisation reste fluide.",
            en: "We value your privacy as much as your experience. All inquiries are handled with strict confidentiality. Our concierge team typically responds within 4 business hours to ensure your planning remains seamless.",
            es: "Valoramos su privacidad tanto como su experiencia. Todas las consultas se tratan con estricta confidencialidad. Nuestro equipo de conserjería suele responder en un plazo de 4 horas laborables para que su planificación sea fluida."
        },
        "contact.office": {
            fr: "Adresse du bureau",
            en: "Office Address",
            es: "Dirección de la oficina"
        },
        "contact.privateLine": {
            fr: "Ligne privée",
            en: "Private Line",
            es: "Línea privada"
        },
        "contact.direct": {
            fr: "Demandes directes",
            en: "Direct Inquiries",
            es: "Consultas directas"
        },
        "contact.quote": {
            fr: "\"L'architecture est un art visuel, et les bâtiments parlent d'eux-mêmes.\" — Bordeaux est notre toile.",
            en: "\"Architecture is a visual art, and the buildings speak for themselves.\" — Bordeaux is our canvas.",
            es: "\"La arquitectura es un arte visual, y los edificios hablan por sí mismos.\" — Burdeos es nuestro lienzo."
        },
        "contact.visit": {
            fr: "Visitez notre studio",
            en: "Visit Our Studio",
            es: "Visite nuestro estudio"
        },
        "contact.visit.copy": {
            fr: "Situé dans le quartier historique des Chartrons.",
            en: "Located in the historic Chartrons district.",
            es: "Situado en el histórico barrio de Chartrons."
        },
        "contact.footer.copy": {
            fr: "Nous sélectionnons les plus beaux séjours architecturaux et expériences culturelles dans la capitale mondiale du vin. Fondé en 2012.",
            en: "Curating the finest architectural stays and cultural experiences in the world's wine capital. Established 2012.",
            es: "Seleccionamos las mejores estancias arquitectónicas y experiencias culturales en la capital mundial del vino. Fundado en 2012."
        }
    };

    const pageTitleKeys = [
        { pattern: "accueil_version_web", key: "meta.home.title" },
        { pattern: "propos_version_web", key: "meta.about.title" },
        { pattern: "les_logements_version_web", key: "meta.accommodations.title" },
        { pattern: "contact_version_web", key: "meta.contact.title" }
    ];
    const supportedLanguages = ["fr", "en", "es"];
    const textNodes = [];
    const attributeTargets = [];

    const normalize = (value) => value.replace(/\s+/g, " ").trim();
    const keyByText = new Map();

    Object.entries(translations).forEach(([key, values]) => {
        supportedLanguages.forEach((language) => {
            const value = values[language];
            if (value) keyByText.set(normalize(value), key);
        });
    });

    const readStoredLanguage = () => {
        try {
            return localStorage.getItem(storageKey);
        } catch (error) {
            return null;
        }
    };

    const storeLanguage = (language) => {
        try {
            localStorage.setItem(storageKey, language);
        } catch (error) {
            return;
        }
    };

    const inferTitleKey = () => {
        const pathname = window.location.pathname;
        const match = pageTitleKeys.find((item) => pathname.includes(item.pattern));
        return match ? match.key : null;
    };

    const injectStyles = () => {
        if (document.getElementById("bordeaux-i18n-styles")) return;

        const style = document.createElement("style");
        style.id = "bordeaux-i18n-styles";
        style.textContent = `
            .language-switcher {
                display: flex !important;
                align-items: center;
                gap: 4px;
                border: 1px solid #c3c7cd;
                background: rgba(255, 255, 255, 0.96);
                padding: 4px;
                backdrop-filter: blur(12px);
            }
            .lang-button {
                min-width: 34px;
                padding: 7px 8px;
                color: #43474c;
                font-family: Manrope, sans-serif;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.08em;
                line-height: 1;
                transition: background-color 180ms ease, color 180ms ease;
            }
            .lang-button:hover,
            .lang-button[aria-pressed="true"] {
                background-color: #294357;
                color: #ffffff;
            }
        `;
        document.head.appendChild(style);
    };

    const createLanguageSwitcher = () => {
        const switcher = document.createElement("div");
        switcher.className = "language-switcher items-center gap-1";
        switcher.setAttribute("aria-label", "Language selector");
        switcher.innerHTML = supportedLanguages.map((language) => (
            `<button aria-pressed="false" class="lang-button" data-lang="${language}" type="button">${language.toUpperCase()}</button>`
        )).join("");
        return switcher;
    };

    const insertLanguageSwitcher = () => {
        if (document.querySelector(".language-switcher")) return;

        const buttons = Array.from(document.querySelectorAll("button"));
        const bookButton = buttons.find((button) => {
            const key = keyByText.get(normalize(button.textContent));
            return key === "nav.book";
        });
        const targetContainer = bookButton ? bookButton.parentElement : document.querySelector("header .flex.items-center, nav .flex.items-center");

        if (!targetContainer) return;

        const switcher = createLanguageSwitcher();
        if (bookButton && bookButton.parentElement === targetContainer) {
            targetContainer.insertBefore(switcher, bookButton);
            return;
        }
        targetContainer.appendChild(switcher);
    };

    const collectTextNodes = () => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => {
                const text = normalize(node.nodeValue);
                if (!text) return NodeFilter.FILTER_REJECT;
                if (node.parentElement && node.parentElement.closest("script, style, noscript")) {
                    return NodeFilter.FILTER_REJECT;
                }
                return keyByText.has(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });

        let node = walker.nextNode();
        while (node) {
            textNodes.push({
                node,
                key: keyByText.get(normalize(node.nodeValue)),
                leading: node.nodeValue.match(/^\s*/)[0],
                trailing: node.nodeValue.match(/\s*$/)[0]
            });
            node = walker.nextNode();
        }
    };

    const collectAttributeTargets = () => {
        document.querySelectorAll("[placeholder]").forEach((element) => {
            const key = keyByText.get(normalize(element.getAttribute("placeholder") || ""));
            if (key) attributeTargets.push({ element, key, attribute: "placeholder" });
        });
    };

    const applyLanguage = (language) => {
        const activeLanguage = supportedLanguages.includes(language) ? language : "fr";

        document.documentElement.lang = activeLanguage;

        const titleKey = inferTitleKey();
        if (titleKey && translations[titleKey]) {
            document.title = translations[titleKey][activeLanguage];
        }

        textNodes.forEach(({ node, key, leading, trailing }) => {
            const value = translations[key] && translations[key][activeLanguage];
            if (value) node.nodeValue = `${leading}${value}${trailing}`;
        });

        attributeTargets.forEach(({ element, key, attribute }) => {
            const value = translations[key] && translations[key][activeLanguage];
            if (value) element.setAttribute(attribute, value);
        });

        document.querySelectorAll("[data-lang]").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.lang === activeLanguage));
        });

        storeLanguage(activeLanguage);
    };

    const initialLanguage = () => {
        const storedLanguage = readStoredLanguage();
        if (supportedLanguages.includes(storedLanguage)) return storedLanguage;

        const browserLanguage = (navigator.language || "fr").slice(0, 2).toLowerCase();
        return supportedLanguages.includes(browserLanguage) ? browserLanguage : "fr";
    };

    injectStyles();
    insertLanguageSwitcher();
    collectTextNodes();
    collectAttributeTargets();

    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });

    applyLanguage(initialLanguage());
})();
