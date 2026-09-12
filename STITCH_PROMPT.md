# Nusa Property — Stitch Prompt

Prepared 2026-09-12. Copy the complete prompt below into Stitch. It is self-contained: no skill files, previous conversation or repository document is required to interpret it. This deliverable is the prompt only; Stitch has not been invoked and no generated design or live site is claimed as tested.

```text
Design the actual desktop, tablet and mobile screens for a calm, credible, quiet-premium multi-page property website: Nusa Property. Include one landing page and reusable detail-page designs for each housing option. Use the approved visual and content contract below. Instructions are in English; all customer-facing page copy must be Indonesian. Create the requested screens, not only a strategy essay. This is a design task: do not deploy, submit contact forms, send WhatsApp messages or publish anything.

PROJECT AND BUYER
Business/product: Nusa Property, a general property showcase currently featuring a residential project in Padalarang, Indonesia.
Audience assumption: Indonesian-speaking prospective home buyers and households comparing location and housing options. This is an assumption for design, not a claimed research finding.
Main task: understand the project, compare the four source-listed housing labels, open a detail page, explore a conceptual 3D house preview, review facilities and location, then try a clearly labelled demo contact flow.
Primary action: “WhatsApp demo” through a dummy WhatsApp number.
Secondary hero action: “Lihat pilihan hunian”, an in-page anchor.
Buyer uncertainty: suitability, current specifications, price, availability, legal evidence and actual condition. A home is a consequential financial decision; an inquiry is the appropriate next step. Do not reduce the page to a slogan and contact button or hide material unknowns to make it look minimal.

KNOWN CONTENT, NOT A LICENSE TO INFER
- Website brand: Nusa Property.
- Address, exactly: Jalan G.A. Manulang Km. 2, Rancabali Purabaya, Padalarang.
- Four housing labels, exactly: Blok P Cozy Level; Blok P Superimposed; Cluster Ebony; Blok Q. These are source-listed labels, not verified current inventory.
- Source-listed facilities: masjid; ruko; taman bermain; akses satu gerbang (one-gate); keamanan 24 jam. Attribute facilities to the project information and ask visitors to confirm current details. Do not turn the security description into a safety guarantee.
- Qualitative proximity stated by the source: Kota Baru Parahyangan, akses tol Padalarang, area perbelanjaan, pendidikan, dan layanan kesehatan. No travel times or added distances.
- Dummy WhatsApp number: 6280000000000. Visible format: +62 800-0000-0000 (Demo). Never present it as an active marketing contact.
- Map coordinates: -6.850577,107.4743523.
- Prices, land/building dimensions, bedroom/bathroom counts, floor plans, financing, availability, legal status/documents, completion and response times: not yet verified. Do not invent them.
- Actual visual condition and permission to reuse source images: not yet established. The project owner must confirm image reuse rights, contact authorization and map suitability before public launch.

CONTENT SOURCE
https://www.ganproperti.com/proyek.php?proyek=30
This URL is a content and imagery source only. DO NOT clone its pixels, old layout, fonts, decorative buttons, carousel, scripts, brochure form or tracking. The approved design below overrides its presentation. Source travel-time claims and source image-label prefixes “Ready” are deliberately excluded. Do not reintroduce them.

DESIGN OBJECTIVE
Make the offer easy to understand, evaluate and contact. Use precise alignment, composed typography, helpful information and source-specific imagery. Premium is restraint and execution, not decoration. The project-specific signature is a text-left/image-right hero with the actual source gate visual in its full wide frame, followed by four plainly identified housing choices. These design decisions are hypotheses, not a guarantee of trust, conversions, safety or higher property value.

LOCKED PALETTE AND MATERIAL
One light theme. Use only these supported colors and functional variants:
- Canvas: #F5F6F2 for the page, cards, menu, dialog, mobile contact bar and reversed text.
- Pine: #234B3C for primary actions, links, focus on canvas and closing contact band.
- Ink: #202B25 for headings and body.
- Muted: #5C655F for supporting text and captions on canvas.
- Line: #DDE3DC for structural separators, image placeholders and secondary hover fill.
- Pine hover: #193C2E.
- Pine active: #143024.
- Gallery-dialog backdrop only: rgb(32 43 37 / 72%), no blur.
- Transparent for genuinely unfilled controls.
Use canvas text on pine. Muted text belongs on canvas, not pine. Essential control borders and focus rings must be strong enough to see; the light divider color is not an accessible focus indicator. No invented extra palette.
Surface strategy: borders-only, with one inverse pine contact band. Radius 4px for imagery and controls. No shadows, gradient text, background gradients, glass, blur, glow, image darkening overlays, decorative texture, huge pills or large rounded containers. Captions and headings sit outside images, never over them. Prefer spacing and alignment over enclosing every paragraph in a card.

TYPOGRAPHY
Use Manrope, one family, locally supplied Latin variable WOFF2 at /fonts/manrope-latin.woff2, weight axis 200–800, normal style. Use 400, 500, 600 and 700 in this design. License file: /fonts/OFL.txt, SIL Open Font License 1.1. Use font-display: swap if implementation is exported. System sans-serif is loading/failure fallback only; do not silently replace Manrope or add a serif font.
- H1 exactly 60px / 3.75rem on desktop and tablet, 40px / 2.5rem below 768px; weight 600; line height 1.1 desktop and 1.15 mobile; tracking -0.04em.
- H2 40px / 2.5rem desktop, 32px / 2rem mobile; weight 600; line height 1.2; tracking -0.025em.
- Housing H3 20px / 1.25rem; weight 600; line height 1.4; tracking -0.015em.
- Wordmark 24px / 1.5rem; weight 700; line height 1.2; tracking -0.025em.
- Lead paragraph 18px / 1.125rem; weight 400; line height 1.65.
- Body/nav/actions 16px / 1rem; body weight 400 and line height 1.6; actions weight 600 and line height 1.4.
- Captions/helpers 14px / 0.875rem; weight 400, or 500 for labels; line height 1.5. No tiny or low-contrast disclaimers.
Max body measure 60ch; hero intro 44ch. Allow natural headline wrapping, not arbitrary single-word columns or forced tiny type. The H1 contains no inline image or hard-coded desktop-only line breaks.

SPACING AND GEOMETRY
Base spacing unit 4px. Supported spacing steps: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96px.
Container maximum: 1200px, centered. Side gutters: 20px below 768px, 32px from 768px, 40px from 1024px. At a 1280px viewport the content spans 1200px.
Breakpoints: 640px for narrow control behavior, 768px for content grids and mobile navigation, 1024px for desktop hero split. Use intrinsic reflow when enlarged text needs it.
Header minimum height 80px desktop, 72px mobile. Primary action minimum height 48px with 12px vertical and 24px horizontal padding; icon gap 8px; every control target at least 44×44px. Let labels wrap and controls grow when required. Icons, if necessary, are simple 20px SVGs, not emoji.
Hero from 1024px: text left/image right, columns 0.95fr / 1.05fr with 48px gap. Vertically align text against the image region. Hero padding 64px top and 80px bottom. No full-viewport-height emptiness.
Hero below 1024px: text followed by image, single column, gap 32px, padding 48px top and 56px bottom.
Standard sections: 80px vertical padding desktop, 56px mobile. Heading to intro 16px; section intro to content 32px.
Housing: two columns at 768px+, one column below; gap 32px horizontally and 40px vertically. The four options are genuinely separate items, so restrained image-and-text articles are appropriate.
Facilities: compact list with subtle row dividers; one column mobile, optionally two columns wider. No five-box decorative icon grid.
Gallery: two columns from 768px, one column mobile, 24px gap. No carousel, horizontal-scroll-only content or autoplay.
Location: clear text address and a simple map-link panel, not a fictional illustrated map.
Closing contact: full-width pine band with the same centered container. Footer returns to canvas.
The document owns scrolling. No nested section scroll traps or page-wide horizontal overflow.

FINAL HERO IMAGE CHOICE — DO NOT CHANGE
Use the gate as the hero image, uncropped at its native landscape ratio. The source is 2966×1440, approximately 2.060:1. The full export is /images/gate.webp at 1200×583; the small export is /images/gate-640.webp at 640×311. Use fluid width with height:auto and reserved intrinsic dimensions. Preserve the full project-name signage and both edges. A 4:3, portrait or tall hero crop is prohibited. Do not replace this choice with a facade hero. The gate may also appear uncropped in the gallery. Its visible caption is “Visualisasi proyek”.

APPROVED PAGE ORDER AND INDONESIAN COPY
1. HEADER
Text wordmark: “Nusa”, with the supporting name “Property”. Do not invent an official graphic logo or certification mark.
Home anchor: #beranda.
Navigation labels and anchors: “Pilihan hunian” → #hunian; “Fasilitas” → #fasilitas; “Galeri” → #galeri; “Lokasi” → #lokasi.
Primary action: “WhatsApp demo”.
Mobile disclosure label: “Menu”.

2. HERO / #beranda
Eyebrow: “Nusa Property”.
The ONLY H1 must be exactly: “Temukan rumah Anda di Padalarang.”
Lead: “Kenali pilihan hunian, fasilitas, dan lokasi pilihan bersama Nusa Property melalui demo interaktif ini.”
Primary CTA: “WhatsApp demo”.
Secondary CTA: “Lihat pilihan hunian”, links to #hunian.
Right image: full landscape gate, with visible caption “Visualisasi proyek”.

3. HOUSING / #hunian
H2: “Pilihan hunian”.
Four H3 labels, in this order, with the matching imagery:
- “Blok P Cozy Level” → /images/cozy.webp.
- “Blok P Superimposed” → /images/superimposed.webp.
- “Cluster Ebony” → /images/ebony.webp.
- “Blok Q” → /images/blok-q.webp.
Each image has the visible caption “Visualisasi proyek”. Each option has a prominent local route labelled “Lihat detail & 3D” plus a context-specific dummy WhatsApp link such as “Tanyakan Blok P Cozy Level”. Do not make the whole article a nested clickable region.
Visible note: “Untuk harga, luas tanah dan bangunan, jumlah kamar, ketersediaan, serta dokumen legal, konfirmasikan langsung kepada tim marketing.”
No price cards, fake floor plans, beds/baths icons, area figures, stock counts, availability badges or “Ready” prefixes.

4. HOUSING DETAIL PAGES / /hunian/{slug}
Create one reusable detail-page design populated for all four routes: /hunian/blok-p-cozy-level, /hunian/blok-p-superimposed, /hunian/cluster-ebony and /hunian/blok-q. Each page includes a breadcrumb, unique H1 and summary, the matching source image, visible unverified-information note, conceptual interactive 3D viewer, short visual-character list, links to the other housing options, contact section and mobile contact bar.
The 3D viewer is a live canvas region, not a fake screenshot. Show visible controls “Putar kiri”, “Putar kanan” and “Reset tampilan”; pointer drag rotates, wheel/pinch zooms. Use a restrained procedural house model inspired by each facade with the same canvas/pine/ink/line palette and simple directional lighting. No perpetual auto-rotation. Directly disclose: “Model ini merupakan interpretasi konseptual dari visual proyek, bukan gambar teknis atau representasi ukuran sebenarnya.” Keep the source image as the factual visual reference and no-JS fallback.

5. FACILITIES / #fasilitas
H2: “Fasilitas lingkungan”.
List: “Masjid”; “Ruko”; “Taman bermain”; “Akses satu gerbang (one-gate)”; “Keamanan 24 jam”.
Visible note: “Fasilitas tercantum pada informasi proyek. Konfirmasikan kondisi dan detail terkininya kepada tim marketing.”
These are source-listed amenities, not independently verified operational guarantees.

6. GALLERY / #galeri
H2: “Gambaran lingkungan”.
Use the gate and environment-1, environment-2, environment-3 images. These depict project signage/facades; do not relabel them as parks, mosques or a specific housing cluster.
Every figure has the visible caption “Visualisasi proyek” and meaningful descriptive alt text.
Helper: “Visualisasi proyek dari materi pemasaran. Tampilan dan kondisi aktual perlu dikonfirmasi kepada tim marketing.”
Image enlargement affordance: “Perbesar gambar”. Native dialog close action: “Tutup”.

7. LOCATION / #lokasi
H2: “Lokasi di Padalarang”.
Address: “Jalan G.A. Manulang Km. 2, Rancabali Purabaya, Padalarang”.
Copy: “Informasi proyek menyebut kedekatan dengan Kota Baru Parahyangan, akses tol Padalarang, area perbelanjaan, pendidikan, dan layanan kesehatan.”
Map action: “Buka di Google Maps”.
Destination: https://www.google.com/maps/search/?api=1&query=-6.850577%2C107.4743523
Map link ONLY. No iframe, live map embed, remote tiles, invented cartography, route-time widgets or initial third-party requests.

8. CLOSING CONTACT / #kontak
H2: “Coba alur kontak properti.”
Primary CTA: “WhatsApp demo”.
Secondary contact route: “Minta brosur & harga”.
Helper: “Percakapan dilanjutkan melalui WhatsApp. Harga, spesifikasi, ketersediaan, dan dokumen legal perlu dikonfirmasi kepada tim marketing.”
Display phone: “+62 800-0000-0000 (Demo)”.
“Minta brosur & harga” opens a WhatsApp inquiry, NOT a PDF download, form, fake success modal or instant brochure delivery. There is no contact backend.

9. FOOTER
Project name, approved address, dummy WhatsApp contact and a restrained source attribution link labelled “Informasi proyek”.
Do not invent legal pages, developer credentials, awards, office hours, testimonials, copyright ownership claims or a separate company address.

CONTACT BEHAVIOR
Primary destination: https://wa.me/6280000000000
Optional primary message: “Halo, saya ingin informasi properti dari Nusa Property.”
Optional brochure message: “Halo, saya ingin meminta brosur dan informasi harga dari Nusa Property.”
Option messages may include the exact housing label only, without assumed specifications or availability. URL-encode the message in the query string. The visitor opens WhatsApp and chooses whether to send it. No automated sending, contact storage, fake submission, artificial urgency, “free” consultation promise or response-time guarantee.
Use real anchors for navigation/external destinations and buttons only for genuine local state changes. Make WhatsApp/Google Maps context clear. If a destination opens a new tab, include a consistent accessible new-tab hint and rel=noopener noreferrer.

MOBILE STICKY CTA AND SAFE AREA
Below 768px, add one fixed bottom contact bar, canvas background with line top divider, containing a full-width “WhatsApp demo” primary action. Minimum height 72px excluding the safe area; horizontal padding 20px, vertical padding 12px plus env(safe-area-inset-bottom, 0px) at bottom.
Reserve at least 88px plus env(safe-area-inset-bottom, 0px) below page content, and reserve the actual larger bar height if enlarged text makes it grow. Nothing essential, the footer, focused controls or dialog actions may hide behind the bar. Do not add a second floating WhatsApp bubble. The bar is absent at desktop widths.

NATIVE ACCESSIBILITY AND NO-JS FALLBACK
Use Indonesian document language, semantic header/nav/main/section/footer landmarks, one H1 and logical H2/H3 order. Include a visible-on-focus skip link “Lewati ke konten”. Use meaningful figure captions and alt text.
Mobile navigation: native details/summary disclosure labelled “Menu”, in document flow, with ordinary nav links. Enter/Space work natively. JavaScript enhancement closes it on Escape and returns focus to the summary; choosing a link closes it. Do not use application role=menu for site navigation or trap focus in nonmodal navigation. Without JavaScript, the disclosure and all links still work.
Gallery: real links to full local image files, progressively enhanced to native dialog using showModal(). The dialog has an accessible name, full uncropped image, visualization caption and a visible “Tutup” button. Focus the close control on opening; maintain modal keyboard behavior; Escape/native cancel and the explicit close button both close it; restore focus to the triggering gallery link. Do not require clicking the backdrop to escape. Without JavaScript or dialog support, the original image links remain usable.
Focus: 2px visible outline, 4px offset; pine on canvas, canvas on pine. Minimum touch area 44×44px; prominent actions at least 48px high. Normal text contrast minimum 4.5:1; large text and meaningful UI minimum 3:1. Preserve usability at 200% text size, narrow widths and forced-color/high-contrast modes.
Image failure must leave readable option names, captions, inquiry links and dialog close control. Reserve media dimensions; no permanent spinner or success simulation. There are no form-related loading, error or success states because no form/backend exists.

INTERACTION STATES AND MOTION
Primary actions: pine default, pine-hover on hover, pine-active while pressed; clear focus ring. Secondary actions: canvas/transparent with pine text and border; line fill on hover. Text links visibly underline or strengthen their underline on interaction. Reversed actions on the pine band use canvas fill with pine text.
Static content is visible immediately. Hover/focus color or underline changes can be instantaneous. Optional pressed-control transform is 1px for 120ms ease-out; optional dialog opacity transition is 160ms ease-out. Only opacity/transform may animate.
Under prefers-reduced-motion:reduce, remove transforms/transitions and use instant anchor navigation. State, focus and content must remain available.
No intro animation, scroll-triggered reveals, staggered lists, perpetual motion, pulsating buttons, parallax, autoplay, custom cursor, scroll hijacking, animated counters, skeleton shimmer or animation library.

IMAGE AND FONT INPUTS
Local image names, actual dimensions, and 640px variants:
- /images/gate.webp 1200×583; /images/gate-640.webp 640×311.
- /images/cozy.webp 1200×669; /images/cozy-640.webp 640×357.
- /images/superimposed.webp 1200×675; /images/superimposed-640.webp 640×360.
- /images/ebony.webp 1200×668; /images/ebony-640.webp 640×356.
- /images/blok-q.webp 1200×675; /images/blok-q-640.webp 640×360.
- /images/environment-1.webp 1200×675; /images/environment-1-640.webp 640×360.
- /images/environment-2.webp 1200×675; /images/environment-2-640.webp 640×360.
- /images/environment-3.webp 1200×675; /images/environment-3-640.webp 640×360.
Use the local files when attached. Otherwise these exact source URLs identify the image inputs; do not substitute stock/generated imagery or clone the source page:
- gate: https://www.ganproperti.com/dokumen/proyek/63c7b-Gemini_Generated_Image_rsl2p8rsl2p8rsl2_11zon.jpg
- cozy: https://www.ganproperti.com/dokumen/proyek/68068-Gemini_Generated_Image_k32nlek32nlek32n_11zon.jpg
- superimposed: https://www.ganproperti.com/dokumen/proyek/16d55-IMG_4239_Edited_11zon.jpg
- ebony: https://www.ganproperti.com/dokumen/proyek/9a7f0-Gemini_Generated_Image_mwnxu0mwnxu0mwnx_11zon.jpg
- blok-q: https://www.ganproperti.com/dokumen/proyek/44856-Gemini_Generated_Image_io8ia5io8ia5io8i_11zon.jpg
- environment-1: https://www.ganproperti.com/dokumen/proyek/bcd87-Gemini_Generated_Image_4ilvip4ilvip4ilv_11zon.jpg
- environment-2: https://www.ganproperti.com/dokumen/proyek/b341f-Gemini_Generated_Image_vz7e76vz7e76vz7e_11zon.jpg
- environment-3: https://www.ganproperti.com/dokumen/proyek/aa4c8-Gemini_Generated_Image_kmg6i1kmg6i1kmg6_11zon.jpg
If an input is inaccessible, report exactly which asset is needed in the design notes; do not invent replacement real-project photographs or pretend a source was inspected. All eight visuals remain labelled “Visualisasi proyek”, including the edited image.

Alt text examples: “Visualisasi gerbang masuk kawasan hunian dengan papan nama proyek.”; “Visualisasi fasad Blok P Cozy Level.”; “Visualisasi fasad Blok P Superimposed.”; “Visualisasi deretan hunian Cluster Ebony.”; “Visualisasi fasad hunian Blok Q.” Environment-image alt text describes only the visible facade/access area, not an inferred cluster or amenity.

Keep native wide composition for non-hero images. A standardized 16:9 centered housing frame may trim a small edge area; no tall crops removing roof/frontage/access context. Dialogs always show the complete image. No object removal, recoloring, mirroring, baked text or fake visual proof.

Local font: /fonts/manrope-latin.woff2. Source: https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2
Official license source: https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt
These source URLs are design-input/provenance references, not runtime browser dependencies. If exporting implementation notes, require local assets, responsive srcset/sizes, correct width/height attributes, eager high-priority hero loading and lazy below-fold images. Initial page load must have zero third-party requests; external destinations load only after the visitor chooses a link.

DO NOT ADD
No invented prices, dimensions, bedrooms, availability, “Ready” badges, financing, legal credentials, response times, travel times, distances, guarantees, urgency, customer logos, reviews, testimonials, awards, stock people, fake dashboards, random 3D objects, proof counters, pricing tables, unnecessary FAQs, newsletter forms or contact backends. No fake “download complete” state for the brochure inquiry. No unrelated research lane or alternative aesthetic. No pixel clone.

DELIVERABLES AND FINAL SELF-CHECK
Produce the landing page and the reusable housing detail-page template at desktop 1280px, tablet 768px and mobile 375px. Show at least one populated detail screen plus clear variants for the other three properties. Annotate mobile menu closed/open states, keyboard focus, primary hover/pressed states, 3D viewer controls and native gallery dialog open/close behavior.
Add concise handoff notes covering typography/color/spacing, native interaction and no-JS behavior, safe-area reserve, local asset loading, image disclosure and release blockers.
Check the design against the following before finishing:
1. The first viewport identifies the project, location context and next action; this is a design self-check, not a claimed five-second user test.
2. The H1 is exactly “Temukan rumah Anda di Padalarang.” and the hero uses the uncropped landscape gate, with full signage preserved.
3. Every section answers a buyer question and material unknowns remain visible.
4. The four housing labels, detail routes, dummy WhatsApp number and coordinates match the supplied facts.
5. Every image visibly says “Visualisasi proyek”; no present-condition or readiness claim is inferred.
6. Mobile is readable, has no horizontal overflow, and reserves enough space for the safe-area contact bar.
7. Navigation, WhatsApp, map and image viewing have genuine no-JS routes; menu/dialog keyboard and focus behavior are specified.
8. The brochure action is a WhatsApp inquiry, the location is link-only and there is no initial third-party request or fake backend.
9. The approved palette, Manrope, sizes, 4px corners and restrained motion are preserved.
10. State any unresolved image permissions, contact authorization or missing facts. Never claim usability, accessibility, conversion, browser testing, permission or runtime performance without actual evidence.
```
