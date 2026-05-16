"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#02030a] pt-20 pb-8 relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 hidden md:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="flex flex-col md:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.img 
                src="/logo.png" 
                alt="AUTOMO AI Logo" 
                className="h-28 sm:h-32 w-auto drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]" 
                initial={{ clipPath: "inset(0% 0% 25% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">Wdrażamy systemy Database Reactivation oraz Agentów AI. Zarabiamy wtedy, kiedy Ty zarabiasz na przyprowadzonych przez nas wizytach.</p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950 transition-all">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950 transition-all">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="mailto:biuro@automoai.pl" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  biuro@automoai.pl
                </a>
              </li>
              <li>
                <a href="tel:+48576585481" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  +48 576 585 481
                </a>
              </li>
              <li className="flex items-center mt-6 py-2 px-3 bg-slate-900 w-fit rounded-lg border border-slate-800 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                Gdańsk, Polska
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Informacje</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/polityka-prywatnosci" className="hover:text-blue-400 transition-colors block">Polityka Prywatności</Link></li>
              <li><Link href="/rodo-pke" className="hover:text-blue-400 transition-colors block">RODO &amp; PKE Compliance</Link></li>
              <li><Link href="/regulamin" className="hover:text-blue-400 transition-colors block">Regulamin usług</Link></li>
              <li><Link href="/panel-klienta" className="hover:text-blue-400 transition-colors block mt-6 font-medium text-slate-300">Panel Klienta ↗</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500">© 2026 AUTOMO AI. Autorskie systemy automatyzacji dla MŚP.</p>
          <p className="text-xs font-medium text-slate-600">Built for performance.</p>
        </div>
      </div>
    </footer>
  )
}
