import { LegalPageLayout } from "@/components/legal-page-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin Usług | AUTOMO AI",
  description: "Warunki świadczenia usług automatyzacji AI, Database Reactivation i agentów głosowych przez AUTOMO AI.",
  alternates: {
    canonical: "https://automoai.pl/regulamin"
  }
}

export default function Regulamin() {
  const sections = [
    { id: "postanowienia-ogolne", title: "§ 1. Postanowienia ogólne" },
    { id: "modele", title: "§ 2. Modele świadczenia usług i płatności" },
    { id: "odpowiedzialnosc-klienta", title: "§ 3. Zakres odpowiedzialności Klienta" },
    { id: "odpowiedzialnosc-uslugodawcy", title: "§ 4. Zakres odpowiedzialności Usługodawcy" },
    { id: "poufnosc", title: "§ 5. Poufność" },
    { id: "wlasnosc-intelektualna", title: "§ 6. Własność intelektualna" },
    { id: "wypowiedzenie", title: "§ 7. Wypowiedzenie i rozwiązanie umowy" },
    { id: "postanowienia-koncowe", title: "§ 8. Postanowienia końcowe" },
  ]

  return (
    <LegalPageLayout
      title="Regulamin Usług"
      subtitle="Zasady współpracy — przejrzyście i po ludzku."
      lastUpdated="13 maja 2026"
      breadcrumbName="Regulamin Usług"
      sections={sections}
    >
      <div className="space-y-12 text-slate-300 leading-relaxed max-w-none">
        
        <section id="postanowienia-ogolne" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 1. Postanowienia ogólne
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Niniejszy regulamin określa zasady świadczenia usług przez AUTOMO AI (&quot;Usługodawca&quot;) na rzecz podmiotów gospodarczych (&quot;Klient&quot;).</li>
            <li>Usługodawca świadczy usługi z zakresu: automatyzacji procesów biznesowych (n8n), kampanii Database Reactivation (DBR), głosowych i tekstowych agentów AI, konfiguracji systemów CRM.</li>
            <li>Świadczenie usług następuje na podstawie indywidualnej umowy (zlecenia lub abonamentowej) podpisanej przez obie strony. Niniejszy regulamin stanowi jej integralną część, chyba że umowa indywidualna stanowi inaczej.</li>
            <li><strong>Regulamin dotyczy wyłącznie klientów B2B (przedsiębiorców).</strong> Usługodawca nie świadczy usług konsumentom w rozumieniu art. 22¹ KC.</li>
          </ol>
        </section>

        <section id="modele" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 2. Modele świadczenia usług i płatności
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-[#0a0f1f] rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Model 1 — Revenue Share (DBR)</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Klient przekazuje Usługodawcy bazę nieaktywnych klientów</li>
                <li>Usługodawca realizuje kampanię na własny koszt operacyjny</li>
                <li>Wynagrodzenie Usługodawcy stanowi [X]% wartości przychodów wygenerowanych przez kampanię (umówione indywidualnie)</li>
                <li>Rozliczenie miesięcznie, na podstawie raportu i faktury</li>
                <li><strong>Brak minimalnej gwarancji</strong> — wynagrodzenie uzależnione od wyników</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0f1f] rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Model 2 — Setup Fee + Abonament</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Jednorazowy setup fee płatny z góry przed rozpoczęciem prac</li>
                <li>Miesięczny abonament za utrzymanie i obsługę systemu</li>
                <li>Minimalny okres umowy: 6 miesięcy (po upływie — miesięczny okres wypowiedzenia)</li>
                <li>Faktury wystawiane do 5. dnia każdego miesiąca, płatne w ciągu 14 dni</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0f1f] rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Model 3 — Per Spotkanie / Per Lead</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Wynagrodzenie za każde umówione spotkanie lub kwalifikowany lead</li>
                <li>Stawki i definicje &quot;kwalifikowanego leadu&quot; określone w umowie indywidualnej</li>
                <li>Rozliczenie tygodniowe lub miesięcznie</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="odpowiedzialnosc-klienta" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 3. Zakres odpowiedzialności Klienta
          </h2>
          <p className="mb-4">Klient zobowiązuje się do:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Dostarczenia bazy danych (w formacie CSV/XLSX/API) zawierającej <strong>wyłącznie dane własnych klientów</strong> — osób, które posiadają historię relacji z firmą Klienta
            </li>
            <li>Zapewnienia, że dane są przetwarzane zgodnie z RODO (Klient jest Administratorem danych)</li>
            <li>Podpisania Umowy Powierzenia Przetwarzania Danych przed startem kampanii</li>
            <li>Poinformowania Usługodawcy o wszelkich ograniczeniach dotyczących kontaktu z klientami (np. klienci, którzy złożyli sprzeciw)</li>
            <li>Terminowego opłacania faktur</li>
          </ul>
        </section>

        <section id="odpowiedzialnosc-uslugodawcy" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 4. Zakres odpowiedzialności Usługodawcy
          </h2>
          <p className="mb-4">Usługodawca zobowiązuje się do:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Realizacji kampanii zgodnie z uzgodnionym planem i harmonogramem</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Przestrzegania przepisów PKE i RODO przy realizacji kampanii</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Zapewnienia systemu opt-out działającego w czasie rzeczywistym</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Dostarczania miesięcznych raportów z wynikami kampanii</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Zachowania poufności danych Klienta i jego klientów</span>
            </li>
          </ul>
          
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 text-sm">
            <strong className="text-white block mb-1">Ograniczenie odpowiedzialności:</strong> 
            Usługodawca nie odpowiada za wyniki kampanii w zakresie przekraczającym sumę opłat uiszczonych przez Klienta w ciągu ostatnich 3 miesięcy. Usługodawca nie gwarantuje określonych wyników reaktywacji — liczby podawane w materiałach marketingowych są danymi historycznymi z poprzednich kampanii.
          </div>
        </section>

        <section id="poufnosc" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 5. Poufność
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obie strony zobowiązują się do zachowania poufności wszelkich informacji wymienionych w trakcie współpracy przez okres trwania umowy + 3 lata po jej zakończeniu.</li>
            <li>Klient wyraża zgodę na umieszczenie nazwy firmy i branży (bez szczegółów finansowych) w portfolio Usługodawcy, chyba że pisemnie zastrzeże inaczej.</li>
          </ul>
        </section>

        <section id="wlasnosc-intelektualna" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 6. Własność intelektualna
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wszelkie workflow&apos;y, skrypty, prompty AI i konfiguracje stworzone na zlecenie Klienta <strong>stają się własnością Klienta</strong> po uregulowaniu wszystkich należności.</li>
            <li>Usługodawca zachowuje prawo do korzystania z ogólnych rozwiązań technicznych (bez danych Klienta) do świadczenia usług innym klientom.</li>
          </ul>
        </section>

        <section id="wypowiedzenie" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 7. Wypowiedzenie i rozwiązanie umowy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Umowy abonamentowe:</strong> wypowiedzenie z 1-miesięcznym wyprzedzeniem po minimalnym okresie 6 miesięcy</li>
            <li><strong>Umowy revenue-share:</strong> każda ze stron może wypowiedzieć umowę z 2-tygodniowym wyprzedzeniem po zakończeniu bieżącej kampanii</li>
            <li><strong>Rozwiązanie ze skutkiem natychmiastowym:</strong> możliwe w przypadku rażącego naruszenia regulaminu lub zalegania z płatnością powyżej 30 dni</li>
          </ul>
        </section>

        <section id="postanowienia-koncowe" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 8. Postanowienia końcowe
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>W sprawach nieuregulowanych niniejszym regulaminem stosuje się przepisy Kodeksu Cywilnego.</li>
            <li>Sądem właściwym dla sporów jest sąd właściwy dla siedziby Usługodawcy (Gdańsk), chyba że strony uzgodnią mediację.</li>
            <li>Regulamin może ulec zmianie — Klienci zostaną poinformowani z 30-dniowym wyprzedzeniem.</li>
          </ul>
          
          <div className="pt-4 border-t border-slate-800 text-sm text-slate-500 font-mono">
            Wersja regulaminu: 1.0 | Data wejścia w życie: 13.05.2026
          </div>
        </section>

      </div>
    </LegalPageLayout>
  )
}
