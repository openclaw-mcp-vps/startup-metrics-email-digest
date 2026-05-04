import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetricsPulse — Weekly Startup Metrics Digest",
  description: "Aggregate key startup metrics from Stripe, Google Analytics, Mixpanel and more into one automated weekly email digest for founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f28f918f-a6b9-4963-a2a4-bbc0d596a7b8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
