# Nusa Property — Design Contract

Status: READY for implementation. Issued 2026-09-12. This contract precedes UI code; asset verification is recorded separately in ASSETS.md.

## 0. Research Log

- Authority: the user-approved quiet-premium brief is the visual contract. The GAN Properti project page is a content and asset source, not a pixel-clone reference.
- Read: quiet-premium-web/SKILL.md and prompts/stitch.md; frontend/SKILL.md; design/README.md, design-system-architecture.md and stitch-skill.md; perfection/README.md; designpowers/README.md, routing.md, orchestration.md and lane-c-review.md.
- Embedded brand research, Lazyweb, generated concept drafts, decorative signature effects and clone extraction: intentionally not run, per the user's selected design and override of generic research/decoration gates. No other brand is being imitated.
- Baseline: no application surface existed in the supplied baseline. Existing .codegraph symlink and other workers' files are preserved. No Git, deployment, external submission, agent spawning, ulw-plan or permanent tests are authorized for this worker.
- Source content retrieved on 2026-09-12 from `https://www.ganproperti.com/proyek.php?proyek=30`. Source travel-time claims and the image-label word “Ready” are deliberately excluded; neither establishes current availability or a reliable journey duration.
- This worker owns DESIGN.md, STITCH_PROMPT.md, ASSETS.md, public/images/** and public/fonts/** only. App code, README and independent rendered verification belong to the root/app worker.

## 1. Atmosphere & Identity

A composed, readable residential-project page for people evaluating a home in Padalarang. Quiet premium means precise Manrope typography, pine-green actions on an off-white canvas, straightforward information and openly captioned project imagery. Its distinctive composition is a left-aligned, text-first hero paired with the project's gate image on the right, followed by four plainly named housing options. No luxury claims, fake authority, gradients, glass, ornamental textures, oversized rounded cards or animated spectacle.

### Buyer, task and evidence

- Audience assumption: Indonesian-speaking prospective home buyers and households comparing a Padalarang residence. This is a design assumption, not user-research evidence.
- Main task: understand the location, distinguish the four source-listed housing labels and ask marketing for details. Primary conversion is an informed WhatsApp inquiry, not a purchase or reservation.
- Risk: a home is a consequential financial decision. Prices, dimensions, room counts, legal documents, financing, construction status and availability are not verified. Keep the need to confirm these visible near housing and contact content.
- Evidence available: the supplied project source, address, housing labels, source-listed facilities, source images and supplied contact/map destinations. Visuals are not evidence of current on-site conditions.
- Primary CTA: “WhatsApp demo”. Secondary hero CTA: “Lihat pilihan hunian”. “Minta brosur & harga” opens the same dummy WhatsApp route, never a fake download or submission.

### Information architecture and approved copy

| Order / anchor | Buyer-facing job | Required content |
| --- | --- | --- |
| Header / #beranda | Identify and navigate | Text wordmark “Nusa” with “Property”; nav “Pilihan hunian”, “Fasilitas”, “Galeri”, “Lokasi”; primary marketing link |
| Hero / #beranda | Explain and orient | Eyebrow “Nusa Property”; one H1 exactly “Temukan rumah Anda di Padalarang.”; supporting text “Kenali pilihan hunian, fasilitas, dan lokasi pilihan bersama Nusa Property. Diskusikan detailnya dengan tim marketing.”; two approved CTAs; gate image and visible “Visualisasi proyek” caption |
| Housing / #hunian | Help distinguish options | H2 “Pilihan hunian”; four H3 labels exactly “Blok P Cozy Level”, “Blok P Superimposed”, “Cluster Ebony”, “Blok Q”; one associated image each; a local detail-page link; context-aware marketing link; no invented specification rows |
| Housing detail / /hunian/{slug} | Compare one option in depth | Breadcrumb, source image, descriptive visual notes, interactive conceptual 3D preview, confirmation checklist, adjacent housing navigation and dummy WhatsApp route |
| Facilities / #fasilitas | Explain source-listed amenities | H2 “Fasilitas lingkungan”; masjid, ruko, taman bermain, akses satu gerbang (one-gate), keamanan 24 jam; compact list, not five decorative cards |
| Gallery / #galeri | Show source imagery honestly | H2 “Gambaran lingkungan”; gate and three environment images, each captioned “Visualisasi proyek”; images enlarge through progressive enhancement |
| Location / #lokasi | Make the location assessable | H2 “Lokasi di Padalarang”; exact address “Jalan G.A. Manulang Km. 2, Rancabali Purabaya, Padalarang”; qualitative nearby places; map link |
| Contact / #kontak | Demonstrate the contact flow | H2 “Coba alur kontak properti.”; primary dummy WhatsApp link; “Minta brosur & harga” link; visible dummy-number explanation |
| Footer | Reidentify and preserve contact | Project name, address, source attribution and marketing number; no invented legal links, company credentials or contact backend |

Housing note: “Untuk harga, luas tanah dan bangunan, jumlah kamar, ketersediaan, serta dokumen legal, konfirmasikan langsung kepada tim marketing.”

Facility note: “Fasilitas tercantum pada informasi proyek. Konfirmasikan kondisi dan detail terkininya kepada tim marketing.” Do not turn “keamanan 24 jam” into a guarantee of safety.

Gallery note: “Visualisasi proyek dari materi pemasaran. Tampilan dan kondisi aktual perlu dikonfirmasi kepada tim marketing.” This note supplements, not replaces, the per-image caption.

Location copy: “Informasi proyek menyebut kedekatan dengan Kota Baru Parahyangan, akses tol Padalarang, area perbelanjaan, pendidikan, dan layanan kesehatan.” No minutes, kilometers to landmarks, routes, commute guarantees or invented map illustration.

Contact helper: “Percakapan dilanjutkan melalui WhatsApp. Harga, spesifikasi, ketersediaan, dan dokumen legal perlu dikonfirmasi kepada tim marketing.” No promised response speed, appointment, free service, financing rate or guaranteed brochure delivery.

## 2. Color

Light theme only. The following are the supported color tokens; do not add an unrecorded hex, named color, opacity variant or gradient. Semantic aliases may reference these tokens without adding colors.

| Token | Exact value | Role |
| --- | --- | --- |
| --canvas | #F5F6F2 | Page, cards, dialog, mobile bar, reversed text |
| --pine | #234B3C | Primary actions, links, focus on canvas; closing contact band |
| --ink | #202B25 | Headings, body text |
| --muted | #5C655F | Supporting copy and captions on canvas |
| --line | #DDE3DC | Nonessential dividers, image placeholders, secondary hover fill |
| --pine-hover | #193C2E | Primary hover and pressed link text |
| --pine-active | #143024 | Primary active/pressed fill |
| --backdrop | rgb(32 43 37 / 72%) | Native gallery dialog backdrop only; no blur |
| --transparent | transparent | Unfilled link and button surfaces |

- Normal text must meet 4.5:1; large text and meaningful non-text UI must meet 3:1. Confirm computed combinations in the built page. The light divider token is not a sufficient focus indicator or essential control boundary.
- Use canvas text on pine. Do not place muted text or line-colored body text on pine. A focus outline on pine uses canvas; on canvas it uses pine.
- No status palette is needed: there is no form submission, async data workflow or invented success state. If implementation adds a genuinely necessary status, update the contract first and do not imply a backend.

## 3. Typography

One family: `Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Self-host `/fonts/manrope-latin.woff2`; use `font-style: normal`, the verified font-weight range in ASSETS.md and `font-display: swap`. The actual face is required; fallbacks only cover loading/failure. No serif or second decorative family. Font license: `/fonts/OFL.txt`.

| Token / use | Desktop | Mobile below 768px | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| --text-hero / only H1 | 3.75rem / 60px | 2.5rem / 40px | 600 | 1.1 desktop; 1.15 mobile | -0.04em |
| --text-section / H2 | 2.5rem / 40px | 2rem / 32px | 600 | 1.2 | -0.025em |
| --text-card / H3 | 1.25rem / 20px | 1.25rem / 20px | 600 | 1.4 | -0.015em |
| --text-brand / wordmark | 1.5rem / 24px | 1.5rem / 24px | 700 | 1.2 | -0.025em |
| --text-lead / intro | 1.125rem / 18px | 1.125rem / 18px | 400 | 1.65 | 0 |
| --text-body / body, nav, actions | 1rem / 16px | 1rem / 16px | 400 body; 600 actions | 1.6 body; 1.4 controls | 0 |
| --text-small / captions, eyebrow, helpers | 0.875rem / 14px | 0.875rem / 14px | 400 captions; 500 labels | 1.5 | 0 |

Supporting tokens: `--weight-body: 400`, `--weight-label: 500`, `--weight-heading: 600`, `--weight-brand: 700`; `--leading-body: 1.6`, `--leading-lead: 1.65`, `--leading-heading: 1.2`, `--leading-card: 1.4`, `--leading-small: 1.5`; `--tracking-tight: -0.04em`, `--tracking-heading: -0.025em`, `--tracking-card: -0.015em`, `--tracking-eyebrow: 0.08em`, `--tracking-body: 0`. Hero line-height is responsive as stated above.

Body max measure is 60ch; hero intro max measure is 44ch. H1 remains natural text with no inline image or forced desktop-only line break. Target three comfortable lines in the desktop split and natural wrapping on mobile; do not shrink below the approved mobile size to force a particular wrap. Never clip text or make important disclosures smaller than 14px.

## 4. Spacing & Layout

### Supported spacing and geometry

| Token | Value |
| --- | --- |
| --space-0 | 0 |
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-5 | 20px |
| --space-6 | 24px |
| --space-8 | 32px |
| --space-10 | 40px |
| --space-12 | 48px |
| --space-14 | 56px |
| --space-16 | 64px |
| --space-20 | 80px |
| --space-24 | 96px |
| --content-max | 1200px |
| --radius | 4px |
| --border-width | 1px |
| --focus-width | 2px |
| --focus-offset | 4px |
| --touch-min | 44px |
| --action-height | 48px minimum, not fixed text-clipping height |
| --header-height | 80px desktop; 72px below 768px, both minimums |
| --icon-size | 20px |
| --sticky-action-height | 72px minimum excluding safe-area inset |
| --sticky-reserve | 88px minimum excluding safe-area inset; increase if bar grows |
| --dialog-max | 1000px |
| --viewer-min-height | 360px |
| --viewer-min-height-mobile | 320px |
| --z-header | 10 if sticky behavior is used |
| --z-mobile-action | 20 |

Native dialog uses the browser top layer. Intrinsic mechanics (`auto`, percentages, `min()`, `max()`, `clamp()`, `minmax()`, fractions, viewport units and safe-area environment values) are not extra design tokens. Spacing endpoints must come from the scale. Breakpoints are 640px for narrow controls, 768px for content grids and 1024px for the desktop hero.

### Page geometry

- Center one container at max 1200px with 20px side gutters below 768px, 32px from 768px and 40px from 1024px. At 1280px the 1200px content width leaves 40px each side.
- Header: wordmark left; horizontal navigation and CTA right on wider screens. Use compact mobile Menu disclosure below 768px. Allow reflow if content or text zoom needs it; do not force an overflowing row.
- Hero at 1024px+: two aligned columns `minmax(0, 0.95fr) minmax(0, 1.05fr)`, 48px gap; text left, gate image right. Center the text vertically against the image region. Hero uses 64px top and 80px bottom padding, not viewport-height emptiness.
- Hero below 1024px: single column, text then image, 32px gap; 48px top and 56px bottom padding. H1 stays 60px at tablet and becomes 40px below 768px.
- Final hero choice: gate, uncropped landscape. The source is 2966×1440 (about 2.060:1). Use `/images/gate.webp` at 1200×583 and `/images/gate-640.webp` at 640×311, with `width="1200" height="583"`, `width: 100%`, `height: auto` and no forced tall frame. Preserve the entire project-name signage, entrance and both edges; no 4:3 or portrait hero crop. Slight integer rounding during resize is the only aspect-ratio change. Caption sits outside the image.
- Standard sections use 80px vertical padding desktop and 56px mobile. Headline to supporting text 16px; section header to content 32px; card/text stacks 12–24px according to hierarchy.
- Housing: four separate options in a two-column grid at 768px+, one column below; 32px column gap, 40px row gap. Images use a consistent native/wide frame; no specification-table placeholders.
- Facilities: section introduction plus a compact ruled list. List can have two columns on wider screens, one on mobile. No icons are necessary; any icon is a simple 20px SVG with accessible text beside it.
- Gallery: two-column grid at 768px+, single column below, 24px gap; no autoplay carousel or horizontal scrolling dependency.
- Location: address/proximity copy with a restrained, genuine Google Maps link only. No live embed, map iframe, remote map tiles or third-party request on initial page load. Do not draw a fictional geographic map.
- Closing contact: full-width pine band with the same centered container, clear heading and two contact routes. Canvas text. Footer returns to canvas.
- Mobile CTA below 768px: fixed bottom full-width canvas bar, top divider, 12px vertical/20px horizontal padding and `padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px))`. One full-width primary action. Reserve at least `calc(88px + env(safe-area-inset-bottom, 0px))` below document content; reserve the actual larger bar height when text enlargement causes growth.
- With a modal open, the modal/top-layer close control must remain above the bar. Do not let the sticky action obscure the footer, focused items, menu items or dialog controls.
- The document owns page scroll. No nested section scroll traps. Use `min-width: 0` on grid children; wrap long labels. Never use overflow hiding to conceal a broken layout.

## 5. Components

Implement reusable semantic primitives against this contract. The worker does not prescribe a framework or require extra dependencies. Every relevant state must be exercised by the root/app worker; no permanent component-showcase or test files are required.

### Container, Section and SectionHeading

- Structure: shared width wrapper; semantic section with id and labelled heading; heading/intro stack. Variants: normal canvas, pine closing section. Spacing: Section 4.
- States: static content; not interactive. No hover, active, disabled, loading, empty or success UI. Omit an unsupported optional block instead of fabricating content.
- Accessibility: one page H1; logical H2/H3 hierarchy; source order remains understandable without CSS. Anchor targets must not be obscured by any sticky header.

### ActionLink and TextLink

- Structure: `<a href>` for navigation, WhatsApp and map destinations; `<button type="button">` only for real local state changes. Never a clickable div.
- Variants: primary (pine fill, canvas text), secondary (canvas/transparent fill, pine border and text), contextual text link (pine, underline affordance), reversed primary (canvas fill, pine text on the contact band).
- Spacing: 48px minimum block-size for prominent actions, 12px vertical/24px horizontal padding, 8px icon gap, 4px radius. Inline navigation and discrete control hit areas are at least 44px. Multi-line labels may increase height.
- Default/hover/active: primary uses pine/pine-hover/pine-active. Secondary and reversed use line on hover, pine-colored text and border. Text links strengthen underline and use pine-hover. A pressed control may use the 1px press motion token. No image/card hover effect unless it is actually actionable.
- Focus: visible 2px outline with 4px offset, pine on canvas or canvas on pine. Never remove focus without an equally visible replacement.
- Disabled/loading/success: not applicable to real outbound links. Do not show a spinner, pretend sent state or disabled contact link. A failure to open WhatsApp leaves the number and destination available.
- External destinations: identify WhatsApp and Google Maps in visible context. If opening a new tab, use `rel="noopener noreferrer"` and a consistent accessible new-tab hint. No auto-navigation.

### SiteHeader and MobileNavigation

- Structure: `<header>`, project home anchor, `<nav aria-label="Navigasi utama">`; mobile `<details><summary>Menu</summary>…links…</details>` or an equivalently native progressively enhanced disclosure. Use ordinary navigation semantics, not application `role=menu`.
- Variants: desktop horizontal cluster; mobile disclosure in document flow. Closed/open states have an unambiguous toggle label and expanded state. Reuse link states.
- Keyboard: native Enter/Space toggle. Enhanced Escape closes the disclosure and restores focus to its summary; clicking a destination closes it. Do not trap focus in nonmodal navigation.
- No-JS: `<details>` and all anchors remain functional; never hide the only navigation behind a JS-only button.

### HousingCard

- Structure: `<article>` with source image/figure, visible visualization caption, exact H3 housing label, a primary local “Lihat detail & 3D” route and a context-specific marketing anchor. Variants: the four source-listed options only.
- Layout: image followed by an unboxed text stack. No heavy enclosing surface, badge or fake spec grid. Spacing: 16px media-to-title, 12px title-to-action.
- States: card itself is static. Its marketing link has shared states. Failed imagery retains reserved frame, helpful alt text and readable label/contact action; it never blocks inquiry.
- Accessibility: link name must include the housing label, e.g. “Tanyakan Blok P Cozy Level”. No nested click targets. Prices, areas, bedrooms and current availability must not be inferred from the image or its filename.

### PropertyDetail and InteractivePropertyViewer

- Each housing option owns a static Astro route under `/hunian/{slug}` with a unique title and description. The source image remains the factual visual reference.
- The 3D preview uses a shared local GLB house asset as a conceptual illustration, not an architectural model, floor plan, property-specific facade, dimension claim or construction promise. Show that disclosure directly beside the viewer.
- Viewer controls: pointer drag rotates the camera, wheel/pinch zooms, and visible buttons rotate left, rotate right and reset the view. The static source image remains available when WebGL or JavaScript is unavailable.
- The viewer uses the existing canvas, line, ink, pine and muted palette only. Lighting creates depth; it must not introduce gradients, glow, glassmorphism or decorative perpetual animation.
- The WebGL island loads only on housing detail pages. Keep the remainder of each page static Astro HTML.
- Focus and touch controls follow the shared 44px minimum and visible focus treatment. Reduced-motion mode disables transitional transforms; direct manipulation remains available.

### FacilityList

- Structure: semantic list of the five supplied facilities plus the source/confirmation note. Spacing: 16px row padding and line dividers.
- State: static. No manufactured tabs, active-selection controls, counters or hover animations. Icon, if used, is decorative with `aria-hidden="true"`; the text carries meaning.

### ProjectFigure, GalleryLink and GalleryDialog

- Structure: `<figure>` with explicitly sized `<img>`, descriptive alt and `<figcaption>`. Gallery figures use a normal image-file anchor as the non-JS route; JavaScript may progressively enhance that same link to native `<dialog>`.
- Variants: hero gate, housing, gallery thumbnail, full uncropped dialog. All show “Visualisasi proyek”; informative alt begins “Visualisasi …”, even for the edited image without “Generated” in its source filename.
- Media: full assets `/images/{name}.webp`; responsive assets `/images/{name}-640.webp`, where names are gate, cozy, superimposed, ebony, blok-q, environment-1, environment-2, environment-3. Intrinsic dimensions and focal guidance are in ASSETS.md. Full dialog uses `object-fit: contain`, not a second crop.
- Gallery link states: visibly focusable; underline/text affordance “Perbesar gambar” or equivalently explicit accessible action. Do not rely on a hover-only magnifier.
- Dialog states: closed/open; visible “Tutup” button, image and caption; `showModal()` supplies modal top-layer behavior. Use an accessible name, focus the close control on opening, keep keyboard focus inside the modal, close with Escape/native cancel or the explicit button, then restore focus to the activating gallery link. Do not require backdrop click to close.
- No-JS/unsupported-dialog fallback: the real anchor still opens the local full image. Preserve adjacent disclosure text in the page; no dead button.
- Loading/error: reserve image space with width/height. No shimmer or endless spinner. A failed enlarged image must leave title, caption, close button and original image link available. Do not announce fake load success.

### LocationPanel, ContactSection and MobileContactBar

- Structure: address in text, qualitative proximity list, genuine external map anchor; contact section with marketing and brochure-inquiry anchors; mobile bar reuses ActionLink. No form fields, consent theatre, lead storage or contact API.
- WhatsApp destination for this demo: `https://wa.me/6280000000000`. Display phone as “+62 800-0000-0000 (Demo)”. This is intentionally a dummy number and must not be represented as an active marketing contact. URL-encode the prefilled message; users decide whether to continue.
- Map destination: `https://www.google.com/maps/search/?api=1&query=-6.850577%2C107.4743523`. The user must confirm map suitability before public launch.
- State: outbound link feedback only. No request-submitted dialog, automated WhatsApp sending, guaranteed appointment or fake downloaded brochure. Visible copy says the conversation continues through WhatsApp.

## 6. Motion & Interaction

| Token | Value | Allowed use |
| --- | --- | --- |
| --motion-feedback | 120ms | Optional brief pressed-control transform |
| --motion-dialog | 160ms | Optional dialog opacity transition, never delay accessibility or content |
| --motion-ease | ease-out | Shared easing |
| --press-offset | 1px | Optional translateY while a real control is active |
| --motion-reduced | 0ms | Reduced-motion override |

Static content is visible immediately. Hover/focus color and underline changes may be instantaneous; motion is not a requirement. Animate only opacity/transform where it clarifies a state. No animation library, spring engine, animated statistics, skeleton shimmer, custom cursor, glass, gradients, parallax, scroll hijacking, autoplay, perpetual motion or staggered reveal. Anchor navigation works natively; do not force smooth scrolling. Under `prefers-reduced-motion: reduce`, remove transforms and transitions and use instant navigation. State, focus, Escape behavior and content must remain intact.

## 7. Depth & Surface

Strategy: borders-only. Use the 1px line token for structural separators and pine for essential secondary-action borders. Surfaces share the canvas; the closing contact band is an intentional pine inverse section, not an elevation effect. Image and control corners are 4px. No box-shadow, text-shadow, backdrop-filter, glow, gradient overlay, image darkening for text, or ornamental frame. Captions sit beneath images; text never overlaps imagery.

## 8. Accessibility Constraints & Accepted Debt

### Non-negotiable constraints

- Target WCAG 2.2 AA, without claiming compliance before testing. Set document language to Indonesian; use semantic landmarks and a visible-on-focus “Lewati ke konten” skip link.
- Support keyboard-only inquiry and image viewing, visible focus, Escape/close/focus restoration, screen-reader labels, reduced motion and 200% text resizing. At narrow widths, preserve all critical limitations and the source captions.
- Minimum actionable hit area 44×44px; primary button minimum 48px high. Meet the color contrast thresholds in Section 2. Do not use color alone to communicate a state.
- Respect forced-color/high-contrast browser modes; preserve native outlines/control behavior when custom styling cannot render. Dialog contents must remain operable with short viewport heights.
- All images reserve intrinsic dimensions; eagerly load the hero image and avoid lazy-loading the likely LCP. Below-fold imagery may lazy-load. Serve local assets and font; no analytics, trackers or remote-font dependency.
- No hidden legal/material information, payment calculator, fake download, inaccessible carousel, fabricated proof or mock contact submission.

### Persona-oriented acceptance checks for the root worker

| Assumed context | Task | Required result / evidence |
| --- | --- | --- |
| Mobile buyer on a small screen | Read options and request pricing | One readable column; reachable WhatsApp action; footer and focused items clear of the safe-area bar |
| Keyboard-only visitor | Navigate sections and enlarge/close a gallery item | Logical tab order; native links/disclosure; visible focus; Escape and restored focus exercised |
| Low-vision / enlarged-text visitor | Read address, captions and unknowns | No clipping at 200% text resize; legible muted copy; no essential information lost |
| Reduced-motion or limited-data visitor | Understand the offer without delays | No reveal dependency; image dimensions reserved; local responsive imagery; zero perpetual animation |
| No-JS visitor | Browse all four options and contact marketing | Navigation, local image links, map and WhatsApp work without scripting |

### Accepted scope limits and open release blockers

| Item / severity | Location and affected users | Status / reason | Owner / exit |
| --- | --- | --- | --- |
| Current prices, dimensions, bedrooms, availability and legal evidence / material content gap | Housing and contact; all prospective buyers | Unknown by brief; not invented. Visible confirmation guidance is required. This is not accepted missing accessibility. | Marketing supplies verified information before adding claims or enabling a transactional flow |
| Asset reuse rights and contact authorization / public-release blocker | All eight source visuals and marketing/map destinations | Publicly accessible does not establish permission. User requires confirmation before public launch. Local evaluation only until cleared. | Project owner obtains image permission and confirms contact/map details |
| Source visual authenticity / disclosure requirement | Every project image | Supplied files may be AI-generated or edited; label all as “Visualisasi proyek” and do not promise actual condition | Project owner supplies authorized, verified photographs if a factual-photo claim is needed |
| No contact backend / approved scope | All contact actions | User explicitly approved outbound WhatsApp only. No stored leads, fake success or simulated download. | Root worker verifies actual link destinations without sending a message |
| Live app, browser, screen-reader and performance verification / handoff obligation | Built page, not these docs | This asset/document worker does not certify a UI or invent scores. Root independently verifies; CLI only, no LSP installation. | Root/app worker captures fresh responsive and interaction evidence before app sign-off |
| No permanent tests; broad PR review outside scope / approved workflow | Workspace | This workflow introduces no permanent tests. Broad PR review is outside this worker's scope; its no-agent restriction does not prohibit the root's independent reviewers. | Root still conducts independent browser/visual review, including two independent visual reviews, using temporary/read-only checks within authorized scope |

No accessibility defect is silently accepted. A screenshot does not prove keyboard or assistive-technology behavior; mark an unexercised interaction as unverified. Design judgment follows actual rendered evidence, and the brief takes precedence over decorative taste opinions.
