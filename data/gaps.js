// COVERAGE GAPS — candidate models and makers not yet in the database. Unverified leads.
// Edit this file directly. Run `node tools/validate.js` after any change.
DB.gaps = {
  note:"Candidate models come from general knowledge of each maker's lineup, not from a check against current catalogs. The Big Four and historical lists are solid; treat the budget-brand lists as leads to confirm.",
  brands:{
    zeiss:[
      {
        group:"Historical uprights",
        models:[
          "Standard RA",
          "Standard KF/KF2",
          "Standard GFL",
          "Standard 18/20/25",
          "Standard Junior",
          "Universal",
          "Photomicroscope I/II/III",
          "Ultraphot II/III",
          "Axiomat"
        ]
      },
      {
        group:"Axio-era uprights",
        models:[
          "Axioskop 20/40/50",
          "Axioskop 2 FS / MOT",
          "Axioplan 2 imaging",
          "Axiostar (non-Plus)",
          "Axio Imager 2 (A2/M2/Z2)",
          "Axio Examiner",
          "Axioscope 7",
          "Primostar 3",
          "Primotech"
        ]
      },
      {
        group:"Inverted",
        models:[
          "ICM 405",
          "Axiovert 10",
          "Axiovert S100",
          "first-generation Axio Observer A1/D1/Z1",
          "Axio Observer 3",
          "Axiovert 5 (introduced 12 Jan 2023 per ZEISS press release; specifications still to source)",
          "Primovert"
        ]
      },
      {
        group:"Stereo and zoom",
        models:["Stereomicroscope I–IV", "Stemi DR/DRC", "Stemi SR", "Stemi 2000 / 2000-CS", "SteREO Lumar.V12", "Axio Zoom.V16", "Tessovar"]
      },
      {group:"Carl Zeiss Jena", models:["Jenaval", "Jenamed", "Amplival", "Laboval", "Ergaval", "NU 2", "Citoval", "Technival"]}
    ],
    leica:[
      {
        group:"Uprights",
        models:[
          "DMR / DMRA / DMRXA / DMRE",
          "DMLA",
          "DMLM",
          "DMLP",
          "DM3000",
          "DM5000 B",
          "DM5500 B",
          "DM4 B",
          "DM6 B",
          "DM750 P",
          "DM4 P",
          "DM2700 M",
          "DM100",
          "ATC 2000",
          "CME",
          "BME"
        ]
      },
      {group:"Inverted", models:["DM IRBE", "DM IRM", "DMI3000 B", "DMI4000 B", "DMI6000 B", "DM IL LED", "Mateo TL/FL"]},
      {
        group:"Stereo and macro",
        models:[
          "MZ8",
          "MZ FLIII",
          "MZ16 F / FA",
          "M50",
          "M125",
          "M165 C / FC",
          "M205 C / A",
          "S4 E",
          "S6 D",
          "S8 APO",
          "S9 i / S9 D",
          "EZ5",
          "ES2",
          "GZ4/GZ6/GZ7",
          "Z6 APO / Z16 APO",
          "A60",
          "Ivesta 3",
          "Emspira 3",
          "DVM6"
        ]
      }
    ],
    nikon:[
      {
        group:"Historical uprights",
        models:[
          "S-series (S-Ke, S-Kt)",
          "L-Ke",
          "Model G",
          "Biophot",
          "Fluophot",
          "Apophot",
          "SBR/CL student stands",
          "Optiphot-Pol / Labophot-Pol"
        ]
      },
      {
        group:"Eclipse uprights",
        models:["E100", "50i / 55i", "Ni-U", "Ei", "Si", "E600FN / FN1 fixed-stage", "LV100 / LV150 industrial"]
      },
      {
        group:"Inverted",
        models:["TMS", "TE200", "TS100 / TS100-F", "Ts2 / Ts2R", "Ti-S / Ti-U", "Ti2-A / Ti2-U", "Epiphot", "MA100 / MA200"]
      },
      {group:"Stereo", models:["SMZ-1B", "SMZ1270 / 1270i"]}
    ],
    olympus:[
      {
        group:"Historical uprights",
        models:[
          "E / EC / EH / FH / GB",
          "KHC student",
          "BHA / BHB / BHC",
          "Vanox (AH, AHB, AH-2, AH-3)",
          "AX70 / AX80 Provis",
          "BHSP / POS polarizing",
          "BHM metallurgical"
        ]
      },
      {group:"BX/CX", models:["BX60", "BX61", "BX45 / BX46", "BX51WI / BX61WI", "CX22", "CX33", "CX43"]},
      {group:"Inverted", models:["Original CK and IMT", "IX51", "CKX53", "IX53", "IX85", "PME / PMG3", "GX51 / GX71"]},
      {group:"Stereo and macro", models:["SZ-III", "original SZH", "VMZ", "X-Tr", "JM", "SZX12", "MVX10"]}
    ],
    wild:[
      {group:"Compound and stereo", models:["M12", "M7A", "M7S", "M1A/M1B"]},
      {group:"Surgical, if in scope", models:["M650 / M690"]}
    ],
    leitz:[
      {
        group:"Compound",
        models:["Panphot", "Laborlux 11 / 12 / K / D", "Biomed", "Medilux", "Metallux 3", "Epivert", "MM5 / MM6 metallographs"]
      },
      {group:"Polarizing", models:["Orthoplan-Pol", "Ortholux II Pol-BK", "Laborlux Pol", "SM-LUX Pol"]},
      {group:"Stereo", models:[], note:"None listed, although the brand is tagged for stereo"}
    ],
    ao:[
      {
        group:"Compound",
        models:[
          "Spencer-era stands",
          "Series 2/4 Microstar",
          "Series 10",
          "Series 20",
          "Series 50 / 60 student",
          "One-Ten / One-Twenty",
          "Series 150",
          "Biostar inverted",
          "Phasestar",
          "Fluorestar"
        ]
      },
      {group:"Stereo", models:["Series 40 \"Forty\"", "StereoStar Zoom (569/570)"]}
    ],
    bausch:[
      {group:"Compound", models:["Dynoptic", "Dynazoom", "Galen", "Academic 255", "PhotoZoom inverted", "Research Metallograph"]},
      {group:"Stereo", models:["StereoZoom 4 / 5 / 6", "BKT/SKW fixed-power stereos"]}
    ],
    reichert:[
      {
        group:"Compound",
        models:[
          "Zetopan",
          "Neozet",
          "Biozet",
          "Univar",
          "Polyvar (biological) / Polyvar 2",
          "Biovert",
          "Diavar",
          "Diastar",
          "MeF / MeF2 / MeF3 metallographs",
          "Reichert-Jung Microstar IV"
        ]
      }
    ],
    vickers:[
      {
        group:"Compound",
        models:["M15", "M17", "M41 Photoplan", "M85 microdensitometer", "and the Cooke", "Troughton & Simms predecessors"]
      }
    ],
    keyence:[
      {
        group:"",
        models:["BZ-8000", "BZ-9000 (BIOREVO)", "BZ-X700/710", "BZ-X1000", "VHX-1000 / 2000 / 5000 / 6000", "VHX-X1", "VK-X laser confocal"]
      }
    ],
    thorlabs:[
      {group:"", models:["Cerna Mini", "Veneto inverted", "the confocal systems", "Multiphoton Mesoscope", "the older B-Scope"]}
    ],
    deltavision:[
      {group:"", models:["DeltaVision RT", "Spectris", "personalDV", "DeltaVision Ultra", "OMX SR", "OMX Flex"]}
    ],
    euromex:[
      {
        group:"",
        models:[
          "Oxion (upright)",
          "Delphi-X Observer",
          "Delphi-X Inverso",
          "Achios-X",
          "BioBlue / BioBlue.Lab",
          "MicroBlue",
          "EcoBlue",
          "StereoBlue",
          "EduBlue",
          "DZ-series stereo"
        ]
      }
    ],
    motic:[
      {
        group:"",
        models:[
          "B1 / B3 series",
          "RED series",
          "BA310 POL",
          "BA310/BA410 Elite",
          "Panthera L / S / TEC / DL",
          "AE2000MET",
          "ST-30 / ST-36 stereo",
          "DM-143 digital stereo",
          "EasyScan scanners"
        ]
      }
    ],
    meiji:[
      {
        group:"",
        models:[
          "ML2000 / ML5000",
          "ML7000–ML9000",
          "MX series",
          "MT6000 fluorescence",
          "TC5000 inverted",
          "IM7000 inverted metallurgical",
          "MT-10 student series",
          "Unimac MacroZoom"
        ]
      }
    ],
    swift:[
      {
        group:"",
        models:[
          "SW150",
          "SW200DL",
          "SW350B/T",
          "Stellar 1 series",
          "M10 series",
          "M2250 student series",
          "M3200",
          "FM-31 field microscope",
          "vintage Nine-Fifty and Collegiate 400"
        ]
      }
    ],
    amscope:[
      {
        group:"",
        models:[
          "M100 / M500 student",
          "B100/T100 (unconfirmed)",
          "T690 / T720 infinity plan",
          "FM-series epi-fluorescence",
          "IN200 / IN300 inverted",
          "SM745 simul-focal stereo"
        ]
      },
      {group:"Note", models:[], note:"Existing AmScope entries are mostly categories rather than named models."}
    ],
    "lw-scientific":[
      {
        group:"",
        models:["Student Pro (M2/M5)", "Mi5", "Innovation", "Observer", "and the stereo line: Z2/Z4 zoom", "Paragon", "Achiever", "DM dual-mag"]
      },
      {group:"Note", models:[], note:"LW Scientific is tagged compound-only, so its stereo line has no home yet."}
    ],
    "national-optical":[
      {
        group:"",
        models:[
          "130 / 131 / 138 series",
          "200-series elementary (205, 210, 215)",
          "400-series stereos (400, 405, 410, 420 zoom, 446, 456)",
          "DC digital series"
        ]
      }
    ],
    labomed:[
      {group:"", models:["Lx POL", "Vision 2000", "Prima DNT", "Prima OPH", "Prima Mu", "Magna"]}
    ]
  },
  newBrands:[
    {name:"Spencer", reason:"No model pages yet."},
    {name:"Cooke, Troughton & Simms", reason:"No model pages yet."},
    {name:"Carl Zeiss Jena", reason:"No model pages yet."},
    {name:"Unitron", reason:"No model pages yet."},
    {name:"Lomo", reason:"No model pages yet."},
    {name:"Hund", reason:"No model pages yet."},
    {name:"Accu-Scope", reason:"No model pages yet."}
  ]
};
