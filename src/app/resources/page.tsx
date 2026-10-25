import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Regulatory Updates",
  description: "Practical guides, regulatory articles, and resource materials for cosmetics and medical device compliance in India.",
};

const articles = [
  { title: "How to Import Cosmetics into India — A Practical Guide", desc: "An overview of the CDSCO registration process, required documentation, and key considerations for overseas brands and Indian importers.", category: "Cosmetics", date: "2025", link: "#" },
  { title: "Understanding Cosmetic Registration Documentation", desc: "A guide to the key documents required for cosmetic import registration, including authorisation letters, FSC, GMP certificates, and product details.", category: "Cosmetics", date: "2025", link: "#" },
  { title: "Cosmetic Labelling Requirements in India", desc: "Overview of mandatory labelling elements for imported cosmetics in India, including BIS standards and regulatory compliance considerations.", category: "Cosmetics", date: "2025", link: "#" },
  { title: "Medical Device Import Licensing in India", desc: "A practical guide to the import licence process under the Medical Devices Rules, 2017, including MD-14 application and MD-15 licence.", category: "Medical Devices", date: "2025", link: "#" },
  { title: "Understanding Medical Device Classification in India", desc: "How medical devices are classified under the Medical Devices Rules, 2017 and what it means for your import licensing pathway.", category: "Medical Devices", date: "2025", link: "#" },
  { title: "MD-42: Sale & Distribution Licence for Medical Devices", desc: "What MD-42 is, who needs it, how it differs from the CDSCO import licence, and the State Licensing Authority process.", category: "Medical Devices", date: "2025", link: "#" },
  { title: "CDSCO vs. State FDA: Understanding the Difference", desc: "A clear explanation of the roles and responsibilities of CDSCO and State FDA licensing authorities for cosmetics and medical devices.", category: "Regulatory Framework", date: "2025", link: "#" },
  { title: "Cosmetic Manufacturing Licence in India", desc: "Requirements and process for obtaining a cosmetic manufacturing licence through the State Licensing Authority under the Cosmetics Rules, 2020.", category: "Cosmetics", date: "2025", link: "#" },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Knowledge Centre</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources &amp; Regulatory Guides</h1>
          <p className="text-lg text-white/70 max-w-2xl">Practical guides and information on cosmetics and medical device regulatory requirements in India.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article key={i} className="card group flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge badge-teal text-[10px]">{article.category}</span>
                  <span className="text-xs text-grey-dark">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-teal transition-colors leading-snug flex-grow">
                  {article.title}
                </h3>
                <p className="text-sm text-grey-dark leading-relaxed mb-4">{article.desc}</p>
                <span className="text-sm text-teal font-semibold flex items-center gap-2">
                  Coming Soon
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-grey rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-navy mb-3">Stay Updated</h3>
              <p className="text-sm text-grey-dark mb-4">We regularly publish practical guides and regulatory updates. Check back for new resources, or contact us for product-specific guidance.</p>
              <Link href="/contact" className="btn btn-primary">Contact Us for Guidance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official References */}
      <section className="section bg-grey">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Official Regulatory References</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {[
              { title: "CDSCO — Cosmetics", url: "https://www.cdsco.gov.in/opencms/en/Cosmetics/cosmetics/", desc: "Cosmetics Rules, 2020; import registration and cosmetics guidance" },
              { title: "Cosmetics Rules, 2020", url: "https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Cosmetics-Rules/", desc: "The Cosmetics Rules, 2020 and related notifications" },
              { title: "Medical Devices Rules, 2017", url: "https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Medical-Devices-Rules", desc: "Medical Devices Rules, 2017 and amendments" },
              { title: "CDSCO Medical Device FAQs", url: "https://cdsco.gov.in/export/sites/CDSCO_WEB/Pdf-documents/mdfaq24.pdf", desc: "Official FAQ covering importers, authorised agents and MD-42" },
            ].map((ref, i) => (
              <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-5 border border-grey-medium/60 hover:border-teal/30 hover:shadow-md transition-all group">
                <h3 className="font-bold text-navy group-hover:text-teal transition-colors text-sm mb-1">{ref.title}</h3>
                <p className="text-xs text-grey-dark">{ref.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
