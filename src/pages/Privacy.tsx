import { Shield, Lock, Eye, FileText, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      <div className="container-fluid max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-dark">Privacy Policy</span>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
              <Shield size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-dark text-2xl sm:text-3xl leading-tight">Privacy Policy</h1>
              <p className="text-muted text-xs mt-1">Last Updated: June 30, 2026</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-dark-600 text-sm leading-relaxed space-y-6">
            <p>
              At Buywheels, accessible from buywheels.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Buywheels and how we use it.
            </p>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <FileText size={18} className="text-primary" /> 1. Information We Collect
              </h2>
              <p className="mb-3">
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, book a vehicle, request a quote, or schedule a test drive, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <Eye size={18} className="text-primary" /> 2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-4">
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                <li>Send you emails or SMS regarding your test drives, bookings, and care reminders.</li>
                <li>Find and prevent fraud.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <Lock size={18} className="text-primary" /> 3. Data Protection and Security
              </h2>
              <p>
                We use bank-grade encryption algorithms to safeguard information submitted on our forms (such as loan eligibility applications). However, please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <Users size={18} className="text-primary" /> 4. Share with Dealerships and Banks
              </h2>
              <p>
                In order to complete your vehicle bookings, test drive requests, and finance quotes, Buywheels sharing your contact details with authorized vehicle dealerships and partner financial institutions is required. These parties are contractually bound to use your data strictly for fulfilling your requested services.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3">5. Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@buywheels.in" className="text-primary hover:underline font-semibold">privacy@buywheels.in</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
