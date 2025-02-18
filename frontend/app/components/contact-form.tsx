"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent, useEffect } from "react";
import { submitContactForm } from "../actions";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/animated-button";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPending(true);

    const form = e.target as HTMLFormElement;
    const collMessage = `Message: ${message}, Phone: ${phone}, Name: ${name}`;

    try {
      const response = await submitContactForm(new FormData(form));
      setMessage(response.message);

      await fetch("https://portforio.onrender.com/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: collMessage }),
      });

      // Reset form fields and FormData
      form.reset();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Submission Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    return () => {
      setPending(false); // Cleanup pending state if unmounted
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <AnimatedButton type="submit" className="w-full" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </form>
      </Card>
    </motion.div>
  );
}
