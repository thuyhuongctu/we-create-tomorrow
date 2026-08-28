# We Create Tomorrow

**Bilingual karaoke software for the anthem of the School of Economics, Cần Thơ University**

[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.22080061-blue)](https://doi.org/10.5281/zenodo.22080061)

## Abstract

*We Create Tomorrow* is a web-based karaoke application developed to promote the anthem of
the School of Economics, Cần Thơ University, in two language versions: Vietnamese ("Chúng ta
cùng đi") and English ("We Create Tomorrow"). The application displays real-time,
time-synchronized lyrics (karaoke), supports instant language switching, and provides a
supplementary sheet-music view for practice. All processing happens client-side in the
user's browser; the application has no server component and collects no personal data.

**Live demo:** <https://thuyhuongctu.github.io/we-create-tomorrow/>

## Authors and contributions

| Author | Affiliation | ORCID | Contribution |
|---|---|---|---|
| Phan Anh Tú | Associate Professor, Ph.D., Vice Rector of the School of Economics, Cần Thơ University, School of International Business | [0000-0003-0667-3137](https://orcid.org/0000-0003-0667-3137) | Scientific methodology direction; program logic design |
| Đỗ Thùy Hương | Lecturer, Vinh Long University of Technology Education (VLUTE); Ph.D. candidate, School of Economics, Cần Thơ University | [0000-0002-7711-2487](https://orcid.org/0000-0002-7711-2487) | System design; core programming and interface; deployment |

The full description of contributions and copyright ownership status is presented in
[`ho-so/00-thong-tin-ho-so.md`](https://github.com/thuyhuongctu/School-of-Economics/blob/main/ho-so/00-thong-tin-ho-so.md),
part of the accompanying copyright registration dossier.

## Features

1. Plays the audio recording with real-time, time-synchronized lyrics (karaoke).
2. Instantly switches between the Vietnamese and English recording and displayed lyrics.
3. Sheet-music view ("Notes"), presenting lyrics organized by musical section.
4. Quick navigation by song structure (Intro, Chorus, Bridge, ...).
5. Light/dark theme, per the user's choice (saved locally in the browser).
6. Installable to the home screen as a standalone web app (progressive web app).
7. Responsive layout, compatible with desktop and mobile devices.

## Technology

TypeScript 5.7, React 19, Vite 6, Tailwind CSS 4. The application runs entirely client-side,
with no dependency on any server service; see the licenses of the libraries used in
[`chuong-trinh/mo-ta-chuc-nang.md`](https://github.com/thuyhuongctu/School-of-Economics/blob/main/chuong-trinh/mo-ta-chuc-nang.md)
(section 6) in the copyright registration dossier.

## Source structure

```
src/
  App.tsx                    Application entry point, overall layout
  main.tsx                   React initialization
  components/
    header.tsx               Header: song picker, view mode, light/dark theme toggle
    karaoke-stage.tsx         Main karaoke screen, lyric synchronization
    player-bar.tsx            Play/pause and seek controls
    section-nav.tsx           Navigation by song structure
    sheet-view.tsx            Sheet-music view
    staff.tsx                 Staff (musical stave) rendering
    brand.tsx                 Brand assets
    footer.tsx                Footer: copyright, source link, and DOI
  lib/
    anthem.ts                 Time-synchronized lyric data, both languages
    audio-engine.ts            Audio playback control
    player-store.ts            Shared player state
    i18n.ts                    Bilingual UI strings
    utils.ts                   Shared utility functions
  styles.css                 Color palette, background effects, shared layout
public/
  brand/                    Brand assets (logo, character illustration, background)
  audio/                    Two audio recordings (Vietnamese, English)
  favicon.svg, icon-*.png   App icons
```

## Deployment and reproduction

```bash
npm install
npm run dev       # local development server, http://localhost:5173
npm run build     # production build into dist/
```

The application is deployed automatically to GitHub Pages via GitHub Actions on every push
to the `main` branch (see the workflow at
[`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

## Citation

An independent archival copy is deposited on Zenodo (CERN Data Centre), version v.1.0, under
Restricted Access (metadata public, files available for download only upon approval by the
copyright holders):

> Phan, A. T., & Đỗ, T. H. (2026). *We Create Tomorrow: karaoke software for the anthem of
> the School of Economics, Cần Thơ University* (Version v.1.0) [Software]. Zenodo.
> https://doi.org/10.5281/zenodo.22080061

Machine-readable citation format: see [`CITATION.cff`](CITATION.cff).

## Copyright

© 2026 Phan Anh Tú, Đỗ Thùy Hương. All rights reserved – see [LICENSE](LICENSE). The source
code and accompanying materials are made publicly available for reference, review, and
copyright-registration purposes; no license is granted to copy, modify, or redistribute
without the written consent of both co-authors.

This software is a work accompanying the copyright registration dossier at
[thuyhuongctu/School-of-Economics](https://github.com/thuyhuongctu/School-of-Economics)
(registration type: "Computer program"). The lyrics of the two songs used in the
application are registered under a separate dossier, type "Literary work".
