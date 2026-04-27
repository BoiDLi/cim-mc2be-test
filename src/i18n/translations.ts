export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "Présentation",
      organisation: "Organisation",
      offer: "Offre",
      news: "Actualités",
      building: "Bâtiment",
      careers: "Carrières",
      contact: "Contact",
      support: "Nous soutenir",
    },
    common: {
      learnMore: "En savoir plus",
      contactUs: "Nous contacter",
      seeAll: "Voir tout",
      backHome: "Retour à l'accueil",
      tagline: "Centre d'Innovation Médicale Michel Cremer – Marie Curie",
    },
    home: {
      kicker: "Centre d'Innovation Médicale Michel Cremer – Marie Curie",
      title: "Du besoin clinique au patient.",
      titleAccent: "Accélérer l'innovation médicale.",
      subtitle:
        "Le CIM-MC² réunit médecins, ingénieurs et entrepreneurs pour transformer une idée en dispositif médical — plus vite et au bénéfice direct des patients.",
      ctaPrimary: "Découvrir nos services",
      ctaSecondary: "Nous contacter",
      whatTitle: "C'est quoi le CIM-MC² ?",
      whatBody:
        "Une plateforme de collaboration située à proximité immédiate du CHU Hôpital Marie Curie à Charleroi. Notre mission : accélérer le développement de dispositifs médicaux innovants, de l'idée jusqu'à leur utilisation chez les patients.",
      whatBody2:
        "Outils chirurgicaux, technologies de diagnostic, dispositifs de prévention ou de formation : nous accompagnons chaque projet à travers l'ensemble des étapes critiques du développement médical.",
      pillarsTitle: "Nos missions",
      pillars: [
        {
          t: "Faire émerger les besoins",
          d: "Identifier les besoins cliniques réels et y répondre par l'innovation technologique.",
        },
        {
          t: "Mettre à disposition",
          d: "Des infrastructures de pointe pour chercheurs, hôpitaux et entreprises medtech.",
        },
        {
          t: "Accompagner les porteurs",
          d: "Du premier prototype jusqu'à la mise sur le marché, sans rupture méthodologique.",
        },
        {
          t: "Catalyser la création",
          d: "De start-ups et de spin-offs valorisant la recherche médicale belge.",
        },
      ],
      objectivesTitle: "Nos objectifs",
      objectives: [
        "Réduire le temps entre une idée et son application clinique.",
        "Faire progresser des projets de TRL 4 vers une maturité industrielle et clinique.",
        "Créer des procédures plus sûres, réduisant les durées d'hospitalisation.",
        "Limiter le recours aux essais sur animaux grâce aux modèles de simulation.",
        "Concevoir des dispositifs respectueux des contraintes environnementales.",
      ],
      audienceTitle: "À qui s'adresse le CIM-MC² ?",
      audience: [
        { t: "Cliniciens", d: "Médecins et personnels hospitaliers porteurs d'un besoin clinique." },
        { t: "Chercheurs", d: "Équipes universitaires souhaitant valoriser leurs travaux." },
        { t: "Start-ups & PME", d: "Entreprises développant des dispositifs médicaux." },
        { t: "Industriels", d: "Cherchant un terrain de co-développement." },
        { t: "Étudiants", d: "Jeunes ingénieurs en formation à la medtech." },
      ],
      eventsTeaser: {
        kicker: "À ne pas manquer",
        title: "Conférences, portes ouvertes, hackathons medtech",
        body: "Retrouvez toute l'actualité du CIM-MC² et de ses partenaires.",
        cta: "Voir les événements",
      },
      sdg: {
        kicker: "Engagement",
        title: "Indicateurs de développement durable",
        intro:
          "Dans la continuité de l'engagement de la Fondation Michel Cremer, le CIM-MC² agit directement sur les indicateurs de développement durable définis par l'ONU.",
        directTitle: "Action directe",
        direct: [
          { n: 3, t: "Bonne santé et bien-être" },
          { n: 4, t: "Éducation de qualité" },
        ],
        contribTitle: "Contribution",
        contrib: [
          { n: 1, t: "Pas de pauvreté" },
          { n: 5, t: "Égalité entre les sexes" },
          { n: 9, t: "Industrie, innovation et infrastructure" },
          { n: 10, t: "Inégalités réduites" },
          { n: 17, t: "Partenariats pour la réalisation des objectifs" },
        ],
        source: "Source : Objectifs de développement durable des Nations Unies",
      },
    },
    organisation: {
      title: "Organisation",
      subtitle:
        "Une équipe pluridisciplinaire et un écosystème de partenaires de réputation internationale.",
      teamTitle: "L'équipe du CIM",
      teamBody:
        "Une équipe pluridisciplinaire alliant compétences scientifiques, cliniques, techniques et entrepreneuriales pilote au quotidien le centre et accompagne les porteurs de projets.",
      hostedTitle: "Partenaires hébergés",
      hostedBody:
        "Le CIM-MC² accueille en son sein plusieurs structures partenaires actives dans la medtech et la valorisation de la recherche.",
      strategicTitle: "Partenariats renforcés",
      strategicBody:
        "Un réseau d'académiques, hospitaliers et technologiques de réputation internationale.",
      partners: ["MLTL — Multitel", "CHU Charleroi & Chimay", "Biopark", "ULB", "UMONS"],
      ecosystemTitle: "Écosystème",
      ecosystemBody:
        "Centres de recherche agréés, pôles de compétitivité, clusters santé, fonds d'investissement spécialisés et acteurs de la formation : le CIM-MC² s'inscrit dans un écosystème dynamique d'innovation médicale en Wallonie et à Bruxelles.",
      shareTitle: "Actionnariat",
      shareBody:
        "Une structure rassemblant institutions publiques, partenaires académiques et investisseurs privés engagés pour le développement de la medtech belge.",
      foundationTitle: "La Fondation Michel Cremer",
      foundationBody:
        "Acteur fondateur du projet, la Fondation soutient l'innovation médicale en finançant programmes de recherche, bourses et infrastructures dédiées.",
      foundationLink: "michelcremerfoundation.eu",
      geewTitle: "GEEW",
      geewBody: "Section à préciser — rôle et apport du GEEW dans la gouvernance du CIM-MC².",
    },
    offer: {
      title: "Notre offre",
      subtitle:
        "Services, infrastructures et accompagnement complet — de l'idée à la mise sur le marché.",
      methodTitle: "Une méthodologie intégrée",
      methodBody:
        "Notre méthodologie est pensée pour réduire au maximum le temps entre une idée et son application clinique, en intégrant dès le départ toutes les étapes clés.",
      steps: [
        "Identification du besoin clinique",
        "Co-création médecins & ingénieurs",
        "Prototypage rapide",
        "Validation préclinique & clinique",
        "Réglementation & certification",
        "Industrialisation & financement",
        "Mise sur le marché",
      ],
      servicesTitle: "Services du CIM-MC²",
      services: [
        { t: "Conseils", d: "Guidance stratégique sur le développement de dispositifs médicaux." },
        { t: "TAF", d: "Travaux d'avant-projet — études de faisabilité technique et économique." },
        { t: "Études cliniques", d: "Design, conduite et suivi avec les hôpitaux partenaires." },
        { t: "Affaires réglementaires", d: "Guidance MDR, ISO 13485 et certification." },
        { t: "Financement", d: "Montage de dossiers et mise en relation investisseurs." },
        { t: "Création de start-ups", d: "Accompagnement à la création de spin-offs." },
      ],
      partnerServicesTitle: "Services des partenaires",
      partnerServicesBody:
        "Les partenaires hébergés et associés étendent l'offre du CIM-MC² avec des services spécialisés : expertise réglementaire, propriété intellectuelle, business development, accompagnement à l'export, formation continue.",
      infraTitle: "Infrastructures de recherche",
      infraBody: "Salles techniques et équipements de pointe disponibles à la réservation :",
      infrastructures: [
        "Imprimantes 3D pour prototypage rapide",
        "Équipements de vérification et de mesure",
        "Équipements de simulation",
        "Salles d'assemblage propres (cleanrooms)",
        "Transmission live d'opérations chirurgicales",
      ],
      spacesTitle: "Bureaux, coworking & salles de réunion",
      spacesBody:
        "Pour les équipes en résidence comme pour les visiteurs : bureaux privatifs pour start-ups et chercheurs, espace de coworking, salles de réunion équipées et espaces de convivialité.",
    },
    news: {
      title: "Actualités & Événements",
      subtitle:
        "Conférences, communiqués, publications et nouvelles du centre et de ses partenaires.",
      categoriesTitle: "Catégories",
      categories: ["Événements", "À la une", "Presse", "Publications", "Newsletter"],
      placeholder: "Les premiers contenus seront publiés prochainement.",
      sample: [
        {
          tag: "Bâtiment",
          date: "À venir",
          title: "Pose de la première pierre du CIM-MC²",
          desc: "Les travaux du futur Centre d'Innovation Médicale ont franchi une étape clé.",
        },
        {
          tag: "Projet",
          date: "En cours",
          title: "Verre connecté — suivi de la déglutition",
          desc: "ULg, Multitel et ULB collaborent sur un dispositif de monitoring patient.",
        },
        {
          tag: "Partenariat",
          date: "À venir",
          title: "Renforcement du partenariat avec UMONS",
          desc: "Nouveau programme de formation à la dissection endoscopique (ESD).",
        },
      ],
    },
    building: {
      title: "Le bâtiment",
      subtitle:
        "Une infrastructure dédiée à la collaboration entre cliniciens, chercheurs et industriels.",
      designTitle: "Pensé pour l'innovation médicale",
      designBody:
        "Le CIM-MC² investira un bâtiment dédié, conçu pour faciliter les collaborations. Sa proximité immédiate avec le CHU Hôpital Marie Curie en fait un trait d'union naturel entre la pratique hospitalière et la recherche appliquée.",
      timelineTitle: "Calendrier",
      timeline: [
        { date: "En cours", t: "Conception & travaux", d: "Phase de construction et d'équipement." },
        { date: "Septembre 2027", t: "Mise en service", d: "Ouverture officielle et accueil des premiers projets." },
      ],
      locationTitle: "Implantation & localisation",
      locationBody:
        "À proximité immédiate du CHU Hôpital Marie Curie à Charleroi, au cœur d'un pôle santé en pleine expansion.",
      videoTitle: "Vidéo de présentation",
      videoNote: "Espace réservé — rendu architectural, interview du directeur, visite virtuelle.",
    },
    careers: {
      title: "Rejoindre le CIM-MC²",
      subtitle:
        "Travailler côte à côte au service de l'innovation médicale, sur des projets à fort impact.",
      whyTitle: "Pourquoi nous rejoindre ?",
      why: [
        "Travailler sur des projets à fort impact clinique et sociétal.",
        "Évoluer dans un écosystème pluridisciplinaire et international.",
        "Accéder à des infrastructures de recherche de pointe.",
        "Bénéficier d'un accompagnement à la formation et à l'évolution de carrière.",
      ],
      openTitle: "Postes ouverts",
      openPlaceholder:
        "Aucune offre n'est actuellement publiée. Revenez régulièrement ou envoyez-nous une candidature spontanée.",
      spontaneousTitle: "Candidature spontanée",
      spontaneousBody:
        "Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature spontanée — nous serions ravis d'échanger.",
      cta: "Envoyer ma candidature",
    },
    contact: {
      title: "Contact",
      subtitle: "Une question, un projet, une demande de visite ? L'équipe vous répond.",
      formTitle: "Nous écrire",
      name: "Nom et prénom",
      organization: "Organisation",
      email: "Email",
      phone: "Téléphone",
      subject: "Sujet",
      subjects: [
        "Information générale",
        "Partenariat",
        "Location d'espaces",
        "Services",
        "Presse",
        "Autre",
      ],
      message: "Votre message",
      consent: "J'accepte la politique de confidentialité.",
      send: "Envoyer le message",
      sent: "Merci ! Votre message a bien été envoyé.",
      addressTitle: "Coordonnées",
      addressNote: "Adresse, téléphone et e-mail à compléter.",
      faqTitle: "Questions fréquentes",
      faq: [
        { q: "Comment soumettre un projet au CIM-MC² ?", a: "Contactez-nous via le formulaire — un référent vous recontactera sous 5 jours ouvrés." },
        { q: "Comment réserver une salle technique ?", a: "Les réservations s'effectuent via notre équipe d'accueil. Précisez votre besoin dans le formulaire." },
        { q: "Quels services pour les start-ups externes ?", a: "Conseil, accès aux infrastructures, mise en relation investisseurs — sur devis." },
        { q: "Comment devenir partenaire hébergé ?", a: "Adressez-nous une demande détaillant votre activité et vos besoins en espaces." },
      ],
    },
    support: {
      title: "Nous soutenir",
      subtitle:
        "Investir dans une médecine plus sûre, plus efficace et plus humaine.",
      whyTitle: "Pourquoi nous soutenir ?",
      whyBody:
        "Soutenir le CIM-MC², c'est investir dans une médecine plus sûre, plus efficace et plus humaine. Chaque don ou partenariat permet de financer la recherche, d'équiper nos infrastructures et d'accompagner les projets qui amélioreront la prise en charge des patients de demain.",
      waysTitle: "Plusieurs façons de nous soutenir",
      ways: [
        { t: "Don financier", d: "Ponctuel ou récurrent, via la Fondation Michel Cremer." },
        { t: "Mécénat d'entreprise", d: "Partenariat structurel ou sponsoring d'un projet." },
        { t: "Don en nature", d: "Équipements, expertises, mise à disposition de personnel." },
        { t: "Legs & donations", d: "Accompagnement personnalisé pour vos démarches." },
      ],
      commitTitle: "Notre engagement",
      commitBody:
        "Transparence et efficacité sont au cœur de notre démarche. Chaque soutien fait l'objet d'un suivi et nos partenaires sont informés régulièrement de l'usage des fonds.",
      donate: "Faire un don",
      partner: "Devenir partenaire",
    },
    footer: {
      tagline: "Du besoin clinique au patient — accélérer l'innovation médicale.",
      explore: "Explorer",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      cookies: "Cookies",
      rights: "Tous droits réservés.",
    },
    notFound: {
      title: "Page introuvable",
      body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    },
  },

  en: {
    nav: {
      about: "About",
      organisation: "Organisation",
      offer: "Offer",
      news: "News",
      building: "Building",
      careers: "Careers",
      contact: "Contact",
      support: "Support us",
    },
    common: {
      learnMore: "Learn more",
      contactUs: "Get in touch",
      seeAll: "See all",
      backHome: "Back to home",
      tagline: "Michel Cremer – Marie Curie Medical Innovation Centre",
    },
    home: {
      kicker: "Michel Cremer – Marie Curie Medical Innovation Centre",
      title: "From clinical need to patient.",
      titleAccent: "Accelerating medical innovation.",
      subtitle:
        "CIM-MC² brings together clinicians, engineers and entrepreneurs to turn ideas into medical devices — faster, and for the direct benefit of patients.",
      ctaPrimary: "Discover our services",
      ctaSecondary: "Get in touch",
      whatTitle: "What is CIM-MC²?",
      whatBody:
        "A collaboration platform located right next to the CHU Hôpital Marie Curie in Charleroi. Our mission: to accelerate the development of innovative medical devices, from idea to patient use.",
      whatBody2:
        "Surgical tools, diagnostic technologies, prevention or training devices: we support each project across all the critical stages of medical development.",
      pillarsTitle: "Our missions",
      pillars: [
        { t: "Surface real needs", d: "Identify clinical needs and address them through technological innovation." },
        { t: "Provide infrastructure", d: "State-of-the-art facilities for researchers, hospitals and medtech companies." },
        { t: "Support innovators", d: "From first prototype to market, with continuous methodology." },
        { t: "Catalyse creation", d: "Of start-ups and spin-offs valuing Belgian medical research." },
      ],
      objectivesTitle: "Our objectives",
      objectives: [
        "Shorten the path from idea to clinical use.",
        "Move projects from TRL 4 toward industrial and clinical maturity.",
        "Enable safer procedures, reducing hospital stays.",
        "Reduce reliance on animal testing through simulation models.",
        "Design devices that meet environmental requirements.",
      ],
      audienceTitle: "Who is CIM-MC² for?",
      audience: [
        { t: "Clinicians", d: "Doctors and hospital staff with a clinical need." },
        { t: "Researchers", d: "Academic teams seeking to bring their work to market." },
        { t: "Start-ups & SMEs", d: "Companies developing medical devices." },
        { t: "Industry", d: "Looking for co-development opportunities." },
        { t: "Students", d: "Young engineers training in medtech." },
      ],
      eventsTeaser: {
        kicker: "Don't miss",
        title: "Conferences, open days, medtech hackathons",
        body: "Stay up to date with everything happening at CIM-MC² and its partners.",
        cta: "See events",
      },
      sdg: {
        kicker: "Commitment",
        title: "Sustainable Development Goals",
        intro:
          "Building on the commitment of the Michel Cremer Foundation, CIM-MC² acts directly on the Sustainable Development Goals defined by the United Nations.",
        directTitle: "Direct action",
        direct: [
          { n: 3, t: "Good health and well-being" },
          { n: 4, t: "Quality education" },
        ],
        contribTitle: "Contribution",
        contrib: [
          { n: 1, t: "No poverty" },
          { n: 5, t: "Gender equality" },
          { n: 9, t: "Industry, innovation and infrastructure" },
          { n: 10, t: "Reduced inequalities" },
          { n: 17, t: "Partnerships for the goals" },
        ],
        source: "Source: United Nations Sustainable Development Goals",
      },
    },
    organisation: {
      title: "Organisation",
      subtitle: "A multidisciplinary team and a network of internationally recognised partners.",
      teamTitle: "The CIM team",
      teamBody:
        "A multidisciplinary team — combining scientific, clinical, technical and entrepreneurial expertise — runs the centre and supports project leaders.",
      hostedTitle: "Hosted partners",
      hostedBody:
        "CIM-MC² hosts several partner organisations active in medtech and research valorisation.",
      strategicTitle: "Strategic partnerships",
      strategicBody:
        "A network of internationally recognised academic, hospital and technology partners.",
      partners: ["MLTL — Multitel", "CHU Charleroi & Chimay", "Biopark", "ULB", "UMONS"],
      ecosystemTitle: "Ecosystem",
      ecosystemBody:
        "Certified research centres, competitiveness clusters, health clusters, specialised investment funds and training providers: CIM-MC² is part of a vibrant innovation ecosystem in Wallonia and Brussels.",
      shareTitle: "Shareholding",
      shareBody:
        "A structure that brings together public institutions, academic partners and private investors committed to advancing Belgian medtech.",
      foundationTitle: "The Michel Cremer Foundation",
      foundationBody:
        "A founding actor of the project, the Foundation supports medical innovation by funding research programmes, scholarships and dedicated infrastructure.",
      foundationLink: "michelcremerfoundation.eu",
      geewTitle: "GEEW",
      geewBody: "Section to be detailed — role and contribution of GEEW within CIM-MC²'s governance.",
    },
    offer: {
      title: "Our offer",
      subtitle: "Services, facilities and end-to-end support — from idea to market.",
      methodTitle: "An integrated methodology",
      methodBody:
        "Our methodology is designed to shorten the path from idea to clinical application by integrating all key stages from day one.",
      steps: [
        "Clinical need identification",
        "Clinician & engineer co-creation",
        "Rapid prototyping",
        "Preclinical & clinical validation",
        "Regulatory & certification",
        "Industrialisation & funding",
        "Market launch",
      ],
      servicesTitle: "CIM-MC² services",
      services: [
        { t: "Advisory", d: "Strategic guidance on medical device development." },
        { t: "Feasibility (TAF)", d: "Technical and economic feasibility studies." },
        { t: "Clinical studies", d: "Design, conduct and follow-up with partner hospitals." },
        { t: "Regulatory affairs", d: "MDR, ISO 13485 and certification guidance." },
        { t: "Funding", d: "File preparation and investor introductions." },
        { t: "Start-up creation", d: "Support for spin-off creation." },
      ],
      partnerServicesTitle: "Partner services",
      partnerServicesBody:
        "Hosted and associated partners extend our offering with specialised services: regulatory expertise, IP, business development, export support and continuing education.",
      infraTitle: "Research facilities",
      infraBody: "State-of-the-art technical rooms and equipment available for booking:",
      infrastructures: [
        "3D printers for rapid prototyping",
        "Verification and measurement equipment",
        "Simulation equipment",
        "Clean assembly rooms (cleanrooms)",
        "Live surgical operation streaming",
      ],
      spacesTitle: "Offices, coworking & meeting rooms",
      spacesBody:
        "For resident teams and visitors: private offices for start-ups and researchers, coworking space, equipped meeting rooms and informal collaboration areas.",
    },
    news: {
      title: "News & Events",
      subtitle:
        "Conferences, press releases, publications and updates from the centre and its partners.",
      categoriesTitle: "Categories",
      categories: ["Events", "Featured", "Press", "Publications", "Newsletter"],
      placeholder: "First stories coming soon.",
      sample: [
        {
          tag: "Building",
          date: "Upcoming",
          title: "CIM-MC² groundbreaking ceremony",
          desc: "Construction of the future Medical Innovation Centre reaches a key milestone.",
        },
        {
          tag: "Project",
          date: "Ongoing",
          title: "Connected glass — swallowing monitoring",
          desc: "ULg, Multitel and ULB collaborate on a patient monitoring device.",
        },
        {
          tag: "Partnership",
          date: "Upcoming",
          title: "Strengthened partnership with UMONS",
          desc: "New training programme for endoscopic submucosal dissection (ESD).",
        },
      ],
    },
    building: {
      title: "The building",
      subtitle:
        "A dedicated infrastructure for collaboration between clinicians, researchers and industry.",
      designTitle: "Designed for medical innovation",
      designBody:
        "CIM-MC² will move into a dedicated building designed to facilitate collaboration. Its immediate proximity to CHU Hôpital Marie Curie makes it a natural bridge between hospital practice and applied research.",
      timelineTitle: "Timeline",
      timeline: [
        { date: "In progress", t: "Design & construction", d: "Construction and equipment phase." },
        { date: "September 2027", t: "Opening", d: "Official launch and welcome of first projects." },
      ],
      locationTitle: "Location",
      locationBody:
        "Right next to CHU Hôpital Marie Curie in Charleroi, at the heart of a fast-growing health hub.",
      videoTitle: "Presentation video",
      videoNote: "Reserved space — architectural rendering, director interview, virtual tour.",
    },
    careers: {
      title: "Join CIM-MC²",
      subtitle: "Working side by side to advance medical innovation, on high-impact projects.",
      whyTitle: "Why join us?",
      why: [
        "Work on projects with strong clinical and societal impact.",
        "Grow within a multidisciplinary, international ecosystem.",
        "Access state-of-the-art research infrastructure.",
        "Benefit from training and career development support.",
      ],
      openTitle: "Open positions",
      openPlaceholder:
        "No openings published right now. Check back regularly or send us a spontaneous application.",
      spontaneousTitle: "Spontaneous application",
      spontaneousBody:
        "Don't see the role you're looking for? Send us a spontaneous application — we'd love to hear from you.",
      cta: "Send my application",
    },
    contact: {
      title: "Contact",
      subtitle: "A question, a project, a visit request? The team is here to help.",
      formTitle: "Write to us",
      name: "First and last name",
      organization: "Organisation",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      subjects: [
        "General information",
        "Partnership",
        "Space rental",
        "Services",
        "Press",
        "Other",
      ],
      message: "Your message",
      consent: "I accept the privacy policy.",
      send: "Send message",
      sent: "Thank you! Your message has been sent.",
      addressTitle: "Address & details",
      addressNote: "Address, phone and e-mail to be completed.",
      faqTitle: "Frequently asked questions",
      faq: [
        { q: "How do I submit a project to CIM-MC²?", a: "Contact us via the form — a representative will get back to you within 5 working days." },
        { q: "How can I book a technical room?", a: "Bookings are handled by our front desk. Describe your need in the form." },
        { q: "Which services are open to external start-ups?", a: "Advisory, infrastructure access, investor introductions — on a quote basis." },
        { q: "How can my organisation become a hosted partner?", a: "Send us a request detailing your activity and your space requirements." },
      ],
    },
    support: {
      title: "Support us",
      subtitle: "Investing in safer, more effective and more humane medicine.",
      whyTitle: "Why support us?",
      whyBody:
        "Supporting CIM-MC² means investing in safer, more effective and more humane medicine. Every donation or partnership helps fund research, equip our facilities and support the projects that will improve tomorrow's patient care.",
      waysTitle: "Multiple ways to support us",
      ways: [
        { t: "Financial donation", d: "One-off or recurring, via the Michel Cremer Foundation." },
        { t: "Corporate sponsorship", d: "Structural partnership or project sponsorship." },
        { t: "In-kind contributions", d: "Equipment, expertise, secondments." },
        { t: "Bequests & legacies", d: "Personalised guidance for your steps." },
      ],
      commitTitle: "Our commitment",
      commitBody:
        "Transparency and effectiveness are at the heart of our approach. Every contribution is tracked and our partners are kept regularly informed of how funds are used.",
      donate: "Donate",
      partner: "Become a partner",
    },
    footer: {
      tagline: "From clinical need to patient — accelerating medical innovation.",
      explore: "Explore",
      contact: "Contact",
      legal: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
    },
  },
};

export type Dict = (typeof translations)[Lang];
