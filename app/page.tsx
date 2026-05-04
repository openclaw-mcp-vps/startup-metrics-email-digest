export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Startup Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Your Weekly Startup Metrics,{" "}
          <span className="text-[#58a6ff]">Delivered Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          MetricsPulse connects to Stripe, Google Analytics, Mixpanel and more to aggregate your key metrics into one clean weekly email digest — no dashboards to check, no data to wrangle.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["Stripe", "Revenue & MRR"],
            ["Google Analytics", "Traffic & Users"],
            ["Mixpanel", "Product Events"],
            ["Custom APIs", "Any Data Source"]
          ].map(([tool, desc]) => (
            <div key={tool} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm">{tool}</p>
              <p className="text-[#6e7681] text-xs mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Founder Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$25</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect up to 5 data sources",
              "Automated weekly email digest",
              "Stripe MRR, churn & revenue",
              "GA4 traffic & conversion metrics",
              "Mixpanel event summaries",
              "Custom metric highlights",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Your Digest
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which tools can MetricsPulse connect to?",
              "Currently Stripe, Google Analytics 4, and Mixpanel are supported out of the box. Custom API integrations are available on request."
            ],
            [
              "When are digests sent?",
              "Every Monday morning at 8 AM in your timezone, so you start the week with a full picture of last week's performance."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} MetricsPulse. All rights reserved.
      </footer>
    </main>
  );
}
