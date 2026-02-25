const sponsors = [
  { name: "Nordi Capital", tier: "Platinum" },
  { name: "Tallinn Tech", tier: "Platinum" },
  { name: "Baltic Ventures", tier: "Gold" },
  { name: "Studio Nord", tier: "Gold" },
  { name: "Kagu Systems", tier: "Silver" },
  { name: "EduForward", tier: "Silver" },
  { name: "MediaHub", tier: "Silver" },
  { name: "Aura Creative", tier: "Bronze" },
];

const tierStyles: Record<string, string> = {
  Platinum: "text-white border-white/20 bg-white/10 text-lg font-bold",
  Gold: "text-amber-200 border-amber-400/20 bg-amber-400/5 text-base font-semibold",
  Silver: "text-white/60 border-white/10 bg-white/5 text-sm font-medium",
  Bronze: "text-white/40 border-white/5 bg-white/[0.03] text-sm font-medium",
};

export default function Sponsors() {
  const tiers = ["Platinum", "Gold", "Silver", "Bronze"];

  return (
    <section id="sponsors" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Sponsors
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Supported by
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            KAUGE Symposium is made possible by the generous support of our
            partners and sponsors.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {tiers.map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier);
            if (!tierSponsors.length) return null;
            return (
              <div key={tier}>
                <p className="text-white/30 text-xs font-semibold tracking-widest uppercase text-center mb-5">
                  {tier}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {tierSponsors.map((s) => (
                    <div
                      key={s.name}
                      className={`border rounded-xl px-8 py-5 ${tierStyles[tier]}`}
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/30 text-sm mt-12">
          Interested in sponsoring?{" "}
          <a href="mailto:sponsors@kauge.org" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
