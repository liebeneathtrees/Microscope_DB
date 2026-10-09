// LINEAGE — chains run oldest to newest. A node is a model id, {name} for a model not yet in the database, or an array of models that succeed together.
// Edit this file directly. Run `node tools/validate.js` after any change.
DB.lineage = [
  {
    id:"L01",
    brand:"zeiss",
    label:"Zeiss · Research upright",
    confidence:"approx",
    chain:[
      "zeiss-standard-wl",
      "zeiss-axioplan",
      "zeiss-axioplan2",
      "zeiss-axio-imager",
      {name:"Axio Imager 2"}
    ]
  },
  {
    id:"L02",
    brand:"zeiss",
    label:"Zeiss · Photomicroscope",
    confidence:"approx",
    chain:[
      {name:"Photomicroscope III"},
      "zeiss-axiophot"
    ]
  },
  {
    id:"L03",
    brand:"zeiss",
    label:"Zeiss · Routine upright",
    confidence:"approx",
    chain:["zeiss-standard-1416", "zeiss-axioskop", "zeiss-axioskop2", "zeiss-axio-scope", "zeiss-axioscope5"]
  },
  {
    id:"L04",
    brand:"zeiss",
    label:"Zeiss · Clinical and teaching",
    confidence:"approx",
    chain:[
      {name:"Standard KF"},
      "zeiss-axiolab",
      "zeiss-axiostar",
      ["zeiss-axio-lab", "zeiss-primo-star"],
      "zeiss-axiolab5"
    ]
  },
  {
    id:"L05",
    brand:"zeiss",
    label:"Zeiss · Inverted research",
    confidence:"approx",
    chain:[
      "zeiss-im35",
      "zeiss-axiovert35",
      ["zeiss-axiovert135", "zeiss-axiovert100"],
      ["zeiss-axiovert200", "zeiss-axiovert200m"],
      {name:"Axio Observer A1/D1/Z1"},
      ["zeiss-axio-observer5", "zeiss-axio-observer7"]
    ]
  },
  {
    id:"L06",
    brand:"zeiss",
    label:"Zeiss · Inverted routine",
    confidence:"approx",
    chain:[
      "zeiss-axiovert25",
      "zeiss-axiovert40",
      "zeiss-axio-vert",
      {name:"Axiovert 5"}
    ]
  },
  {
    id:"L07",
    brand:"zeiss",
    label:"Zeiss · CMO stereo",
    confidence:"approx",
    chain:[
      "zeiss-stemi-sv8",
      ["zeiss-stemi-sv6", "zeiss-stemi-sv11"],
      ["zeiss-stereo-v8", "zeiss-stereo-v12", "zeiss-stereo-discovery"]
    ]
  },
  {
    id:"L08",
    brand:"zeiss",
    label:"Zeiss · Greenough stereo",
    confidence:"approx",
    chain:[
      ["zeiss-stemi1000", "zeiss-stemi2000c", "zeiss-dv4"],
      ["zeiss-stemi305", "zeiss-stemi508"]
    ]
  },
  {
    id:"L09",
    brand:"leica",
    label:"Leitz to Leica · Research upright",
    confidence:"approx",
    chain:[
      "leitz-ortholux",
      ["leitz-ortholux2", "leitz-orthoplan"],
      "leitz-aristoplan",
      "leica-dmrb",
      ["leica-dm4000", "leica-dm6000"],
      {name:"DM4 B / DM6 B"}
    ]
  },
  {
    id:"L10",
    brand:"leica",
    label:"Leitz to Leica · Routine upright",
    confidence:"approx",
    chain:[
      "leitz-dialux",
      "leitz-dialux20",
      "leitz-diaplan",
      "leica-dmlb",
      ["leica-dm2000", "leica-dm2500"]
    ]
  },
  {
    id:"L11",
    brand:"leica",
    label:"Leitz to Leica · Clinical",
    confidence:"approx",
    chain:["leitz-labolux", "leitz-laborlux12", "leica-dmls", "leica-dm1000"]
  },
  {
    id:"L12",
    brand:"leica",
    label:"Leica · Education",
    confidence:"approx",
    chain:[
      "leica-dm-e",
      ["leica-dm500", "leica-dm750"]
    ]
  },
  {
    id:"L13",
    brand:"leica",
    label:"Leitz to Leica · Inverted routine",
    confidence:"approx",
    chain:["leitz-diavert", "leitz-labovert", "leica-dm-il", "leica-dmi1"]
  },
  {
    id:"L14",
    brand:"leica",
    label:"Leitz to Leica · Inverted research",
    confidence:"approx",
    chain:[
      "reichert-fluovert",
      "leica-dmirb",
      "leica-dmire2",
      {name:"DMI3000 / 4000 / 6000 B"},
      "leica-dmi8"
    ]
  },
  {
    id:"L15",
    brand:"leica",
    label:"Wild to Leica · CMO stereo",
    confidence:"approx",
    chain:[
      "wild-m5",
      "wild-m5a",
      "wild-m8",
      "wild-m10s",
      ["leica-mz12", "leica-mzapo"],
      ["leica-mz125", "leica-mz16"],
      [
        {name:"M165 C"},
        "leica-m205fa"
      ]
    ]
  },
  {
    id:"L16",
    brand:"leica",
    label:"Wild to Leica · Mid-range stereo",
    confidence:"approx",
    chain:[
      "wild-m3",
      "leica-mz6",
      ["leica-mz75", "leica-mz9"],
      ["leica-m60", "leica-m80"]
    ]
  },
  {
    id:"L17",
    brand:"leica",
    label:"Wild to Leica · Macroscope",
    confidence:"approx",
    chain:[
      "wild-m400",
      "wild-m420",
      {name:"Z6 APO / Z16 APO"}
    ]
  },
  {
    id:"L18",
    brand:"nikon",
    label:"Nikon · Research upright",
    confidence:"approx",
    chain:[
      {name:"S-type"},
      "nikon-optiphot",
      "nikon-optiphot2",
      "nikon-eclipse-e600",
      "nikon-eclipse-80i",
      "nikon-eclipse-ni"
    ]
  },
  {
    id:"L19",
    brand:"nikon",
    label:"Nikon · Flagship upright",
    confidence:"approx",
    chain:[
      "nikon-microphot-fxa",
      ["nikon-eclipse-e800", "nikon-eclipse-e1000"],
      "nikon-eclipse-90i",
      "nikon-eclipse-ni"
    ]
  },
  {
    id:"L20",
    brand:"nikon",
    label:"Nikon · Clinical",
    confidence:"approx",
    chain:[
      "nikon-labophot",
      "nikon-labophot2",
      "nikon-eclipse-e400",
      {name:"Eclipse 50i / 55i"},
      "nikon-eclipse-ci"
    ]
  },
  {id:"L21", brand:"nikon", label:"Nikon · Student", confidence:"approx", chain:["nikon-alphaphot", "nikon-e200"]},
  {
    id:"L22",
    brand:"nikon",
    label:"Nikon · Inverted research",
    confidence:"approx",
    chain:["nikon-diaphot-tmd", "nikon-diaphot200", "nikon-te300", "nikon-eclipse-te2000", "nikon-eclipse-ti", "nikon-eclipse-ti2"]
  },
  {
    id:"L23",
    brand:"nikon",
    label:"Nikon · CMO stereo",
    confidence:"approx",
    chain:[
      "nikon-smz10",
      "nikon-smz-u",
      "nikon-smz1500",
      ["nikon-smz18", "nikon-smz25"]
    ]
  },
  {
    id:"L24",
    brand:"nikon",
    label:"Nikon · Greenough stereo",
    confidence:"approx",
    chain:[
      ["nikon-smz1", "nikon-smz2t"],
      ["nikon-smz645", "nikon-smz660"],
      "nikon-smz745"
    ]
  },
  {
    id:"L25",
    brand:"olympus",
    label:"Olympus · Research upright",
    confidence:"approx",
    chain:[
      {name:"E / F series"},
      "olympus-bh",
      "olympus-bh2",
      "olympus-bx50",
      "olympus-bx51",
      "olympus-bx53"
    ]
  },
  {
    id:"L26",
    brand:"olympus",
    label:"Olympus · Clinical upright",
    confidence:"approx",
    chain:["olympus-bx40", "olympus-bx41", "olympus-bx43"]
  },
  {
    id:"L27",
    brand:"olympus",
    label:"Olympus · Automated upright",
    confidence:"approx",
    chain:[
      {name:"Vanox AH series"},
      {name:"AX70 Provis"},
      {name:"BX61"},
      "olympus-bx63"
    ]
  },
  {
    id:"L28",
    brand:"olympus",
    label:"Olympus · Student",
    confidence:"approx",
    chain:[
      "olympus-ch",
      "olympus-ch2",
      "olympus-cx31",
      {name:"CX33 / CX43"}
    ]
  },
  {
    id:"L29",
    brand:"olympus",
    label:"Olympus · Inverted research",
    confidence:"approx",
    chain:[
      {name:"IMT"},
      "olympus-imt2",
      ["olympus-ix50", "olympus-ix70"],
      ["olympus-ix71", "olympus-ix81"],
      ["olympus-ix73", "olympus-ix83"]
    ]
  },
  {
    id:"L30",
    brand:"olympus",
    label:"Olympus · Inverted routine",
    confidence:"approx",
    chain:[
      {name:"CK"},
      "olympus-ck2",
      "olympus-ckx31",
      {name:"CKX53"}
    ]
  },
  {
    id:"L31",
    brand:"olympus",
    label:"Olympus · Greenough stereo",
    confidence:"approx",
    chain:[
      {name:"SZ-III"},
      ["olympus-sz30", "olympus-sz40", "olympus-sz60", "olympus-sz11"],
      "olympus-sz61"
    ]
  },
  {
    id:"L32",
    brand:"olympus",
    label:"Olympus · CMO stereo",
    confidence:"approx",
    chain:[
      {name:"SZH"},
      "olympus-szh10",
      "olympus-szx9",
      ["olympus-szx7", "olympus-szx10", "olympus-szx16"]
    ]
  }
];
