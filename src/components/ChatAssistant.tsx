import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { vehicles } from '../utils/data';
import { Vehicle } from '../types';
import {
  X, RefreshCw, ChevronRight,
  Sparkles, User, Phone, Send
} from 'lucide-react';
import './ChatAssistant.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  type?: 'text' | 'options' | 'cars' | 'lead-form';
  options?: { label: string; value: string; stepTarget: string }[];
  cars?: Vehicle[];
}

const FOLLOW_UP_OPTIONS = [
  { label: 'Start Search Over 🔄', value: 'Start search over', stepTarget: 'restart' },
  { label: 'Compare Cars ⚖️', value: 'Compare selected cars', stepTarget: 'redirect-compare' },
  { label: 'Book a Test Drive 🚗', value: 'Book a test drive', stepTarget: 'redirect-testdrive' },
  { label: '5-Star Safety Cars 🛡️', value: 'Show me 5-star safety cars', stepTarget: 'query-safety' },
  { label: 'Best Mileage Cars ⛽', value: 'Show high mileage cars', stepTarget: 'query-mileage' },
  { label: 'EVs & Hybrids ⚡', value: 'Show electric & hybrid cars', stepTarget: 'query-ev' },
  { label: 'Popular SUVs 🚘', value: 'Show popular SUVs', stepTarget: 'query-suv' },
  { label: 'Best Sellers 🔥', value: 'Show best seller cars', stepTarget: 'query-bestseller' },
  { label: 'Finance & Loans 💰', value: 'View loan & finance options', stepTarget: 'redirect-finance' },
  { label: 'Dealers Nearby 📍', value: 'Find dealers near me', stepTarget: 'redirect-dealers' }
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<'greeting' | 'lead-info' | 'budget' | 'fuel' | 'freeform'>('greeting');
  const [selectedBudget, setSelectedBudget] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [hasCompareBar, setHasCompareBar] = useState(false);

  useEffect(() => {
    const checkCompareBar = () => {
      const el = document.querySelector('[data-compare-bar="true"]');
      setHasCompareBar(!!el);
    };

    checkCompareBar();
    const interval = setInterval(checkCompareBar, 300);
    window.addEventListener('resize', checkCompareBar);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkCompareBar);
    };
  }, [location.pathname]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom helper (inside chat body only)
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showVideo]);

  // Initial bot greetings when chat opens or resets
  const initChat = () => {
    setMessages([]);
    setIsTyping(true);
    setCurrentStep('greeting');
    setSelectedBudget('');

    setTimeout(() => {
      // Check if user details exist in localstorage
      const storedName = localStorage.getItem('niaa_user_name');
      const storedPhone = localStorage.getItem('niaa_user_phone');
      
      const newMessages: Message[] = [
        {
          id: 'msg-greet-1',
          sender: 'bot',
          text: 'Hello! Welcome to Buywheels, your personal car assistant in Jharkhand.',
          timestamp: new Date(),
          type: 'text',
        }
      ];

      if (storedName && storedPhone) {
        newMessages.push({
          id: 'msg-greet-2-stored',
          sender: 'bot',
          text: `Welcome back, ${storedName}! Let's find your ideal car today.`,
          timestamp: new Date(),
          type: 'text'
        });
        setMessages(newMessages);
        setIsTyping(false);
        
        // Go straight to budget
        askBudget();
      } else {
        newMessages.push({
          id: 'msg-greet-2-ask-info',
          sender: 'bot',
          text: 'To get started and unlock exclusive dealer offers in your city, please share your Name and Mobile Number:',
          timestamp: new Date(),
          type: 'lead-form'
        });
        setMessages(newMessages);
        setIsTyping(false);
        setCurrentStep('lead-info');
      }
    }, 800);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

  // Handle Name and Phone submission
  const handleLeadSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!nameInput.trim() || phoneInput.trim().length !== 10) return;

    const userMsgText = `${nameInput.trim()} (${phoneInput.trim()})`;
    const userMsg: Message = {
      id: `user-lead-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date(),
      type: 'text'
    };

    localStorage.setItem('niaa_user_name', nameInput.trim());
    localStorage.setItem('niaa_user_phone', phoneInput.trim());

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `lead-success-${Date.now()}`,
          sender: 'bot',
          text: `Thank you, ${nameInput.trim()}! Your details are registered. Let's find your dream car!`,
          timestamp: new Date(),
          type: 'text'
        }
      ]);
      setIsTyping(false);
      askBudget();
    }, 800);
  };

  // Transition to budget step
  const askBudget = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `msg-budget-${Date.now()}`,
          sender: 'bot',
          text: 'What budget options are you considering for your new car?',
          timestamp: new Date(),
          type: 'options',
          options: [
            { label: 'Under ₹8 Lakhs', value: '<8L', stepTarget: 'fuel' },
            { label: '₹8 - 12 Lakhs', value: '8-12L', stepTarget: 'fuel' },
            { label: '₹12 - 18 Lakhs', value: '12-18L', stepTarget: 'fuel' },
            { label: '₹18 - 30 Lakhs', value: '18-30L', stepTarget: 'fuel' },
            { label: 'Above ₹30 Lakhs', value: '>30L', stepTarget: 'fuel' },
            { label: 'Any Budget', value: 'Any', stepTarget: 'fuel' }
          ]
        }
      ]);
      setIsTyping(false);
      setCurrentStep('budget');
    }, 800);
  };

  // Transition to fuel step
  const askFuel = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `msg-fuel-${Date.now()}`,
          sender: 'bot',
          text: 'Great! Which fuel option or range type do you prefer?',
          timestamp: new Date(),
          type: 'options',
          options: [
            { label: 'Petrol', value: 'Petrol', stepTarget: 'recommend' },
            { label: 'Diesel', value: 'Diesel', stepTarget: 'recommend' },
            { label: 'CNG', value: 'CNG', stepTarget: 'recommend' },
            { label: 'Electric (EV)', value: 'Electric', stepTarget: 'recommend' },
            { label: 'Hybrid', value: 'Hybrid', stepTarget: 'recommend' },
            { label: 'Any / View All', value: 'Any', stepTarget: 'recommend' }
          ]
        }
      ]);
      setIsTyping(false);
      setCurrentStep('fuel');
    }, 800);
  };

  // Provide final recommendations based on selected budget and fuel
  const showRecommendations = (budgetVal: string, fuelVal: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const filtered = getFilteredCars(budgetVal, fuelVal);
      
      const responseText = filtered.length > 0
        ? `Based on your budget (${getBudgetText(budgetVal)}) and preference for ${fuelVal} cars, here are the best matches I found for you!`
        : `I couldn't find an exact match for a ${fuelVal} car in the ${getBudgetText(budgetVal)} range. Here are some of our popular vehicles instead!`;

      const displayCars = filtered.length > 0 ? filtered : vehicles.slice(0, 5);

      setMessages(prev => [
        ...prev,
        {
          id: `msg-recs-txt-${Date.now()}`,
          sender: 'bot',
          text: responseText,
          timestamp: new Date(),
          type: 'text'
        },
        {
          id: `msg-recs-cars-${Date.now()}`,
          sender: 'bot',
          text: '',
          timestamp: new Date(),
          type: 'cars',
          cars: displayCars
        },
        {
          id: `msg-recs-next-${Date.now()}`,
          sender: 'bot',
          text: 'Would you like to search for other options, or ask me any questions directly? Feel free to type anything (e.g. "automatic creta" or "EVs under 20 lakhs")',
          timestamp: new Date(),
          type: 'options',
          options: FOLLOW_UP_OPTIONS
        }
      ]);
      setIsTyping(false);
      setCurrentStep('freeform');
    }, 1200);
  };

  // Filter cars logic
  const getFilteredCars = (budgetVal: string, fuelVal: string): Vehicle[] => {
    return vehicles.filter(v => {
      let matchesBudget = false;
      const price = v.startingPrice;
      if (budgetVal === '<8L') matchesBudget = price < 800000;
      else if (budgetVal === '8-12L') matchesBudget = price >= 800000 && price <= 1200000;
      else if (budgetVal === '12-18L') matchesBudget = price > 1200000 && price <= 1800000;
      else if (budgetVal === '18-30L') matchesBudget = price > 1800000 && price <= 3000000;
      else if (budgetVal === '>30L') matchesBudget = price > 3000000;
      else matchesBudget = true;

      let matchesFuel = false;
      if (!fuelVal || fuelVal === 'Any') {
        matchesFuel = true;
      } else {
        const queryFuel = fuelVal.toLowerCase();
        matchesFuel = v.fuelTypes.some(f => f.toLowerCase() === queryFuel);
        if (queryFuel.includes('electric') || queryFuel.includes('ev')) {
          matchesFuel = v.category === 'ev' || v.isEV || v.fuelTypes.some(f => f.toLowerCase().includes('electric'));
        }
      }

      return matchesBudget && matchesFuel;
    });
  };

  const getBudgetText = (budgetVal: string) => {
    if (budgetVal === '<8L') return 'Under ₹8 Lakhs';
    if (budgetVal === '8-12L') return '₹8 - 12 Lakhs';
    if (budgetVal === '12-18L') return '₹12 - 18 Lakhs';
    if (budgetVal === '18-30L') return '₹18 - 30 Lakhs';
    if (budgetVal === '>30L') return 'Above ₹30 Lakhs';
    return 'Any Budget';
  };

  // Free-form user typing parser
  const parseFreeformText = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.match(/^(hello|hi|hey|greetings|restart|start over|reset)/)) {
      initChat();
      return;
    }

    if (lower === 'compare') {
      setIsOpen(false);
      navigate('/compare');
      return;
    }
    if (lower === 'test drive' || lower === 'book') {
      setIsOpen(false);
      navigate('/test-drive');
      return;
    }

    let budgetLimit = 0;
    let fuelQuery = 'Any';

    if (lower.includes('under 8') || lower.includes('below 8') || lower.includes('cheap')) {
      budgetLimit = 800000;
    } else if (lower.includes('under 12') || lower.includes('below 12')) {
      budgetLimit = 1200000;
    } else if (lower.includes('under 15') || lower.includes('below 15') || lower.includes('under 18')) {
      budgetLimit = 1800000;
    } else if (lower.includes('under 20') || lower.includes('under 25') || lower.includes('under 30')) {
      budgetLimit = 3000000;
    }

    if (lower.includes('ev') || lower.includes('electric')) {
      fuelQuery = 'Electric';
    } else if (lower.includes('cng')) {
      fuelQuery = 'CNG';
    } else if (lower.includes('diesel')) {
      fuelQuery = 'Diesel';
    } else if (lower.includes('petrol')) {
      fuelQuery = 'Petrol';
    } else if (lower.includes('hybrid')) {
      fuelQuery = 'Hybrid';
    }

    const matchedBrandOrModel = vehicles.filter(v => 
      lower.includes(v.brand.toLowerCase()) || 
      lower.includes(v.model.toLowerCase())
    );

    setIsTyping(true);
    setTimeout(() => {
      if (matchedBrandOrModel.length > 0) {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-res-direct-${Date.now()}`,
            sender: 'bot',
            text: `Here are the matching cars for "${text}":`,
            timestamp: new Date(),
            type: 'text'
          },
          {
            id: `bot-res-direct-cars-${Date.now()}`,
            sender: 'bot',
            text: '',
            timestamp: new Date(),
            type: 'cars',
            cars: matchedBrandOrModel
          },
          {
            id: `bot-res-next-${Date.now()}`,
            sender: 'bot',
            text: 'What would you like to do next?',
            timestamp: new Date(),
            type: 'options',
            options: FOLLOW_UP_OPTIONS
          }
        ]);
        setIsTyping(false);
        return;
      }

      let results = vehicles;
      if (budgetLimit > 0) {
        results = results.filter(v => v.startingPrice <= budgetLimit);
      }

      if (fuelQuery !== 'Any') {
        results = results.filter(v => {
          const isEvMatch = (fuelQuery === 'Electric') && (v.category === 'ev' || v.isEV);
          const hasFuelMatch = v.fuelTypes.some(f => f.toLowerCase() === fuelQuery.toLowerCase());
          return isEvMatch || hasFuelMatch;
        });
      }

      if (lower.includes('suv')) {
        results = results.filter(v => 
          (v.description && v.description.toLowerCase().includes('suv')) || 
          v.model.toLowerCase().includes('scorpio') || 
          v.model.toLowerCase().includes('thar') || 
          v.model.toLowerCase().includes('creta') || 
          v.model.toLowerCase().includes('nexon') || 
          v.model.toLowerCase().includes('punch') || 
          v.model.toLowerCase().includes('seltos') || 
          v.model.toLowerCase().includes('fortuner')
        );
      }

      let replyText = '';
      if (results.length > 0) {
        replyText = `Based on your request, I found these vehicles for you:`;
      } else {
        replyText = `I couldn't find exact matches for "${text}". Here are some popular options you might like:`;
        results = vehicles.slice(0, 4);
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-res-parse-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          timestamp: new Date(),
          type: 'text'
        },
        {
          id: `bot-res-parse-cars-${Date.now()}`,
          sender: 'bot',
          text: '',
          timestamp: new Date(),
          type: 'cars',
          cars: results
        },
        {
          id: `bot-res-parse-next-${Date.now()}`,
          sender: 'bot',
          text: 'What would you like to do next?',
          timestamp: new Date(),
          type: 'options',
          options: FOLLOW_UP_OPTIONS
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userMsgText = inputVal.trim();
    setInputVal('');

    const userMsg: Message = {
      id: `user-msg-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMsg]);

    if (currentStep === 'lead-info') {
      // If user typed in chat input during lead step
      if (userMsgText.length >= 10 && !isNaN(Number(userMsgText.replace(/\s/g, '')))) {
        setPhoneInput(userMsgText);
        if (nameInput) handleLeadSubmit();
      }
    } else if (currentStep === 'budget') {
      setSelectedBudget(userMsgText);
      askFuel();
    } else if (currentStep === 'fuel') {
      showRecommendations(selectedBudget, userMsgText);
    } else {
      parseFreeformText(userMsgText);
    }
  };

  const handleOptionClick = (optionValue: string, stepTarget: string) => {
    const userMsg: Message = {
      id: `user-opt-${Date.now()}`,
      sender: 'user',
      text: optionValue,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, userMsg]);

    if (stepTarget === 'fuel') {
      setSelectedBudget(optionValue);
      askFuel();
    } else if (stepTarget === 'recommend') {
      showRecommendations(selectedBudget, optionValue);
    } else if (stepTarget === 'restart') {
      initChat();
    } else if (stepTarget === 'redirect-compare') {
      setIsOpen(false);
      navigate('/compare');
    } else if (stepTarget === 'redirect-testdrive') {
      setIsOpen(false);
      navigate('/test-drive');
    } else if (stepTarget === 'redirect-finance') {
      setIsOpen(false);
      navigate('/offers');
    } else if (stepTarget === 'redirect-dealers') {
      setIsOpen(false);
      navigate('/cars');
    } else if (stepTarget === 'query-safety') {
      parseFreeformText('5 star safety');
    } else if (stepTarget === 'query-mileage') {
      parseFreeformText('best mileage');
    } else if (stepTarget === 'query-ev') {
      parseFreeformText('electric');
    } else if (stepTarget === 'query-suv') {
      parseFreeformText('suv');
    } else if (stepTarget === 'query-bestseller') {
      parseFreeformText('bestseller');
    }
  };

  // Hide chat assistant ONLY when compare variants tray is active
  if (hasCompareBar) {
    return null;
  }

  const positionClasses = 'bottom-20 lg:bottom-6 right-4 lg:right-6';

  return (
    <>
      {/* Floating launcher button */}
      {!isOpen && (
        <div className={`niaa-chat-container fixed ${positionClasses} flex flex-col items-end z-40`}>
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full flex items-center justify-center p-2 bg-white border-2 border-primary shadow-2xl hover:scale-105 cursor-pointer relative transition-all duration-200"
            title="Chat with Buywheels"
            id="chat-assistant-floating-btn"
          >
            <img src="/logo.png" alt="Buywheels Chat Assistant" className="w-full h-full object-contain" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
            </span>
            <div className="absolute right-16 bg-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none font-medium hidden md:block shadow-md">
              Need Help? Ask Buywheels! 👋
            </div>
          </button>
        </div>
      )}

      {/* Chat Window Modal / Backdrop (Pincode Modal Style on Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center md:justify-end md:p-6 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="__npfchatWindow"
            className="w-full md:w-[400px] h-[88vh] md:h-[600px] max-h-[90vh] bg-white rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden animate-scale-in border border-border flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="chatHeader">
              <div className="rightContent">
                <div className="img-wrapper bg-white flex items-center justify-center p-1">
                  <img src="/logo.png" alt="Buywheels Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="userDetails">
                  <h4 className="flex items-center gap-1.5 font-bold">
                    Buywheels <Sparkles size={13} className="text-amber-400 fill-amber-400" />
                  </h4>
                  <p className="text-xs text-white/80">
                    <span>Online</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={initChat} 
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  title="Reset Chat"
                >
                  <RefreshCw size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  title="Close Window"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat message history container */}
            <div id="__npfmessageWindow" className="chatbox chatBody flex-1 overflow-y-auto p-4" ref={chatBodyRef}>
              {/* Introductory YouTube Video */}
              {showVideo && (
                <div className="videoIntro mb-4 rounded-xl overflow-hidden relative">
                  <button 
                    className="videoCloseBtn absolute top-2 right-2 z-10 bg-black/60 text-white p-1 rounded-full hover:bg-black" 
                    onClick={() => setShowVideo(false)}
                    title="Hide Video"
                  >
                    <X size={12} />
                  </button>
                  <iframe
                    title="Introductory Video"
                    width="100%"
                    height="180"
                    src="https://www.youtube.com/embed/U7_8JWJ6lPo"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="inchat_vdo rounded-xl"
                    style={{ border: 0 }}
                  />
                </div>
              )}

              {/* Render messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={
                    msg.sender === 'bot'
                      ? '__npfchatmsg_left fadeIn mb-4'
                      : '__npfchatmsg_right fadeIn mb-4'
                  }
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                      <img src="/logo.png" alt="Buywheels Logo" className="w-6 h-6 object-contain" />
                    </div>
                  )}
                  
                  <div className="ac-container ac-adaptiveCard flex-1">
                    <div className="ac-textBlock">
                      <p className="name text-xs font-semibold text-muted mb-1">{msg.sender === 'bot' ? 'Buywheels' : 'You'}</p>
                      
                      {msg.text && (
                        <div className="message whitespace-pre-line text-xs sm:text-sm">{msg.text}</div>
                      )}

                      {/* Lead Form: Name & Mobile Number */}
                      {msg.type === 'lead-form' && (
                        <form
                          onSubmit={handleLeadSubmit}
                          className="mt-3 bg-surface p-4 rounded-2xl border border-border space-y-3 animate-fade-in"
                        >
                          <div>
                            <label className="block text-xs font-semibold text-dark mb-1 flex items-center gap-1">
                              <User size={13} className="text-primary" /> Full Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your name, e.g. Rahul Kumar"
                              value={nameInput}
                              onChange={(e) => setNameInput(e.target.value)}
                              className="w-full px-3 py-2 text-xs rounded-xl border border-border bg-white outline-none focus:border-primary text-dark"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-dark mb-1 flex items-center gap-1">
                              <Phone size={13} className="text-primary" /> Mobile Number
                            </label>
                            <input
                              type="tel"
                              maxLength={10}
                              placeholder="10-digit mobile, e.g. 9876543210"
                              value={phoneInput}
                              onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                              className="w-full px-3 py-2 text-xs rounded-xl border border-border bg-white outline-none focus:border-primary text-dark"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={!nameInput.trim() || phoneInput.length !== 10}
                            className="w-full py-2.5 bg-primary text-white font-semibold text-xs rounded-xl shadow-sm hover:bg-primary-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>Start Exploring Cars</span>
                            <Send size={13} />
                          </button>
                        </form>
                      )}

                      {/* Options adapter */}
                      {msg.type === 'options' && msg.options && (
                        <div className={msg.options.length > 4 ? "niaa-options-grid" : "niaa-options-container"}>
                          {msg.options.map((opt, idx) => (
                            <button
                              key={idx}
                              className="niaa-option-btn"
                              onClick={() => handleOptionClick(opt.value, opt.stepTarget)}
                            >
                              <span className="flex-1">{opt.label}</span>
                              {msg.options!.length <= 4 && <ChevronRight size={14} className="opacity-60" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Recommended cars cards list */}
                      {msg.type === 'cars' && msg.cars && (
                        <div className="niaa-cars-carousel no-scrollbar">
                          {msg.cars.map((car) => (
                            <div key={car.id} className="niaa-car-card">
                              <div className="niaa-car-img-wrapper">
                                <img
                                  src={car.thumbnailUrl || (car.images && car.images[0])}
                                  alt={`${car.brand} ${car.model}`}
                                  className="niaa-car-img"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600';
                                  }}
                                />
                                {car.isBestSeller && (
                                  <span className="niaa-car-badge">Best Seller</span>
                                )}
                                {car.category === 'ev' && (
                                  <span className="niaa-car-badge bg-green-600">EV ⚡</span>
                                )}
                              </div>
                              <div className="niaa-car-content">
                                <div className="niaa-car-brand">{car.brand}</div>
                                <div className="niaa-car-title">{car.model}</div>
                                <div className="niaa-car-price">
                                  ₹{(car.startingPrice / 100000).toFixed(2)} Lakhs+
                                </div>
                                <div className="niaa-car-meta">
                                  <span className="niaa-car-tag">⭐ {car.rating}</span>
                                  <span className="niaa-car-tag">{car.mileage}</span>
                                  {car.transmissions && car.transmissions.length > 0 && (
                                    <span className="niaa-car-tag">{car.transmissions[0]}</span>
                                  )}
                                </div>
                                <Link
                                  to={`/vehicle/${car.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className="niaa-car-link"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Simulating chatbot typing */}
              {isTyping && (
                <div className="__npfchatmsg_left fadeIn mb-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <img src="/logo.png" alt="Buywheels Logo" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="ac-container ac-adaptiveCard">
                    <div className="ac-textBlock">
                      <p className="name text-xs font-semibold text-muted mb-1">Buywheels</p>
                      <div className="chatLoader dataLoader">
                        <div className="typing typing-1"></div>
                        <div className="typing typing-2"></div>
                        <div className="typing typing-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat message input bar */}
            <div id="npfmessage-input" className="npfmessage-in border-t border-border p-2 bg-white">
              <div className="wrap flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={currentStep === 'lead-info' ? 'Enter Name and Mobile Number above...' : 'Type your message here...'}
                  id="npfMsg-in"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSend();
                    }
                  }}
                  className="flex-1 px-3 py-2 text-xs sm:text-sm bg-surface rounded-xl outline-none text-dark"
                />
                <button
                  id="sendClickBtn"
                  className="p-2.5 bg-primary text-white rounded-xl shadow-sm hover:bg-primary-600 transition-colors"
                  title="Send"
                  onClick={handleSend}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* Copyright footer */}
            <div className="ctCopyright px-4 py-2 bg-surface border-t border-border text-[11px] text-muted flex items-center justify-between">
              <div className="niaaSign flex items-center gap-1.5">
                <img
                  src="/logo.png"
                  alt="Buywheels Logo"
                  className="h-5 object-contain"
                />
              </div>
              <div>
                Powered by <Link to="/" className="hover:underline font-semibold text-primary">Buywheels</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
