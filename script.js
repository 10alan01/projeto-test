
const NOTICIAS = [
  {
    id: 1,
    categoria: 'Tecnologia',
    titulo: 'Nova IA brasileira promete revolucionar o atendimento ao cliente',
    resumo: 'Modelo treinado com dados em português supera concorrentes internacionais em testes de compreensão de contexto.',
    conteudo: [
      'Uma startup brasileira apresentou nesta terça-feira um novo modelo de inteligência artificial voltado especificamente para o mercado nacional. Segundo os desenvolvedores, o sistema foi treinado com mais de 2 bilhões de textos em português, incluindo gírias regionais e expressões populares.',
      'Nos testes comparativos, a ferramenta acertou 94% das respostas em atendimentos simulados, superando modelos internacionais que costumam errar em contextos culturais brasileiros.',
      'A empresa afirma que o modelo será disponibilizado gratuitamente para pequenas e médias empresas durante os primeiros seis meses. Especialistas veem a iniciativa com otimismo, mas alertam para a necessidade de regulamentação clara.',
      'O lançamento acontece em um momento em que o debate sobre o uso ético da inteligência artificial ganha força no Congresso Nacional.'
    ],
    autor: 'Marina Costa',
    data: '2026-09-22',
    tempo: 4,
    imagem: 'https://picsum.photos/seed/ia/800/500',
    visualizacoes: 12800
  },
  {
    id: 2,
    categoria: 'Política',
    titulo: 'Congresso aprova projeto que amplia transparência em gastos públicos',
    resumo: 'Texto segue para sanção presidencial e prevê portal único com dados abertos de todos os órgãos federais.',
    conteudo: [
      'A Câmara dos Deputados aprovou nesta quarta-feira, por 312 votos a 98, o projeto que obriga todos os órgãos públicos federais a publicarem seus gastos em um portal unificado de dados abertos.',
      'A proposta determina que as informações sejam disponibilizadas em formato legível por máquina, permitindo que cidadãos e empresas criem aplicativos de fiscalização.',
      'O relator do projeto destacou que a medida representa um avanço histórico na luta contra a corrupção. "A transparência não é favor, é obrigação", afirmou durante a votação.',
      'Entidades de combate à corrupção comemoraram a aprovação, mas pediram celeridade na implementação, prevista para começar em janeiro do próximo ano.'
    ],
    autor: 'Rafael Almeida',
    data: '2026-09-21',
    tempo: 5,
    imagem: 'https://picsum.photos/seed/politica/800/500',
    visualizacoes: 9400
  },
  {
    id: 3,
    categoria: 'Esportes',
    titulo: 'Seleção brasileira garante vaga antecipada na próxima Copa',
    resumo: 'Com dois gols de Vini Jr., Brasil vence por 3 a 0 e confirma classificação com três rodadas de antecedência.',
    conteudo: [
      'A seleção brasileira fez uma exibição de gala na noite desta terça-feira e garantiu matematicamente sua vaga na próxima Copa do Mundo. O time venceu por 3 a 0 com dois gols de Vinícius Júnior e um de Rodrygo.',
      'Com o resultado, o Brasil chega a 28 pontos nas eliminatórias e não pode mais ser alcançado pelos concorrentes diretos. É a quarta classificação consecutiva com antecedência.',
      'O técnico comemorou a atuação coletiva e destacou a evolução defensiva da equipe, que não sofreu gols nas últimas cinco partidas.',
      'A torcida presente no estádio fez a festa e entoou cânticos que já projetam o hexacampeonato. O próximo compromisso é contra a Argentina, em novembro.'
    ],
    autor: 'Carlos Mendes',
    data: '2026-09-20',
    tempo: 3,
    imagem: 'https://picsum.photos/seed/futebol/800/500',
    visualizacoes: 21500
  },
  {
    id: 4,
    categoria: 'Economia',
    titulo: 'Inflação desacelera e abre espaço para corte de juros, dizem analistas',
    resumo: 'IPCA de agosto veio abaixo do esperado e mercado já projeta redução da Selic na próxima reunião do Copom.',
    conteudo: [
      'O Índice de Preços ao Consumidor Amplo (IPCA) de agosto surpreendeu positivamente o mercado ao registrar alta de apenas 0,12%, bem abaixo da mediana das projeções.',
      'Com o resultado, a inflação acumulada em 12 meses caiu para 3,8%, dentro da meta perseguida pelo Banco Central. Analistas já trabalham com a possibilidade de corte de 0,5 ponto na taxa Selic.',
      'O ministro da Fazenda comemorou os números e atribuiu a melhora ao controle fiscal e à queda nos preços dos alimentos.',
      'Para especialistas, o cenário é favorável, mas ainda exige cautela diante das incertezas no cenário internacional.'
    ],
    autor: 'Juliana Ferreira',
    data: '2026-09-19',
    tempo: 4,
    imagem: 'https://picsum.photos/seed/economia/800/500',
    visualizacoes: 7600
  },
  {
    id: 5,
    categoria: 'Cultura',
    titulo: 'Festival de cinema brasileiro bate recorde de público em São Paulo',
    resumo: 'Evento reuniu mais de 80 mil espectadores e premiou produções independentes de cinco estados.',
    conteudo: [
      'O Festival de Cinema Brasileiro encerrou sua edição deste ano com números históricos. Ao todo, 82 mil pessoas participaram das sessões gratuitas realizadas em cinco cinemas da capital paulista.',
      'O grande vencedor da noite foi o longa "Raízes do Sertão", que levou três prêmios, incluindo melhor filme e melhor direção. A obra retrata a vida de uma família de agricultores no interior de Minas Gerais.',
      'A organização destacou o crescimento da participação de jovens realizadores, com 40% das obras inscritas vindas de diretores estreantes.',
      'A próxima edição já tem data marcada e deve incluir uma mostra itinerante por cidades do Nordeste.'
    ],
    autor: 'Beatriz Nogueira',
    data: '2026-09-18',
    tempo: 3,
    imagem: 'https://picsum.photos/seed/cinema/800/500',
    visualizacoes: 5200
  },
  {
    id: 6,
    categoria: 'Ciência',
    titulo: 'Pesquisadores brasileiros identificam nova espécie de anfíbio na Amazônia',
    resumo: 'Animal de apenas 2 centímetros foi encontrado em área de preservação no Acre e já é considerado vulnerável.',
    conteudo: [
      'Uma equipe de pesquisadores da Universidade Federal do Acre anunciou a descoberta de uma nova espécie de sapo na Reserva Extrativista Chico Mendes. O animal mede cerca de 2 centímetros e possui coloração alaranjada vibrante.',
      'A espécie foi batizada em homenagem a uma liderança indígena local e passa a integrar a lista de animais ameaçados de extinção, devido à restrita área de ocorrência.',
      'Segundo os cientistas, a descoberta reforça a importância da preservação da floresta e demonstra que ainda há muito a ser catalogado na região.',
      'O estudo foi publicado em uma revista científica internacional e já desperta interesse de grupos de conservação.'
    ],
    autor: 'Dr. Paulo Ricardo',
    data: '2026-09-17',
    tempo: 5,
    imagem: 'https://picsum.photos/seed/ciencia/800/500',
    visualizacoes: 4100
  },
  {
    id: 7,
    categoria: 'Saúde',
    titulo: 'Campanha de vacinação atinge 85% do público-alvo e é prorrogada',
    resumo: 'Ministério da Saúde estende prazo por mais duas semanas para garantir cobertura em regiões remotas.',
    conteudo: [
      'O Ministério da Saúde anunciou a prorrogação da campanha nacional de vacinação por mais duas semanas. A decisão foi tomada após o índice de cobertura atingir 85% do público-alvo, ainda abaixo da meta de 95%.',
      'As regiões Norte e Nordeste apresentam os menores índices, e equipes móveis serão enviadas para áreas de difícil acesso.',
      'A pasta reforçou que a imunização é segura e essencial para evitar o retorno de doenças erradicadas.',
      'Postos de saúde em todo o país funcionarão em horário estendido até o encerramento da campanha.'
    ],
    autor: 'Camila Souza',
    data: '2026-09-16',
    tempo: 3,
    imagem: 'https://picsum.photos/seed/saude/800/500',
    visualizacoes: 6800
  },
  {
    id: 8,
    categoria: 'Mundo',
    titulo: 'Acordo climático internacional é assinado por 150 países',
    resumo: 'Tratado prevê redução drástica de emissões até 2040 e criação de fundo para países em desenvolvimento.',
    conteudo: [
      'Líderes de 150 países assinaram nesta segunda-feira um histórico acordo climático que estabelece metas mais ambiciosas para a redução de gases do efeito estufa. O documento prevê corte de 60% nas emissões até 2040.',
      'Além das metas, o tratado cria um fundo internacional de 200 bilhões de dólares para financiar projetos de transição energética em países em desenvolvimento.',
      'O Brasil teve papel de destaque nas negociações e conseguiu incluir mecanismos de proteção para florestas tropicais.',
      'Especialistas consideram o acordo um avanço, mas alertam que a eficácia dependerá da implementação efetiva por parte de cada nação.'
    ],
    autor: 'Fernanda Lima',
    data: '2026-09-15',
    tempo: 6,
    imagem: 'https://picsum.photos/seed/mundo/800/500',
    visualizacoes: 11200
  }
];

/* ---------- Estado da aplicação ---------- */
const estado = {
  categoria: 'Todas',
  busca: '',
  visiveis: 6,
  porPagina: 6,
  favoritos: JSON.parse(localStorage.getItem('favoritos') || '[]'),
  noticiaAtual: null
};

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatarData(iso) {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function dataHoje() {
  const d = new Date();
  const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  return `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

function numeroCompacto(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0','') + 'k';
  return n;
}

function escaparHTML(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* ---------- Renderização ---------- */
function categoriasUnicas() {
  return ['Todas', ...new Set(NOTICIAS.map(n => n.categoria))];
}

function renderCategorias() {
  const lista = $('#listaCategorias');
  lista.innerHTML = categoriasUnicas().map(cat => `
    <li>
      <button class="categoria-btn ${cat === estado.categoria ? 'ativa' : ''}"
              data-categoria="${cat}">${cat}</button>
    </li>
  `).join('');

  lista.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.categoria = btn.dataset.categoria;
      estado.visiveis = estado.porPagina;
      renderCategorias();
      renderGrade();
      $('#tituloSecao').textContent = estado.categoria === 'Todas'
        ? 'Últimas Notícias'
        : `Editoria: ${estado.categoria}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderLinksRodape() {
  $('#linksRodape').innerHTML = categoriasUnicas()
    .filter(c => c !== 'Todas')
    .map(c => `<li><a href="#" data-cat="${c}">${c}</a></li>`)
    .join('');

  $$('#linksRodape a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      estado.categoria = a.dataset.cat;
      estado.visiveis = estado.porPagina;
      renderCategorias();
      renderGrade();
      $('#tituloSecao').textContent = `Editoria: ${estado.categoria}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function noticiasFiltradas() {
  const busca = estado.busca.toLowerCase().trim();
  return NOTICIAS.filter(n => {
    const okCat = estado.categoria === 'Todas' || n.categoria === estado.categoria;
    const okBusca = !busca ||
      n.titulo.toLowerCase().includes(busca) ||
      n.resumo.toLowerCase().includes(busca) ||
      n.categoria.toLowerCase().includes(busca) ||
      n.autor.toLowerCase().includes(busca);
    return okCat && okBusca;
  });
}

function renderDestaque() {
  const destaque = $('#destaque');
  const noticia = noticiasFiltradas()[0];

  if (!noticia) { destaque.innerHTML = ''; return; }

  destaque.innerHTML = `
    <article class="destaque__card" data-id="${noticia.id}">
      <img class="destaque__img" src="${noticia.imagem}" alt="${escaparHTML(noticia.titulo)}">
      <div class="destaque__gradiente"></div>
      <div class="destaque__info">
        <span class="etiqueta">${noticia.categoria}</span>
        <h2 class="destaque__titulo">${escaparHTML(noticia.titulo)}</h2>
        <p class="destaque__resumo">${escaparHTML(noticia.resumo)}</p>
        <div class="card__meta" style="color:#fff;border-top-color:rgba(255,255,255,.2)">
          <span>✍️ ${noticia.autor}</span>
          <span>📅 ${formatarData(noticia.data)}</span>
          <span>⏱️ ${noticia.tempo} min</span>
        </div>
      </div>
    </article>
  `;

  destaque.querySelector('.destaque__card').addEventListener('click', () => abrirModal(noticia.id));
}

function cardHTML(n) {
  const favorito = estado.favoritos.includes(n.id);
  return `
    <article class="card" data-id="${n.id}">
      <div class="card__imagem-wrap">
        <img class="card__imagem" src="${n.imagem}" alt="${escaparHTML(n.titulo)}" loading="lazy">
        <button class="card__favorito ${favorito ? 'ativo' : ''}"
                data-favorito="${n.id}"
                aria-label="Favoritar notícia">${favorito ? '★' : '☆'}</button>
      </div>
      <div class="card__corpo">
        <span class="etiqueta">${n.categoria}</span>
        <h3 class="card__titulo">${escaparHTML(n.titulo)}</h3>
        <p class="card__resumo">${escaparHTML(n.resumo)}</p>
        <div class="card__meta">
          <span>✍️ ${n.autor}</span>
          <span>⏱️ ${n.tempo} min</span>
          <span>👁️ ${numeroCompacto(n.visualizacoes)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderGrade() {
  const grade = $('#gradeNoticias');
  const vazio = $('#mensagemVazia');
  const btnMais = $('#btnCarregar');
  const contador = $('#contadorResultados');

  const filtradas = noticiasFiltradas();
  const visiveis = filtradas.slice(0, estado.visiveis);

  contador.textContent = `${filtradas.length} ${filtradas.length === 1 ? 'notícia' : 'notícias'}`;

  if (filtradas.length === 0) {
    grade.innerHTML = '';
    vazio.hidden = false;
    btnMais.style.display = 'none';
    return;
  }

  vazio.hidden = true;
  grade.innerHTML = visiveis.map(cardHTML).join('');
  btnMais.style.display = estado.visiveis >= filtradas.length ? 'none' : 'inline-flex';

  grade.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-favorito]')) return;
      abrirModal(Number(card.dataset.id));
    });
  });

  grade.querySelectorAll('[data-favorito]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      alternarFavorito(Number(btn.dataset.favorito));
    });
  });
}

function renderMaisLidas() {
  const top = [...NOTICIAS]
    .sort((a, b) => b.visualizacoes - a.visualizacoes)
    .slice(0, 5);

  $('#maisLidas').innerHTML = top.map((n, i) => `
    <li data-id="${n.id}">
      <span class="mais-lidas__numero">${i + 1}</span>
      <span class="mais-lidas__titulo">${escaparHTML(n.titulo)}</span>
    </li>
  `).join('');

  $$('#maisLidas li').forEach(li => {
    li.addEventListener('click', () => abrirModal(Number(li.dataset.id)));
  });
}

function renderFavoritos() {
  const lista = $('#listaFavoritos');
  const favs = NOTICIAS.filter(n => estado.favoritos.includes(n.id));

  if (favs.length === 0) {
    lista.innerHTML = `<li class="favoritos__vazio">Nenhuma notícia salva ainda.</li>`;
    return;
  }

  lista.innerHTML = favs.map(n => `
    <li>
      <span class="favoritos__titulo" data-id="${n.id}">${escaparHTML(n.titulo)}</span>
      <button class="favoritos__remover" data-remover="${n.id}" aria-label="Remover">✕</button>
    </li>
  `).join('');

  lista.querySelectorAll('.favoritos__titulo').forEach(el => {
    el.addEventListener('click', () => abrirModal(Number(el.dataset.id)));
  });

  lista.querySelectorAll('[data-remover]').forEach(btn => {
    btn.addEventListener('click', () => alternarFavorito(Number(btn.dataset.remover)));
  });
}

function alternarFavorito(id) {
  const idx = estado.favoritos.indexOf(id);
  if (idx >= 0) estado.favoritos.splice(idx, 1);
  else estado.favoritos.push(id);

  localStorage.setItem('favoritos', JSON.stringify(estado.favoritos));
  renderGrade();
  renderFavoritos();

  if (estado.noticiaAtual && estado.noticiaAtual.id === id) {
    atualizarBtnFavoritarModal();
  }
}

/* ---------- Modal ---------- */
function abrirModal(id) {
  const n = NOTICIAS.find(x => x.id === id);
  if (!n) return;

  estado.noticiaAtual = n;

  $('#modalImagem').src = n.imagem;
  $('#modalImagem').alt = n.titulo;
  $('#modalCategoria').textContent = n.categoria;
  $('#modalTitulo').textContent = n.titulo;
  $('#modalMeta').innerHTML = `
    <span>✍️ Por ${n.autor}</span>
    <span>📅 ${formatarData(n.data)}</span>
    <span>⏱️ ${n.tempo} min de leitura</span>
    <span>👁️ ${numeroCompacto(n.visualizacoes)} leituras</span>
  `;
  $('#modalCorpo').innerHTML = n.conteudo.map(p => `<p>${escaparHTML(p)}</p>`).join('');

  const relacionadas = NOTICIAS
    .filter(x => x.categoria === n.categoria && x.id !== n.id)
    .slice(0, 4);

  $('#relacionadas').innerHTML = relacionadas.length ? `
    <h3>📌 Relacionadas em ${n.categoria}</h3>
    <div class="relacionadas__lista">
      ${relacionadas.map(r => `
        <div class="relacionadas__item" data-id="${r.id}">
          <img class="relacionadas__img" src="${r.imagem}" alt="">
          <span class="relacionadas__titulo">${escaparHTML(r.titulo)}</span>
        </div>
      `).join('')}
    </div>
  ` : '';

  $$('#relacionadas .relacionadas__item').forEach(el => {
    el.addEventListener('click', () => {
      abrirModal(Number(el.dataset.id));
      $('#modalCaixa')?.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('.modal__caixa').scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  atualizarBtnFavoritarModal();

  const modal = $('#modal');
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  $('#modal').hidden = true;
  document.body.style.overflow = '';
  $('#barraProgresso').style.width = '0%';
  estado.noticiaAtual = null;
}

function atualizarBtnFavoritarModal() {
  if (!estado.noticiaAtual) return;
  const ativo = estado.favoritos.includes(estado.noticiaAtual.id);
  const btn = $('#btnFavoritar');
  btn.textContent = ativo ? '★ Salva' : '☆ Salvar';
  btn.style.color = ativo ? 'var(--cor-primaria)' : '';
  btn.style.borderColor = ativo ? 'var(--cor-primaria)' : '';
}

/* ---------- Eventos globais ---------- */
function configurarEventos() {
  // Busca
  $('#formBusca').addEventListener('submit', (e) => {
    e.preventDefault();
    estado.busca = $('#campoBusca').value;
    estado.visiveis = estado.porPagina;
    renderDestaque();
    renderGrade();
  });

  $('#campoBusca').addEventListener('input', (e) => {
    estado.busca = e.target.value;
    estado.visiveis = estado.porPagina;
    renderDestaque();
    renderGrade();
  });

  // Limpar busca
  $('#btnLimparBusca').addEventListener('click', () => {
    estado.busca = '';
    estado.categoria = 'Todas';
    estado.visiveis = estado.porPagina;
    $('#campoBusca').value = '';
    $('#tituloSecao').textContent = 'Últimas Notícias';
    renderCategorias();
    renderDestaque();
    renderGrade();
  });

  // Carregar mais
  $('#btnCarregar').addEventListener('click', () => {
    estado.visiveis += estado.porPagina;
    renderGrade();
  });

  // Menu mobile
  $('#btnMenu').addEventListener('click', () => {
    const nav = $('#navegacao');
    const aberto = nav.classList.toggle('aberta');
    $('#btnMenu').setAttribute('aria-expanded', aberto);
    $('#btnMenu').textContent = aberto ? '✕' : '☰';
  });

  // Tema
  const temaSalvo = localStorage.getItem('tema') || 'claro';
  document.documentElement.setAttribute('data-tema', temaSalvo);
  $('#btnTema').textContent = temaSalvo === 'escuro' ? '☀️' : '🌙';

  $('#btnTema').addEventListener('click', () => {
    const atual = document.documentElement.getAttribute('data-tema');
    const novo = atual === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.setAttribute('data-tema', novo);
    localStorage.setItem('tema', novo);
    $('#btnTema').textContent = novo === 'escuro' ? '☀️' : '🌙';
  });

  // Modal: fechar
  $$('[data-fechar]').forEach(el => el.addEventListener('click', fecharModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#modal').hidden) fecharModal();
  });

  // Favoritar dentro do modal
  $('#btnFavoritar').addEventListener('click', () => {
    if (estado.noticiaAtual) alternarFavorito(estado.noticiaAtual.id);
  });

  // Compartilhar
  $('#btnCompartilhar').addEventListener('click', async () => {
    if (!estado.noticiaAtual) return;
    const texto = `${estado.noticiaAtual.titulo} — Portal Notícia Já`;
    try {
      if (navigator.share) {
        await navigator.share({ title: estado.noticiaAtual.titulo, text: texto, url: location.href });
      } else {
        await navigator.clipboard.writeText(`${texto}\n${location.href}`);
        alert('Link copiado para a área de transferência!');
      }
    } catch (err) {
      console.warn('Compartilhamento cancelado');
    }
  });

  // Newsletter
  $('#formNewsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#campoEmail').value.trim();
    const msg = $('#msgNewsletter');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      msg.textContent = '⚠️ Informe um e-mail válido.';
      msg.className = 'newsletter__msg erro';
      return;
    }

    msg.textContent = '✅ Inscrição confirmada! Verifique seu e-mail.';
    msg.className = 'newsletter__msg sucesso';
    $('#campoEmail').value = '';
  });

  // Barra de progresso dentro do modal
  document.querySelector('.modal__caixa').addEventListener('scroll', (e) => {
    const el = e.target;
    const total = el.scrollHeight - el.clientHeight;
    const pct = total > 0 ? (el.scrollTop / total) * 100 : 0;
    $('#barraProgresso').style.width = pct + '%';
  });

  // Logo volta ao topo
  $('#logo').addEventListener('click', (e) => {
    e.preventDefault();
    estado.categoria = 'Todas';
    estado.busca = '';
    estado.visiveis = estado.porPagina;
    $('#campoBusca').value = '';
    $('#tituloSecao').textContent = 'Últimas Notícias';
    renderCategorias();
    renderDestaque();
    renderGrade();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Inicialização ---------- */
function init() {
  $('#dataAtual').textContent = dataHoje();
  $('#anoAtual').textContent = new Date().getFullYear();

  renderCategorias();
  renderLinksRodape();
  renderDestaque();
  renderGrade();
  renderMaisLidas();
  renderFavoritos();
  configurarEventos();
}

document.addEventListener('DOMContentLoaded', init);
