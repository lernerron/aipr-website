const sitemapColumns = [
  {
    sections: [
      {
        title: "Grab Bars & Handrails",
        links: [
          "Straight Grab Bars",
          "Angled Grab Bars",
          "Super Pole",
          "Extend A Hand Grab Bar",
          "Fold Up Safety Rails",
        ],
      },
      { title: "Traditional Remodels", links: [] },
    ],
  },
  {
    sections: [
      {
        title: "Ramps",
        links: [
          "Threshold & Portable Ramps",
          "Transitions Angled Entry Plate",
          "Transitions Angled Entry Mat",
          "Transitions Modular Entry Mat",
          "Modular Ramps",
          "Custom Ramps",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Bathroom Safety",
        links: ["Walk-in Bathtubs", "Safeway Step", "Bath Seats", "Bath Lifts"],
      },
      {
        title: "Accessible Showers",
        links: [
          "Tile Roll-In Showers",
          "Fiberglass Roll-In Showers",
          "Threshold Replacement",
          "Wet Room",
        ],
      },
      { title: "Accessible Sink", links: [] },
    ],
  },
  {
    sections: [
      {
        title: "Stiltz Lifts and Other Lifts",
        links: [
          "Stair Lifts",
          "Vertical Platform Lifts",
          "Pool Lifts",
          "Ceiling Lifts",
          "Elevators",
        ],
      },
      {
        title: "Doors",
        links: [
          "Door Widening",
          "Sliding/Pocket/Barn Doors",
          "Exterior Doors",
          "Automated Doors",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: null,
        links: [
          "What We Do",
          "About the Owners",
          "Testimonials",
          "Portfolio",
          "Contact Us",
        ],
      },
    ],
  },
];

export default function FooterSitemap() {
  return (
    <div className="bg-[#eaf1f4] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {sitemapColumns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-6">
              {column.sections.map((section, secIdx) => (
                <div key={secIdx}>
                  {section.title && (
                    <h4 className="text-base font-bold text-[#125775] mb-3 pb-1 border-b border-[#125775]/20">
                      {section.title}
                    </h4>
                  )}
                  {section.links.length > 0 && (
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm font-semibold text-[#125775] no-underline hover:underline"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
