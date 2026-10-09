# Data changelog

## v4.1.0: first researched model batch

Added **1 model**, with sources: `zeiss-axiolab5` (ZEISS Axiolab 5 / Axiolab 5 FL).

- Specifications come from ZEISS's own Product Information PDF (version 1.0): stand variants, 10 W LED and optional 35 W halogen, up to three LED fluorescence channels, encoded 5-position M27 nosepiece, 75 × 50 rackless stage, 15 mm focus range, 23 mm field of view, contrast methods, dimensions. Two ZEISS pages are linked as sources (marked verified).
- Marked approximate or unknown rather than guessed: introduction year (~2019, inferred from the PDF's edition code CZ 05-2019), price (none recorded), DIC (true because some configurations offer it; the stand specification does not list it).
- `price_tier` is mid-range, by comparison with entries priced $5,000–$15,000 (for example the BX53); it is not from a price list.
- Added to the "Current ICS optics" generation (manufacturer states infinity optics and an M27 nosepiece) and to the Zeiss "Clinical and teaching" lineage chain, replacing the dashed "Axiolab 5" placeholder.
- Removed from the Coverage Gaps list. Four review items were opened (introduction year, DIC, price, and Axiovert 5).
- **Axiovert 5 digital was not added.** ZEISS's press release (12 January 2023) gives the introduction date and contrast methods but no specifications. The date is recorded in the Coverage Gaps entry and a review item.
- Displays: approximate introduction years now show a "~"; review notes now show their source links; the validator checks both.
- Totals now: 21 brands, 274 models, 22 sources, 85 open review items.

Why only one model: search results are mostly retailer pages that disagree with each other, so each model needs the manufacturer's own sheet. Specifications that cannot be traced to a sheet are left empty rather than filled in.

---

# Data changelog: v4.0.0 (baseline for the above)

Baseline: 21 brands, 281 models. Result: 21 brands, **273 models** (8 duplicate records merged), 34 genealogy events (6 added), 81 open review items.

How certain is each change? Three levels are used throughout the data and the site:

- **verified**: checked against the source named beside it during this update (Science Museum Group, Microscope Museum, Utrecht BIC Museum, Leica Microsystems, Molecular Expressions, Covington Innovations, Grace's Guide, Archives Hub, Cytiva notices, and the owner-supplied Meiji SKT brochure and manual).
- **cited**: taken from a source named in the research notes (Overney article on Leitz, Evident's stereo page, Microscope Museum Nikon pages, Alan Wood archives). Not re-checked.
- **approx**: general knowledge, not yet checked against a manual or brochure. Optical systems, lineage chains and estimated discontinuation years are in this group.

## Company history

- Reichert: founded 1876 (was 1847); ownership chain rewritten to American Optical 1962 → Warner-Lambert 1968 → Cambridge Instruments 1986 → Leica Group 1990 (was: Wild Heerbrugg 1986, and AO line acquired 1971). Verified against Science Museum Group, Microscope Museum and Utrecht BIC Museum.
- American Optical: Reichert direction reversed (AO acquired Reichert 1962; Warner-Lambert took over AO 1968). Cycloptic re-dated 1958 → 1957 and credited as the first modern CMO stereo (it was described as an early zoom design; Leica says five-step). Verified against Science Museum Group and Leica.
- Bausch & Lomb: StereoZoom re-dated 1947 → 1959 and re-described as the first stepless-zoom stereo on the Greenough design (it was recorded as the first CMO zoom and the template for all CMO designs); "continues as the Leica MZ series" removed. The genealogy entry for the launch changed type from name_change to a new "milestone" type. Verified against Leica and Molecular Expressions (FSU).
- Vickers: founded 1963 (was 1925), with predecessors noted; ownership chain "GEC → Cambridge Instruments → Leica 1990" replaced by Bio-Rad 1988 (sources disagree: 1988 vs 1989). Verified against Grace's Guide, Archives Hub and Microscope Museum. Two genealogy entries added.
- DeltaVision: brand marked Historical; all three models marked discontinued 2021 and new prices cleared; service transfer to Leica added. Verified against the Cytiva notices (sales ended February 2021; support through 31 December 2025).
- Leica: company record said Danaher 2011; corrected to 2005 to match the genealogy entry (Danaher acquired Leica Microsystems in September 2005).

## Duplicates

- nikon-optiphot: Two records shared this id (finite original 1978–1990; CF optics 1978–"true"). Both describe the same 1978 Optiphot, so they were merged.
- olympus-bx53: Two records shared this id (both 2012, current). Merged, keeping the fuller "UIS2, LED, motorized option" record.
- zeiss-stemi-sv6: The Stemi SV6 appeared twice with conflicting dates (1999–2014 and 1993–) and conflicting zoom ratios. Merged; dates are unconfirmed.
- lw-scientific-revelation3: Revelation III appeared twice (2005 and 2015). Merged; the introduction year is unconfirmed.
- leitz-dialux20: The same Leitz model was filed under both Leica and Leitz. The Leica copy was dropped.
- leitz-ortholux: Ortholux and Ortholux I (Black Enamel) both described the 1937 black-enamel Ortholux. Merged.
- leitz-dialux: Dialux and Dialux 1 (Black Enamel) both described the mid-1950s black-enamel Dialux. Merged.
- nikon-diaphot-tmd: "Diaphot (original)" (1985–1994) and "Diaphot TMD" (from 1982) are the same stand; TMD is its model code. Merged, and the misleading "300" id removed.
- nikon-smz1: renamed "SMZ-1 / SMZ-2T" to "SMZ-1"; SMZ-2T keeps its own record (nikon-smz2t).
- swift-stereo80: renamed "Stereo 80 / SW50 Entry Stereo" to "Stereo 80"; SW50 stays in swift-sw-series.

## Moved

- leica-laborlux12 → leitz-laborlux12: it is a Leitz model with no Leitz duplicate, so it was relocated rather than dropped.

## IDs

- dv-elite → deltavision-elite
- natopt-163 → national-optical-163
- lw-revelation3 / lw-scientific-revelation → lw-scientific-revelation3 (merged).

## Corrections

- meiji-skt-3b: price_tier "low" → "budget" (it was the only model outside budget/mid/premium/ultra and dropped out of every tier filter). Sources added: the brochure and manual.
- olympus-ckx31: new price cleared (model discontinued 2015).
- swift: featured was missing; set to false like the other non-Big-Four brands.
- leitz: categories compound/stereo → compound (now derived from its models; it was tagged for a type with no models).

## Status

- olympus-sz61: discontinued true → false (cited: listed as current on Evident's stereo page; not re-checked).
- olympus-szx7: discontinued true → false (cited: listed as current on Evident's stereo page; not re-checked).
- olympus-szx10: marked current (was discontinued 2012); cited from Evident's stereo page, not re-checked. Its introduction year is queued, not changed.

## Field formats

- discontinued is now always true/false, with discontinued_year (number or null), discontinued_approx and discontinued_note for estimates. Previously it mixed false (137), a year (75) and true (69).
- 57 price strings normalized to one format (e.g. "$800–1,800" → "$800–$1,800"); the 3 Euromex prices now read "€300–€800" with currency EUR.
- Added derived fields light_sources (fixed list: led, halogen, incandescent, mercury, metal_halide, xenon, laser, mirror, fluorescent_tube, fiber) and mag_min / mag_max (parsed from the magnification text, ignoring figures in parentheses). The original free text is kept for display.
- Added kind for 10 models that did not fit compound/stereo: macroscope (Wild M400, M410, M420, M450; Nikon AZ100), digital (Keyence VHX-7000), surgical (Labomed Prima ENT), slide_scanner (Motic PSM1000), laser_scanning (Thorlabs Bergamo II), super_resolution (DeltaVision OMX).

## Discontinued years

- 62 of the 69 "discontinued: true" entries now carry an estimated year (marked approximate, with the basis and confidence from the enrichment table). 3 are left as discontinued with no year (leica-m60, olympus-ix73, meiji-skt-3b: possibly still current); olympus-sz61 and olympus-szx7 set to current. Skipped: leica-dialux20 (record dropped in a merge).

## Queued, not applied

- 32 model-date suggestions from the second pass were added to the review queue instead of overwriting existing dates (the source notes say each needs a dated brochure). IDs not found: -e800, -e400, -e1000.

## Added

- Coverage gaps: 21 brands and 7 new makers parsed from the Missing Models document into data/gaps.js (shown on the Data Notes page). No candidate was added as a model; none has been checked against a catalog.

## New data tables

- `data/sources.js`: 19 sources: 11 verified references, 1 cited reference, 5 archives to search (cited), and 2 owner-supplied manufacturer documents (the Meiji SKT brochure and manual).
- `data/optics.js`: 14 optical-system generations covering 101 models (tube length or tube lens, thread, parfocal distance).
- `data/lineage.js`: 32 chains covering 143 models. Models not yet in the database appear as dashed names.
- `data/review.js`: 81 open questions, each with the issue, a suggested action, its basis and a confidence level. Merged duplicates keep every conflicting value here.
- `data/gaps.js`: candidate models and makers from the Missing Models notes. None has been checked against a catalog and none was added as a model.

## Known open points

- The Evident, Overney and Microscope Museum Nikon citations are marked `cited`, not `verified`.
- `reichert-fluovert` and `zeiss-telaval31` are queued rather than moved or re-dated.
- Only 18 of 273 models have a source attached. Adding sources is the main remaining data task.
- No price has an "as of" year yet.
- Optical-system rows are missing for Reichert, Vickers, Bausch & Lomb, Meiji, Swift, Labomed, Euromex, AmScope, LW Scientific and National Optical.
