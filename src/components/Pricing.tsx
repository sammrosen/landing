const pricingPlans = [
  {
    name: "Lead to Member System",
    price: "$498",
    period: "/month",
    features: [
      "Professional Website",
      "Prospect self serve booking",
      "Prospect self-serve sign up",
      "Prospect email marketing",
      "ABC Ignite & GymSales Integration",
    ],
    cta: "Get Started",
    highlighted: false,
    stripeLink: "#", // Replace with your Stripe link
  },
  {
    name: "Member to PT System",
    price: "$697",
    period: "/month",
    includes: "Everything in Lead to Member +",
    features: [
      "Self serve magic link class/appointment booking",
      "Click and book class schedules on website",
      "Member email marketing",
      "ABC Ignite & GymSales Integration",
    ],
    cta: "Get Started",
    highlighted: true,
    stripeLink: "#", // Replace with your Stripe link
  },
  {
    name: "Custom Business System",
    price: "$2,000",
    period: "+ $599/mo",
    startingAt: true,
    features: [
      "Professional website",
      "Custom booking integration",
      "Custom marketing integration",
      "Custom CRM integration",
      "Custom solutions tailored to you",
    ],
    cta: "Contact Us",
    highlighted: false,
    stripeLink: "#", // Replace with your contact link
  },
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? "border-[var(--primary)] glow"
                  : "border-[var(--border)]"
              } bg-[var(--secondary)]`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg text-white text-sm font-semibold rounded-full">
                  Recommended
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                {"startingAt" in plan && plan.startingAt && (
                  <span className="text-sm text-[var(--muted)] block mb-1">Starting at</span>
                )}
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-[var(--muted)]"> {plan.period}</span>
              </div>

              {/* Includes text for middle tier */}
              {"includes" in plan && plan.includes && (
                <p className="text-sm text-[var(--primary)] font-medium mb-4">
                  {plan.includes}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-[var(--muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Email */}
        <div className="mt-16 text-center">
          <p className="text-[var(--muted)] mb-2">Inquire at</p>
          <a
            href="mailto:sam@rosensystems.io"
            className="text-white text-xl hover:text-[var(--primary)] transition-colors"
          >
            sam@rosensystems.io
          </a>
        </div>
      </div>
    </section>
  );
}
