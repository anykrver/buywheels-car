import { FileText, Award, HelpCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      <div className="container-fluid max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-dark">Terms of Service</span>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-dark text-2xl sm:text-3xl leading-tight">Terms of Service</h1>
              <p className="text-muted text-xs mt-1">Last Updated: June 30, 2026</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-dark-600 text-sm leading-relaxed space-y-6">
            <p>
              Welcome to Buywheels! These terms and conditions outline the rules and regulations for the use of Buywheels' Website, located at buywheels.in.
            </p>

            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Buywheels if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <Award size={18} className="text-primary" /> 1. Services Provided
              </h2>
              <p>
                Buywheels provides a comparison platform for new cars, electric vehicles, auto finance, and dealership offers across Jharkhand. The prices, specifications, and discounts displayed are aggregated from authorized dealerships and partner brands. While we strive to show the most accurate and real-time quotes, the final selling price is subject to the terms and invoice finalized directly at the dealership.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <AlertTriangle size={18} className="text-primary" /> 2. Bookings and Lead Transfers
              </h2>
              <p className="mb-3">
                By submitting booking requests, test drive bookings, or loan eligibility queries, you explicitly authorize Buywheels to transfer your details to the respective authorized dealerships or partner banks.
              </p>
              <p>
                Buywheels is not a seller, manufacturer, or financial lender itself. We are a facilitator of buyer-first transparency and post-purchase Care services.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3 flex items-center gap-2">
                <HelpCircle size={18} className="text-primary" /> 3. User Conduct
              </h2>
              <p>
                Users agree to provide true, accurate, and current information on all lead forms. Registering mock names or dummy numbers with malicious intent is strictly prohibited and may lead to account termination or restricted access to our Care services.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3">4. Limitation of Liability</h2>
              <p>
                In no event shall Buywheels, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. Buywheels, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-heading font-bold text-dark text-lg mb-3">5. Governing Law</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the State of Jharkhand, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Ranchi for the resolution of any disputes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
