// MicroscopeDB — core data definitions. This file loads FIRST.
// Brand files (data/brands/<id>.js) each call MDB.addBrand({...}); other data files fill the DB.* tables.
// To add a brand: create data/brands/<id>.js and add its id to data/manifest.js.
var MDB = globalThis.MDB = { version: '4.1.0', built: '2026-10-08' };
const DB = { companies: [], oem_relations: [], sources: [], optics: [], lineage: [], review: [], gaps: { brands: {}, newBrands: [] } };
MDB.addBrand = function (b) { DB.companies.push(b); };

// Allowed values. tools/validate.js checks the data against these.
MDB.ENUMS = {
  type: ['compound', 'stereo'],
  kind: ['macroscope', 'digital', 'surgical', 'slide_scanner', 'laser_scanning', 'super_resolution'],
  price_tier: ['budget', 'mid', 'premium', 'ultra'],
  light_sources: ['led', 'halogen', 'incandescent', 'mercury', 'metal_halide', 'xenon', 'laser', 'mirror', 'fluorescent_tube', 'fiber'],
  status: ['active', 'historical'],
  confidence: ['verified', 'cited', 'approx'],
  relation: ['merger', 'acquisition', 'oem', 'rebrand', 'split', 'name_change', 'milestone', 'transfer']
};

// Model fields (see README.md for the full schema).
// Required: id name series type subtype introduced discontinued price_tier price_new price_used illumination magnification objectives eyepieces stage
//           fluorescence phase_contrast darkfield dic motorized inverted camera_port software applications noteworthy oem_source
// Optional: kind, discontinued_year, discontinued_approx, discontinued_note, light_sources, mag_min, mag_max, currency, sources[], image, objective_guide, accessories
