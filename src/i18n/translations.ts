export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "Présentation",
      organisation: "Organisation",
      offer: "Offre",
      news: "Actualités",
      building: "Bâtiment",
      careers: "Rejoindre l'écosystème",
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
        "Le CIM-MC² réunit médecins, ingénieurs et entrepreneurs pour transformer une idée en dispositif médical, plus rapidement et au bénéfice direct des patients, y compris dans le domaine des pathologies rares insuffisamment adressées en raison de contraintes de marché.",
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
        "Créer des procédures plus sûres, réduisant les durées d'hospitalisation et les complications.",
        "Réduire le temps entre une idée et son application clinique.",
        "Faire progresser des projets de TRL 4 vers une maturité industrielle et clinique.",
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
    clinicalNeed: {
      kicker: "Espace cliniciens",
      title: "Vous avez un besoin clinique ?",
      intro:
        "Décrivez en quelques lignes un problème rencontré dans votre pratique. Notre équipe vous oriente vers le bon référent du CIM-MC² sous 5 jours ouvrés.",
      bullets: [
        "Échange confidentiel avec un référent dédié",
        "Évaluation de la faisabilité technique et clinique",
        "Mise en relation avec ingénieurs et partenaires industriels",
      ],
      submit: "Soumettre mon besoin",
      privacy: "Vos informations sont traitées confidentiellement et utilisées uniquement pour l'orientation de votre demande.",
      thanksTitle: "Merci, votre demande est enregistrée.",
      thanksBody: "Nous avons identifié le pôle le plus pertinent pour votre besoin. Vous serez recontacté·e sous 5 jours ouvrés.",
      routedTo: "Votre demande est dirigée vers",
      mailSubject: "Besoin clinique — CIM-MC²",
      newRequest: "Soumettre un autre besoin",
      f: {
        name: "Nom et prénom",
        email: "Email professionnel",
        role: "Fonction",
        rolePh: "Médecin, infirmier·e, chef de service…",
        specialty: "Spécialité (optionnel)",
        specialtyPh: "Gastro-entérologie, chirurgie viscérale…",
        domain: "Domaine du besoin",
        need: "Description du besoin clinique",
        needPh: "Quel problème rencontrez-vous ? Dans quel contexte ? Quelles solutions existent aujourd'hui et pourquoi sont-elles insuffisantes ?",
      },
      domains: {
        surgery: "Dispositifs chirurgicaux & interventionnels",
        diagnostic: "Diagnostic & imagerie",
        training: "Simulation & formation",
        prevention: "Prévention & santé publique",
        other: "Autre / je ne sais pas",
      },
    },
    organisation: {
      title: "Organisation",
      subtitle:
        "Une équipe pluridisciplinaire et un écosystème de partenaires de réputation internationale.",
      teamTitle: "L'équipe du CIM",
      teamBody:
        "Une équipe pluridisciplinaire alliant compétences scientifiques, cliniques, techniques et entrepreneuriales pilote au quotidien le centre et accompagne les porteurs de projets.",
      direction: "Direction",
      directionName: "Cécile Sztalberg",
      directionMembers: ["Cécile Sztalberg", "Dr Jacques Devière"],
      doctorsTitle: "Les médecins",
      doctors: [
        "Dr Marianna Arvanitaki",
        "Dr Jacques Devière",
        "Dr Arnaud Lemmers",
        "Prof. Karim Zouaoui",
      ],
      engineersTitle: "Les ingénieurs",
      engineers: [
        "Prof. Alain Delchambre",
        "Prof. Anthoine Nonclercq",
        "Dr Ramzi Ben Hassen",
      ],
      scientificCommitteeTitle: "Comité scientifique",
      scientificCommitteeNote:
        "Voir aussi la page gouvernance du site de la Fondation Michel Cremer.",
      scientificCommittee: [
        {
          name: "Dr Marc Barthet",
          role: "Service de gastro-entérologie, Hôpital Nord, Marseille (France)",
        },
        {
          name: "Prof. Guido Costamagna",
          role: "Professor of Surgery, Head of the Digestive Endoscopy Unit — Università Cattolica del Sacro Cuore, Policlinico Gemelli, Rome (Italie)",
        },
        {
          name: "Dr Marc Giovannini",
          role: "Responsable de l'unité d'écho-endoscopie et d'endoscopie d'oncologie digestive — IPC Institut Paoli-Calmettes, Marseille (France)",
        },
      ],
      hostedTitle: "Partenaires hébergés",
      hostedBody:
        "Le CIM-MC² accueille en son sein plusieurs structures partenaires actives dans la medtech et la valorisation de la recherche.",
      strategicTitle: "Partenariats renforcés",
      strategicBody:
        "Un réseau d'académiques, hospitaliers et technologiques de réputation internationale.",
      partners: ["CHU de Charleroi", "HUB — Hôpital Erasme", "MLTL — Multitel", "CHU Charleroi & Chimay", "ULB", "UMONS", "Biopark Charleroi Brussels South", "Ignity", "Sambrinvest"],
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
      geewTitle: "L'asbl Gastroentérologie et Endothérapie",
      geewBody: "L'asbl Gastroentérologie et Endothérapie est plus particulièrement impliquée dans l'organisation et la mise sur pied de transmissions de cas cliniques du CIM-MC².",
    },
    offer: {
      title: "Notre offre",
      subtitle:
        "Une offre intégrée au service de l'innovation en dispositifs médicaux — un guichet unique pour accélérer, sécuriser et optimiser le développement de projets Medtech.",
      intro:
        "Le CIM-MC² propose une offre unique couvrant l'ensemble de la chaîne de valeur des dispositifs médicaux, de l'identification du besoin clinique jusqu'à la mise sur le marché. En combinant ses services propres, l'expertise de ses partenaires et des infrastructures de pointe, le Centre constitue un guichet unique pour accélérer, sécuriser et optimiser le développement de projets Medtech.",
      methodTitle: "Accompagnement complet : de l'idée à la preuve clinique",
      methodBody:
        "Le CIM-MC² structure son intervention autour d'une méthodologie éprouvée permettant de réduire significativement le temps entre une idée et son application clinique.",
      steps: [
        "Identification du besoin clinique",
        "Co-création pluridisciplinaire",
        "Prototypage rapide",
        "Design et usages",
        "Preuve de concept",
        "Études de faisabilité (TAF)",
        "Préparation et suivi clinique",
      ],
      seminarsNote:
        "Le Centre propose également un programme de séminaires spécialisés (1 à 4 jours), destiné aux professionnels de santé et aux industriels, incluant des sessions en auditoire et en salle de simulation.",
      servicesTitle: "Services proposés par le CIM-MC²",
      servicesIntro:
        "Une expertise interne au service des porteurs de projets : du conseil technologique à la formation, en passant par les essais cliniques et l'animation scientifique.",
      services: [
        { t: "Conseil en développement technologique", d: "Guidance stratégique et technique sur la conception et le développement de dispositifs médicaux." },
        { t: "Design industriel", d: "Accompagnement sur l'ergonomie, l'utilisabilité et la mise en forme industrielle des dispositifs." },
        { t: "Préparation des protocoles d'essais cliniques", d: "Design méthodologique, rédaction des protocoles et coordination avec les centres investigateurs." },
        { t: "Formation à l'utilisation des dispositifs", d: "Conception et organisation de sessions de formation pour cliniciens et personnels hospitaliers." },
        { t: "Séminaires & conférences", d: "Animation et organisation d'événements thématiques pour les chercheurs : propriété intellectuelle, business development, réglementaire…" },
        { t: "Programme de séminaires spécialisés", d: "Sessions de 1 à 4 jours en auditoire et salle de simulation pour professionnels de santé et industriels." },
      ],
      partnerServicesTitle: "Une extension naturelle grâce aux partenaires de l'écosystème",
      partnerServicesIntro:
        "Le CIM-MC² s'appuie sur un réseau de partenaires spécialisés permettant de couvrir les étapes critiques du développement et de la mise sur le marché.",
      partnerServices: [
        { t: "Validation préclinique et clinique", d: "Mise en place et coordination des essais aux étapes pré-cliniques et cliniques." },
        { t: "Conseil réglementaire et certification", d: "MDR, ISO 13485, marquage CE et accès au marché." },
        { t: "Études cliniques", d: "Design, conduite et suivi des études cliniques en lien avec les hôpitaux partenaires." },
        { t: "Propriété intellectuelle", d: "Stratégie brevets, freedom-to-operate, dépôts et stratégie d'innovation." },
        { t: "Création de start-ups et spin-offs", d: "Constitution juridique, structuration capitalistique et accompagnement à l'incorporation." },
        { t: "Accès au financement et aux investisseurs", d: "Préparation des levées de fonds et introduction auprès du réseau d'investisseurs spécialisés." },
        { t: "Développement de marchés et internationalisation", d: "Stratégie commerciale, partenariats industriels et accès aux marchés internationaux." },
        { t: "Industrialisation et montage de projets", d: "Accompagnement à l'industrialisation et à la structuration de projets collaboratifs." },
      ],
      infraTitle: "Infrastructures technologiques et services associés",
      infraBody:
        "Le CIM-MC² met à disposition des infrastructures de pointe, accessibles de manière flexible et accompagnées de services techniques et logistiques. Chaque équipement est accessible selon des modalités flexibles (horaire, journée, projet), avec un accompagnement dédié.",
      infraGroups: [
        {
          t: "Prototypage et validation",
          items: [
            "Impression 3D médicale (FDM, SLA, SLS) avec matériaux techniques et biocompatibles",
            "Équipements de mesure et de vérification pour démontrer la conformité aux normes",
            "Salles de simulation pour tests, validation fonctionnelle et qualification (ISO, CE)",
            "Systèmes de transmission live pour la formation et l'analyse clinique",
          ],
        },
        {
          t: "Production et environnement contrôlé",
          items: [
            "Salles propres (cleanrooms) pour prototypage et pré-industrialisation en atmosphère contrôlée",
            "Maintenance, certification et support technique inclus",
          ],
        },
      ],
      infrastructures: [
        "Imprimantes 3D pour prototypage rapide",
        "Équipements de vérification et de mesure",
        "Équipements de simulation",
        "Salles d'assemblage propres (cleanrooms)",
        "Transmission live d'opérations chirurgicales",
      ],
      servicesBlockTitle: "Offre de services",
      servicesBlockIntro:
        "Accompagnement complet, de l'identification du besoin clinique à la mise sur le marché — par les équipes du CIM-MC² et son réseau de partenaires.",
      spacesBlockTitle: "Espaces de travail et intégration dans l'écosystème",
      spacesBlockIntro:
        "Un environnement de travail conçu pour favoriser la collaboration et l'innovation, avec une offre de services intégrée (accueil, support administratif, logistique).",
      spaces: [
        { t: "Bureaux privatifs", d: "Pour start-ups, spin-offs et équipes de recherche en résidence." },
        { t: "Coworking", d: "Postes flexibles accessibles à l'année pour porteurs de projets et chercheurs." },
        { t: "Salles de réunion et de conférence", d: "Du huddle de 4 personnes à la salle plénière, entièrement équipées." },
        { t: "Espaces de convivialité", d: "Lieux d'échange favorisant les rencontres interdisciplinaires." },
      ],
      spacesCta: "Demander une visite",
      conclusionKicker: "Un guichet unique",
      conclusionTitle: "Un guichet unique pour accélérer votre innovation",
      conclusionBody:
        "En réunissant expertises, infrastructures et partenaires au sein d'un même lieu, le CIM-MC² offre un cadre unique pour :",
      conclusionPoints: [
        "Réduire les délais de développement",
        "Sécuriser les étapes critiques (techniques, réglementaires, cliniques)",
        "Accélérer l'accès au marché",
      ],
      conclusionFooter:
        "Que vous soyez une start-up, une PME, un acteur académique ou un industriel, le CIM-MC² vous accompagne à chaque étape de votre projet.",
      ctaServices: "Découvrir nos services",
      ctaInfra: "Réserver une infrastructure",
      ctaResident: "Devenir partenaire résident",
    },
    news: {
      title: "Actualités & Événements",
      subtitle:
        "Conférences, communiqués, publications et nouvelles du centre et de ses partenaires.",
      categoriesTitle: "Catégories",
      categories: ["Événements", "À la une", "Presse", "Publications", "Newsletter"],
      placeholder: "Les premiers contenus seront publiés prochainement.",
      featuredTitle: "À ne pas manquer",
      featured: {
        tag: "Événement",
        date: "Mercredi 27 mai 2026 — dès 10h",
        location: "Lodelinsart",
        title: "Pose de la première pierre du CIM-MC²",
        lead:
          "Le Centre d'Innovation Médicale Michel Cremer / Marie Curie franchit une étape clé avec la pose de sa première pierre. Cet événement marque le lancement concret d'un projet ambitieux dédié à l'accélération du développement de solutions médicales innovantes, au plus près des besoins des patients et des professionnels de santé.",
        body:
          "Conçu comme un lieu de convergence entre médecins, ingénieurs, chercheurs et entrepreneurs, le CIM-MC² a pour vocation de transformer plus rapidement les avancées scientifiques en applications cliniques concrètes, avec un impact direct sur la qualité des soins et le développement économique régional.",
        invite:
          "Nous serions honorés de vous compter parmi nous pour ce moment fondateur et symbolique.",
        programTitle: "Programme",
        program: [
          "Accueil",
          "Introduction",
          "Présentation du projet par le Prof. Jacques Devière, Président de la Fondation",
          "Interventions de M. Adrien Dolimont, Ministre-Président de la Région wallonne, et de M. Thomas Dermine, Bourgmestre de Charleroi",
          "Pose de la première pierre",
          "Drink de clôture",
        ],
        cta: "Confirmer ma présence",
      },
      sample: [
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
        {
          tag: "Bâtiment",
          date: "Septembre 2027",
          title: "Mise en service du bâtiment CIM-MC²",
          desc: "Ouverture officielle et accueil des premiers projets résidents.",
        },
      ],
      tabs: { events: "Événements", news: "News" },
      eventsTitle: "Calendrier des événements",
      eventsIntro: "Retrouvez les rendez-vous à venir du CIM-MC² et de ses partenaires.",
      eventsUpcoming: "À venir",
      eventsPast: "Événements passés",
      eventsEmpty: "Aucun événement programmé pour le moment.",
      eventsCta: "Voir le détail",
      events: [
        {
          day: "27",
          month: "Mai",
          year: "2026",
          time: "10:00 — 13:00",
          title: "Pose de la première pierre du CIM-MC²",
          location: "Lodelinsart, Charleroi",
          desc: "Lancement officiel du chantier en présence des autorités régionales et des partenaires fondateurs.",
          status: "upcoming",
        },
        {
          day: "14",
          month: "Sep.",
          year: "2027",
          time: "Toute la journée",
          title: "Inauguration du bâtiment CIM-MC²",
          location: "ARCHIPELAGO, Charleroi",
          desc: "Mise en service officielle du centre et accueil des premiers projets résidents.",
          status: "upcoming",
        },
        {
          day: "06",
          month: "Nov.",
          year: "2025",
          time: "18:00 — 21:00",
          title: "Soirée Medtech — rencontre avec les partenaires",
          location: "BioPark, Gosselies",
          desc: "Présentation de l'écosystème CIM-MC² aux acteurs Medtech wallons.",
          status: "past",
        },
      ],
      newsTitle: "Dernières actualités",
      newsIntro: "Communiqués, publications et nouvelles du centre et de ses partenaires.",
      newsCta: "Lire l'article",
      newsSubTabs: { highlight: "À la une", press: "Presse", publication: "Publications" },
      newsEmpty: "Aucun contenu pour le moment dans cette rubrique.",
      newsItems: [
        {
          date: "12 mars 2026",
          category: "Communiqué",
          kind: "highlight",
          title: "Le CIM-MC² accueille un nouveau partenariat avec le HUB — Hôpital Erasme",
          excerpt:
            "Un partenariat stratégique pour renforcer les transmissions de cas cliniques et la formation des cliniciens.",
        },
        {
          date: "05 février 2026",
          category: "Annonce",
          kind: "highlight",
          title: "Pose de la première pierre du CIM-MC² le 27 mai 2026",
          excerpt:
            "Lancement officiel du chantier en présence des autorités régionales et des partenaires fondateurs.",
        },
        {
          date: "10 décembre 2025",
          category: "Presse",
          kind: "press",
          title: "Le CIM-MC² labellisé par le pôle Mecatech",
          excerpt:
            "Reconnaissance de la qualité du programme R&D et accélération du déploiement industriel.",
        },
        {
          date: "18 novembre 2025",
          category: "Presse",
          kind: "press",
          title: "L'Echo : « Charleroi se dote d'un centre d'innovation médicale unique en Wallonie »",
          excerpt:
            "Retour de la presse économique sur le projet ARCHIPELAGO et l'ambition Medtech du CIM-MC².",
        },
        {
          date: "28 janvier 2026",
          category: "Publication",
          kind: "publication",
          title: "Verre connecté : premiers résultats prometteurs",
          excerpt:
            "Le consortium ULg, Multitel et ULB présente les premiers résultats du dispositif de monitoring de la déglutition.",
        },
        {
          date: "02 octobre 2025",
          category: "Publication",
          kind: "publication",
          title: "Article scientifique : capsule endoscopique magnétique — étude de faisabilité",
          excerpt:
            "Publication conjointe ULB / CHU Marie Curie sur la navigation magnétique de la capsule en milieu gastrique.",
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
      title: "Rejoindre l'écosystème du CIM-MC²",
      subtitle:
        "Devenez partenaire résident ou rejoignez nos équipes : intégrez un environnement unique où ingénieurs, chercheurs, cliniciens et entrepreneurs collaborent au quotidien.",
      partnersKicker: "I · Partenaires",
      partnersTitle: "Devenir partenaire résident",
      partnersIntro:
        "Le CIM-MC² constitue un environnement unique où ingénieurs, chercheurs, cliniciens et entrepreneurs collaborent au quotidien pour accélérer l'innovation en dispositifs médicaux. En rejoignant notre écosystème en tant que partenaire résident, vous intégrez une dynamique collaborative au cœur de projets à fort impact clinique et sociétal.",
      partnersBody:
        "Nous invitons les acteurs du secteur Medtech à s'impliquer activement en prenant place au sein de nos espaces de coworking, accessibles sous forme de convention annuelle. Cette présence sur site favorise les synergies, les collaborations transdisciplinaires et l'accès direct à un réseau d'expertise, ainsi qu'à des infrastructures technologiques de pointe.",
      partnersWhyTitle: "Pourquoi rejoindre le CIM-MC² en tant que partenaire résident ?",
      partnersWhy: [
        "Intégrer un écosystème d'innovation reconnu, au croisement de la recherche, du clinique et de l'entrepreneuriat.",
        "Bénéficier d'un accès privilégié à des équipements spécialisés et à des plateformes technologiques.",
        "Favoriser les opportunités de collaboration, de co-développement et de transfert technologique.",
        "Accroître votre visibilité et votre ancrage dans un réseau Medtech régional et international.",
      ],
      partnersModalitiesTitle: "Modalités de collaboration",
      partnersModalitiesBody:
        "Des postes de travail en coworking sont proposés à l'année, avec des services associés (accès aux espaces communs, support logistique, animation de l'écosystème). Des formules adaptées peuvent être envisagées en fonction de vos besoins et de votre niveau d'implication.",
      partnersJoinTitle: "Rejoignez-nous",
      partnersJoinBody:
        "Vous souhaitez intégrer le CIM-MC² et contribuer activement à l'innovation en santé ? Contactez-nous pour discuter des modalités de partenariat.",
      partnersCta: "Devenir partenaire résident",
      careersKicker: "II · Carrières & offres d'emploi",
      careersTitle: "Rejoindre les équipes du CIM-MC²",
      careersIntro:
        "Le CIM-MC² est un environnement où ingénieurs, chercheurs, cliniciens et entrepreneurs travaillent côte à côte au service de l'innovation médicale. Rejoindre nos équipes ou celles de nos partenaires hébergés, c'est contribuer à des projets qui amélioreront concrètement la vie des patients.",
      whyTitle: "Pourquoi nous rejoindre ?",
      why: [
        "Travailler sur des projets à fort impact clinique et sociétal.",
        "Évoluer dans un écosystème pluridisciplinaire et international.",
        "Accéder à des infrastructures de recherche de pointe.",
        "Bénéficier d'un accompagnement à la formation et à l'évolution de carrière.",
      ],
      openTitle: "Postes & stages ouverts",
      openPlaceholder:
        "La liste des postes est mise à jour régulièrement (CDI, CDD, stage, thèse) et couvre les domaines R&D, clinique, opérations et support. Aucune offre publiée pour le moment — revenez régulièrement ou envoyez-nous une candidature spontanée.",
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
      careers: "Join the ecosystem",
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
        "CIM-MC² brings together clinicians, engineers and entrepreneurs to turn ideas into medical devices, faster and for the direct benefit of patients — including in the field of rare diseases that remain underserved due to market constraints.",
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
        "Enable safer procedures, reducing hospital stays and complications.",
        "Shorten the path from idea to clinical use.",
        "Move projects from TRL 4 toward industrial and clinical maturity.",
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
    clinicalNeed: {
      kicker: "Clinicians' space",
      title: "Do you have a clinical need?",
      intro:
        "Describe in a few lines a problem you face in your practice. Our team will route you to the right CIM-MC² referent within 5 working days.",
      bullets: [
        "Confidential exchange with a dedicated referent",
        "Technical and clinical feasibility assessment",
        "Introductions to engineers and industrial partners",
      ],
      submit: "Submit my need",
      privacy: "Your information is handled confidentially and used only to route your request.",
      thanksTitle: "Thank you, your request has been recorded.",
      thanksBody: "We identified the most relevant unit for your need. You will be contacted within 5 working days.",
      routedTo: "Your request is routed to",
      mailSubject: "Clinical need — CIM-MC²",
      newRequest: "Submit another need",
      f: {
        name: "First and last name",
        email: "Professional email",
        role: "Role",
        rolePh: "Physician, nurse, head of department…",
        specialty: "Specialty (optional)",
        specialtyPh: "Gastroenterology, visceral surgery…",
        domain: "Need domain",
        need: "Clinical need description",
        needPh: "What problem do you face? In which context? What solutions exist today and why are they insufficient?",
      },
      domains: {
        surgery: "Surgical & interventional devices",
        diagnostic: "Diagnostic & imaging",
        training: "Simulation & training",
        prevention: "Prevention & public health",
        other: "Other / not sure",
      },
    },
    organisation: {
      title: "Organisation",
      subtitle: "A multidisciplinary team and a network of internationally recognised partners.",
      teamTitle: "The CIM team",
      teamBody:
        "A multidisciplinary team — combining scientific, clinical, technical and entrepreneurial expertise — runs the centre and supports project leaders.",
      direction: "Direction",
      directionName: "Cécile Sztalberg",
      directionMembers: ["Cécile Sztalberg", "Dr Jacques Devière"],
      doctorsTitle: "Physicians",
      doctors: [
        "Dr Marianna Arvanitaki",
        "Dr Jacques Devière",
        "Dr Arnaud Lemmers",
        "Prof. Karim Zouaoui",
      ],
      engineersTitle: "Engineers",
      engineers: [
        "Prof. Alain Delchambre",
        "Prof. Anthoine Nonclercq",
        "Dr Ramzi Ben Hassen",
      ],
      scientificCommitteeTitle: "Scientific committee",
      scientificCommitteeNote:
        "See also the governance page of the Michel Cremer Foundation website.",
      scientificCommittee: [
        {
          name: "Dr Marc Barthet",
          role: "Department of Gastroenterology, Hôpital Nord, Marseille (France)",
        },
        {
          name: "Prof. Guido Costamagna",
          role: "Professor of Surgery, Head of the Digestive Endoscopy Unit — Università Cattolica del Sacro Cuore, Policlinico Gemelli, Rome (Italy)",
        },
        {
          name: "Dr Marc Giovannini",
          role: "Head of the Endoscopic Ultrasound and Digestive Oncology Endoscopy Unit — IPC Institut Paoli-Calmettes, Marseille (France)",
        },
      ],
      hostedTitle: "Hosted partners",
      hostedBody:
        "CIM-MC² hosts several partner organisations active in medtech and research valorisation.",
      strategicTitle: "Strategic partnerships",
      strategicBody:
        "A network of internationally recognised academic, hospital and technology partners.",
      partners: ["CHU de Charleroi", "HUB — Erasme Hospital", "MLTL — Multitel", "CHU Charleroi & Chimay", "ULB", "UMONS", "Biopark Charleroi Brussels South", "Ignity", "Sambrinvest"],
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
      geewTitle: "Role of the Gastroenterology & Endotherapy non-profit",
      geewBody: "The Gastroenterology & Endotherapy non-profit is specifically involved in organising and setting up live clinical case transmissions for CIM-MC².",
    },
    offer: {
      title: "Our offer",
      subtitle:
        "An integrated offering for medical device innovation — a one-stop shop to accelerate, secure and optimise medtech project development.",
      intro:
        "CIM-MC² provides a unique offering covering the entire medical device value chain, from clinical need identification to market launch. By combining its in-house services, the expertise of its partners and state-of-the-art infrastructure, the Centre acts as a one-stop shop to accelerate, secure and optimise medtech projects.",
      methodTitle: "End-to-end support: from idea to clinical proof",
      methodBody:
        "CIM-MC² structures its work around a proven methodology designed to significantly reduce the time between an idea and its clinical application.",
      steps: [
        "Clinical need identification",
        "Multidisciplinary co-creation",
        "Rapid prototyping",
        "Design & usage scenarios",
        "Proof of concept",
        "Feasibility studies (TAF)",
        "Clinical preparation & follow-up",
      ],
      seminarsNote:
        "The Centre also offers a dedicated programme of specialised seminars (1 to 4 days) for healthcare professionals and industrial players, including auditorium and simulation-room sessions.",
      servicesTitle: "Services delivered by CIM-MC²",
      servicesIntro:
        "In-house expertise supporting project leaders: from technology advisory and industrial design to clinical trials, training and scientific events.",
      services: [
        { t: "Technology development advisory", d: "Strategic and technical guidance on medical device design and development." },
        { t: "Industrial design", d: "Support on ergonomics, usability and industrial form-factor of devices." },
        { t: "Clinical trial protocols", d: "Methodological design, protocol writing and coordination with investigator sites." },
        { t: "Device training", d: "Design and delivery of training sessions for clinicians and hospital staff." },
        { t: "Seminars & conferences", d: "Curation and hosting of thematic events for researchers: IP, business development, regulatory…" },
        { t: "Specialised seminar programme", d: "1- to 4-day sessions in auditorium and simulation rooms for healthcare professionals and industry." },
      ],
      partnerServicesTitle: "A natural extension through ecosystem partners",
      partnerServicesIntro:
        "CIM-MC² relies on a network of specialised partners to cover the critical stages of development and market access.",
      partnerServices: [
        { t: "Preclinical & clinical validation", d: "Set-up and coordination of preclinical and clinical validation stages." },
        { t: "Regulatory advisory & certification", d: "MDR, ISO 13485, CE marking and market access." },
        { t: "Clinical studies", d: "Design, conduct and follow-up of clinical studies with hospital partners." },
        { t: "Intellectual property", d: "Patent strategy, freedom-to-operate, filings and innovation strategy." },
        { t: "Start-up & spin-off creation", d: "Legal incorporation, capital structuring and incorporation support." },
        { t: "Funding & investor access", d: "Fundraising preparation and introductions to specialised investor networks." },
        { t: "Market development & internationalisation", d: "Commercial strategy, industrial partnerships and access to international markets." },
        { t: "Industrialisation & project structuring", d: "Support for industrialisation and structuring of collaborative projects." },
      ],
      infraTitle: "Technological infrastructure & associated services",
      infraBody:
        "CIM-MC² provides state-of-the-art infrastructure with flexible access and integrated technical and logistical services. Equipment is bookable by hour, day or project, with dedicated support.",
      infraGroups: [
        {
          t: "Prototyping & validation",
          items: [
            "Medical 3D printing (FDM, SLA, SLS) with technical and biocompatible materials",
            "Measurement and verification equipment to demonstrate compliance with standards",
            "Simulation rooms for testing, functional validation and qualification (ISO, CE)",
            "Live streaming systems for training and clinical analysis",
          ],
        },
        {
          t: "Production & controlled environments",
          items: [
            "Cleanrooms for prototyping and pre-industrialisation in controlled atmosphere",
            "Maintenance, certification and technical support included",
          ],
        },
      ],
      infrastructures: [
        "3D printers for rapid prototyping",
        "Verification and measurement equipment",
        "Simulation equipment",
        "Clean assembly rooms (cleanrooms)",
        "Live surgical operation streaming",
      ],
      servicesBlockTitle: "Services offering",
      servicesBlockIntro:
        "End-to-end support from clinical need identification to market launch — by CIM-MC² teams and its partner network.",
      spacesBlockTitle: "Workspaces & ecosystem integration",
      spacesBlockIntro:
        "A working environment designed to foster collaboration and innovation, with an integrated service offering (reception, administrative support, logistics).",
      spaces: [
        { t: "Private offices", d: "For start-ups, spin-offs and resident research teams." },
        { t: "Coworking", d: "Flexible desks available year-round for project leaders and researchers." },
        { t: "Meeting & conference rooms", d: "From 4-person huddle rooms to full plenary rooms, fully equipped." },
        { t: "Convivial spaces", d: "Areas designed to encourage interdisciplinary encounters." },
      ],
      spacesCta: "Request a visit",
      conclusionKicker: "One-stop shop",
      conclusionTitle: "A one-stop shop to accelerate your innovation",
      conclusionBody:
        "By bringing together expertise, infrastructure and partners in a single location, CIM-MC² offers a unique setting to:",
      conclusionPoints: [
        "Reduce development timelines",
        "Secure critical stages (technical, regulatory, clinical)",
        "Accelerate market access",
      ],
      conclusionFooter:
        "Whether you are a start-up, an SME, an academic player or an industrial company, CIM-MC² supports you at every stage of your project.",
      ctaServices: "Discover our services",
      ctaInfra: "Book infrastructure",
      ctaResident: "Become a resident partner",
    },
    news: {
      title: "News & Events",
      subtitle:
        "Conferences, press releases, publications and updates from the centre and its partners.",
      categoriesTitle: "Categories",
      categories: ["Events", "Featured", "Press", "Publications", "Newsletter"],
      placeholder: "First stories coming soon.",
      featuredTitle: "Don't miss",
      featured: {
        tag: "Event",
        date: "Wednesday, 27 May 2026 — from 10 a.m.",
        location: "Lodelinsart",
        title: "CIM-MC² groundbreaking ceremony",
        lead:
          "The Michel Cremer / Marie Curie Medical Innovation Centre reaches a major milestone with its groundbreaking ceremony. The event marks the concrete launch of an ambitious project dedicated to accelerating the development of innovative medical solutions, closely aligned with the needs of patients and healthcare professionals.",
        body:
          "Designed as a meeting point for physicians, engineers, researchers and entrepreneurs, CIM-MC² aims to translate scientific advances into clinical applications faster, with a direct impact on quality of care and regional economic development.",
        invite:
          "We would be honoured to welcome you to this founding and symbolic moment.",
        programTitle: "Programme",
        program: [
          "Welcome",
          "Introduction",
          "Project presentation by Prof. Jacques Devière, President of the Foundation",
          "Addresses by Mr Adrien Dolimont, Minister-President of the Walloon Region, and Mr Thomas Dermine, Mayor of Charleroi",
          "Laying of the first stone",
          "Closing drink",
        ],
        cta: "Confirm my attendance",
      },
      sample: [
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
        {
          tag: "Building",
          date: "September 2027",
          title: "CIM-MC² building inauguration",
          desc: "Official opening and welcoming of the first resident projects.",
        },
      ],
      tabs: { events: "Events", news: "News" },
      eventsTitle: "Events calendar",
      eventsIntro: "Upcoming dates of CIM-MC² and its partners.",
      eventsUpcoming: "Upcoming",
      eventsPast: "Past events",
      eventsEmpty: "No event scheduled at the moment.",
      eventsCta: "View details",
      events: [
        {
          day: "27",
          month: "May",
          year: "2026",
          time: "10:00 — 13:00",
          title: "CIM-MC² groundbreaking ceremony",
          location: "Lodelinsart, Charleroi",
          desc: "Official launch of construction with regional authorities and founding partners.",
          status: "upcoming",
        },
        {
          day: "14",
          month: "Sep.",
          year: "2027",
          time: "All day",
          title: "CIM-MC² building inauguration",
          location: "ARCHIPELAGO, Charleroi",
          desc: "Official opening of the centre and welcoming of the first resident projects.",
          status: "upcoming",
        },
        {
          day: "06",
          month: "Nov.",
          year: "2025",
          time: "18:00 — 21:00",
          title: "Medtech evening — meeting with partners",
          location: "BioPark, Gosselies",
          desc: "Presentation of the CIM-MC² ecosystem to Walloon Medtech players.",
          status: "past",
        },
      ],
      newsTitle: "Latest news",
      newsIntro: "Press releases, publications and updates from the centre and its partners.",
      newsCta: "Read article",
      newsSubTabs: { highlight: "Highlights", press: "Press", publication: "Publications" },
      newsEmpty: "No content yet in this section.",
      newsItems: [
        {
          date: "12 March 2026",
          category: "Press release",
          kind: "highlight",
          title: "CIM-MC² welcomes a new partnership with HUB — Erasme Hospital",
          excerpt:
            "A strategic partnership to strengthen clinical case transmissions and clinician training.",
        },
        {
          date: "05 February 2026",
          category: "Announcement",
          kind: "highlight",
          title: "CIM-MC² groundbreaking ceremony on 27 May 2026",
          excerpt:
            "Official kick-off of the construction with regional authorities and founding partners.",
        },
        {
          date: "10 December 2025",
          category: "Press",
          kind: "press",
          title: "CIM-MC² awarded the Mecatech cluster label",
          excerpt:
            "Recognition of the quality of the R&D programme and acceleration of industrial deployment.",
        },
        {
          date: "18 November 2025",
          category: "Press",
          kind: "press",
          title: "L'Echo: 'Charleroi gains a unique medical innovation centre in Wallonia'",
          excerpt:
            "The economic press covers the ARCHIPELAGO project and the Medtech ambition of CIM-MC².",
        },
        {
          date: "28 January 2026",
          category: "Publication",
          kind: "publication",
          title: "Connected glass: first promising results",
          excerpt:
            "The ULg, Multitel and ULB consortium presents the first results of the swallowing monitoring device.",
        },
        {
          date: "02 October 2025",
          category: "Publication",
          kind: "publication",
          title: "Scientific paper: magnetic endoscopic capsule — feasibility study",
          excerpt:
            "Joint ULB / CHU Marie Curie publication on magnetic navigation of the capsule in the gastric cavity.",
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
      title: "Join the CIM-MC² ecosystem",
      subtitle:
        "Become a resident partner or join our teams: step into a unique environment where engineers, researchers, clinicians and entrepreneurs collaborate every day.",
      partnersKicker: "I · Partners",
      partnersTitle: "Become a resident partner",
      partnersIntro:
        "CIM-MC² is a unique environment where engineers, researchers, clinicians and entrepreneurs work together every day to accelerate medical device innovation. By joining our ecosystem as a resident partner, you take part in a collaborative dynamic at the heart of projects with strong clinical and societal impact.",
      partnersBody:
        "We invite Medtech players to engage actively by taking a seat within our coworking spaces, available through an annual agreement. An on-site presence fosters synergies, cross-disciplinary collaborations and direct access to a network of expertise as well as state-of-the-art technological infrastructure.",
      partnersWhyTitle: "Why join CIM-MC² as a resident partner?",
      partnersWhy: [
        "Be part of a recognised innovation ecosystem at the crossroads of research, clinical practice and entrepreneurship.",
        "Enjoy privileged access to specialised equipment and technological platforms.",
        "Unlock opportunities for collaboration, co-development and technology transfer.",
        "Grow your visibility and presence within a regional and international Medtech network.",
      ],
      partnersModalitiesTitle: "Collaboration terms",
      partnersModalitiesBody:
        "Coworking workstations are offered on a yearly basis, with associated services (access to common areas, logistical support, ecosystem activities). Tailored packages can be discussed depending on your needs and level of involvement.",
      partnersJoinTitle: "Join us",
      partnersJoinBody:
        "Want to join CIM-MC² and actively contribute to health innovation? Get in touch to discuss partnership terms.",
      partnersCta: "Become a resident partner",
      careersKicker: "II · Careers & job offers",
      careersTitle: "Join the CIM-MC² teams",
      careersIntro:
        "CIM-MC² is a place where engineers, researchers, clinicians and entrepreneurs work side by side in service of medical innovation. Joining our teams — or those of our hosted partners — means contributing to projects that will tangibly improve patients' lives.",
      whyTitle: "Why join us?",
      why: [
        "Work on projects with strong clinical and societal impact.",
        "Grow within a multidisciplinary, international ecosystem.",
        "Access state-of-the-art research infrastructure.",
        "Benefit from training and career development support.",
      ],
      openTitle: "Open positions & internships",
      openPlaceholder:
        "Positions are updated regularly (permanent, fixed-term, internships, PhD) across R&D, clinical, operations and support. No openings published right now — check back regularly or send us a spontaneous application.",
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
