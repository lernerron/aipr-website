# Component Patterns Identified Across WordPress Pages

## Already Built
- **Header** — Logo, Stiltz badge, phone, nav, mobile hamburger
- **Hero** — Gradient background, headline, subheadline, BALA badge
- **ServicesGrid** — 9 service tiles with images and links
- **AboutSection** — Company description text block
- **VideoShowcase** — YouTube embed with CTA
- **Affiliates** — Partner logo row
- **Testimonials** — Quote cards with attribution (2 on homepage)
- **FooterCTA** — "Discuss your project" section with phone + social
- **FooterSitemap** — Product/service link columns
- **FooterLegal** — Copyright + license
- **ContactForm** — Lead capture with validation
- **ContactInfo** — Locations, email, address, trust signals
- **SocialLinks** — Social media icons row
- **Button / Section / Container** — UI primitives

## Needed for Service Pages
- **ServicePageLayout** — Consistent layout for all service detail pages:
  - Hero strip with page title
  - Content body (text + images)
  - Sub-service cards (e.g., Ramps page has Threshold, Modular, Custom)
  - CTA section at bottom
- **SubServiceCard** — Card linking to a sub-service with image + description
- **ProductCard** — Individual product with image, name, key specs (e.g., "440 lb capacity")
- **BeforeAfterGallery** — Portfolio galleries on service pages (grab bars has 5+ galleries)

## Needed for About Pages
- **TeamMemberBio** — Owner photo, name, bio text (for About the Owners)
- **CompanyStats** — Key numbers: "4,000+ grab bars installed", "18 years", "hundreds of projects"

## Needed for Testimonials Page
- **TestimonialCard** — Extended version of homepage testimonial (full quote, name, location, date)
- **TestimonialGrid** — Grid/list layout for 25+ testimonials

## Needed for Portfolio Page
- **PortfolioFilter** — Category filter (29 categories: Accessibility, Ceiling Lifts, Grab Bars, etc.)
- **PortfolioProject** — Project card with image, title, location
- **ProjectGallery** — Multiple images per project

## Needed for Consulting Page
- **SeminarHighlights** — Topics covered list
- **CTABlock** — "Get Started" CTA specific to consulting

## Repeating Patterns Across All Pages
- Every page has the same footer CTA ("Are you interested in discussing your project?")
- Every page lists all 4 location phone numbers
- Every page has the same license/insurance disclaimer
- Service pages follow same structure: intro → sub-services → CTA → footer
