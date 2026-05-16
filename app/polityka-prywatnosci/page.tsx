import { LegalPageLayout } from "@/components/legal-page-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności | AUTOMO AI",
  description: "Zasady przetwarzania danych osobowych przez AUTOMO AI. Dowiedz się, jak chronimy Twoje dane zgodnie z RODO.",
  alternates: {
    canonical: "https://automoai.pl/polityka-prywatnosci"
  }
}

export default function PolitykaPrywatnosci() {
  const sections = [
    { id: "administrator", title: "§ 1. Administrator Danych" },
    { id: "jakie-dane", title: "§ 2. Jakie dane zbieramy i skąd" },
    { id: "jak-dlugo", title: "§ 3. Jak długo przechowujemy dane" },
    { id: "komu-przekazujemy", title: "§ 4. Komu przekazujemy dane" },
    { id: "twoje-prawa", title: "§ 5. Twoje prawa (RODO)" },
    { id: "cookies", title: "§ 6. Pliki cookies" },
    { id: "bezpieczenstwo", title: "§ 7. Bezpieczeństwo" },
    { id: "zmiany", title: "§ 8. Zmiany polityki" },
  ]

  return (
    <LegalPageLayout
      title="Polityka Prywatności"
      subtitle="Dowiedz się, jak zbieramy, przetwarzamy i chronimy Twoje dane osobowe."
      lastUpdated="13 maja 2026"
      breadcrumbName="Polityka Prywatności"
      sections={sections}
    >
      <div className="space-y-12 text-slate-300 leading-relaxed max-w-none">
        
        <section id="administrator" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 1. Administrator Danych
          </h2>
          <p>
            Administratorem Twoich danych osobowych jest <strong>AUTOMO AI</strong>, działająca na terenie Trójmiasta, Polska. Kontakt w sprawach danych osobowych: <a href="mailto:biuro@automoai.pl" className="text-blue-400 hover:text-blue-300 transition-colors">biuro@automoai.pl</a> lub pisemnie na adres siedziby.
          </p>
        </section>

        <section id="jakie-dane" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 2. Jakie dane zbieramy i skąd
          </h2>
          <p className="mb-4">Zbieramy dane w następujących przypadkach:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Formularz kontaktowy / konsultacja</strong> — imię, nazwisko, email, telefon, nazwa firmy, branża, treść wiadomości.
              <br/><span className="text-sm text-slate-400">Cel: odpowiedź na zapytanie i ewentualne nawiązanie współpracy. Podstawa: art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy) lub lit. f (uzasadniony interes administratora).</span>
            </li>
            <li>
              <strong>Realizacja usługi Database Reactivation</strong> — przetwarzamy dane Twoich klientów (baza przekazana przez Ciebie) wyłącznie w celu realizacji usługi, jako podmiot przetwarzający na podstawie Umowy Powierzenia Przetwarzania Danych (UPPD). Nie przetwarzamy tych danych do własnych celów.
            </li>
            <li>
              <strong>Pliki cookies i dane techniczne</strong> — adres IP, typ przeglądarki, strony odwiedzone.
              <br/><span className="text-sm text-slate-400">Cel: analityka. Podstawa: art. 6 ust. 1 lit. a RODO (zgoda) lub lit. f (uzasadniony interes).</span>
            </li>
            <li>
              <strong>Panel Klienta</strong> — login, email, dane rozliczeniowe. 
              <br/><span className="text-sm text-slate-400">Cel: obsługa konta i rozliczeń. Podstawa: art. 6 ust. 1 lit. b RODO.</span>
            </li>
          </ul>
        </section>

        <section id="jak-dlugo" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 3. Jak długo przechowujemy dane
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/20 bg-[#0a0f1f]">
              <thead>
                <tr className="bg-blue-950/40 text-white">
                  <th className="py-4 px-6 font-semibold border-b border-blue-500/20">Kategoria danych</th>
                  <th className="py-4 px-6 font-semibold border-b border-blue-500/20">Okres przechowywania</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">Dane z formularza kontaktowego</td>
                  <td className="py-4 px-6">12 miesięcy od ostatniego kontaktu</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">Dane klientów w ramach DBR</td>
                  <td className="py-4 px-6">Do zakończenia umowy + 30 dni (na żądanie usuwamy natychmiast)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">Dane rozliczeniowe</td>
                  <td className="py-4 px-6">5 lat (obowiązek podatkowy)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">Logi techniczne</td>
                  <td className="py-4 px-6">90 dni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="komu-przekazujemy" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 4. Komu przekazujemy dane
          </h2>
          <p className="mb-4">Dane mogą być przekazywane wyłącznie:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Podwykonawcom technicznym:</strong> Twilio (SMS/Voice), GoHighLevel (CRM), n8n (automatyzacje), Google (analityka) — wszyscy działają na podstawie umów powierzenia lub są certyfikowani w ramach EU-US Data Privacy Framework.</li>
            <li><strong>Organom państwowym</strong> — wyłącznie na podstawie obowiązku prawnego.</li>
          </ul>
          <p className="p-4 bg-blue-950/30 rounded-lg border border-blue-500/20 text-blue-200">
            Nie sprzedajemy danych. Nie przekazujemy ich do marketingu stron trzecich.
          </p>
        </section>

        <section id="twoje-prawa" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 5. Twoje prawa (RODO)
          </h2>
          <p className="mb-4">Masz prawo do:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Dostępu do swoich danych (art. 15)</li>
            <li>Sprostowania nieprawidłowych danych (art. 16)</li>
            <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;, art. 17)</li>
            <li>Ograniczenia przetwarzania (art. 18)</li>
            <li>Przenoszenia danych (art. 20)</li>
            <li>Sprzeciwu wobec przetwarzania (art. 21)</li>
            <li>Cofnięcia zgody w dowolnym momencie (bez wpływu na legalność wcześniejszego przetwarzania)</li>
            <li>Skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl)</li>
          </ul>
          <p className="text-sm text-slate-400">Czas realizacji żądań: max 30 dni (możliwe przedłużenie do 90 dni ze względu na złożoność).</p>
        </section>

        <section id="cookies" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 6. Pliki cookies
          </h2>
          <p className="mb-4">Używamy cookies:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Niezbędnych</strong> — sesja, zapamiętanie preferencji (nie wymagają zgody)</li>
            <li><strong>Analitycznych</strong> — statystyki użycia strony (wymagają zgody)</li>
          </ul>
          <p>Możesz zarządzać cookies w ustawieniach przeglądarki lub przez baner cookie.</p>
        </section>

        <section id="bezpieczenstwo" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 7. Bezpieczeństwo
          </h2>
          <p>
            Stosujemy: szyfrowanie HTTPS (TLS 1.3), kontrolę dostępu (MFA dla pracowników), minimalizację danych, regularne audyty bezpieczeństwa.
          </p>
        </section>

        <section id="zmiany" className="scroll-mt-32">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 border-b border-blue-500/10 pb-4">
            § 8. Zmiany polityki
          </h2>
          <p>
            O każdej istotnej zmianie poinformujemy emailem (jeśli mamy Twój kontakt) lub przez banner na stronie z 14-dniowym wyprzedzeniem.
          </p>
        </section>

      </div>
    </LegalPageLayout>
  )
}
