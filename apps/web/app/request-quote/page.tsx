"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@workspace/ui/components/card"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Badge } from "@workspace/ui/components/badge"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/animations"
import { quoteOptions } from "@/lib/data"

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">Request a Quote</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Request a Quote
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Tell us what you need and our team will prepare a detailed quotation for you. We typically respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <FadeIn>
              <Card className="text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="size-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Thank You!</h2>
                  <p className="mt-4 text-muted-foreground">
                    Your quotation request has been received. Our team will contact you shortly.
                  </p>
                  <Button
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                  >
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ) : (
            <FadeIn>
              <Card>
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you with a quotation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <Label>What are you interested in?</Label>
                      <RadioGroup defaultValue="Medical Equipment">
                        {quoteOptions.map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option} className="font-normal">{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="product">Product / Service</Label>
                        <Input id="product" placeholder="e.g. Digital Patient Monitor" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" placeholder="e.g. 5 units" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="details">Tell us more</Label>
                      <Textarea
                        id="details"
                        placeholder="Provide any additional details about your request..."
                        rows={4}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input id="company" placeholder="Your organization" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+255 7XX XXX XXX" required />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Dar es Salaam, Tanzania" />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="size-4" />
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </Section>
    </>
  )
}
