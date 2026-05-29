import React from "react";
import { Shield, Terminal, AlertTriangle, Cpu, Download, BookOpen, ExternalLink, RefreshCw } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans selection:bg-neutral-800 selection:text-white">
      
      {/* Navigation Header */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-neutral-900">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-500" />
          <span className="font-mono font-bold tracking-tight text-white">SENTINEL.CLI</span>
          <span className="text-xs bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-500 font-mono">Docs</span>
        </div>
        <a 
          href="/"
          className="text-xs text-neutral-400 hover:text-white transition-all font-mono"
        >
          Back to Home
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sticky Left Sidebar Quick Links */}
        <aside className="md:col-span-1 space-y-2 h-fit md:sticky md:top-12">
          <p className="text-[10px] font-mono tracking-wider uppercase text-neutral-600 px-2">Setup Guide</p>
          <a href="#requirements" className="block text-xs font-mono text-blue-400 bg-blue-950/20 border border-blue-900/30 px-3 py-2 rounded-md">1. Dependencies</a>
          <a href="#how-it-works" className="block text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-900 px-3 py-2 rounded-md transition-all">2. How to Use</a>
          <p className="text-[10px] font-mono tracking-wider uppercase text-neutral-600 pt-4 px-2">System Insights</p>
          <a href="#limitations" className="block text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-900 px-3 py-2 rounded-md transition-all">3. Current Limits</a>
          <a href="#troubleshooting" className="block text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-900 px-3 py-2 rounded-md transition-all">4. Error Fixes</a>
        </aside>

        {/* Documentation Content Streams */}
        <main className="md:col-span-3 space-y-12">
          
          {/* Header Title */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Technical Documentation</h1>
            <p className="text-sm text-neutral-400">Everything required to successfully configure, run, and understand the Sentinel local core environment.</p>
          </section>

          {/* Section 1: Core Requirements */}
          <section id="requirements" className="scroll-mt-12 space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center space-x-2 border-b border-neutral-900 pb-2">
              <Cpu className="w-4 h-4 text-neutral-400" />
              <span>1. Offline Requirements & Model Linkage</span>
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sentinel CLI operates **100% locally**. It does not transmit source files to commercial external servers. To achieve this, it relies directly on an active local instances server manager engine.
            </p>

            {/* Step A: Download Ollama */}
            <div className="bg-neutral-950 border border-neutral-900 rounded-md p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xs font-bold font-mono text-white">Step A: Install the Ollama Engine</h3>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Local open-source runtime layer required to serve code execution queries.</p>
                </div>
                <a 
                  href="https://ollama.com/download" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 text-[11px] font-mono border border-neutral-800 text-neutral-300 px-3 py-1.5 rounded flex items-center space-x-1 transition-all"
                >
                  <span>Ollama Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step B: Pull Local Model */}
            <div className="bg-neutral-950 border border-neutral-900 rounded-md p-4 space-y-2">
              <h3 className="text-xs font-bold font-mono text-white">Step B: Download the Dedicated Code Model</h3>
              <p className="text-[11px] text-neutral-500">
                Sentinel calls the hyper-optimized <code className="text-neutral-300">qwen2.5-coder:1.5b</code> architecture by default to ensure sub-2-second local diagnostic completions.
              </p>
              <p className="text-[11px] text-neutral-400">Open PowerShell or Terminal and execute:</p>
              <div className="bg-black p-2.5 rounded font-mono text-xs text-cyan-400 border border-neutral-900 select-all cursor-pointer">
                ollama pull qwen2.5-coder:1.5b
              </div>
            </div>
          </section>

          {/* Section 2: How To Use */}
          <section id="how-it-works" className="scroll-mt-12 space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center space-x-2 border-b border-neutral-900 pb-2">
              <Terminal className="w-4 h-4 text-neutral-400" />
              <span>2. Operational Use</span>
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Once you extract <code className="text-neutral-200 bg-neutral-900 px-1 py-0.5 rounded">rescue.exe</code> into your paths, usage is straightforward. Move your command interface inside any workspace path where code was modified or an unexpected crash occurs:
            </p>
            <div className="bg-neutral-950 border border-neutral-900 rounded-md p-4 font-mono text-xs space-y-2">
              <p className="text-neutral-500"># 1. Your code or script crashes unexpected</p>
              <p className="text-red-400">❌ npm run build -&gt; Webpack Compile Error: Cannot find component module</p>
              <p className="text-neutral-500 pt-2"># 2. Fire Sentinel to calculate remediation patch instantly</p>
              <p className="text-white">&gt; rescue</p>
            </div>
          </section>

          {/* Section 3: Limitations Faced */}
          <section id="limitations" className="scroll-mt-12 space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center space-x-2 border-b border-neutral-900 pb-2">
              <AlertTriangle className="w-4 h-4 text-neutral-400" />
              <span>3. Architectural Constraints & Limitations</span>
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              To maximize execution speeds, certain architectural boundaries were enforced. It is critical to understand these operational limits:
            </p>
            <ul className="space-y-2.5 pl-1">
              <li className="text-xs text-neutral-400 flex items-start space-x-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span><strong>Context Window Compaction:</strong> Sentinel only indexes the top **3 most recently modified files**. Massive refactors affecting deep directories outside this change window will miss indexing visibility.</span>
              </li>
              <li className="text-xs text-neutral-400 flex items-start space-x-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span><strong>Shell History Mappings:</strong> On Windows 11, cross-reading native PowerShell session history safely requires consistent configuration. Freshly installed sessions may take a single cycle to properly sync execution logs.</span>
              </li>
              <li className="text-xs text-neutral-400 flex items-start space-x-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span><strong>Model Length Constrains:</strong> The local REST output parameter is structurally bound to 512 generated fallback tokens to prevent local processor thrashing or infinite token loops.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Troubleshooting Problems Faced */}
          <section id="troubleshooting" className="scroll-mt-12 space-y-4">
            <h2 className="text-lg font-semibold text-white flex items-center space-x-2 border-b border-neutral-900 pb-2">
              <RefreshCw className="w-4 h-4 text-neutral-400" />
              <span>4. Encountered System Problems & Direct Fixes</span>
            </h2>

            {/* Problem 1 */}
            <div className="border border-neutral-900 rounded-md p-4 space-y-2">
              <span className="text-[10px] uppercase font-mono font-bold bg-neutral-900 text-red-400 px-2 py-0.5 rounded">Problem Case A</span>
              <h4 className="text-xs font-bold text-white">"Ollama Connection Refused Pipeline Failure"</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Happens if the underlying host daemon isn't running or port <code className="text-neutral-300">11434</code> is obstructed by system firewall profiles. Fix this by opening a terminal separate shell and entering <code className="text-neutral-200">ollama serve</code> to restart the process.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="border border-neutral-900 rounded-md p-4 space-y-2">
              <span className="text-[10px] uppercase font-mono font-bold bg-neutral-900 text-red-400 px-2 py-0.5 rounded">Problem Case B</span>
              <h4 className="text-xs font-bold text-white">"The term 'rescue' is not recognized as a script file"</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Windows User Profile path synchronization lag. Simply close down your active Windows terminal app instance completely and spawn a fresh execution pane to allow system environment changes to take effect.
              </p>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-neutral-950 text-neutral-600 text-[11px] font-mono">
        Sentinel Documentation Stack • Build Verified Offline Version 1.0.0
      </footer>
    </div>
  );
}