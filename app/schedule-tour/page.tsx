// app/schedule-tour/page.tsx
'use client'
import { useState } from 'react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function ScheduleTourPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '1',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your actual form submission logic
      await fetch('/api/schedule-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '1',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate time slots
  const timeSlots = []
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`, `${hour}:30`)
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className={`text-4xl font-bold mb-8 ${montserrat.className}`}>Schedule a Tour</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          {submitSuccess ? (
            <div className="text-center">
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <h2 className="text-xl font-semibold mb-2">Tour Scheduled Successfully!</h2>
                <p>We've sent a confirmation to {formData.email}</p>
              </div>
              <Link
                href="/"
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 ${montserrat.className}`}
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-8">
                Experience The Evelyn firsthand. Please fill out the form below to schedule your private tour.
                Our leasing team will contact you to confirm your appointment.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <Link href="/privacy" className="text-blue-600 hover:text-blue-800">privacy policy</Link> and terms of service
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  } ${montserrat.className}`}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Tour'}
                </button>
              </form>
            </>
          )}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className={`text-2xl font-semibold mb-4 ${montserrat.className}`}>Tour Information</h2>
          <div className="prose prose-sm text-gray-600">
            <p>
              <strong>Tour Hours:</strong> Monday - Saturday, 9:00 AM - 5:00 PM<br />
              <strong>Duration:</strong> Approximately 30-45 minutes<br />
              <strong>Location:</strong> The Evelyn Leasing Office, 123 Luxury Avenue, New York, NY 10001
            </p>
            <p className="mt-4">
              For same-day tour requests, please call our leasing office at (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}