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

/* ---------- PORTFÓLIO DE REDAÇÕES ----------
   Cada redação tem: titulo, tema (tipo do texto), ano, data, notas e texto.
   notas: [C1, C2, C3, C4, C5] — valores 0, 40, 80, 120, 160 ou 200 (o total é a soma, até 1000).
   Para separar parágrafos no texto, use uma linha em branco. */
const NOTAS_SAO_EXEMPLO = false;

const COMPETENCIAS = [
  { sigla: "C1", nome: "Domínio da norma culta" },
  { sigla: "C2", nome: "Compreensão da proposta e do tema" },
  { sigla: "C3", nome: "Seleção e organização dos argumentos" },
  { sigla: "C4", nome: "Mecanismos linguísticos (coesão)" },
  { sigla: "C5", nome: "Proposta de intervenção" }
];

const REDACOES = [
  {
    titulo: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 160, 200, 160, 200],
    texto: `A sociedade atual convive com múltiplas diferenças culturais, socias, de gênero e raciais. Essas diferenças se tornaram essenciais para uma convivência harmônica. Apesar de problemas como sexismo, intolerância e preconceito ainda são presentes. Nesse contexto o respeito e a empatia com as diferenças tornam-se necessários para o desenvolvimento social.

O respeito é fundamental para combater preconceitos e violências, como exemplificado pela diferença salarial entre homens e mulheres no Brasil, que, segundo o G1, chegou a 21% em 2025. Esse cenário demonstra como visões preconceituosas ainda influenciam relações sociais e profissionais, reforçando a importância de promover a valorização da igualdade e do respeito às diferenças.

Além disso, o respeito é uma porta de entrada para a superação das adversidades. Entretanto, o respeito não se faz sem empatia. No filme "O extraordinário", a superação das diferenças por meio da empatia e respeito exemplificada na relação entre Auggi e seu amigo. Esse exemplo demonstra que o contato com a diversidade e o desenvolvimento da empatia podem contribuir para reduzir preconceitos e fortalecer relações mais humanas.

Conclui-se que para a superação das diferenças por meio do respeito e da empatia, é essencial que o Ministério das Relações Sociais crie e promova palestras públicas em escolas e outros espaços, visando conscientizar principalmente o público entre 20 e 30 anos, com temas sobre respeito às diferenças e empatia, contando com profissionais capacitados e acompanhamento de resultados.`
  },
  {
    titulo: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 160, 160, 160, 160],
    texto: `O filme Wall-E apresenta uma Terra devastada pelo consumo excessivo e pela degradação ambiental. Atualmente, o Brasil sofre impactos sociais e econômicos devido às mudanças no ciclo hidrológico. Nesse contexto, identifica-se que o problema se sustenta pelos ideais capitalistas extremos e, sobretudo, pelas ações das empresas agropecuárias que desmatam grandes áreas.

Na sociedade moderna, o egoísmo humano influencia brutalmente as mudanças climáticas. Albert Einstein citou que "eu não sei como será a Terceira Guerra Mundial, mas sei que a quarta será com paus e pedras". Baseado nessa citação, compreende-se que o desejo de possuir imoderadamente influencia os ciclos hidrológicos, quando empresas exploram os recursos naturais para gerar riqueza sem observar os impactos da devastação e os efeitos sociais produzidos.

Além disso, empresas agropecuárias utilizam grandes áreas para plantio e pecuária. De acordo com o G1, a Amazônia perdeu mais de 52 milhões de hectares nos últimos 40 anos, com cerca de 90% do desmatamento destinado para pastagem de gado. As árvores são responsáveis por liberar água na atmosfera e, quando retiradas, resultam no desequilíbrio hidrológico. Assim, quando essas empresas realizam o desmatamento, elas aprofundam o desafio dos ciclos hidrológicos.

Conclui-se, portanto, que cabe ao governo federal, à polícia ambiental e ao Ministério da Agropecuária reforçar a fiscalização sobre a extração de recursos naturais. Para isso, é necessário utilizar tecnologias como câmeras e drones, além da atuação de agentes especializados, com o financiamento proveniente de fundos do próprio ministério. Dessa forma, será possível reduzir os casos de extração ilegal`
  },
  {
    titulo: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 160, 160, 160, 160],
    texto: `O conceito de Indústria Cultural explica como a mídia influencia comportamentos e impõe padrões à sociedade. Atualmente, o Brasil enfrenta o aumento do uso de canetas emagrecedoras de forma indiscriminada, principalmente entre jovens que buscam resultados rápidos. Nesse contexto, identifica-se que o problema se sustenta pela retomada do padrão de magreza extrema e, sobretudo, pela influência das redes sociais. Na sociedade moderna, a busca por aceitação influencia diretamente nessas escolhas.

Nesse sentido, muitas pessoas utilizam essas substâncias sem orientação médica, apenas com o objetivo estético. Esses medicamentos foram desenvolvidos para tratar doenças, mas são usados de forma inadequada, o que pode causar efeitos colaterais como mal-estar e alterações no organismo. Quando indivíduos priorizam a aparência acima da saúde, acabam colocando o próprio corpo em risco.

Além disso, observa-se a volta da valorização da magreza extrema, impulsionada por tendências nas redes sociais. Esse padrão faz com que muitas pessoas se sintam insatisfeitas com o próprio corpo e busquem métodos rápidos para emagrecer. Dessa forma, o uso dessas canetas aumenta, mesmo sem necessidade, reforçando um comportamento prejudicial.

Conclui-se, portanto, que cabe ao governo federal e aos órgãos de saúde intensificar a fiscalização sobre a venda dessas substâncias. Para isso, é necessário promover campanhas informativas nas redes sociais e utilizar meios de comunicação para alertar a população sobre os riscos do uso indevido, com apoio de profissionais da saúde. Dessa forma, será possível reduzir o uso indiscriminado e promover mais cuidado com a saúde`
  },
  {
    titulo: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 160, 160, 160, 160],
    texto: `O filme “Matrix” apresenta uma realidade em que as pessoas não conseguem distinguir o que é real do que é simulado. Fora da ficção, esse cenário tem se tornado cada vez mais próximo com o avanço da Inteligência Artificial e o surgimento das deepfakes. No Brasil, o uso dessas tecnologias gera preocupação, já que a manipulação de imagens, vídeos e áudios pode comprometer a confiança nas informações. Nesse contexto, percebe-se que o problema está ligado tanto ao avanço tecnológico quanto à falta de preparo da população para lidar com esse tipo de conteúdo.

Atualmente, a circulação de conteúdos falsos influencia como as pessoas enxergam a realidade. Muitas vezes, vídeos e imagens manipulados parecem verdadeiros, dificultando a identificação do que é real. Com isso, informações falsas podem se espalhar rapidamente, prejudicando a imagem de pessoas e confundindo a população. Além disso, com o fácil acesso a ferramentas digitais, qualquer pessoa pode criar conteúdos manipulados e compartilhá-los nas redes sociais.

Outro ponto importante é a falta de controle sobre esse tipo de conteúdo. Muitas plataformas digitais ainda não conseguem identificar e remover rapidamente materiais falsificados. Isso faz com que os usuários fiquem expostos a informações enganosas, o que pode causar confusão, golpes e difamação.

Portanto, é necessário que o governo e as empresas de tecnologia tomem medidas para diminuir esse problema. Para isso, podem ser criadas leis para regular o uso da Inteligência Artificial, além de investimentos em sistemas que identifiquem conteúdos falsos e garantam mais segurança digital`
  },
  {
    titulo: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 200, 200, 200, 200],
    texto: `A agricultura desempenha um papel fundamental para a sociedade, uma vez que garante o abastecimento de alimentos, gera empregos e impulsiona a economia. No Brasil, o agronegócio destaca-se pela elevada produção e exportação de produtos agrícolas. Segundo dados divulgados pelo G1, o setor foi responsável por cerca de 24% do Produto Interno Bruto (PIB) brasileiro em 2023, evidenciando sua expressiva contribuição para o desenvolvimento nacional. Contudo, paralelamente ao crescimento da atividade agrícola, surgem desafios ambientais, como o desmatamento, a poluição e a degradação do solo. Diante desse cenário, torna-se indispensável conciliar o avanço produtivo com a preservação dos recursos naturais.

Sob essa perspectiva, a tecnologia exerce papel decisivo na construção de uma agricultura mais eficiente e ambientalmente responsável. De acordo com a Embrapa, recursos como drones, sensores e sistemas de irrigação inteligente permitem reduzir desperdícios e ampliar a produtividade. Somado a isso, o emprego de práticas como a rotação de culturas favorece a conservação do solo e diminui os impactos ambientais. Assim, fica evidente que a inovação tecnológica pode promover o desenvolvimento do setor sem comprometer a sustentabilidade.

Além dos avanços tecnológicos, a preservação ambiental constitui um fator indispensável para a continuidade da produção agrícola. Os povos Kayapó, por exemplo, utilizam os recursos naturais de forma equilibrada há gerações, demonstrando que o ser humano pode estabelecer uma relação harmoniosa com a natureza. Em contrapartida, o aumento das queimadas e do desmatamento tem provocado alterações climáticas que afetam diretamente o regime de chuvas e a produtividade das lavouras. Consequentemente, os prejuízos atingem não apenas o meio ambiente, mas também a economia e a segurança alimentar da população.

Portanto, o Governo Federal, em parceria com o Ministério da Agricultura e os órgãos ambientais, deve intensificar a fiscalização das áreas agrícolas por meio do monitoramento via satélite, do uso de drones e da ampliação das equipes de inspeção, aplicando sanções mais rigorosas aos responsáveis por práticas ilegais. Além disso, o Ministério da Agricultura deve ampliar programas de incentivo financeiro e capacitação técnica para produtores rurais que adotem métodos sustentáveis, como a rotação de culturas, a irrigação inteligente e o plantio direto. Paralelamente, as escolas devem promover palestras, projetos e campanhas de educação ambiental, a fim de conscientizar os jovens sobre a importância da preservação dos recursos naturais. Dessa maneira, será possível fortalecer o agronegócio brasileiro, aumentar a produtividade e garantir um futuro sustentável para as próximas gerações`
  },
  {
    titulo: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 160, 200, 160, 200],
    texto: `Na obra "1984", de George Orwell, é retratada uma sociedade na qual o acesso à informação exerce grande influência sobre a vida dos indivíduos. Atualmente, a inclusão digital vem se tornando cada vez mais necessária no Brasil. Entretanto, muitas pessoas ainda enfrentam dificuldades para acessar a internet e utilizar recursos tecnológicos. Dessa forma, a desigualdade social e a falta de infraestrutura configuram-se como os principais fatores responsáveis por esse problema.

Diante desse cenário, é possível identificar que grande parte da população brasileira sofre com a desigualdade social. Em razão da baixa renda, muitas famílias não possuem condições financeiras para adquirir computadores, celulares de qualidade ou contratar serviços de internet. Como consequência, milhares de estudantes e trabalhadores têm seu acesso à informação limitado, dificultando o desenvolvimento educacional e profissional.

Além disso, consegue-se compreender que a falta de infraestrutura também contribui para a exclusão digital. Grande parte das regiões rurais e afastadas dos centros urbanos não possui acesso adequado à internet. Ainda nesse contexto, a precariedade dos serviços de conexão impede que muitas pessoas utilizem recursos essenciais, como plataformas educacionais, serviços públicos digitais e oportunidades de emprego.

Conclui-se que, para combater essa problemática, o Ministério das Comunicações e o Ministério da Educação devem ampliar os investimentos em infraestrutura tecnológica e expandir o acesso à internet em todo o território nacional. Assim, é necessário promover programas de capacitação digital nas escolas e comunidades. Assim, busca-se garantir que a população brasileira esteja mais preparada e informada para participar da sociedade contemporânea, reduzindo os impactos da exclusão digital`
  },
  {
    titulo: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 160, 160, 120, 160],
    texto: `Atualmente, plataformas de apostas vem ganhando espaço entre os jovens brasileiros, conforme o jornal UOL 63% da população já apostou ou aposta. Nesse sentido o que era visto inicialmente como diversão se torna endividamento. Dessa forma, a falta de educação financeira e o vício configuram -se como os principais fatores responsáveis por esse problema.

Sob essa perspectiva é possível identificar que grande parte da juventude brasileira sofre com um déficit de educação financeira. Em razão desse déficit muitos apostam impulsivamente, levando a complicações socioeconômicas, como, por exemplo, o abandono da faculdade devido atraso das parcelas.

Em segunda análise consegue-se compreender que os problemas socioeconômicos estão diretamente ligados ao vício em apostas. Grande parte das casas de apostas fazem publicidade com influenciadores, um exemplo é a influenciadora Virgínia Fonseca que incentivava seus seguidores a apostar. Ainda nesse contexto, a exposição constante dessa publicidade contribui para a normalização das bets entre os jovens brasileiros que desenvolvem um ciclo repetitivo de apostas e prejuízos.

Conclui-se que para combatermos essa problemática o ministério da saúde e o ministério da educação devem ampliar as aulas de educação financeira, além de promover campanhas que alertam sobre os perigos do vício em apostas. Logo seria necessário a ampliação da grade curricular. Assim busca-se que os jovens estejam mais preparados e informados para lidarem com os problemas socioeconômicos, reduzindo a vulnerabilidade a esse tipo de dependência`
  },
  {
    titulo: "Caminhos para combater a intolerância religiosa no Brasil",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 120, 80, 120, 40],
    texto: `De acordo com a Constituição Federal de 1988 á liberdade de crença é assegurada a todos os cidadãos brasileiros. Entretanto, na prática, muitas pessoas sofrem preconceito e discriminação por conta de sua religião. Dessa forma, a falta de informação e o preconceito são fatores que contribuem para a intolerância religiosa.

Em primeira análise, é possível perceber que muitas pessoas não conhecem a diversidade religiosa presente em nosso país. De acordo com o G1 cerca de 62% da população brasileira não possui acesso a informações de qualidade. Por causa dessa falta de conhecimento, a população acaba criando preconceitos e julgamentos sobre religião diferentes daquelas que praticam. Consequentemente, surgem atitudes como o desrespeito que dificultam a convivência entre pessoas de diferentes crenças.

Além disso, o preconceito também contribui para o aumento da intolerância religiosa. Em diversos casos, pessoas são vítimas de ofensas e discriminações apenas por sua religião. Isso faz com que a liberdade de crença, garantida pela Constituição, nem sempre seja respeitada na prática`
  },
  {
    titulo: "Cultura fitness: bem-estar ou busca por estética inatingível",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [160, 160, 160, 160, 200],
    texto: `Atualmente, a cultura 'fitness' vem ganhando cada vez mais espaço na sociedade brasileira, principalmente entre os jovens. De acordo com o filósofo Byung-Chul Han, a sociedade contemporânea é marcada pela busca constante por desempenho e produtividade. Nesse contexto, a cultura 'fitness' pode deixar de representar apenas uma forma de cuidar da saúde e se tornar uma busca exagerada pela aparência. Assim, a comparação social e a comercialização da imagem corporal configuram-se como fatores responsáveis por esse problema.

A partir dessa perspectiva, é possível identificar que a comparação social contribui para a busca por uma estética inatingível. Por conta da exposição de diferentes corpos nas redes sociais, muitas pessoas passam a comparar sua aparência com a de influenciadores e celebridades. Como resultado, cria-se a ideia de que é necessário possuir determinado corpo para ser considerado bonito ou saudável, o que pode gerar insatisfação com a própria aparência e diminuir a valorização das características individuais.

Ademais, a comercialização da imagem corporal também contribui para esse problema. Muitas empresas utilizam pessoas com corpos considerados ideais para divulgar produtos, academias e métodos de emagrecimento. Nesse cenário, essa publicidade pode transmitir a ideia de que a felicidade e a aceitação dependem da aparência física. Dessa forma, algumas pessoas podem passar a consumir determinados produtos com o objetivo de alcançar um padrão que nem sempre corresponde à realidade.

Portanto, para combater essa problemática, o Ministério da Saúde e o Ministério da Educação devem promover campanhas de conscientização sobre os benefícios da atividade física para a saúde, além de incentivar debates nas escolas sobre os impactos da comparação corporal e da publicidade. Essas ações podem ser realizadas por meio de palestras e materiais informativos. Desse modo, busca-se que os jovens compreendam que a prática de exercícios deve estar relacionada ao bem-estar e à qualidade de vida, e não à necessidade de alcançar um padrão estético:`
  },
  {
    titulo: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 160, 200, 200, 200],
    texto: `A Constituição Federal de 1988 representa um importante marco para a garantia dos direitos dos povos indígenas no Brasil, pois reconhece seus costumes, línguas, crenças e os direitos sobre as terras que tradicionalmente ocupam. Entretanto, mesmo com esses avanços, a cidadania indígena ainda não é totalmente efetivada. Nesse contexto, a dificuldade de garantir os territórios e a invisibilidade social são alguns dos principais obstáculos enfrentados pelos povos originários.

Em primeiro lugar, a dificuldade de garantir os territórios indígenas prejudica diretamente essas comunidades. Para os povos originários, á terra não representa apenas um espaço para morar, mas também está ligada à sua cultura, identidade e sobrevivência. Porém, invasões, conflitos e atividades ilegais ainda podem ameaçar essas áreas. Dessa forma, quando os direitos territoriais previstos na Constituição não são respeitados, existe uma diferença entre o que está garantido pela lei e a realidade de muitos indígenas.

Além disso, a invisibilidade social também dificulta a garantia dos direitos indígenas. Muitas vezes, esses povos são vistos de forma estereotipada, como se pertencessem somente ao passado do Brasil. Essa visão ignora que os indígenas fazem parte da sociedade atual e possuem diferentes culturas, costumes e necessidades. Como consequência, a falta de conhecimento da população contribui para o preconceito e dificulta o reconhecimento dos povos originários como cidadãos que possuem direitos.

Portanto, é necessário melhorar a situação dos povos indígenas no país. Para isso, o Ministério dos Povos Indígenas deve aumentar a fiscalização dos territórios indígenas, por meio de equipes especializadas e do monitoramento dessas áreas, com o objetivo de diminuir invasões e atividades ilegais. Além disso, o Ministério da Educação deve ampliar o ensino sobre a história e as culturas indígenas nas escolas, utilizando materiais que apresentem diferentes povos e suas realidades. Assim, será possível combater estereótipos, proteger os territórios e contribuir para a efetivação da cidadania indígena no Brasil`
  },
  {
    titulo: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 200, 200, 200, 200],
    texto: `Na sociedade contemporânea, o avanço das tecnologias digitais modificou a maneira como as pessoas consomem informações, produtos e conteúdos culturais. Nesse cenário, os algoritmos das redes sociais passaram a selecionar aquilo que aparece para cada usuário, considerando seus interesses e comportamentos anteriores. Embora esse mecanismo facilite o acesso a conteúdos personalizados, ele também pode influenciar escolhas e hábitos cotidianos. Dessa forma, a atuação dos algoritmos contribui para o aumento do consumismo e para a padronização de comportamentos culturais.

Em primeiro lugar, a personalização realizada pelos algoritmos pode favorecer o consumo excessivo. Isso acontece porque as plataformas analisam pesquisas, curtidas e visualizações para apresentar anúncios e produtos relacionados aos interesses de cada indivíduo. Como consequência, o usuário recebe constantemente estímulos de compra, muitas vezes sem perceber a influência dessas ferramentas sobre suas escolhas. Nesse sentido, o conceito de “sociedade do espetáculo”, desenvolvido pelo filósofo Guy Debord, pode ser relacionado a essa realidade, visto que a valorização da aparência e do consumo pode fazer com que determinados produtos sejam vistos como símbolos de status e pertencimento.

Além disso, a seleção de conteúdos feita pelos algoritmos pode diminuir o contato dos usuários com diferentes manifestações culturais. Isso ocorre porque as plataformas costumam recomendar conteúdos semelhantes àqueles que já despertaram o interesse do indivíduo. Assim, tendências de comportamento, estética e estilo de vida passam a receber maior destaque, enquanto outras formas de expressão podem ter menos visibilidade. Dessa maneira, a população pode ficar mais exposta a determinados padrões culturais presentes nas redes sociais, reduzindo a diversidade de referências acessadas no ambiente digital.

Portanto, é necessário promover um uso mais consciente das tecnologias digitais. Para isso, o Ministério da Educação, em parceria com as escolas, deve ampliar a educação midiática no ambiente escolar, por meio da criação de aulas, oficinas e campanhas educativas que expliquem, de maneira acessível, o funcionamento dos algoritmos, da publicidade direcionada e dos mecanismos de recomendação. Paralelamente, as plataformas digitais devem informar de forma mais clara os critérios utilizados para recomendar conteúdos e anúncios, por meio de avisos e ferramentas de controle acessíveis aos usuários. Com essas medidas, será possível ampliar a capacidade crítica da população diante das estratégias digitais, reduzir a influência excessiva dos algoritmos sobre o consumo e favorecer o contato com diferentes manifestações culturais`
  },
  {
    titulo: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
    tema: "Dissertativo-argumentativo", ano: "3º ano", data: "2026", notas: [200, 200, 200, 200, 200],
    texto: `Na obra O Patrimônio Cultural, o historiador francês Pierre Nora destaca o conceito de “lugares de memória”, espaços responsáveis por manter vivas lembranças e acontecimentos do passado. Sob essa perspectiva, os monumentos históricos brasileiros representam acontecimentos, culturas e costumes que fazem parte da formação do país. Entretanto, apesar de sua relevância para a preservação da memória nacional, esses espaços enfrentam dificuldades para serem conservados. Diante desse cenário, a insuficiência de investimentos públicos e a falta de conscientização da população configuram-se como importantes desafios para a preservação do patrimônio histórico nacional.

Em primeira análise, a falta de investimentos e de manutenção adequada constitui um dos principais obstáculos para a conservação dos monumentos históricos. Diversos prédios, igrejas, estátuas e outros patrimônios sofrem com a ação do tempo, problemas estruturais e deterioração, situações que poderiam ser reduzidas por meio de restaurações periódicas. Contudo, quando os recursos destinados à preservação são insuficientes, esses locais acabam se deteriorando e podem sofrer danos permanentes. Dessa maneira, a ausência de políticas públicas contínuas contribui para a perda de importantes elementos da história brasileira.

Ademais, a falta de conscientização da sociedade também prejudica a preservação do patrimônio histórico. Quando a população não reconhece a importância desses espaços, podem ocorrer atos de vandalismo, pichações e outras formas de depredação. Nesse contexto, a educação patrimonial torna-se importante para aproximar os cidadãos de sua própria história e mostrar a necessidade de preservar esses locais. Assim, a falta de conhecimento sobre o valor cultural dos monumentos contribui para sua desvalorização e conservação inadequada.

Em síntese, cabe ao Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), em parceria com os governos estaduais e municipais, ampliar os investimentos destinados à restauração e à manutenção dos monumentos históricos, por meio de projetos de conservação e fiscalização. Além disso, as escolas devem promover ações de educação patrimonial, como palestras e projetos sobre a história dos monumentos locais, a fim de conscientizar os estudantes sobre a importância desses patrimônios. Desse modo, será possível fortalecer a valorização da memória brasileira e contribuir para a preservação desses espaços para as futuras gerações`
  }
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
const total = (r) => (r.nota !== undefined ? r.nota : soma(r.notas));

/* ---------- Dados básicos na página ---------- */
$("#nomeAluno").textContent = NOME_ALUNO;
$("#mensagemFinal").textContent = MENSAGEM_FINAL;
document.title = `${NOME_ALUNO} | Formatura 2026`;

/* Quantidade de redações: atualiza o texto e o contador sozinho */
const lead = $("#redacoes .section-head .lead");
if (lead) lead.textContent = `As ${REDACOES.length} produções que escrevi nas aulas de Língua Portuguesa e Redação. Clique em um card para ler.`;
$$("[data-count]").forEach((el) => { if (el.dataset.count === "17") el.dataset.count = REDACOES.length; });

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
    (r.notas ? r.notas.map((v, i) => `<span class="pill" title="${esc(COMPETENCIAS[i].nome)}">${COMPETENCIAS[i].sigla}: ${v}</span>`).join("") : "");
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
if (REDACOES.every((r) => Array.isArray(r.notas))) renderEnem();
else $("#enem").classList.add("hidden");

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
