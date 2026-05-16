"use client"
import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useScroll, AnimatePresence } from "motion/react"
import { ArrowUp } from "lucide-react"

// --- Subcomponents ---

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-colors"
          aria-label="Wróć na górę"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

interface Section {
  id: string
  title: string
}

function TableOfContents({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px" } 
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections.length) return null

  return (
    <div className="sticky top-32">
      <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Spis Treści</h3>
      <nav className="flex flex-col gap-2 border-l border-slate-800">
        {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`pl-4 py-1 text-sm transition-colors border-l-2 -ml-[1px] ${
              activeId === id 
                ? "text-blue-400 border-blue-500 font-medium" 
                : "text-slate-400 border-transparent hover:text-slate-200"
            }`}
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  )
}

// --- Main Layout ---

interface LegalPageLayoutProps {
  title: string
  subtitle: string
  lastUpdated?: string
  breadcrumbName: string
  sections?: Section[]
  children: React.ReactNode
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  breadcrumbName,
  sections = [],
  children
}: LegalPageLayoutProps) {
  return (
    <div className="relative min-h-screen selection:bg-blue-primary/30 selection:text-blue-100 bg-[#05060f]">
      <ScrollProgressBar />
      
      {/* Subtelne tło */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-32">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-blue-400 transition-colors">Strona główna</Link>
          <span>&gt;</span>
          <span>Informacje</span>
          <span>&gt;</span>
          <span className="text-slate-200">{breadcrumbName}</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">{subtitle}</p>
          {lastUpdated && (
            <p className="text-sm text-slate-500 mt-4">Ostatnia aktualizacja: {lastUpdated}</p>
          )}
        </div>

        {/* Content & TOC Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 max-w-4xl prose prose-invert prose-blue prose-headings:text-gradient prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>
          
          <div className="hidden lg:block w-64 shrink-0 -mt-2">
            <TableOfContents sections={sections} />
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
      
      {/* Print styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          nav, footer, .fixed { display: none !important; }
          body { background: white !important; color: black !important; }
          .prose-invert { filter: invert(100%); }
        }
      `}} />
    </div>
  )
}
