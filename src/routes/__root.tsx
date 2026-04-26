import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CIM-MC² — Centre d'Innovation Médicale Michel Cremer – Marie Curie" },
      {
        name: "description",
        content:
          "Le CIM-MC² accélère le développement de dispositifs médicaux innovants — de l'idée jusqu'au patient. Plateforme de collaboration entre cliniciens, chercheurs et entrepreneurs à Charleroi.",
      },
      { name: "author", content: "CIM-MC²" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "CIM-MC² — Centre d'Innovation Médicale Michel Cremer – Marie Curie" },
      {
        property: "og:description",
        content:
          "Du besoin clinique au patient — accélérer l'innovation médicale.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CIM-MC² — Centre d'Innovation Médicale Michel Cremer – Marie Curie" },
      { name: "description", content: "Medical Innovation Hub accelerates medical device development from idea to patient use." },
      { property: "og:description", content: "Medical Innovation Hub accelerates medical device development from idea to patient use." },
      { name: "twitter:description", content: "Medical Innovation Hub accelerates medical device development from idea to patient use." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9135cd4c-d4eb-4844-98b4-febdf9be5191/id-preview-33d1fec2--35c1ad9b-7476-4edb-b3b9-45eccf6950c0.lovable.app-1777221874037.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9135cd4c-d4eb-4844-98b4-febdf9be5191/id-preview-33d1fec2--35c1ad9b-7476-4edb-b3b9-45eccf6950c0.lovable.app-1777221874037.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function NotFound() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-soft">
        <div className="max-w-md text-center">
          <p className="font-display text-7xl text-coral">404</p>
          <h1 className="mt-4 text-2xl font-display text-primary">Page introuvable / Page not found</h1>
          <p className="mt-2 text-muted-foreground">
            La page demandée n'existe pas. / The requested page doesn't exist.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-smooth hover:scale-105"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </LanguageProvider>
  );
}
