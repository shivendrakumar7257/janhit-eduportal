import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouter, Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-hero text-primary-foreground px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display font-bold text-gradient-gold">404</h1>
        <p className="mt-4 text-lg opacity-90">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex px-5 py-2.5 rounded-xl bg-gradient-gold text-gold-foreground font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-display font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Janhit Group of Institutions — Empowering Education Since 2002" },
      { name: "description", content: "Janhit Group of Institutions — a premier family of colleges and schools across Greater Noida, Ghaziabad and Saharanpur, offering programs in Law, Management, Education, Commerce, Science and K-12." },
      { property: "og:title", content: "Janhit Group of Institutions" },
      { property: "og:description", content: "Empowering Education Across Uttar Pradesh Since 2002" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
