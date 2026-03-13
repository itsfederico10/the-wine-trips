import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', number: '01' },
    { id: 'nature', title: 'Nature of the Service', number: '02' },
    { id: 'waiting-list', title: 'Waiting List & Communications', number: '03' },
    { id: 'sample-itineraries', title: 'Sample Itineraries & Pricing', number: '04' },
    { id: 'bookings', title: 'Bookings & Formal Agreements', number: '05' },
    { id: 'intellectual-property', title: 'Intellectual Property', number: '06' },
    { id: 'user-conduct', title: 'User Conduct', number: '07' },
    { id: 'disclaimers', title: 'Disclaimers & Limitation of Liability', number: '08' },
    { id: 'third-party', title: 'Third-Party Links & Services', number: '09' },
    { id: 'governing-law', title: 'Governing Law & Disputes', number: '10' },
    { id: 'changes', title: 'Changes to These Terms', number: '11' },
    { id: 'contact', title: 'Contact', number: '12' },
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - The Wine Trips</title>
        <meta name="description" content="Terms of Service for The Wine Trips. Understand our policies regarding website use, waiting lists, and sample itineraries." />
        <link rel="canonical" href="https://thewinetrips.com/terms" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewinetrips.com/terms" />
        <meta property="og:title" content="Terms of Service - The Wine Trips" />
        <meta property="og:description" content="Terms of Service for The Wine Trips. Understand our policies regarding website use, waiting lists, and sample itineraries." />
        <meta property="og:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
        <meta property="og:site_name" content="THE WINE TRIPS" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thewinetrips.com/terms" />
        <meta property="twitter:title" content="Terms of Service - The Wine Trips" />
        <meta property="twitter:description" content="Terms of Service for The Wine Trips. Understand our policies regarding website use, waiting lists, and sample itineraries." />
        <meta property="twitter:image" content="https://thewinetrips.com/wine-vineyard-hero.jpg" />
      </Helmet>

      {/* Full Screen Overlay to replace main layout */}
      <div className="fixed inset-0 z-[100] bg-[#111624] overflow-y-auto scroll-smooth">
        
        {/* Custom Header */}
        <header className="sticky top-0 z-50 bg-[#1a1f2e] border-b border-[#c9a96e]/25 backdrop-blur-md bg-opacity-95">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-[#c9a96e] font-bold tracking-[0.2em] uppercase text-sm font-['Cormorant_Garamond']">
              T H E &nbsp; W I N E &nbsp; T R I P S
            </span>
            <Link 
              to="/" 
              className="group flex items-center gap-2 text-[#8a8a8a] hover:text-white transition-colors text-sm font-['Jost']"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to website
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-[#1a1f2e] pt-24 pb-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[#c9a96e] text-xs font-bold tracking-[0.25em] uppercase mb-6 block font-['Jost']">
              LEGAL
            </span>
            <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-white mb-8 font-light">
              Terms of Service
            </h1>
            <div className="w-[60px] h-[1px] bg-[#c9a96e] mx-auto mb-8 opacity-50"></div>
            <p className="text-[#8a8a8a] text-sm font-['Jost'] tracking-wide">
              Last updated: February 2026 · www.thewinetrips.com
            </p>
          </motion.div>
        </section>

        {/* Content Container */}
        <div className="max-w-[800px] mx-auto px-6 py-16 font-['Jost'] font-light text-[#ddd8cf] leading-[1.8]">
          
          {/* Summary Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#c9a96e]/[0.08] border border-[#c9a96e]/25 p-8 mb-16 rounded-sm"
          >
            <p className="text-lg">
              <strong className="text-[#c9a96e] font-medium block mb-2">Plain-language summary:</strong>
              The Wine Trips is currently in a pre-launch phase. The website provides information and allows you to join a waiting list. No purchase, contract, or booking is created by visiting this site or joining the waiting list. Formal terms for actual trip bookings will be issued separately at the time of booking.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1f2e] border-l-[3px] border-[#c9a96e] p-8 mb-20"
          >
            <h2 className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase mb-6 font-['Jost']">CONTENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="text-[#8a8a8a] hover:text-[#c9a96e] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="text-[#c9a96e] opacity-50 group-hover:opacity-100 text-[10px]">{section.number}</span>
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-24">
            
            {/* 01 Acceptance */}
            <Section id="acceptance" number="01" title="Acceptance of Terms">
              <p>
                By accessing or using the website at www.thewinetrips.com (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.
              </p>
              <p className="mt-4">
                These Terms apply to all visitors, users, and others who access the Website. They form a legally binding agreement between you and The Wine Trips ("we", "us", "our").
              </p>
              <p className="mt-4">
                Use of the Website also constitutes acceptance of our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </Section>

            {/* 02 Nature of Service */}
            <Section id="nature" number="02" title="Nature of the Service">
              <p>The Wine Trips is a luxury wine travel service currently in its pre-launch phase. The Website serves as:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-6 marker:text-[#c9a96e]">
                <li>An informational platform describing our planned wine travel experiences.</li>
                <li>A waiting list registration tool for prospective guests interested in future departures.</li>
                <li>A showcase of sample itineraries illustrating the type of experiences we intend to offer.</li>
              </ul>
              <p className="font-medium text-white p-4 border-l-2 border-[#c9a96e]/50 bg-[#c9a96e]/10">
                Important: The Website does not currently offer, sell, or accept payment for any travel service. No trip booking, reservation, or contract of any kind is created by visiting this Website or joining the waiting list.
              </p>
            </Section>

            {/* 03 Waiting List */}
            <Section id="waiting-list" number="03" title="Waiting List & Communications">
              <p>By submitting your email address to our waiting list, you agree to receive communications from The Wine Trips about the availability of our experiences, updates, and related wine travel content.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#c9a96e]">
                <li>Joining the waiting list creates no obligation on your part to book a trip, and no obligation on our part to offer you a place on any specific departure.</li>
                <li>You may unsubscribe from our communications at any time by clicking the unsubscribe link in any email we send, or by contacting us at info@thewinetrips.com.</li>
                <li>We will handle your email address in accordance with our Privacy Policy.</li>
              </ul>
            </Section>

            {/* 04 Sample Itineraries */}
            <Section id="sample-itineraries" number="04" title="Sample Itineraries & Pricing">
              <div className="bg-[#b44040]/[0.08] border-l-[3px] border-[#b44040] p-6 mb-8">
                <p className="text-[#ddd8cf]">
                  <strong className="text-[#b44040] font-medium">Important notice:</strong> All itineraries, estate lists, hotel suggestions, restaurant references, and pricing information displayed on this Website or in any downloadable materials (including PDF brochures) are <strong className="text-white">samples only</strong> and are subject to change without notice.
                </p>
              </div>

              <p className="mb-4">Specifically, you acknowledge that:</p>
              <ul className="space-y-6">
                <li>
                  <strong className="text-white block mb-1">Itineraries are illustrative.</strong>
                  The estates, restaurants, hotels, activities, and daily schedules shown are examples of the type of experience we aim to create. Final itineraries are confirmed individually for each departure based on availability, season, and group preferences.
                </li>
                <li>
                  <strong className="text-white block mb-1">Estate access is not guaranteed.</strong>
                   References to specific châteaux, wineries, or estates in our materials represent aspirational or historical access and do not constitute confirmed reservations or guaranteed visits, except where explicitly stated as confirmed partner estates.
                </li>
                <li>
                  <strong className="text-white block mb-1">Pricing is indicative.</strong>
                  Any price ranges mentioned on the Website or in downloadable materials are indicative only. Confirmed pricing will be provided in a formal booking proposal. Prices may vary based on group size, dates, hotel category, and other factors.
                </li>
                <li>
                  <strong className="text-white block mb-1">No contractual commitment is created.</strong>
                  Viewing sample itineraries or downloading PDF brochures does not constitute acceptance of any offer or creation of any contract.
                </li>
              </ul>
            </Section>

            {/* 05 Bookings */}
            <Section id="bookings" number="05" title="Bookings & Formal Agreements">
              <p>When The Wine Trips begins accepting bookings, each booking will be governed by a separate, specific Booking Agreement that will be provided to you at that time. That agreement will include:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-6 marker:text-[#c9a96e]">
                <li>Confirmed itinerary and inclusions</li>
                <li>Confirmed pricing and deposit requirements</li>
                <li>Cancellation and refund policy</li>
                <li>Travel insurance requirements</li>
                <li>Liability and force majeure provisions</li>
              </ul>
              <p>
                These Terms of Service govern only your use of this Website and do not pre-establish any terms for actual trip bookings. No booking is valid until a Booking Agreement has been signed by both parties and a deposit has been received.
              </p>
            </Section>

            {/* 06 Intellectual Property */}
            <Section id="intellectual-property" number="06" title="Intellectual Property">
              <p>All content on this Website — including but not limited to text, design, branding, logos, itineraries, PDF documents, photographs (unless otherwise credited), and the name "The Wine Trips" — is the property of The Wine Trips and is protected by applicable intellectual property laws.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-6 marker:text-[#c9a96e]">
                <li>You may view and download materials for your personal, non-commercial use only.</li>
                <li>You may not reproduce, distribute, modify, publish, or use any content for commercial purposes without our prior written consent.</li>
                <li>You may share links to the Website and its content for personal or informational purposes, provided you do not misrepresent our services or brand.</li>
              </ul>
              <p>For licensing or press enquiries, contact us at info@thewinetrips.com.</p>
            </Section>

            {/* 07 User Conduct */}
            <Section id="user-conduct" number="07" title="User Conduct">
              <p>By using this Website, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-6 marker:text-[#c9a96e]">
                <li>Use the Website for any unlawful purpose or in a way that violates any applicable local, national, or international law.</li>
                <li>Attempt to gain unauthorised access to any part of the Website, its servers, or any system connected to the Website.</li>
                <li>Transmit any unsolicited commercial communications or spam via any contact mechanisms on the Website.</li>
                <li>Impersonate The Wine Trips, its team members, or any other person.</li>
                <li>Use automated tools to scrape, crawl, or extract data from the Website without our written consent.</li>
              </ul>
              <p>We reserve the right to restrict access to the Website for any user who violates these Terms.</p>
            </Section>

            {/* 08 Disclaimers */}
            <Section id="disclaimers" number="08" title="Disclaimers & Limitation of Liability">
              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Website provided "as is"</h3>
              <p>The Website and all its content are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. We do not warrant that the Website will be error-free, uninterrupted, or free of viruses or other harmful components.</p>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">No liability for informational content</h3>
              <p>The content on this Website, including itineraries, estate descriptions, restaurant recommendations, and pricing, is for informational and illustrative purposes only. We make no representations or warranties regarding the accuracy, completeness, or suitability of this information for any particular purpose.</p>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Limitation of liability</h3>
              <p>To the fullest extent permitted by applicable law, The Wine Trips shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-4 marker:text-[#c9a96e]">
                <li>Your use of, or inability to use, the Website.</li>
                <li>Any reliance on information provided on the Website or in downloadable materials.</li>
                <li>Any changes, suspension, or discontinuation of the Website.</li>
              </ul>
              <p>In no event shall our total liability to you exceed the amount you have actually paid to The Wine Trips in the 12 months preceding the claim (which, during the pre-launch phase, is zero).</p>

              <h3 className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mt-8 mb-4">Travel risks</h3>
              <p>International travel involves inherent risks including but not limited to flight delays, political events, health emergencies, natural disasters, and supplier failures. Any future booking agreements will include specific provisions on force majeure and travel disruption. The Wine Trips strongly recommends that all guests obtain comprehensive travel insurance for any journey.</p>
            </Section>

            {/* 09 Third-Party */}
            <Section id="third-party" number="09" title="Third-Party Links & Services">
              <p>The Website may reference or link to third-party websites, estates, restaurants, hotels, or service providers. These references are provided for informational purposes only. The Wine Trips:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 mb-4 marker:text-[#c9a96e]">
                <li>Does not control and is not responsible for the content, policies, or practices of third-party websites.</li>
                <li>Does not endorse the products or services of third parties simply by mentioning them.</li>
                <li>Is not liable for any loss or damage arising from your use of third-party services.</li>
              </ul>
              <p>We encourage you to review the privacy policies and terms of service of any third-party websites you visit.</p>
            </Section>

            {/* 10 Governing Law */}
            <Section id="governing-law" number="10" title="Governing Law & Disputes">
              <p>These Terms are governed by and shall be construed in accordance with the laws of the Republic of Argentina, without regard to its conflict of law provisions.</p>
              <p className="mt-4">
                Any dispute arising from or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the competent courts of the City of Buenos Aires, Argentina, unless mandatory consumer protection laws in your country of residence require otherwise.
              </p>
              <p className="mt-4">
                If you are a consumer resident in the European Union, you also have the right to use the EU Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-[#c9a96e] hover:underline">ec.europa.eu/consumers/odr</a>.
              </p>
              <p className="mt-4 text-xs italic text-[#8a8a8a]">
                Note: If The Wine Trips establishes a legal entity in another jurisdiction in the future (such as a UAE Free Zone or EU entity), these Terms will be updated accordingly and you will be notified.
              </p>
            </Section>

            {/* 11 Changes */}
            <Section id="changes" number="11" title="Changes to These Terms">
              <p>We reserve the right to modify these Terms at any time. When we do, we will update the "Last updated" date at the top of this page. For material changes, we will provide notice by email (if we hold your address) or via a notice on the Website at least 14 days before the changes take effect.</p>
              <p className="mt-4">
                Your continued use of the Website after changes are posted constitutes your acceptance of the revised Terms. If you do not agree with the changes, you should stop using the Website and may request removal from our waiting list.
              </p>
            </Section>

            {/* 12 Contact */}
            <Section id="contact" number="12" title="Contact">
              <p className="mb-8">If you have any questions about these Terms of Service, please contact us.</p>

              <div className="bg-[#c9a96e]/[0.08] border border-[#c9a96e]/25 p-8 mb-8 rounded-sm">
                <h4 className="text-[#c9a96e] font-['Cormorant_Garamond'] text-2xl mb-4">The Wine Trips</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-[#8a8a8a]">Email:</span> info@thewinetrips.com</p>
                  <p><span className="text-[#8a8a8a]">Website:</span> www.thewinetrips.com</p>
                  <p><span className="text-[#8a8a8a]">Instagram:</span> @thewinetrips</p>
                </div>
              </div>
            </Section>

          </div>
        </div>

        {/* Page specific footer */}
        <footer className="bg-[#1a1f2e] border-t border-[#c9a96e]/15 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#c9a96e] text-xs font-bold tracking-[0.2em] uppercase block mb-6 font-['Cormorant_Garamond']">
              T H E &nbsp; W I N E &nbsp; T R I P S
            </span>
            <div className="flex justify-center gap-8 text-xs font-['Jost'] text-[#8a8a8a]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

const Section = ({ id, number, title, children }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="scroll-mt-32"
  >
    <div className="flex flex-col gap-4">
      <span className="text-[#c9a96e] font-bold text-4xl opacity-40 font-['Cormorant_Garamond']">{number}</span>
      <h2 className="text-3xl font-['Cormorant_Garamond'] text-white pb-6 border-b border-[#c9a96e]/30 mb-6">
        {title}
      </h2>
    </div>
    <div className="text-lg font-light text-[#ddd8cf]">
      {children}
    </div>
  </motion.section>
);

export default TermsOfServicePage;