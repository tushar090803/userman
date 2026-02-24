import React, { useState } from 'react'

const Register = ({ handleRegister }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    handleRegister({ name, email, password })
    // Reset fields
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-center items-center bg-[#020617] overflow-hidden px-4 font-sans">
      
      {/* 🧬 Background "Aura" Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[140px]"></div>

      {/* 💠 Floating Icon/Logo */}
      <div className="z-20 mb-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-blue-600 rounded-2xl -rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-transform hover:rotate-0 duration-500">
          <span className="text-white text-3xl font-bold rotate-12 hover:rotate-0">+</span>
        </div>
        <h1 className="mt-4 text-4xl font-black text-white tracking-tighter italic">
          CREATE<span className="text-purple-400">_</span>ACCOUNT
        </h1>
      </div>

      {/* 💎 The Glass Morphic Container */}
      <div className="z-20 w-full max-w-lg backdrop-blur-[20px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <form onSubmit={submitHandler} className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Full Name - Span full width on mobile, half on desktop */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold ml-1">
              Legal Operator Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/40 text-purple-50 outline-none border border-white/5 py-3.5 px-6 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold ml-1">
              Communication Channel
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 text-purple-50 outline-none border border-white/5 py-3.5 px-6 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="email"
              placeholder="email@system.os"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold ml-1">
              Access Key
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 text-purple-50 outline-none border border-white/5 py-3.5 px-6 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold ml-1">
              Confirm Key
            </label>
            <input
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-black/40 text-purple-50 outline-none border border-white/5 py-3.5 px-6 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="password"
              placeholder="••••••••"
            />
          </div>

          {/* ⚡ High-Octane Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button className="relative group/btn w-full py-4 bg-transparent border border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-400">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 text-purple-400 group-hover/btn:text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300">
                Authorize New User
              </span>
            </button>
          </div>

          <div className="md:col-span-2 text-center mt-2">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              Already have clearance? <a href="#" className="text-purple-400 hover:text-white transition-colors">Return to Login</a>
            </p>
          </div>
        </form>
      </div>

      {/* 🛸 Bottom Status Bar */}
      <div className="z-20 mt-8 flex items-center gap-3">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">
          Awaiting Registry Input...
        </span>
      </div>
    </div>
  )
}

export default Register