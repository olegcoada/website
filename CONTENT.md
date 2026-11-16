# Content inventory

Pulled from the live Framer site (olegcoada.com) on 2026-11-16. Content only:
the redesign will not reuse the old layout or visual design.

| Old page | Where it lives now |
| --- | --- |
| Home (4 case studies, testimonials, announcement bar) | `src/content/projects/*.md`, `site.config.ts` (tagline, announcement) |
| About (/Info) | `src/content/pages/about.md` |
| Inquire (offer, pricing, process, track record) | `src/content/services/visual-identity.md`, `src/content/pages/offer.md`, `src/content/data/clients.json` |
| Logos (26 marks, mono + colour) | `src/content/data/logos.json` |
| Archive & FAQ (97-item grid, chat-style FAQ) | `src/content/data/archive.json`, `src/content/data/faq.json` |
| Contact | `src/content/pages/contact.md` |

## Images and video

All media (40 case study items, 52 logo files, 97 archive items) still points at
Framer's CDN (`framerusercontent.com`). It renders fine today but will break if the
Framer site is cancelled. Before switching off Framer, download the files into
`src/assets/` (or export originals from Figma) and replace the URLs.

## Needs a decision from Oleg

- **About copy**: the live page repeated the opening sentence in two versions. I kept
  “I work with funded tech founders at one specific moment: when the product has
  outgrown the brand.” The other version was: “…when the brand stops reflecting the
  ambition. You have the technology.”
- **FAQ voice**: answers come from the old chat widget and talk about Oleg in the third
  person. The rest of the site is first person.
- **Case study summaries**: taken from the track record lines on /inquire. Ultramassive
  had none, so its summary is new wording and should be checked.
- **Years**: the old site doesn't show project years; the field is optional.
- **Track record vs case studies**: Adaptional, Thoughtful AI and Jasper AI appear in the
  track record but have no case study.
