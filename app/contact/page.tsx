"use client";
// CHANGELOG:
// - Updated contact form styling to match new palette.
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true); // Demo
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-16 flex flex-col items-center min-h-[70vh]">
      <div className="w-full border border-white/10 bg-white/[0.02] p-8 flex flex-col items-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-primary-400 drop-shadow-lg text-center">Contact Me :)</h1>
        {sent ? (
          <div className="p-4 border border-success-500/40 bg-success-500/20 text-success-500 w-full text-center">
            Form submitted (Demo). Can be connected to Formspree/Email later.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 w-full">
            <input className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 transition" placeholder="Name" required />
            <input type="email" className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 transition" placeholder="Email" required />
            <textarea className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 transition" rows={5} placeholder="Message" required />
            <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium border border-white/10 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition w-full mt-2">Send</button>
          </form>
        )}
      </div>
    </main>
  );
}
