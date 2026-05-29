"use client";

import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Shield, Download, ArrowRight, CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // 1. Automatically trigger the binary executable download
    const downloadUrl = "/download/rescue.exe";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "rescue.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Visual countdown indicator
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-sans flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      {/* Header */}
      <nav className="max-w-5xl mx-auto w-full px-6 py-6 flex justify-between items-center border-b border-neutral-900">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-blue-500" />
          <span className="font-mono font-bold tracking-tight text-white">SENTINEL.CLI</span>
        </div>
      </nav>

      {/* Main Panel */}
      <main className="max-w-md mx-auto text-center px-6 py-20 flex-grow flex flex-col justify-center items-center">
        <div className="w-12 h-12 rounded-full bg-emerald-950/30 border border-emerald-800 flex items-center justify-center mb-6">
          <CheckCircle className="w-6 h-6 text-emerald-500" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white mb-3">
          Payment Confirmed.
        </h1>
        
        <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
          Your lifetime license is active. Your local native binary (<code className="bg-neutral-900 px-1 py-0.5 rounded text-neutral-200 text-xs font-mono">rescue.exe</code>) should begin downloading automatically.
        </p>

        {/* Manual Download Button Trigger Fallback */}
        <div className="w-full space-y-4">
          <a
            href="/download/rescue.exe"
            download="rescue.exe"
            className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white text-xs font-semibold py-3.5 rounded-md transition-all flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4 text-neutral-400" />
            <span>Click here if download didn't start ({countdown}s)</span>
          </a>

          <div className="bg-black/40 border border-neutral-900 rounded-md p-4 text-left font-mono text-[11px] text-neutral-500">
                <p className="text-neutral-300 font-bold mb-2">⚡ Pro PowerShell Direct Install:</p>
                 <div className="bg-neutral-950 p-2 rounded border border-neutral-900 text-emerald-400 mb-3 select-all cursor-pointer break-all">
    powershell -c "mkdir '$HOME\sentinel' -Force; Invoke-WebRequest -Uri 'https://your-sentinel-domain.com/download/rescue.exe' -OutFile '$HOME\sentinel\rescue.exe'; [Environment]::SetEnvironmentVariable('Path', [Environment]::GetEnvironmentVariable('Path', 'User') + ';'\+$HOME+'\sentinel', 'User')"
                </div>
               <p className="text-neutral-400">
               Paste that into PowerShell to download, install, and map <code className="text-white">rescue</code> globally in one shot. Then just type <code className="text-emerald-400">rescue</code> in any project directory!
                 </p>
                  </div>
                  </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-neutral-600 text-[11px] font-mono">
        Sentinel Client Distribution Engine • Secure Delivery
      </footer>
    </div>
  );
}