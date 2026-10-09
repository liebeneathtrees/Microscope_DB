// INDUSTRY GENEALOGY — corporate events: mergers, acquisitions, OEM supply, renames, milestones, transfers.
// Edit this file directly. Run `node tools/validate.js` after any change.
DB.oem_relations = [
  {
    source:"zeiss",
    target:"zeiss",
    type:"split",
    year:1945,
    description:"End of WWII: US forces evacuate 126 Zeiss Jena senior staff and scientists to Heidenheim (US zone). Soviet forces occupy Jena and begin dismantling factories for reparations. The single Carl Zeiss enterprise is effectively divided by the Iron Curtain."
  },
  {
    source:"zeiss",
    target:"zeiss",
    type:"split",
    year:1946,
    description:"West: Evacuated staff found 'Opton Optische Werke Oberkochen GmbH' — the seed of West German Carl Zeiss — in the small town of Oberkochen, Baden-Württemberg. East: Jena factories partially rebuilt under Soviet occupation. The company name 'Carl Zeiss Jena' continues under Soviet management."
  },
  {
    source:"zeiss",
    target:"zeiss",
    type:"split",
    year:1948,
    description:"East German authorities nationalize and expropriate the Jena Zeiss plants without compensation. The state-owned enterprise 'VEB Carl Zeiss Jena' (Volkseigener Betrieb = People's Own Enterprise) is created. The two Zeiss companies are now legally and politically separate entities competing for the 'Carl Zeiss' trademark globally."
  },
  {
    source:"zeiss",
    target:"zeiss",
    type:"name_change",
    year:1951,
    description:"West German Zeiss-Opton renames itself 'Carl Zeiss' and is formally entered into the commercial register. From 1951 onward two companies both legally named 'Carl Zeiss' operate simultaneously — one in Oberkochen (West Germany, foundation-owned) and one in Jena (East Germany, state-owned). A 1971 London Agreement divides global trademark territories between them."
  },
  {
    source:"zeiss",
    target:"zeiss",
    type:"merger",
    year:1991,
    description:"German reunification triggers the reintegration of Zeiss. Jenoptik Carl Zeiss Jena GmbH is formed from VEB Carl Zeiss Jena; Carl Zeiss Oberkochen acquires a 51% stake. The non-optical Jena activities are spun off as Jenoptik GmbH (photonics, optoelectronics, mechatronics). The microscopy and precision optics divisions return to Zeiss Oberkochen control — effectively reuniting the pre-war Carl Zeiss enterprise after 46 years of division."
  },
  {
    source:"zeiss",
    target:"zeiss",
    type:"merger",
    year:1995,
    description:"Carl Zeiss Oberkochen acquires full (100%) control of Carl Zeiss Jena GmbH and Jenaer Glaswerk, completing the post-reunification integration. Jena becomes home to Carl Zeiss Microscopy GmbH and Carl Zeiss Meditec AG. The Carl-Zeiss-Stiftung foundation is now domiciled in both Jena and Heidenheim, formally reconciling the split legal structure of the post-war decades."
  },
  {
    source:"leitz",
    target:"leica",
    type:"merger",
    year:1986,
    description:"Ernst Leitz Wetzlar GmbH and Wild Heerbrugg AG merge to form the Wild Leitz Group — the first step in building what would become Leica Microsystems. Neither company had the Leica name yet at this stage; the Leica brand was owned separately by Leica Camera."
  },
  {
    source:"leitz",
    target:"leica",
    type:"name_change",
    year:1990,
    description:"The Wild Leitz Group merges with Cambridge Instruments (UK makers of metallurgical and electron microscopes) to form 'The Leica Group' — the first use of the Leica name for the microscopy enterprise. The Leica name was licensed from Leica Camera AG (an entirely separate company). Cambridge Instruments contributed electron microscopy, materials characterization, and medical imaging divisions."
  },
  {
    source:"wild",
    target:"leica",
    type:"merger",
    year:1986,
    description:"Wild Heerbrugg AG (Switzerland), renowned for its supremely built stereo microscopes and survey instruments, merges with Ernst Leitz Wetzlar to form the Wild Leitz Group. Wild's stereo microscope line (M3, M5, M7, M8, M10, M11, M20, M40) becomes the foundation of all subsequent Leica stereo instruments including the Leica MZ and M series."
  },
  {
    source:"reichert",
    target:"reichert",
    type:"acquisition",
    year:1986,
    description:"Warner-Lambert sells its non-pharmaceutical businesses, including Reichert-Jung (Reichert merged with Jung of Heidelberg by this date), to Cambridge Instruments.",
    sources:["sci-museum-reichert", "utrecht-reichert"]
  },
  {
    source:"reichert",
    target:"leica",
    type:"acquisition",
    year:1990,
    description:"Cambridge Instruments — which bought Reichert-Jung (C. Reichert AG, Vienna; founded 1876) in 1986 — merges with the Wild Leitz Group, bringing Reichert-Jung into the new Leica Group. Reichert's inverted microscope line (Fluovert), cryostat/ultramicrotome products, and ophthalmic instruments are absorbed. The merged group adopts the Leica name.",
    sources:["sci-museum-reichert", "utrecht-reichert"]
  },
  {
    source:"bausch",
    target:"bausch",
    type:"milestone",
    year:1959,
    description:"Bausch & Lomb introduces the StereoZoom — the first stereo microscope with a continuously variable (stepless) zoom, on the Greenough design. (American Optical’s Cycloptic of 1957 had introduced the common-main-objective layout.) When B&L’s microscopy line later passes to Leica, it ends B&L’s run as a microscope manufacturer (founded 1853).",
    sources:["leica-stereo-history", "fsu-stereozoom"]
  },
  {
    source:"bausch",
    target:"leica",
    type:"acquisition",
    year:1991,
    description:"Leica acquires the Bausch & Lomb Stereozoom microscope product line and related accessories. The StereoZoom (introduced 1959) was the first stereo microscope with a stepless zoom (Greenough design); Leica continued to sell it as the Leica StereoZoom series. B&L's remaining optical businesses (eyewear, contact lenses, pharmaceutical ophthalmics) are retained separately by Bausch & Lomb.",
    sources:["leica-stereo-history", "covington-stereozoom"]
  },
  {
    source:"leica",
    target:"leica",
    type:"name_change",
    year:1997,
    description:"'The Leica Group' formally adopts the name 'Leica Microsystems' — the name under which the company has operated since. The brand name Leica Microsystems is now the internationally recognized identity, distinct from Leica Camera AG (cameras) and Leica Geosystems (surveying). All three 'Leica' companies are legally separate entities with no ownership connection."
  },
  {
    source:"leica",
    target:"leica",
    type:"acquisition",
    year:2005,
    description:"Danaher Corporation (Washington DC) acquires Leica Microsystems for approximately €450 million (September 2005). Danaher is a diversified science and technology conglomerate (now Fortive / Danaher split). Leica Microsystems operates as an independent subsidiary within Danaher's Life Sciences platform alongside other acquisitions including Beckman Coulter, Hologic, and Cepheid."
  },
  {
    source:"olympus",
    target:"olympus",
    type:"name_change",
    year:1919,
    description:"Olympus is founded on October 12, 1919 as 'Takachiho Seisakusho' (Takachiho Manufacturing) in Tokyo by Takeshi Yamashita, producing microscopes and thermometers. The Olympus trademark is registered in 1921. The company is renamed 'Takachiho Optical Industries' in 1942, then 'Olympus Optical Co., Ltd.' in 1949. The final name 'Olympus Corporation' is adopted in 2003."
  },
  {
    source:"olympus",
    target:"olympus",
    type:"rebrand",
    year:2022,
    description:"Olympus Corporation spins off its Scientific Solutions Division (microscopes, industrial videoscopes, X-ray fluorescence analyzers) into a new wholly owned subsidiary named 'Evident Corporation' effective April 1, 2022. This is a precursor to a planned sale. Olympus retains its medical endoscope business."
  },
  {
    source:"olympus",
    target:"olympus",
    type:"acquisition",
    year:2023,
    description:"Bain Capital Private Equity acquires Evident Corporation from Olympus Corporation for approximately ¥427.6 billion (~$3.1 billion USD), completing April 3, 2023. Evident now operates as an independent company under private equity ownership, headquartered in Tokyo with approximately 4,300 employees worldwide. The Olympus microscope brand continues under the Evident name with full product continuity."
  },
  {
    source:"nikon",
    target:"nikon",
    type:"merger",
    year:1917,
    description:"Nippon Kogaku K.K. (Japan Optical Industries Co.) is founded July 25, 1917 through the merger of three Japanese optical manufacturers: the optical instruments division of Tokyo Keiki Seizo, the mirror division of Iwaki Glass Manufacturing, and Fujii Lens Manufacturing. Initial focus: precision military optics and microscopes. The merger was backed by Mitsubishi's Koyata Iwasaki to build a domestic optical industry independent of German imports."
  },
  {
    source:"nikon",
    target:"nikon",
    type:"name_change",
    year:1988,
    description:"Nippon Kogaku K.K. officially adopts the name 'Nikon Corporation' — the Nikon brand had been used on cameras since 1946 but the legal company name remained Nippon Kogaku until this formal change. The name 'Nikon' is a contracted form of 'Nippon Kōgaku' and was reportedly also influenced by the Zeiss camera brand 'Ikon'. Nikon had introduced the first microscope with revolving nosepiece (the Joico, 1925) and the CF optical system (1970s) by this point."
  },
  {
    source:"ao",
    target:"ao",
    type:"merger",
    year:1935,
    description:"Spencer Lens Company (Buffalo, NY — founded 1891, makers of high-quality American research microscopes) is acquired by American Optical Corporation. Spencer microscopes, known for excellent optical quality and used in US hospitals and universities from the 1900s onward, continue under the Spencer/AO brand. The Spencer series remains in production through the mid-20th century."
  },
  {
    source:"ao",
    target:"ao",
    type:"milestone",
    year:1957,
    description:"American Optical introduces the Cycloptic, which Leica credits as the first modern stereo microscope with a common main objective (CMO). It had a five-step magnification changer, not a zoom.",
    sources:["leica-stereo-history"]
  },
  {
    source:"ao",
    target:"reichert",
    type:"acquisition",
    year:1962,
    description:"American Optical acquires C. Reichert of Vienna (some sources say a partial sale). AO itself is taken over by Warner-Lambert in 1968. The direction is the reverse of what this database previously recorded: AO owned Reichert from 1962, not the other way round. By 1986 Reichert had merged with Jung of Heidelberg (Reichert-Jung) and was sold to Cambridge Instruments; Cambridge Instruments and Wild Leitz merged in 1990 to form Leica.",
    sources:["sci-museum-reichert", "microscope-museum-reichert"]
  },
  {
    source:"ao",
    target:"ao",
    type:"acquisition",
    year:1968,
    description:"Warner-Lambert takes over American Optical.",
    sources:["sci-museum-reichert"]
  },
  {
    source:"deltavision",
    target:"deltavision",
    type:"acquisition",
    year:2011,
    description:"Applied Precision, Inc. (Issaquah, WA — maker of the DeltaVision widefield deconvolution and OMX super-resolution systems) is acquired by GE Healthcare Life Sciences. The DeltaVision brand continues under GE's umbrella with ongoing product development and software support (SoftWoRx)."
  },
  {
    source:"deltavision",
    target:"deltavision",
    type:"acquisition",
    year:2019,
    description:"GE Healthcare Life Sciences — including the Applied Precision / DeltaVision product portfolio — is spun out from GE and acquired by Danaher Corporation as 'Cytiva' in 2020 (deal announced 2019). The DeltaVision brand sat under Cytiva until sales ended in 2021; Leica Microsystems and DeltaVision were sister companies within the Danaher Life Sciences portfolio."
  },
  {
    source:"deltavision",
    target:"leica",
    type:"transfer",
    year:2021,
    description:"Cytiva discontinues the DeltaVision series (sales ended February 2021). Application support and service for the microscope systems transfer to Leica Microsystems on 30 April 2021; support was announced through 31 December 2025.",
    sources:["cytiva-dv-discon", "cytiva-portfolio"]
  },
  {
    source:"motic",
    target:"lw-scientific",
    type:"oem",
    year:2000,
    description:"LW Scientific uses Motic-sourced optical systems in several US-assembled instruments, combining Motic optics with US mechanical assembly and customer support. LW Scientific's Revelation series and some Revelation III configurations use this arrangement."
  },
  {
    source:"motic",
    target:"motic",
    type:"oem",
    year:2005,
    description:"Motic instruments are sold under numerous additional OEM brand names globally beyond AmScope and LW Scientific. Known OEM arrangements include: Swift Optical M-series (some configurations), Accu-Scope (various clinical and veterinary models), Fisher Scientific (some educational models), and numerous European and Asian distributors. The Motic BA310 platform in particular is one of the most widely OEM-distributed compound microscope chassis in the world."
  },
  {
    source:"motic",
    target:"amscope",
    type:"oem",
    year:2006,
    description:"AmScope (United Scope LLC) rebrands Motic BA and AE compound microscope series for the US consumer market, becoming Motic's largest US distribution partner. The Motic BA210 appears as the AmScope B490; the BA310 underlies several AmScope T-series models. Many AmScope instruments are physically identical to Motic instruments sold under the Motic name at similar price points."
  },
  {
    source:"meiji",
    target:"national-optical",
    type:"oem",
    year:2000,
    description:"Some National Optical models use Meiji-sourced or comparable Japanese optical components, particularly in their higher-specification educator and clinical configurations. National Optical's San Antonio distribution model often involves selective sourcing from Japanese optical manufacturers for premium configurations."
  },
  {
    source:"labomed",
    target:"leica",
    type:"oem",
    year:2000,
    description:"Labomed (Labo America Inc.) has manufactured OEM educational microscopes sold under the Leica brand including models comparable to the Leica CME, DME, and DM750. The Labomed Lx300 and Lx400 are the house-branded equivalents of these Leica-branded instruments. This arrangement is one of the clearer examples of Big Four branding on non-Big-Four manufactured instruments in the clinical/educational segment."
  },
  {
    source:"vickers",
    target:"vickers",
    type:"merger",
    year:1963,
    description:"Vickers Instruments Ltd is formed (trading from 1 January 1963) from Cooke, Troughton & Simms, C. Baker (microscopes) and Casella (Electronics). Cooke, Troughton & Simms had been a wholly owned Vickers subsidiary since 1924.",
    sources:["graces-vickers", "archives-hub-vickers"]
  },
  {
    source:"vickers",
    target:"vickers",
    type:"acquisition",
    year:1988,
    description:"The Vickers Group sells Vickers Instruments (York) to Bio-Rad Laboratories of the USA, which renames it Bio-Rad Micromeasurements. Grace's Guide and the Archives Hub say 1988; the University of York and Microscope Museum say 1989.",
    sources:["graces-vickers", "archives-hub-vickers", "microscope-museum-vickers"]
  }
];
