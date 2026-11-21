/* =========================================================
   ✏️  ÁREA DE EDIÇÃO — preencha seus dados aqui
   Todo o conteúdo do site vem destes dados. Não precisa mexer no HTML.
   ========================================================= */

const NOME_ALUNO = "Maria Julia Faot";

const MENSAGEM_FINAL =
  "Agradeço, primeiramente, aos meus pais, por nunca medirem esforços para me proporcionar uma boa educação e por apoiarem cada passo da minha caminhada. " +
  "Ao meu pai, por despertar em mim o amor pela leitura desde pequena, por meio dos gibis, e à minha mãe, que, além de ser minha maior incentivadora, também foi minha professora. " +
  "Aos meus professores, minha eterna gratidão por cada ensinamento, incentivo e por deixarem um pouquinho de si na pessoa que me tornei.";

/* Atalho para criar a lista de fotos de uma etapa.
   F("pasta", ["legenda da capa", "legenda 2", ...]) usa os arquivos
   assets/img/pasta-1.jpg, pasta-2.jpg, pasta-3.jpg...
   A 1ª foto é a CAPA; as outras vão para a galeria. Pode ter quantas quiser. */
const F = (pasta, legendas) =>
  legendas.map((legenda, i) => ({ src: `assets/img/${pasta}-${i + 1}.jpg`, legenda }));

/* ---------- MEMÓRIAS ESCOLARES (da pré-escola ao 3º ano) ---------- */
const ETAPAS = [
  {
    id: "pre",
    titulo: "Jardim de Infância / Pré-escola",
    periodo: "2011 – 2014",
    escola: "Escola Divina Misericórdia e Ivone Pimentel",
    fotos: F("pre-escola", ["Eu no primeiro dia de aula", "Foto com a turma", "Festa / apresentação", "Foto com a professora"]),
    resumo: "O maternal foi ainda mais especial, pois tive a minha mãe como professora, podendo viver meus primeiros anos escolares pertinho dela. " +
            "São lembranças da infância que, mesmo depois de tantos anos, continuam guardadas com muito carinho.",
    causos: [
      "Mas, quando fui para o Ivone Pimentel, começou aquela fase de choro e desapego: pela primeira vez, eu precisava passar o dia longe da minha mãe.",
      "Construí minhas primeiras amizades. Uma delas foi com o André, que fazia aniversário no mesmo dia que eu! Juntos, tivemos até uma festa surpresa com o tema Minnie e Mickey."
    ],
    curiosidades: [
      "Fiz o maternal na Escola Divina Misericórdia e o restante no Ivone Pimentel.",
      "Foi nessa época que fiz balé."
    ],
    desafios: [],
    momentos: []
  },
  {
    id: "f1",
    titulo: "Ensino Fundamental I (1º ao 5º ano)",
    periodo: "2015 – 2019",
    escola: "Escola Municipal Jornalista Cláudio Abramo",
    fotos: F("fundamental-1", ["Foto de capa dessa fase", "Foto com amigos", "Evento / passeio", "Foto da formatura do 5º ano"]),
    resumo: "O Ensino Fundamental I foi uma fase cheia de descobertas, aprendizados e histórias que ainda me fazem sorrir. " +
            "Foi uma fase em que cresci, aprendi, fiz amizades e vivi momentos que, hoje, percebo que foram muito maiores do que pareciam na época. " +
            "São lembranças que sempre terão um lugar especial na minha história.",
    causos: [
      "Não poderia faltar minha primeira encrenca com a diretoria: tudo porque o Jorge me chamou de bruxa e eu resolvi torcer a orelha dele!",
      "Foi a época das disputas por notas com o Enzo, das idas à informática para jogar Friv e das visitas semanais à biblioteca, onde sempre pegava livros emprestados e também assistia aos filmes que passavam por lá."
    ],
    curiosidades: [
      "Participei da Guarda Mirim, aprendi a pular corda e andar de perna de pau.",
      "Guardo com carinho as lembranças da Tânia e da Rosa, nossas diretoras, que eram muito queridas."
    ],
    desafios: [
      "Comecei a aprender a ler e escrever e enfrentei minhas primeiras provas.",
      "Comecei a entender melhor meus sentimentos e a aprender a lidar com eles."
    ],
    momentos: [
      "Conheci meu primeiro trio de amigas, a Mariana e a Haiane.",
      "Realizei meus primeiros passeios tão esperados."
    ]
  },
  {
    id: "f2",
    titulo: "Ensino Fundamental II (6º ao 9º ano)",
    periodo: "2020 – 2023",
    escola: "Colégio Estadual Padre Claudio Morelli",
    fotos: F("fundamental-2", ["Foto de capa dessa fase", "Foto com a turma", "Projeto / feira de ciências", "Foto da formatura do 9º ano"]),
    resumo: "O Ensino Fundamental II foi uma das fases mais desafiadoras da minha trajetória. " +
            "Olhando para trás, vejo que, mesmo com as dificuldades, essa fase me trouxe pessoas e experiências " +
            "que contribuíram muito para quem sou hoje.",
    causos: [],
    curiosidades: [],
    desafios: [
      "No início, foi difícil encontrar meu lugar, já que muitos colegas já tinham suas amizades construídas desde o Ensino Fundamental I. Era estranho tentar me encaixar em meio a relações que já existiam.",
      "Depois veio a pandemia, que transformou completamente nossa rotina, trazendo as aulas on-line e a saudade da escola e dos amigos."
    ],
    momentos: [
      "No final do 7º ano, com a volta das aulas presenciais, conheci a Maria, a Mary e a Monyk, amizades que se tornaram muito especiais.",
      "Comecei a sair pela primeira vez sem meus pais, apenas com meus colegas do colégio, vivendo novas experiências e descobrindo um pouco mais da minha independência.",
      "No 8º ano, entrei para a sala de Altas Habilidades, onde participei de novos projetos. Um deles foi o Morelli Cast, com o qual fomos classificados para a FENAHS, uma conquista muito especial.",
      "No 9º ano, entrei para a robótica e participei do meu primeiro campeonato, a FLL (FIRST LEGO League), dando início a uma trajetória cheia de desafios, aprendizados, amizades e oportunidades que marcaram minha vida."
    ]
  },
  {
    id: "em1",
    titulo: "1º ano do Ensino Médio",
    periodo: "2024",
    escola: "Colégio Estadual Padre Claudio Morelli",
    fotos: F("1-ano", ["Foto de capa do 1º ano", "Foto com a turma nova", "Evento da escola", "Momento descontraído"]),
    resumo: "O 1º ano do Ensino Médio foi, sem dúvidas, uma das fases mais especiais da minha vida escolar e o ano que guardo com mais carinho. " +
            "Foi quando conheci a maioria dos meus amigos e tive aquela que considero minha melhor turma: o 1º A.",
    causos: [
      "Foi a época dos trabalhos mais difíceis do Soppa, da criação do Bago do Agro e do nosso divertido Torta na Cara, momentos que renderam muitas risadas e lembranças."
    ],
    curiosidades: [
      "Entre eles, conheci a Fravinha, o Henrique, o Gabriel, o Saulo e o Murilo, enquanto a Maria continuava ao meu lado em mais uma etapa dessa história."
    ],
    desafios: [],
    momentos: [
      "Fui mentora da FLL Explore.",
      "Uma das maiores surpresas e realizações daquele ano foi descobrir que faria um intercâmbio na Inglaterra!"
    ]
  },
  {
    id: "em2",
    titulo: "2º ano do Ensino Médio",
    periodo: "2025",
    escola: "Colégio Estadual Padre Claudio Morelli e Highcliffe School (Inglaterra)",
    fotos: F("2-ano", ["Foto de capa do 2º ano", "Foto com os amigos", "Projeto / trabalho em grupo", "Momento descontraído"]),
    resumo: "No 2º ano, estudei até agosto no Brasil, no Morelli. Depois disso, entrei na Highcliffe School, na Inglaterra. " +
            "Foi um ano de muitas descobertas, desafios e amizades.",
    causos: [
      "Durante os meses no Brasil, houve o fortalecimento da relação entre os nuggets (Maju, Murilo, Tessari e Henrique).",
      "Fui para Brasília no Nacional da FLL, em 2025."
    ],
    curiosidades: [
      "Estudei até agosto no Brasil.",
      "Depois de agosto, entrei na Highcliffe School, na Inglaterra.",
      "Conheci a Pâmela, minha host sister."
    ],
    desafios: [
      "Na Highcliffe School, tive alguns desafios com a língua, mas aprendi muito bem.",
      "Foi um momento cheio de desafios, principalmente por estar longe dos meus pais, tendo que ser uma adulta antecipadamente."
    ],
    momentos: [
      "Fiz alguns amigos na Inglaterra: a Pâmela, minha host sister, a Trinnity e o Henry.",
      "Não me arrependo nem um pouco: foi uma das melhores sensações da minha vida, ficando atrás só do reencontro com os meus pais e as pessoas que eu mais amo."
    ]
  },
  {
    id: "em3",
    titulo: "3º ano — a reta final",
    periodo: "2026",
    escola: "Colégio Estadual Padre Claudio Morelli",
    fotos: F("3-ano", ["Foto de capa do 3º ano", "Foto com a turma", "Simulado / Enem", "Último dia de aula"]),
    resumo: "O 3º ano foi a reta final da minha vida escolar. Comecei a fase de estudos para o vestibular, fiz muitos simulados " +
            "e aproveitei muito o ano com os meus amigos.",
    causos: [
      "Criamos o truno.",
      "Realizamos a nossa última apresentação juntos."
    ],
    curiosidades: [
      "Comecei a dar aula de inglês.",
      "Aproveitei muito o 3º ano com os meus amigos."
    ],
    desafios: [
      "Comecei a fase de estudos para o vestibular e fiz muitos simulados.",
      "Comecei a estudar para tirar o TOEFL."
    ],
    momentos: [
      "Fui para as duas seasons da FRC (FIRST Robotics Competition), em São Paulo, com a robótica.",
      "Organizei o evento da FLL Explore deste ano.",
      "Organizei o primeiro evento de robótica da SEED-PR.",
      "Apresentei o Impact totalmente em inglês.",
      "Passei para o Nacional da OBR (Olimpíada Brasileira de Robótica), em João Pessoa (PB).",
      "Fiz os vestibulares e passei em Engenharia Mecatrônica na PUC-PR."
    ]
  }
];

/* ---------- ⭐ DESTAQUE DO 2º ANO: PROGRAMA DE 5 MESES ----------
   Aparece na linha do tempo logo depois do 2º ano.
   Troque nome, local e os textos de cada mês pela sua experiência real. */
const PROGRAMA = {
  id: "programa",
  titulo: "Ganhando o Mundo",
  periodo: "5 meses · 2º ano do Ensino Médio (2025 – 2026)",
  local: "Inglaterra · Christchurch e Oxford",
  resumo: "O Ganhando o Mundo foi o meu programa de intercâmbio na Inglaterra, onde fiquei em duas cidades: Christchurch e Oxford. " +
          "Consegui a vaga por conta das minhas notas durante os anos anteriores.",
  meses: [
    { titulo: "Mês 1 · A chegada",
      texto: "O primeiro mês foi uma mistura de encantamento, descobertas e adaptação. Logo de início, comecei a experimentar uma liberdade e independência que não tinha no Brasil, aprendendo a me locomover sozinha e a pegar ônibus para diferentes lugares. Também comecei a me acostumar com o jeito de ser dos britânicos, seus costumes e sua cultura. Experimentei novas comidas, provei o tradicional Roast Dinner e vivi o clássico chá da tarde britânico. Na escola, usar uniforme com saia, gravata, camisa social, jumper e sapatilhas fazia tudo parecer ainda mais especial. Era como estar dentro de um filme! Também comecei a conhecer as lojas inglesas, especialmente a Primark, que logo se tornou um dos nossos lugares favoritos." },
    { titulo: "Mês 2 · Os primeiros passos",
      texto: "O segundo mês foi quando comecei a aproveitar ainda mais a experiência e a sair com meus amigos. Juntos, conhecemos lugares como Lymington, Poole, Bournemouth, Southampton e Oxford. Foi também quando nasceram algumas das nossas tradições: eu e a Pâmela criamos o costume de tomar sorvete enquanto passeávamos pelas marinas, além das idas ao McDonald's para comer batata frita com sorvete e ao Subway para aproveitar o famoso combo de 5 libras, sempre escolhendo os melhores cookies. A Primark também estava entre nossos passeios favoritos, assim como as tradicionais lojas de discos inglesas, onde adorávamos entrar e conhecer um pouco mais da cultura musical britânica. Também ficaram marcadas as noites assistindo a filmes, as jantas que muitas vezes eram apenas macarrão e os momentos em que fazíamos as tarefas juntas." },
    { titulo: "Mês 3 · A virada",
      texto: "O terceiro mês foi quando percebi o quanto aquelas pessoas e aqueles lugares já faziam parte da minha vida. A rotina já parecia familiar, e os passeios à Primark e às lojas de discos continuavam sendo parte dos nossos programas favoritos. Comecei a entender que o intercâmbio não era feito apenas pelos grandes acontecimentos ou pelos lugares que conheci, mas principalmente pelas pequenas coisas do cotidiano, pelas amizades, pelas conversas e pelas tradições que construímos juntas." },
    { titulo: "Mês 4 · Colocando em prática",
      texto: "O quarto mês trouxe uma das experiências mais especiais de todo o intercâmbio: eu, Pâmela, Naty e Milena nos mudamos para Oxford! Foi uma mudança enorme, pois começamos a viver em uma cidade turística, cheia de história e lugares incríveis. E o melhor de tudo: nós quatro dividíamos o mesmo quarto, que carinhosamente apelidamos de \"República das Tchecas\". Entre passeios pela cidade, visitas às lojas, nossas paradas na Primark e descobertas pelas tradicionais lojas de discos, construímos lembranças inesquecíveis. Dividir o mesmo espaço, a rotina, as conversas, as risadas e até os pequenos perrengues tornou tudo ainda mais especial. Sem dúvidas, morar com elas foi uma das melhores experiências do intercâmbio." },
    { titulo: "Mês 5 · O encerramento",
      texto: "O quinto mês foi marcado por momentos que jamais vou esquecer. Nós quatro fomos juntas para Londres, onde conhecemos diversos pontos turísticos, andamos de metrô pela cidade e atravessamos a famosa Abbey Road, eternizada pelos Beatles. Também tivemos a alegria de ver neve pela primeira vez juntas! Entre os passeios, ainda encontramos tempo para visitar lojas, incluindo a nossa querida Primark, e conhecer as famosas lojas de discos inglesas. Passamos o Natal e o Ano-Novo juntas, compartilhando datas especiais longe de casa, mas cercadas por pessoas que se tornaram nossa família durante o intercâmbio. Hoje, sinto muita falta delas e de tudo o que vivemos juntas. Se pudesse, reviveria cada passeio, cada ida à Primark, cada conversa e cada momento. No fim, percebi que uma das maiores riquezas que o Ganhando o Mundo me trouxe não foram apenas os lugares que conheci, mas as pessoas que tive a sorte de encontrar pelo caminho." }
  ],
  aprendizados: [
    "Uma liberdade e independência que eu não tinha no Brasil, aprendendo a me locomover sozinha.",
    "O intercâmbio não é feito apenas pelos grandes acontecimentos ou pelos lugares que conheci, mas pelas pequenas coisas do cotidiano, pelas amizades, pelas conversas e pelas tradições que construímos juntas.",
    "Uma das maiores riquezas que o Ganhando o Mundo me trouxe foram as pessoas que tive a sorte de encontrar pelo caminho."
  ],
  fotos: F("programa", [
    "Foto de abertura do programa", "Foto com os colegas do programa", "Atividade marcante",
    "Projeto / entrega final", "Momento descontraído", "Foto do encerramento"
  ])
};

/* ---------- PORTFÓLIO: 17 REDAÇÕES ----------
   notas: [C1, C2, C3, C4, C5] — nota em cada competência do ENEM.
   Valores possíveis: 0, 40, 80, 120, 160 ou 200 (cada competência vale até 200;
   a redação inteira vale até 1000).
   ⚠️ As notas abaixo são EXEMPLOS. Troque pelas notas reais de cada redação. */
const NOTAS_SAO_EXEMPLO = true;   // mude para false quando colocar as notas reais

const COMPETENCIAS = [
  { sigla: "C1", nome: "Domínio da norma culta" },
  { sigla: "C2", nome: "Compreensão da proposta e do tema" },
  { sigla: "C3", nome: "Seleção e organização dos argumentos" },
  { sigla: "C4", nome: "Mecanismos linguísticos (coesão)" },
  { sigla: "C5", nome: "Proposta de intervenção" }
];

const TEXTO_EXEMPLO =
  "Cole aqui o texto completo da sua redação.\n\n" +
  "Use uma linha em branco para separar os parágrafos: introdução, desenvolvimento e conclusão.";

const REDACOES = [
  { titulo: "Título da redação 1",  tema: "Dissertativo-argumentativo", ano: "1º ano", data: "Fev/2024", notas: [120, 120,  80, 120,  80], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 2",  tema: "Crônica",                    ano: "1º ano", data: "Mar/2024", notas: [120, 120, 120, 120, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 3",  tema: "Dissertativo-argumentativo", ano: "1º ano", data: "Abr/2024", notas: [120, 160, 120, 120,  80], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 4",  tema: "Conto",                      ano: "1º ano", data: "Jun/2024", notas: [160, 120, 120, 120, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 5",  tema: "Carta argumentativa",        ano: "1º ano", data: "Set/2024", notas: [120, 160, 120, 160, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 6",  tema: "Dissertativo-argumentativo", ano: "2º ano", data: "Fev/2025", notas: [160, 160, 120, 120, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 7",  tema: "Resenha",                    ano: "2º ano", data: "Mar/2025", notas: [120, 160, 160, 120, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 8",  tema: "Dissertativo-argumentativo", ano: "2º ano", data: "Abr/2025", notas: [160, 160, 120, 160, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 9",  tema: "Crônica",                    ano: "2º ano", data: "Mai/2025", notas: [160, 120, 160, 160, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 10", tema: "Artigo de opinião",          ano: "2º ano", data: "Ago/2025", notas: [160, 160, 160, 120, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 11", tema: "Dissertativo-argumentativo", ano: "2º ano", data: "Out/2025", notas: [160, 160, 160, 160, 120], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 12", tema: "Dissertativo-argumentativo", ano: "3º ano", data: "Fev/2026", notas: [160, 160, 160, 160, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 13", tema: "Simulado Enem",              ano: "3º ano", data: "Mar/2026", notas: [160, 200, 160, 160, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 14", tema: "Simulado Enem",              ano: "3º ano", data: "Abr/2026", notas: [160, 160, 160, 160, 200], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 15", tema: "Artigo de opinião",          ano: "3º ano", data: "Mai/2026", notas: [200, 160, 160, 160, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 16", tema: "Simulado Enem",              ano: "3º ano", data: "Ago/2026", notas: [160, 200, 160, 200, 160], texto: TEXTO_EXEMPLO },
  { titulo: "Título da redação 17", tema: "Texto livre",                ano: "3º ano", data: "Out/2026", notas: [200, 200, 160, 160, 200], texto: TEXTO_EXEMPLO }
];

/* =========================================================
   ⚙️  A partir daqui é o funcionamento do site
   ========================================================= */

const $  = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

/* Segurança básica: evita que textos com < > quebrem a página */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const soma = (arr) => arr.reduce((a, b) => a + b, 0);
const total = (r) => soma(r.notas);

/* ---------- Dados básicos na página ---------- */
$("#nomeAluno").textContent = NOME_ALUNO;
$("#mensagemFinal").textContent = MENSAGEM_FINAL;
document.title = `${NOME_ALUNO} | Formatura 2026`;

/* ---------- Tema claro/escuro (lembra a escolha) ---------- */
const themeBtn = $("#themeToggle");
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("tema", t); } catch (e) {}
}
let temaSalvo = null;
try { temaSalvo = localStorage.getItem("tema"); } catch (e) {}
setTheme(temaSalvo || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeBtn.addEventListener("click", () =>
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));

/* ---------- Menu mobile + barra com sombra ao rolar ---------- */
const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });
window.addEventListener("scroll", () => $("#topbar").classList.toggle("scrolled", scrollY > 10), { passive: true });

/* ---------- Contadores animados ---------- */
$$("[data-count]").forEach((el) => {
  const alvo = +el.dataset.count; let n = 0;
  const passo = Math.max(1, Math.round(alvo / 40));
  const t = setInterval(() => {
    n = Math.min(alvo, n + passo); el.textContent = n;
    if (n >= alvo) clearInterval(t);
  }, 35);
});

/* =========================================================
   MEMÓRIAS — linha do tempo
   ========================================================= */
const timelineEl = $("#timeline"), timelineNav = $("#timelineNav");

function blocoLista(titulo, itens) {
  if (!itens || !itens.length) return "";
  return `<details>
    <summary>${titulo}</summary>
    <ul>${itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
  </details>`;
}

/* Foto clicável (abre no lightbox) */
const fotoAttrs = (f) =>
  `data-foto="${esc(f.src)}" data-legenda="${esc(f.legenda)}" tabindex="0" role="button" aria-label="Ampliar foto: ${esc(f.legenda)}"`;

const galeriaHTML = (fotos) => !fotos.length ? "" : `
  <div class="gallery">
    ${fotos.map((f) => `
      <figure class="g-item" ${fotoAttrs(f)}>
        <img src="${esc(f.src)}" alt="${esc(f.legenda)}" loading="lazy">
        <figcaption>${esc(f.legenda)}</figcaption>
      </figure>`).join("")}
  </div>`;

function etapaHTML(e) {
  const [capa, ...resto] = e.fotos;
  return `
  <article class="era reveal" id="era-${e.id}">
    <div class="era-photo" ${fotoAttrs(capa)}>
      <img src="${esc(capa.src)}" alt="${esc(capa.legenda)}" loading="lazy">
    </div>
    <div class="era-content">
      <span class="era-year">${esc(e.periodo)} · ${esc(e.escola)}</span>
      <h3>${esc(e.titulo)}</h3>
      <p>${esc(e.resumo)}</p>
      <div class="era-details">
        ${blocoLista("📖 Causos marcantes", e.causos)}
        ${blocoLista("💡 Curiosidades", e.curiosidades)}
        ${blocoLista("💪 Desafios superados", e.desafios)}
        ${blocoLista("✨ Momentos inesquecíveis", e.momentos)}
      </div>
      ${galeriaHTML(resto)}
    </div>
  </article>`;
}

function programaHTML(p) {
  return `
  <article class="era era-wide reveal" id="era-${p.id}">
    <div class="program">
      <span class="badge">⭐ Destaque do 2º ano</span>
      <h3>${esc(p.titulo)}</h3>
      <p class="era-year">${esc(p.periodo)} · ${esc(p.local)}</p>
      <p class="program-resumo">${esc(p.resumo)}</p>

      <ol class="months">
        ${p.meses.map((m, i) => `
          <li>
            <span class="month-n">${i + 1}</span>
            <h4>${esc(m.titulo)}</h4>
            <p>${esc(m.texto)}</p>
          </li>`).join("")}
      </ol>

      <h4 class="sub">📸 Fotos do programa</h4>
      ${galeriaHTML(p.fotos)}

      <h4 class="sub">🌱 O que eu levo desse programa</h4>
      <ul class="learned">${p.aprendizados.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    </div>
  </article>`;
}

/* Monta a linha do tempo; o programa entra logo depois do 2º ano */
const ITENS = [];
ETAPAS.forEach((e) => {
  ITENS.push({ id: e.id, rotulo: e.titulo.split("(")[0].trim(), html: etapaHTML(e) });
  if (e.id === "em2") ITENS.push({ id: PROGRAMA.id, rotulo: "★ Programa de 5 meses", html: programaHTML(PROGRAMA) });
});
timelineEl.innerHTML = ITENS.map((i) => i.html).join("");
timelineNav.innerHTML = ITENS.map((i, n) =>
  `<button class="chip" data-target="era-${i.id}">${n + 1}. ${esc(i.rotulo)}</button>`).join("");
timelineNav.addEventListener("click", (ev) => {
  const b = ev.target.closest("[data-target]"); if (!b) return;
  $("#" + b.dataset.target).scrollIntoView({ behavior: "smooth", block: "center" });
});

/* Foto que não existe → aviso amigável em vez de imagem quebrada */
function fotoFaltando(img) {
  const box = img.closest("[data-foto]"); if (!box || box.dataset.semFoto) return;
  box.dataset.semFoto = "1";
  box.innerHTML = `<div class="photo-fallback"><div><span>📷</span>${esc(box.dataset.legenda)}<br><code>${esc(box.dataset.foto)}</code></div></div>`;
}
$$("[data-foto] img").forEach((img) => {
  img.addEventListener("error", () => fotoFaltando(img));
  if (img.complete && img.naturalWidth === 0) fotoFaltando(img);
});

/* ---------- Lightbox ---------- */
const lb = $("#lightbox");
function abrirFoto(box) {
  if (!box || box.dataset.semFoto) return;
  $("#lbImg").src = box.dataset.foto; $("#lbImg").alt = box.dataset.legenda;
  $("#lbCap").textContent = box.dataset.legenda; lb.hidden = false;
}
timelineEl.addEventListener("click", (e) => abrirFoto(e.target.closest("[data-foto]")));
timelineEl.addEventListener("keydown", (e) => { if (e.key === "Enter") abrirFoto(e.target.closest("[data-foto]")); });
lb.addEventListener("click", (e) => { if (e.target !== $("#lbImg")) lb.hidden = true; });

/* =========================================================
   PORTFÓLIO — cards, sanfona, busca, filtro e modal
   ========================================================= */
const TODAS = REDACOES.map((r, i) => ({ ...r, n: i + 1 }));
const cardsEl = $("#cards"), sanfonaEl = $("#sanfona"), filtrosEl = $("#filtros");
let filtroAno = "Todas", termo = "", listaAtual = [], modalLista = [], indiceModal = 0;

const anos = ["Todas", ...new Set(REDACOES.map((r) => r.ano))];
filtrosEl.innerHTML = anos.map((a) =>
  `<button class="chip ${a === "Todas" ? "active" : ""}" data-ano="${esc(a)}">${esc(a)}</button>`).join("");

const resumoTexto = (t) => { const s = t.replace(/\s+/g, " ").trim(); return s.length > 110 ? s.slice(0, 110) + "…" : s; };

function renderizar() {
  listaAtual = TODAS.filter((r) =>
    (filtroAno === "Todas" || r.ano === filtroAno) &&
    (r.titulo + " " + r.tema).toLowerCase().includes(termo));

  $("#contador").textContent = `${listaAtual.length} de ${REDACOES.length} redações`;

  cardsEl.innerHTML = listaAtual.length ? listaAtual.map((r, idx) => `
    <button class="card reveal visible" data-idx="${idx}">
      <span class="card-top">
        <span class="card-num">${String(r.n).padStart(2, "0")}</span>
        <span class="nota">${total(r)}<small>/1000</small></span>
      </span>
      <span class="tag">${esc(r.tema)} · ${esc(r.ano)}</span>
      <h3>${esc(r.titulo)}</h3>
      <p>${esc(resumoTexto(r.texto))}</p>
      <span class="read">Ler redação →</span>
    </button>`).join("") : `<p>Nenhuma redação encontrada.</p>`;

  sanfonaEl.innerHTML = listaAtual.map((r, idx) => `
    <div class="acc-item" data-idx="${idx}">
      <button class="acc-head" aria-expanded="false">
        <span><small>${String(r.n).padStart(2, "0")} · ${esc(r.tema)} · ${esc(r.data)} · nota ${total(r)}</small>${esc(r.titulo)}</span>
        <span class="plus">+</span>
      </button>
      <div class="acc-body"><div class="acc-body-inner">${esc(r.texto)}</div></div>
    </div>`).join("");
}

filtrosEl.addEventListener("click", (e) => {
  const b = e.target.closest("[data-ano]"); if (!b) return;
  filtroAno = b.dataset.ano;
  $$("#filtros .chip").forEach((c) => c.classList.toggle("active", c === b));
  renderizar();
});
$("#busca").addEventListener("input", (e) => { termo = e.target.value.toLowerCase().trim(); renderizar(); });

/* Alternar entre Cards e Sanfona */
$(".view-switch").addEventListener("click", (e) => {
  const b = e.target.closest("[data-view]"); if (!b) return;
  $$(".view-switch .chip").forEach((c) => c.classList.toggle("active", c === b));
  const sanf = b.dataset.view === "sanfona";
  cardsEl.classList.toggle("hidden", sanf);
  sanfonaEl.classList.toggle("hidden", !sanf);
});

/* Sanfona: abre um item de cada vez */
sanfonaEl.addEventListener("click", (e) => {
  const head = e.target.closest(".acc-head"); if (!head) return;
  const item = head.parentElement, abrir = !item.classList.contains("open");
  $$(".acc-item", sanfonaEl).forEach((it) => {
    it.classList.remove("open");
    $(".acc-head", it).setAttribute("aria-expanded", "false");
    $(".acc-body", it).style.maxHeight = null;
  });
  if (abrir) {
    item.classList.add("open"); head.setAttribute("aria-expanded", "true");
    const body = $(".acc-body", item); body.style.maxHeight = body.scrollHeight + "px";
  }
});

/* ---------- Modal de leitura ---------- */
const modal = $("#modal");
function abrirModal(idx, lista = listaAtual) {
  modalLista = lista; indiceModal = idx;
  const r = lista[idx];
  $("#modalMeta").textContent = `Redação ${String(r.n).padStart(2, "0")} · ${r.tema} · ${r.data}`;
  $("#modalTitulo").textContent = r.titulo;
  $("#modalNotas").innerHTML =
    `<span class="pill total">Nota ${total(r)}/1000</span>` +
    r.notas.map((v, i) => `<span class="pill" title="${esc(COMPETENCIAS[i].nome)}">${COMPETENCIAS[i].sigla}: ${v}</span>`).join("");
  $("#modalTexto").textContent = r.texto;
  $("#modalPos").textContent = `${idx + 1} / ${lista.length}`;
  $("#prevBtn").disabled = idx === 0;
  $("#nextBtn").disabled = idx === lista.length - 1;
  $(".modal-card").scrollTop = 0;
  modal.hidden = false; document.body.style.overflow = "hidden";
}
function fecharModal() { modal.hidden = true; document.body.style.overflow = ""; }

cardsEl.addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) abrirModal(+c.dataset.idx, listaAtual); });
modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) fecharModal(); });
$("#prevBtn").addEventListener("click", () => indiceModal > 0 && abrirModal(indiceModal - 1, modalLista));
$("#nextBtn").addEventListener("click", () => indiceModal < modalLista.length - 1 && abrirModal(indiceModal + 1, modalLista));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { fecharModal(); lb.hidden = true; }
  if (!modal.hidden) {
    if (e.key === "ArrowLeft") $("#prevBtn").click();
    if (e.key === "ArrowRight") $("#nextBtn").click();
  }
});

renderizar();

/* =========================================================
   GRÁFICOS POR COMPETÊNCIA DO ENEM
   Um gráfico de barras para cada competência (C1 a C5),
   mostrando a nota (0–200) em cada uma das 17 redações.
   ========================================================= */
const enemGrid = $("#enemGraficos");

function graficoSVG(ci) {
  const W = 560, H = 250, L = 36, R = 10, T = 14, B = 30;
  const pw = W - L - R, ph = H - T - B, slot = pw / TODAS.length, bw = slot * 0.66;
  const y = (v) => T + ph - (v / 200) * ph;
  const media = soma(TODAS.map((r) => r.notas[ci])) / TODAS.length;

  const grade = [0, 40, 80, 120, 160, 200].map((v) => `
    <line class="grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"></line>
    <text class="ax" x="${L - 6}" y="${y(v) + 3}" text-anchor="end">${v}</text>`).join("");

  const barras = TODAS.map((r, i) => {
    const v = r.notas[ci], x = L + i * slot + (slot - bw) / 2, h = Math.max(0, (v / 200) * ph);
    return `
      <g class="bar" data-n="${r.n}" tabindex="0" role="button" aria-label="Redação ${r.n}: ${v} de 200 em ${esc(COMPETENCIAS[ci].sigla)}">
        <title>Redação ${r.n} — ${esc(r.titulo)}: ${v}/200</title>
        <rect class="hit" x="${L + i * slot}" y="${T}" width="${slot}" height="${ph}"></rect>
        <rect class="fill" x="${x.toFixed(1)}" y="${(T + ph - h).toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="3"></rect>
        <text class="ax xn" x="${(x + bw / 2).toFixed(1)}" y="${H - 12}" text-anchor="middle">${r.n}</text>
      </g>`;
  }).join("");

  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Notas da ${COMPETENCIAS[ci].sigla} nas ${TODAS.length} redações">
    ${grade}${barras}
    <line class="avg" x1="${L}" x2="${W - R}" y1="${y(media)}" y2="${y(media)}"></line>
    <text class="ax" x="${W - R}" y="${H - 1}" text-anchor="end">nº da redação →</text>
  </svg>`;
}

function renderEnem() {
  const medias = COMPETENCIAS.map((_, ci) => soma(TODAS.map((r) => r.notas[ci])) / TODAS.length);
  const mediaTotal = soma(TODAS.map(total)) / TODAS.length;
  const melhor = TODAS.reduce((a, b) => (total(b) > total(a) ? b : a));

  $("#enemResumo").innerHTML = `
    <div class="kpi"><strong>${Math.round(mediaTotal)}</strong><span>nota média (de 1000)</span></div>
    <div class="kpi"><strong>${total(melhor)}</strong><span>melhor nota · redação ${String(melhor.n).padStart(2, "0")}</span></div>
    <div class="kpi"><strong>${COMPETENCIAS[medias.indexOf(Math.max(...medias))].sigla}</strong><span>competência mais forte</span></div>`;

  enemGrid.innerHTML = COMPETENCIAS.map((c, ci) => `
    <figure class="chart">
      <figcaption>
        <strong>${c.sigla} · ${esc(c.nome)}</strong>
        <span>média ${Math.round(medias[ci])}/200</span>
      </figcaption>
      ${graficoSVG(ci)}
    </figure>`).join("");

  $("#enemNota").textContent = NOTAS_SAO_EXEMPLO
    ? "⚠️ Notas de exemplo — substitua pelas notas reais em js/script.js. A linha tracejada é a média da competência; clique em uma barra para abrir a redação."
    : "A linha tracejada é a média da competência. Clique em uma barra para abrir a redação.";
}
renderEnem();

/* Clicar numa barra abre a redação correspondente */
function abrirBarra(el) {
  const g = el.closest(".bar"); if (g) abrirModal(+g.dataset.n - 1, TODAS);
}
enemGrid.addEventListener("click", (e) => abrirBarra(e.target));
enemGrid.addEventListener("keydown", (e) => { if (e.key === "Enter") abrirBarra(e.target); });

/* ---------- Animação de entrada ao rolar ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

/* ---------- Link ativo no menu ---------- */
const io2 = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting)
      $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => io2.observe(s));

/* ---------- Confete de formatura 🎓 ---------- */
$("#confeteBtn").addEventListener("click", () => {
  const cv = $("#confete"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const cores = ["#e6c36a", "#1b2a52", "#ffffff", "#c0392b", "#2e86c1"];
  const pecas = Array.from({ length: 160 }, () => ({
    x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
    w: 6 + Math.random() * 6, h: 10 + Math.random() * 8,
    vy: 2 + Math.random() * 4, vx: -2 + Math.random() * 4,
    r: Math.random() * 6, vr: -.2 + Math.random() * .4,
    c: cores[Math.floor(Math.random() * cores.length)]
  }));
  let frames = 0;
  (function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    pecas.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    if (++frames < 260) requestAnimationFrame(anim); else ctx.clearRect(0, 0, cv.width, cv.height);
  })();
});
