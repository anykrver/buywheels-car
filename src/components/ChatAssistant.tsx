import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { vehicles } from '../utils/data';
import { Vehicle } from '../types';
import {
  MessageSquare, X, RefreshCw, ChevronRight,
  Sparkles
} from 'lucide-react';
import './ChatAssistant.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  type?: 'text' | 'options' | 'cars' | 'email-input';
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
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<'greeting' | 'email' | 'budget' | 'fuel' | 'freeform'>('greeting');
  const [selectedBudget, setSelectedBudget] = useState('');

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

  // Scroll to bottom helper
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
      // Check if email already exists in localstorage
      const storedEmail = localStorage.getItem('niaa_user_email');
      
      const newMessages: Message[] = [
        {
          id: 'msg-greet-1',
          sender: 'bot',
          text: 'Hello, welcome to Buywheels. I Am Buywheels, your personal car assistant!',
          timestamp: new Date(),
          type: 'text',
        }
      ];

      if (storedEmail) {
        newMessages.push({
          id: 'msg-greet-2-email-stored',
          sender: 'bot',
          text: `Welcome back! I remembered your email: ${storedEmail}. Let's find your dream car!`,
          timestamp: new Date(),
          type: 'text'
        });
        setMessages(newMessages);
        setIsTyping(false);
        
        // Go straight to budget
        askBudget();
      } else {
        newMessages.push({
          id: 'msg-greet-2-ask-email',
          sender: 'bot',
          text: 'But before we begin, please help me with your Email Address!',
          timestamp: new Date(),
          type: 'text'
        });
        setMessages(newMessages);
        setIsTyping(false);
        setCurrentStep('email');
      }
    }, 1000);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

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
      // 1. Budget filter
      let matchesBudget = false;
      const price = v.startingPrice;
      if (budgetVal === '<8L') matchesBudget = price < 800000;
      else if (budgetVal === '8-12L') matchesBudget = price >= 800000 && price <= 1200000;
      else if (budgetVal === '12-18L') matchesBudget = price > 1200000 && price <= 1800000;
      else if (budgetVal === '18-30L') matchesBudget = price > 1800000 && price <= 3000000;
      else if (budgetVal === '>30L') matchesBudget = price > 3000000;
      else matchesBudget = true;

      // 2. Fuel filter
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

  // Simple Regex/NLP Parser for free-form user typing
  const parseFreeformText = (text: string) => {
    const lower = text.toLowerCase();

    // 1. Check for greeting resets
    if (lower.match(/^(hello|hi|hey|greetings|restart|start over|reset)/)) {
      initChat();
      return;
    }

    if (lower === 'compare') {
      window.location.href = '/compare';
      return;
    }
    if (lower === 'test drive' || lower === 'book') {
      window.location.href = '/test-drive';
      return;
    }

    // 2. Extract budget keywords
    let budgetQuery = 'Any';
    let budgetLimit = 0;
    if (lower.includes('under 8') || lower.includes('less than 8') || lower.includes('<8')) {
      budgetQuery = '<8L';
      budgetLimit = 800000;
    } else if (lower.includes('under 12') || lower.includes('less than 12') || lower.includes('8-12') || lower.includes('8 to 12')) {
      budgetQuery = '8-12L';
      budgetLimit = 1200000;
    } else if (lower.includes('under 18') || lower.includes('less than 18') || lower.includes('12-18') || lower.includes('12 to 18')) {
      budgetQuery = '12-18L';
      budgetLimit = 1800000;
    } else if (lower.includes('under 30') || lower.includes('less than 30') || lower.includes('18-30') || lower.includes('18 to 30')) {
      budgetQuery = '18-30L';
      budgetLimit = 3000000;
    } else if (lower.includes('above 30') || lower.includes('more than 30') || lower.includes('>30') || lower.includes('premium')) {
      budgetQuery = '>30L';
    }

    // Try to parse exact numbers e.g. "under 15 lakhs", "10 lakhs"
    const lakhMatch = lower.match(/(under|below|less than)?\s*(\d+)\s*(lakh|lakhs)/);
    if (lakhMatch) {
      const amount = parseInt(lakhMatch[2], 10);
      budgetLimit = amount * 100000;
    }

    // 3. Extract fuel type
    let fuelQuery = 'Any';
    if (lower.includes('petrol')) fuelQuery = 'Petrol';
    else if (lower.includes('diesel')) fuelQuery = 'Diesel';
    else if (lower.includes('cng')) fuelQuery = 'CNG';
    else if (lower.includes('hybrid')) fuelQuery = 'Hybrid';
    else if (lower.includes('electric') || lower.includes('ev') || lower.includes('evs')) fuelQuery = 'Electric';

    // 4. Extract Brand / Model keywords
    let matchedBrandOrModel: Vehicle[] = [];
    vehicles.forEach(v => {
      if (lower.includes(v.model.toLowerCase()) || lower.includes(v.brand.toLowerCase())) {
        if (!matchedBrandOrModel.some(added => added.id === v.id)) {
          matchedBrandOrModel.push(v);
        }
      }
    });

    setIsTyping(true);

    setTimeout(() => {
      // Direct matches found
      if (matchedBrandOrModel.length > 0) {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-res-${Date.now()}`,
            sender: 'bot',
            text: `Sure, I found these vehicles matching your search for "${text}":`,
            timestamp: new Date(),
            type: 'text'
          },
          {
            id: `bot-res-cars-${Date.now()}`,
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

      // Filter based on parsed budget / fuel
      let results = vehicles;
      if (budgetLimit > 0) {
        results = results.filter(v => v.startingPrice <= budgetLimit);
      } else if (budgetQuery !== 'Any') {
        results = getFilteredCars(budgetQuery, 'Any');
      }

      if (fuelQuery !== 'Any') {
        results = results.filter(v => {
          const isEvMatch = (fuelQuery === 'Electric') && (v.category === 'ev' || v.isEV);
          const hasFuelMatch = v.fuelTypes.some(f => f.toLowerCase() === fuelQuery.toLowerCase());
          return isEvMatch || hasFuelMatch;
        });
      }

      // Feature extraction (e.g. SUV, Automatic, Sunroof)
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
      if (lower.includes('automatic') || lower.includes('amt') || lower.includes('cvt') || lower.includes('at')) {
        results = results.filter(v => v.transmissions.some(t => t.toLowerCase() !== 'manual'));
      }
      if (lower.includes('sunroof')) {
        results = results.filter(v => v.features.some(f => f.toLowerCase().includes('sunroof')));
      }
      if (lower.includes('safety') || lower.includes('safe') || lower.includes('5 star')) {
        results = results.filter(v => v.safetyRating === 5);
      }
      if (lower.includes('mileage') || lower.includes('efficient') || lower.includes('average')) {
        results = results.filter(v => {
          const mileageNum = parseFloat(v.mileage);
          return mileageNum >= 18 || v.mileage.toLowerCase().includes('range') || v.isEV;
        });
      }
      if (lower.includes('bestseller') || lower.includes('best seller') || lower.includes('popular')) {
        results = results.filter(v => v.isBestSeller || v.rating >= 4.6);
      }

      // Construct bot reply
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

  // Handle user inputs via keyboard Send button
  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userMsgText = inputVal.trim();
    setInputVal('');

    // Add user message to UI
    const userMsg: Message = {
      id: `user-msg-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMsg]);

    // Handle flow steps
    if (currentStep === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userMsgText)) {
        localStorage.setItem('niaa_user_email', userMsgText);
        
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: `email-success-${Date.now()}`,
              sender: 'bot',
              text: 'Thank you! Your email has been validated successfully.',
              timestamp: new Date(),
              type: 'text'
            }
          ]);
          setIsTyping(false);
          askBudget();
        }, 800);
      } else {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: `email-error-${Date.now()}`,
              sender: 'bot',
              text: 'Oops, that email looks invalid. Please enter a valid email address so we can start!',
              timestamp: new Date(),
              type: 'text'
            }
          ]);
          setIsTyping(false);
        }, 800);
      }
    } else if (currentStep === 'budget') {
      // Try to parse their input as a budget, then go to fuel
      setSelectedBudget(userMsgText);
      askFuel();
    } else if (currentStep === 'fuel') {
      // Try to parse fuel
      showRecommendations(selectedBudget, userMsgText);
    } else {
      // Freeform chat mode
      parseFreeformText(userMsgText);
    }
  };

  // Handle quick choice adapter selections
  const handleOptionClick = (optionValue: string, stepTarget: string) => {
    // Add user response bubble
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
      window.location.href = '/compare';
    } else if (stepTarget === 'redirect-testdrive') {
      window.location.href = '/test-drive';
    } else if (stepTarget === 'redirect-finance') {
      window.location.href = '/finance';
    } else if (stepTarget === 'redirect-dealers') {
      window.location.href = '/dealers';
    } else if (stepTarget === 'query-safety') {
      parseFreeformText('safety');
    } else if (stepTarget === 'query-mileage') {
      parseFreeformText('mileage');
    } else if (stepTarget === 'query-ev') {
      parseFreeformText('electric');
    } else if (stepTarget === 'query-suv') {
      parseFreeformText('suv');
    } else if (stepTarget === 'query-bestseller') {
      parseFreeformText('bestseller');
    }
  };

  return (
    <div className="niaa-chat-container fixed bottom-6 right-6 flex flex-col items-end">
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="niaa-floating-btn w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer relative"
          title="Chat with Buywheels"
        >
          <MessageSquare size={26} />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </span>
          {/* Subtle tooltip */}
          <div className="absolute right-16 bg-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none font-medium hidden md:block shadow-md">
            Need Help? Ask Buywheels! 👋
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div id="__npfchatWindow" className="niaa-chat-window animate-scale-in">
          {/* Header */}
          <div className="chatHeader">
            <div className="rightContent">
              <div className="img-wrapper bg-white flex items-center justify-center p-1">
                <img src="/logo.png" alt="Buywheels Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="userDetails">
                <h4 className="flex items-center gap-1.5">
                  Buywheels <Sparkles size={13} className="text-amber-400 fill-amber-400" />
                </h4>
                <p>
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
          <div id="__npfmessageWindow" className="chatbox chatBody" ref={chatBodyRef}>
            {/* Introductory YouTube Video */}
            {showVideo && (
              <div className="videoIntro">
                <button 
                  className="videoCloseBtn" 
                  onClick={() => setShowVideo(false)}
                  title="Hide Video"
                >
                  <X size={10} />
                </button>
                <iframe
                  title="Introductory Video"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/U7_8JWJ6lPo"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="inchat_vdo"
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
                    ? '__npfchatmsg_left fadeIn'
                    : '__npfchatmsg_right fadeIn'
                }
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <img src="/logo.png" alt="Buywheels Logo" className="w-6 h-6 object-contain" />
                  </div>
                )}
                
                <div className="ac-container ac-adaptiveCard">
                  <div className="ac-textBlock">
                    <p className="name">{msg.sender === 'bot' ? 'Buywheels' : 'You'}</p>
                    
                    {msg.text && (
                      <div className="message whitespace-pre-line">{msg.text}</div>
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
                                  // Fallback image in case of broken link
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
              <div className="__npfchatmsg_left fadeIn">
                <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                  <img src="/logo.png" alt="Buywheels Logo" className="w-6 h-6 object-contain" />
                </div>
                <div className="ac-container ac-adaptiveCard">
                  <div className="ac-textBlock">
                    <p className="name">Buywheels</p>
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
          <div id="npfmessage-input" className="npfmessage-in">
            <div className="wrap">
              <input
                ref={inputRef}
                type={currentStep === 'email' ? 'email' : 'text'}
                placeholder={currentStep === 'email' ? 'Enter your email address...' : 'Type your message here...'}
                id="npfMsg-in"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
              />
              <div className="btnSend">
                <button
                  id="sendClickBtn"
                  className="submit btn-control"
                  title="Send"
                  onClick={handleSend}
                >
                  <span className="sendBtnClick"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright footer */}
          <div className="ctCopyright">
            <div className="niaaSign flex items-center">
              <img
                src="/logo.png"
                alt="Buywheels Logo"
                className="h-6 object-contain"
              />
            </div>
            <div>
              Powered by <Link to="/" className="hover:underline">Buywheels</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
