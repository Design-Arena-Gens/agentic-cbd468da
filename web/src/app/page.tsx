import Image from "next/image";

const featuredProperties = [
  {
    title: "Skyline Penthouse",
    location: "Downtown, Manhattan",
    price: "$4,950,000",
    beds: 4,
    baths: 3.5,
    area: "3,200",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lakeside Retreat",
    location: "Kirkland, Washington",
    price: "$2,420,000",
    beds: 5,
    baths: 4,
    area: "4,150",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern Family Estate",
    location: "Austin, Texas",
    price: "$1,780,000",
    beds: 4,
    baths: 3,
    area: "2,850",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const services = [
  {
    title: "Buy a Home",
    description:
      "Browse hand-curated listings and let our specialists guide you from search to closing day.",
  },
  {
    title: "Sell with Confidence",
    description:
      "Receive a custom marketing plan, professional staging, and expert negotiations.",
  },
  {
    title: "Relocation Experts",
    description:
      "Seamless relocation services with local insights, school matching, and concierge moving support.",
  },
];

const testimonials = [
  {
    quote:
      "Our experience was outstanding. The team anticipated our needs and found us the dream home we didn’t know existed.",
    name: "Evelyn Carter",
    role: "Home Buyer",
  },
  {
    quote:
      "They sold our property above asking in under a week with professional marketing that attracted serious buyers.",
    name: "Marcus Lee",
    role: "Home Seller",
  },
  {
    quote:
      "Relocating cross-country was surprisingly easy thanks to their concierge team and community introductions.",
    name: "Priya Natarajan",
    role: "Relocation Client",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury apartment overlooking the city skyline"
            fill
            className="object-cover opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        </div>
        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-2xl font-semibold tracking-tight">
            Harbor Estates
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
            <a className="transition hover:text-emerald-300" href="#properties">
              Properties
            </a>
            <a className="transition hover:text-emerald-300" href="#neighborhood">
              Neighborhoods
            </a>
            <a className="transition hover:text-emerald-300" href="#services">
              Services
            </a>
            <a className="transition hover:text-emerald-300" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:translate-y-0.5 hover:bg-emerald-300"
          >
            Book a Consultation
          </a>
        </nav>
        <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-8">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Award-Winning Luxury Brokerage
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Find your next chapter in a home that inspires.
            </h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Discover architecturally distinctive properties, curated by local
              experts who know every street, skyline, and hidden gem in the
              city. Personalized service from first tour to final signature.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#properties"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:scale-105"
              >
                Explore Listings
              </a>
              <a
                href="#neighborhood"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Neighborhood Guide
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:max-w-sm">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl font-semibold text-emerald-300">350+</p>
              <p className="text-sm text-blue-100">Luxury Sales Closed</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl font-semibold text-emerald-300">$1.9B</p>
              <p className="text-sm text-blue-100">Total Sales Volume</p>
            </div>
            <div className="col-span-2 rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-xl font-medium text-blue-100">
                “Their market knowledge and hospitality made buying a joy.”
              </p>
              <p className="mt-3 text-sm text-blue-200">— Jefferson & Mia</p>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20">
        <section id="properties" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                Featured Listings
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Homes that elevate everyday living
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
            >
              Request Private Showing
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProperties.map((property) => (
              <article
                key={property.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {property.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {property.location}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-emerald-600">
                    {property.price}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.area} sq.ft</span>
                  </div>
                  <button className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                    View Property
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="neighborhood"
          className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-white"
        >
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Neighborhood Spotlight
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Southbank Arts District
              </h2>
              <p className="text-blue-100">
                Lush riverfront parks, Michelin-starred dining, and a thriving
                arts scene make Southbank one of the most coveted enclaves for
                modern families and creatives alike. Walkable streets connect
                boutique galleries, artisanal markets, and top-tier schools.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Waterfront promenade & cycling paths",
                  "Award-winning Elementary & STEM Academy",
                  "Direct commute access via express ferry",
                  "Median home value growth +18% YoY",
                ].map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-blue-50"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90 text-slate-900">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1529429617124-aee711a15533?auto=format&fit=crop&w=1000&q=80"
                alt="Southbank riverfront skyline at sunset"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 90vw"
              />
            </div>
          </div>
        </section>

        <section
          id="services"
          className="grid gap-8 rounded-3xl bg-white px-8 py-16 shadow-lg shadow-slate-200/50 md:grid-cols-3"
        >
          {services.map((service) => (
            <article key={service.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
              >
                Talk to an advisor <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </section>

        <section className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Elevate Every Detail
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              A concierge team dedicated to your lifestyle
            </h2>
            <p className="text-slate-600">
              From architectural tours to bespoke contract strategies, we tailor
              every touchpoint. Our in-house designers, market analysts, and
              closing specialists collaborate to create a seamless experience
              and safeguard your investment.
            </p>
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Average Days on Market
                </dt>
                <dd className="text-2xl font-semibold text-slate-900">11</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Listings Sold Above Ask
                </dt>
                <dd className="text-2xl font-semibold text-slate-900">86%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Dedicated Specialists
                </dt>
                <dd className="text-2xl font-semibold text-slate-900">27+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Annual Client Retention
                </dt>
                <dd className="text-2xl font-semibold text-slate-900">94%</dd>
              </div>
            </dl>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
              alt="Real estate agent consulting with clients"
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 768px) 33vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-0 w-full space-y-3 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Concierge Advantage
              </p>
              <p className="text-lg font-medium">
                Complimentary staging, cinematic video tours, curated broker
                events, and white-glove closing.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-100 px-8 py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                Voices of Trust
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Clients who love where they live
              </h2>
              <p className="text-slate-600">
                We build lifelong relationships through discretion, detail, and
                results. Discover why discerning buyers and sellers partner with
                Harbor Estates year after year.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed shadow-sm"
                >
                  <p className="text-slate-700">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-10 rounded-3xl bg-white px-8 py-16 shadow-lg shadow-slate-200/50 md:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Let&apos;s Talk
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Schedule your confidential consultation
            </h2>
            <p className="text-slate-600">
              Share your goals and we will craft a personalized strategy. Our
              specialists respond within one business day.
            </p>
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                <strong className="font-semibold text-slate-900">
                  Headquarters
                </strong>
                <br />
                1890 Harbor Plaza, Suite 240, San Francisco, CA
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Direct Line
                </strong>
                <br />
                (415) 555-0193
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Exclusives Bulletin
                </strong>
                <br />
                Be the first to tour new listings before they reach the market.
              </p>
            </div>
          </div>
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Alex Morgan"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="alex@domain.com"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="(415) 555-0193"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Interested In
                <select
                  name="interest"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="buying">Buying a residence</option>
                  <option value="selling">Selling a residence</option>
                  <option value="relocation">Relocating</option>
                  <option value="valuation">Market valuation</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Tell us about your goals
              <textarea
                name="message"
                rows={4}
                placeholder="Share any details that will help us prepare for our call."
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/50 transition hover:bg-emerald-400"
            >
              Submit Request
            </button>
            <p className="text-xs text-slate-400">
              By submitting this form you agree to receive exclusive listing
              updates. Your information is kept confidential.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-600">
            © {new Date().getFullYear()} Harbor Estates. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-emerald-500" href="#">
              Privacy
            </a>
            <a className="transition hover:text-emerald-500" href="#">
              Terms
            </a>
            <a className="transition hover:text-emerald-500" href="#">
              Licensed in CA, WA, NY, TX
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
