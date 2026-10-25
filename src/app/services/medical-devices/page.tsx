import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Device Regulatory Services",
  description: "Medical device import licensing, MD-14/MD-15 application support, MD-42 registration assistance, device classification, and regulatory compliance support in India.",
};

export default function MedicalDevicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/medical-devices.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Medical Device Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Medical Device Regulatory Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Practical support for import, registration, and compliance pathways under the Medical Devices Rules, 2017.
          </p>
        </div>
      </section>

      {/* Import Licensing */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge badge-navy mb-4">CDSCO</span>
              <h2 className="text-3xl font-bold text-navy mb-4">Import Registration &amp; Licence</h2>
              <div className="divider mb-6"></div>
              <p className="text-grey-dark mb-6 leading-relaxed">
                Registration and import licence under the Medical Devices Rules, 2017. Device classification, technical file, and Plant/Site documents prepared and filed with CDSCO.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { form: "MD-14", desc: "Import licence application" },
                  { form: "MD-15", desc: "Import licence" },
                  { form: "MD-42", desc: "Registration for sale / distribution" },
                  { form: "MDR 2017", desc: "Regulatory framework" },
                ].map((f, i) => (
                  <div key={i} className="bg-grey rounded-xl p-4 border border-grey-medium/60">
                    <div className="font-bold text-navy text-lg">{f.form}</div>
                    <p className="text-xs text-grey-dark">{f.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-navy mb-3">Support Areas</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Device classification and regulatory pathway assessment",
                  "Dossier and manufacturer-document coordination",
                  "Free Sale / authorisation / quality documents",
                  "Labelling and IFU (Instructions for Use) review",
                  "Online application support and submission",
                  "Regulatory query response and follow-up",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-grey-dark">
                    <svg className="w-4 h-4 text-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticky top-28">
              <div className="bg-grey rounded-2xl p-8 border border-grey-medium/60">
                <h3 className="text-lg font-bold text-navy mb-4">Import Licensing Process</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Classification", desc: "Determine device risk class and applicable regulatory pathway." },
                    { step: "2", title: "Documentation", desc: "Prepare technical file, manufacturer documents, and quality certificates." },
                    { step: "3", title: "Application (MD-14)", desc: "File import licence application with CDSCO." },
                    { step: "4", title: "Query Handling", desc: "Respond to regulatory queries and deficiency notices." },
                    { step: "5", title: "Licence (MD-15)", desc: "Follow up until the import licence is issued." },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-sm shrink-0">{s.step}</div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{s.title}</div>
                        <p className="text-xs text-grey-dark">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center mt-4">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MD-42 */}
      <section className="section bg-grey" id="md42">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="badge badge-gold mb-4">State Licensing Authority</span>
            <h2 className="text-3xl font-bold text-navy mb-4">MD-42 Registration</h2>
            <div className="divider mb-6"></div>
            <p className="text-grey-dark mb-8 leading-relaxed">
              MD-42 is a licence/registration for the sale, stock, and distribution of medical devices within India. It is issued by the relevant State Licensing Authority and is applicable for entities distributing or selling medical devices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Premises Assessment", desc: "Review premises suitability and qualified-person requirements for MD-42." },
                { title: "Document Preparation", desc: "Prepare the complete document checklist including declarations and undertakings." },
                { title: "Application Filing", desc: "File the MD-42 application with the relevant State Licensing Authority." },
                { title: "Follow-up & Issuance", desc: "Coordinate with the authority for inspections, queries, and licence issuance." },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-grey-dark">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white rounded-xl border border-grey-medium/40 text-xs text-grey-dark">
              <strong className="text-navy">Note:</strong> MD-42 is distinct from the import licence (MD-15). The import licence is issued by CDSCO at the central level, whereas MD-42 is issued by the State Licensing Authority for sale and distribution activities within India.
            </div>
          </div>
        </div>
      </section>

      {/* Official References */}
      <section className="section-sm bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto bg-grey rounded-2xl p-8 border border-grey-medium/60">
            <h3 className="text-lg font-bold text-navy mb-4">Official Regulatory References</h3>
            <div className="space-y-3">
              <a href="https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Medical-Devices-Rules" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-teal hover:underline">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Medical Devices Rules, 2017 — CDSCO
              </a>
              <a href="https://cdsco.gov.in/export/sites/CDSCO_WEB/Pdf-documents/mdfaq24.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-teal hover:underline">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                CDSCO — Medical Device FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Need Medical Device Regulatory Support?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re importing medical devices or need an MD-42 licence, we can guide you through the regulatory process.
          </p>
          <Link href="/contact" className="btn btn-primary text-base">Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
