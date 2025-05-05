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
    <div className="min-h-screen bg-stone-100">
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-6">
          <h2 className={`text-2xl font-bold mb-2 text-stone-600 text-center ${montserrat.className}`}>Schedule a Tour</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Experience The Evelyn firsthand. Please fill out the form below to schedule your private tour.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tour Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center mb-6">
              <div className="bg-stone-100 p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className={`text-xl font-semibold text-stone-600 ${montserrat.className}`}>Tour Request Form</h2>
            </div>
            
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-200 text-green-600 px-4 py-3 rounded-xl mb-6 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tour Scheduled Successfully! We've sent a confirmation to {formData.email}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300 placeholder-stone-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300 placeholder-stone-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300 placeholder-stone-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-stone-600 mb-1">
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
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-stone-600 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-600 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-stone-300 focus:border-stone-300 placeholder-stone-300"
                    placeholder="Any special requests or questions..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-stone-600 focus:ring-stone-300 border-stone-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-stone-600">
                    I agree to the <Link href="/privacy" className="text-stone-700 hover:text-stone-900 underline">privacy policy</Link> and terms of service
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-stone-500 to-stone-600 text-white font-medium rounded-xl hover:from-stone-600 hover:to-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-300 transition-all duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scheduling...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Tour
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Tour Information Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <div className="flex items-center mb-6">
                <div className="bg-stone-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className={`text-xl font-semibold text-stone-600 ${montserrat.className}`}>Tour Details</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stone-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-600">Tour Hours</h3>
                    <p className="text-stone-600">
                      Monday - Saturday<br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stone-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-600">Duration</h3>
                    <p className="text-stone-600">Approximately 30-45 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-stone-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-stone-600">Location</h3>
                    <p className="text-stone-600">
                      The Evelyn Leasing Office<br />
                      123 Luxury Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <div className="flex items-center mb-6">
                <div className="bg-stone-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className={`text-xl font-semibold text-stone-600 ${montserrat.className}`}>Need Immediate Assistance?</h2>
              </div>
              <p className="text-stone-600 mb-6">
                For same-day tour requests or urgent inquiries, please call our leasing office directly.
              </p>
              <div className="flex items-center justify-between bg-stone-100 p-4 rounded-xl">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-stone-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-stone-700 font-medium">(555) 123-4567</span>
                </div>
                <Link
                  href="/contact"
                  className={`text-sm px-4 py-2 border border-transparent font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-stone-500 to-stone-600 hover:from-stone-600 hover:to-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-300 transition-all duration-200 ${montserrat.className}`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}