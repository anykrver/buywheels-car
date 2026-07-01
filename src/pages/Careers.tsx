import { useState } from 'react';
import { Briefcase, MapPin, Users, Heart, Award, ArrowRight, Check } from 'lucide-react';

const positions = [
  {
    title: 'Dealer Relationship Manager',
    department: 'Sales & Operations',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    description: 'Build and maintain strong relationships with authorized car and EV dealerships across Ranchi, Bokaro, and Ramgarh.',
  },
  {
    title: 'Auto Sales Consultant',
    department: 'Customer Advisory',
    location: 'Jamshedpur, Jharkhand',
    type: 'Full-time',
    description: 'Assist buyers in selection, finance verification, and test drives. Turn auto leads into happy vehicle deliveries.',
  },
  {
    title: 'Customer Support Executive',
    department: 'Support & Success',
    location: 'Dhanbad, Jharkhand',
    type: 'Full-time',
    description: 'Engage with customers over calls to answer product features, book test drives, and facilitate after-purchase Care coordination.',
  },
  {
    title: 'Senior Frontend Developer (React)',
    department: 'Engineering',
    location: 'Ranchi (Hybrid)',
    type: 'Full-time',
    description: 'Craft beautiful, high-performance UI components for our main web platform and dealer dashboard software.',
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(positions[0].title);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      {/* Hero */}
      <div className="bg-dark py-16 mb-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 80%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container-fluid relative z-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Build the Future of Auto Buying
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join Jharkhand's fastest-growing automotive marketplace. We are looking for passionate problem solvers to redefine vehicle purchasing.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        {/* Why Buywheels */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl">Why Join Buywheels?</h2>
            <p className="text-muted text-sm mt-2">Work with autonomy, transparency, and a customer-first focus.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Impactful Mission', desc: 'Redefine transparency for over 30 million people in Jharkhand buying their dream vehicles.' },
              { icon: Heart, title: 'Growth & Care', desc: 'Attractive compensation, annual performance bonuses, comprehensive family healthcare coverage, and a flexible leave policy.' },
              { icon: Award, title: 'Excellence & Learning', desc: 'Work alongside tech, sales, and marketing specialists. Learn fast and scale up your career.' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-card transition-all">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-semibold text-dark text-base mb-2">{title}</h3>
                <p className="text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Job Openings */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading font-bold text-dark text-2xl mb-4">Open Positions</h2>
            <div className="space-y-4">
              {positions.map(job => (
                <div key={job.title} className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-dark text-lg">{job.title}</h3>
                      <p className="text-primary text-xs font-semibold mt-0.5">{job.department}</p>
                    </div>
                    <span className="bg-primary-50 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-muted text-xs leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-muted">
                      <MapPin size={12} className="text-primary" /> {job.location}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        const formElem = document.getElementById('apply-form');
                        formElem?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Apply Now <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-1" id="apply-form">
            <div className="bg-white rounded-2xl border border-border shadow-card p-6 sticky top-28">
              {!isSuccess ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={20} className="text-primary" />
                    <h3 className="font-heading font-bold text-dark text-lg leading-none">Job Application</h3>
                  </div>
                  <p className="text-muted text-xs mb-5">Interested in joining? Apply directly for any open role or drop an open application.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Position You Are Applying For *</label>
                      <select
                        value={selectedJob}
                        onChange={e => setSelectedJob(e.target.value)}
                        className="select-field text-sm"
                      >
                        {positions.map(p => (
                          <option key={p.title} value={p.title}>{p.title}</option>
                        ))}
                        <option value="Open Application">Open Application / Other Roles</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sneh Lata"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Portfolio / Cover Note (Optional)</label>
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Introduce yourself or paste a link to your resume/portfolio..."
                        className="input-field resize-none h-auto py-3 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full text-sm h-11 justify-center mt-2"
                    >
                      {isSubmitting ? 'Uploading Application...' : 'Submit Application'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-heading font-bold text-dark text-lg mb-1">Application Submitted!</h4>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Thanks for applying, <span className="font-semibold">{formData.name}</span>! Your details have been submitted for the <span className="font-semibold">{selectedJob}</span> role. Our recruitment team will review your details and reach out on <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', phone: '', note: '' });
                    }}
                    className="btn-secondary w-full h-10 text-xs justify-center"
                  >
                    Apply for another position
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
