

CLAUDE CODE EXECUTION PLAN

**External Crawl & Demo Build**

WordPress to Next.js Migration

*Build a working demo from Tyler’s public site — no WordPress access required*

**7 Steps  |  \~40–60 Hours  |  Zero Dependency on Tyler Until Cutover**

Ron Lerner  |  March 2026  |  Confidential

# **Execution Overview**

This plan lets you build a fully working demo of Tyler’s website on a modern Next.js stack using only his public-facing site — no WordPress admin access, no database export, no credentials from Tyler. The goal: show him a live staging URL with his own content running faster, scoring higher on Lighthouse, and ready for SEO optimization.

Each step is a self-contained Claude Code session. Complete them in order. Each step produces specific output files that feed into the next step.

## **Before You Start: One-Time Setup**

**Project Rules File**

Create this file first. It ensures Claude Code maintains consistency across all sessions. Save it in your project repo.

File: .claude/rules/aipr-migration.md  
   
\# AIPR Website Migration Rules  
   
\#\# Project Context  
\- Migrating Tyler's AIPR site from WordPress to Next.js  
\- This is an external demo build using public site content only  
\- SEO continuity is the \#1 priority  
\- Tyler must be able to edit content without a developer  
   
\#\# Architecture  
\- Next.js 14+ with App Router  
\- TypeScript strict mode  
\- Tailwind CSS (no other CSS solutions)  
\- Sanity CMS for content management (free tier)  
\- Deployed to Vercel  
   
\#\# Non-Negotiable Rules  
\- Every page must have: unique title, meta description, canonical URL,  
  JSON-LD structured data, and Open Graph tags  
\- Every image must use next/image with descriptive alt text  
\- URL slugs must match the original WordPress URLs exactly  
\- Single H1 per page with semantic heading hierarchy  
\- No 'any' types in TypeScript  
\- All secrets in environment variables  
\- Prefer Server Components; use 'use client' only when required  
\- Mobile-first responsive design  
   
\#\# File Conventions  
\- Routes: kebab-case (e.g., /app/blog/\[slug\]/page.tsx)  
\- Components: PascalCase (e.g., ServiceCard.tsx)  
\- Utilities: camelCase (e.g., lib/formatDate.ts)  
   
\#\# Quality Gates (check before every commit)  
\- Lighthouse Performance \>= 90  
\- Lighthouse SEO \>= 95  
\- Lighthouse Accessibility \>= 90  
\- All pages render without console errors  
\- All internal links resolve (no 404s)

## **Step Summary**

| \# | Step | Time Est. | Input | Output | Needs Tyler? |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | Crawl & Audit Public Site | 2–3 hrs | Live URL | Site map, content inventory, performance baseline | No |
| **2** | Extract & Clean Content | 3–4 hrs | Step 1 crawl | Clean MDX files, images, metadata | No |
| **3** | Scaffold Next.js Project | 2–3 hrs | Rules file | Working project skeleton on Vercel | No |
| **4** | Migrate Content into Project | 4–6 hrs | Steps 2 \+ 3 | All pages live on staging URL | No |
| **5** | SEO & Performance Hardening | 4–6 hrs | Step 4 site | 301 redirects, schema, sitemap, Lighthouse 95+ | No |
| **6** | CMS Integration (Sanity) | 4–6 hrs | Step 4 content | Tyler can self-edit all content | No |
| **7** | Build Demo Presentation | 2–3 hrs | All steps | Side-by-side comparison \+ staging URL | No |

Total estimated time: 21–31 hours across Claude Code sessions. No step requires anything from Tyler.

## **Step 1: Crawl & Audit the Public Site**

**Purpose:** Map every public URL, capture content structure, and benchmark current performance. This becomes your source of truth for the migration.

**What You Need Before Starting**

* Tyler’s live website URL (e.g., https://aiprsite.com)

* A working Claude Code environment with internet access

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

I need to crawl and audit a live WordPress website to prepare for a  
migration to Next.js. The site URL is: \[TYLER'S\_URL\]  
   
Do the following:  
   
1\. CRAWL THE SITE  
   \- Use wget \--mirror \--convert-links \--adjust-extension \--page-requisites  
     \--no-parent \-P ./crawl \[TYLER'S\_URL\]  
   \- If wget is unavailable, use curl to fetch the sitemap.xml first,  
     then fetch each URL listed in it  
   \- Capture every publicly accessible page, post, and resource  
   
2\. BUILD A COMPLETE URL INVENTORY  
   Create a CSV file: site\_inventory.csv with columns:  
   url, page\_type (page/post/category/tag/archive), title,  
   meta\_description, h1\_text, word\_count, has\_images (true/false),  
   internal\_links\_count, status\_code  
   
3\. EXTRACT SITE STRUCTURE  
   Create site\_structure.json documenting:  
   \- Navigation menu items and hierarchy  
   \- Footer links  
   \- Sidebar widgets or CTAs  
   \- Header/footer layout patterns  
   \- Any recurring components (testimonials, CTAs, contact forms)  
   
4\. IDENTIFY ALL ASSETS  
   Create assets\_inventory.csv with columns:  
   asset\_url, asset\_type (image/css/js/font/video), page\_used\_on,  
   file\_size\_kb, alt\_text (for images)  
   
5\. PERFORMANCE BASELINE  
   For the homepage and top 5 most content-rich pages, record:  
   \- Page load time (from curl timing)  
   \- Total page weight (HTML \+ assets)  
   \- Number of HTTP requests  
   \- Any render-blocking resources  
   Save as performance\_baseline.json  
   
6\. TECHNOLOGY DETECTION  
   Analyze the HTML source and identify:  
   \- WordPress theme name and version  
   \- Active plugins (detectable from HTML/JS/CSS references)  
   \- Third-party scripts (analytics, chat widgets, tracking pixels)  
   \- CDN usage  
   \- Caching headers  
   Save as tech\_stack\_report.md  
   
7\. GENERATE A REDIRECT MAP  
   Create redirect\_map.csv with columns:  
   old\_url, suggested\_new\_url, redirect\_type (301), priority (high/medium/low)  
   \- Mark pages with highest word count and most internal links as high priority  
   \- Suggest clean new URL slugs that preserve the originals where possible  
   
Put all output files in a /audit directory.

**Success Criteria**

* site\_inventory.csv contains every public URL with no duplicates

* redirect\_map.csv maps 100% of existing URLs to new paths

* performance\_baseline.json has timing data for at least 5 pages

* tech\_stack\_report.md identifies theme, plugins, and third-party scripts

**Expected Output Files**

* /audit/site\_inventory.csv

* /audit/site\_structure.json

* /audit/assets\_inventory.csv

* /audit/performance\_baseline.json

* /audit/tech\_stack\_report.md

* /audit/redirect\_map.csv

⚠ *If the site has more than 500 pages, focus on the top 50 by content depth. You can always migrate the rest later.*

## **Step 2: Extract & Clean Content**

**Purpose:** Pull all visible content from the crawled pages and convert it into clean, structured files ready for the Next.js build.

**What You Need Before Starting**

* Completed Step 1 (all /audit files)

* The wget mirror or fetched HTML files from Step 1

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Using the crawled HTML files from Step 1, extract and clean all content  
for migration to Next.js.  
   
For EVERY page in site\_inventory.csv:  
   
1\. EXTRACT CONTENT  
   \- Parse the HTML and extract the main content area only  
     (skip header, footer, sidebar, nav — we'll rebuild those as components)  
   \- Convert HTML to clean Markdown/MDX  
   \- Preserve all headings, bold, italic, links, lists, and tables  
   \- Strip WordPress-specific markup (wp-block-\*, shortcodes, inline styles)  
   \- Replace WordPress shortcodes with TODO comments noting what they did  
   
2\. EXTRACT METADATA  
   For each page, create a frontmatter block with:  
   \---  
   title: (from \<title\> or og:title)  
   description: (from meta description or og:description)  
   slug: (the URL path, e.g., /services/bathroom-remodeling)  
   type: page | post | service  
   publishDate: (if available from markup)  
   ogImage: (if available)  
   originalUrl: (the full WordPress URL for redirect mapping)  
   \---  
   
3\. DOWNLOAD ALL IMAGES  
   \- Download every image referenced in the content  
   \- Save to /content/images/ with descriptive filenames  
     (not wp-content/uploads/2024/03/IMG\_3847.jpg)  
   \- Rename to: \[page-slug\]-\[descriptive-name\].\[ext\]  
   \- Create an image\_map.json that maps old URLs to new paths  
   \- Update all image references in the MDX files to use new paths  
   
4\. IDENTIFY COMPONENTS  
   Scan all pages and identify repeating content patterns:  
   \- Contact forms (note all fields)  
   \- Call-to-action blocks  
   \- Testimonial sections  
   \- Service cards or feature grids  
   \- Before/after galleries  
   \- FAQ accordions  
   \- Team member bios  
   Document these in components\_needed.md with examples from the content  
   
5\. ORGANIZE OUTPUT  
   /content  
     /pages          \- MDX files for static pages  
     /posts          \- MDX files for blog posts  
     /services       \- MDX files for service pages  
     /images         \- All downloaded and renamed images  
     image\_map.json  \- Old-to-new image URL mapping  
     components\_needed.md \- Component patterns identified

**Success Criteria**

* Every page from site\_inventory.csv has a corresponding MDX file

* All MDX files have complete frontmatter with title, description, and slug

* All images downloaded and renamed with descriptive filenames

* image\_map.json correctly maps every old image URL to its new path

* No WordPress-specific markup remains in any MDX file

* components\_needed.md documents every repeating UI pattern

**Expected Output Files**

* /content/pages/\*.mdx

* /content/posts/\*.mdx

* /content/services/\*.mdx

* /content/images/\*

* /content/image\_map.json

* /content/components\_needed.md

⚠ *If content quality is poor or pages are thin (under 100 words), flag them in a separate thin\_pages.csv. These may be worth improving or consolidating rather than migrating as-is.*

## **Step 3: Scaffold the Next.js Project**

**Purpose:** Set up the project skeleton with all architecture decisions baked in. No content yet — just the frame.

**What You Need Before Starting**

* The .claude/rules/aipr-migration.md rules file (from Before You Start)

* components\_needed.md from Step 2

* site\_structure.json from Step 1

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Create a new Next.js project for a home services company website.  
This is the skeleton — no real content yet, just architecture.  
   
TECH STACK:  
\- Next.js 14+ with App Router and TypeScript strict  
\- Tailwind CSS with a custom theme  
\- next-sitemap for XML sitemap generation  
\- Vercel for deployment  
   
PROJECT STRUCTURE:  
/app  
  /layout.tsx          \- Root layout with nav \+ footer  
  /page.tsx            \- Homepage  
  /about/page.tsx      \- About page  
  /services/page.tsx   \- Services listing  
  /services/\[slug\]/page.tsx \- Individual service pages  
  /blog/page.tsx       \- Blog listing with pagination  
  /blog/\[slug\]/page.tsx \- Individual blog posts  
  /contact/page.tsx    \- Contact page with form  
  /not-found.tsx       \- Custom 404 page  
/components  
  /layout              \- Header, Footer, Navigation, MobileNav  
  /ui                  \- Button, Card, Container, Section  
  /seo                 \- JsonLd, MetaTags, Breadcrumbs  
  /forms               \- ContactForm, LeadCaptureForm  
  /content             \- ServiceCard, TestimonialBlock, CTABlock,  
                         BeforeAfterGallery, FAQAccordion  
/lib  
  /types.ts            \- All TypeScript interfaces  
  /constants.ts        \- Site metadata, nav items, company info  
  /utils.ts            \- Formatting, slug generation helpers  
/content               \- (will receive MDX files in Step 4\)  
   
MUST INCLUDE:  
1\. Root layout with semantic HTML: \<header\>, \<main\>, \<footer\>  
2\. Navigation built from site\_structure.json menu data  
3\. Footer with same links as current WordPress footer  
4\. Responsive mobile hamburger menu  
5\. next-sitemap.config.js configured for the domain  
6\. tailwind.config.ts with a professional color palette  
   (extract colors from Tyler's current site if visible in the crawl)  
7\. Global metadata in layout.tsx (site name, default OG image)  
8\. A JsonLd component that accepts schema.org typed objects  
9\. A 301 redirect config file: lib/redirects.ts that exports an array  
   (will be populated from redirect\_map.csv in Step 5\)  
10\. Vercel configuration (vercel.json) if needed  
   
Do NOT add placeholder lorem ipsum content. Build skeleton components  
with TypeScript interfaces that define the shape of real content.  
   
Deploy to Vercel and confirm the skeleton renders at the staging URL.

**Success Criteria**

* Project runs locally with npm run dev without errors

* TypeScript compiles with zero errors in strict mode

* Navigation renders correctly on desktop and mobile

* All route files exist (even if pages are empty shells)

* Deployed to Vercel staging URL and accessible

* Lighthouse Accessibility score \>= 90 on the skeleton

**Expected Output Files**

* Complete Next.js project in repository

* Vercel staging URL (e.g., aipr-preview.vercel.app)

* All component files with typed interfaces

⚠ *Extract Tyler’s brand colors from the crawled CSS. Match his current palette unless he wants a redesign. The goal is recognition, not surprise.*

## **Step 4: Migrate Content into the Project**

**Purpose:** Pour the extracted content into the skeleton. Every page Tyler has today should be live on your staging URL.

**What You Need Before Starting**

* All /content files from Step 2 (MDX \+ images)

* Working Next.js project from Step 3

* site\_inventory.csv from Step 1

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Migrate all extracted content into the Next.js project. Use the MDX  
files from /content and the component patterns from components\_needed.md.  
   
FOR EACH PAGE:  
1\. Place the MDX content into the correct route  
2\. Ensure the URL slug matches the original WordPress URL exactly  
3\. Render all content through proper components  
4\. Replace image references with next/image using the image\_map.json  
5\. Set metadata (title, description, OG) from the MDX frontmatter  
   
FOR BLOG POSTS:  
1\. Create the blog listing page with pagination (10 posts per page)  
2\. Sort posts by publish date (newest first)  
3\. Include post excerpts on the listing page  
4\. Add category/tag filtering if the original site had categories  
   
FOR SERVICE PAGES:  
1\. Create service listing page showing all services  
2\. Each service detail page should include:  
   \- Service description from MDX  
   \- Relevant images through next/image  
   \- A CTA section linking to contact form  
   \- JSON-LD Service schema  
   
CONTACT FORM:  
1\. Build the contact form matching the fields identified in  
   components\_needed.md  
2\. Implement as a Server Action that logs to console for now  
   (we'll wire up email delivery when Tyler provides SMTP details)  
3\. Include honeypot field for spam protection  
4\. Client-side validation on all required fields  
5\. Success and error states  
   
VERIFICATION:  
After all content is migrated, generate a migration\_report.md that shows:  
\- Total pages in site\_inventory.csv vs. total pages on staging site  
\- Any pages that could not be migrated (with reasons)  
\- Any broken internal links  
\- Any images that failed to load  
   
Deploy to Vercel staging and verify every page renders correctly.

**Success Criteria**

* Every page from site\_inventory.csv is live on staging URL

* All URLs match the original WordPress slugs

* All images render through next/image (no broken images)

* Blog listing shows all posts with correct dates and excerpts

* Contact form renders with all fields and validates correctly

* migration\_report.md shows zero gaps or explains every exception

**Expected Output Files**

* All content migrated into app/ routes

* migration\_report.md

* Updated Vercel staging deployment

⚠ *This is the longest step. If the site has 100+ pages, migrate in batches: services first, then top blog posts, then remaining pages. Test between batches.*

## **Step 5: SEO & Performance Hardening**

**Purpose:** Make the demo site technically superior to the WordPress original. This is what closes the deal with Tyler.

**What You Need Before Starting**

* Working staging site from Step 4 with all content

* redirect\_map.csv from Step 1

* performance\_baseline.json from Step 1

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Harden the Next.js staging site for SEO and performance.  
This site is a migration from WordPress — preserving existing SEO equity  
while improving technical scores is critical.  
   
1\. IMPLEMENT ALL 301 REDIRECTS  
   \- Load redirect\_map.csv into next.config.js redirects array  
   \- Include redirects for common WordPress patterns:  
     /wp-content/\* \-\> 410 (gone)  
     /wp-admin \-\> 410  
     /feed \-\> /blog (or 410\)  
     /?p=123 style URLs \-\> correct new page  
     /category/\* \-\> appropriate listing page  
     /tag/\* \-\> appropriate listing page or 410  
   \- Add middleware that catches any 404 and logs the requested URL  
     to a file (404\_log.txt) so we can catch missed redirects  
   
2\. STRUCTURED DATA (JSON-LD)  
   Add to every page type:  
   \- Homepage: Organization \+ LocalBusiness \+ WebSite with SearchAction  
   \- Service pages: Service with provider, areaServed, hasOfferCatalog  
   \- Blog posts: Article with author, datePublished, dateModified, image  
   \- Contact: LocalBusiness with address, phone, openingHours  
   \- Breadcrumbs: BreadcrumbList on all inner pages  
   Validate all schemas at https://validator.schema.org  
   
3\. TECHNICAL SEO CHECKLIST  
   \- XML sitemap generates automatically and includes all pages/posts  
   \- robots.txt configured correctly  
   \- Canonical URL on every page (self-referencing)  
   \- Open Graph tags on every page (title, description, image, type)  
   \- Twitter Card tags on every page  
   \- Proper heading hierarchy audited (single H1, sequential H2-H6)  
   \- All images have descriptive alt text  
   \- All internal links are relative (no hardcoded domains)  
   \- No orphan pages (every page reachable from navigation or links)  
   
4\. PERFORMANCE OPTIMIZATION  
   \- All images optimized through next/image with explicit width/height  
   \- Fonts loaded through next/font (not external CSS)  
   \- No render-blocking third-party scripts  
   \- Dynamic imports for below-fold components  
   \- Verify Core Web Vitals:  
     LCP \< 2.5s, FID \< 100ms, CLS \< 0.1  
   
5\. GENERATE COMPARISON REPORT  
   Create performance\_comparison.md showing:  
   \- Lighthouse scores: WordPress vs. Next.js (side by side)  
   \- Page load times: WordPress vs. Next.js for same pages  
   \- Total page weight: WordPress vs. Next.js  
   \- Number of HTTP requests: WordPress vs. Next.js  
   This report is key for the demo presentation to Tyler.

**Success Criteria**

* All redirects from redirect\_map.csv implemented and tested

* JSON-LD validates on schema.org validator for every page type

* XML sitemap accessible at /sitemap.xml with all pages listed

* Lighthouse SEO score \>= 95 on homepage and 3 inner pages

* Lighthouse Performance score \>= 90 on homepage

* Core Web Vitals all passing (green)

* performance\_comparison.md shows improvement over WordPress baseline

**Expected Output Files**

* Updated next.config.js with all redirects

* 404 logging middleware

* performance\_comparison.md

* Updated Vercel deployment

⚠ *Run Lighthouse in incognito mode to avoid browser extensions skewing results. Test on both mobile and desktop.*

## **Step 6: CMS Integration (Sanity)**

**Purpose:** Give Tyler the ability to edit his own content without touching code. This removes the biggest objection to leaving WordPress.

**What You Need Before Starting**

* Working staging site from Step 5

* All content currently in MDX files

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Integrate Sanity CMS (free tier) so the site owner can edit all content  
through a visual editor without developer help.  
   
1\. SET UP SANITY PROJECT  
   \- Create a new Sanity project (sanity init)  
   \- Configure Sanity Studio as an embedded route: /app/studio/\[\[...tool\]\]/page.tsx  
   \- Set up authentication (Tyler will be the admin user)  
   
2\. DEFINE CONTENT SCHEMAS  
   Based on the content types in the site, create schemas for:  
   \- Page (title, slug, body, seo metadata, hero image)  
   \- BlogPost (title, slug, body, author, publishDate, category, excerpt,  
     featuredImage, seo metadata)  
   \- Service (title, slug, description, features, pricing info,  
     images, cta, seo metadata)  
   \- SiteSettings (company name, phone, email, address, social links,  
     default OG image, navigation menu items)  
   \- Testimonial (name, role, quote, image, rating)  
   \- FAQ (question, answer, category)  
   
3\. MIGRATE CONTENT INTO SANITY  
   \- Write a migration script that reads all MDX files and creates  
     corresponding Sanity documents  
   \- Upload all images to Sanity's asset pipeline  
   \- Verify document count matches MDX file count  
   
4\. UPDATE NEXT.JS TO FETCH FROM SANITY  
   \- Replace MDX file reads with Sanity GROQ queries  
   \- Use next-sanity for server-side data fetching  
   \- Enable ISR (Incremental Static Regeneration) with  
     revalidate: 60 for content pages  
   \- Set up Sanity webhook to trigger Vercel revalidation on publish  
   
5\. VERIFY CONTENT EDITING WORKFLOW  
   \- Navigate to /studio on the staging site  
   \- Edit a page title and body text  
   \- Publish the change  
   \- Verify the change appears on the live page within 60 seconds  
   \- Document the editing workflow in cms\_guide.md for Tyler

**Success Criteria**

* Sanity Studio accessible at /studio with login

* All content from MDX files exists as Sanity documents

* All pages render from Sanity data (no more MDX file reads)

* Content changes in Sanity reflect on staging within 60 seconds

* cms\_guide.md documents the full editing workflow with screenshots

**Expected Output Files**

* Sanity project configured with all schemas

* Migration script for MDX-to-Sanity

* Updated Next.js pages fetching from Sanity

* cms\_guide.md (Tyler’s editing guide)

⚠ *Sanity’s free tier includes 3 users and 500K API requests/month. More than enough for a small business site. Only mention paid tiers if Tyler plans to add multiple editors.*

## **Step 7: Build the Demo Presentation**

**Purpose:** Package everything into a compelling side-by-side comparison Tyler can see and click through.

**What You Need Before Starting**

* performance\_comparison.md from Step 5

* Working staging URL with all content

* Sanity Studio access

**Claude Code Prompt**

*Copy this prompt into Claude Code. Adjust bracketed items for Tyler’s specific site.*

Create a demo presentation page I can walk Tyler through. Build this as  
a dedicated route on the staging site at /demo (excluded from sitemap).  
   
THE PAGE SHOULD SHOW:  
   
1\. HERO SECTION  
   'Your Website, Rebuilt for Speed and Growth'  
   \- Link to staging site (new) and current WordPress site (old)  
   
2\. PERFORMANCE COMPARISON (visual)  
   Side-by-side score cards showing:  
   \- Lighthouse Performance: WordPress vs. Next.js  
   \- Lighthouse SEO: WordPress vs. Next.js  
   \- Page Load Time: WordPress vs. Next.js  
   \- Mobile Score: WordPress vs. Next.js  
   Use green/red color coding. Pull data from performance\_comparison.md  
   
3\. FEATURE COMPARISON TABLE  
   WordPress (Current) vs. Next.js (New) for:  
   \- Page Speed  
   \- SEO Optimization  
   \- Mobile Experience  
   \- Content Editing  
   \- Security  
   \- Monthly Cost  
   \- Scalability  
   
4\. LIVE EDITING DEMO  
   Instructions for Tyler to:  
   \- Open /studio in a new tab  
   \- Change a headline  
   \- See it update on the live site  
   This proves he won't lose content editing capability  
   
5\. WHAT HAPPENS NEXT  
   Simple 3-step cutover plan:  
   Step 1: Tyler provides DNS access and form email destination  
   Step 2: We set up 301 redirects and verify everything  
   Step 3: DNS switch (15 minutes, zero downtime with preparation)  
   
6\. COST COMPARISON  
   Simple table: current monthly WordPress costs vs. projected Next.js costs  
   
Make this page visually polished. This is the sales tool.

**Success Criteria**

* /demo page is live on staging URL and looks professional

* Performance comparison data is accurate (pulled from real Lighthouse runs)

* All links work (to staging pages, to current WordPress pages, to /studio)

* Page is mobile-responsive

* The story flows: Problem → Solution → Proof → Next Steps

**Expected Output Files**

* /demo route on staging site

* All comparison data visualized

⚠ *This page is your closer. Practice walking through it before showing Tyler. Lead with his page speed scores — concrete numbers are more persuasive than feature lists.*

# **After Tyler Says Yes: What You’ll Need From Him**

Once Tyler approves the migration, you’ll need these items to complete the cutover. None of these are needed for the demo — only for go-live.

| Item Needed | Why | Blocking? |
| :---- | :---- | :---- |
| DNS registrar access (or nameserver update) | Point domain from WordPress hosting to Vercel | Yes — blocks go-live |
| Google Search Console access | Submit new sitemap, monitor indexing, catch errors | Yes — blocks SEO monitoring |
| Google Analytics access (GA4) | Transfer tracking to new site, preserve historical data | No — can add post-launch |
| Form submission email destination | Wire contact form to deliver leads to Tyler’s inbox | Yes — blocks form functionality |
| Any API keys for third-party services | Chat widgets, booking tools, CRM integrations | Depends on services used |
| WordPress admin export (optional) | Captures draft posts, comments, and plugin settings not visible publicly | No — nice-to-have |
| Current hosting provider details | Ensure WordPress backup is preserved; confirm email isn’t hosted there | Yes — blocks safe cutover |

