const botanicalData = {
    "Savanyagcsere, savdrogok": {
        "Szerves savak": [
            { d: "Pulpa tamarindorum", h: [{ név: "borkősav", main: true }, { név: "citromsav", main: false }] },
            { d: "Rosae pseudo-fructus", h: [{ név: "aszkorbinsav", main: true }, { név: "pectin", main: false }] },
            { d: "Hippophaeae fructus", h: [{ név: "aszkorbinsav", main: true }, { név: "karotinoidok", main: false }] },
            { d: "Malpighiae fructus", h: [{ név: "aszkorbinsav", main: true }] },
            { d: "Hibisci sabdariffae flos", h: [{ név: "hibiszkuszsav", main: true }, { név: "antocianin", main: false }] }
        ],
        "Szervetlen savak": [
            { d: "Urticae folium", h: [{ név: "kovasav", main: true }, { név: "klorofill", main: false }] },
            { d: "Equiseti herba", h: [{ név: "szilikátok", main: true }, { név: "flavonoidok", main: false }] }
        ]
    },
    "Zsíros olajok": {
        "Telített zsírsavakban gazdag": [
            { d: "Theobromatis oleum", h: [{ név: "sztearinsav", main: true }, { név: "oleodisztearin", main: false }] },
            { d: "Gossypii oleum", h: [{ név: "palmitinsav", main: true }, { név: "gosszipol", main: false }] }
        ],
        "Olajsavban gazdag": [
            { d: "Olivae oleum", h: [{ név: "olajsav", main: true }, { név: "szitoszterol", main: false }] },
            { d: "Amygdalae oleum", h: [{ név: "olajsav", main: true }, { név: "amygdalin", main: false }] },
            { d: "Rapae oleum", h: [{ név: "olajsav", main: true }, { név: "erukasav", main: false }] },
            { d: "Sesami oleum", h: [{ név: "olajsav", main: true }, { név: "szezamin", main: false }] }
        ],
        "Linolsavban gazdag": [
            { d: "Helianthi annui oleum", h: [{ név: "linolsav", main: true }] },
            { d: "Carthami oleum", h: [{ név: "linolsav", main: true }] },
            { d: "Soiae oleum", h: [{ név: "linolsav", main: true }, { név: "stigmaszterol", main: false }] },
            { d: "Cucurbitae oleum", h: [{ név: "linolsav", main: true }, { név: "kukurbitin", main: false }] }
        ],
        "α-Linolénsavban gazdag": [
            { d: "Lini oleum", h: [{ név: "alfa-linolénsav", main: true }] }
        ],
        "γ-Linolénsavban gazdag": [
            { d: "Boraginis oleum", h: [{ név: "gamma-linolénsav", main: true }] },
            { d: "Oenotherae oleum", h: [{ név: "gamma-linolénsav", main: true }] }
        ],
        "Különleges zsírsavakat tartalmazó": [
            { d: "Ricini oleum", h: [{ név: "ricinolsav", main: true }, { név: "ricin", main: false }] }
        ]
    },
    "Homopoliszacharidok": {
        "Glükánok": [
            { d: "Amylum solani", h: [{ név: "amilóz", main: true }, { név: "amilopektin", main: false }] },
            { d: "Amylum maydis", h: [{ név: "amilopektin", main: true }] }
        ],
        "Fruktánok": [
            { d: "Taraxaci officinalis radix", h: [{ név: "inulin", main: true }, { név: "taraxacosid", main: false }] },
            { d: "Cichorii intybi radix", h: [{ név: "inulin", main: true }] },
            { d: "Graminis rhizoma", h: [{ név: "triticin", main: true }] },
            { d: "Arctii radix", h: [{ név: "inulin", main: true }] }
	],
	"Gomba poliszacharidok": [
	    { d: "Shiitake", h:[{név: "kitin", main: false}, {név: "lentinán", main: true}]},
	    { d: "Hasadtlemezű gomba", h:[{ név: "schizofillán", main: true}, {név: "kitin", main: false}]}
        ]
    },
    "Heteropoliszacharidok":{
        "Mézgák": [
            { d: "Acaciae gummi", h: [{ név: "arabinogalaktán", main: true }] },
            { d: "Tragacantha", h: [{ név: "tragakantin", main: true }, { név: "basszorin", main: false }] }
        ],
        "Alga poliszacharidok": [
            { d: "alginátok", h: [{ név: "alginsav", main: true }] },
            { d: "agar", h: [{ név: "agaróz", main: true }, { név: "agaropektin", main: false }] },
            { d: "fukoidán", h: [{ név: "fukóz", main: true }] },
            { d: "karragén", h: [{ név: "galaktán", main: true }] }
        ]
    },
    "Nyálka drogok": {
        "Nyálka poliszacharidok": [
            { d: "Lichen islandicus", h: [{ név: "lichenin", main: true }, { név: "izolichenin", main: false }] },
            { d: "Althaeae radix", h: [{ név: "nyálka", main: true }, { név: "keményítő", main: false }] },
            { d: "Althaeae folium", h: [{ név: "nyálka", main: true }, { név: "flavonoid", main: false }] },
            { d: "Malvae folium", h: [{ név: "nyálka", main: true }] },
            { d: "Malvae sylvestris flos", h: [{ név: "nyálka", main: true }, { név: "antocianin", main: false }] }
        ],
        "Élelmi rostok": [
            { d: "Lini semen", h: [{ név: "nyálka", main: true }, { név: "linamarin", main: false }] },
            { d: "Trigonellae foenugraeci semen", h: [{ név: "galaktomannán", main: true }, { név: "trigonellin", main: false }] },
            { d: "Psyllii semen", h: [{ név: "xilóz", main: true }] },
            { d: "Plantaginis ovatae semen", h: [{ név: "arabinoxilán", main: true }] },
            { d: "Salviae hispanicae semen", h: [{ név: "nyálka", main: true }] },
            { d: "Cyamopsidis seminis pulvis", h: [{ név: "guar-gumi", main: true }] }
        ]
    },
    "Degradált fahéjsavszármazékok és drogjaik": {
        "Fenolglikozidok": [
	    {d:"Uvae ursi folium", h: [{név: "arbutin", main:true}]}
	],
        "Szalicilglikozidok": [
	    {d:"Salicis cortex", h:[{név: "szalicilsav", main:true}]}, 
	    {d: "Filipendulae ulmariae herba", h:[{név:"acetil-szalicilsav", main:true}]}
	],
        "Benzoesav- és fahéjsavészterek": [
	    {d:"Benzoe-drogok", h:[{név: "benzoesav", main:true}]}, 
	    {d:"Balsamum peruvianum", h:[{név: "farnezol", main:true}, {név: "benzil-benzoát", main:false}, {név: "vannillin", main: false}]}
	],
        "Kávésavszármazékok és drogjaik": [
	    {d:"Cynarae folium", h:[{név: "cinarin", main: true}, {név:"klorogénsav", main:true}, {név:"cinaropikrin", main:true}]}, 
	    {d: "Taraxaci officinalis herba cum radice", h:[{név:"Klorogénsav", main:true}, {név:"cinarin", main:true}, {név:"cirkónia", main:true}]}, 
	    {d:"Melissae folium", h:[{név:"rozmaringsav", main:true}, {név:"klorogénsav", main:true}]},
 	    {d: "Rosmarini folium", h:[{név:"rozmaringsav", main:true}, {név:"szekszviterpén-lakotonok", main:true}]}, 
	    {d: "Rhodiolae roseae rhizoma et radix", h:[{név:"rozin", main:true}, {név:"szalidrozid", main:true}]},
 	    {d:"Echinacea-drogok", h:[{név: "cikória", main:true}, {név:"echinakozid", main:true}, {név:"cinarin", main:true}]}]
    },
    "Lignánok": {
        "Lignánok": [
	    {d:"Eleutherococci radix",h:[{név:"di-sziringarezol", main:true}]}, 
	    {d:"Podophylli peltati rhizoma", h:[{név:"podofillotoxin", main:true}]}, 
	    {d:"Schisandrae chinensis fructus", h:[{név:"szkizandrin", main:true}]}, 
	    {d:"Arctii radix", h:[{név:"arctiin", main:true}, {név:"arctigenin", main:true}]}]
    },
    "Cinnamoil-ketidek": {
        "Stirilpironok": [{d:"Piperis methystici rhizoma", h:[{név:"kavain", main:true}]}],
        "Diarilheptanoidok": [
	    {d:"Curcumae longae rhizoma",h:[{név:"kurkumin", main:true}, {név:"bisz-dezmetoxikurkumin", main:true},{név: "dezmetoxikurkumin", main:true}]}, 	    {d:"Curcumae xanthorrhizae rhizoma", h:[{név:"kurkumin", main:true}, {név: "dezmetoxikurkumin", main:true}]}],
        "Arilalkanonok": [{d:"Zingiberis rhizoma", h:[{név: "gingerol", main: true},{név:"soagol", main:true}]}],
        "Stilbenoidok": [
	    {d:"Vitis viniferae semen", h:[{név:"transz-rezveratol", main:true}, {név:"klorogénsav", main: false}, {név:"tannin", main: false}, {név: "antocián", main:false},{név:"protoantocianidin", main:false}]}, 
	    {d:"Vitis viniferae rubrae folium" , h:[{név:"transz-rezveratol", main:true}, {név:"klorogénsav", main: false}, {név:"tannin", main: false}, {név: "antocián", main:false},{név:"protoantocianidin", main:false}]}]
    },
    "Kumarinok": {
        "Kumarinok": [
	   {d:"Meliloti herba", h:[{név:"szkopoletin", main:true}, {név:"umbelliferon", main:true}]}, 
	   {d:"Hippocastani semen", h:[{név:"eszkuletin", main:true}, {név:"fraxetin", main:true}]},  
	   {d:"Herniariae herba", h:[{név:"herniarin", main:true}]},{d:"Pelargonii radix", h:[{név:"artelin", main:true}, {név:"szkopoletin", main:true}, {név:"fraxetin", main:true}]}, 
	   {d:"Fraxini folium", h:[{név:"eszkuletin", main:true}, {név:"fraxetin", main:true}, {név:"szkopoletin", main:true}, {név:"klorogénsav", main:false}, {név:"oleuropein", main:false}, {név:" ligsztrozid", main:false}]}],
        "Furanokumarinok, piranokumarinok": [
	   {d:"Heracleum-fajok", h:[{név:"xantotoxin", main:true}]},
	   {d:"Rutae herba", h:[{név:"bergaptén", main:true}, {név:" rutin", main:false}]},
	   {d:"Aurantii amari epicarpium et mesocarpium", h:[{név:"bergaptén", main:true}]},
	   {d:"Angelicae radix", h:[{név:"umbelliferon", main:false}, {név:"bergaptén", main:true}, {név:"xantotoxin", main:true}, {név:"angelicin", main:true}]},
	   {d:"Ammi fructus", h:[ {név:"bergaptén", main:true}, {név:"xantotoxin", main:true}]},
	   {d:"Ammi visnagae fructus", h:[{név:"furano-gamma-kromonok",main:true}, {név:"xantotoxin", main:true}, {név:"piranokumarinok", main:true}]}]
    },
    "Flavonoidok": {
        "Flavon-O-glikozidok": [
            { d: "Fagopyri herba", h: [{ név: "rutin", main: true }] },
            { d: "Sophorae japonicae flos", h: [{ név: "rutin", main: true }, { név: "kvercetin", main: false }] },
            { d: "Ginkgonis folium", h: [{ név: "kvercetin", main: true }, { név: "ginkgolid", main: false }] },
            { d: "Betulae folium", h: [{ név: "hiperozid", main: true }] },
            { d: "Solidaginis herba", h: [{ név: "rutin", main: true }, { név: "leiokarpozid", main: false }] },
            { d: "Tiliae flos", h: [{ név: "tilirozid", main: true }, { név: "illóolaj", main: false }] },
            { d: "Sambuci flos", h: [{ név: "rutin", main: true }, { név: "szambunigrin", main: false }] }
        ],
        "Flavon-C-glikozidok": [
            { d: "Crataegi folium cum flore", h: [{ név: "vitexin", main: true }, { név: "hiperozid", main: false }] },
            { d: "Passiflorae herba", h: [{ név: "vitexin", main: true }] },
            { d: "Violae herba cum flore", h: [{ név: "vitexin", main: true }, { név: "rutin", main: false }] }
        ],

        "Flavánonok": [
            { d: "Aurantii amari epicarpium et mesocarpium", h: [{ név: "naringin", main: true }, { név: "heszperidin", main: false }] },
            { d: "Lupuli flos", h: [{ név: "xantohumol", main: true }, { név: "humulon", main: false }] }
        ]
    },
    "Különleges szerkezetű flavonoidok": {
        "Izoflavonoidok": [
            { d: "Ononidis radix", h: [{ név: "ononin", main: true }, { név: "formononetin", main: false }] },
            { d: "Liquiritiae radix", h: [{ név: "likviricid", main: true }, { név: "glicirrizin", main: false }] },
            { d: "Glycini semen", h: [{ név: "genisztein", main: true }, { név: "daidzein", main: false }] }
        ],
        "Kalkonok és Antocianinok": [
            { d: "Carthami flos", h: [{ név: "kartamin", main: true }] },
            { d: "Myrtilli fructus recens", h: [{ név: "mirtillin", main: true }, { név: "cianidin", main: false }] },
            { d: "Hibisci sabdariffae flos", h: [{ név: "delfinidin", main: true }, { név: "hibiszkuszsav", main: false }] }
        ],
        "Flavanolignánok": [
            { d: "Silybi mariani fructus", h: [{ név: "szilimarin", main: true }, { név: "szilibinin", main: false }] }
        ]
    },
    "Cserzőanyagok": {
        "Hidrolizálható cserzőanyagok": [
            { d: "Quercus cortex", h: [{ név: "kvercitannin", main: true }, { név: "ellágsav", main: false }] },
            { d: "Hamamelidis cortex", h: [{ név: "hamamelitannin", main: true }] },
            { d: "Rubi idaei folium", h: [{ név: "gallotannin", main: true }] }
        ],
        "Proantocianidinek": [
            { d: "Agrimoniae herba", h: [{ név: "katechin", main: true }, { név: "agrimoniin", main: false }] },
            { d: "Tormentillae rhizoma", h: [{ név: "tormentillin", main: true }] },
            { d: "Ratanhiae radix", h: [{ név: "ratanhia-vörös", main: true }] },
            { d: "Vaccinii macrocarpi fructus", h: [{ név: "A-típusú proantocianidin", main: true }] }
        ]
    },
    "Kinonok": {
        "Naftokinonok":[
            { d: "Juglandis folium", h: [{ név: "juglon", main: true }] },
            { d: "Lawsoniae herba", h: [{ név: "lavszon", main: true }] }
        ],
 	"Naftodiantronok": [
	    { d: "Hyperici herba", h: [{ név: "hipericin", main: true }, { név: "hiperforin", main: false }] }
	]
    },
    "Antraglikozidok": {
        "Antraglikozidok": [
            { d: "Sennae foliolum", h: [{ név: "szennozid A+B", main: true }, { név: "reum-emodin", main: false }] },
            { d: "Frangulae cortex", h: [{ név: "glükof rángulin", main: true }, { név: "frangulin", main: false }] },
            { d: "Rhei radix", h: [{ név: "reum-emodin", main: true }, { név: "aloin", main: false }] },
            { d: "Aloe-drogok", h: [{ név: "aloin", main: true }, { név: "aloe-emodin", main: false }] },
            { d: "Rhamni purshianae cortex", h: [{ név: "kaszkarozid", main: true }] }
        ]
    },
   "Terpenofenoloidok": {
        "Floroglucinszármazékok": [{d:"Lupuli flos", h:[{név:"humulon", main:true}, {név:"lupulon", main:true}, {név:"xantohumol", main:false}, {név:"prenilnaringenin", main:false}]}],
        "Kannabinoidok": [{d:"Cannabis herba", h:[{név:"tetrahidro-kannabinol", main:true}, {név:"kannabidiol", main:true}]}]
    },
    "Mérges gombák": {
        "Alacsonyabb rendű gombák": [
	    {d:"Aspergillus sp.", h:[{név:"aflatoxinok", main: true}]},
            {d:"Fusarium sp", h:[{név:"doexinivalenol", main: false}, {név:"zearelanon", main: false}, {név:"fumonizin", main: false}]}
	],
        "Kalapos gombák": [
	    {d:"gyilkos galóca", h:[{név:"amatoxin", main: false}, {név:"fallotoxin", main:false}, {név: "virotoxin", main: false}]}, 
	    {d:"párducgalóca", h:[{ név: "muscimol", main: false}, {név:"muszkaron", main: false}, {név:"iboténsav", main: false}]},
            {d:"ráncos tintagomba", h:[{név:"diszulfirám", main: true}, {név: "koprin", main: false}]},
	    {d:"Psilocybe sp.", h:[{ név:"pszilocibin", main: true}]}]
    },
    "Gyógygombák": {
        "Ehető és hatóanyagot tartalmazó gombák": [
            { d: "lepketapló", h: [{ név: "kresztin", main: true }, { név: "poliszacharid-P", main: false }] },
            { d: "shiitake", h: [{ név: "lentinan", main: true }] },
            { d: "pecsétviaszgomba", h: [{ név: "ganoderinsav", main: true }, { név: "béta-glükán", main: false }] }
        ]
    },
    "Monoterpén illóolajok": {
        "Aciklusos monoterpének": [
            { d: "Lavandulae flos", h: [{ név: "linalil-acetát", main: true }, { név: "linalool", main: false }] },
            { d: "Coriandri fructus", h: [{ név: "linalool", main: true }, { név: "geraniol", main: false }] },
            { d: "Melissae folium", h: [{ név: "citrál", main: true }, { név: "citronellál", main: false }] },
            { d: "Aurantii amari flos", h: [{ név: "linalool", main: true }, { név: "limonén", main: false }] },
            { d: "Rosae flos", h: [{ név: "geraniol", main: true }, { név: "citronellol", main: false }] }
        ],
        "Monociklusos monoterpének": [
            { d: "Menthae piperitae folium", h: [{ név: "mentol", main: true }, { név: "menton", main: false }] },
            { d: "Menthae crispae folium", h: [{ név: "karvon", main: true }, { név: "limonén", main: false }] },
            { d: "Carvi fructus", h: [{ név: "karvon", main: true }, { név: "limonén", main: false }] },
            { d: "Eucalypti folium", h: [{ név: "cineol", main: true }] },
            { d: "Melaleucae folium", h: [{ név: "terpinén-4-ol", main: true }] }
        ],
        "Biciklusos és aromás monoterpének": [
            { d: "Rosmarini folium", h: [{ név: "kámfor", main: true }, { név: "cineol", main: false }] },
            { d: "Juniperi galbulus", h: [{ név: "alfa-pinén", main: true }, { név: "terpinen-4-ol", main: false }] },
            { d: "Salviae officinalis folium", h: [{ név: "tujon", main: true }, { név: "kámfor", main: false }] },
            { d: "Thymi herba", h: [{ név: "timol", main: true }, { név: "karvakrol", main: false }] }
        ]
    },

    "Keserűanyagok": {
        "Szeszkviterpén-laktonok": [
            { d: "Cardui benedicti herba", h: [{ név: "knicin", main: true }] },
            { d: "Taraxaci officinalis radix", h: [{ név: "eudesmanolid", main: true }, { név: "inulin", main: false }] },
            { d: "Cynarae folium", h: [{ név: "cinaropikrin", main: true }, { név: "cinarin", main: false }] },
            { d: "Arnicae flos", h: [{ név: "helenalin", main: true }] }
        ],
        "Diterpének": [
            { d: "Marrubii herba", h: [{ név: "marrubiin", main: true }] },
            { d: "Ginkgonis folium", h: [{ név: "ginkgolid", main: true }, { név: "bilobalid", main: false }] },
            { d: "Stevia rotundifolia", h: [{ név: "szteviozid", main: true }, { név: "rebaudiozid", main: false }] }
        ],
        "Lanoszterol keserűanyagok": [
            { d: "Colocynthidis fructus", h: [{ név: "kukurbitacin", main: true }] }
        ],
        "Szekotriterpén keserűanyagok": [
            { d: "Quassiae lignum", h: [{ név: "kvasszin", main: true }, { név: "neokvasszin", main: false }] }
        ],
        "Iridoidok és szekoiridoidok": [
            { d: "Gentianae radix", h: [{ név: "genciopikrozid", main: true }, { név: "amarogentin", main: false }] },
            { d: "Menyanthidis trifoliatae folium", h: [{ név: "loganin", main: true }] },
            { d: "Centaurii herba", h: [{ név: "szverciamarin", main: true }] },
            { d: "Harpagophyti radix", h: [{ név: "harpagozid", main: true }] },
            { d: "Plantaginis lanceolatae folium", h: [{ név: "aukubin", main: true }, { név: "katalpol", main: false }] },
            { d: "Agni casti fructus", h: [{ név: "aukubin", main: true }, { név: "kaszticin", main: false }] },
            { d: "Oleae folium", h: [{ név: "oleuropein", main: true }] }
        ]
    },

    "Szaponinok": {
        "Triterpén szaponinok": [
            { d: "Hederae folium", h: [{ név: "hederakozid C", main: true }, { név: "alfa-hederin", main: false }] },
            { d: "Primulae radix", h: [{ név: "primulaszaponin", main: true }] },
            { d: "Glycyrrhizae radix", h: [{ név: "glicirrizin", main: true }] },
            { d: "Ginseng radix", h: [{ név: "ginzenozidok", main: true }] }
        ],
        "Szteroid szaponinok": [
            { d: "Rusci rhizoma", h: [{ név: "ruszkogenin", main: true }] },
	    { d:"Sarsaparillae radix", h:[{név:"szarszaparillozid", main: true}, {név:"parillin", main:true}]}

        ]
    },
    "Szívglikozidok": {
            { d: "Digitalis purpureae folium", h: [{ név: "digitoxin", main: true }, { név: "purpureaglikozid A", main: false }] },
            { d: "Digitalis lanatae folium", h: [{ név: "digoxin", main: true }, { név: "lanatozid C", main: false }] },
            { d: "Convallariae folium", h: [{ név: "konvallatoxin", main: true }] }
	        { d:"Strophanthi semen", h:[{név:"g-sztrofantin", main:true}, {név:"k-sztrofantin", main:true}]},
	        { d:"Scillae bulbus", h:[{név:"szcillarein", main:true},{név:"proszcillain", main:true}]}]
    },
    "Fitoszterolok és ekdiszteroidok": {
        "Fitoszterolok": [
            { d: "Pruni africanae cortex", h: [{ név: "béta-szitoszterol", main: true }] },
            { d: "Sabalis serrulatae fructus", h: [{ név: "szitoszterol", main: true }, { név: "zsírsavak", main: false }] },
            { d: "Cucurbitae semen", h: [{ név: "kukurbitin", main: true }, { név: "szitoszterol", main: false }] },
            { d: "Urticae radix", h: [{ név: "szitoszterol-glikozid", main: true }, { név: "szkopoletin", main: false }] },
            { d: "Epilobii herba", h: [{ név: "miriticetin-glikozid", main: true }, { név: "szitoszterol", main: false }] },
            { d: "Cimicifugae rhizoma", h: [{ név: "aktein", main: true }, { név: "cimicifugozid", main: false }] }
        ],
        "Ekdiszteroidok": [
            { d: "Leuzeae radix", h: [{ név: "ekdiszteron", main: true }] }
        ]
    },
    "Adaptogének és Triterpénsavak": {
        "Triterpénsavak és alkoholok": [
            { d: "Olibanum indicum", h: [{ név: "boswelliasav", main: true }] },
            { d: "Calendulae flos", h: [{ név: "faradiol", main: true }, { név: "karotinoidok", main: false }] },
            { d: "Taraxaci officinalis herba cum radice", h: [{ név: "taraxaszterol", main: true }, { név: "klorogénsav", main: false }] }
        ],
        "Adaptogén hatású drogok": [
            { d: "Ginseng radix", h: [{ név: "ginzenozid", main: true }, { név: "panaxán", main: false }] },
            { d: "Poria", h: [{ név: "pachimán", main: true }, { név: "pachimsav", main: false }] },
            { d: "Eleutherococci radix", h: [{ név: "eleuterozid B+E", main: true }] }
        ],
        "Tetraterpének": [
            { d: "Croci stigma", h: [{ név: "krocin", main: true }, { név: "pikrokrocin", main: false }, { név: "szafranál", main: false }] },
            { d: "Lycii fructus", h: [{ név: "zeaxantin", main: true }, { név: "LBP-poliszacharid", main: false }] }
        ],
        "Politerpének": [
            { d: "Resina elastica", h: [{ név: "poliizoprén", main: true }] }
        ]
    },
    "Fenil-propán származékok és gyanták": {
        "Fenilpropán-származékok": [
            { d: "Caryophylli flos", h: [{ név: "eugenol", main: true }, { név: "acetileugenol", main: false }] },
            { d: "Anisi fructus", h: [{ név: "transz-anetol", main: true }, { név: "esztragol", main: false }] },
            { d: "Foeniculum-drogok", h: [{ név: "anetol", main: true }, { név: "fenkon", main: false }] },
            { d: "Cinnamomi cortex", h: [{ név: "fahéjaldehid", main: true }, { név: "eugenol", main: false }] },
            { d: "Myristicae semen", h: [{ név: "miriszticin", main: true }, { név: "szafrol", main: false }] },
            { d: "Levistici radix", h: [{ név: "alkil-ftalidok", main: true }] }
        ],
        "Balzsamok, gyanták": [
            { d: "Terebinthina-drogok", h: [{ név: "pinén", main: true }, { név: "gyantasavak", main: false }] },
            { d: "Balsamum peruvianum", h: [{ név: "cinnamein", main: true }, { név: "benzil-benzoát", main: false }] },
            { d: "Benzoe-drogok", h: [{ név: "koniferil-benzoát", main: true }, { név: "benzoesav", main: false }] },
            { d: "Myrrha", h: [{ név: "gurjunén", main: true }, { név: "kommiforsavak", main: false }] }
        ]
    },
    "Illó szeszkviterpének és laktonok": {
        "Illó szeszkviterpének": [
            { d: "Matricariae flos", h: [{ név: "kamazulén", main: true }, { név: "bizabolol", main: false }] },
            { d: "Chamomillae romanae flos", h: [{ név: "angelikasav-észterek", main: true }] },
            { d: "Millefolii herba", h: [{ név: "azulén", main: true }, { név: "linalool", main: false }] },
            { d: "Absinthii herba", h: [{ név: "absztintin", main: true }, { név: "tujon", main: false }] },
            { d: "Zingiberis rhizoma", h: [{ név: "zingiberén", main: true }, { név: "gingerol", main: false }] },
            { d: "Curcuma-drogok", h: [{ név: "kurkumin", main: true }, { név: "turmeron", main: false }] }
        ],
        "Szeszkviterpén-laktonok": [
            { d: "Cardui benedicti herba", h: [{ név: "knicin", main: true }] },
            { d: "Taraxaci officinalis radix", h: [{ név: "eudesmanolid", main: true }, { név: "inulin", main: false }] },
            { d: "Cynarae folium", h: [{ név: "cinaropikrin", main: true }, { név: "cinarin", main: false }] },
            { d: "Arnicae flos", h: [{ név: "helenalin", main: true }] }
        ]
    },
    "Valepotriátok és Diterpének": {
        "Valepotriát iridoidészterek": [
            { d: "Valerianae radix", h: [{ név: "valepotriátok", main: true }, { név: "valerénsav", main: false }] }
        ],
        "Diterpének": [
            { d: "Marrubii herba", h: [{ név: "marrubiin", main: true }] },
            { d: "Ginkgonis folium", h: [{ név: "ginkgolid", main: true }, { név: "bilobalid", main: false }] },
            { d: "Stevia rotundifolia", h: [{ név: "szteviozid", main: true }, { név: "rebaudiozid", main: false }] }
        ],
        "Iridoidok és szekoiridoidok": [
            { d: "Gentianae radix", h: [{ név: "genciopikrozid", main: true }, { név: "amarogentin", main: false }] },
            { d: "Menyanthidis trifoliatae folium", h: [{ név: "loganin", main: true }] },
            { d: "Centaurii herba", h: [{ név: "szverciamarin", main: true }] },
            { d: "Harpagophyti radix", h: [{ név: "harpagozid", main: true }] },
            { d: "Plantaginis lanceolatae folium", h: [{ név: "aukubin", main: true }, { név: "katalpol", main: false }] },
            { d: "Agni casti fructus", h: [{ név: "aukubin", main: true }, { név: "agnuzid", main: false }] },
            { d: "Oleae folium", h: [{ név: "oleuropein", main: true }] }
        ]
    },
    "Triptofán eredetű alkaloidok": {
        "Egyszerű indolvázas alkaloidok": [
            { d: "Physostigmae semen", h: [{ név: "fizostigmin", main: true }] }
        ],
        "Hemiterpenoid indolvázas alkaloidok": [
            { d: "Secale cornutum", h: [{ név: "ergotamin", main: true }, { név: "ergometrin", main: false }] }
        ],
        "Monoterpenoid indolvázas alkaloidok": [
            { d: "Rauwolfiae radix", h: [{ név: "rezerpin", main: true }, { név: "ajmalin", main: false }] },
            { d: "Vincae minoris herba", h: [{ név: "vinkamin", main: true }] },
            { d: "Uncaria-drogok", h: [{ név: "mitrafillin", main: true }, { név: "izomitrafillin", main: false }] },
            { d: "Catharanthi rosei herba", h: [{ név: "vinblasztin", main: true }, { név: "vinkrisztin", main: false }] },
            { d: "Strychni semen", h: [{ név: "sztrichnin", main: true }, { név: "brucin", main: false }] },
            { d: "Loganiaceae-Curare", h: [{ név: "tubokurarin", main: true }] }
        ],
        "Monoterpenoid kinolinvázas alkaloidok": [
            { d: "Cinchonae cortex", h: [{ név: "kinin", main: true }, { név: "kinidin", main: false }, { név: "cinkonin", main: false }] }
        ]
    },

    "Aminosavak, lektinek és enzimek": {
        "Alkamidok": [
            { d: "Echinacea-drogok", h: [{ név: "alkamidok", main: true }, { név: "cikóriasav", main: false }] }],
	    
	    "Lektinek": [
            { d: "Visci albae herba", h: [{ név: "viszkotoxin", main: true }, { név: "lektinek", main: false }] }
        ],
        "Növényi enzimek": [
            { d: "Carica papaya", h: [{ név: "papain", main: true }] },
            { d: "Ananas comosus", h: [{ név: "bromelain", main: true }] }
        ]
    },
    "Ornitin eredetű alkaloidok": {
        "Tropánvázas alkaloidok": [
            { d: "Belladonnae folium", h: [{ név: "L-hioszciamin", main: true }, { név: "atropin", main: false }] },
            { d: "Stramonii folium", h: [{ név: "szkopolamin", main: true }, { név: "hioszciamin", main: false }] },
            { d: "Hyoscyami folium", h: [{ név: "hioszciamin", main: true }, { név: "szkopolamin", main: false }] },
            { d: "Cocae folium", h: [{ név: "kokain", main: true }, { név: "kuszkhigrin", main: false }] }
        ],
        "Pirrolizidinvázas alkaloidok": [
            { d: "Symphyti radix", h: [{ név: "allantoin", main: true }, { név: "szimfitin", main: false }] },
            { d: "Farfarae folium", h: [{ név: "szenecionin", main: true }, { név: "tusszilagin", main: false }] },
	    { d: "Boraginis herba", h: [{ név:"likopszamin", main:true}]}
         ],        
	"Pirrolidinvázas alkaloidok": [
	    { d: "Nicotianae folium", h: [{ név: "nikotin", main: true }, { név: "anabazin", main: false }] }]
    },
   
    "Lizin eredetű alkaloidok": {
        "Piperidinvázas alkaloidok": [ {d:"Lobeliae herba", h:[{"lobelin", main:true}]}]
    },
    "Fenilalanin eredetű alkaloidok": {
        "Aporfinvázas alkaloidok": [
            { d: "Boldi folium", h: [{ név: "boldin", main: true }, { név: "illóolaj", main: false }] }
        ],
        "Morfinánvázas alkaloidok": [
            { d: "Papaveris maturi fructus", h: [{ név: "morfin", main: true }, { név: "narkotin", main: false }] },
            { d: "Opium crudum", h: [{ név: "morfin", main: true }, { név: "kodein", main: false }, { név: "tebain", main: false }] }
        ]
    },
    "Hisztidin eredetű alkaloidok": {
        "Imidazolvázas alkaloidok": [
            { d: "Jaborandi folium", h: [{ név: "pilokarpin", main: true }, { név: "izopilokarpin", main: false }] }
        ]
    },
    "Izokinolinvázas alkaloidok": {
        "Protoberberin": [
            { d: "Chelidonii herba", h: [{ név: "keleritrin", main: true }, { név: "berberin", main: false }, { név: "kelidonin", main: false }] },
            { d: "Fumariae herba", h: [{ név: "fumarin", main: true }, { név: "fumarinsav", main: false }] },
            { d: "Hydrastis rhizoma", h: [{ név: "hidrasztin", main: true }, { név: "berberin", main: false }] }
        ],
        "Biszbenzil-izokinolin-vázas alkaloidok": [
            { d: "Menispermeaceae-Curare", h: [{ név: "tubokurarin", main: true }] }
        ],
        "Monoterpenoid izokinolin-vázas alkaloidok": [
            { d: "Ipecacuanhae radix", h: [{ név: "emetin", main: true }, { név: "cefaelin", main: false }] }
        ]
    },
    "Fenilalanin eredetű protoalkaloidok": {
        "Tropolonvázas alkaloidok": [
            { d: "Colchici semen", h: [{ név: "kolchicin", main: true }, { név: "demekolcin", main: false }] }
        ]
    },
    "Pszeudoalkaloidok": {
        "β-Amino-fenil-propánvázas alkaloidok": [
            { d: "Ephedrae herba", h: [{ név: "efedrin", main: true }, { név: "pszeudoefedrin", main: false }] },
            { d: "Cathae edulis folium", h: [{ név: "katinon", main: true }, { név: "katin", main: false }] }
        ],
        "Benzil-aminvázas proto-pszeudo alkaloidok": [
            { d: "Capsici fructus", h: [{ név: "kapszaicin", main: true }, { név: "dihidrokapszaicin", main: false }] }
        ],
        "Amaryllidaceae-alkaloidok": [
            { d: "Galanthi bulbus", h: [{ név: "galantamin", main: true }] }
        ]
    },
    "Nukleotid eredetű pszeudoalkaloidok": {
        "Piperidinvázas alkaloidok": [
            { d: "Conii fructus", h: [{ név: "koniin", main: true }] }
        ],
        "Purinvázas alkaloidok": [
            { d: "Camelliae sinensis non fermentata folia", h: [{ név: "koffein", main: true }, { név: "teogallin", main: false }] },
            { d: "Mate folium", h: [{ név: "koffein", main: true }, { név: "klorogénsav", main: false }] },
            { d: "Cacao semen", h: [{ név: "teobromin", main: true }, { név: "koffein", main: false }] },
            { d: "Coffeae semen", h: [{ név: "koffein", main: true }, { név: "klorogénsav", main: false }] },
            { d: "Colae semen", h: [{ név: "koffein", main: true }] },
            { d: "Guaranae semen", h: [{ név: "koffein", main: true }, { név: "tannin", main: false }] }
        ]
    },

    "Terpén eredetű pszeudoalkaloidok és Glikozidok": {
        "Diterpén alkaloidok": [
            { d: "Aconiti tuber", h: [{ név: "akonitin", main: true }, { név: "napellin", main: false }] },
            { d: "Taxi cortex", h: [{ név: "taxol", main: true }, { név: "baccatin III", main: false }] }
        ],
        "Szteroid alkaloidok": [
            { d: "Dulcamarae stipes", h: [{ név: "szoladulcin", main: true }, { név: "szolanin", main: false }] },
            { d: "Solani nigri herba", h: [{ név: "szolanin", main: true }, { név: "szolamargin", main: false }] },
            { d: "Veratri rhizoma et radix", h: [{ név: "veratrin", main: true }, { név: "jervin", main: false }] }
        ],
        "Cianogén glikozidok": [
            { d: "Amygdalae semen", h: [{ név: "amygdalin", main: true }, { név: "emulzin", main: false }] },
            { d: "Pruni armeniacae semen", h: [{ név: "amygdalin", main: true }] }
        ],
        "Mustárolaj-glikozidok": [
            { d: "Sinapis nigrae semen", h: [{ név: "szinigrin", main: true }, { név: "mirozin", main: false }] },
            { d: "Sinapis albae semen", h: [{ név: "szinalbin", main: true }] }
        ],
        "Egyéb kéntartalmú vegyületek": [
            { d: "Allii sativi bulbus", h: [{ név: "alliin", main: true }, { név: "allicin", main: false }] },
            { d: "Allii cepae bulbus", h: [{ név: "cikloalliin", main: true }, { név: "kvercetin", main: false }] }
        ]

   
    }
};

let currentTitle = "";

function initGame() {
    const titles = Object.keys(botanicalData);
    if (titles.length === 0) return;

    let newTitle;
    do {
        newTitle = titles[Math.floor(Math.random() * titles.length)];
    } while (newTitle === currentTitle && titles.length > 1);
    
    currentTitle = newTitle;
    document.getElementById('tetel-cim').innerText = currentTitle;
    
    const area = document.getElementById('game-area');
    area.innerHTML = "";
    
    // Üzenet elrejtése
    const msgBox = document.getElementById('status-msg');
    msgBox.style.display = "none";

    const categories = botanicalData[currentTitle];
    
    for (let catName in categories) {
        const section = document.createElement('div');
        section.className = 'category-block';
        section.innerHTML = `<span class="category-title">${catName}:</span>`;
        
        const grid = document.createElement('div');
        grid.className = 'input-grid';

        categories[catName].forEach((item) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'pair-wrapper';
            
            const dInput = document.createElement('input');
            dInput.className = "d-input";
            dInput.placeholder = "Drog latin neve";
            dInput.dataset.answer = item.d;
            wrapper.appendChild(dInput);

            item.h.forEach(hato => {
                const hInput = document.createElement('input');
                hInput.className = hato.main ? "h-input main-active" : "h-input";
                hInput.placeholder = hato.main ? "Fő hatóanyag" : "Mellék";
                hInput.dataset.answer = hato.név;
                wrapper.appendChild(hInput);
            });

            grid.appendChild(wrapper);
        });
        section.appendChild(grid);
        area.appendChild(section);
    }
}

function checkAnswers() {
    const inputs = document.querySelectorAll('#game-area input');
    let totalCorrect = true;

    inputs.forEach(input => {
        const userVal = input.value.toLowerCase().trim();
        const correctVal = input.dataset.answer.toLowerCase().trim();

        if (userVal === correctVal && userVal !== "") {
            input.classList.remove('wrong-style');
            input.classList.add('correct-style');
        } else {
            input.classList.remove('correct-style');
            input.classList.add('wrong-style');
            totalCorrect = false;
        }
    });

    const msg = document.getElementById('status-msg');
    msg.style.display = "block";
    
    if (totalCorrect) {
        msg.innerHTML = "<b style='color:#27ae60'>Tökéletes! Minden válasz helyes.</b>";
    } else {
        let solutionText = "<b>Helyes válaszok:</b><br>";
        const categories = botanicalData[currentTitle];
        for (let cat in categories) {
            solutionText += `<br><u>${cat}</u>:<br>`;
            categories[cat].forEach(item => {
                const hatoNevek = item.h.map(h => h.main ? `<b>${h.név}</b>` : h.név).join(", ");
                solutionText += `• ${item.d}: ${hatoNevek}<br>`;
            });
        }
        msg.innerHTML = `<span style='color:#e74c3c'>Hiba van a válaszok között!</span><br>${solutionText}`;
    }
}

// Inicializálás
window.onload = initGame;
