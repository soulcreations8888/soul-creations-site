import { useEffect, useMemo, useState } from "react";

/* -------------------- Content (EN & NL) -------------------- */
const content = {
  en: {
    brand: "Soul Creations",
    tagline: "Align • Heal • Create",
    introTitle: "Welcome to Soul Creations",
    introBody:
      "I guide you into deeper alignment and clarity through intuitive sessions and energetic work. Below you can explore my offerings and book the one that resonates.",
    aboutTitle: "About Me",
    aboutBody:
      "I'm [Your Name], a practitioner focused on gentle, practical transformation. My approach blends intuition, grounded guidance, and energetic clearing to support real-life shifts.",
    offeringsTitle: "Offerings",
    offerings: [
      {
        slug: "clarity-session",
        title: "Clarity Session",
        short: "45–60 min conversation to find direction and remove noise.",
        price: "€79",
        duration: "60 min",
        detail:
          "A focused session to untangle what's present, dissolve confusion, and leave with clear next steps. Includes brief energy alignment.",
      },
      {
        slug: "energy-alignment",
        title: "Energy Alignment",
        short: "Deep energetic reset for coherence and calm.",
        price: "€111",
        duration: "75 min",
        detail:
          "A gentle yet thorough energetic balancing to release heaviness, restore flow, and realign with your authentic field.",
      },
      {
        slug: "superasymmetry-intensive",
        title: "Superasymmetry Intensive",
        short: "2-hour deep dive integrating field work and guidance.",
        price: "€222",
        duration: "120 min",
        detail:
          "An immersive process combining conversation, energetic work, and custom practices anchored in your unique resonance.",
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Questions or a custom package? Reach out and I’ll respond personally.",
    bookCta: "Schedule an appointment",
    back: "Back",
  },
  nl: {
    brand: "Soul Creations",
    tagline: "Afstemmen • Heling • Creëren",
    introTitle: "Welkom bij Soul Creations",
    introBody:
      "Ik begeleid je naar meer afstemming en helderheid via intuïtieve sessies en energetisch werk. Hieronder vind je mijn aanbod en kun je boeken wat bij je past.",
    aboutTitle: "Over mij",
    aboutBody:
      "Ik ben [Jouw Naam], een begeleider met focus op zachte, praktische transformatie. Mijn aanpak combineert intuïtie, nuchtere begeleiding en energetische opschoning.",
    offeringsTitle: "Aanbod",
    offerings: [
      {
        slug: "helderheid-sessie",
        title: "Helderheid Sessie",
        short:
          "45–60 min gesprek om richting te vinden en ruis te verwijderen.",
        price: "€79",
        duration: "60 min",
        detail:
          "Een gerichte sessie om te ontrafelen wat speelt, verwarring te verzachten en helder verder te gaan. Inclusief korte energie-afstemming.",
      },
      {
        slug: "energie-afstemming",
        title: "Energie Afstemming",
        short: "Diepe energetische reset voor rust en coherentie.",
        price: "€111",
        duration: "75 min",
        detail:
          "Zachte maar grondige energetische balancing om zwaarte los te laten, stroom te herstellen en opnieuw in lijn te komen.",
      },
      {
        slug: "superasymmetry-intensive",
        title: "Superasymmetry Intensive",
        short: "2 uur diepe duik met veldwerk en begeleiding.",
        price: "€222",
        duration: "120 min",
        detail:
          "Een intensief traject met gesprek, energetisch werk en op maat gemaakte oefeningen, verankerd in jouw unieke resonantie.",
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Vragen of een maatwerktraject? Stuur een bericht en ik reageer persoonlijk.",
    bookCta: "Afspraak plannen",
    back: "Terug",
  },
};

/* -------------------- Tiny Router -------------------- */
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const parts = useMemo(
    () => hash.replace(/^#\\/?/, "").split("/").filter(Boolean),
    [hash]
  );
  return {
    parts,
    push: (h) => (window.location.hash = h.startsWith("#") ? h : `#${h}`),
  };
}

/* -------------------- UI helpers -------------------- */
function Container({ children }) {
  return <div className="mx-auto w-full max-w-5xl px-4">{children}</div>;
}
function Section({ id, children }) {
  return (
    <section id={id} className="border-t bg-white">
      <Container>
        <div className="py-12 md:py-16">{children}</div>
      </Container>
    </section>
  );
}
function Button({ href, onClick, children, variant = "solid" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";
  const solid = "bg-amber-500 text-white hover:bg-amber-600";
  const outline = "border border-amber-500 text-amber-700 hover:bg-amber-50";
  const cls = `${base} ${variant === "solid" ? solid : outline}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

/* -------------------- Pages -------------------- */
function Landing({ push }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold tracking-tight">Soul Creations</span>
              <span className="text-sm text-amber-600">— White & Gold</span>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Section>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Welcome to <span className="text-amber-600">Soul Creations</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Choose your language to enter the site. Kies je taal om verder te gaan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={() => push("/en")}>English</Button>
                <Button variant="outline" onClick={() => push("/nl")}>Nederlands</Button>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Scroll is one-page. Offerings open their own detail page with booking.
              </p>
            </div>
            <div className="rounded-3xl border bg-gradient-to-br from-white to-amber-50 p-8 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-2xl border border-amber-200/70 bg-white shadow-inner" />
              <p className="mt-4 text-sm text-gray-600">White + gold aesthetic. We can add your logo and images.</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function OnePage({ lang, push }) {
  const t = content[lang];
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a onClick={(e)=>{e.preventDefault(); push(`/${lang}`);}} href={`#/${lang}`} className="text-xl font-extrabold">
              <span className="tracking-tight">{t.brand}</span>
            </a>
            <nav className="hidden gap-6 md:flex">
              <a href="#about" className="hover:text-amber-700">About</a>
              <a href="#offerings" className="hover:text-amber-700">Offerings</a>
              <a href="#contact" className="hover:text-amber-700">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              {lang === "en"
                ? <Button variant="outline" onClick={() => push("/nl")}>NL</Button>
                : <Button variant="outline" onClick={() => push("/en")}>EN</Button>}
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Section id="home">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{t.introTitle}</h1>
              <p className="mt-4 text-lg text-gray-600">{t.introBody}</p>
              <div className="mt-8 flex gap-3">
                <Button href="#offerings">{lang === "en" ? "Explore offerings" : "Bekijk aanbod"}</Button>
                <Button variant="outline" href="#contact">{lang === "en" ? "Contact" : "Contact"}</Button>
              </div>
            </div>
            <div className="rounded-3xl border border-amber-200 p-8 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-inner" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl border p-3"><div className="font-semibold text-amber-700">Light</div><div>White space</div></div>
                <div className="rounded-xl border p-3"><div className="font-semibold text-amber-700">Gold</div><div>Accents</div></div>
                <div className="rounded-xl border p-3"><div className="font-semibold text-amber-700">Calm</div><div>Typography</div></div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about">
          <h2 className="text-2xl font-bold md:text-3xl"><span className="border-b-4 border-amber-500 pb-1">{t.aboutTitle}</span></h2>
          <p className="mt-4 max-w-3xl text-gray-700">{t.aboutBody}</p>
        </Section>

        <Section id="offerings">
          <h2 className="text-2xl font-bold md:text-3xl"><span className="border-b-4 border-amber-500 pb-1">{t.offeringsTitle}</span></h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.offerings.map((o) => (
              <div key={o.slug} className="rounded-3xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{o.short}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-amber-700">{o.price}</span>
                  <span className="text-gray-500">{o.duration}</span>
                </div>
                <div className="mt-6">
                  <Button onClick={() => push(`/${lang}/offerings/${o.slug}`)}>
                    {lang === "en" ? "Read & book" : "Lees & boek"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <h2 className="text-2xl font-bold md:text-3xl"><span className="border-b-4 border-amber-500 pb-1">{t.contactTitle}</span></h2>
          <p className="mt-3 max-w-2xl text-gray-700">{t.contactBody}</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={(e)=>e.preventDefault()}>
            <input className="rounded-2xl border px-4 py-3" placeholder={lang === "en" ? "Name" : "Naam"} />
            <input className="rounded-2xl border px-4 py-3" type="email" placeholder="Email" />
            <textarea className="md:col-span-2 rounded-2xl border px-4 py-3" rows={5} placeholder={lang === "en" ? "Your message" : "Je bericht"} />
            <Button>{lang === "en" ? "Send" : "Verstuur"}</Button>
          </form>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function OfferingDetail({ lang, slug, push }) {
  const t = content[lang];
  const item = t.offerings.find((o) => o.slug === slug || (lang === "nl" && o.slug === slug));
  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="py-20 text-center">
            <p className="text-gray-600">Not found.</p>
            <div className="mt-6"><Button onClick={() => push(`/${lang}`)}>{t.back}</Button></div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a onClick={(e)=>{e.preventDefault(); push(`/${lang}`);}} href={`#/${lang}`} className="text-xl font-extrabold">{t.brand}</a>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => push(`/${lang}`)}>{t.back}</Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Section>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{item.title}</h1>
              <p className="mt-4 text-gray-700">{item.detail}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• <strong>Price:</strong> {item.price}</li>
                <li>• <strong>{lang === "en" ? "Duration" : "Duur"}:</strong> {item.duration}</li>
                <li>• <strong>{lang === "en" ? "Format" : "Vorm"}:</strong> {lang === "en" ? "In-person or online" : "Op locatie of online"}</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:hello@example.com?subject=${encodeURIComponent(`${t.brand} — ${item.title}`)}`}>
                  {t.bookCta}
                </Button>
                <Button variant="outline" onClick={() => push(`/${lang}`)}>{t.back}</Button>
              </div>
            </div>
            <div className="rounded-3xl border border-amber-200 p-8 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-inner" />
              <p className="mt-3 text-sm text-gray-600">We can place photos, testimonials, or a short FAQ here.</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Soul Creations. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-700">Privacy</a>
            <a href="#" className="hover:text-amber-700">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* -------------------- App Shell -------------------- */
export default function App() {
  const { parts, push } = useHashRoute();
  if (parts.length === 0) return <Landing push={push} />;
  if (parts[0] === "en" && parts.length === 1) return <OnePage lang="en" push={push} />;
  if (parts[0] === "nl" && parts.length === 1) return <OnePage lang="nl" push={push} />;
  if ((parts[0] === "en" || parts[0] === "nl") && parts[1] === "offerings" && parts[2]) {
    return <OfferingDetail lang={parts[0]} slug={parts[2]} push={push} />;
  }
  return <Landing push={push} />;
}
