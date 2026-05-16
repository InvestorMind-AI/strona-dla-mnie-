import { LegalPageLayout } from "@/components/legal-page-layout"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "RODO & PKE Compliance | AUTOMO AI",
  description: "Jak zapewniamy zgodność kampanii Database Reactivation z RODO i art. 398 Prawa Komunikacji Elektronicznej.",
  alternates: {
    canonical: "https://automoai.pl/rodo-pke"
  }
}

export default function RodoPke() {
  const sections = [
    { id: "dlaczego-legalna", title: "1. Dlaczego DBR jest legalna dla Twoich klientów" },
    { id: "jak-to-wyglada", title: "2. Jak to wygląda w naszych kampaniach DBR" },
    { id: "co-zawiera-uppd", title: "3. Co zawiera Umowa Powierzenia (UPPD)" },
    { id: "co-nie-jest", title: "4. Co NIE jest objęte wyjątkiem PKE" },
    { id: "pytania", title: "5. Pytania i opinie prawne" },
  ]

  return (
    <LegalPageLayout
      title="RODO & PKE Compliance"
      subtitle="Database Reactivation jest w 100% legalna — jeśli robisz ją z nami. Oto dlaczego."
      lastUpdated="13 maja 2026"
      breadcrumbName="RODO & PKE Compliance"
      sections={sections}
    >
      <div className="flex flex-wrap gap-3 mb-10 -mt-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Zgodne z RODO
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Zgodne z PKE art. 398
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Opt-out w każdej wiadomości
        </span>
      </div>

      <div className="space-y-12 text-slate-300 leading-relaxed max-w-none">
        
        <section id="dlaczego-legalna" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            1. Dlaczego DBR jest legalna dla Twoich klientów
          </h2>
          <p className="mb-4">
            Polska ustawa Prawo Komunikacji Elektronicznej (PKE), art. 398 ust. 2, przewiduje wyraźny wyjątek od zakazu niezamówionych komunikatów handlowych: możesz wysłać wiadomość marketingową do klienta bez dodatkowej zgody, jeśli:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Posiada on już Twoje produkty lub usługi (jest Twoim klientem)</li>
            <li>Komunikacja dotyczy podobnych produktów/usług własnych</li>
            <li>Klient miał możliwość sprzeciwu i jej nie wyraził</li>
            <li>Każda wiadomość zawiera możliwość rezygnacji (opt-out)</li>
          </ul>
          
          <div className="p-6 bg-[#0a0f1f] rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full" />
            <h3 className="text-white font-semibold mb-2 relative z-10">Co to oznacza w praktyce?</h3>
            <p className="text-blue-200 relative z-10">
              Klient, który był u Ciebie na wizycie, w serwisie, na wypożyczeniu auta — możesz do niego napisać z ofertą. Nie musisz zbierać nowej zgody marketingowej.
            </p>
          </div>
        </section>

        <section id="jak-to-wyglada" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            2. Jak to wygląda w naszych kampaniach DBR
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/20 bg-[#0a0f1f]">
              <thead>
                <tr className="bg-blue-950/40 text-white">
                  <th className="py-4 px-6 font-semibold border-b border-blue-500/20 w-1/2">Co robimy</th>
                  <th className="py-4 px-6 font-semibold border-b border-blue-500/20 w-1/2">Co to znaczy dla Ciebie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Komunikujemy się tylko z istniejącymi klientami
                  </td>
                  <td className="py-4 px-6 text-slate-400">Nie trafiamy do obcych — zero ryzyka SPAM</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Każda wiadomość zawiera &quot;Odpowiedz STOP żeby zrezygnować&quot;
                  </td>
                  <td className="py-4 px-6 text-slate-400">Spełniamy wymóg opt-out z PKE art. 398 ust. 3</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Nie kontaktujemy ponownie po opt-out
                  </td>
                  <td className="py-4 px-6 text-slate-400">Lista exclusion aktualizowana w czasie rzeczywistym</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Przechowujemy dane max 30 dni po kampanii
                  </td>
                  <td className="py-4 px-6 text-slate-400">Minimalizacja danych zgodnie z RODO art. 5</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Podpisujemy Umowę Powierzenia (UPPD)
                  </td>
                  <td className="py-4 px-6 text-slate-400">Jesteś prawnie chroniony — my jesteśmy procesorem</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-200 flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Baza jest u Ciebie, my tylko wykonujemy kampanię
                  </td>
                  <td className="py-4 px-6 text-slate-400">Nie przechowujemy danych Twoich klientów długoterminowo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="co-zawiera-uppd" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            3. Co zawiera Umowa Powierzenia Przetwarzania Danych (UPPD)
          </h2>
          <p className="mb-4">
            Przed uruchomieniem każdej kampanii DBR podpisujemy z Tobą UPPD zgodnie z art. 28 RODO. Umowa określa:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Cel i zakres przetwarzania (tylko DBR campaign)</li>
            <li>Czas przetwarzania (czas kampanii + 30 dni buffer)</li>
            <li>Środki bezpieczeństwa, które stosujemy</li>
            <li>Twoje prawa jako Administratora (inspekcja, audyt)</li>
            <li>Nasze obowiązki jako Podmiotu Przetwarzającego</li>
          </ul>
          <p className="text-sm text-slate-400">Na żądanie dostarczamy wzór UPPD przed podpisaniem umowy.</p>
        </section>

        <section id="co-nie-jest" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            4. Co NIE jest objęte wyjątkiem PKE
          </h2>
          <p className="mb-4 text-slate-400">Uczciwie informujemy, czego NIE robimy:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-400/80 text-lg leading-none mt-0.5">✖</span>
              <span>Nie kupujemy/scrape&apos;ujemy danych do cold outreach <span className="text-slate-500 text-sm">(to wymagałoby odrębnej zgody)</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400/80 text-lg leading-none mt-0.5">✖</span>
              <span>Nie kontaktujemy potencjalnych klientów bez wcześniejszej relacji z Twoją firmą</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400/80 text-lg leading-none mt-0.5">✖</span>
              <span>Nie wysyłamy wiadomości bez możliwości rezygnacji</span>
            </li>
          </ul>
        </section>

        <section id="pytania" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            5. Pytania i opinie prawne
          </h2>
          <p className="mb-4">
            Jeśli Twój prawnik ma pytania dotyczące compliance — zapraszamy do kontaktu. Możemy dostarczyć:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Wzór UPPD do weryfikacji</li>
            <li>Treść szablonów wiadomości DBR do oceny prawnej</li>
            <li>Dokumentację techniczną systemu opt-out</li>
          </ul>
          <p className="mb-8">
            Email: <a href="mailto:biuro@automoai.pl" className="text-blue-400 hover:text-blue-300">biuro@automoai.pl</a>
          </p>
          
          <div className="pt-8 border-t border-slate-800">
            <Link 
              href="/#kontakt" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Masz pytania o legalność? Umów 20-min call z nami →
            </Link>
          </div>
        </section>

      </div>
    </LegalPageLayout>
  )
}
