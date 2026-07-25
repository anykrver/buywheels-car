import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { fetchFAQs } from '../../utils/supabaseService';
import type { FAQItem } from '../../types';

export default function FAQSection() {
  const [faqsList, setFaqsList] = useState<FAQItem[]>([]);
  const [openId, setOpenId] = useState<string | null>('faq1');

  useEffect(() => {
    fetchFAQs().then(setFaqsList);
  }, []);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-lg">Everything you need to know about Buywheels</p>
          </div>

          <div className="space-y-3">
            {faqsList.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-primary shadow-card' : 'border-border'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span className={`font-heading font-semibold text-base ${isOpen ? 'text-primary' : 'text-dark'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${
                      isOpen ? 'bg-primary text-white' : 'bg-surface text-muted'
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-dark-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
