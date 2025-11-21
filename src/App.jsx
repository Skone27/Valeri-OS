import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Database, 
  FileText, 
  Activity, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  Cpu, 
  BarChart3, 
  Briefcase, 
  CheckCircle2, 
  GitBranch, 
  Lock, 
  Search, 
  ArrowRight, 
  LayoutGrid, 
  Terminal,
  FileInput,
  Scale,
  BrainCircuit,
  FileSearch,
  LineChart,
  PieChart,
  Code2,
  TrendingUp,
  MessageSquare,
  Files,
  Building2
} from 'lucide-react';

/**
 * VALERI — THE INSTITUTIONAL CRE OPERATING SYSTEM
 * Developed by Veleta Technologies
 * * Design Language: Valeri Command Surface
 * Palette: Parchment (#F9F6F1), Umber (#1F1A17), Warm Brown (#3A2F2A), Muted Gold (#D4C5A5)
 * Typography: Gelasio (Display) + Lato (Body)
 */

const ValeriOS = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F6F1] text-[#1F1A17] font-body selection:bg-[#3A2F2A] selection:text-[#F9F6F1] overflow-x-hidden">
      {/* --- GLOBAL STYLES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');
        
        .font-display { font-family: 'Gelasio', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .pattern-grid {
          background-image: radial-gradient(#3A2F2A 0.5px, transparent 0.5px);
          background-size: 24px 24px;
        }

        .valeri-card {
          transition: all 0.2s ease;
          border-radius: 4px; /* Slight radius update */
          box-shadow: 0 2px 8px rgba(247, 243, 238, 0.5); /* Faint cream shadow */
        }
        .valeri-card:hover {
          border-color: #A89F91;
          box-shadow: 0 8px 24px rgba(31, 26, 23, 0.08);
          transform: translateY(-2px);
        }

        .nav-glass {
          background: rgba(249, 246, 241, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(58, 47, 42, 0.05);
        }
        
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        .espresso-divider {
          border-bottom: 1px solid #3A3029;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1F1A17] flex items-center justify-center rounded-sm shadow-sm">
              <Layers className="w-5 h-5 text-[#F9F6F1]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight leading-none text-[#1F1A17]">VALERI</span>
              <span className="font-body text-[9px] tracking-widest uppercase text-[#6B5F59] font-bold">Veleta Technologies</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-display text-xs font-semibold tracking-wide text-[#5A524D]">
            {['Workflow', 'Modules', 'Investment Merit', 'Developers', 'Capital Markets'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#1F1A17] transition-colors uppercase">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded border border-[#E5E0D8] bg-white shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="font-body text-[10px] font-bold text-[#3A2F2A] uppercase tracking-wide">System Operational</span>
            </div>
            <button className="bg-[#1F1A17] hover:bg-[#3A2F2A] text-[#F9F6F1] px-5 py-2.5 text-xs font-display font-semibold uppercase tracking-wider transition-all rounded-sm shadow-md hover:shadow-lg">
              Access Command Surface
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 border-b border-[#E5E0D8]">
        <div className="absolute inset-0 pattern-grid opacity-[0.04] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-[#E5E0D8] rounded-full shadow-sm">
              <span className="text-[#3A2F2A] text-xs font-bold font-display tracking-wide">V.2.0 RELEASE</span>
              <span className="w-px h-3 bg-[#E5E0D8]"></span>
              <span className="text-[#6B5F59] text-xs uppercase tracking-wide font-bold">Institutional Build</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-[#1F1A17] tracking-tight leading-[1.1]">
              The End-to-End <br/>
              <span className="text-[#3A2F2A]">CRE Operating System.</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl text-[#5A524D] max-w-xl leading-relaxed font-light">
                Valeri unifies the fragmented toolchain of LOS, CRM, Excel, email, and OCR into a single, governed intelligence layer.
              </p>
              <div className="p-4 bg-[#EBE7DF] border-l-4 border-[#3A2F2A] rounded-r-sm">
                <p className="text-sm font-medium text-[#3A2F2A] leading-relaxed">
                   Valeri executes the entire underwriting workflow automatically: document ingestion, parsing, rent roll + T-12 analysis, comps, deterministic underwriting, risk scoring, credit QA, and IC memo generation—all governed under a single OS.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#1F1A17] text-[#F9F6F1] px-8 py-4 text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 hover:translate-y-[-1px] transition-transform shadow-lg shadow-[#1F1A17]/10 rounded-sm">
                Deploy Valeri
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 text-sm font-display font-bold uppercase tracking-wider text-[#3A2F2A] border border-[#D1Cac0] hover:bg-white transition-colors bg-[#F9F6F1] rounded-sm shadow-sm">
                View Architecture
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E5E0D8]">
              <div>
                <div className="text-3xl font-display font-bold text-[#1F1A17]">150+</div>
                <div className="text-xs text-[#6B5F59] uppercase mt-1 font-bold">Database Tables</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-[#1F1A17]">200+</div>
                <div className="text-xs text-[#6B5F59] uppercase mt-1 font-bold">API Endpoints</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-[#1F1A17]">0ms</div>
                <div className="text-xs text-[#6B5F59] uppercase mt-1 font-bold">Re-Keying Latency</div>
              </div>
            </div>
          </div>

          {/* UI PREVIEW: COMMAND SURFACE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#3A2F2A]/5 translate-x-4 translate-y-4 rounded-sm -z-10"></div>
            <div className="bg-white border border-[#D1Cac0] rounded-sm shadow-2xl overflow-hidden">
              <div className="h-10 bg-[#F5F2EB] border-b border-[#E5E0D8] flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#D1Cac0]"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-[#D1Cac0]"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-[#D1Cac0]"></div>
                </div>
                <span className="font-body font-bold text-[10px] text-[#6B5F59] uppercase tracking-widest">Valeri_Command_Surface // Deal_ID_8492</span>
              </div>
              <div className="p-6 bg-[#FFFFFF] grid grid-cols-12 gap-6 min-h-[400px]">
                 <div className="col-span-3 border-r border-[#F0EBE6] pr-4 space-y-6">
                    <div>
                       <div className="text-[10px] font-bold uppercase text-[#3A2F2A] mb-3 font-display tracking-wide">Pipeline Status</div>
                       <div className="space-y-2">
                          <div className="p-2.5 bg-[#F9F6F1] border border-[#E5E0D8] rounded text-xs font-bold text-[#1F1A17] flex items-center justify-between shadow-sm">
                             <span>Sunset Blvd MF</span>
                             <div className="flex items-center gap-1">
                                <span className="text-[8px] text-[#6B5F59]">UW</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                             </div>
                          </div>
                          <div className="p-2.5 bg-white border border-transparent text-xs text-[#6B5F59] hover:bg-[#F9F6F1] rounded transition-colors">Austin Industrial</div>
                          <div className="p-2.5 bg-white border border-transparent text-xs text-[#6B5F59] hover:bg-[#F9F6F1] rounded transition-colors">Highland Retail</div>
                       </div>
                    </div>
                 </div>
                 <div className="col-span-9 space-y-6">
                    <div className="flex justify-between items-end border-b border-[#F0EBE6] pb-4 pt-8">
                       <div>
                          <h3 className="text-xl font-display font-bold text-[#1F1A17]">Sunset Mixed-Use</h3>
                          <div className="flex gap-3 mt-2">
                             <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 bg-[#F5F2EB] text-[#5A524D] rounded-sm border border-[#E5E0D8]">Los Angeles, CA</span>
                             <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 bg-[#F5F2EB] text-[#5A524D] rounded-sm border border-[#E5E0D8]">$42MM Request</span>
                          </div>
                       </div>
                       <div className="text-right mt">
                          <div className="text-[10px] font-bold uppercase text-[#6B5F59] mb-1">Conviction Score</div>
                          <div className="text-3xl font-display font-bold text-[#1F1A17]">88<span className="text-sm text-[#6B5F59] font-normal">/100</span></div>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                       {[
                          { l: 'Stabilized DY', v: '8.4%' },
                          { l: 'DSCR (IO)', v: '1.35x' },
                          { l: 'LTV', v: '62.5%' }
                       ].map((stat, i) => (
                          <div key={i} className="p-3 border border-[#E5E0D8] rounded-sm bg-[#FBF9F7]">
                             <div className="text-[10px] font-bold uppercase text-[#6B5F59] mb-1">{stat.l}</div>
                             <div className="text-xl font-display font-bold text-[#1F1A17]">{stat.v}</div>
                          </div>
                       ))}
                    </div>
                    <div className="p-4 bg-[#FFF5F5] border border-[#FED7D7] rounded-sm">
                       <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-[#C53030]" />
                          <span className="text-xs font-bold uppercase text-[#9B2C2C]">Red Flag Engine Detected (2)</span>
                       </div>
                       <div className="space-y-1 pl-6">
                          <p className="text-xs text-[#5A524D] font-mono">• Tenant Concentration: Top tenant &gt; 20% GLA</p>
                          <p className="text-xs text-[#5A524D] font-mono">• Lease Expiry: 15% rolling in Year 2</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY VALERI MATTERS (VALUE PROP) --- */}
      <section className="py-24 bg-[#1F1A17] text-[#F9F6F1] border-b border-[#3A2F2A]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-xs font-display font-bold text-[#D1Cac0] uppercase tracking-widest mb-3 espresso-divider border-[#3A2F2A]">Value Proposition</h2>
               <h3 className="text-3xl font-display font-bold text-white">Why Valeri Matters</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
               {[
                  { title: "Single Source of Truth", desc: "Replaces CRM + LOS + Excel + Word + Email + local files." },
                  { title: "Consistency", desc: "Every deal underwritten the same way using deterministic models." },
                  { title: "Speed", desc: "Cuts deal processing time from weeks to hours." },
                  { title: "Accuracy", desc: "Eliminates model drift, formatting drift, and shadow work." },
                  { title: "Governance", desc: "Complete audit trails from intake → IC → servicing." },
                  { title: "Lifecycle Integration", desc: "Supports origination, credit, servicing, surveillance, and capital markets." },
                  { title: "Scalability", desc: "Handles 10–12x deal volume with the same team." }
               ].map((item, i) => (
                  <div key={i} className="pl-6 border-l-2 border-[#3A2F2A] hover:border-[#D1Cac0] transition-colors">
                     <h4 className="text-lg font-display font-bold text-white mb-2">{item.title}</h4>
                     <p className="text-sm text-[#8C847F] leading-relaxed font-medium">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- UNDERWRITING WORKFLOW (6 STEPS) --- */}
      <section id="workflow" className="py-24 bg-[#F9F6F1] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-display font-bold text-[#6B5F59] uppercase tracking-widest mb-3 espresso-divider">Operational Lifecycle</h2>
            <h3 className="text-4xl font-display font-bold text-[#1F1A17]">Underwriting Workflow</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 step: "01",
                 title: "Intake & Ingestion",
                 desc: "Email, portal, and drag-and-drop files pass through the File Trigger Router and enter Intake. All documents are tagged, indexed, and stored in the Document Library.",
                 icon: FileInput
               },
               {
                 step: "02",
                 title: "Document Processing",
                 desc: "OCR + classification. Auto-launch T-12 Analyzer, Rent Roll Analyzer, sponsorship extraction, appraisal mapping, and business plan parsing.",
                 icon: Search
               },
               {
                 step: "03",
                 title: "Node Analysis",
                 desc: "Dedicated diligence engines: Rent Roll Audit, T-12 Analyzer, Market Comps, Appraisal Review, Sponsor Credit, and Business Plan Analysis.",
                 icon: BrainCircuit
               },
               {
                 step: "04",
                 title: "Deterministic Underwriting",
                 desc: "Cash flows, DSCR, DY, LTV/LTC, and reserve structures computed identically every time. Sensitivity matrices run automatically.",
                 icon: Scale
               },
               {
                 step: "05",
                 title: "Risk & QA",
                 desc: "Red Flag Engine performs 150+ checks. Conviction Scoring quantifies deal quality. Credit QA workflow routes issues to analysts, UWs, MDs, and IC.",
                 icon: Shield
               },
               {
                 step: "06",
                 title: "IC Output & Execution",
                 desc: "IC Memo Generator produces structured memos. Term Sheet + Soft Quote Generator. Capital Markets Export produces warehouse, CLO, or investor packages.",
                 icon: FileText
               }
             ].map((node, idx) => (
                <div key={idx} className={`p-8 border border-[#E5E0D8] rounded-sm shadow-sm hover:shadow-md transition-all group relative overflow-hidden ${idx % 2 === 0 ? 'bg-[#F7F3EE]' : 'bg-[#EEE8E2]'}`}>
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#E5E0D8] group-hover:bg-[#3A2F2A] transition-colors"></div>
                   <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-bold font-display text-[#6B5F59] uppercase tracking-widest">Step {node.step}</div>
                      <node.icon className="w-5 h-5 text-[#3A2F2A] opacity-50 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <h4 className="text-xl font-display font-bold text-[#1F1A17] mb-3">{node.title}</h4>
                   <p className="text-sm text-[#5A524D] leading-relaxed">{node.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- MODULES GRID --- */}
      <section id="modules" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16 border-b border-[#E5E0D8] pb-8">
              <h2 className="text-4xl font-display font-bold text-[#1F1A17] mb-4">Valeri Modules</h2>
              <p className="text-[#5A524D] max-w-2xl text-lg font-light">
                Distinct, interchangeable logic blocks that form the Core Platform.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
              {/* CORE PLATFORM */}
              <div className="space-y-4">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B5F59] border-b border-[#E5E0D8] pb-2 espresso-divider mb-2">Core Platform</div>
                 <ModuleCard title="Valeri Command Surface" desc="Unified operating console." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Deal Tracker" desc="Pipeline, aging, statuses." color="bg-[#F7F3EE]" />
                 <ModuleCard title="CRM & Pipeline" desc="Contacts & sponsor linkage." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Deal Chat" desc="Context-aware communication." color="bg-[#F7F3EE]" />
                 <ModuleCard title="File Trigger Router" desc="Intake routing engine." color="bg-[#F7F3EE]" />
              </div>

              {/* ANALYSIS & DATA */}
              <div className="space-y-4">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B5F59] border-b border-[#E5E0D8] pb-2 espresso-divider mb-2">Analysis & Data</div>
                 <ModuleCard title="Document Library" desc="Institutional memory." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Rent Roll Analyzer" desc="Parsing + audit logic." color="bg-[#EEE8E2]" />
                 <ModuleCard title="T-12 Analyzer" desc="Expense mapping & deltas." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Market Comps" desc="Submarket indicators." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Comps Engine" desc="Full database & scoring." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Research & Analytics" desc="Trend engine & reporting." color="bg-[#EEE8E2]" />
              </div>

              {/* UNDERWRITING & RISK */}
              <div className="space-y-4">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B5F59] border-b border-[#E5E0D8] pb-2 espresso-divider mb-2">Underwriting & Risk</div>
                 <ModuleCard title="Valeri Sizer" desc="Deterministic engine." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Deterministic UW" desc="Cash flow & sensitivities." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Red Flag Engine" desc="150+ credit checks." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Conviction Scoring" desc="Quality quantification." color="bg-[#F7F3EE]" />
                 <ModuleCard title="Credit QA System" desc="Role-based review." color="bg-[#F7F3EE]" />
              </div>

              {/* OUTPUT & EXECUTION */}
              <div className="space-y-4">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-[#6B5F59] border-b border-[#E5E0D8] pb-2 espresso-divider mb-2">Output & Execution</div>
                 <ModuleCard title="IC Memo Generator" desc="Automated memos." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Term Sheet Generator" desc="Lender deliverables." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Soft Quote Generator" desc="Indicative pricing." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Capital Markets Export" desc="Securitization packages." color="bg-[#EEE8E2]" />
                 <ModuleCard title="Analytics Dashboards" desc="Portfolio KPIs." color="bg-[#EEE8E2]" />
              </div>
           </div>

           {/* COMPS & RESEARCH SECTION */}
           <div className="border border-[#E5E0D8] bg-[#FDFBF7] rounded-sm p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-[#EBE7DF] rounded-full"><LayoutGrid className="w-5 h-5 text-[#3A2F2A]" /></div>
                       <h3 className="text-lg font-display font-bold text-[#1F1A17]">Comps Engine</h3>
                    </div>
                    <p className="text-sm text-[#5A524D] leading-relaxed">
                       Valeri includes a full rent, sale, and expense comp engine with adjustment logic, comparability scoring, and map/table interfaces. Comps feed directly into underwriting, Red Flags, sensitivities, IC memos, and valuation workflows.
                    </p>
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-[#EBE7DF] rounded-full"><FileSearch className="w-5 h-5 text-[#3A2F2A]" /></div>
                       <h3 className="text-lg font-display font-bold text-[#1F1A17]">Research & Analytics</h3>
                    </div>
                    <p className="text-sm text-[#5A524D] leading-relaxed">
                       A research subsystem aggregates submarket data, historical performance, rent growth, expense trends, and risk indicators into one analytical layer. AI-powered research and analysis without external vendor dependency.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- INVESTMENT MERIT (SPLIT SCREEN) --- */}
      <section id="investment-merit" className="flex flex-col lg:flex-row border-t border-[#3A2F2A]">
         {/* LEFT: DARK BROWN */}
         <div className="lg:w-1/2 bg-[#1F1A17] text-[#F9F6F1] p-12 lg:p-24 flex flex-col justify-center">
            <div className="max-w-lg mx-auto lg:mx-0">
               <h2 className="text-xs font-display font-bold text-[#D1Cac0] uppercase tracking-widest mb-6 espresso-divider border-[#D1Cac0]">Investment Merit</h2>
               <h3 className="text-4xl font-display font-bold text-white mb-8 leading-tight">The Institutional Operating System</h3>
               <p className="text-[#8C847F] leading-relaxed mb-6 text-lg font-light">
                  Valeri is not a point solution or add-on. It introduces a new infrastructure category for commercial real estate finance: a unified operating system that handles the full lifecycle of a credit asset—from intake and underwriting to risk, governance, servicing, and capital markets packaging.
               </p>
               <p className="text-[#8C847F] leading-relaxed mb-12 font-medium">
                  The system replaces the fragmented software stack (CRM, LOS, Excel, Word, email, network drives) with a single governed data and workflow layer.
               </p>
               
               <div className="border-t border-[#3A2F2A] pt-8">
                  <h4 className="text-sm font-bold text-[#D1Cac0] uppercase tracking-wide mb-4">Monetization</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#8C847F]">
                     <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3A2F2A]" /> Platform licensing</div>
                     <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3A2F2A]" /> Workflow modules</div>
                     <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3A2F2A]" /> Analytics & reporting</div>
                     <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3A2F2A]" /> Lifecycle products</div>
                  </div>
               </div>
            </div>
         </div>
         
         {/* RIGHT: CREAM BACKGROUND + ESPRESSO TEXT */}
         <div className="lg:w-1/2 bg-[#F5F2EB] text-[#1F1A17] p-12 lg:p-24 flex flex-col justify-center border-l border-[#E5E0D8]">
            <div className="max-w-lg mx-auto lg:mx-0">
               <div className="mb-12">
                  <h4 className="text-sm font-bold text-[#3A2F2A] uppercase tracking-wide mb-2">System Outputs</h4>
                  <ul className="space-y-2 text-[#5A524D] font-medium">
                     <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#D1Cac0]" /> Higher throughput</li>
                     <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#D1Cac0]" /> Lower cost of credit production</li>
                     <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#D1Cac0]" /> Lower error rates</li>
                     <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#D1Cac0]" /> Higher governance and compliance quality</li>
                     <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#D1Cac0]" /> Enterprise-grade data assets</li>
                  </ul>
               </div>

               <div className="bg-white p-8 border border-[#E5E0D8] rounded-sm shadow-sm">
                  <div className="font-body font-bold text-xs text-[#6B5F59] uppercase tracking-widest mb-8 border-b border-[#E5E0D8] pb-2">Impact Metrics</div>
                  <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                     <div>
                        <div className="text-4xl font-display font-bold text-[#1F1A17] mb-1">85%</div>
                        <div className="text-[10px] font-bold text-[#6B5F59] uppercase tracking-wide">Reduction in manual effort</div>
                     </div>
                     <div>
                        <div className="text-4xl font-display font-bold text-[#1F1A17] mb-1">12x</div>
                        <div className="text-[10px] font-bold text-[#6B5F59] uppercase tracking-wide">Deal throughput</div>
                     </div>
                     <div>
                        <div className="text-4xl font-display font-bold text-[#1F1A17] mb-1">100%</div>
                        <div className="text-[10px] font-bold text-[#6B5F59] uppercase tracking-wide">Governance trail</div>
                     </div>
                     <div>
                        <div className="text-4xl font-display font-bold text-[#1F1A17] mb-1">0%</div>
                        <div className="text-[10px] font-bold text-[#6B5F59] uppercase tracking-wide">Model formatting drift</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- DEVELOPER OVERVIEW --- */}
      <section id="developers" className="py-24 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-xs font-display font-bold text-[#6B5F59] uppercase tracking-widest mb-3 espresso-divider">System Architecture</h2>
                 <h3 className="text-3xl font-display font-bold text-[#1F1A17] mb-6">Cloud-Agnostic Core</h3>
                 <p className="text-[#5A524D] mb-8 leading-relaxed font-medium">
                    Valeri is built on a scalable, cloud-agnostic stack designed for portability and security.
                 </p>

                 <div className="space-y-3">
                    {[
                       "Cloud-agnostic Postgres + RLS",
                       "150+ normalized tables",
                       "200+ API endpoints",
                       "Edge functions + microservice structure",
                       "Data lake–ready",
                       "Export and reporting systems",
                       "Fully portable to AWS, GCP, or Azure"
                    ].map((spec, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm text-[#1F1A17] font-bold">
                          <Code2 className="w-4 h-4 text-[#3A2F2A]" />
                          {spec}
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-[#F9F6F1] border border-[#E5E0D8] p-8 rounded-sm">
                 <div className="font-body font-bold text-xs text-[#6B5F59] mb-6 border-b border-[#E5E0D8] pb-2">SYSTEM_TOPOLOGY</div>
                 <div className="space-y-4">
                    <div className="p-4 bg-white border border-[#E5E0D8] shadow-sm text-center rounded-sm">
                       <div className="text-xs font-bold text-[#1F1A17] uppercase">Next.js Client</div>
                       <div className="text-[10px] text-[#6B5F59] font-medium">Valeri Command Surface</div>
                    </div>
                    <div className="h-6 w-px bg-[#E5E0D8] mx-auto"></div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-white border border-[#E5E0D8] shadow-sm text-center rounded-sm">
                          <div className="text-xs font-bold text-[#1F1A17] uppercase">API Gateway</div>
                          <div className="text-[10px] text-[#6B5F59] font-medium">Auth & Rate Limiting</div>
                       </div>
                       <div className="p-4 bg-white border border-[#E5E0D8] shadow-sm text-center rounded-sm">
                          <div className="text-xs font-bold text-[#1F1A17] uppercase">File Trigger</div>
                          <div className="text-[10px] text-[#6B5F59] font-medium">Ingestion Pipeline</div>
                       </div>
                    </div>
                    <div className="h-6 w-px bg-[#E5E0D8] mx-auto"></div>
                    <div className="p-6 bg-[#3A2F2A] text-[#F9F6F1] text-center rounded-sm shadow-md">
                       <div className="text-sm font-bold uppercase font-display mb-2">Supabase / Postgres Core</div>
                       <div className="grid grid-cols-3 gap-2 text-[9px] opacity-80 font-mono">
                          <div>DEALS TABLE</div>
                          <div>LOANS TABLE</div>
                          <div>DOCS TABLE</div>
                          <div>RENTS TABLE</div>
                          <div>COMPS TABLE</div>
                          <div>LOGS TABLE</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1F1A17] text-[#F9F6F1] py-16 border-t border-[#3A2F2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                   <Layers className="w-6 h-6 text-[#D1Cac0]" />
                   <span className="font-display font-bold text-xl tracking-tight">VALERI</span>
                </div>
                <p className="text-[#8C847F] text-sm max-w-sm leading-relaxed font-medium">
                   Valeri is the next-generation end-to-end CRE Operating System. A unified platform for intake, underwriting, risk, IC, servicing, analytics, and capital markets execution—powered by a governed intelligence layer.
                </p>
             </div>
             <div>
                <h4 className="text-xs font-bold text-[#D1Cac0] uppercase tracking-widest mb-6">Platform</h4>
                <ul className="space-y-3 text-sm text-[#8C847F] font-medium">
                   <li className="hover:text-white cursor-pointer transition-colors">Command Surface</li>
                   <li className="hover:text-white cursor-pointer transition-colors">Valeri Sizer</li>
                   <li className="hover:text-white cursor-pointer transition-colors">Red Flag Engine</li>
                   <li className="hover:text-white cursor-pointer transition-colors">Capital Markets</li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-bold text-[#D1Cac0] uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-[#8C847F] font-medium">
                   <li className="hover:text-white cursor-pointer transition-colors">About Veleta</li>
                   <li className="hover:text-white cursor-pointer transition-colors">Security</li>
                   <li className="hover:text-white cursor-pointer transition-colors">API Docs</li>
                   <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                </ul>
             </div>
          </div>
          <div className="pt-8 border-t border-[#3A2F2A] flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-xs text-[#5A524D] font-bold font-body">
                © 2025 Veleta Technologies Inc. All Rights Reserved.
             </div>
             <div className="flex gap-6">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-xs text-[#8C847F] uppercase tracking-wide font-bold">System Status: Operational</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const ModuleCard = ({ title, desc, color }) => (
   <div className={`valeri-card p-4 border border-[#E5E0D8] rounded-sm shadow-sm cursor-default group ${color}`}>
      <div className="flex justify-between items-start mb-2">
         <span className="text-sm font-bold text-[#1F1A17] group-hover:text-[#3A2F2A] transition-colors font-display">{title}</span>
         <div className="w-1.5 h-1.5 bg-[#D1Cac0] group-hover:bg-[#3A2F2A] transition-colors rounded-full"></div>
      </div>
      <p className="text-xs text-[#6B5F59] leading-relaxed font-medium">{desc}</p>
   </div>
);

export default ValeriOS;
