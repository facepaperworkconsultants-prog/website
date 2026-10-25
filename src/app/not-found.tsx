import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-grey">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-teal/20 font-heading mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-grey-dark mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">Back to Homepage</Link>
          <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
