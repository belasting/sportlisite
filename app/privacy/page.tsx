"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    titleNL: "1. Welke gegevens verzamelen wij?",
    titleEN: "1. What data do we collect?",
    contentNL: `Wij verzamelen de volgende gegevens wanneer u Sportli gebruikt:

• Accountgegevens: naam, e-mailadres, telefoonnummer en geboortedatum
• Profielgegevens: foto's, sport(en), niveau, beschrijving en locatie (stad/regio)
• Gebruiksgegevens: app-activiteit, swipes, matches, chatberichten en trainingsdata
• Apparaatgegevens: IP-adres, apparaattype, besturingssysteem en app-versie
• Betalingsgegevens: bij aankoop van Sportli+ verwerken wij betalingen via gecertificeerde betalingsproviders. Wij slaan geen volledige betaalkaartgegevens op.`,
    contentEN: `We collect the following data when you use Sportli:

• Account data: name, email address, phone number, and date of birth
• Profile data: photos, sport(s), level, bio, and location (city/region)
• Usage data: app activity, swipes, matches, chat messages, and workout data
• Device data: IP address, device type, operating system, and app version
• Payment data: when purchasing Sportli+, payments are processed by certified payment providers. We do not store full payment card details.`,
  },
  {
    titleNL: "2. Hoe gebruiken wij uw gegevens?",
    titleEN: "2. How do we use your data?",
    contentNL: `Wij gebruiken uw gegevens voor:

• Het aanmaken en beheren van uw account
• Het tonen van relevante sportprofielen in uw buurt
• Het faciliteren van matches en chatgesprekken
• Het verbeteren en personaliseren van de app-ervaring
• Het sturen van notificaties (u kunt deze uitschakelen)
• Het naleven van wettelijke verplichtingen`,
    contentEN: `We use your data for:

• Creating and managing your account
• Showing relevant sports profiles in your area
• Facilitating matches and chat conversations
• Improving and personalizing your app experience
• Sending notifications (you can disable these)
• Complying with legal obligations`,
  },
  {
    titleNL: "3. Delen wij uw gegevens?",
    titleEN: "3. Do we share your data?",
    contentNL: `Wij verkopen uw persoonlijke gegevens nooit aan derden. Wij kunnen gegevens delen met:

• Andere Sportli-gebruikers: uw profielinformatie is zichtbaar voor andere gebruikers via de swipe-feed
• Dienstverleners: betrouwbare partners die ons helpen de app te beheren (hosting, betalingen, analytics)
• Autoriteiten: indien wettelijk verplicht of voor de bescherming van onze gebruikers`,
    contentEN: `We never sell your personal data to third parties. We may share data with:

• Other Sportli users: your profile information is visible to other users through the swipe feed
• Service providers: trusted partners who help us operate the app (hosting, payments, analytics)
• Authorities: when legally required or to protect our users`,
  },
  {
    titleNL: "4. Hoe lang bewaren wij uw gegevens?",
    titleEN: "4. How long do we retain your data?",
    contentNL: `Wij bewaren uw gegevens zolang uw account actief is. Wanneer u uw account verwijdert:

• Worden uw profiel- en accountgegevens binnen 30 dagen verwijderd
• Worden chatberichten geanonimiseerd
• Kunnen bepaalde gegevens langer worden bewaard indien wettelijk verplicht (max. 7 jaar voor financiële gegevens)`,
    contentEN: `We retain your data as long as your account is active. When you delete your account:

• Your profile and account data is deleted within 30 days
• Chat messages are anonymized
• Certain data may be retained longer if legally required (up to 7 years for financial records)`,
  },
  {
    titleNL: "5. Uw rechten",
    titleEN: "5. Your rights",
    contentNL: `Onder de AVG/GDPR heeft u de volgende rechten:

• Inzagerecht: u kunt opvragen welke gegevens wij van u hebben
• Recht op rectificatie: u kunt onjuiste gegevens laten corrigeren
• Recht op verwijdering: u kunt uw gegevens laten verwijderen
• Recht op bezwaar: u kunt bezwaar maken tegen bepaald gebruik
• Recht op gegevensoverdraagbaarheid: u kunt uw gegevens exporteren

Stuur een verzoek naar privacy@sportli.app`,
    contentEN: `Under GDPR, you have the following rights:

• Right of access: you can request what data we hold about you
• Right to rectification: you can have inaccurate data corrected
• Right to erasure: you can have your data deleted
• Right to object: you can object to certain uses of your data
• Right to data portability: you can export your data

Send a request to privacy@sportli.app`,
  },
  {
    titleNL: "6. Cookies",
    titleEN: "6. Cookies",
    contentNL: `Wij gebruiken cookies en vergelijkbare technologieën voor:

• Essentiële functies (ingelogd blijven, taalinstellingen)
• Analytics (om te begrijpen hoe de app wordt gebruikt — geanonimiseerd)
• Advertenties (alleen met uw toestemming)

U kunt cookies beheren via uw browser- of app-instellingen.`,
    contentEN: `We use cookies and similar technologies for:

• Essential functionality (staying logged in, language settings)
• Analytics (understanding how the app is used — anonymized)
• Advertising (only with your consent)

You can manage cookies via your browser or app settings.`,
  },
  {
    titleNL: "7. Contact",
    titleEN: "7. Contact",
    contentNL: `Voor vragen over dit privacybeleid kunt u contact opnemen met:

Sportli Technologies Ltd.
privacy@sportli.app
Amsterdam, Nederland

Functionaris voor gegevensbescherming: dpo@sportli.app`,
    contentEN: `For questions about this privacy policy, please contact:

Sportli Technologies Ltd.
privacy@sportli.app
Amsterdam, Netherlands

Data Protection Officer: dpo@sportli.app`,
  },
];

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              {isNL ? "Bijgewerkt: 1 januari 2026" : "Updated: January 1, 2026"}
            </div>
            <h1 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              {isNL ? "Privacybeleid" : "Privacy Policy"}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              {isNL
                ? "Sportli respecteert uw privacy. In dit beleid leggen wij uit welke gegevens wij verzamelen, hoe wij deze gebruiken en welke rechten u heeft."
                : "Sportli respects your privacy. In this policy we explain what data we collect, how we use it, and what rights you have."}
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-slate-100 pb-10 last:border-0">
                <h2 className="font-poppins text-xl font-bold text-slate-900 mb-4">
                  {isNL ? section.titleNL : section.titleEN}
                </h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
                  {isNL ? section.contentNL : section.contentEN}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
