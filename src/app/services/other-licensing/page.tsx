import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Other Licensing Services",
  description: "Additional regulatory licensing services including documentation review, label compliance, authorisation support, and post-submission coordination.",
};

export default function OtherLicensingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Other Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Other Licensing Services</h1>
          <p className="text-lg text-white/70 max-w-2xl">Additional regulatory and compliance support beyond cosmetics and medical device core services.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Regulatory Documentation Review", desc: "Comprehensive review of all regulatory documents, applications, and submissions to ensure completeness, accuracy, and compliance with applicable Indian regulatory requirements.", icon: "📝" },
                { title: "Label & Artwork Compliance", desc: "Review cosmetic and medical device labels, packaging artwork, and product claims against Indian regulatory requirements. Guidance on mandatory labelling elements and compliance.", icon: "🏷️" },
                { title: "Authorisation & Support Documents", desc: "Preparation and coordination of manufacturer authorisation letters, Free Sale Certificates (FSC), GMP certificates, and other supporting documents required for regulatory applications.", icon: "✅" },
                { title: "Application & Dossier Preparation", desc: "Complete preparation and compilation of regulatory application dossiers, including forms, declarations, undertakings, checklists, and fee coordination.", icon: "📁" },
                { title: "Post-Submission Coordination", desc: "Regulatory query response management, deficiency handling, clarification document preparation, status tracking, and follow-up with regulatory authorities.", icon: "🔄" },
                { title: "Renewals & Amendments", desc: "Support for licence renewals, amendments to existing registrations, variation applications, and ongoing compliance documentation.", icon: "📋" },
              ].map((service, i) => (
                <div key={i} className="card group">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-teal transition-colors">{service.title}</h3>
                  <p className="text-sm text-grey-dark leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Need Regulatory Support?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">Get in touch to discuss your specific requirements.</p>
          <Link href="/contact" className="btn btn-primary text-base">Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
