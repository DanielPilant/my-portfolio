"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true); // Demo
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-16 flex flex-col items-center min-h-[70vh]">
      <div className="w-full bg-neutral-900/80 rounded-2xl shadow-lg border border-neutral-800 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-primary-400 drop-shadow-lg text-center">Contact</h1>
        {sent ? (
          <div className="p-4 border border-green-600/40 rounded-lg bg-green-900/20 text-green-200 w-full text-center">
            Form submitted (Demo). Can be connected to Formspree/Email later.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 w-full">
            <input className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 transition" placeholder="Name" required />
            <input type="email" className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 transition" placeholder="Email" required />
            <textarea className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 transition" rows={5} placeholder="Message" required />
            <button className="rounded-lg px-6 py-2 bg-primary-500 text-white font-semibold shadow hover:bg-primary-400 transition w-full mt-2">Send</button>
          </form>
        )}
      </div>
    </main>
  );
}
