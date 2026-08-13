import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { supabase } from '../utils/supabaseClient';
import PageSEO from '../components/common/PageSEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const leadPayload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      source: 'Contact Form',
      notes: `Subject: ${form.subject}. Message: ${form.message}`,
      stage: 'New'
    };

    const { error } = await supabase
      .from('leads')
      .insert([leadPayload]);
      
    setIsSubmitting(false);
    if (!error) {
      setSubmitted(true);
    } else {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please check your connection and try again.');
    }
  };


  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 92969 61232', href: 'tel:+919296961232' },
    { icon: Mail, label: 'Email', value: 'hello@buywheels.in', href: 'mailto:hello@buywheels.in' },
    { icon: MapPin, label: 'Address', value: 'Main Road, Doranda, Ranchi, Jharkhand 834002', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9 AM to 7 PM', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      <PageSEO
        title="Contact BuyWheels Ranchi | Phone, Email & Showroom Address"
        description="Get in touch with BuyWheels team in Ranchi. Phone: +91 92969 61232. Email: hello@buywheels.in. Office address: Main Road, Doranda, Ranchi, Jharkhand."
        canonicalPath="/contact"
      />
      {/* Hero */}
      <div className="bg-dark py-14 mb-12">
        <div className="container-fluid text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-3">Contact Buywheels</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a question? Our experts are ready to help you find the best vehicle deal.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:shadow-card hover:border-primary/30 transition-all group"
              >
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-dark font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}

            {/* Office locations */}
            <div className="bg-primary rounded-2xl p-5 text-white">
              <h3 className="font-heading font-semibold mb-3">Our Offices</h3>
              <div className="space-y-3 text-sm text-white/80">
                {[
                  { city: 'Ranchi (HQ)', address: 'Main Road, Doranda' },
                  { city: 'Jamshedpur', address: 'Bistupur Market Area' },
                  { city: 'Dhanbad', address: 'Bank More, Dhanbad' },
                ].map(({ city, address }) => (
                  <div key={city} className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/60" />
                    <div>
                      <span className="font-semibold text-white">{city}</span>
                      <p className="text-white/60 text-xs">{address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border shadow-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-success" />
                  </div>
                  <h3 className="font-heading font-bold text-dark text-2xl mb-2">Message Sent!</h3>
                  <p className="text-muted">Our team will get back to you within 2 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading font-bold text-dark text-2xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Subject *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="select-field"
                      >
                        <option value="">Select a topic</option>
                        <option>Vehicle Enquiry</option>
                        <option>Dealer Partnership</option>
                        <option>Finance & Loan</option>
                        <option>Buywheels Care</option>
                        <option>Complaint / Feedback</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="input-field resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center"
                    >
                      {isSubmitting ? (
                        'Sending Message...'
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FAQs quick links */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8 text-center">
          <h3 className="font-heading font-bold text-dark text-xl mb-2">Looking for Quick Answers?</h3>
          <p className="text-muted mb-5">Check our FAQ page for instant answers to common questions.</p>
          <a href="/#faq" className="btn-secondary">Browse FAQs</a>
        </div>
      </div>
    </div>
  );
}
