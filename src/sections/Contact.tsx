"use client";

import { useState } from "react";

const CONTACT_EMAIL = "abereoluwatomide54@gmail.com"; 

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSendWhatsApp() {
    const text = `Hi, I'm ${name} (${email}).\n\n${message}`;
    const url = `https://wa.me/2348165924570?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  function handleSendEmail() {
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nReply to: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto rounded-3xl p-10 card">
        <h2 className="text-5xl font-bold mb-4" style={{ color: "var(--fg)" }}>
          Contact Me
        </h2>

        <p className="text-muted mb-10">
          Prefer email? Reach me directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-cyan-400 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <div className="space-y-6">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-2xl input-bg outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-400"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl input-bg outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-400"
          />

          <textarea
            rows={6}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-2xl input-bg outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-400"
          />

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleSendWhatsApp}
              className="bg-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-400 transition-colors font-semibold text-white"
            >
              Send on WhatsApp
            </button>

            <button
              onClick={handleSendEmail}
              className="border border-white/20 hover:border-cyan-400/60 px-8 py-4 rounded-2xl transition-colors font-semibold text-white"
            >
              Send via Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
