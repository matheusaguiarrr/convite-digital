"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  Data: () => Data,
  Id: () => Id,
  Senha: () => Senha,
  eventos: () => eventos_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/eventos.ts
var eventos = [
  {
    id: "mojr8ci6tna-z121js8eulc-sncm9ps9lt",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "3pleg7i56qy-kadi671sy7b-ha4fd2bpabo",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "uoy7dyvl1t-imq8hdm7fxc-9qm4xb4pd2",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "5mtp7plvy04-jab3wx22r8-2jxeba0aaho",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: "vv0gynfgx7k-5avb4y7cf58-qyk26o4tpi",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "9gn1a91dku8-4qsp95rsxk4-gs0g4aczozt",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "23oc2esgrpaj-3a81uiecf1p-lt9dxubcbsi",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: "neqktzlwknl-0xx4io91qjj-7rtxk0hz7hr",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "0y9sm2dgmgd-at3at41ccwp-1zp6jtam2tq",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "hl9r1ivait-28vi7bczybo-lylktt9gxgj",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "5sr1364sm12-8u9c9hqo38r-metsgwiexp",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "k5yixosfn2a-q3zzdmfrwe-bhwxwtszhio",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "2vj97893xjc-lv149l0d6um-y87x9nq81vl",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "kk4hu7fogxi-wf8cwde6k2d-qk87av7fwtg",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "iy0mdgcctaa-lgipq8ysjzl-wufgl15roxn",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "iezzqntsj9k-7bx8mzlym0k-jv1y9fd7xi",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 2
      },
      {
        id: "x510yxliqx-dv84xpnmk7-y7gw63d4wd",
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "sr3pi5ppflt-19iw76v0612-jx9tpr3m7lg",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "2crfzdmhabn-46miu9fi376-id3vveymp6",
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 3
      },
      {
        id: "f9r1nbq0w9-4w8559vdln-cidq5i2xy8b",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "pq9v49xizo-occsz12gxwl-jr7fwqo6mnh",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "drj1nk2k3p-i9h96dgkocj-ztqjo4b3cgb",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhante: true,
        qtdeAcompanhantes: 4
      },
      {
        id: "nj107w3ut6d-qfnwukvkn9-h89gqhiti0v",
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var eventos_default = eventos;

// src/shared/Id.ts
var Id = class {
  static novo() {
    return `${this.hash()}-${this.hash()}-${this.hash()}`;
  }
  static hash() {
    return Math.random().toString(36).substring(2, 15);
  }
};

// src/shared/Alias.ts
var Alias = class {
  static formatar(valor) {
    return valor.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Senha.ts
var Senha = class {
  static nova(tamanho = 8) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especias = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, especias];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }
    return senha.join("");
  }
};

// src/shared/Data.ts
var Data = class {
  static formatar(data) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = data ?? /* @__PURE__ */ new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDay());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }
  static desformatar(data) {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":");
    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  Data,
  Id,
  Senha,
  eventos
});
