import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Eye, EyeOff, ArrowRight, Shield } from 'lucide-react';

type Mode = 'login' | 'signup' | 'otp';

export default function Login() {
  const [mode, setMode] = useState<Mode>('login');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [useOTP, setUseOTP] = useState(false);

  const handleOtpChange = (i: number, v: string) => {
    if (v.length > 1) return;
    const next = [...otp];
    next[i] = v;
    setOtp(next);
    if (v && i < 5) {
      const el = document.getElementById(`otp-${i + 1}`);
      el?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center pt-20 pb-24 lg:pb-8 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex mb-2">
            <img
              src="/logo.png"
              alt="Buywheels"
              className="h-20 w-auto object-contain rounded-xl"
            />
          </div>
          <p className="text-muted text-sm">Jharkhand's #1 Vehicle Buying Platform</p>
        </div>

        <div className="bg-white rounded-2xl border border-border shadow-card p-8">
          {/* Tab buttons */}
          {mode !== 'otp' && (
            <div className="flex bg-surface rounded-xl p-1 mb-6">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === 'login' ? 'bg-white text-dark shadow-sm' : 'text-muted hover:text-dark'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === 'signup' ? 'bg-white text-dark shadow-sm' : 'text-muted hover:text-dark'
                }`}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* OTP mode */}
          {mode === 'otp' && (
            <div>
              <button
                onClick={() => setMode('login')}
                className="text-muted text-sm mb-4 hover:text-dark transition-colors"
              >
                ← Back
              </button>
              <h2 className="font-heading font-bold text-dark text-xl mb-1">Verify Your Number</h2>
              <p className="text-muted text-sm mb-6">
                Enter the 6-digit OTP sent to <strong>+91 {phone}</strong>
              </p>
              <div className="flex gap-2 mb-6">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    className="flex-1 h-12 text-center text-lg font-bold border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ))}
              </div>
              <button className="btn-primary w-full justify-center">
                Verify OTP <ArrowRight size={18} />
              </button>
              <button className="w-full text-center text-sm text-muted mt-4 hover:text-primary transition-colors">
                Resend OTP in 30s
              </button>
            </div>
          )}

          {/* Login mode */}
          {mode === 'login' && (
            <div>
              <h2 className="font-heading font-bold text-dark text-xl mb-1">Welcome Back!</h2>
              <p className="text-muted text-sm mb-6">Login to access your Buywheels account</p>

              {/* OTP toggle */}
              <div className="flex bg-surface rounded-xl p-1 mb-5">
                <button
                  onClick={() => setUseOTP(false)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${
                    !useOTP ? 'bg-white text-dark shadow-sm' : 'text-muted'
                  }`}
                >
                  <Mail size={15} /> Email
                </button>
                <button
                  onClick={() => setUseOTP(true)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all ${
                    useOTP ? 'bg-white text-dark shadow-sm' : 'text-muted'
                  }`}
                >
                  <Phone size={15} /> OTP Login
                </button>
              </div>

              <div className="space-y-4">
                {useOTP ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Mobile Number</label>
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 bg-surface border border-border rounded-xl text-sm text-dark font-medium">+91</div>
                        <input
                          type="tel"
                          placeholder="Enter mobile number"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          className="input-field flex-1"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setMode('otp')}
                      className="btn-primary w-full justify-center"
                    >
                      <Phone size={18} /> Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <label className="block text-sm font-medium text-dark">Password</label>
                        <button className="text-xs text-primary hover:text-primary-600">Forgot Password?</button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPass ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="input-field pr-11"
                        />
                        <button
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark"
                        >
                          {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    <button className="btn-primary w-full justify-center">
                      Login <ArrowRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Google */}
              <button className="w-full flex items-center justify-center gap-3 h-12 border border-border rounded-xl text-sm font-medium text-dark hover:bg-surface hover:border-dark/30 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>

              <p className="text-center text-sm text-muted mt-5">
                Don't have an account?{' '}
                <button onClick={() => setMode('signup')} className="text-primary font-semibold hover:text-primary-600">
                  Sign Up
                </button>
              </p>
            </div>
          )}

          {/* Sign Up mode */}
          {mode === 'signup' && (
            <div>
              <h2 className="font-heading font-bold text-dark text-xl mb-1">Create Account</h2>
              <p className="text-muted text-sm mb-6">Join Buywheels and start saving on your next vehicle</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="First Name" className="input-field" />
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 bg-surface border border-border rounded-xl text-sm text-dark font-medium">+91</div>
                  <input type="tel" placeholder="Mobile Number" className="input-field flex-1" />
                </div>
                <input type="email" placeholder="Email Address" className="input-field" />
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Create Password"
                    className="input-field pr-11"
                  />
                  <button
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <select className="select-field">
                  <option>Select Your City</option>
                  {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <label className="flex items-start gap-2 text-sm text-dark-600 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-primary" />
                  <span>
                    I agree to Buywheels'{' '}
                    <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </span>
                </label>
                <button className="btn-primary w-full justify-center">
                  Create Account <ArrowRight size={18} />
                </button>
              </div>

              <p className="text-center text-sm text-muted mt-5">
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-primary font-semibold hover:text-primary-600">
                  Login
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Trust */}
        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-muted">
          <Shield size={13} className="text-success" />
          <span>Your data is 100% secure and never shared without permission</span>
        </div>
      </div>
    </div>
  );
}
