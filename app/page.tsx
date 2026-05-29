import React from 'react';
import { Analytics } from "@vercel/analytics/next";
import { Terminal, Shield, Cpu, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  // REPLACE THIS WITH YOUR ACTUAL STRIPE LINK FROM STEP 2
  const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/mock_link";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans selection:bg-neutral-800 selection:text-white">
      <Analytics />
      
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-neutral-900">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-500" />
          <span className="font-mono font-bold tracking-tight text-white">SENTINEL.CLI</span>
        </div>
        <a 
          href="./docs"
          className="text-xs bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 px-4 py-2 rounded-md transition-all font-mono"
        >
          Docs
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-3xl mx-auto text-center px-6 pt-20 pb-12">
        <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase">v1.0 Ready • 100% Offline</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          The "Anti-Panic" Terminal Recovery Agent.
        </h1>
        
        <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          When your build crashes under a tight deadline, don't waste 15 minutes context-switching. Type <code className="bg-neutral-900 text-neutral-200 px-1.5 py-0.5 rounded font-mono text-sm border border-neutral-800">rescue</code> to instantly generate the exact code diff to fix it locally.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/download/rescue.exe"
            className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 text-sm font-semibold px-8 py-3.5 rounded-md shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Download sentinel free access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-[11px] font-mono text-neutral-600 mt-3">Buy Once, Local Forever. No Subscriptions.</p>
      </header>

      {/* High-Fidelity Animated UI / Video Mockup Placeholder */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-1.5 shadow-2xl shadow-black/80">
          <div className="bg-[#0A0A0A] border border-neutral-900 rounded-md overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/50 border-b border-neutral-900">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
              </div>
              <span className="text-xs font-mono text-neutral-600">bash — sentinel rescue</span>
              <div className="w-12"></div>
            </div>
            {/* Terminal Body Screen Simulation */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-neutral-400">
              <p className="text-neutral-500">$ npm run dev</p>
              <p className="text-rose-500">❌ Error: Cannot find module './components/Button' at Function.Module._resolveFilename</p>
              <p className="text-neutral-500 mt-2">$ rescue</p>
              <p className="text-cyan-400">🛡️ Sentinel CLI: Initiating Rescue Operation...</p>
              <p className="text-neutral-500">✔ Context Compactor loaded (3 files traced).</p>
              
              <div className="mt-4 border border-neutral-900 bg-black/40 rounded p-4 text-left">
                <p className="text-neutral-600">┌── SYSTEM DIAGNOSTIC PROPOSED PATCH ───────────────────────</p>
                <p className="text-yellow-500">│ +++ src/components/Layout.tsx</p>
                <p className="text-red-400">│ - import {`{ Button }`} from "./components/Button";</p>
                <p className="text-green-400">│ + import {`{ Button }`} from "./Button";</p>
                <p className="text-neutral-600">└───────────────────────────────────────────────────────────</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value Matrix */}
      <section className="max-w-5xl mx-auto px-6 pb-24 border-t border-neutral-900 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
            <h3 className="text-white font-medium text-sm mb-2">Sub-2-Second Diagnosis</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bypasses standard cloud queues. Uses hyper-optimized compression architecture to give you local answers instantly.
            </p>
          </div>

          <div className="p-4">
            <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <h3 className="text-white font-medium text-sm mb-2">100% Local & Private</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Processes completely offline via Ollama. Your source code never leaks to external servers or third-party training pools.
            </p>
          </div>

          <div className="p-4">
            <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <h3 className="text-white font-medium text-sm mb-2">Zero Operational Overhead</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No registration forms, no usage credits, and no monthly API subscriptions. Own the binary forever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-neutral-950 text-neutral-600 text-[11px] font-mono">
        © 2026 Sentinel CLI. Built for developers racing the clock.
      </footer>
    </div>
  );
}