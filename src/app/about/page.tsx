import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Face PaperWorks Consultants — a regulatory consultancy specialising in cosmetics and medical device imports in India. CDSCO registration, licensing, and compliance support.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/about-office.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Regulatory Partner in India
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Face PaperWorks Consultants helps overseas brands and Indian importers bring cosmetics and medical devices into India — fully compliant and without the paperwork headaches.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-teal mb-4">Our Story</span>
              <h2 className="text-3xl font-bold text-navy mb-6">Who We Are</h2>
              <div className="divider mb-6"></div>
              <div className="space-y-4 text-grey-dark leading-relaxed">
                <p>
                  Face PaperWorks Consultants is a regulatory consultancy dedicated to helping businesses navigate the complexities of cosmetics and medical device regulations in India. We manage CDSCO registrations and licences from the first document check to the final approval, so our clients can focus on their products and customers.
                </p>
                <p>
                  Our work spans the entire regulatory process — from initial product assessment and documentation preparation to application filing, query management, and post-approval compliance support. We serve international cosmetic manufacturers, Indian importers and distributors, medical-device suppliers, and businesses seeking applicable manufacturing, import, sale, or distribution licences.
                </p>
                <p>
                  As a subsidiary of AJR Smart Technology, we combine regulatory expertise with a structured, professional approach to delivering consultancy services. Our team understands the practical demands of India&apos;s cosmetics and medical device regulatory environment and works closely with clients to streamline the compliance process.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/10 to-gold/10 rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/regulatory-docs.jpg" alt="Regulatory documentation and compliance" width={600} height={400} className="object-cover w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisation */}
      <section className="section bg-grey">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-navy mb-4">Specialisation</span>
            <h2 className="text-3xl font-bold text-navy mb-4">Areas of Focus</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cosmetics", desc: "CDSCO import registration support, COS-1/COS-2 registration pathway, COS-4/COS-4A for eligible products, product and manufacturer document review, label and compliance review, and regulatory query support.", icon: "💄" },
              { title: "Medical Devices", desc: "Import licence application support, MD-14/MD-15 documentation pathway, MD-42 registration for sale and distribution, device classification and documentation coordination, and regulatory query handling.", icon: "🏥" },
              { title: "Licensing & Compliance", desc: "Cosmetics manufacturing licence support through State Licensing Authorities, application and dossier preparation, authorisation/FSC/GMP documents, label/artwork review, and post-submission coordination.", icon: "📋" },
            ].map((item, i) => (
              <div key={i} className="card text-center group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">{item.title}</h3>
                <p className="text-sm text-grey-dark leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-gold mb-4">Our Values</span>
            <h2 className="text-3xl font-bold text-navy mb-4">How We Work</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Specialised Focus", desc: "Cosmetics and medical device import regulation in India is all we do." },
              { title: "End-to-End Handling", desc: "From documents to approval, we manage the whole process." },
              { title: "Clear Communication", desc: "Regular updates and honest timelines at every stage." },
              { title: "Ongoing Support", desc: "Renewals, amendments, and post-approval compliance help." },
            ].map((v, i) => (
              <div key={i} className="p-6 rounded-2xl border border-grey-medium/60 hover:border-teal/30 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-grey-dark">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let us help you navigate India&apos;s regulatory landscape. Get in touch for a product-specific assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-base">Request a Consultation</Link>
            <Link href="/services/cosmetics" className="btn btn-outline-white text-base">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
