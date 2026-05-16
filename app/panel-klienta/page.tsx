import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Panel Klienta | AUTOMO AI",
  description: "Dostęp dla klientów już wkrótce.",
}

export default function PanelKlientaPlaceholder() {
  return (
    <div className="relative min-h-screen bg-[#05060f] flex items-center justify-center overflow-hidden selection:bg-blue-primary/30 selection:text-blue-100 p-4">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg text-center bg-[#0a0f1f]/80 backdrop-blur-md rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] p-10 md:p-14">
        <div className="flex justify-center mb-8">
          <Link href="/" className="inline-block relative group">
            <img 
              src="/logo.png" 
              alt="AUTOMO AI" 
              className="h-16 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all"
            />
          </Link>
        </div>

        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 tracking-wider mb-6">
          W PRZYGOTOWANIU
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Panel Klienta
        </h1>
        
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          Pracujemy nad nową odsłoną panelu raportowego dla naszych klientów. Dostęp zostanie odblokowany wkrótce!
        </p>

        <div className="border-t border-slate-800 pt-8 mt-4">
          <p className="text-sm text-slate-500 mb-4">Masz pytania dotyczące swoich kampanii?</p>
          <a href="mailto:biuro@automoai.pl" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all">
            Napisz na biuro@automoai.pl
          </a>
        </div>
      </div>
    </div>
  )
}
