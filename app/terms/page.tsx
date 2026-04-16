"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    titleNL: "1. Acceptatie van de voorwaarden",
    titleEN: "1. Acceptance of terms",
    contentNL: "Door Sportli te downloaden, te installeren of te gebruiken, gaat u akkoord met deze Gebruiksvoorwaarden. Als u niet akkoord gaat, gebruik Sportli dan niet. Deze voorwaarden zijn van toepassing op alle gebruikers van de Sportli-applicatie en -website.",
    contentEN: "By downloading, installing, or using Sportli, you agree to these Terms of Service. If you do not agree, do not use Sportli. These terms apply to all users of the Sportli application and website.",
  },
  {
    titleNL: "2. Uw account",
    titleEN: "2. Your account",
    contentNL: `• U moet minimaal 18 jaar oud zijn om Sportli te gebruiken\n• U bent verantwoordelijk voor de veiligheid van uw accountgegevens\n• Uw accountinformatie moet accuraat en up-to-date zijn\n• Het aanmaken van meerdere accounts of nep-accounts is niet toegestaan\n• U mag uw account niet overdragen aan een andere persoon`,
    contentEN: `• You must be at least 18 years old to use Sportli\n• You are responsible for the security of your account credentials\n• Your account information must be accurate and up to date\n• Creating multiple accounts or fake accounts is not permitted\n• You may not transfer your account to another person`,
  },
  {
    titleNL: "3. Toegestaan gebruik",
    titleEN: "3. Acceptable use",
    contentNL: `U mag Sportli uitsluitend gebruiken voor legale doeleinden. Verboden is:\n\n• Lastigvallen, bedreigen of stalken van andere gebruikers\n• Posten van ongepaste, discriminerende of illegale inhoud\n• Verspreiden van spam of ongewenste commerciële berichten\n• Proberen het platform te hacken of te manipuleren\n• Sportli gebruiken voor commerciële activiteiten zonder toestemming`,
    contentEN: `You may only use Sportli for lawful purposes. Prohibited:\n\n• Harassing, threatening, or stalking other users\n• Posting inappropriate, discriminatory, or illegal content\n• Distributing spam or unsolicited commercial messages\n• Attempting to hack or manipulate the platform\n• Using Sportli for commercial activities without permission`,
  },
  {
    titleNL: "4. Inhoud van gebruikers",
    titleEN: "4. User content",
    contentNL: "U bent verantwoordelijk voor alle inhoud die u op Sportli plaatst. Door inhoud te plaatsen, verleent u Sportli een niet-exclusieve, wereldwijde licentie om deze inhoud te gebruiken voor het leveren en verbeteren van de dienst. Wij behouden ons het recht voor inhoud te verwijderen die onze richtlijnen schendt.",
    contentEN: "You are responsible for all content you post on Sportli. By posting content, you grant Sportli a non-exclusive, worldwide license to use that content for providing and improving the service. We reserve the right to remove content that violates our guidelines.",
  },
  {
    titleNL: "5. Sportli+ abonnement",
    titleEN: "5. Sportli+ subscription",
    contentNL: `• Sportli+ is een maandelijks of jaarlijks abonnement\n• Betalingen worden automatisch verlengd tenzij u opzegt\n• U kunt uw abonnement op elk moment opzeggen via de app of uw app store\n• Restitutie is mogelijk binnen 14 dagen na aankoop (herroepingsrecht EU)\n• Prijswijzigingen worden minimaal 30 dagen van tevoren aangekondigd`,
    contentEN: `• Sportli+ is a monthly or yearly subscription\n• Payments automatically renew unless you cancel\n• You can cancel your subscription at any time via the app or your app store\n• Refunds are available within 14 days of purchase (EU right of withdrawal)\n• Price changes will be announced at least 30 days in advance`,
  },
  {
    titleNL: "6. Aansprakelijkheid",
    titleEN: "6. Liability",
    contentNL: "Sportli is een platform dat sporters met elkaar verbindt. Wij zijn niet aansprakelijk voor: gedrag van gebruikers, persoonlijk letsel tijdens afspraken, verlies van data door technische storingen, of indirecte schade. Gebruik Sportli op eigen risico bij het ontmoeten van onbekenden.",
    contentEN: "Sportli is a platform that connects athletes. We are not liable for: user behavior, personal injury during meetups, data loss due to technical failures, or indirect damages. Use Sportli at your own risk when meeting strangers.",
  },
  {
    titleNL: "7. Beëindiging",
    titleEN: "7. Termination",
    contentNL: "Wij behouden het recht uw account op elk moment te schorsen of te verwijderen bij overtreding van deze voorwaarden. U kunt uw account op elk moment zelf verwijderen via de app-instellingen.",
    contentEN: "We reserve the right to suspend or delete your account at any time for violations of these terms. You can delete your own account at any time via app settings.",
  },
  {
    titleNL: "8. Toepasselijk recht",
    titleEN: "8. Governing law",
    contentNL: "Deze voorwaarden zijn onderworpen aan Nederlands recht. Geschillen worden voorgelegd aan de bevoegde rechter in Amsterdam, Nederland.",
    contentEN: "These terms are governed by Dutch law. Disputes will be submitted to the competent court in Amsterdam, the Netherlands.",
  },
  {
    titleNL: "9. Wijzigingen",
    titleEN: "9. Changes",
    contentNL: "Wij kunnen deze voorwaarden van tijd tot tijd bijwerken. Bij wezenlijke wijzigingen informeren wij u via e-mail of een melding in de app. Voortgezet gebruik na kennisgeving geldt als acceptatie van de nieuwe voorwaarden.",
    contentEN: "We may update these terms from time to time. For material changes, we will notify you via email or an in-app notification. Continued use after notice constitutes acceptance of the new terms.",
  },
  {
    titleNL: "10. Contact",
    titleEN: "10. Contact",
    contentNL: "Vragen over deze voorwaarden? Neem contact op via legal@sportli.app\n\nSportli Technologies Ltd.\nAmsterdam, Nederland",
    contentEN: "Questions about these terms? Contact us at legal@sportli.app\n\nSportli Technologies Ltd.\nAmsterdam, Netherlands",
  },
];

export default function TermsPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              {isNL ? "Bijgewerkt: 1 januari 2026" : "Updated: January 1, 2026"}
            </div>
            <h1 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              {isNL ? "Gebruiksvoorwaarden" : "Terms of Service"}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              {isNL
                ? "Lees deze voorwaarden zorgvuldig door voordat u Sportli gebruikt."
                : "Please read these terms carefully before using Sportli."}
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
