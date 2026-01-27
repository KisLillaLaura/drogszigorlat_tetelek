const botanicalData = {
    "Savanyagcsere, savdrogok": {
        "Szerves savak": ["Pulpa tamarindorum", "Rosae pseudo-fructus", "Hippophaeae fructus", "Malpighiae fructus", "Hibisci sabdariffae flos"],
        "Szervetlen savak": ["Urticae folium", "Equiseti herba"]
    },
    "Zsíros olajok": {
        "Telített zsírsavakban gazdag olajok": ["Theobromatis oleum", "Gossypii oleum"],
        "Olajsavban gazdag olajok": ["Olivae oleum", "Amygdalae oleum", "Rapae oleum", "Sesami oleum"],
        "Linolsavban gazdag olajok": ["Helianthi annui oleum", "Carthami oleum", "Soiae oleum", "Cucurbitae oleum"],
        "α-Linolénsavban gazdag olajok": ["Lini oleum"],
        "γ-Linolénsavban gazdag olajok": ["Boraginis oleum", "Oenotherae oleum"],
        "Különleges zsírsavakat tartalmazó olajok": ["Ricini oleum"]
    },
    "Homo- és heteropoliszacharidok és drogjaik": {
      "homopoliszachardiok":{
        "Glükánok (keményítők, cellulóz)", 
        "Fruktánok": ["Taraxaci officinalis radix", "Cichorii intybi radix", "Graminis rhizoma", "Arctii radix"]
      },
      "növényi heteropoliszacharidok": { 
        "Pektinek": [], 
        "mézgák": ["Acaciae gummi", "Tragacantha"],
          },
      "Gomba poliszacharidok" :[],
      "Alga poliszacharidok": ["alginátok", "agar", "fukoidán", "karragén"]
    },
    "Nyálka poliszacharidok, növényi rostok": {
      "nyálka poliszacharidok": ["Lichen islandicus", "Althaeae radix", "Althaeae folium", "Malvae folium", "Malvae sylvestris flos"],
      "élelmi rostok": ["Lini semen", "Trigonellae foenugraeci semen", "Psyllii semen", "Plantaginis ovatae semen", "Salviae hispanicae semen","Cyamopsidis seminis pulvis"]
    },
    "Degradált fahéjsavszármazékok és drogjaik":{
      "Fenolglikozidok": ["Uvae ursi folium"],
      "Szalicilglikozidok": ["Salicis cortex", "Filipendulae ulmariae herba"],
      "Benzoesav- és fahéjsavészterek": ["Benzoe-drogok", "Balsamum peruvianum"],
      "Kávésavszármazékok és drogjaik": ["Cynarae folium", "Taraxaci officinalis herba cum radice", "Melissae folium", "Rosmarini folium", "Rhodiolae roseae rhizoma et radix", "Echinacea-drogok"]
    },
    "Lignánok": {
      "lignánok":["Eleutherococci radix", "Podophylli peltati rhizoma", "Schisandrae chinensis fructus", "Arctii radix"]
    },
    "Cinnamoil-ketidek":{
      "Stirilpironok": ["Piperis methystici rhizoma"],
      "Diarilheptanoidok": ["Curcumae longae rhizoma", "Curcumae xanthorrhizae rhizoma"],
      "Arilalkanonok": ["Zingiberis rhizoma"],
      "Stilbenoidok": ["Vitis viniferae semen", "Vitis viniferae rubrae folium"]
    },
    "Kumarinok": {
      "Kumarinok": ["Meliloti herba", "Hippocastani semen", "Herniariae herba", "Pelargonii radix", "Fraxini folium"],
      "Furanokumarinok, piranokumarinok": ["Heracleum-fajok", "Rutae herba", "Aurantii amari epicarpium et mesocarpium", "Angelicae radix", "Ammi fructus", "Ammi visnagae fructus"]
    },
    "Flavonoidok": {
      "Flavon- és flavonol-O-glikozidok": ["Fagopyri herba", "Sophorae japonicae flos", "Ginkgonis folium", "Betulae folium", "Solidaginis herba", "Tiliae flos", "Verbasci flos", "Sambuci flos"],
      "Flavon-C-glikozidok": ["Crataegi folium cum flore","Passiflorae herba", "Violae herba cum flore"], 
      "flavánonok": ["Aurantii amari epicarpium et mesocarpium", "Lupuli flos"]
    },
    "különleges szerkezetű flavonoidok": {
      "Izoflavonoidok": ["Ononidis radix", "Liquiritiae radix", "Glycini semen"],
      "Kalkonok": ["Carthami flos", "Lupuli flos", "Aspalathi linearis herba"],
      "Antocianinok": ["Myrtilli fructus recens", "Vitis viniferae fructus", "Hibisci sabdariffae flos"],
      "Flavanolignánok": ["Silybi mariani fructus"]
    },
    "cserzőanyagok": {
      "Hidrolizálható cserzőanyagok": ["Quercus cortex", "Cotini folium", "Alchemillae herba", "Epilobii herba", "Hamamelidis cortex", "Rubi idaei folium"],
      "Proantocianidinek": ["Crataegi folium cum flore", "Crataegi fructus", "Vaccinii macrocarpi fructus", "Agrimoniae herba", "Tormentillae rhizoma", "Ratanhiae radix", "Hamamelidis folium", "Myrtilli fructus siccus", "Camelliae sinensis non fermentata folia"]
    },
    "Kinonok": {
      "Naftokininok": ["Juglandis folium", "Lawsoniae herba"],
      "Naftodiantronok":  ["Hyperici herba"]
    },
    "Terpenoidok":{
        "Floroglucinszármazékok": ["Lupuli flos"],
        "Kannabinoidok": ["Cannabis herba"]
    },
    "Antraglikozidok": {
      "antraglikoziodokat tartalmazó drogok": ["Sennae foliolum", "Sennae fructus", "Frangulae cortex", "Rhei radix", "Aloe-drogok", "Rhamni purshianae cortex"]
    },
    "mérges gombák": {
      "Alacsonyabb rendű gombák": ["aflatoxinok", "fuzáriumtoxinok"],
      "Kalapos gombák": ["gyilkos galóca", "párducgalóca", "ráncos tintagomba", "pszilocibin"]
    },
    "gyógygombák": {
      "ehető gombák": ["lepketapló", "shiitake", "pecsétviaszgomba", "Poria cocos", "süngomba", "vörös rovarrontó gomba"]
    },
    "Monoterpén illóolaok":{
      "Aciklusos monoterpének": ["Lavandulae flos", "Coriandri fructus", "Melissae folium", "Aurantii amari flos", "Aurantii amari epicarpium et mesocarpium", "Rosae flos"],
      "Monociklusos monoterpének": ["Menthae crispae folium", "Menthae piperitae folium", "Carvi fructus", "Eucalypti folium", "Melaleucae folium"]
    },
    "Biciklusos és aromás monoterpének":{
      "Biciklusos monoterpének": ["Rosmarini folium", "Juniperi galbulus", "Salviae officinalis folium"],
      "Aromás monoterpének": ["Thymi herba"]
    },
    "Fenil-propán származékokat tartalmazó drogok, balzsamok és gyanták drogjai":{
      "Fenilpropán-származékok":  ["Caryophylli flos", "Anisi fructus", "Foeniculum-drogok", "Cinnamomi cortex", "Myristicae semen", "Levistici radix"],
      "Balzsamok, gyanták": ["Terebinthina-drogok", "Balsamum peruvianum", "Benzoe-drogok", "Myrrha"]
    },
    "Illó szeszkviterpének és szeszkviterpén-laktonok drogjai": {
      "Illó szeszkviterpének": ["Matricariae flos", "Chamomillae romanae flos", "Millefolii herba", "Absinthii herba", "Zingiberis rhizoma", "Curcuma-drogok"],
      "Szeszkviterpén-laktonok": ["Cardui benedicti herba", "Taraxaci officinalis radix", "Cynarae folium, Arnicae flos"]
    },
    "keserűanyagok":{
      "Szeszkviterpén-laktonok": ["Cardui benedicti herba", "Taraxaci officinalis radix", "Cynarae folium, Arnicae flos"],
      "Diterpének": ["Marrubii herba", "Ginkgonis folium", "Stevia rotundifolia"],
      "Triterpén-származékok":{
          "Lanoszterolból levezetett keserűanyagok: ["Colocynthidis fructus"],
          "Szekotriterpén keserűanyagok": ["Quassiae lignum"]
      },
      "Iridoidok és szekoiridoidok": ["Gentianae radix", "Menyanthidis trifoliatae folium", "Centaurii herba", "Harpagophyti radix", "Plantaginis lanceolatae folium", "Agni casti fructus", "Oleae folium"]
    },
    "Valepotriátok, iridoidok, szekoiridoidok és drogjaik. Diterpének és drogjaik":
      "Valepotriát iridoidészterek": ["Valerianae radix"],
      "Diterpének": ["Marrubii herba", "Ginkgonis folium", "Stevia rotundifolia"],
      "Iridoidok és szekoiridoidok": ["Gentianae radix", "Menyanthidis trifoliatae folium", "Centaurii herba", "Harpagophyti radix", "Plantaginis lanceolatae folium", "Agni casti fructus", "Oleae folium"]
    },
  "Triterpén szteroid szaponinok":{
    "Szteroid szaponinok":  ["Rusci rhizoma", "Sarsaparillae radix"]
  },
  "Triterpén szaponinok":{
    "Triterpén szaponinok": ["Hederae folium", "Liquiritiae radix", "Primulae radix", "Saponariae albae radix", "Hippocastani semen", "Centellae asiaticae herba", "Quillajae cortex"]
  },
  "Adaptogén hatású növényi drogok. Triterpénsavak és -alkoholok, tetraterpének, politerpének és drogjaik.":{
    "Triterpénsavak és triterpénalkoholok": ["Olibanum indicum", "Calendulae flos", "Taraxaci officinalis herba cum radice"],
    "Adaptogén hatású drogok":  ["Ginseng radix", "Poria", "Eleutherococci radix"],
    "Tetraterpének": ["Croci stigma", "Lycii fructus"],
    "Politerpének":  ["Resina elastica"]
  },
  "szívglikozidok":{
    "szívglikozidok": ["Digitalis purpureae folium", "Digitalis lanatae folium", "Convallariae folium", "Strophanthi semen", "Scillae bulbus"]
  },
  "Fitoszterolok és ekdiszteroidok drogjaik":{
    "Fitoszterolok": ["Pruni africanae cortex", "Sabalis serrulatae fructus", "Cucurbitae semen", "Urticae radix", "Epilobii herba", "Cimicifugae rhizoma"],
    "Ekdiszteroidok": ["Leuzeae radix"]
  },
  "Aminosavak, peptidek, biogén aminok, alkamidok, lektinek, növényi enzimek":{
    "Alkamidok": ["Echinacea-drogok"]
    "Lektinek": [" Visci albae herba"]
    "Növényi enzimek": ["Carica papaya", "Ananas comosus", "Ficus spp."]
  },
  "Ornitin eredetű alkaloidok":{
    "Tropánvázas alkaloidok": ["Belladonnae folium", "Stramonii folium", "Cocae folium"],
    "Pirrolizidinvázas alkaloidok": ["Nicotianae folium", "Boraginis herba", "Symphyti radix, Farfarae folium"],
    "Pirrolidinvázas alkaloidok": ["Nicotianae folium"]
  },
  "Lizin eredetű alkaloidok":
      "Piperidinvázas alkaloidok": ["Lobeliae herba"]
  },
  "Triptofán eredetű alkaloidok":{
    "Egyszerű indolvázas alkaloidok": ["Physostigmae semen"],
    "Hemiterpenoid indolvázas alkaloidok": ["Secale cornutum"],
    "Monoterpenoid indolvázas alkaloidok": ["Rauwolfiae radix", "Vincae minoris herba", "Uncaria-drogok", "Catharanthi rosei herba", "Strychni semen", "Loganiaceae-Curare"],
    "Monoterpenoid kinolinvázas alkaloidok": ["Cinchonae cortex"]
  },
"Fenilalanin eredetű alkaloidok":{
  "Aporfinvázas alkaloidok": ["Boldi folium"],
  "Morfinánvázas alkaloidok": ["Papaveris maturi fructus", "Opium crudum"]
},
"Hisztidin eredetű alkaloidok":{
  "Imidazolvázas alkaloidok": ["Jaborandi folium"]
},
"Protoberberin-, benzofenantridin-, ftalidizokinolin-vázas alkaloidok Biszbenzil-izokinolin-vázas Monoterpenoid izokinolin-vázas  és Amaryllidaceae-alkaloidok:{
  "Protoberberin":["Chelidonii herba", "Fumariae herba", "Hydrastis rhizoma"],
  "Biszbenzil-izokinolin-vázas alkaloidok": ["Menispermeaceae-Curare"],
  "Monoterpenoid izokinolin-vázas alkaloidok": ["Ipecacuanhae radix"]
},
"Fenilalanin eredetű protoalkaloidok"{
  "Tropolonvázas alkaloidok": ["Colchici semen"]
},
"Pszeudoalkaloidok":{
  "β-Amino-fenil-propánvázas alkaloidok": ["Ephedrae herba", "Cathae edulis folium"]
  "Benzil-aminvázas  proto-pszeudo alkaloidok": ["Capsici fructus"]
  "Amaryllidaceae-alkaloidok":  ["Galanthi bulbus"]
},
"Nukleotid és egyéb eredetű pszeudoalkaloidok":{
  "Piperidinvázas alkaloidok": ["Conii fructus"],
  "Purinvázas alkaloidok": ["Camelliae sinensis non fermentata folia", "Mate folium", "Cacao semen", "Coffeae semen", "Colae semen", "Guaranae semen"]
},
"Terpén eredetű pszeudoalkaloidok. Cianogén és mustárolaj-glikozidok":{
  "Diterpén alkaloidok": ["Aconiti tuber", "Taxi cortex"],
  "Szteroid alkaloidok": ["Dulcamarae stipes", "Solani nigri herba", "Veratri rhizoma et radix"],
  "Cianogén glikozidok":  ["Amygdalae semen", "Pruni armeniacae semen"],
  "mustárolaj-glikozidok": ["Sinapis nigrae semen", "Sinapis albae semen"]
  "Egyéb kéntartalmú vegyületeket tartalmazó drogok": ["Allii sativi bulbus", "Allii cepae bulbus"]


    
      
};

let currentTitle = "";

function initGame() {
    const titles = Object.keys(botanicalData);
    const lastTitle = currentTitle;
    
    // Ne sorsolja ugyanazt kétszer egymás után, ha több tétel is van
    do {
        currentTitle = titles[Math.floor(Math.random() * titles.length)];
    } while (currentTitle === lastTitle && titles.length > 1);
    
    document.getElementById('tetel-cim').innerText = currentTitle;
    const area = document.getElementById('game-area');
    const msg = document.getElementById('status-msg');
    
    area.innerHTML = "";
    msg.style.display = "none";

    const categories = botanicalData[currentTitle];
    
    for (let catName in categories) {
        const section = document.createElement('div');
        section.className = 'category-block';
        
        const label = document.createElement('span');
        label.className = 'category-title';
        label.innerText = catName + " (" + categories[catName].length + " db):";
        
        const grid = document.createElement('div');
        grid.className = 'input-grid';
        grid.dataset.category = catName;

        // Dinamikusan annyi input, ahány válasz van
        categories[catName].forEach(() => {
            const input = document.createElement('input');
            input.type = "text";
            input.placeholder = "...";
            grid.appendChild(input);
        });

        section.appendChild(label);
        section.appendChild(grid);
        area.appendChild(section);
    }
}

function checkAnswers() {
    const categories = botanicalData[currentTitle];
    const grids = document.querySelectorAll('.input-grid');
    let totalCorrect = true;

    grids.forEach(grid => {
        const catName = grid.dataset.category;
        const expectedAnswers = categories[catName].map(s => s.toLowerCase().trim());
        const inputs = Array.from(grid.querySelectorAll('input'));
        
        const userValues = inputs.map(i => i.value.toLowerCase().trim()).filter(v => v !== "");
        
        // Ellenőrizzük minden egyes inputot a kategórián belül
        inputs.forEach(input => {
            const val = input.value.toLowerCase().trim();
            if (val === "") {
                input.className = "";
                totalCorrect = false;
            } else if (expectedAnswers.includes(val)) {
                input.className = "correct-style";
            } else {
                input.className = "wrong-style";
                totalCorrect = false;
            }
        });

        // Plusz ellenőrzés: minden válasz megvan-e és nincs-e duplikáció
        const uniqueMatches = new Set(userValues.filter(v => expectedAnswers.includes(v)));
        if (uniqueMatches.size !== expectedAnswers.length) {
            totalCorrect = false;
        }
    });

    const msg = document.getElementById('status-msg');
    msg.style.display = "block";
    if (totalCorrect) {
        msg.innerText = "Tökéletes! Minden drog a helyén van.";
        msg.style.backgroundColor = "#d4edda";
        msg.style.color = "#155724";
    } else {
        msg.innerText = "Valami nem stimmel. Ellenőrizd a piros mezőket vagy a hiányzó drogokat!";
        msg.style.backgroundColor = "#f8d7da";
        msg.style.color = "#721c24";
    }
}

initGame();
