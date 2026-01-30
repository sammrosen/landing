export default function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          Turn Prospects Into Members and{" "}
          <span className="gradient-text">Members Into PT Clients</span>{" "}
          — Automatically.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[var(--muted)] max-w-3xl mx-auto">
          The Lead-to-PT System runs in the background to book tours, follow up with prospects, and move new members into personal training — so no leads fall through the cracks.
        </p>
      </div>
    </section>
  );
}
