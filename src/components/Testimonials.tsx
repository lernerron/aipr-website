const testimonials = [
  {
    quote: [
      "We had Aging-In-Place Remodeling do some home modifications and install a Stiltz lift in our home. The process was seamless and very professional.",
      "The Stiltz lift was installed in 4 days as promised and provides an easy way for us to go between the floors in our home. The crew that worked on this installation was dedicated to get the job done in 4 days and worked tirelessly to do it.",
    ],
    author: "Michelle B.",
    location: "Rancho Bernardo",
    year: "2024",
  },
  {
    quote: [
      "Can I say that Aging in Place is Excellent quality, Good Value, Professional, Responsive and On time? We were looking for an alternative to a stair chair lift and found Tyler Owen and his company, Aging in Place. They have been in business 18 years and know what they are doing.",
    ],
    author: "Janet W.",
    location: "San Diego",
    year: "October 2022",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12 md:mb-16">
          People we work with say...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="bg-bg-warm p-8 md:p-10 border-l-[6px] border-primary rounded-r-xl"
            >
              <div className="space-y-4 text-lg leading-relaxed text-text-main italic">
                {t.quote.map((paragraph, i) => (
                  <p key={i}>&ldquo;{paragraph}&rdquo;</p>
                ))}
              </div>
              <footer className="mt-6 text-xl font-extrabold text-primary not-italic">
                &mdash; {t.author} &ndash; {t.location} &ndash; {t.year}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="inline-block px-8 py-4 font-bold text-lg text-primary border-2 border-primary rounded-lg no-underline hover:bg-primary hover:text-white transition-colors"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
