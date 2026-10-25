import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cosmetics Regulatory Services",
  description: "CDSCO cosmetic import registration, COS-1/COS-2 filing, cosmetic manufacturing licence, labelling compliance, and regulatory documentation support in India.",
};

export default function CosmeticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/cosmetics-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Cosmetics Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cosmetics Regulatory Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Comprehensive regulatory support for cosmetic import registration, manufacturing licensing, and compliance under the Cosmetics Rules, 2020.
          </p>
        </div>
      </section>

      {/* Import Registration */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge badge-teal mb-4">CDSCO Registration</span>
              <h2 className="text-3xl font-bold text-navy mb-4">Cosmetics Import Registration</h2>
              <div className="divider mb-6"></div>
              <p className="text-grey-dark mb-6 leading-relaxed">
                Any importer or overseas brand bringing cosmetics into India must hold CDSCO registration under the Cosmetics Rules, 2020. We provide end-to-end support for this process.
              </p>

              <h3 className="text-lg font-bold text-navy mb-3">What We Do</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Eligibility check for products and manufacturing sites",
                  "Preparation of authorisation letters and manufacturer documents",
                  "Product list and label review for Indian requirements",
                  "COS-1 application preparation and filing support",
                  "COS-2 registration pathway guidance",
                  "COS-4 / COS-4A support for eligible already-registered cosmetics",
                  "Online application filing and query handling",
                  "Follow-up until the registration certificate is issued",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-grey-dark">
                    <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-navy mb-3">Who Needs It?</h3>
              <p className="text-sm text-grey-dark mb-6">
                Any importer or overseas brand bringing cosmetics into India. This includes skincare, haircare, makeup, fragrance, personal care, and other cosmetic product categories.
              </p>
            </div>
            <div className="sticky top-28">
              <div className="bg-grey rounded-2xl p-8 border border-grey-medium/60">
                <h3 className="text-lg font-bold text-navy mb-4">Key Documentation</h3>
                <ul className="space-y-3 text-sm text-grey-dark">
                  {[
                    "Product composition / formula details",
                    "Manufacturer authorisation letter",
                    "Free Sale Certificate (FSC)",
                    "GMP / quality certificate",
                    "Product labels and artwork",
                    "Certificate of origin",
                    "Importer details and undertaking",
                  ].map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0"></span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-grey-dark mt-4 p-3 bg-white rounded-lg border border-grey-medium/40">
                  Exact requirements may vary based on the product category and current CDSCO guidelines. We prepare a product-specific checklist during assessment.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center mt-4">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Licence */}
      <section className="section bg-grey" id="manufacturing">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="badge badge-navy mb-4">State Licensing Authority</span>
            <h2 className="text-3xl font-bold text-navy mb-4">Cosmetics Manufacturing Licence</h2>
            <div className="divider mb-6"></div>
            <p className="text-grey-dark mb-8 leading-relaxed">
              For own-brand and contract manufacturing set-ups under the Cosmetics Rules, 2020. This licence is issued by the relevant State Licensing Authority (State FDA).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Premises & Layout Guidance", desc: "Guidance on premises, layout, and facility requirements for cosmetic manufacturing." },
                { title: "Document & Application Prep", desc: "Document and application preparation for submission to the State Licensing Authority." },
                { title: "Authority Coordination", desc: "Coordination with the licensing authority throughout the process." },
                { title: "Inspection Readiness", desc: "Support for inspection readiness and compliance documentation." },
                { title: "Renewals & Compliance", desc: "Renewals and ongoing compliance support for your manufacturing licence." },
                { title: "Label & Artwork Review", desc: "Cosmetic labelling review to ensure compliance with Indian regulatory requirements." },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-grey-dark">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-gold mb-4">Step by Step</span>
            <h2 className="text-3xl font-bold text-navy mb-4">Our Cosmetics Registration Process</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Initial Consultation", desc: "We discuss your product range, manufacturing details, target markets, and regulatory goals." },
              { step: "2", title: "Product & Document Review", desc: "We review your product details, formulations, labels, and manufacturer documents for Indian regulatory requirements." },
              { step: "3", title: "Checklist & Documentation", desc: "We prepare a product-specific checklist and help compile all required documentation." },
              { step: "4", title: "Application Filing", desc: "We prepare and file the application with CDSCO or the relevant State Licensing Authority." },
              { step: "5", title: "Query Management", desc: "We handle regulatory queries, prepare clarification documents, and coordinate responses." },
              { step: "6", title: "Approval & Post-Compliance", desc: "We follow up until the registration or licence is issued, and support ongoing compliance needs." },
            ].map((s, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal font-bold group-hover:bg-teal group-hover:text-white transition-all">
                    {s.step}
                  </div>
                </div>
                <div className="pb-6 border-b border-grey-medium/40">
                  <h3 className="font-bold text-navy mb-1">{s.title}</h3>
                  <p className="text-sm text-grey-dark">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Reference */}
      <section className="section-sm bg-grey">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-grey-medium/60">
            <h3 className="text-lg font-bold text-navy mb-4">Official Regulatory References</h3>
            <div className="space-y-3">
              <a href="https://www.cdsco.gov.in/opencms/en/Cosmetics/cosmetics/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-teal hover:underline">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                CDSCO — Cosmetics Portal
              </a>
              <a href="https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Cosmetics-Rules/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-teal hover:underline">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Cosmetics Rules, 2020 — Acts and Rules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help With Cosmetics Compliance?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re importing cosmetics or setting up manufacturing in India, we can help you navigate the regulatory process.
          </p>
          <Link href="/contact" className="btn btn-primary text-base">Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
