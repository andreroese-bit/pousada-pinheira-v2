const WHATSAPP_NUMBER = "5548991642144";

const acomodacoes = [
  {
    id: 1,
    nome: "Suíte Master Guarda do Embaú",
    categoria: "vista-mar",
    tag: "Mais procurada",
    nota: "4,98",
    capacidade: "2 hóspedes • Cama King • Varanda com rede",
    preco: 580,
    descricao:
      "Vista panorâmica para o mar da Pinheira e nascer do sol direto da varanda privativa com rede artesanal.",
    comodidades: [
      "🌊 Vista para o mar",
      "❄️ Ar-condicionado Split",
      "☕ Café artesanal incluso",
      "📶 Wi-Fi 600Mb",
      '📺 Smart TV 50"',
    ],
    fotos: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: 2,
    nome: "Bangalô Pé na Areia Praia de Baixo",
    categoria: "pe-na-areia",
    tag: "Acesso direto à praia",
    nota: "4,95",
    capacidade: "3 hóspedes • Cama Queen + Sofá-cama",
    preco: 640,
    descricao:
      "Saia do seu deck privativo de madeira diretamente para a areia branca e calma da Praia de Baixo.",
    comodidades: [
      "👣 Pé na areia",
      "🌿 Deck privativo",
      "❄️ Ar-condicionado",
      "☕ Café incluso",
      "🧊 Frigobar retrô",
    ],
    fotos: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: 3,
    nome: "Chalé Vale da Utopia com Hidro",
    categoria: "hidro",
    tag: "Ideal para casais",
    nota: "5,00",
    capacidade: "2 hóspedes • Hidromassagem • Jardim privativo",
    preco: 720,
    descricao:
      "Banheira de hidromassagem dupla cercada pelo verde da Mata Atlântica para relaxar após as trilhas.",
    comodidades: [
      "🛁 Hidro dupla",
      "🍷 Adega climatizada",
      "❄️ Ar-condicionado",
      "☕ Café incluso",
    ],
    fotos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: 4,
    nome: "Casa Ponta do Papagaio Família",
    categoria: "familia",
    tag: "Espaço completo",
    nota: "4,92",
    capacidade: "5 hóspedes • 2 Suítes • Cozinha gourmet",
    preco: 850,
    descricao:
      "Conforto absoluto para famílias, com duas suítes amplas, espaço gourmet privativo e jardim arborizado.",
    comodidades: [
      "🏡 2 Suítes",
      "🍳 Cozinha gourmet",
      "🔥 Churrasqueira",
      "🚗 2 Vagas",
      "☕ Café incluso",
    ],
    fotos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: 5,
    nome: "Suíte Panorâmica Pedra do Urubu",
    categoria: "vista-mar",
    tag: "Nascer do sol",
    nota: "4,97",
    capacidade: "2 hóspedes • Terraço alto • Cama Super King",
    preco: 620,
    descricao:
      "No ponto mais alto da pousada, com vista desimpedida para toda a enseada da Pinheira e Ilha do Papagaio.",
    comodidades: [
      "🌅 Terraço panorâmico",
      "❄️ Ar-condicionado",
      "☕ Café incluso",
      "🍾 Espumante de boas-vindas",
    ],
    fotos: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: 6,
    nome: "Loft Jardim & Piscina Natural",
    categoria: "pe-na-areia",
    tag: "Novo • Design exclusivo",
    nota: "4,99",
    capacidade: "2 hóspedes • Acesso à piscina • Pergolado",
    preco: 550,
    descricao:
      "Arquitetura contemporânea em madeira e vidro cercada por jardins tropicais a poucos passos do mar.",
    comodidades: [
      "🏊 Acesso à piscina",
      "🌴 Pergolado privativo",
      "❄️ Ar-condicionado",
      "☕ Café incluso",
    ],
    fotos: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85",
    ],
  },
];

const grid = document.getElementById("rooms-grid");
const modal = document.getElementById("room-modal");
const modalBody = document.getElementById("modal-body");

function renderRooms(filtro = "todos") {
  const filtradas =
    filtro === "todos"
      ? acomodacoes
      : acomodacoes.filter((item) => item.categoria === filtro);

  grid.innerHTML = filtradas
    .map(
      (quarto) => `
    <article class="room-card" onclick="abrirModal(${quarto.id})">
      <div class="card-img-wrapper">
        <span class="card-tag">${quarto.tag}</span>
        <img id="img-${quarto.id}" src="${quarto.fotos[0]}" alt="${quarto.nome}" data-index="0">
        <button class="img-nav img-prev" onclick="trocarFoto(event, ${quarto.id}, -1)" aria-label="Anterior">‹</button>
        <button class="img-nav img-next" onclick="trocarFoto(event, ${quarto.id}, 1)" aria-label="Próxima">›</button>
      </div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${quarto.nome}</h3>
          <span class="card-rating">★ ${quarto.nota}</span>
        </div>
        <p class="card-meta">${quarto.capacidade}</p>
        <div class="card-footer">
          <p class="card-price"><strong>R$ ${quarto.preco}</strong> / noite</p>
          <span class="card-link">Ver detalhes →</span>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function trocarFoto(event, id, direcao) {
  event.stopPropagation();
  const quarto = acomodacoes.find((q) => q.id === id);
  const imgEl = document.getElementById(`img-${id}`);
  let idx = parseInt(imgEl.dataset.index, 10);
  idx = (idx + direcao + quarto.fotos.length) % quarto.fotos.length;
  imgEl.src = quarto.fotos[idx];
  imgEl.dataset.index = idx;
}

document.querySelectorAll(".cat-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderRooms(btn.dataset.category);
  });
});

function formatarDataBR(isoDate) {
  if (!isoDate) return "";
  const [ano, mes, dia] = isoDate.split("-");
  return `${dia}/${mes}/${ano}`;
}

function abrirModal(id) {
  const q = acomodacoes.find((item) => item.id === id);
  const hoje = new Date();
  const amanha = new Date(hoje);
  amanha.setDate(hoje.getDate() + 1);
  const depois = new Date(hoje);
  depois.setDate(hoje.getDate() + 3);

  const checkinPadrao = amanha.toISOString().split("T")[0];
  const checkoutPadrao = depois.toISOString().split("T")[0];

  modalBody.innerHTML = `
    <h2 style="font-size: 2rem; color: var(--primary);">${q.nome}</h2>
    <p style="color: var(--muted); font-size: 0.9rem;">★ ${
      q.nota
    } • Praia da Pinheira, Palhoça - SC</p>
    <div class="modal-gallery">
      <img src="${q.fotos[0]}" alt="${q.nome}">
      <img src="${q.fotos[1] || q.fotos[0]}" alt="${q.nome}">
    </div>
    <div class="modal-details">
      <div>
        <h3 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.1rem; color: var(--primary);">Sobre esta acomodação</h3>
        <p style="margin-top: 8px; color: #334155; font-size: 0.94rem;">${
          q.descricao
        }</p>
        <div class="amenities">
          ${q.comodidades.map((c) => `<span>${c}</span>`).join("")}
        </div>
      </div>
      <div class="booking-box">
        <p class="booking-price-head"><strong>R$ ${q.preco}</strong> / noite</p>
        <div class="date-grid">
          <div>
            <label for="checkin">Check-in</label>
            <input type="date" id="checkin" value="${checkinPadrao}" onchange="calcularReserva(${
    q.preco
  }, '${q.nome}')">
          </div>
          <div>
            <label for="checkout">Check-out</label>
            <input type="date" id="checkout" value="${checkoutPadrao}" onchange="calcularReserva(${
    q.preco
  }, '${q.nome}')">
          </div>
        </div>
        <label for="hospedes">Hóspedes</label>
        <select id="hospedes" onchange="calcularReserva(${q.preco}, '${
    q.nome
  }')">
          <option value="2 adultos">2 adultos</option>
          <option value="1 adulto">1 adulto</option>
          <option value="2 adultos e 1 criança">2 adultos + 1 criança</option>
          <option value="4 hóspedes">4 hóspedes</option>
        </select>
        <div class="total-line">
          <span id="resumo-noites">2 diárias</span>
          <span id="total-valor">R$ ${q.preco * 2}</span>
        </div>
        <a id="wpp-link" href="${gerarLinkWpp(
          q.nome,
          checkinPadrao,
          checkoutPadrao,
          2,
          q.preco * 2,
          "2 adultos"
        )}" target="_blank" class="btn-primary" style="width:100%;">
          Consultar no WhatsApp
        </a>
      </div>
    </div>
  `;
  modal.classList.add("open");
}

function calcularReserva(preco, nome) {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const hospedes = document.getElementById("hospedes").value;

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  const noites = diff > 0 ? diff : 1;
  const total = noites * preco;

  document.getElementById("resumo-noites").textContent = `${noites} ${
    noites === 1 ? "diária" : "diárias"
  }`;
  document.getElementById("total-valor").textContent = `R$ ${total}`;
  document.getElementById("wpp-link").href = gerarLinkWpp(
    nome,
    checkin,
    checkout,
    noites,
    total,
    hospedes
  );
}

function gerarLinkWpp(nome, checkin, checkout, noites, total, hospedes) {
  const periodo =
    checkin && checkout
      ? `de ${formatarDataBR(checkin)} a ${formatarDataBR(checkout)}`
      : "";
  const msg = encodeURIComponent(
    `Olá! Vim pelo site da Pousada Paraíso da Pinheira e gostaria de consultar disponibilidade para *${nome}* (${periodo} • ${noites} diárias • ${hospedes} • valor estimado R$ ${total}).`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

document
  .getElementById("close-modal")
  .addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

renderRooms();

// Calendário Agende sua Data
function inicializarAgendamentoRapido() {
  const inputIn = document.getElementById("qb-checkin");
  const inputOut = document.getElementById("qb-checkout");
  if (!inputIn || !inputOut) return;

  const hoje = new Date();
  const amanha = new Date(hoje);
  amanha.setDate(hoje.getDate() + 1);
  const depois = new Date(hoje);
  depois.setDate(hoje.getDate() + 3);

  const isoHoje = hoje.toISOString().split("T")[0];
  inputIn.min = isoHoje;
  inputOut.min = isoHoje;
  inputIn.value = amanha.toISOString().split("T")[0];
  inputOut.value = depois.toISOString().split("T")[0];

  atualizarResumoRapido();
}

function atualizarResumoRapido() {
  const quartoId = parseInt(document.getElementById("qb-quarto").value, 10);
  const checkin = document.getElementById("qb-checkin").value;
  const checkout = document.getElementById("qb-checkout").value;
  const estimateEl = document.getElementById("qb-estimate");

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  const noites = diff > 0 ? diff : 1;

  const quarto = acomodacoes.find((q) => q.id === quartoId);
  if (quarto) {
    const total = noites * quarto.preco;
    estimateEl.innerHTML = `<span>${noites} ${
      noites === 1 ? "diária" : "diárias"
    } • Estimativa:</span><strong>R$ ${total.toLocaleString("pt-BR")}</strong>`;
  } else {
    estimateEl.innerHTML = `<span>Período selecionado:</span><strong>${noites} ${
      noites === 1 ? "diária" : "diárias"
    }</strong>`;
  }
}

function enviarAgendamentoRapido(event) {
  event.preventDefault();
  const quartoId = parseInt(document.getElementById("qb-quarto").value, 10);
  const checkin = document.getElementById("qb-checkin").value;
  const checkout = document.getElementById("qb-checkout").value;
  const hospedes = document.getElementById("qb-hospedes").value;

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  const noites = diff > 0 ? diff : 1;

  const quarto = acomodacoes.find((q) => q.id === quartoId);
  const nomeQuarto = quarto ? quarto.nome : "qualquer acomodação disponível";
  const valorTexto = quarto
    ? ` • valor estimado R$ ${(noites * quarto.preco).toLocaleString("pt-BR")}`
    : "";

  const msg = encodeURIComponent(
    `Olá! Vim pelo site da Pousada Paraíso da Pinheira e gostaria de agendar minha data:\n` +
      `• Acomodação: *${nomeQuarto}*\n` +
      `• Check-in: ${formatarDataBR(checkin)}\n` +
      `• Check-out: ${formatarDataBR(checkout)} (${noites} ${
        noites === 1 ? "diária" : "diárias"
      })\n` +
      `• Hóspedes: ${hospedes}${valorTexto}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

inicializarAgendamentoRapido();
