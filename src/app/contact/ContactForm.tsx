'use client'

import { useState, type FormEvent } from 'react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      city: (form.elements.namedItem('city') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thank you for contacting us. We&apos;ll get back to you within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-1">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-brand-charcoal mb-1">
            City
          </label>
          <select
            id="city"
            name="city"
            className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="">Select your city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-y"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please call us at 214-466-2536 or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
