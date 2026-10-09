// REVIEW QUEUE — open questions. Delete an entry (or set status:"closed") once checked.
// Edit this file directly. Run `node tools/validate.js` after any change.
DB.review = [
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"nikon-optiphot",
    field:"merged duplicate",
    issue:"Two records shared this id (finite original 1978–1990; CF optics 1978–\"true\"). Both describe the same 1978 Optiphot, so they were merged. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      subtype:["research upright (finite, original)", "research upright (CF optics)"],
      discontinued:[1990, true],
      price_used:["$200–$700", "$100–$400"],
      illumination:[
        ["Built-in halogen 12V 50W or 100W (model dependent)", "Variable intensity; wide filter holder"],
        ["Halogen 6V/30W", "HBO fluorescence"]
      ],
      magnification:["40x–1600x; full DIC and fluorescence capable", "40x–1000x (4x–100x CF objectives, 10x/18mm eyepieces)"],
      objectives:[
        "160mm finite, RMS thread. CF Achromat, CFN Plan Achromat, CF Fluor, CF Plan Fluor, CF Apochromat series.",
        "CF Plan Achromat / CF Plan Fluorite (160mm, pre-CFI60)"
      ],
      eyepieces:["CFW 10x/20mm; 23.2mm tube. CF EW 10x/25mm wide-field available.", "10x/18mm; binocular; HFX trinocular camera system"],
      stage:["Large mechanical stage; coarse + fine coaxial; achromatic condenser NA 1.25", "Mechanical large format"],
      dic:[true, false],
      applications:[
        ["Research", "Clinical pathology", "Fluorescence", "Phase contrast", "DIC", "Photomicrography"],
        ["Research", "Fluorescence", "Neuroscience", "Histology", "Phase contrast", "Photomicrography"]
      ],
      noteworthy:[
        "Top of Nikon’s finite-era upright line — direct competitor to the Olympus BH-2 BHS. Full DIC and epi-fluorescence. Objectives interchangeable with the Labophot and Optiphot-2. Plastic fine-focus gear failure is a known issue. The Optiphot-POL (polarizing) variant is particularly sought after by geologists.",
        "The original Optiphot (1978) introduced Nikon's CF (Chrome-Free) optical system to the research market. CF optics corrected chromatic aberration within the objectives — a significant improvement over compensating eyepiece systems. The built-in HFX camera system was a major selling point. Extremely durable; thousands remain in active use today."
      ]
    },
    id:"R001"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"olympus-bx53",
    field:"merged duplicate",
    issue:"Two records shared this id (both 2012, current). Merged, keeping the fuller \"UIS2, LED, motorized option\" record. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      subtype:["research upright (UIS2, LED, motorized option)", "research upright"],
      price_new:["$8,000–$25,000", "$5,000–$15,000"],
      price_used:["$4,000–$12,000", "$1,500–$5,500"],
      illumination:[
        ["LED transmitted (standard)", "Optional motorized fluorescence turret", "Optional laser coupling"],
        ["LED (TH4-200)", "Metal Halide (fluorescence)"]
      ],
      magnification:["40x–2000x; wide-field FN22", "20x–1000x"],
      objectives:["UIS2 infinity-corrected, 180mm tube lens, M25 thread.", "UPlan FL N / UPlanSApo series"],
      eyepieces:["WHSZ 10x/22mm; FN22 field number", "10x/22mm"],
      stage:["Motorized stage option; encoded XY and Z; universal condenser", "Mechanical / optional motorized"],
      motorized:[true, false],
      software:["cellSens", "cellSens Standard"],
      applications:[
        ["Research", "Neuroscience", "Materials science", "Fluorescence", "DIC", "Confocal coupling", "Live imaging"],
        ["Pathology", "Histology", "Materials science", "Research", "Multi-contrast"]
      ],
      noteworthy:[
        "Current research-grade BX flagship, replacing the BX51. LED illumination standard. Available motorized (BX53F/BX53-P) and manual configurations. Designed for integration with confocal scanners and super-resolution modules.",
        "Modular design accepts polarization, darkfield, DIC, and fluorescence. Accepts U-SRG3 motorized stage. Widely used in pathology departments worldwide."
      ]
    },
    id:"R002"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"zeiss-stemi-sv6",
    field:"merged duplicate",
    issue:"The Stemi SV6 appeared twice with conflicting dates (1999–2014 and 1993–) and conflicting zoom ratios. Merged; dates are unconfirmed. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      series:["Stemi SV", "Stemi"],
      subtype:["research zoom stereo (CMO)", "zoom stereo (CMO, mid-tier)"],
      introduced:[1999, 1993],
      discontinued:[2014, false],
      price_new:[null, "$1,200–$3,500"],
      price_used:["$400–$1,200", "$300–$1,100"],
      illumination:[
        ["Built-in incident fiber illuminator", "Optional transmitted base", "Optional LED ringlight"],
        ["Halogen (ring + transmitted base)"]
      ],
      magnification:[
        "8x–50x (6:1 zoom; 10x/23mm eyepieces); up to 80x with 1.6x aux",
        "6x–50x (continuous zoom; 10x/20mm eyepieces; 8.3:1 zoom ratio; click-stops optional)"
      ],
      objectives:[
        "CMO system; 0.63x/0.8x/1x/1.6x PlanApo objectives; 30mm Interface 60 photo port",
        "CMO zoom body 0.6x–5.0x; 0.5x/1.5x/2x auxiliary objectives"
      ],
      eyepieces:["10x/23mm Plan standard", "10x/20mm; binocular or trinocular 45 degree"],
      stage:["Multiple base options; 76mm neck diameter", "Flat base; various stand options"],
      darkfield:[true, false],
      applications:[
        ["Embryology", "Electronics", "Gemology", "Natural history", "Industrial QC"],
        ["QC inspection", "Dissection", "Electronics", "Embryology", "Education", "Natural history"]
      ],
      noteworthy:[
        "Entry-level CMO stereo in Zeiss’s Stemi SV line. Common Main Objective design gives superior image quality vs. Greenough. WARNING: Some SV6 and SV8 units from the 1970s–80s suffer lens cement delamination. Inspect through eyepieces before buying — purple fringing and haze are the telltale signs.",
        "The Stemi SV6 is Zeiss mid-tier CMO (Common Main Objective / parallel optics) stereo, positioned between the entry Stemi 2000 (Greenough) and the flagship SV11. 8.3:1 zoom with optional click-stops for reproducible magnification recall. CMO design gives superior image brightness and flatness vs. Greenough at equivalent magnification. Binocular and trinocular heads available. Compatible with SV11 objective and accessory system. Widely used in European industrial QC, IVF labs, and biology departments."
      ]
    },
    id:"R003"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"lw-scientific-revelation3",
    field:"merged duplicate",
    issue:"Revelation III appeared twice (2005 and 2015). Merged; the introduction year is unconfirmed. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      subtype:["student / clinical upright (budget, USA-assembled)", "clinical / veterinary"],
      introduced:[2005, 2015],
      price_tier:["budget", "mid"],
      price_new:["$400–$800", "$900–$1,700"],
      price_used:["$100–$300", "$250–$650"],
      illumination:[
        ["LED (variable)", "12V DC power option"],
        ["LED"]
      ],
      objectives:["Semi-Plan Achromat 4x/10x/40x/100x; RMS thread", "Plan Achromat / Semi-Plan"],
      eyepieces:["WF 10x/18mm; binocular or trinocular Siedentopf", "10x/18mm"],
      stage:["Mechanical stage; coaxial coarse + fine focus", "Mechanical"],
      phase_contrast:[false, true],
      camera_port:[false, true],
      applications:[
        ["Education", "Clinical basics", "Veterinary student", "K–12 biology"],
        ["Veterinary diagnostics", "Clinical labs", "Hematology", "Fecal parasitology"]
      ],
      noteworthy:[
        "LW Scientific’s entry-level upright, assembled in Lawrenceville, Georgia USA. The domestic assembly and strong customer service make LW Scientific popular with US veterinary schools and teaching hospitals. 12V DC power option for field use. A step below the i4 in optical quality but above typical import-only budget scopes.",
        "Designed specifically for veterinary clinical use. US-assembled with excellent service and parts availability. Phase contrast for parasitology. Very popular in US veterinary schools and small animal practices."
      ]
    },
    id:"R004"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"leitz-dialux20",
    field:"merged duplicate",
    issue:"The same Leitz model was filed under both Leica and Leitz. The Leica copy was dropped. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      name:["Dialux 20 / Dialux 22", "Leitz Dialux 20"],
      subtype:["routine / clinical upright (160mm transition era)", "research upright (Leitz era)"],
      introduced:[1976, 1978],
      discontinued:[1988, true],
      price_used:["$150–$500", "$200–$750"],
      illumination:[
        ["Built-in 6V 20W halogen (Dialux 20) or 12V 50W (Dialux 22)", "Variable intensity; field iris standard"],
        ["Halogen 12V/100W", "HBO 50/100W fluorescence"]
      ],
      magnification:["40x–1600x", "25x–1000x (2.5x–100x objectives, 10x eyepieces)"],
      objectives:[
        "160mm finite, Leitz/RMS thread, 45mm parfocal. First Leitz production microscope to use 160mm (DIN 58887, adopted 1976). Compatible with the large Leitz 160mm objective library (NPL, PL, EF series).",
        "NPL Fluotar / Plan Achromat (160mm, Leitz thread)"
      ],
      eyepieces:["Periplan GW 10x/20mm (23.2mm tube)", "10x/22mm; binocular 30°; trinocular available"],
      stage:["Mechanical coaxial stage; coaxial coarse + fine focus; Abbe condenser", "Mechanical 145x105mm"],
      fluorescence:[false, true],
      dic:[false, true],
      applications:[
        ["Clinical lab", "Education", "Hematology", "Histology"],
        ["Research", "Clinical pathology", "Fluorescence", "DIC", "Neuroscience", "Histology"]
      ],
      noteworthy:[
        "The Dialux 20 (1976) marks Leitz’s transition from 170mm to 160mm DIN — one of the most significant compatibility milestones in Leitz history. Completely new design vs. the black-enamel Dialux 1: coaxial focus, modern angular lines, built-in Köhler-capable illumination. Filter size: early Dialux 20 condensers use 32mm filters (uncommon); later variants use 25mm.",
        "Leitz Wetzlar's primary research upright of the late 1970s–80s. Excellent NPL Fluotar objectives widely praised for fluorescence performance. DIC (Nomarski) available. Extremely robust German construction. Widely distributed in European research institutions; still functional and actively used today."
      ]
    },
    id:"R005"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"leitz-ortholux",
    field:"merged duplicate",
    issue:"Ortholux and Ortholux I (Black Enamel) both described the 1937 black-enamel Ortholux. Merged. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      name:["Ortholux", "Ortholux I (Black Enamel)"],
      subtype:["research upright (flagship, 170mm era)", "research upright (170mm, black era)"],
      discontinued:[true, 1975],
      price_tier:["premium", "mid"],
      price_used:["$300–$1,200", "$200–$800"],
      illumination:[
        ["Incandescent (built-in)", "HBO mercury arc (optional for fluorescence)"],
        [
          "External lamphouse (single or dual port, era-dependent)",
          "Transmitted + optional epi-illumination from rear limb ports",
          "Mirror option for daylight"
        ]
      ],
      magnification:[
        "25x–1500x (2.5x–100x objectives, 10x eyepieces; up to 1500x with high-power oil obj and 15x ep)",
        "40x–1600x (3.5x–100x objectives, 10x eyepieces)"
      ],
      objectives:[
        "Leitz achromat / fluorite / apochromat (170mm TL; Leitz 45mm parfocal thread); phase contrast, DIC, fluorescence available",
        "170mm finite, Leitz thread (RMS-compatible after 1960s). SHORT barrel (37mm parfocal) on oldest units; 45mm parfocal DIN objectives on later units. CRITICAL: verify before buying objectives."
      ],
      eyepieces:["Periplan 10x; binocular FSA head; trinocular phototube (Panphot system)", "Periplan 10x standard (23.2mm tube)"],
      stage:[
        "Mechanical stage; rotating stage for polarization; 170mm TL",
        "Mechanical cross-stage; planetary gear fine focus (1 division = 1µm)"
      ],
      dic:[true, false],
      applications:[
        ["Research", "Clinical pathology", "Fluorescence", "Phase contrast", "DIC", "Polarization", "Photomicrography", "Metallurgy"],
        ["Research", "Photomicrography", "Fluorescence", "Phase contrast", "Metallurgy", "Polarization"]
      ],
      noteworthy:[
        "The Ortholux is the instrument that cemented Leitz’s reputation as the world’s premier microscope maker. Introduced in 1937, it was the first truly modular microscope system allowing virtually any contrast technique by swapping components. Three 170mm body tubes, seven nosepiece options, and 14 condenser configurations. Ploemopak epi-fluorescence module (1965) was first fitted to the Ortholux. Sold until the mid-1970s when superseded by the Ortholux II and Orthoplan. First black, later silver-grey finish. Massive accumulative sales helped Leitz reach one million microscopes sold by 1980. Still actively used and praised by polarization and fluorescence microscopists.",
        "The world’s first truly modular research microscope, introduced in 1937. Three variants: (1) single lamphouse port (pre-1950s); (2) dual lamphouse ports (1950s–60s); (3) dual ports + field diaphragm (1960s+). CRITICAL: Pre-1960s objectives use 37mm parfocal (‘short barrel’). Later DIN objectives use 45mm. NOT interchangeable without shimming. Leitz used 170mm tube length for all research scopes before 1976. 160mm objectives generally work above 16x magnification (2mm difference is within tolerance) but parfocality is not maintained."
      ]
    },
    id:"R006"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"leitz-dialux",
    field:"merged duplicate",
    issue:"Dialux and Dialux 1 (Black Enamel) both described the mid-1950s black-enamel Dialux. Merged. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      name:["Dialux", "Dialux 1 (Black Enamel)"],
      subtype:["routine / teaching upright", "routine / teaching upright (170mm, black era)"],
      introduced:[1955, 1956],
      discontinued:[true, 1975],
      price_tier:["mid", "budget"],
      price_used:["$100–$450", "$100–$350"],
      illumination:[
        ["Incandescent (built-in 6V lamp)", "Optional external lamp for fluorescence"],
        ["Built-in external lamphouse at base front", "170mm tube", "Daylight mirror option"]
      ],
      magnification:["40x–1000x (4x–100x objectives, 10x eyepieces)", "40x–1000x"],
      objectives:[
        "Leitz achromat / EF objectives (170mm TL, RMS thread); phase contrast (Phaco) available",
        "170mm finite, Leitz thread. 37mm parfocal (early) or 45mm parfocal (later DIN). Separate coarse/fine focus (not coaxial)."
      ],
      eyepieces:["Periplan 10x; binocular 45 degree or monocular", "Periplan 10x (23.2mm tube)"],
      stage:["Mechanical stage (optional)", "Mechanical; 47mm Leitz dovetail condenser fitting"],
      darkfield:[true, false],
      camera_port:[false, true],
      applications:[
        ["Teaching", "Clinical routine", "Hematology", "Basic biology", "Medical education"],
        ["Education", "Clinical routine", "Hematology"]
      ],
      noteworthy:[
        "The Dialux was Leitz’s reliable routine and teaching microscope from the 1950s into the 1980s. A clean, robust design with a triangular base and built-in illumination. Several variants: Dialux (standard), Dialux-Pol (polarizing, 1964), and later the white-body Dialux 20/22 generation (1970s). The black-enamel Dialux of the 1960s is a sought-after collector’s instrument known for its outstanding build quality. Phase contrast (Phaco condenser) was a popular accessory. Widely distributed in European medical schools, hospitals, and industrial labs.",
        "Original black enamel Dialux — a smaller, more affordable sibling to the Ortholux I. Often misidentified as the Ortholux. Completely different from the later grey-era Dialux 20/22. Uses separate (not coaxial) coarse and fine focus knobs. 47mm Leitz condenser mount on substage."
      ]
    },
    id:"R007"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check against a brochure or manual and correct the kept record.",
    basis:"Research notes",
    scope:"model",
    target:"nikon-diaphot-tmd",
    field:"merged duplicate",
    issue:"\"Diaphot (original)\" (1985–1994) and \"Diaphot TMD\" (from 1982) are the same stand; TMD is its model code. Merged, and the misleading \"300\" id removed. Where the discarded record differed from the kept one, both values are listed.",
    detail:{
      name:["Diaphot TMD", "Diaphot (original)"],
      introduced:[1982, 1985],
      discontinued:[true, 1994],
      price_used:["$150–$500", "$200–$650"],
      illumination:[
        ["Halogen 6V/20W"],
        ["Halogen", "HBO fluorescence (optional)"]
      ],
      magnification:["40x–400x (4x–40x CF LWD objectives, 10x/20mm eyepieces)", "40x–400x"],
      objectives:["CF LWD Phase Achromat 4x/10x/20x/40x (160mm, long working distance)", "CF LWD Phase Achromat 4x/10x/20x/40x"],
      eyepieces:["10x/20mm; binocular", "10x/22mm"],
      stage:["Mechanical 190x160mm", "Mechanical 190×160mm"],
      fluorescence:[false, true],
      noteworthy:[
        "The original Diaphot TMD was Nikon's entry inverted of the early 1980s, used in virtually every cell culture and IVF lab equipped with Nikon instruments. Phase contrast via LWD objectives. Extremely common on the used market. Succeeded by the Diaphot 200/300.",
        "The Diaphot was the standard inverted scope for cell culture labs of the late 1980s–90s. The 300 model added fluorescence capability. Used extensively in IVF clinics, biotech, and university cell biology labs. Widely available and affordable on the used market."
      ]
    },
    id:"R008"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm the SW50 zoom range against Swift's catalog.",
    basis:"Research notes",
    scope:"model",
    target:"swift-sw-series",
    field:"SW50 specs",
    issue:"SW50 was described in two entries with different specs (here: 6:1 zoom, 7.5x–45x; in the Stereo 80 entry: 10x–40x, 4:1). It was removed from the Stereo 80 entry.",
    id:"R009"
  },
  {
    status:"open",
    source:"migration",
    confidence:"high",
    suggestion:"None needed unless the old values were checked against a quote.",
    basis:"Cytiva notice, 31 March 2021",
    scope:"model",
    target:"deltavision-elite",
    field:"discontinued / price_new",
    issue:"Marked discontinued in 2021 after the Cytiva notice. Previously recorded as current, and a new price of $25,000–$52,000 was listed. The new price was cleared because the system is no longer sold.",
    id:"R010"
  },
  {
    status:"open",
    source:"migration",
    confidence:"high",
    suggestion:"None needed unless the old values were checked against a quote.",
    basis:"Cytiva notice, 31 March 2021",
    scope:"model",
    target:"deltavision-core",
    field:"discontinued / price_new",
    issue:"Marked discontinued in 2021 after the Cytiva notice. Previously recorded as discontinued in 2015, and no new price was listed.",
    id:"R011"
  },
  {
    status:"open",
    source:"migration",
    confidence:"high",
    suggestion:"None needed unless the old values were checked against a quote.",
    basis:"Cytiva notice, 31 March 2021",
    scope:"model",
    target:"deltavision-omx",
    field:"discontinued / price_new",
    issue:"Marked discontinued in 2021 after the Cytiva notice. Previously recorded as current, and a new price of $400,000+ was listed. The new price was cleared because the system is no longer sold.",
    id:"R012"
  },
  {
    status:"open",
    source:"migration",
    confidence:"high",
    suggestion:"None needed.",
    basis:"Research notes",
    scope:"model",
    target:"olympus-ckx31",
    field:"price_new",
    issue:"New price \"$2,000–$6,000\" was listed on a model discontinued in 2015; cleared.",
    id:"R013"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"high",
    suggestion:"Check against a brochure.",
    basis:"Research notes",
    scope:"model",
    target:"nikon-optiphot",
    field:"discontinued",
    issue:"Kept the existing year 1990; the enrichment table suggests 1987 (Replaced by Optiphot-2).",
    id:"R014"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check a dated brochure before changing.",
    basis:"Evident's stereo page lists SZX10 today; it launched with the SZX16, which the database dates 2006",
    scope:"model",
    target:"olympus-szx10",
    field:"introduced / dates",
    issue:"Database says: 2001 to 2012. Suggested: 2006, still current.",
    id:"R015"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check a dated brochure before changing.",
    basis:"Microscope Museum dates the Eclipse E200 to the 1990s",
    scope:"model",
    target:"nikon-e200",
    field:"introduced / dates",
    issue:"Database says: Introduced 2005. Suggested: Late 1990s.",
    id:"R016"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check a dated brochure before changing.",
    basis:"Microscope Museum dates the Alphaphot-2 to 1988",
    scope:"model",
    target:"nikon-alphaphot",
    field:"introduced / dates",
    issue:"Database says: One record, 1978 to 2000. Suggested: Split; Alphaphot-2 from 1988.",
    id:"R017"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check a dated brochure before changing.",
    basis:"Overney article: introduced at the beginning of the 1970s",
    scope:"model",
    target:"leitz-ortholux2",
    field:"introduced / dates",
    issue:"Database says: Introduced 1976. Suggested: Early 1970s.",
    id:"R018"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The Eclipse line launched with CFI60 optics in 1996",
    scope:"model",
    target:"nikon-eclipse-e600",
    field:"introduced / dates",
    issue:"Database says: Introduced 1994. Suggested: 1996.",
    id:"R019"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched alongside the 80i",
    scope:"model",
    target:"nikon-eclipse-90i",
    field:"introduced / dates",
    issue:"Database says: Introduced 2007. Suggested: 2004.",
    id:"R020"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched together",
    scope:"model",
    target:"nikon-smz25",
    field:"introduced / dates",
    issue:"Database says: 2014 and 2016. Suggested: 2013 for both.",
    id:"R021"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched together",
    scope:"model",
    target:"nikon-smz18",
    field:"introduced / dates",
    issue:"Database says: 2014 and 2016. Suggested: 2013 for both.",
    id:"R022"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The S9 series replaced the S6 / S8 line",
    scope:"model",
    target:"leica-s9e",
    field:"introduced / dates",
    issue:"Database says: Introduced 2011. Suggested: 2017.",
    id:"R023"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The DM L line followed the DM R",
    scope:"model",
    target:"leica-dmls",
    field:"introduced / dates",
    issue:"Database says: 1991 and 1993. Suggested: About 1996.",
    id:"R024"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The DM L line followed the DM R",
    scope:"model",
    target:"leica-dmlb",
    field:"introduced / dates",
    issue:"Database says: 1991 and 1993. Suggested: About 1996.",
    id:"R025"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched with the DM1000 to DM2500 generation",
    scope:"model",
    target:"leica-dm4000",
    field:"introduced / dates",
    issue:"Database says: Introduced 2007. Suggested: 2004.",
    id:"R026"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched with the DM1000 to DM2500 generation",
    scope:"model",
    target:"leica-dm6000",
    field:"introduced / dates",
    issue:"Database says: Introduced 2007. Suggested: 2004.",
    id:"R027"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The \".5\" models replaced MZ8 and MZ12",
    scope:"model",
    target:"leica-mz9",
    field:"introduced / dates",
    issue:"Database says: 1994 and 1997. Suggested: About 2000.",
    id:"R028"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The \".5\" models replaced MZ8 and MZ12",
    scope:"model",
    target:"leica-mz125",
    field:"introduced / dates",
    issue:"Database says: 1994 and 1997. Suggested: About 2000.",
    id:"R029"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched with the M60",
    scope:"model",
    target:"leica-m80",
    field:"introduced / dates",
    issue:"Database says: Introduced 2012. Suggested: About 2009.",
    id:"R030"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"leica-thunder",
    field:"introduced / dates",
    issue:"Database says: Introduced 2018. Suggested: 2019.",
    id:"R031"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The Axiovert name began with the ICS launch",
    scope:"model",
    target:"zeiss-axiovert35",
    field:"introduced / dates",
    issue:"Database says: Introduced 1980. Suggested: 1986.",
    id:"R032"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Second-generation Axiovert stands",
    scope:"model",
    target:"zeiss-axiovert135",
    field:"introduced / dates",
    issue:"Database says: 1988 and 1987. Suggested: About 1991.",
    id:"R033"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Second-generation Axiovert stands",
    scope:"model",
    target:"zeiss-axiovert100",
    field:"introduced / dates",
    issue:"Database says: 1988 and 1987. Suggested: About 1991.",
    id:"R034"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"Launched with the Axioplan",
    scope:"model",
    target:"zeiss-axiophot",
    field:"introduced / dates",
    issue:"Database says: Introduced 1984. Suggested: 1986.",
    id:"R035"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"zeiss-stemi-sv8",
    field:"introduced / dates",
    issue:"Database says: Introduced 1975. Suggested: Mid-1980s.",
    id:"R036"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"zeiss-axio-imager",
    field:"introduced / dates",
    issue:"Database says: Introduced 2006. Suggested: 2004.",
    id:"R037"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"zeiss-stemi305",
    field:"introduced / dates",
    issue:"Database says: 2017 and 2016. Suggested: 2014 and 2015.",
    id:"R038"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"zeiss-stemi508",
    field:"introduced / dates",
    issue:"Database says: 2017 and 2016. Suggested: 2014 and 2015.",
    id:"R039"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"olympus-bx41",
    field:"introduced / dates",
    issue:"Database says: Introduced 1997. Suggested: About 1999.",
    id:"R040"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"olympus-bx51",
    field:"introduced / dates",
    issue:"Database says: Introduced 1997. Suggested: About 1999.",
    id:"R041"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"olympus-cx31",
    field:"introduced / dates",
    issue:"Database says: Introduced 2007. Suggested: About 2001.",
    id:"R042"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"A one-year production run is unlikely",
    scope:"model",
    target:"wild-m10s",
    field:"introduced / dates",
    issue:"Database says: 1989 to 1990. Suggested: Mid-1980s, sold into the 1990s as a Leica.",
    id:"R043"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"bausch-balplan",
    field:"introduced / dates",
    issue:"Database says: Introduced 1962. Suggested: 1970s.",
    id:"R044"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"The Vickers Instruments name dates from 1963 (Grace's Guide)",
    scope:"model",
    target:"vickers-patholux",
    field:"introduced / dates",
    issue:"Database says: Introduced 1955. Suggested: 1960s.",
    id:"R045"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a dated brochure before changing.",
    basis:"General knowledge (approximate)",
    scope:"model",
    target:"deltavision-core",
    field:"introduced / dates",
    issue:"Database says: Introduced 2004. Suggested: About 2007.",
    id:"R046"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Check a brochure; if Leitz, move to the Leitz file.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"reichert-fluovert",
    field:"brand",
    issue:"Fluovert FS/FU may be a Leitz instrument rather than Reichert. The lineage table treats it as the Leitz-to-Leica inverted research line.",
    id:"R047"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Re-date and relabel after checking a brochure.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"zeiss-telaval31",
    field:"dates / maker",
    issue:"Possibly Carl Zeiss Jena, late 1980s, not a West German pre-Axiovert instrument.",
    id:"R048"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Correct the objectives text after checking a manual.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"zeiss-axiovert135",
    field:"optics",
    issue:"The record describes finite optics, but the Axiovert 135 is an ICS infinity stand. The optical-system block follows the ICS table.",
    id:"R049"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Decide which Microstar this record describes, then re-date.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"ao-microstar",
    field:"name / date",
    issue:"Named Microstar IV and dated 1965, but Microstar IV is the 1980s Reichert-Jung model; the 1965 stand is the Series 2/4 or Series 10 Microstar.",
    id:"R050"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against an Olympus catalog or remove.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"olympus-ckx22",
    field:"existence",
    issue:"No Olympus CKX22 is known; the line is CK2, CK30, CK40, CKX31, CKX41, CKX53. It also carries a new price while marked discontinued in 2020.",
    id:"R051"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against Swift's catalog.",
    basis:"",
    scope:"model",
    target:"swift-sw400",
    field:"existence",
    issue:"Could not confirm this model.",
    id:"R052"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against LW Scientific's catalog.",
    basis:"",
    scope:"model",
    target:"lw-scientific-zoe",
    field:"existence",
    issue:"Could not confirm. ZOE is better known as a Bio-Rad cell imager.",
    id:"R053"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against Labomed's catalog.",
    basis:"",
    scope:"model",
    target:"labomed-sigma",
    field:"existence",
    issue:"Could not confirm this model name.",
    id:"R054"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against Motic's catalog.",
    basis:"",
    scope:"model",
    target:"motic-sm7",
    field:"existence",
    issue:"Could not confirm this model name.",
    id:"R055"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against Meiji Techno's catalog.",
    basis:"",
    scope:"model",
    target:"meiji-emx1",
    field:"existence",
    issue:"Could not confirm this model name.",
    id:"R056"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Replace with named models.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"amscope-inverted",
    field:"entry type",
    issue:"This entry is a category or stand configuration, not a named model.",
    id:"R057"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Replace with named models.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"amscope-trinocular-stereo",
    field:"entry type",
    issue:"This entry is a category or stand configuration, not a named model.",
    id:"R058"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Replace with named models.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"amscope-boom-stereo",
    field:"entry type",
    issue:"This entry is a category or stand configuration, not a named model.",
    id:"R059"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Replace with named models.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"amscope-fluorescence-stereo",
    field:"entry type",
    issue:"This entry is a category or stand configuration, not a named model.",
    id:"R060"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Replace with named models.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"national-optical-vet",
    field:"entry type",
    issue:"This entry is a category or stand configuration, not a named model.",
    id:"R061"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Set the flag to true or rename the entry.",
    basis:"",
    scope:"model",
    target:"amscope-darkfield",
    field:"fluorescence flag",
    issue:"Named \"Darkfield / DF-Fluorescence Combo\" but the fluorescence flag is false.",
    id:"R062"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Change after checking a brochure.",
    basis:"Research notes (general knowledge)",
    scope:"model",
    target:"zeiss-axiolab",
    field:"illumination",
    issue:"Introduced 1994 but lists LED. LED belongs to the 2012 Axio Lab.A1; the original was halogen.",
    id:"R063"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Re-date after checking the brochure.",
    basis:"Alan Wood Olympus downloads",
    scope:"model",
    target:"olympus-imt2",
    field:"introduced",
    issue:"A dated IMT-2 brochure (June 1986) predates the listed introduction year (1988).",
    id:"R064"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check both brochures.",
    basis:"Alan Wood Olympus downloads",
    scope:"model",
    target:"olympus-szh10",
    field:"introduced",
    issue:"An SZH brochure is dated October 1986 and an SZH10 brochure February 1996. 1987 likely belongs to the original SZH; check the SZH10 start.",
    id:"R065"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Verify on Leica's site.",
    basis:"",
    scope:"model",
    target:"leica-m60",
    field:"discontinued",
    issue:"Possibly still current.",
    id:"R066"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Verify on Evident's site.",
    basis:"",
    scope:"model",
    target:"olympus-ix73",
    field:"discontinued",
    issue:"Possibly still current.",
    id:"R067"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Verify with Meiji Techno.",
    basis:"",
    scope:"model",
    target:"meiji-skt-3b",
    field:"discontinued",
    issue:"Possibly still current.",
    id:"R068"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"high",
    suggestion:"Measure on the unit, or keep both values.",
    basis:"Meiji SKT manual and brochure",
    scope:"model",
    target:"meiji-skt-3b",
    field:"working distance",
    issue:"The SKT manual gives 44 mm for the SKT-3 series; the brochure optical-data table gives 45 mm for the 2X & 4X pair.",
    id:"R069"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Use one series per product family.",
    basis:"",
    scope:"brand",
    target:"zeiss",
    field:"series",
    issue:"Inverted stands are split between the series names \"Axio\" and \"Axiovert\".",
    id:"R070"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against the company site.",
    basis:"",
    scope:"brand",
    target:"swift",
    field:"headquarters",
    issue:"Headquarters is listed as Corpus Christi, Texas; not checked.",
    id:"R071"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Confirm against a company source.",
    basis:"",
    scope:"brand",
    target:"thorlabs",
    field:"history",
    issue:"The overview says Thorlabs acquired \"Prior Scientific's photonics division\"; not checked.",
    id:"R072"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Decide whether this record is the product line or the original company, then fix the headquarters.",
    basis:"",
    scope:"brand",
    target:"deltavision",
    field:"founding / headquarters",
    issue:"Listed as founded 1992 with a Marlborough, Massachusetts headquarters. That is Cytiva's address; the genealogy places Applied Precision in Issaquah, Washington.",
    id:"R073"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check the B&L to Cambridge Instruments to Leica route.",
    basis:"Covington Innovations; research notes",
    scope:"genealogy",
    target:"bausch>leica 1991",
    field:"date / route",
    issue:"The record says Leica acquired the Stereozoom line in 1991. A source says the StereoZoom 4 was later taken over by Leica and also sold under the Cambridge Instruments name, which suggests an intermediate step; the research notes say B&L left the microscope business in the late 1980s.",
    id:"R074"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Find a source for the fate of the Spencer/AO microscope line.",
    basis:"Science Museum Group; Microscope Museum",
    scope:"genealogy",
    target:"ao>reichert 1962",
    field:"Spencer / AO line",
    issue:"The earlier text said AO's microscope division was sold to Reichert in 1971/1976 and that the Spencer/AO instruments were rebranded Reichert-Jung. Sources say AO owned Reichert from 1962. What happened to the Buffalo-built Spencer/AO line itself is not verified.",
    id:"R075"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Add a sources entry for each model, starting with the archives.",
    basis:"",
    scope:"global",
    target:"sources",
    field:"coverage",
    issue:"Most models have no sources entry. Source archives are listed under Data Notes → Sources.",
    id:"R076"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Add price_asof when a price is checked.",
    basis:"",
    scope:"global",
    target:"price-asof",
    field:"price dates",
    issue:"No price has an \"as of\" year. Used prices age silently.",
    id:"R077"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Add generation rows as manuals are checked.",
    basis:"",
    scope:"global",
    target:"optics",
    field:"coverage",
    issue:"Optical-system data covers 14 generations. Missing: Reichert, Vickers, Bausch & Lomb, Meiji, Swift, Labomed, Euromex, AmScope, LW Scientific, National Optical.",
    id:"R078"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Add chains as sources are found.",
    basis:"",
    scope:"global",
    target:"lineage",
    field:"coverage",
    issue:"Lineage covers the Big Four, Leitz/Leica and Wild. Missing: the budget brands and Wild compound stands.",
    id:"R079"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"low",
    suggestion:"Add images with usage rights.",
    basis:"",
    scope:"global",
    target:"images",
    field:"per-model images",
    issue:"Only two generic photos exist. The model page supports an optional image field.",
    id:"R080"
  },
  {
    status:"open",
    source:"enrichment-doc",
    confidence:"medium",
    suggestion:"Check against a brochure.",
    basis:"Research notes",
    scope:"model",
    target:"nikon-optiphot",
    field:"discontinued",
    issue:"Kept 1990; the enrichment table suggests 1987 (replaced by Optiphot-2, confidence high).",
    id:"R081"
  },
  {
    id:"R082",
    status:"open",
    source:"research",
    scope:"model",
    target:"zeiss-axiolab5",
    field:"introduced",
    issue:"Introduction year 2019 is inferred from the edition date (05-2019) of ZEISS’s version 1.0 product information; no launch date was found. The database dates the Axioscope 5, launched alongside it as a Smart Microscopy pair, as 2018.",
    suggestion:"Find the launch date and reconcile with the Axioscope 5 entry.",
    basis:"ZEISS Axiolab 5 product information",
    confidence:"medium",
    sources:["zeiss-axiolab5-pi"]
  },
  {
    id:"R083",
    status:"open",
    source:"research",
    scope:"model",
    target:"zeiss-axiolab5",
    field:"dic",
    issue:"The stand specification lists brightfield, darkfield, phase and simple polarization. The accessory list includes DIC components (reflected-light DIC modules, DIC/PlasDIC condenser parts). DIC is marked true because it is available in some configurations.",
    suggestion:"Confirm which stands support transmitted-light DIC.",
    basis:"ZEISS Axiolab 5 product information",
    confidence:"medium",
    sources:["zeiss-axiolab5-pi"]
  },
  {
    id:"R084",
    status:"open",
    source:"research",
    scope:"model",
    target:"zeiss-axiolab5",
    field:"price",
    issue:"No manufacturer price. Retailer listings found were configuration-specific and included cameras, so no range is recorded. price_tier is mid-range, assigned by comparison with entries in this database priced $5,000–$15,000 (for example the BX53) and retailer listings of roughly $10,000 including a camera; it is not taken from a price list.",
    suggestion:"Add a new-price range from a price list and review the tier.",
    basis:"Retailer listings (not used)",
    confidence:"low"
  },
  {
    id:"R085",
    status:"open",
    source:"research",
    scope:"brand",
    target:"zeiss",
    field:"Axiovert 5 digital",
    issue:"Introduced 12 January 2023 (ZEISS press release): brightfield, phase and fluorescence contrast with AI cell counting. No technical specifications were available, so no model entry was made. It is the successor node in the \"Inverted routine\" lineage chain.",
    suggestion:"Add the entry from the Axiovert 5 product information sheet.",
    basis:"ZEISS press release",
    confidence:"high",
    sources:["zeiss-axiovert5-pr"]
  }
];
