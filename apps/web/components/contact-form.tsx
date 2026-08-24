"use client"

import { useState } from "react"
import { Send, Mail, MessageCircle, CheckCircle2 } from "lucide-react"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { siteConfig } from "@/lib/data"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp")
  const [form, setForm] = useState({
    name: "",
    facility: "",
    email: "",
    phone: "",
    need: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const text = `New enquiry from ${form.name}%0A%0AName: ${form.name}%0AFacility: ${form.facility || "N/A"}%0AEmail: ${form.email}%0APhone: ${form.phone || "N/A"}%0ANeed: ${form.need || "N/A"}%0A%0AMessage:%0A${form.message}`

    if (channel === "whatsapp") {
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank")
    } else {
      const subject = `Enquiry from ${form.name} - ${form.need || "General"}`
      const body = `Name: ${form.name}\nFacility: ${form.facility || "N/A"}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nNeed: ${form.need || "N/A"}\n\nMessage:\n${form.message}`
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    setSubmitted(true)
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="size-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Message ready!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {channel === "whatsapp"
            ? "Your message has been prepared in WhatsApp. Press send to deliver it to our team."
            : "Your email has been prepared in your email app. Press send to deliver it to our team."}
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: "", facility: "", email: "", phone: "", need: "", message: "" })
          }}
          className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8">
      <div>
        <h3 className="text-base font-semibold sm:text-lg">Send Us a Message</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-primary">
          <span className="size-2 rounded-full bg-primary" />
          We reply within 2 working hours
        </div>
      </div>

      {/* Channel selector */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setChannel("whatsapp")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
            channel === "whatsapp"
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/30"
          }`}
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </button>
        <button
          type="button"
          onClick={() => setChannel("email")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
            channel === "email"
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/30"
          }`}
        >
          <Mail className="size-4" />
          Email
        </button>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-name" className="text-sm font-medium">Full name</Label>
            <Input
              id="contact-name"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="h-12 rounded-lg text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-facility" className="text-sm font-medium">Facility / organisation</Label>
            <Input
              id="contact-facility"
              placeholder="Your facility"
              value={form.facility}
              onChange={(e) => handleChange("facility", e.target.value)}
              className="h-12 rounded-lg text-base"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-email" className="text-sm font-medium">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-12 rounded-lg text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-phone" className="text-sm font-medium">Phone</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+255 7XX XXX XXX"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="h-12 rounded-lg text-base"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-need" className="text-sm font-medium">What do you need?</Label>
          <Input
            id="contact-need"
            placeholder="Equipment, servicing, site visit..."
            value={form.need}
            onChange={(e) => handleChange("need", e.target.value)}
            className="h-12 rounded-lg text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-message" className="text-sm font-medium">Message</Label>
          <Textarea
            id="contact-message"
            placeholder="Your message..."
            rows={5}
            required
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="rounded-lg text-base"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          <Send className="size-4" />
          Send via {channel === "whatsapp" ? "WhatsApp" : "Email"}
        </button>
      </form>
    </div>
  )
}
