const tickets = [
  {
    name: "Student",
    price: "€49",
    description: "Full access for students and early-career researchers.",
    features: [
      "All sessions & keynotes",
      "Networking events",
      "Digital program booklet",
    ],
    cta: "Get Student Ticket",
    highlight: false,
  },
  {
    name: "Standard",
    price: "€149",
    description: "Perfect for professionals attending the full symposium.",
    features: [
      "All sessions & keynotes",
      "Networking events",
      "Printed program booklet",
      "Symposium dinner (Day 2)",
    ],
    cta: "Get Standard Ticket",
    highlight: true,
  },
  {
    name: "VIP",
    price: "€349",
    description: "Exclusive access with priority seating and speaker meet-and-greet.",
    features: [
      "All sessions & keynotes",
      "Priority front-row seating",
      "Speaker meet-and-greet",
      "Symposium dinner (Day 2)",
      "VIP reception (Day 1)",
    ],
    cta: "Get VIP Ticket",
    highlight: false,
  },
];

export default function Register() {
  return (
    <section id="register" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Register
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Secure your spot
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Spaces are limited. Register early to guarantee your place at KAUGE
            Symposium 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tickets.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 gap-6 ${
                t.highlight
                  ? "border-indigo-500/50 bg-indigo-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <p className="text-white/60 text-sm font-medium mb-1">{t.name}</p>
                <p className="text-4xl font-bold text-white">{t.price}</p>
                <p className="text-white/40 text-sm mt-2">{t.description}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                    <svg
                      className="w-4 h-4 text-indigo-400 shrink-0"
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
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-colors duration-200 ${
                  t.highlight
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
