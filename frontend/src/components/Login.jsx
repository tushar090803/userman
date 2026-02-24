import React, { useState } from 'react'

const Create = ({ handleLogin }) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-center items-center bg-[#020617] overflow-hidden px-4 font-sans">
      
      {/* 🧬 Background "Aura" Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]"></div>

      {/* 💠 Floating Icon/Logo */}
      <div className="z-20 mb-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-transform hover:rotate-0 duration-500">
          <span className="text-white text-3xl font-bold -rotate-12 hover:rotate-0">E</span>
        </div>
        <h1 className="mt-4 text-4xl font-black text-white tracking-tighter italic">
          USER<span className="text-cyan-400">_</span>MANAGEMENT
        </h1>
      </div>

      {/* 💎 The Glass Morphic Container */}
      <div className="z-20 w-full max-w-md backdrop-blur-[20px] bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <form onSubmit={submitHandler} className="relative flex flex-col gap-6">
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold ml-1">
              Identity Verification
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 text-cyan-50 outline-none border border-white/5 py-4 px-6 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold ml-1">
              Access Key
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 text-cyan-50 outline-none border border-white/5 py-4 px-6 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 placeholder:text-slate-600"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* ⚡ High-Octane Submit Button */}
          <button className="relative group/btn mt-2 w-full py-4 bg-transparent border border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 text-cyan-400 group-hover/btn:text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300">
              Initialize Session
            </span>
          </button>

          <div className="flex justify-between items-center mt-2 px-1">
            <a href="#" className="text-[10px] text-slate-500 hover:text-cyan-400 uppercase tracking-widest transition-colors">Forgot Access?</a>
            <a href="#" className="text-[10px] text-slate-500 hover:text-cyan-400 uppercase tracking-widest transition-colors">Register</a>
          </div>
        </form>
      </div>

      {/* 🛸 Bottom Status Bar */}
      <div className="z-20 mt-8 flex items-center gap-3">
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
        <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">
          Secure Server Link Established
        </span>
      </div>
    </div>
  )
}

export default Create