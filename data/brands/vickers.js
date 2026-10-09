// ════════════════════════════════════════════════════
// VICKERS INSTRUMENTS LTD.
// ════════════════════════════════════════════════════
MDB.addBrand({
  id:"vickers",
  name:"Vickers Instruments Ltd.",
  shortName:"Vickers",
  flag:"🇬🇧",
  country:"UK",
  founded:1963,
  founded_note:"Vickers Instruments Ltd was formed in 1963. Its predecessors date from 1837 (T. Cooke & Sons, York); Cooke, Troughton & Simms was formed in 1922.",
  status:"historical",
  featured:false,
  hq:"York, England",
  categories:["compound"],
  overview:"Vickers Instruments Ltd was a British maker of precision optical and scientific instruments based in York, England, formed in 1963 from the instrument businesses of the Vickers group: Cooke, Troughton & Simms (formed in 1922 from T. Cooke & Sons of York, which Vickers had taken control of in 1915, and Troughton & Simms of London; a wholly owned Vickers subsidiary from 1924), C. Baker (microscopes) and Casella (Electronics). It produced the Patholux and M17 research microscopes and was a notable early pioneer in quantitative image analysis — its computer-linked image-analysis systems of the 1970s helped establish automated quantitative microscopy. The Vickers Group sold the York instrument business to Bio-Rad Laboratories (USA) in 1988 (some sources say 1989), where it became Bio-Rad Micromeasurements. Clarification: the Vickers hardness test (a widely used materials hardness measurement standard) is named after Vickers Ltd. — the broader engineering and armaments conglomerate — not specifically Vickers Instruments Ltd., though they shared the same corporate family.",
  oem:{
    acquiredBy:"Bio-Rad Laboratories (1988; some sources say 1989)",
    acquired:[],
    makesFor:[],
    madeBy:[],
    notes:"Vickers microscopy instruments fully discontinued. The Vickers hardness test is internationally used but unrelated to the modern instrument landscape."
  },
  sources:["graces-vickers", "archives-hub-vickers", "microscope-museum-vickers"],
  models:[
    {
      id:"vickers-patholux",
      name:"Patholux",
      series:"Patholux",
      type:"compound",
      subtype:"clinical / research",
      introduced:1955,
      discontinued:true,
      discontinued_year:1975,
      discontinued_approx:true,
      discontinued_note:"Estimated: Rough era only (confidence: low).",
      price_tier:"premium",
      price_new:null,
      price_used:"$200–$750",
      illumination:["Tungsten / Halogen", "HBO fluorescence"],
      light_sources:["halogen", "mercury"],
      magnification:"40x–1000x",
      mag_min:40,
      mag_max:1000,
      objectives:"Vickers plan / apo series",
      eyepieces:"10x",
      stage:"Mechanical",
      fluorescence:true,
      phase_contrast:true,
      darkfield:true,
      dic:false,
      motorized:false,
      inverted:false,
      camera_port:true,
      software:"—",
      applications:["Clinical pathology", "Research", "Fluorescence", "Hematology"],
      noteworthy:"Flagship British research microscope. Found in NHS hospitals and Commonwealth universities. Excellent British glass optics for the era. Highly collectable.",
      oem_source:null
    }
  ]
});
