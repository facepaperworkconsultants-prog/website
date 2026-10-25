import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Understand how Face PaperWorks Consultants works — from initial consultation to final approval. A structured, transparent regulatory consultancy process.",
};

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "We begin with a detailed discussion to understand your product, business model, target market in India, and specific regulatory objectives. This helps us determine the most appropriate regulatory pathway for your situation.", details: ["Product and business assessment", "Market entry strategy discussion", "Regulatory pathway identification", "Timeline and process overview"] },
    { num: "02", title: "Regulatory Assessment", desc: "Based on our understanding of your product, we identify the applicable regulatory pathway, requirements, documentation needs, and potential considerations specific to your case.", details: ["Applicable regulations identification", "Product classification (if medical device)", "Required forms and documents checklist", "Fee structure and timeline estimates"] },
    { num: "03", title: "Documentation Preparation", desc: "We prepare a product-specific documentation checklist and work with you to compile, review, and finalise all required documents. This includes manufacturer documents, product details, labels, and regulatory forms.", details: ["Product-specific document checklist", "Manufacturer document coordination", "Label and artwork review", "Application form preparation"] },
    { num: "04", title: "Application Filing Support", desc: "We assist with preparing the complete application, coordinating the submission with the applicable regulatory authority, and managing any immediate requirements that arise during filing.", details: ["Application compilation and review", "Online/physical submission coordination", "Fee payment coordination", "Submission confirmation and tracking"] },
    { num: "05", title: "Follow-up & Compliance Support", desc: "After submission, we help track application progress, respond to regulatory queries, prepare clarification documents, and coordinate follow-up actions until the registration or licence is issued.", details: ["Regulatory query response management", "Deficiency document preparation", "Status tracking and updates", "Post-approval compliance support"] },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/regulatory-docs.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h1>
          <p className="text-lg text-white/70 max-w-2xl">One point of contact from the first call to your final approval. A structured, transparent process at every stage.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[120px_1fr] gap-6 group">
                <div className="text-center md:text-right">
                  <div className="text-5xl font-bold text-teal/20 font-heading group-hover:text-teal/40 transition-colors">{step.num}</div>
                </div>
                <div className="border-l-2 border-grey-medium/60 pl-8 pb-8 group-hover:border-teal/40 transition-colors">
                  <h2 className="text-2xl font-bold text-navy mb-3">{step.title}</h2>
                  <p className="text-grey-dark mb-4 leading-relaxed">{step.desc}</p>
                  <div className="bg-grey rounded-xl p-5">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-grey-dark">
                          <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 p-4 bg-grey rounded-xl border border-grey-medium/40 text-sm text-grey-dark text-center">
            Actual requirements and timelines depend on the product, completeness of documentation, and the regulatory authority&apos;s process.
          </div>
        </div>
      </section>

      <section className="section bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/70 mb-8">Begin with a free initial consultation to assess your regulatory needs.</p>
          <Link href="/contact" className="btn btn-primary text-base">Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
