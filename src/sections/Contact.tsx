"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSend() {
    const text = `Hi, I'm ${name} (${email}).\n\n${message}`;
    const url = `https://wa.me/2348165924570?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto rounded-3xl p-10 card">
        <h2 className="text-5xl font-bold mb-10" style={{ color: "var(--fg)" }}>
          Contact Me
        </h2>

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

          <button
            onClick={handleSend}
            className="bg-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-400 transition-colors font-semibold text-white"
          >
            Send on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}