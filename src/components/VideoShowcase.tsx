export default function VideoShowcase() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-bg">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border-4 border-border shadow-lg">
          <iframe
            title="AIP Remodeling Testimonial Video"
            src="https://www.youtube.com/embed/xMSLLwLrfco"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mt-10">
          <a
            href="https://www.youtube.com/@AginginPlaceRemodeling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg border-2 border-primary no-underline hover:bg-primary-hover transition-colors"
          >
            Watch More Videos
          </a>
        </div>
      </div>
    </section>
  );
}
