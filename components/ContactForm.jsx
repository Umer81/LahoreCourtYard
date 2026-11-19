"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    // TODO: fetch("/api/contact", { method: "POST", body: new FormData(e.target) })
    setSent(true);
  };
  return (
    <div className="formcard">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p key="ok" className="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Brief received. We'll reply within one working day.</motion.p>
        ) : (
          <motion.form key="f" onSubmit={submit} exit={{ opacity: 0, y: -12 }}>
            <label>Your name<input name="name" placeholder="Jane Doe" required /></label>
            <label>Brand / company<input name="company" placeholder="Your brand" /></label>
            <label>Email<input name="email" type="email" placeholder="you@brand.com" required /></label>
            <label>What do you need?
              <select name="service"><option>Event Management</option><option>Experiential Marketing</option><option>Influencer Marketing &amp; PR</option><option>Celebrity Endorsement</option><option>The full package</option></select>
            </label>
            <label>Tell us about it<textarea name="brief" rows={4} placeholder="What are you launching, and when?" /></label>
            <button className="btn btn--block" type="submit">Send the brief →</button>
            <small>Your brief goes straight to our inbox.</small>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
