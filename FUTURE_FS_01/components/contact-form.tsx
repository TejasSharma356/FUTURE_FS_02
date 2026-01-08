"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send email via mailto with form data
      const mailtoLink = `mailto:tejassharma356@gmail.com?subject=${encodeURIComponent(
        `Portfolio Contact: ${formData.subject}`,
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )}`

      // For better UX, we'll show success immediately and reset form
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Open email client
      window.location.href = mailtoLink

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-base font-medium">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-border focus:border-primary transition-colors"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base font-medium">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-border focus:border-primary transition-colors"
        />
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-base font-medium">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Project opportunity, freelance work, etc."
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-secondary/50 border-border focus:border-primary transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button & Status Messages */}
      <div className="space-y-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:opacity-90 text-primary-foreground font-medium py-3 transition-opacity"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
            Message ready to send! Your email client is opening...
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  )
}
