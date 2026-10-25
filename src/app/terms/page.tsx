import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Face PaperWorks Consultants. Read our terms of service for regulatory consultancy.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-sm">Last updated: October 2026</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-grey-dark leading-relaxed text-sm">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. About These Terms</h2>
              <p>These Terms and Conditions govern your use of the Face PaperWorks Consultants website and services. By using our website or engaging our services, you agree to these terms.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Nature of Services</h2>
              <p>Face PaperWorks Consultants provides regulatory consultancy services for cosmetics and medical devices in India. Our services include documentation support, application preparation, regulatory guidance, and compliance assistance.</p>
              <p className="mt-2"><strong>We are not CDSCO, a State FDA, or any government authority.</strong> We do not have the authority to approve, reject, or expedite any regulatory application. All regulatory decisions are made solely by the applicable government authority.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. No Guaranteed Outcomes</h2>
              <p>We do not guarantee the approval of any regulatory application, the timeline for approval, or any specific outcome. Regulatory decisions depend on the product, documentation, and the applicable authority&apos;s process and discretion.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate, complete, and truthful information and documentation. Face PaperWorks Consultants relies on the information provided by clients and their manufacturers and is not liable for inaccuracies in client-supplied data.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Intellectual Property</h2>
              <p>All content on this website, including text, design, graphics, and logos, is the property of Face PaperWorks Consultants or its licensors. You may not reproduce, distribute, or use any content without prior written permission.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Face PaperWorks Consultants shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Website Information</h2>
              <p>The information on this website is provided for general informational purposes. While we strive for accuracy, regulatory requirements change frequently. We recommend verifying specific requirements with the applicable authority or contacting us for current, product-specific guidance.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Contact</h2>
              <p>For questions about these terms, contact us at:</p>
              <p className="mt-2"><strong>Face PaperWorks Consultants</strong><br/>35, Block-F, Nehru Place, New Delhi, India<br/>Email: facepaperworkconsultants@gmail.com<br/>Phone: +91 7428593797</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
