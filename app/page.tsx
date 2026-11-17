import { Header } from "@/components/Header";
import { LogoMark } from "@/components/LogoMark";
import { ClockIcon, DownloadIcon, LayersIcon } from "@/components/Icons";
import { APP_URL, FEATURES, FIGURES, GITHUB_URL, ORG_NAME } from "@/lib/site";

const ICONS = { layers: LayersIcon, download: DownloadIcon, clock: ClockIcon } as const;

const wrap = "mx-auto w-full max-w-[1120px]";

export default function Home() {
  return (
    <div id="top">
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="px-5 py-11 md:px-10 md:py-22">
          <div className={`${wrap} grid items-center gap-8 md:grid-cols-2 md:gap-[72px]`}>
            <div className="flex flex-col items-start gap-6">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11.5px] font-medium text-brand-soft">
                On-device AI · Flutter
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="text-[44px] leading-[1.1] font-bold md:text-[52px] md:leading-[60px]">
                  AI that runs on your phone
                </h1>
                <p className="text-base leading-6 text-white/70">
                  MULTI-AI runs language models directly on your phone, across three inference tiers, so you chat with
                  the model your hardware fits best.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <a href={APP_URL} className="rounded-[14px] bg-brand px-[22px] py-3.5 transition-colors hover:bg-[#7c4dcc]">
                  Get the app
                </a>
                <a
                  href={GITHUB_URL}
                  rel="noopener noreferrer"
                  className="rounded-[14px] bg-white/10 px-[22px] py-3.5 transition-colors hover:bg-white/20"
                >
                  View on GitHub
                </a>
              </div>
              <p className="text-[13px] text-white/70">Built by {ORG_NAME}</p>
            </div>

            {/* Decorative sample chat */}
            <figure
              className="flex flex-col gap-[18px] rounded-[28px] border border-white/10 bg-surface p-5 md:p-7"
              aria-label="Example conversation in MULTI-AI"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[15px] font-semibold">Qwen2.5 7B Instruct</span>
                <span className="rounded-full bg-ok/15 px-2.5 py-1 text-[11.5px] font-medium text-ok">Optimal</span>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[280px] rounded-[18px] bg-brand px-4 py-2.5 text-sm leading-[21px]">
                  Explain how a transformer model works.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[13px] font-semibold">Qwen2.5 7B Instruct</p>
                <p className="text-sm leading-[21px] text-white/70">
                  A transformer reads every word at once and uses attention to weigh which words matter most to each
                  other.
                </p>
              </div>
              <p className="text-xs text-white/60">LLMs can make mistakes. Verify important information.</p>
            </figure>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-band px-5 py-11 md:px-10 md:py-22">
          <div className={`${wrap} flex flex-col gap-12`}>
            <div className="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
              <h2 className="text-[30px] leading-[38px] font-bold">One app, every kind of model</h2>
              <p className="text-lg leading-7 text-white/70">Three things MULTI-AI handles so you don&apos;t have to.</p>
            </div>
            <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
              {FEATURES.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <li
                    key={f.id}
                    id={f.id}
                    className="flex flex-col gap-4 rounded-[14px] border border-white/10 bg-surface p-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10 text-brand-soft">
                      <Icon />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold">{f.title}</h3>
                      <p className="text-sm leading-[21px] text-white/70">{f.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Figures */}
        <section aria-label="MULTI-AI at a glance" className="bg-brand px-5 py-8 md:px-10 md:py-16">
          <dl className={`${wrap} grid gap-8 md:grid-cols-4`}>
            {FIGURES.map((f) => (
              <div key={f.label} className="flex flex-col-reverse items-center gap-1 text-center">
                <dt className="text-sm leading-[21px]">{f.label}</dt>
                <dd className="text-5xl leading-[56px] font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Quote */}
        <section id="about" className="px-5 py-11 md:px-10 md:py-22">
          <figure className={`${wrap} flex flex-col items-center gap-7 text-center`}>
            <blockquote className="max-w-[760px] text-[20px] md:text-[22px] leading-[30px] font-medium">
              “AI should run where you are: on the device in your hand, using only the compute it needs.”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-white/10 text-sm font-semibold text-brand-soft"
              >
                VA
              </span>
              <span className="flex flex-col text-left">
                <span className="text-sm font-semibold">{ORG_NAME}</span>
                <span className="text-[13px] text-white/70">The team behind MULTI-AI</span>
              </span>
            </figcaption>
          </figure>
        </section>

        {/* Call to action */}
        <section className="px-5 pb-11 md:px-10 md:pb-22">
          <div
            className={`${wrap} flex flex-col gap-6 rounded-[20px] border border-white/10 bg-surface p-5 md:flex-row md:items-center md:justify-between md:p-8`}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-[30px] leading-[38px] font-bold">Run your first model on-device</h2>
              <p className="text-lg leading-7 text-white/70">Get MULTI-AI and pick a model that fits your phone.</p>
            </div>
            <a
              href={APP_URL}
              className="shrink-0 self-start rounded-[14px] bg-brand px-[22px] py-3.5 text-sm font-medium transition-colors hover:bg-[#7c4dcc]"
            >
              Get the app
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-4 md:px-10 md:py-8">
        <div className={`${wrap} flex flex-col gap-3 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center gap-2">
            <LogoMark />
            <span className="text-base font-semibold">MULTI-AI</span>
          </div>
          <p className="text-[13px] text-white/70">© 2026 {ORG_NAME}</p>
        </div>
      </footer>
    </div>
  );
}
