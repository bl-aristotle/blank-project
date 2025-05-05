// app/amenities/FAQSection.tsx
'use client'
import { useState } from 'react'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What are the lease terms available?",
      answer: "We offer flexible lease terms ranging from 6 to 24 months. Shorter terms may be available with a premium."
    },
    {
      question: "What utilities are included in the rent?",
      answer: "Your rent includes water, trash, and sewer. Residents are responsible for electricity, internet, and cable services."
    },
    {
      question: "Is there an application fee?",
      answer: "Yes, there's a $50 non-refundable application fee per adult applicant for background and credit checks."
    },
    {
      question: "What's the pet policy?",
      answer: "We welcome up to 2 pets per apartment with a $300 non-refundable pet fee and $35/month pet rent. Breed restrictions apply."
    },
    {
      question: "What parking options are available?",
      answer: "We offer surface parking ($50/month), covered parking ($75/month), and garage parking ($100/month) options."
    },
    {
      question: "How do I pay rent?",
      answer: "Rent can be paid online through our resident portal, by check, or via money order at the leasing office."
    },
    {
      question: "What's the guest policy?",
      answer: "Guests may stay up to 14 consecutive days. Longer stays require approval from management."
    },
    {
      question: "Are washers and dryers included?",
      answer: "All apartments include full-size washer and dryer units in the unit."
    },
    {
      question: "What's the maintenance request process?",
      answer: "Submit requests 24/7 through our online portal or mobile app. Emergency maintenance is available around the clock."
    },
    {
      question: "Is renters insurance required?",
      answer: "Yes, we require all residents to maintain at least $100,000 in personal liability coverage."
    },
    {
      question: "What are the office hours?",
      answer: "Our leasing office is open Monday-Friday 9am-6pm, Saturday 10am-5pm, and Sunday 12pm-5pm."
    },
    {
      question: "How do I renew my lease?",
      answer: "You'll receive renewal options 90 days before your lease ends. Renewals can be completed online or in person."
    }
  ]

  return (
    <section id="faq" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-stone-300 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-stone-100 transition-colors"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="font-medium text-stone-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-stone-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              id={`faq-${index}`}
              className={`px-6 overflow-hidden transition-all bg-white duration-300 ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}
            >
              <p className="text-stone-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}