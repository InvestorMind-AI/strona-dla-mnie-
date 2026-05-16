"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import CountUp from "react-countup"
import {
  Zap,
  RefreshCw,
  Bot,
  CheckCircle2,
  Workflow,
  Car,
  Sparkles,
  Scissors,
  Wrench,
  Stethoscope,
  ArrowRight,
  TrendingUp,
  Clock,
  Banknote,
  Globe2,
  Lock,
  HeartPulse,
  MessageSquare
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

// Component for scroll reveal
const Reveal = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function LandingPage() {
  const [formState, setFormState] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [selectedService, setSelectedService] = React.useState("dbr")

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL
    try {
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error("webhook error")
      }
      setFormState("success")
    } catch {
      setFormState("error")
    }
  }

  return (
    <div className="relative min-h-screen selection:bg-blue-primary/30 selection:text-blue-100">
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <motion.div 
              className="xl:col-span-7 flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Badge className="mb-6">
                  <Sparkles className="w-3 h-3 mr-1 text-blue-electric" />
                  Agencja automatyzacji AI z Trójmiasta
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.15] glow-text"
              >
                Odzyskaj <span className="text-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">pieniądze</span>, które już zarobiłeś.
                <span className="text-2xl md:text-3xl lg:text-4xl text-text-muted font-bold mt-4 block">Bez wydawania złotówki na nową reklamę.</span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-base md:text-lg lg:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed"
              >
                Database Reactivation — agent AI dzwoni, pisze SMS i WhatsApp do Twoich starych klientów i umawia ich z powrotem na wizyty. Płacisz tylko za rezultat.
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
              >
                <Button size="lg" asChild className="h-16 px-10 text-lg shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]">
                  <Link href="#kontakt">Sprawdź ile możesz odzyskać <ArrowRight className="ml-2 w-6 h-6" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-16 px-10 text-lg">
                  <Link href="#jak-dziala-dbr">Zobacz jak to działa</Link>
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-blue-500/10 w-full max-w-2xl"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white flex items-baseline gap-1">
                    8-<CountUp end={15} duration={2.5} />%
                  </p>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mt-1">Reaktywacji</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white flex items-baseline gap-1">
                    <CountUp end={48} duration={2.5} />h
                  </p>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mt-1">Wdrożenie</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white flex items-baseline gap-1">
                    0 zł
                  </p>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mt-1">Ryzyka</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Animation */}
            <motion.div 
              className="xl:col-span-5 relative mt-12 xl:mt-0 max-w-lg mx-auto xl:max-w-none w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
              <div className="relative glass rounded-3xl p-4 sm:p-6 flex flex-col h-[500px] justify-between">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-500/10 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-primary/20 flex flex-shrink-0 items-center justify-center border border-blue-500/30 relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                      <Bot className="w-5 h-5 text-blue-glow relative z-10" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">AI Agent</p>
                      <p className="text-xs text-green-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                        Aktywna kampania
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-transparent border-blue-500/30 text-blue-glow hidden sm:inline-flex">
                    +4 umówione dziś
                  </Badge>
                </div>

                <div className="space-y-6 flex-1 overflow-y-auto pr-2 pb-4 scrollbar-hide flex flex-col justify-end">
                  {/* Chat Message 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-primary/20 flex-shrink-0 flex items-center justify-center mt-1 border border-blue-500/30">
                      <Bot className="w-4 h-4 text-blue-glow" />
                    </div>
                    <div className="bg-[#1e293b]/60 border border-blue-500/20 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-blue-50 max-w-[85%] sm:max-w-[80%] relative overflow-hidden group shadow-sm">
                      Cześć Marek, tu Ewa ze Studia Detailingu. Dawno u nas nie byłeś, a mamy nowy zabieg idealny dla Twojego auta. Znaleźć Ci wolny termin w tym tygodniu? Mamy zniżkę 20% dla stałych klientów.
                    </div>
                  </motion.div>

                  {/* Chat Message 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: 10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 2.5, duration: 0.4 }}
                    className="flex gap-3 justify-end"
                  >
                    <div className="bg-blue-600 border border-blue-500 rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white max-w-[85%] sm:max-w-[80%] shadow-md">
                      Brzmi super. Masz coś w czwartek po 16:00?
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center mt-1 text-xs font-semibold text-white border border-slate-700">
                      M
                    </div>
                  </motion.div>

                  {/* Chat Message 3 & Booking */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 4, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-primary/20 flex-shrink-0 flex items-center justify-center mt-1 border border-blue-500/30">
                      <Bot className="w-4 h-4 text-blue-glow" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[85%] sm:max-w-[80%]">
                       <div className="bg-[#1e293b]/60 border border-blue-500/20 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-blue-50 shadow-sm">
                        Jasne! Wstępnie zapisałam Cię na czwartek na 16:30. Pasuje?
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        transition={{ delay: 5.5, duration: 0.4 }}
                        className="bg-green-950/40 border border-green-500/30 rounded-xl p-3 sm:p-4 flex flex-col gap-2 mt-2 w-full shadow-[0_0_15px_rgba(34,197,94,0.1)] backdrop-blur-sm"
                      >
                         <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-full border border-green-500/30">
                               <CheckCircle2 className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                               <p className="text-xs sm:text-sm text-green-400 font-semibold mb-0.5">Rezerwacja potwierdzona</p>
                               <p className="text-[10px] sm:text-xs text-green-400/80">Dodano do kalendarza Google</p>
                            </div>
                         </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. JAK DZIAŁA DBR */}
      <section id="jak-dziala-dbr" className="py-24 relative border-t border-blue-500/10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Database Reactivation <br className="hidden sm:block"/>w 4 krokach</h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Od martwej bazy do gotowych rezerwacji w kalendarzu. Ty się nie angażujesz.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0" />
            
            {[
              { num: "01", title: "Analizujemy Twoją bazę", desc: "Wyciągamy nieaktywnych klientów (3-24 mies. bez wizyty) z Twojego CRM, Excela czy Booksy." },
              { num: "02", title: "Piszemy kampanię", desc: "Tworzymy spersonalizowane SMS-y i wiadomości WhatsApp po polsku, zgodnie z RODO i PKE." },
              { num: "03", title: "Inteligentny agent AI", desc: "Pisze jak człowiek, precyzyjnie odpowiada na pytania i jest w stanie zapisać klienta bezpośrednio w Twoim kalendarzu." },
              { num: "04", title: "Obsługujesz klientów", desc: "Dostarczamy gotowe rezerwacje prosto do Twojego kalendarza. Ty tylko witasz klienta." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card className="h-full relative overflow-hidden group border-blue-500/10 hover:border-blue-500/30 bg-[#05060f]/40 backdrop-blur-sm z-10">
                  <div className="absolute top-0 right-0 pt-6 pr-6 opacity-[0.03] font-black text-8xl text-blue-500 group-hover:scale-110 group-hover:text-blue-primary group-hover:opacity-10 transition-all duration-500 select-none pointer-events-none">
                    {step.num}
                  </div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center border border-blue-500/20 mb-6 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                      <span className="font-bold text-xl text-blue-glow">{step.num}</span>
                    </div>
                    <CardTitle className="text-xl text-white font-semibold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-text-muted leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 text-center">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]" asChild>
                <Link href="#kontakt">Chcę audyt mojej bazy za darmo <ArrowRight className="ml-2 w-6 h-6" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. DLA KOGO */}
      <section className="py-24 relative bg-transparent border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Działa w każdej branży,<br/>gdzie klient wraca więcej niż raz</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, name: "Wypożyczalnie aut" },
              { icon: Sparkles, name: "SPA & Wellness" },
              { icon: HeartPulse, name: "Studia tatuażu" },
              { icon: Wrench, name: "Serwisy samochodowe" },
              { icon: Scissors, name: "Salony fryzjerskie i barberzy" },
              { icon: Stethoscope, name: "Gabinety stomatologiczne i kosmetologia" },
            ].map((Industry, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group flex items-center gap-5 p-6 rounded-2xl glass card-glow cursor-default">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-blue-500/5 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                    <Industry.icon className="w-7 h-7 text-blue-glow group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-blue-100 transition-colors leading-tight">{Industry.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. USŁUGI */}
      <section id="uslugi" className="py-24 relative border-b border-blue-500/10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Co robimy</h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Ekosystem rozwiązań AI, które odciążają Twój zespół i pomnażają zyski.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-stretch relative">
            
            {/* Gradient backdrop for center highlight */}
            <div className="hidden lg:block absolute inset-0 bg-blue-500/5 blur-[120px] rounded-[100px] -z-10" />

            {/* Karta 1 */}
            <Reveal delay={0.1}>
              <Card className="h-full flex flex-col lg:scale-95 border-blue-500/10 bg-[#05060f]/40 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                    <Workflow className="w-7 h-7 text-blue-glow" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Automatyzacje n8n</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 -mt-2">
                    <p className="text-2xl font-bold text-white">od 299 zł <span className="text-sm font-normal text-text-muted">do 2 999 zł netto</span></p>
                  </div>
                  <p className="text-base text-text-muted mb-8 leading-relaxed">Łączymy Twoje narzędzia (CRM, kalendarz, mail, WhatsApp) w jeden inteligentny system. Koniec z ręczną pracą i przepisywaniem danych.</p>
                  <ul className="space-y-4 flex-1 mb-8">
                    {['Workflow\'y n8n & Make', 'Integracje GoHighLevel', 'Dwukierunkowa synchronizacja', 'Automatyczne raportowanie'].map((item, i) => (
                      <li key={i} className="flex text-base text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button variant="outline" className="w-full text-lg h-14 border-blue-500/20 hover:bg-blue-500/10 hover:text-white" asChild>
                      <Link href="#kontakt">Umów darmową konsultację</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            {/* Karta 2 - Wyróżniona */}
            <Reveal delay={0.2}>
              <div className="relative h-full z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent rounded-2xl blur-xl" />
                <Card className="h-full flex flex-col border-blue-500/40 bg-[#0a0f1f]/60 backdrop-blur-md shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden ring-1 ring-blue-500/20 lg:transform lg:scale-105">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
                  <CardHeader className="pb-6 relative z-10 pt-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.5)] relative">
                         <div className="absolute inset-0 rounded-2xl border border-white/10" />
                         <Zap className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)] py-1 px-3">FLAGOWA USŁUGA</Badge>
                    </div>
                    <CardTitle className="text-3xl font-extrabold text-white">DBR — Reaktywacja Bazy</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <div className="mb-6 -mt-2">
                      <p className="text-2xl font-bold text-white">1 500 zł netto <span className="text-sm font-normal text-blue-200">setup (kaucja)</span></p>
                      <p className="text-xs text-blue-300 mt-1">Setup jest kaucją zwracaną w razie nieudanej kampanii (jeśli na kampanii Twój przychód nie wyniesie chociaż kosztu naszej kaucji).</p>
                    </div>
                    <p className="text-lg text-blue-50/90 mb-8 font-medium leading-relaxed">
                      Odzyskaj 8-15% nieaktywnych klientów w 14 dni. <span className="text-white bg-blue-500/20 px-1 rounded">Reszta opłaty w modelu revenue-share — płacisz tylko za zrealizowane wizyty.</span>
                    </p>
                    <ul className="space-y-4 mb-10 flex-1">
                      {['Multikanałowo: SMS + WhatsApp + Email', 'Agent AI domykający rezerwację 24/7', 'Pełna zgodność z RODO i PKE', 'Płacisz % od ROI - zero ryzyka'].map((item, i) => (
                        <li key={i} className="flex text-base text-slate-100 font-medium">
                          <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button className="w-full text-xl h-16 xl:text-lg xl:h-14 2xl:text-xl 2xl:h-16 font-semibold shadow-[0_0_30px_rgba(37,99,235,0.4)]" asChild>
                        <Link href="#kontakt">Umów darmowy audyt bazy →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>

            {/* Karta 3 */}
            <Reveal delay={0.3}>
              <Card className="h-full flex flex-col lg:scale-95 border-blue-500/10 bg-[#05060f]/40 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                    <MessageSquare className="w-7 h-7 text-blue-glow" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Agenci głosowi i tekstowi</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 -mt-2">
                    <p className="text-2xl font-bold text-white">od 2 500 zł <span className="text-sm font-normal text-text-muted">do 5 000 zł netto</span></p>
                  </div>
                  <p className="text-base text-text-muted mb-8 leading-relaxed">Voice AI odbiera telefony, gdy Ty lub Twój zespół jesteście zajęci. AI Inbox natychmiast odpowiada na zapytania z social mediów, WhatsAppa i maila. Twoja firma obsługuje klientów 24/7.</p>
                  <ul className="space-y-4 flex-1 mb-8">
                    {['Voice Agent (ElevenLabs/Vapi)', 'AI Inbox (Omnichannel)', 'Bezpośrednia rezerwacja', 'Obsługa w j. polskim i angielskim'].map((item, i) => (
                      <li key={i} className="flex text-base text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button variant="outline" className="w-full text-lg h-14 border-blue-500/20 hover:bg-blue-500/10 hover:text-white" asChild>
                      <Link href="#kontakt">Umów darmową konsultację</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 6. O NAS */}
      <section id="o-nas" className="py-24 relative overflow-hidden border-b border-blue-500/10">
        <div className="absolute inset-0 bg-[#05060f]/30 backdrop-blur-sm" />
        <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <Reveal delay={0}>
              <div className="relative">
                <Badge className="mb-6 bg-blue-500/10 text-blue-glow border-blue-500/20">Dlaczego my?</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">AUTOMO AI — automatyzacja,<br/>która faktycznie zarabia</h2>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
                  <p>
                    Pomagamy firmom w Trójmieście i całej Polsce przestać tracić klientów i pieniądze przez ręczną pracę. Nie sprzedajemy &quot;magii AI&quot;, skomplikowanych chatbotów z którymi nikt nie chce pisać — <span className="text-white">budujemy konkretne systemy, które generują przewidywalną sprzedaż.</span>
                  </p>
                  <p>
                    Specjalizujemy się w Database Reactivation, bo to najszybszy sposób na zwrot z inwestycji w technologię. W 14 dni masz pieniądze z powrotem w kasie, zanim w ogóle zapłacisz nam pierwszą fakturę.
                  </p>
                  <p className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-50 mt-8">
                    <span className="font-semibold text-blue-400 block mb-1">Model Win-Win</span>
                    Działamy w modelu performance — większość naszych klientów zaczyna od 0 zł za setup systemu i płaci nam tylko umówiony percentage (% revenue-share) od wygenerowanych przez nas przychodów.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Globe2, text: "100% Polski rynek" },
                    { icon: Clock, text: "< 48h Wdrożenie" },
                    { icon: Lock, text: "RODO i PKE" },
                    { icon: Workflow, text: "Eksperci n8n" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-5 rounded-xl border border-slate-800 bg-[#0a0f1f]/80 backdrop-blur-sm text-center">
                      <stat.icon className="w-6 h-6 text-blue-500 mb-3" />
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide leading-tight">{stat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Dashboard Mockup / Stats Visual */}
            <Reveal delay={0.3}>
              <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
                {/* Glow rings */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-blue-400/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                
                <div className="relative glass rounded-3xl overflow-hidden p-8 isolate">
                   
                   <div className="flex items-center justify-between mb-10">
                     <div>
                       <h4 className="text-white font-semibold text-xl">Wyniki Kampanii</h4>
                       <p className="text-sm text-slate-400">Ostatnie 14 dni - Salon SPA &quot;Olimpia&quot;</p>
                     </div>
                     <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                       <TrendingUp className="w-6 h-6 text-blue-400" />
                     </div>
                   </div>

                   <div className="space-y-6 mb-10">
                     <div>
                       <div className="flex justify-between text-sm mb-2">
                         <span className="text-slate-300">Wysłane wiadomości</span>
                         <span className="text-white font-medium">854</span>
                       </div>
                       <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-slate-600 w-[100%]" />
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-sm mb-2">
                         <span className="text-slate-300">Pozytywne odpowiedzi</span>
                         <span className="text-white font-medium">152</span>
                       </div>
                       <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] w-[18%]" />
                       </div>
                     </div>
                     <div>
                       <div className="flex justify-between text-sm mb-2">
                         <span className="text-white font-semibold">Umówione wizyty (8.5%)</span>
                         <span className="text-green-400 font-bold">72</span>
                       </div>
                       <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] w-[8.5%]" />
                       </div>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/60 p-5 rounded-2xl border border-blue-500/20 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                       <div className="absolute -right-4 -bottom-4 opacity-5">
                          <Banknote className="w-24 h-24" />
                       </div>
                       <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Szacowany Przychód</p>
                       <motion.p 
                         animate={{ 
                           scale: [1, 1.05, 1.05, 1.05, 1.05, 1.05, 1],
                           x: [0, -3, 3, -3, 3, -2, 0],
                           rotate: [0, -2, 2, -2, 2, -1, 0],
                           color: ["#ffffff", "#60a5fa", "#93c5fd", "#93c5fd", "#60a5fa", "#60a5fa", "#ffffff"],
                           textShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 20px rgba(59,130,246,0.8)", "0px 0px 25px rgba(59,130,246,1)", "0px 0px 25px rgba(59,130,246,1)", "0px 0px 20px rgba(59,130,246,0.8)", "0px 0px 20px rgba(59,130,246,0.8)", "0px 0px 0px rgba(59,130,246,0)"]
                         }}
                         transition={{ 
                           duration: 1.5, 
                           repeat: Infinity, 
                           ease: "easeInOut" 
                         }}
                         className="text-3xl font-bold tracking-tight inline-block origin-center"
                       >
                         36 500<span className="text-lg text-slate-400 ml-1">zł netto</span>
                       </motion.p>
                     </div>
                     <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700">
                       <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Twój Koszt</p>
                       <p className="text-3xl font-bold text-slate-300 tracking-tight">1500<span className="text-lg text-slate-500 ml-1">zł netto</span></p>
                       <p className="text-[10px] text-slate-400 mt-2 leading-tight">Jedyny koszt na początek to kaucja 1500 zł netto. Jeśli kampania nie wygeneruje wyników, zwracamy 100% kaucji.</p>
                     </div>
                   </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 6.5. STRONY INTNERNETOWE */}
      <section className="py-24 relative bg-transparent border-b border-blue-500/10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <Badge className="mb-6 bg-blue-500/10 text-blue-glow border-blue-500/20">Nowość</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Nowoczesne strony internetowe<br/>które sprzedają</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Zwykła wizytówka to za mało. Tworzymy nowoczesne i szybkie strony internetowe z wbudowanymi systemami rezerwacji, zoptymalizowane pod konwersję i połączone z naszymi agentami AI.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    "Unikalny, nowoczesny design (taki jaki widzisz tutaj)",
                    "Ultraszybkie ładowanie i optymalizacja pod SEO",
                    "Zintegrowany panel do zbierania leadów i rezerwacji",
                    "Aplikacje webowe w zaledwie kilka dni"
                  ].map((feature, i) => (
                    <li key={i} className="flex text-base text-slate-200 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6 mb-10 pt-4 border-t border-slate-800">
                  <div className="flex flex-col">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Cena inwestycji</p>
                    <p className="text-2xl font-bold text-white">od 2 000 zł <span className="text-sm font-normal text-slate-400">do 5 000 zł netto</span></p>
                  </div>
                </div>
                <Button size="lg" asChild className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  <Link href="#kontakt">Zapytaj o wycenę strony</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative isolate max-w-lg mx-auto">
                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
                <div className="glass rounded-2xl p-2 border border-blue-500/20 shadow-2xl overflow-hidden relative">
                  <div className="bg-[#0a0f1f] rounded-xl overflow-hidden border border-slate-800 h-[400px] flex flex-col relative z-20">
                    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800 bg-[#05060f]">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <div className="ml-4 text-xs text-slate-500 flex-1 text-center font-mono bg-slate-900 rounded-md py-1 px-2 mx-10 border border-slate-800">twojafirma.pl</div>
                    </div>
                    <div className="flex-1 p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0f1f] to-black">
                      <div className="w-2/3 h-8 bg-slate-800/80 rounded-lg mb-6 backdrop-blur-sm" />
                      <div className="w-full h-32 bg-blue-600/10 border border-blue-500/20 rounded-xl mb-4 backdrop-blur-md relative overflow-hidden">
                         <div className="absolute top-4 left-4 w-1/3 h-4 bg-blue-500/20 rounded" />
                         <div className="absolute bottom-4 left-4 right-4 h-12 bg-blue-500/10 rounded flex items-center px-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30" />
                         </div>
                      </div>
                      <div className="w-3/4 h-4 bg-slate-800/80 rounded-md mb-2" />
                      <div className="w-1/2 h-4 bg-slate-800/80 rounded-md mb-8" />
                      <div className="flex gap-4">
                        <div className="w-32 h-10 bg-blue-600 rounded-lg flex items-center justify-center p-2"><div className="w-16 h-2 bg-white/50 rounded-full" /></div>
                        <div className="w-32 h-10 bg-slate-800 rounded-lg flex items-center justify-center p-2"><div className="w-16 h-2 bg-slate-500/50 rounded-full" /></div>
                      </div>
                      <div className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-24 relative bg-transparent border-b border-blue-500/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Najczęstsze pytania</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-[#05060f]/60 rounded-2xl border border-blue-500/10 p-2 sm:p-4">
              {[
                { 
                  q: "Ile kosztuje usługa DBR?", 
                  a: "Preferujemy pracę w modelu revenue-share — płacisz nam wyłącznie z góry ustalony procent od klientów, którzy faktycznie pojawili się na wizycie. Setup systemu i prowadzenie kampanii jest wtedy po naszej stronie (0 zł z góry). Jeśli wolisz stałe koszty, oferujemy model flat fee (2-3k PLN netto) + niski bonus za wynik. Wybór modelu zależy od Ciebie ustalamy go na darmowej konsultacji." 
                },
                { 
                  q: "Jak szybko zobaczę pierwsze umówione wizyty?", 
                  a: "Samego agenta wdrażamy w maksymalnie 48 godzin od otrzymania od Ciebie informacji. Pierwsze umówione wizyty pojawiają się w systemie często już po 2-3 godzinach od kliknięcia \"START\" kampanii. Pełny cykl dla całej bazy trwa około 14 dni, by nie przeciążyć Twoich mocy przerobowych." 
                },
                { 
                  q: "Czy wysyłanie takich wiadomości to nie jest SPAM? Co z RODO?", 
                  a: "Jesteśmy tu w 100% bezpieczni. Komunikujemy się WYŁĄCZNIE z Twoimi obecnymi/dawnymi klientami. Opieramy się na tzw. prawie do komunikacji bezpośredniej z klientem (uzasadniony interes np. art. 398 PKE, zależy od formy zgody przy pierwszej wizycie). Oczywiście wdrożony jest natychmiastowy mechanizm Opt-Out." 
                },
                { 
                  q: "Przez jakie kanały wysyłacie wiadomości?", 
                  a: "Korzystamy ze strategii wielokanałowej. Zależnie od jakości Twojej bazy, używamy SMS, oficjalnego API WhatsApp Business oraz maili z dedykowanych, rozgrzanych domen ochronnych. Jeśli jeden kanał milczy, AI wznawia kontakt innym po 2 dniach." 
                },
                { 
                  q: "Skąd AI wie, co ma odpowiedzieć klientowi? Zmyśla?", 
                  a: "Absolutnie nie. Agenci AI są zamknięci i wyuczeni wyłącznie na Twoich materiałach i cenniku. Przed startem wypełniamy z Tobą prosty kwestionariusz dotyczący oferty, cen, godzin otwarcia i polityki odwoływania wizyt. Agent wie tylko to, na co mu pozwoliliśmy. Jeśli dostanie trudne pytanie, odsyła bezpośrednio do Ciebie." 
                },
                { 
                  q: "Co jeśli ja chcę sam odpisać klientowi, a nie żeby robiło to bot?", 
                  a: "Cały system wspiera Handoff (przekazanie człowiekowi). Jeśli klient napisze coś niestandardowego albo po prostu wolisz przejąć rozmowę, AI natychmiast się wyłącza, a Ty odpisujesz bezpośrednio ze specjalnej dedykowanej skrzynki lub wprost w telefonie." 
                },
                { 
                  q: "Dla jakich branż to rozwiązanie działa najlepiej?", 
                  a: "Jedynym warunkiem jest to, aby w twojej branży LTV (Lifetime Value) pozwalało na powrót klienta, a koszyk nie wynosił 20zł netto. Najlepsze wyniki notujemy u: wypożyczalni aut, serwisów samochodowych, gabinetów stomatologicznych i medycyny estetycznej, drogich salonów beauty (włosy/SPA) oraz studiów tatuażu." 
                },
                { 
                  q: "Pracuję na Booksy/Versum, a dane mam w Excelu. Czy muszę to zmieniać?", 
                  a: "Nie. W modelu DBR pracujemy z listą (np. wyciągiem w CSV/Excel), którą nam prześlesz i formatujemy ją po naszej stronie. Agent automatycznie odpytuje kalendarz lub zapisuje wstępnie termin, my manualnie (lub przez webhooka) wprowadzamy go do Twojego systemu. Ty po prostu widzisz nową wizytę u siebie." 
                },
                { 
                  q: "Czy zajmujecie się również tworzeniem stron internetowych?", 
                  a: "Tak. Tworzymy nowoczesne, bardzo szybkie i zoptymalizowane pod konwersję strony internetowe. Co ważne, możemy je od razu zintegrować z naszymi rozwiązaniami AI (czatboty, automatyzacje, systemy rezerwacji) by stworzyć spójny ekosystem do pozyskiwania leadów." 
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="px-4">
                  <AccordionTrigger className="text-left text-[15px] sm:text-base font-semibold text-slate-200 hover:text-blue-400 py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-400 leading-relaxed text-sm sm:text-base pb-6 pr-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 8. UMÓW WIZYTĘ (Formularz) */}
      <section id="kontakt" className="py-24 relative overflow-hidden bg-transparent">
        {/* Glow behind form */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] -translate-y-1/2 pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16 lg:mb-20">
              <Badge className="mb-4 bg-blue-500/10 text-blue-glow border-blue-500/20">Sprawdźmy liczby</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Oblicz ile <span className="text-gradient drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">gotówki</span><br className="hidden sm:block"/> odzyskasz z bazy.</h2>
              <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">15-minutowy audyt online. 100% merytoryki.<br/>Bez agresywnych sprzedawców i zobowiązań.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 glass shadow-[0_0_80px_rgba(59,130,246,0.05)] rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            
            {/* Lewa kolumna - korzysci */}
            <Reveal delay={0.2} className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Co wyniesiesz z rozmowy?</h3>
                <ul className="space-y-6 mb-12">
                  {[
                    "Szacunkowy twardy potencjał (w tys. PLN) jaki można wygenerować w ciągu 14 dni z Twojej bazy.",
                    "Szkic flow - pokażemy Ci jak AI będzie rozmawiać z Twoimi klientami aby nie brzmieć sztucznie.",
                    "Wycenę prowizji w modelu WIN-WIN (0 zł setupu)",
                  ].map((benefit, i) => (
                    <li key={i} className="flex text-base text-slate-300 items-start">
                      <div className="bg-blue-500/10 border border-blue-500/30 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4 mt-0.5">
                         <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex shrink-0 items-center justify-center font-bold text-white text-xs">AI</div>
                  <div>
                    <p className="text-white font-medium">Masz powyżej 500 klientów w bazie?</p>
                    <p className="text-sm text-slate-400 mt-0.5">Bazy tej wielkości wykazują najwyższą skuteczność.</p>
                  </div>
                </div>
                <div className="h-px bg-slate-800 w-full" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-full flex shrink-0 items-center justify-center border border-blue-500/30">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Zero ryzyka finansowego.</p>
                    <p className="text-sm text-slate-400 mt-0.5 flex-1">Jedyny koszt na początek to 1500 zł netto kaucji. Jeśli kampania nie wygeneruje przychodów przekraczających jej koszt, zwracamy 100% kaucji.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Prawa kolumna - formularz */}
            <Reveal delay={0.4} className="lg:col-span-7">
              <div className="glass rounded-2xl p-6 sm:p-8 relative isolate">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full -z-10" />
                
                {formState === "success" ? (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-12"
                   >
                     <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 mb-8 mx-auto relative isolate">
                       <div className="absolute inset-0 rounded-full border border-green-400 animate-ping opacity-20" />
                       <CheckCircle2 className="w-12 h-12 text-green-400" />
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-3">Zgłoszenie przyjęte!</h3>
                     <p className="text-slate-400 mb-8 max-w-sm text-lg">Skontaktujemy się z Tobą telefonicznie w ciągu kilkunastu minut na podany numer.</p>
                     <Button
                       variant="outline"
                       onClick={() => setFormState("idle")}
                       className="border-slate-700 text-slate-300 hover:text-white"
                     >
                       Nowe zgłoszenie
                     </Button>
                   </motion.div>
                ) : formState === "error" ? (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-12"
                   >
                     <h3 className="text-2xl font-bold text-white mb-3">Coś poszło nie tak</h3>
                     <p className="text-slate-400 mb-8 max-w-sm">Spróbuj ponownie lub napisz bezpośrednio na <a href="mailto:biuro@automoai.pl" className="text-blue-400 hover:underline">biuro@automoai.pl</a></p>
                     <Button variant="outline" onClick={() => setFormState("idle")} className="border-slate-700 text-slate-300 hover:text-white">Spróbuj ponownie</Button>
                   </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Imię i nazwisko *</label>
                        <Input id="name" name="name" required placeholder="Jan Kowalski" className="h-12 bg-black/40 border-slate-800 focus-visible:ring-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">Numer telefonu *</label>
                        <Input id="phone" name="phone" required placeholder="+48 000 000 000" type="tel" className="h-12 bg-black/40 border-slate-800 focus-visible:ring-blue-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Biznesowy E-mail *</label>
                      <Input id="email" name="email" required placeholder="kontakt@twojafirma.pl" type="email" className="h-12 bg-black/40 border-slate-800 focus-visible:ring-blue-500" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-300">Nazwa firmy / Strona www</label>
                        <Input id="company" name="company" placeholder="www.twojafirma.pl" className="h-12 bg-black/40 border-slate-800 focus-visible:ring-blue-500" />
                      </div>
                      <div className="space-y-2 flex flex-col justify-end">
                        <label htmlFor="industry" className="text-sm font-medium text-slate-300">W czym działasz?</label>
                        <select
                          id="industry"
                          name="industry"
                          className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                        >
                          <option value="auto">Wypożyczalnia aut</option>
                          <option value="spa">SPA & Wellness</option>
                          <option value="salon">Salon fryzjerski / Beauty / Kosmetologia</option>
                          <option value="serwis">Serwis samochodowy</option>
                          <option value="stomatologia">Stomatologia / Medycyna</option>
                          <option value="inna">Inna branża</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 pb-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-300">Która usługa Cię najbardziej interesuje?</label>
                      <select
                          id="service"
                          name="service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                        >
                          <option value="dbr">DBR - Reaktywacja Bazy (Umówienie na %)</option>
                          <option value="web">Strona internetowa zintegrowana z AI</option>
                          <option value="voice">Agenci Głosowi / Tekstowi AI</option>
                          <option value="n8n">Automatyzacje n8n / Make</option>
                          <option value="inne">Chcę omówić kilka usług</option>
                          <option value="pomoc">Nie wiem co mogę ulepszyć, potrzebuję pomocy</option>
                        </select>
                    </div>

                    {selectedService === "dbr" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="db-size" className="text-sm font-medium text-slate-300">Szacowana wielkość Twojej bazy klientów (np. w Booksy)?</label>
                        <select 
                            id="db-size"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="under-500">Mniej niż 500 kontaktów</option>
                            <option value="500-2000">500 - 2,000 kontaktów</option>
                            <option value="2000-5000">2,000 - 5,000 kontaktów</option>
                            <option value="over-5000">Powyżej 5,000 kontaktów</option>
                            <option value="idk">Nie wiem / zaczynamy od zera</option>
                          </select>
                      </div>
                    )}

                    {selectedService === "web" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="web-status" className="text-sm font-medium text-slate-300">Jaki jest status Twojej obecnej strony?</label>
                        <select 
                            id="web-status"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="no-website">Nie mam jeszcze strony</option>
                            <option value="needs-refresh">Mam stronę, ale wymaga odświeżenia</option>
                            <option value="needs-ai">Mam świetną stronę, potrzebuję integracji AI</option>
                          </select>
                      </div>
                    )}

                    {selectedService === "voice" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="voice-volume" className="text-sm font-medium text-slate-300">Ile połączeń / zapytań obsługujesz miesięcznie?</label>
                        <select 
                            id="voice-volume"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="under-100">Mniej niż 100</option>
                            <option value="100-500">100 - 500</option>
                            <option value="over-500">Powyżej 500</option>
                          </select>
                      </div>
                    )}

                    {selectedService === "n8n" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="automation-process" className="text-sm font-medium text-slate-300">Ile godzin tygodniowo tracisz na powtarzalne taski?</label>
                        <select 
                            id="automation-process"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="1-5">1-5 godzin</option>
                            <option value="5-10">5-10 godzin</option>
                            <option value="over-10">Powyżej 10 godzin</option>
                          </select>
                      </div>
                    )}

                    {selectedService === "inne" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="team-size" className="text-sm font-medium text-slate-300">Jak duży jest Twój zespół?</label>
                        <select 
                            id="team-size"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="1-3">1-3 osoby</option>
                            <option value="4-10">4-10 osób</option>
                            <option value="over-10">Powyżej 10 osób</option>
                          </select>
                      </div>
                    )}

                    {selectedService === "pomoc" && (
                      <div className="space-y-2 pb-4">
                        <label htmlFor="main-challenge" className="text-sm font-medium text-slate-300">Jaki jest Twoim zdaniem Twój największy problem?</label>
                        <select 
                            id="main-challenge"
                            className="flex h-12 w-full rounded-md border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors"
                          >
                            <option value="sales">Za mało klientów / niska sprzedaż</option>
                            <option value="operations">Brak czasu / chaos w firmie</option>
                            <option value="costs">Za wysokie koszty operacyjne</option>
                            <option value="other">Inne / nie jestem pewien</option>
                          </select>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full text-xl font-bold py-8 h-16 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] group border-t border-blue-400/50"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <RefreshCw className="w-6 h-6 mr-2 animate-spin" />
                      ) : (
                        "ZAMÓW BEZPŁATNY AUDYT"
                      )}
                      {formState !== "submitting" && <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                    <p className="text-center text-[11px] text-slate-500 mt-4 leading-tight">Wysyłając formularz zgadzasz się na jednorazowy kontakt w celu umówienia spotkania informacyjnego. Twoje dane nigdzie nie trafią, nienawidzimy spamu równie mocno co ty.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
