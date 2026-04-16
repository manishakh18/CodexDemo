import Button from "./Button";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
      <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:p-10">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            New arrivals
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Discover products built for modern creators.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">
            Shop curated gadgets and accessories designed to help you stay
            focused, inspired, and productive every day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Shop now</Button>
            <Button variant="backdrop">Explore categories</Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3">
          <img
            src="/hero-showcase.svg"
            alt="Stylized hero image showcasing featured products"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
