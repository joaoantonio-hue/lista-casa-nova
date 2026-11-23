// Lista de presentes. Para mudar um item, edite aqui.
// tipo "inteiro": a pessoa dá o presente todo (mostra a faixa de preço "de" e "ate").
// tipo "cota": presente coletivo, cada um ajuda com um valor ("meta" é o total).
export type Item = {
  id: string; nome: string; comodo: string; marcas: string; tipo: "inteiro" | "cota";
  busca: string; de?: number; ate?: number; meta?: number; nota?: string; link?: string; foto?: string;
};

export const itens: Item[] = [
  {
    "id": "geladeira",
    "nome": "Geladeira",
    "comodo": "Cozinha",
    "marcas": "HQ Frost Free Multidoor 426 L, prata (HQ-426MDFF)",
    "tipo": "cota",
    "busca": "Geladeira HQ Multidoor 426 litros HQ-426MDFF",
    "meta": 2900,
    "link": "https://www.amazon.com.br/dp/B0DTZQP72X"
  },
  {
    "id": "microondas",
    "nome": "Micro-ondas",
    "comodo": "Cozinha",
    "marcas": "Electrolux 34 L (MEO44) ou similar",
    "tipo": "inteiro",
    "busca": "micro-ondas Electrolux 34 litros MEO44",
    "de": 640,
    "ate": 860,
    "foto": "/fotos/microondas.jpg"
  },
  {
    "id": "airfryer",
    "nome": "Air fryer forno",
    "comodo": "Cozinha",
    "marcas": "Britânia, Philco ou Mondial, de 12 L ou mais",
    "tipo": "inteiro",
    "busca": "air fryer oven 16 litros",
    "de": 340,
    "ate": 460,
    "nota": "Na foto, a Britânia BAF16A de 16 L.",
    "foto": "/fotos/airfryer.jpg"
  },
  {
    "id": "forno",
    "nome": "Forno elétrico",
    "comodo": "Cozinha",
    "marcas": "Britânia 43 L, dupla resistência (BFE43) ou similar",
    "tipo": "inteiro",
    "busca": "forno elétrico Britânia 43 litros BFE43",
    "de": 300,
    "ate": 400,
    "foto": "/fotos/forno.jpg"
  },
  {
    "id": "panificadora",
    "nome": "Panificadora",
    "comodo": "Cozinha",
    "marcas": "Mondial ou Britânia",
    "tipo": "inteiro",
    "busca": "panificadora Mondial Britânia",
    "de": 380,
    "ate": 520,
    "nota": "Na foto, a Britânia Multipane.",
    "foto": "/fotos/panificadora.jpg"
  },
  {
    "id": "pressao",
    "nome": "Panela de pressão elétrica",
    "comodo": "Cozinha",
    "marcas": "Electrolux PCC20",
    "tipo": "inteiro",
    "busca": "panela de pressão elétrica Electrolux PCC20",
    "de": 440,
    "ate": 600
  },
  {
    "id": "chaleira",
    "nome": "Chaleira elétrica",
    "comodo": "Cozinha",
    "marcas": "Cadence Supreme Control CEL505",
    "tipo": "inteiro",
    "busca": "chaleira elétrica Cadence CEL505",
    "de": 170,
    "ate": 220,
    "foto": "/fotos/chaleira.jpg"
  },
  {
    "id": "liquidificador",
    "nome": "Liquidificador",
    "comodo": "Cozinha",
    "marcas": "Qualquer marca, de boa potência",
    "tipo": "inteiro",
    "busca": "liquidificador 1400W 127V",
    "de": 110,
    "ate": 150,
    "nota": "Na foto, o Oster 1400 Full, como referência.",
    "foto": "/fotos/liquidificador.jpg"
  },
  {
    "id": "mixer",
    "nome": "Mixer 3 em 1",
    "comodo": "Cozinha",
    "marcas": "Elgin Power Inox Lunar 3 em 1, 600 W",
    "tipo": "inteiro",
    "busca": "Mixer Elgin Lunar 3 em 1 600W 110V",
    "de": 90,
    "ate": 120,
    "link": "https://www.amazon.com.br/dp/B0DCKBMVH9",
    "foto": "/fotos/mixer.jpg"
  },
  {
    "id": "sanduicheira",
    "nome": "Sanduicheira",
    "comodo": "Cozinha",
    "marcas": "Britânia BGR27I Press",
    "tipo": "inteiro",
    "busca": "sanduicheira Britânia BGR27I",
    "de": 90,
    "ate": 130,
    "foto": "/fotos/sanduicheira.jpg"
  },
  {
    "id": "panelas",
    "nome": "Jogo de panelas para indução",
    "comodo": "Cozinha",
    "marcas": "Black+Decker Ceramic Line 9 peças",
    "tipo": "inteiro",
    "busca": "Jogo de Panelas Black Decker Ceramic Line 9 peças",
    "de": 270,
    "ate": 370,
    "link": "https://www.amazon.com.br/dp/B0H2TBW54Y"
  },
  {
    "id": "facas",
    "nome": "Jogo de facas",
    "comodo": "Cozinha",
    "marcas": "Tramontina Plenus 10 peças, preto",
    "tipo": "inteiro",
    "busca": "Jogo de Facas Tramontina Plenus 10 peças",
    "de": 70,
    "ate": 100,
    "link": "https://www.amazon.com.br/dp/B09SBNMDWQ",
    "foto": "/fotos/facas.jpg"
  },
  {
    "id": "silicone",
    "nome": "Utensílios de silicone",
    "comodo": "Cozinha",
    "marcas": "Tramontina Softta 5 peças, cinza",
    "tipo": "inteiro",
    "busca": "Jogo de Utensílios Tramontina Softta Silicone 5 peças",
    "de": 70,
    "ate": 90,
    "link": "https://www.amazon.com.br/dp/B0GN534SJ5",
    "foto": "/fotos/silicone.jpg"
  },
  {
    "id": "potes",
    "nome": "Potes herméticos",
    "comodo": "Cozinha",
    "marcas": "Electrolux, kit com 12 unidades",
    "tipo": "inteiro",
    "busca": "Pote Hermético Electrolux 12 unidades",
    "de": 60,
    "ate": 80
  },
  {
    "id": "orgpia",
    "nome": "Organizador de pia",
    "comodo": "Cozinha",
    "marcas": "Tramontina Plurale, plástico e aço inox",
    "tipo": "inteiro",
    "busca": "Organizador de Pia Tramontina Plurale",
    "de": 80,
    "ate": 110,
    "foto": "/fotos/orgpia.jpg"
  },
  {
    "id": "portautensilios",
    "nome": "Porta-utensílios giratório",
    "comodo": "Cozinha",
    "marcas": "Tramontina Plurale inox",
    "tipo": "inteiro",
    "busca": "Porta utensílios giratório Tramontina Plurale",
    "de": 50,
    "ate": 60,
    "foto": "/fotos/portautensilios.jpg"
  },
  {
    "id": "escorredor",
    "nome": "Escorredor de louça",
    "comodo": "Cozinha",
    "marcas": "Tramontina Plurale inox com porta-talheres",
    "tipo": "inteiro",
    "busca": "Escorredor de Louça Tramontina Plurale Inox",
    "de": 140,
    "ate": 190,
    "foto": "/fotos/escorredor.jpg"
  },
  {
    "id": "lixeira",
    "nome": "Lixeira com pedal",
    "comodo": "Cozinha",
    "marcas": "Tramontina New inox com pedal, 5 L",
    "tipo": "inteiro",
    "busca": "Lixeira com Pedal Tramontina New inox 5 L",
    "de": 40,
    "ate": 60,
    "foto": "/fotos/lixeira.jpg"
  },
  {
    "id": "orggeladeira",
    "nome": "Organizadores de geladeira (2)",
    "comodo": "Cozinha",
    "marcas": "OU Clear Fresh",
    "tipo": "inteiro",
    "busca": "organizador de geladeira OU Clear Fresh",
    "de": 120,
    "ate": 160,
    "nota": "Kit com 2 unidades."
  },
  {
    "id": "peneira",
    "nome": "Peneira e ralador inox",
    "comodo": "Cozinha",
    "marcas": "",
    "tipo": "inteiro",
    "busca": "kit peneira ralador inox",
    "de": 40,
    "ate": 60
  },
  {
    "id": "portapaes",
    "nome": "Porta-pães",
    "comodo": "Cozinha",
    "marcas": "Bambu com tampa retrátil",
    "tipo": "inteiro",
    "busca": "porta pão bambu tampa retrátil",
    "de": 60,
    "ate": 90
  },
  {
    "id": "pratos",
    "nome": "Jogo de pratos (2 jogos)",
    "comodo": "Mesa",
    "marcas": "Tramontina Floralis, porcelana, 12 peças",
    "tipo": "inteiro",
    "busca": "Jogo de Pratos Tramontina Floralis 12 peças",
    "de": 380,
    "ate": 520,
    "nota": "Queremos 2 jogos iguais.",
    "link": "https://www.mercadolivre.com.br/jogo-de-pratos-tramontina-floralis-12-pecas/p/MLB37748287",
    "foto": "/fotos/pratos.jpg"
  },
  {
    "id": "talheres",
    "nome": "Jogo de talheres",
    "comodo": "Mesa",
    "marcas": "Tramontina, faqueiro inox 24 peças",
    "tipo": "inteiro",
    "busca": "faqueiro Tramontina inox 24 peças",
    "de": 60,
    "ate": 80,
    "foto": "/fotos/talheres.jpg"
  },
  {
    "id": "mesa",
    "nome": "Mesa oval de 4 lugares",
    "comodo": "Mesa",
    "marcas": "Conjunto em MDF",
    "tipo": "cota",
    "busca": "conjunto mesa oval 4 lugares",
    "meta": 900
  },
  {
    "id": "toalha",
    "nome": "Toalha de mesa",
    "comodo": "Mesa",
    "marcas": "Impermeável, para mesa de 4 lugares",
    "tipo": "inteiro",
    "busca": "toalha de mesa impermeável 4 lugares",
    "de": 40,
    "ate": 60
  },
  {
    "id": "sofa",
    "nome": "Sofá",
    "comodo": "Sala",
    "marcas": "Beny 3 lugares",
    "tipo": "cota",
    "busca": "sofá Beny 3 lugares",
    "meta": 1100
  },
  {
    "id": "tv",
    "nome": "Smart TV 55 polegadas",
    "comodo": "Sala",
    "marcas": "Hisense 4K 55A6NV",
    "tipo": "cota",
    "busca": "Smart TV Hisense 55A6NV 55 polegadas",
    "meta": 2000,
    "link": "https://www.mercadolivre.com.br/smart-tv-hisense-4k-55-polegadas-55a6nv-com-hdr10-hlg-dolby-gaming-film-maker-dts-virtual-x-compatibilidade-alexa/p/MLB65451170"
  },
  {
    "id": "painel",
    "nome": "Painel de TV",
    "comodo": "Sala",
    "marcas": "",
    "tipo": "inteiro",
    "busca": "painel para TV até 55 polegadas",
    "de": 300,
    "ate": 400
  },
  {
    "id": "cortina",
    "nome": "Cortina blackout de tecido",
    "comodo": "Quarto",
    "marcas": "Blackout de pano (não de plástico), tamanho grande",
    "tipo": "inteiro",
    "busca": "cortina blackout tecido linho 2,80 m",
    "de": 210,
    "ate": 290
  },
  {
    "id": "mesasescritorio",
    "nome": "2 mesas de escritório",
    "comodo": "Escritório",
    "marcas": "Metal e MDF",
    "tipo": "inteiro",
    "busca": "mesa escritório metal MDF 120 cm",
    "de": 310,
    "ate": 410
  },
  {
    "id": "chuveiro",
    "nome": "Chuveiro",
    "comodo": "Banheiro",
    "marcas": "Lorenzetti eletrônico ou similar",
    "tipo": "inteiro",
    "busca": "Lorenzetti Acqua Duo Ultra eletrônico",
    "de": 300,
    "ate": 400
  },
  {
    "id": "tapete",
    "nome": "Tapete de banheiro",
    "comodo": "Banheiro",
    "marcas": "Macio e antiderrapante (ex.: Camesa Super Soft)",
    "tipo": "inteiro",
    "busca": "Camesa Tapete de Banheiro Super Soft 60x40",
    "de": 50,
    "ate": 70
  },
  {
    "id": "tanquinho",
    "nome": "Tanquinho",
    "comodo": "Lavanderia",
    "marcas": "Colormaq LCS10",
    "tipo": "inteiro",
    "busca": "tanquinho Colormaq LCS10",
    "de": 480,
    "ate": 640
  }
];
