"use client";

import { useState, FormEvent } from "react";
import { site } from "@/content/site";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Lovify contact from ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  const inputClasses =
    "w-full rounded-2xl border border-border bg-white px-5 py-4 text-base text-black placeholder:text-text-light focus:border-text focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="font-heading text-sm font-medium text-text">Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-heading text-sm font-medium text-text">
          Phone number
        </span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="(555) 123-4567"
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-heading text-sm font-medium text-text">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          placeholder="Tell us what's on your mind..."
          className={`${inputClasses} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-text px-8 py-4 font-heading text-base font-medium text-white transition-transform hover:scale-[1.02]"
      >
        Send message
      </button>

      <p className="mt-2 text-center text-sm text-text-light">
        Your email app will open with this message. We reply within 2 business days.
      </p>
    </form>
  );
};
