"use client";

import { useState } from "react";
import { APP_URL, GITHUB_URL, NAV } from "@/lib/site";
import { LogoMark } from "./LogoMark";
import { CloseIcon, MenuIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-white/10">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-2.5 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-2">
          <LogoMark className="h-7 w-10 md:h-[68px] md:w-[95px] md:rounded-[14px]" />
          <span className="text-base font-semibold">MULTI-AI</span>
        </a>

        <ul className="hidden gap-9 text-sm text-white/70 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="transition-colors hover:text-white">{n.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 text-sm md:flex">
          <a href={GITHUB_URL} className="hover:text-brand-soft" rel="noopener noreferrer">GitHub</a>
          <a href={APP_URL} className="rounded-xl bg-brand px-[18px] py-2.5 font-medium transition-colors hover:bg-[#7c4dcc]">Get the app</a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-white/10 px-5 py-3 text-sm md:hidden">
          {[...NAV, { label: "GitHub", href: GITHUB_URL }].map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg py-2.5 text-white/80 hover:text-white">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
