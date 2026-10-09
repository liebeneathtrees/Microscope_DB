// SOURCES — checked: verified | cited. Models, brands and genealogy entries refer to these by id.
// Edit this file directly. Run `node tools/validate.js` after any change.
DB.sources = [
  {
    id:"sci-museum-reichert",
    title:"Reichert 1876–1999 (company record)",
    publisher:"Science Museum Group",
    url:"https://collection.sciencemuseumgroup.org.uk/people/cp2824",
    type:"reference",
    checked:"verified",
    note:"Founding 1876; sold to AO 1962; AO taken over by Warner-Lambert 1968; sold to Cambridge Instruments 1986; merged with Wild Leitz 1990.",
    brands:["reichert"]
  },
  {
    id:"utrecht-reichert",
    title:"Reichert (BIC Museum of Microscopy)",
    publisher:"Utrecht University",
    url:"https://cellbiology.science.uu.nl/?p=423",
    type:"reference",
    checked:"verified",
    note:"Corroborates the Reichert ownership chain and 1999 end of microscope production.",
    brands:["reichert"]
  },
  {
    id:"microscope-museum-reichert",
    title:"C Reichert (Vienna, Austria)",
    publisher:"Microscope Museum",
    url:"https://antiquemicroscopes.co.uk/microscopespermakergermany.html",
    type:"reference",
    checked:"verified",
    note:"Says the firm was \"partially sold\" to AO in 1962.",
    brands:["reichert"]
  },
  {
    id:"leica-stereo-history",
    title:"The History of Stereo Microscopy",
    publisher:"Leica Microsystems",
    url:"https://www.leica-microsystems.com/science-lab/industrial/the-history-of-stereo-microscopy/",
    type:"reference",
    checked:"verified",
    note:"AO Cycloptic 1957 (first modern CMO stereo, five-step changer); B&L StereoZoom 1959 (Greenough design, stepless zoom).",
    brands:["ao", "bausch"]
  },
  {
    id:"fsu-stereozoom",
    title:"Bausch & Lomb StereoZoom Binocular Stereomicroscope",
    publisher:"Molecular Expressions (Florida State University)",
    url:"https://micro.magnet.fsu.edu/primer/museum/bandlstereozoom4.html",
    type:"reference",
    checked:"verified",
    note:"StereoZoom introduced 1959; first commercial stereomicroscope without erecting prisms.",
    brands:["bausch"]
  },
  {
    id:"covington-stereozoom",
    title:"The Bausch & Lomb and Leica StereoZoom 4",
    publisher:"Covington Innovations",
    url:"https://covingtoninnovations.com/stereozoom",
    type:"reference",
    checked:"verified",
    note:"StereoZoom 4 later taken over by Leica and also marketed under the Cambridge Instruments name.",
    brands:["bausch"]
  },
  {
    id:"graces-vickers",
    title:"Vickers Instruments",
    publisher:"Grace's Guide",
    url:"https://gracesguide.co.uk/Vickers_Instruments",
    type:"reference",
    checked:"verified",
    note:"Vickers Instruments Ltd formed 1963; Vickers Group sold the York business to Bio-Rad in 1988.",
    brands:["vickers"]
  },
  {
    id:"archives-hub-vickers",
    title:"Vickers Instruments Archive",
    publisher:"Archives Hub",
    url:"https://archiveshub.ac.uk/search/archives/a401c750-5227-3f5d-9be3-086a30cf8499",
    type:"reference",
    checked:"verified",
    note:"Name changed to Vickers Instruments Ltd, trading from 1 January 1963; sold to Bio-Rad 1988.",
    brands:["vickers"]
  },
  {
    id:"microscope-museum-vickers",
    title:"Vickers history (Microscope Museum item 43)",
    publisher:"Microscope Museum",
    url:"https://antiquemicroscopes.co.uk/item43.html",
    type:"reference",
    checked:"verified",
    note:"Gives 1989 for the sale to Bio-Rad Micromeasurements (other sources say 1988).",
    brands:["vickers"]
  },
  {
    id:"cytiva-dv-discon",
    title:"DeltaVision series sales-end notice (31 March 2021)",
    publisher:"Cytiva",
    url:"https://www.cytivalifesciences.co.jp/products/change/pdf/info_210331_discon_DV.pdf",
    type:"reference",
    checked:"verified",
    note:"DeltaVision series sales ended end of February 2021.",
    brands:["deltavision"]
  },
  {
    id:"cytiva-portfolio",
    title:"Cytiva portfolio change notice (May 2021)",
    publisher:"Cytiva",
    url:"https://www.cytivalifesciences.co.jp/company/press/pdf/info_210430_PortfolioChange.pdf",
    type:"reference",
    checked:"verified",
    note:"Service and application support for DeltaVision systems moved to Leica Microsystems on 30 April 2021; support through 31 December 2025.",
    brands:["deltavision"]
  },
  {
    id:"overney-leitz",
    title:"The Leitz Orthoplan and Ortholux II Research Microscopes",
    publisher:"Microscopy UK (Overney)",
    url:"https://www.microscopy-uk.org.uk/mag/artoct09/The_Leitz_Orthoplan_and_Ortholux_II_Research_Microscopes_Ver_4.pdf",
    type:"archive",
    checked:"cited",
    note:"Cited in the research notes for Leitz production dates and the 1976 change from 170 mm to 160 mm tube length. Not re-checked.",
    brands:["leitz"]
  },
  {
    id:"evident-stereo",
    title:"Evident stereo microscopes",
    publisher:"Evident Scientific",
    url:"https://evidentscientific.com/en/life-science-microscopes/stereo",
    type:"reference",
    checked:"cited",
    note:"Cited in the research notes as listing SZX10, SZ61 and SZX7 as current. Not re-checked.",
    brands:["olympus"]
  },
  {
    id:"microscope-museum-nikon",
    title:"Microscope Museum: Nikon",
    publisher:"Microscope Museum",
    url:"https://antiquemicroscopes.co.uk/imagedatabaseimportantmakersnikon.html",
    type:"archive",
    checked:"cited",
    note:"Images from dated Nikon catalogues, 1965–2018. Cited for Eclipse E200 and Alphaphot-2 dates. Not re-checked.",
    brands:["nikon"]
  },
  {
    id:"alanwood-literature",
    title:"Sources for old microscope literature",
    publisher:"Alan Wood",
    url:"https://www.alanwood.net/olympus/microscope-manuals-catalogs.html",
    type:"archive",
    checked:"cited",
    note:"Index of about 35 manual and brochure archives by brand (AO, Spencer, B&L, Leitz, Leica, Wild, Nikon, Olympus, Reichert, Vickers, Zeiss, Meiji, Unitron, Lomo, Cooke Troughton & Simms). Last updated 2012; some links may be dead.",
    brands:["ao", "bausch", "leitz", "leica", "wild", "nikon", "olympus", "reichert", "vickers", "zeiss", "meiji"]
  },
  {
    id:"alanwood-olympus",
    title:"Olympus downloads",
    publisher:"Alan Wood",
    url:"https://alanwood.net/olympus/downloads.html",
    type:"archive",
    checked:"cited",
    note:"Dated brochures and manuals for BH, BH-2, CH, CH-2, CK, IMT, Vanox, SZ and SZH. Nothing for BX.",
    brands:["olympus"]
  },
  {
    id:"ucsd-zeiss",
    title:"Zeiss manuals",
    publisher:"UCSD Neurophysics",
    url:"https://neurophysics.ucsd.edu/Manuals/Zeiss/",
    type:"archive",
    checked:"cited",
    note:"Manuals for Axioplan 2, Axiophot 2, Axioskop 2 FS, Stemi 1000/2000/2000-C, DV4, SV8, Discovery V8/V12/V20.",
    brands:["zeiss"]
  },
  {
    id:"meiji-skt-brochure",
    title:"SKT New Series brochure (ref. 95.08.187)",
    publisher:"Meiji Techno",
    url:null,
    type:"manufacturer",
    checked:"verified",
    note:"Owner-supplied PDF, printed 1995. Optical data, accessory part numbers.",
    brands:["meiji"]
  },
  {
    id:"meiji-skt-manual",
    title:"SKT Series Stereo Microscopes instruction manual",
    publisher:"Meiji Techno",
    url:null,
    type:"manufacturer",
    checked:"verified",
    note:"Owner-supplied PDF. Working distance 44 mm for SKT-3 series (brochure table says 45 mm).",
    brands:["meiji"]
  },
  {
    id:"zeiss-axiolab5-pi",
    title:"ZEISS Axiolab 5: Product Information, version 1.0",
    publisher:"Carl Zeiss Microscopy GmbH",
    url:"https://pages.zeiss.com/rs/896-XMS-794/images/ZEISS_Axiolab-5_Product-Info.pdf",
    type:"manufacturer",
    checked:"verified",
    note:"Source of the Axiolab 5 specifications: stand variants, illumination, nosepiece, stage, focus range, field of view, contrast methods. Edition code CZ 05-2019.",
    brands:["zeiss"]
  },
  {
    id:"zeiss-axiolab5-page",
    title:"ZEISS Axiolab 5 product page",
    publisher:"ZEISS",
    url:"https://www.zeiss.com/microscopy/en/products/light-microscopes/widefield-microscopes/axiolab-5.html",
    type:"manufacturer",
    checked:"verified",
    note:"Positioning (clinical and biomedical routine lab work) and the Smart Microscopy concept.",
    brands:["zeiss"]
  },
  {
    id:"zeiss-axiovert5-pr",
    title:"ZEISS introduces all-in-one cell imaging system (Axiovert 5 digital)",
    publisher:"ZEISS press release, 12 January 2023",
    url:"https://www.zeiss.com/microscopy/en/about-us/newsroom/press-releases/2023/axiovert-5-digital.html",
    type:"manufacturer",
    checked:"verified",
    note:"Dated introduction of the Axiovert 5 digital: brightfield, phase and fluorescence contrast, with AI cell counting and confluency. No technical specifications.",
    brands:["zeiss"]
  }
];
