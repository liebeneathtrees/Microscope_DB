# MicroscopeDB

A reference database of microscope makers and models: specifications, price ranges, optical systems, lineage and corporate history. Plain HTML, CSS and JavaScript. No framework, no build step needed to run it.

## Run it

- **Locally:** open `index.html`. Keep the `css/`, `js/` and `data/` folders next to it. If you would rather have one file, open `dist/MicroscopeDB_standalone.html` (or build it, below). It needs nothing else.
- **GitHub Pages:** upload `index.html`, `.nojekyll` and the `css/`, `js/` and `data/` folders to the branch Pages serves. Dragging whole folders into GitHub's upload page keeps their structure. File names are case-sensitive.

If the data cannot load, the page says which files are missing instead of showing an empty screen.

## Layout

```
index.html            page shell; loads core.js, manifest.js, then the app modules
css/styles.css
js/                   app code (search, router, browse, modal, compare, pages, data-view, guide, mylist, …)
data/
  core.js             defines DB and MDB, and the allowed values (MDB.ENUMS). Loads first
  manifest.js         lists the brand files, in sidebar order, and the other data files
  brands/<id>.js      one file per brand: MDB.addBrand({ …brand fields…, models:[ … ] })
  genealogy.js        corporate events (mergers, acquisitions, OEM supply, milestones, transfers)
  sources.js          sources and archives; models and events refer to them by id
  optics.js           optical-system generations and the models in each
  lineage.js          predecessor/successor chains
  review.js           open questions about the data
  gaps.js             candidate models and makers not yet listed
  guide.js            antique guide timeline and instruments
  collection.js       the owner's instruments on the My Collection page
tools/
  validate.js         checks every data file
  build.js            builds dist/MicroscopeDB_standalone.html
tests/
  browser-test.py     headless-browser check of every brand, model window, view, deep link, filter and the personal list
```

## Editing data

1. **Change a model:** edit its entry in `data/brands/<brand>.js`.
2. **Add a model:** add an object to that file's `models` array. Copy a neighbour. The id must start with the brand id (`zeiss-axioplan`).
3. **Add a brand:** create `data/brands/<id>.js` with a `MDB.addBrand({…})` call, and add the id to `data/manifest.js`.
4. **Run `node tools/validate.js`.** It loads the data the way the browser does and reports duplicate ids, missing fields, bad values, broken references and date problems. Fix any ERROR lines before publishing.
5. **Rebuild the standalone file** with `node tools/build.js` if you distribute it.

Node is only needed for steps 4 and 5. For a full browser check, run `python3 tests/browser-test.py .` from this folder (needs Python with Playwright and Chromium). The site itself runs without it.

### Model fields

Required: `id name series type subtype introduced discontinued price_tier price_new price_used illumination magnification objectives eyepieces stage fluorescence phase_contrast darkfield dic motorized inverted camera_port software applications noteworthy oem_source`

Optional: `introduced_approx` (shows a tilde), `kind` (macroscope, digital, surgical, slide_scanner, laser_scanning, super_resolution), `discontinued_year`, `discontinued_approx`, `discontinued_note`, `light_sources`, `mag_min`, `mag_max`, `currency`, `sources` (ids from `data/sources.js`), `image`, `objective_guide`, `accessories`.

- `discontinued` is always `true` or `false`. Put the year in `discontinued_year`; set `discontinued_approx: true` and a `discontinued_note` when it is an estimate.
- Prices read `$800–$1,500` (or `€300–€800` with `currency:"EUR"`). They are estimates and carry no date.
- Set `introduced_approx: true` when the introduction year is inferred, and say how in the entry text or a review note.
- `image` takes a path or URL; the model window shows it when present.
- Brand `categories` must match the types of its models (the validator checks this).

### Recording how sure you are

Review items may carry `sources` (shown as links). Optics, lineage and source entries carry `confidence` or `checked` values: `verified`, `cited` or `approx`. Open questions go in `data/review.js` with a suggested action; delete the entry once it is settled. If two sources disagree, keep both in the entry text or in a review note rather than choosing silently.

## Site features

- Every page has a URL: `#/brand/zeiss`, `#/model/zeiss/zeiss-axioplan`, `#/compare?m=zeiss:zeiss-axioplan,leica:leica-dmrb`, `#/data/review?brand=leitz`.
- The search box searches brand names and specifications (try `halogen 160mm`). The "Must have" chips (fluorescence, phase, DIC, inverted, motorized) combine with it.
- **My List** (on the My Collection page, and "Add to My List" in any model window) is saved in the visitor's own browser with export and import. It is separate from the published collection.
- **Data Notes** (sidebar footer) lists open questions, coverage gaps and sources.

## Notes

- The two decorative home-page photos (`stereo_microscope.jpg`, `compound_microscope.jpg`) are not part of this package. Keep your existing copies next to `index.html`; the page shows a placeholder without them.
- Tested in headless Chromium from a local folder, over HTTP, and as the standalone file. Firefox and Safari have not been tested.
