"use client"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[120px] py-2">
            <Link href="/" className="flex items-center gap-3">
              <motion.img 
                src="/logo.png" 
                alt="AUTOMO AI Logo" 
                className="h-28 sm:h-32 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                initial={{ clipPath: "inset(0% 0% 25% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", y: [-2, 2, -2] }}
                transition={{ 
                  clipPath: { delay: 1.5, duration: 1, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }
                }}
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#jak-dziala-dbr" className="text-base font-semibold text-text-muted hover:text-white active:scale-90 hover:-translate-y-0.5 transition-all duration-300 relative group">
                Jak działa DBR
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </Link>
              <Link href="/#uslugi" className="text-base font-semibold text-text-muted hover:text-white active:scale-90 hover:-translate-y-0.5 transition-all duration-300 relative group">
                Usługi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </Link>
              <Link href="/#o-nas" className="text-base font-semibold text-text-muted hover:text-white active:scale-90 hover:-translate-y-0.5 transition-all duration-300 relative group">
                O nas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </Link>
              <Link href="/#faq" className="text-base font-semibold text-text-muted hover:text-white active:scale-90 hover:-translate-y-0.5 transition-all duration-300 relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </Link>
              <div className="relative group/dropdown">
                <button className="text-base font-semibold text-text-muted hover:text-white active:scale-90 hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-1">
                  Informacje
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                </button>
                <div className="absolute top-full right-0 mt-4 w-48 bg-[#0a0f1f] border border-blue-500/20 rounded-xl p-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all shadow-xl">
                  <Link href="/polityka-prywatnosci" className="block px-4 py-2 text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg active:scale-95 transition-transform">Polityka Prywatności</Link>
                  <Link href="/rodo-pke" className="block px-4 py-2 text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg active:scale-95 transition-transform">RODO & PKE</Link>
                  <Link href="/regulamin" className="block px-4 py-2 text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg active:scale-95 transition-transform">Regulamin</Link>
                  <Link href="/panel-klienta" className="block px-4 py-2 text-base text-blue-400 hover:text-blue-300 hover:bg-white/5 rounded-lg font-bold active:scale-95 transition-transform">Panel Klienta ↗</Link>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <Button size="lg" className="h-16 px-10 text-xl font-bold btn-glitch shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] transition-all duration-300 relative uppercase tracking-wider" asChild>
                <Link data-text="Umów konsultację" href="/#kontakt">Umów konsultację</Link>
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-muted hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[120px] z-40 glass md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/#jak-dziala-dbr" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white rounded-md hover:bg-blue-500/10 active:scale-95 transition-all">Jak działa DBR</Link>
              <Link href="/#uslugi" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white rounded-md hover:bg-blue-500/10 active:scale-95 transition-all">Usługi</Link>
              <Link href="/#o-nas" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white rounded-md hover:bg-blue-500/10 active:scale-95 transition-all">O nas</Link>
              <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white rounded-md hover:bg-blue-500/10 active:scale-95 transition-all">FAQ</Link>
              <Link href="/polityka-prywatnosci" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-slate-300 hover:text-white hover:bg-blue-500/10 active:scale-95 transition-all">Polityka Prywatności</Link>
              <Link href="/rodo-pke" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-slate-300 hover:text-white hover:bg-blue-500/10 active:scale-95 transition-all">RODO & PKE</Link>
              <Link href="/regulamin" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-slate-300 hover:text-white hover:bg-blue-500/10 active:scale-95 transition-all">Regulamin</Link>
              <div className="pt-2">
                <Button size="lg" className="w-full h-16 text-xl font-bold btn-glitch shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] transition-all duration-300 relative uppercase tracking-wider" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link data-text="Umów konsultację" href="/#kontakt">Umów konsultację</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
