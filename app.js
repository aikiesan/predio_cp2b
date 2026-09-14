const GITHUB_REPO = "aikiesan/predio_cp2b";
const asset = (name) => `assets/concepts/${name}`;
const realPhoto = (name) => `assets/photos/${name}`;

const PHOTOSETS = {
  entrance: ["entrada-img8741.webp", "fachada-01.webp", "fachada-02.webp", "placa-cp2b.webp"],
  hall: ["hall-img8733.webp", "recepcao-visita-01.webp", "recepcao-visita-02.webp"],
  lobby: ["lobby-img8734.webp", "hall-escada-20250806.webp"],
  cafe: ["cafe-img8708.webp"],
  corridor: ["corredor-img8725.webp", "corredor-img8727.webp", "corredor-20250806.webp"],
  lab01: ["lab-visita-01.webp", "lab-visita-02.webp"],
  lab02: ["lab-img8703.webp"],
  labTechnical: ["lab-img8705.webp"],
  reactors: ["lab-operacao-01.webp", "lab-operacao-02.webp", "reator-operacao-01.webp", "reator-operacao-02.webp"],
  auditorium: ["auditorio-img8715.webp"],
  office: ["escritorio-img8718.webp", "escritorio-img8719.webp"],
  upperRooms: ["sala-vazia-01.webp", "sala-vazia-02.webp"],
};

const concept = (id, title, image, description = "Compare materiais, mobiliário, iluminação e organização espacial desta alternativa.") => ({
  id, title, image: asset(image), description,
});

const fourOptions = (prefix, titles, description) => titles.map((title, index) =>
  concept(`${prefix}-${index + 1}`, title, `${prefix}-${String(index + 1).padStart(2, "0")}.webp`, description)
);

const halls = fourOptions("hall-terreo", [
  "Recepção essencial", "Recepção minimalista", "Galeria científica", "Recepção social",
], "Conceito para o hall de recepção do térreo, com a caixa existente retirada e circulação central preservada.");

const lobby = fourOptions("lobby-elevador", [
  "Identidade institucional", "Wayfinding minimalista", "Portal em madeira e azul", "Galeria analítica",
], "Tratamento do lobby preservando elevador, portas, rota tátil e circulação acessível.");

const cafe = [
  ...fourOptions("cafe", ["Café integrado", "Armários fechados", "Bar para dois lugares", "Ponto social verde"], "Copa de apoio com os pontos hidráulicos e acessos aos sanitários preservados."),
  concept("cafe-5", "Estudo inicial", "cafe-original.webp", "Primeiro estudo do ponto de café e convivência."),
];

const entrance = [
  ...fourOptions("entrada", ["Entrada institucional", "Portal minimalista", "Aletas verticais", "Grafismo no vidro"], "Intervenção na entrada sem alterar a geometria da fachada, o brise ou a rota acessível."),
  concept("entrada-5", "Estudo inicial", "entrada-original.webp", "Primeiro estudo de identidade da entrada principal."),
];

const floors = [
  {
    id: "terreo",
    number: "T",
    shortName: "Térreo",
    title: "Laboratórios e acesso principal",
    plan: "assets/plans/terreo.png",
    rooms: [
      { id: "entrada-principal", name: "Entrada principal", area: "Acesso externo", x: 21.5, y: 68, concepts: entrance },
      { id: "hall-terreo", name: "Hall de recepção", area: "60,60 m²", x: 18.6, y: 57.5, concepts: halls },
      { id: "cafe", name: "Café e convivência", area: "Área de apoio", x: 20.5, y: 39.5, concepts: cafe },
      { id: "lobby-elevador", name: "Lobby do elevador", area: "Circulação vertical", x: 10.5, y: 43.5, concepts: lobby },
      { id: "lab-analitica-01", name: "Lab Analítica 01", area: "49,80 m²", x: 35.5, y: 45.2, concepts: [concept("lab-analitica-01-1", "Laboratório instrumental", "lab-analitica-01.webp", "Laboratório de química analítica com áreas para GC-MS, HPLC, TOC e análise de gases.")] },
      { id: "lab-estufa-mufla", name: "Lab Estufa–Mufla", area: "47,50 m²", x: 61.8, y: 45.2, concepts: [concept("lab-estufa-mufla-1", "Laboratório térmico", "lab-estufa-mufla.webp", "Organização proposta para estufas, muflas, apoio técnico e circulação segura.")] },
      { id: "lab-fq-01", name: "Lab Físico-Química 01", area: "36,50 m²", x: 42.7, y: 61.2, concepts: [concept("lab-fq-01-1", "Laboratório físico-químico", "lab-fq-01.webp")] },
      { id: "lab-reatores", name: "Lab Reatores", area: "50,50 m²", x: 63.1, y: 58.5, concepts: [concept("lab-reatores-1", "Laboratório de reatores", "lab-reatores.webp", "Ambiente técnico para biodigestores, reatores e infraestrutura de gases.")] },
      { id: "corredor-terreo", name: "Corredor", area: "29,68 m²", x: 45.2, y: 53.8, concepts: [concept("corredor-1", "Linha do biogás", "corredor.webp", "Identidade ambiental inspirada no fluxo do biogás e do biometano.")] },
    ],
  },
  {
    id: "primeiro-pavimento",
    number: "1",
    shortName: "1º pavimento",
    title: "Laboratórios, almoxarifado e auditório",
    plan: "assets/plans/primeiro-pavimento.png",
    rooms: [
      { id: "lab-analitica-02", name: "Lab Analítica 02", area: "28,00 m²", x: 34.4, y: 45.2, concepts: fourOptions("lab-analitica-02", ["Bancada central", "Bancadas perimetrais", "Mesa móvel", "Laboratório instrumental"], "Variações de bancada para instrumentação analítica mantendo a geometria fotografada.") },
      { id: "lab-analitica-tecnico", name: "Lab Analítica + Técnico", area: "28,35 m²", x: 50.4, y: 45.2, concepts: fourOptions("lab-analitica-tecnico", ["Configuração integrada", "Bancada linear", "Bancada em península", "Análise e dados"], "Alternativas para integrar análise instrumental e posto técnico.") },
      { id: "lab-fq-02", name: "Lab Físico-Química 02", area: "36,50 m²", x: 34.4, y: 62, concepts: [concept("lab-fq-02-1", "Laboratório físico-químico", "lab-fq-02.webp")] },
      { id: "almoxarifado", name: "Almoxarifado", area: "33,50 m²", x: 50.3, y: 62, concepts: fourOptions("almoxarifado", ["Armazenamento técnico", "Armários fechados", "Armários e mesa móvel", "Bancada de apoio"], "Almoxarifado com a mesma volumetria do Laboratório 02, sem linguagem de galpão industrial.") },
      { id: "auditorio", name: "Auditório", area: "67,50 m²", x: 67.3, y: 53, concepts: [
        concept("auditorio-1", "Auditório institucional", "auditorio-01.webp"),
        concept("auditorio-2", "Auditório sobre a foto", "auditorio-02.webp", "Alternativa ajustada à fotografia real do ambiente."),
      ] },
      { id: "corredor-primeiro", name: "Corredor", area: "29,68 m²", x: 44, y: 54.5, concepts: [concept("corredor-1", "Linha do biogás", "corredor.webp")] },
    ],
  },
  {
    id: "segundo-pavimento",
    number: "2",
    shortName: "2º pavimento",
    title: "Escritórios, reuniões e colaboração",
    plan: "assets/plans/segundo-pavimento.png",
    rooms: [
      { id: "sala-adm-01", name: "Sala Adm 01", area: "14,72 m²", x: 28.7, y: 44.8, concepts: [concept("coordenacao-1", "Coordenação", "coordenacao.webp")] },
      { id: "sala-adm-02", name: "Sala Adm 02", area: "14,72 m²", x: 36.2, y: 44.8, concepts: [concept("coordenacao-1", "Coordenação", "coordenacao.webp")] },
      { id: "sala-pq-01", name: "Sala PQ 01", area: "14,72 m²", x: 44.2, y: 44.8, concepts: [concept("escritorio-pq-1", "Escritório para pesquisadores", "escritorio-pq.webp")] },
      { id: "sala-pq-02", name: "Sala PQ 02", area: "14,72 m²", x: 52, y: 44.8, concepts: [concept("escritorio-pq-1", "Escritório para pesquisadores", "escritorio-pq.webp")] },
      { id: "cowork-01", name: "Cowork 01", area: "14,72 m²", x: 61, y: 44.8, concepts: [
        concept("cowork-01-1", "Cowork compacto", "cowork-01a.webp"),
        concept("cowork-01-2", "Estações rotacionadas", "cowork-01b.webp"),
        concept("cowork-01-3", "Estações lineares", "cowork-01c.webp"),
      ] },
      { id: "descompressao", name: "Sala Descompressão", area: "14,72 m²", x: 70.4, y: 44.8, concepts: [
        concept("descompressao-1", "Estar flexível", "descompressao-01.webp"),
        concept("descompressao-2", "Pufes e descanso", "descompressao-02.webp"),
        concept("descompressao-3", "Cortina e jogos", "descompressao-03.webp"),
      ] },
      { id: "reuniao-01", name: "Reunião 01", area: "14,72 m²", x: 28.7, y: 61.4, concepts: [concept("reuniao-01-1", "Sala de reunião", "reuniao-01.webp")] },
      { id: "reuniao-02", name: "Reunião 02", area: "14,72 m²", x: 36.3, y: 61.4, concepts: [concept("reuniao-02-1", "Sala de reunião", "reuniao-02.webp")] },
      { id: "escritorio-bruna", name: "Escritório Bruna", area: "14,72 m²", x: 44.3, y: 61.4, concepts: [concept("escritorio-bruna-1", "Escritório Bruna", "escritorio-bruna.webp")] },
      { id: "escritorio-renata", name: "Escritório Renata", area: "14,72 m²", x: 52, y: 61.4, concepts: [concept("escritorio-renata-1", "Escritório Renata", "escritorio-renata.webp")] },
      { id: "cowork-02", name: "Cowork 02", area: "14,72 m²", x: 61, y: 61.4, concepts: [concept("cowork-02-1", "Cowork 02", "cowork-02.webp")] },
      { id: "cowork-03", name: "Cowork 03", area: "14,72 m²", x: 70.4, y: 61.4, concepts: [concept("cowork-03-1", "Cowork 03", "cowork-03.webp")] },
      { id: "hall-superior", name: "Hall de recepção", area: "60,60 m²", x: 18.6, y: 57.2, concepts: [concept("hall-superior-1", "Hub de colaboração", "hall-superior.webp")] },
      { id: "corredor-segundo", name: "Corredor", area: "29,68 m²", x: 44.4, y: 54.6, concepts: [concept("corredor-1", "Linha do biogás", "corredor.webp")] },
    ],
  },
];

const ROOM_PHOTOSETS = {
  "entrada-principal": "entrance", "hall-terreo": "hall", cafe: "cafe", "lobby-elevador": "lobby",
  "lab-analitica-01": "lab01", "lab-estufa-mufla": "labTechnical", "lab-fq-01": "lab01",
  "lab-reatores": "reactors", "corredor-terreo": "corridor",
  "lab-analitica-02": "lab02", "lab-analitica-tecnico": "labTechnical", "lab-fq-02": "lab02",
  almoxarifado: "lab02", auditorio: "auditorium", "corredor-primeiro": "corridor",
  "sala-adm-01": "office", "sala-adm-02": "upperRooms", "sala-pq-01": "office", "sala-pq-02": "upperRooms",
  "cowork-01": "upperRooms", descompressao: "upperRooms", "reuniao-01": "upperRooms", "reuniao-02": "upperRooms",
  "escritorio-bruna": "office", "escritorio-renata": "office", "cowork-02": "upperRooms", "cowork-03": "upperRooms",
  "hall-superior": "lobby", "corredor-segundo": "corridor",
};

floors.forEach((floor) => floor.rooms.forEach((room) => {
  const setName = ROOM_PHOTOSETS[room.id];
  room.photos = (PHOTOSETS[setName] || PHOTOSETS.upperRooms).map(realPhoto);
  room.photoAssociation = ["upperRooms", "office"].includes(setName) ? "Associação provisória" : "Foto real do ambiente";
}));

const PROGRAM_TEMPLATES = {
  pq: { type: "Sala de pesquisadores", status: "Base definida", capacity: "3 postos", furniture: ["3 mesas de trabalho", "3 cadeiras ergonômicas", "Estantes e apoio para documentos", "Decoração e plantas"] },
  adm: { type: "Sala administrativa", status: "Base definida", capacity: "2 postos", furniture: ["2 mesas de trabalho", "2 cadeiras ergonômicas", "Estantes e arquivo", "Decoração e plantas"] },
  coordinator: { type: "Escritório de coordenação", status: "Base definida", capacity: "1 coordenador + 3 visitantes", furniture: ["1 mesa executiva", "1 cadeira presidencial com apoio lombar", "3 cadeiras de atendimento", "Estantes e espaços de apoio", "Decoração e plantas"] },
  meeting: { type: "Sala de reunião", status: "Base definida", capacity: "7–8 pessoas", furniture: ["1 mesa de reunião para 8", "8 cadeiras", "TV 65 polegadas", "Câmera Logitech para reuniões", "Microfone de sala"] },
  cowork: { type: "Coworking", status: "Base definida", capacity: "6 postos", furniture: ["Bancada modular 3 + 3", "6 cadeiras ergonômicas", "6 suportes para monitor", "1 quadro para notas e discussões", "6 guarda-volumes para bolsas"] },
  decompression: { type: "Descompressão", status: "Estimativa inicial", capacity: "Até 6 pessoas", furniture: ["6 pufes", "1 tapete grande", "TV de 55–65 polegadas", "1 móvel baixo para TV", "2 mesas laterais", "Estante baixa, decoração e plantas"] },
  lab: { type: "Laboratório", status: "Estimativa de mobiliário", capacity: "4 postos técnicos", furniture: ["4 cadeiras ou bancos laboratoriais reguláveis", "1 carrinho técnico móvel", "2 armários técnicos", "Bancadas e gabinetes a quantificar em metros lineares"] },
  auditorium: { type: "Auditório", status: "Base definida", capacity: "40 pessoas", furniture: ["40 cadeiras", "1 púlpito ou apoio para palestrante", "2 mesas de apoio", "1 móvel técnico para audiovisual", "Posições acessíveis a validar no layout"] },
  storage: { type: "Almoxarifado", status: "Estimativa inicial", capacity: "2 postos de apoio", furniture: ["10 módulos de estantes", "2 armários fechados com chave", "1 mesa de conferência", "2 cadeiras", "2 carrinhos de transporte"] },
  cafe: { type: "Café e convivência", status: "Estimativa inicial", capacity: "8 lugares", furniture: ["1 mesa para quatro pessoas", "4 cadeiras", "1 balcão alto", "4 banquetas", "Aparador, armários e lixeira seletiva"] },
  reception: { type: "Hall de recepção", status: "Estimativa inicial", capacity: "10 visitantes + 2 atendentes", furniture: ["1 balcão de recepção", "2 cadeiras ergonômicas", "2 sofás de dois lugares", "6 poltronas", "1 mesa de centro e 2 laterais", "Aparador, comunicação institucional e plantas"] },
  lobby: { type: "Lobby e circulação vertical", status: "Estimativa inicial", capacity: "3 lugares", furniture: ["1 banco para três pessoas", "1 console ou painel informativo", "1 vaso de destaque"] },
  upperHall: { type: "Hall colaborativo", status: "Estimativa inicial", capacity: "14 lugares", furniture: ["2 sofás de dois lugares", "6 poltronas", "3 mesas baixas", "1 mesa alta colaborativa", "4 banquetas", "Painéis de comunicação e plantas"] },
  corridor: { type: "Circulação", status: "Sem mobiliário previsto", capacity: "Circulação livre", furniture: ["Manter rotas e portas desobstruídas", "Somente sinalização e comunicação de parede"] },
  entrance: { type: "Acesso externo", status: "Conceito em desenvolvimento", capacity: "Acesso principal", furniture: ["Sinalização institucional", "Paisagismo e iluminação de apoio", "Banco externo somente após validação da circulação"] },
};

function roomProgram(room) {
  if (room.id.startsWith("sala-pq")) return PROGRAM_TEMPLATES.pq;
  if (room.id.startsWith("sala-adm")) return PROGRAM_TEMPLATES.adm;
  if (["escritorio-bruna", "escritorio-renata"].includes(room.id)) return PROGRAM_TEMPLATES.coordinator;
  if (room.id.startsWith("reuniao")) return PROGRAM_TEMPLATES.meeting;
  if (room.id.startsWith("cowork")) return PROGRAM_TEMPLATES.cowork;
  if (room.id === "descompressao") return PROGRAM_TEMPLATES.decompression;
  if (room.id.startsWith("lab-")) return {
    ...PROGRAM_TEMPLATES.lab,
    technicalContext: room.id === "lab-reatores"
      ? "Biodigestores, reatores e infraestrutura de gases para biogás e biometano."
      : "Química analítica: GC-MS Shimadzu, HPLC, TOC e sistemas de análise de gases.",
  };
  if (room.id === "auditorio") return PROGRAM_TEMPLATES.auditorium;
  if (room.id === "almoxarifado") return PROGRAM_TEMPLATES.storage;
  if (room.id === "cafe") return PROGRAM_TEMPLATES.cafe;
  if (room.id === "hall-terreo") return PROGRAM_TEMPLATES.reception;
  if (room.id === "lobby-elevador") return PROGRAM_TEMPLATES.lobby;
  if (room.id === "hall-superior") return PROGRAM_TEMPLATES.upperHall;
  if (room.id.startsWith("corredor")) return PROGRAM_TEMPLATES.corridor;
  return PROGRAM_TEMPLATES.entrance;
}

floors.forEach((floor) => floor.rooms.forEach((room) => { room.program = roomProgram(room); }));

const PROJECT_TOTALS = [
  ["29", "espaços mapeados"], ["25", "ambientes mobiliáveis"], ["13", "tipologias"],
  ["7", "laboratórios"], ["92", "assentos confirmados"], ["28", "assentos laboratoriais estimados"],
];

const FURNITURE_TOTALS = [
  ["Mesas individuais", "12", "PQ, Administração e Coordenação"],
  ["Estações de coworking", "18", "3 conjuntos modulares de 6 postos"],
  ["Mesas de reunião", "2", "8 lugares cada"],
  ["Assentos confirmados", "92", "Inclui 40 lugares do auditório"],
  ["Estantes", "4 conjuntos", "Administração e Coordenação"],
  ["Guarda-volumes", "18", "Um para cada posto de coworking"],
  ["Suportes de monitor", "18", "Coworking"],
  ["Quadros de discussão", "3", "Um por coworking"],
  ["TVs", "3", "2 de reunião + 1 de descompressão"],
  ["Kits de videoconferência", "2", "Câmera Logitech + microfone"],
];

const state = {
  floorIndex: 0,
  room: null,
  conceptIndex: 0,
  votes: new Map(),
  planZoom: 1,
  imageZoom: 1,
  imageX: 0,
  imageY: 0,
  dragging: false,
  pointerX: 0,
  pointerY: 0,
};

const $ = (selector) => document.querySelector(selector);
const floorNav = $("#floorNav");
const roomList = $("#roomList");
const floorPlan = $("#floorPlan");
const hotspotLayer = $("#hotspotLayer");
const galleryDialog = $("#galleryDialog");
const programDialog = $("#programDialog");
const viewerImage = $("#viewerImage");
const imagePan = $("#imagePan");
const photoPreview = $("#photoPreview");
const photoPreviewImage = $("#photoPreviewImage");
let photoPreviewTimer;
let photoPreviewIndex = 0;
let previewRoom = null;

function cameraIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 8.5h3l1.7-2.5h7.6l1.7 2.5h3v10h-17z"/><circle cx="12" cy="13.5" r="3.5"/></svg>`;
}

function renderFloorNav() {
  floorNav.innerHTML = floors.map((floor, index) => `
    <button type="button" class="floor-button ${index === state.floorIndex ? "active" : ""}" data-floor="${index}" aria-pressed="${index === state.floorIndex}">
      <span class="floor-number">${floor.number}</span>
      <strong>${floor.shortName}</strong>
      <small>${floor.rooms.length}</small>
    </button>
  `).join("");
}

function renderFloor() {
  const floor = floors[state.floorIndex];
  renderFloorNav();
  $("#floorKicker").textContent = floor.shortName;
  $("#floorTitle").textContent = floor.title;
  $("#roomCount").textContent = floor.rooms.length;
  $("#footerCount").textContent = floor.rooms.length;
  floorPlan.src = floor.plan;
  floorPlan.alt = `Planta baixa — ${floor.shortName}: ${floor.title}`;

  roomList.innerHTML = floor.rooms.map((room) => `
    <button type="button" class="room-item" data-room="${room.id}" data-preview-room="${room.id}">
      <span><span class="room-name">${room.name}</span><span class="room-area">${room.area}</span></span>
      <span class="room-options">${room.concepts.length} ${room.concepts.length === 1 ? "opção" : "opções"}</span>
    </button>
  `).join("");

  hotspotLayer.innerHTML = floor.rooms.map((room) => `
    <button type="button" class="hotspot" data-room="${room.id}" data-preview-room="${room.id}" style="left:${room.x}%;top:${room.y}%" aria-label="Abrir conceitos de ${room.name}, ${room.area}">
      ${cameraIcon()}
      <span class="hotspot-label"><strong>${room.name}</strong><span>${room.area} · ${room.concepts.length} ${room.concepts.length === 1 ? "opção" : "opções"}</span></span>
    </button>
  `).join("");
  applyPlanZoom();
}

function findRoom(roomId) {
  return floors[state.floorIndex].rooms.find((room) => room.id === roomId);
}

function positionPhotoPreview(anchor) {
  const anchorRect = anchor.getBoundingClientRect();
  const previewRect = photoPreview.getBoundingClientRect();
  const gap = 16;
  let left = anchorRect.right + gap;
  if (left + previewRect.width > window.innerWidth - gap) left = anchorRect.left - previewRect.width - gap;
  left = Math.max(gap, Math.min(left, window.innerWidth - previewRect.width - gap));
  let top = anchorRect.top + anchorRect.height / 2 - previewRect.height / 2;
  top = Math.max(gap, Math.min(top, window.innerHeight - previewRect.height - gap));
  photoPreview.style.left = `${left}px`;
  photoPreview.style.top = `${top}px`;
}

function renderPhotoPreviewFrame() {
  if (!previewRoom) return;
  const total = previewRoom.photos.length;
  photoPreviewImage.src = previewRoom.photos[photoPreviewIndex % total];
  photoPreviewImage.alt = `Foto real — ${previewRoom.name}`;
  $("#photoPreviewCounter").textContent = total > 1 ? `${(photoPreviewIndex % total) + 1}/${total}` : "";
}

function showPhotoPreview(anchor, room) {
  if (!room?.photos?.length || window.matchMedia("(hover: none)").matches) return;
  clearInterval(photoPreviewTimer);
  previewRoom = room;
  photoPreviewIndex = 0;
  $("#photoPreviewTitle").textContent = room.name;
  $("#photoPreviewMeta").textContent = `${room.area} · ${room.photoAssociation}`;
  renderPhotoPreviewFrame();
  photoPreview.setAttribute("aria-hidden", "false");
  photoPreview.classList.add("show");
  requestAnimationFrame(() => positionPhotoPreview(anchor));
  if (room.photos.length > 1) {
    photoPreviewTimer = setInterval(() => {
      photoPreviewIndex += 1;
      renderPhotoPreviewFrame();
    }, 2100);
  }
}

function hidePhotoPreview() {
  clearInterval(photoPreviewTimer);
  photoPreview.classList.remove("show");
  photoPreview.setAttribute("aria-hidden", "true");
  previewRoom = null;
}

function openGallery(room, conceptIndex = 0) {
  state.room = room;
  state.conceptIndex = Math.max(0, Math.min(conceptIndex, room.concepts.length - 1));
  resetImageZoom();
  renderGallery();
  if (!galleryDialog.open) galleryDialog.showModal();
  updateHash();
}

function closeGallery() {
  galleryDialog.close();
  state.room = null;
  history.replaceState(null, "", location.pathname + location.search + `#${floors[state.floorIndex].id}`);
}

function renderGallery() {
  const floor = floors[state.floorIndex];
  const room = state.room;
  const selected = room.concepts[state.conceptIndex];
  $("#galleryFloor").textContent = floor.shortName;
  $("#galleryRoom").textContent = room.name;
  $("#galleryMeta").textContent = `${room.area} · ${room.concepts.length} ${room.concepts.length === 1 ? "conceito" : "conceitos"}`;
  $("#conceptPosition").textContent = `Opção ${state.conceptIndex + 1} de ${room.concepts.length}`;
  $("#conceptTitle").textContent = selected.title;
  $("#conceptDescription").textContent = selected.description;
  $("#roomProgram").innerHTML = `
    <div class="room-program-heading"><span>Ficha do ambiente</span><strong>${room.program.status}</strong></div>
    <div class="room-program-meta"><span>${room.program.type}</span><span>${room.program.capacity}</span></div>
    ${room.program.technicalContext ? `<p>${room.program.technicalContext}</p>` : ""}
    <ul>${room.program.furniture.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  $("#conceptVotes").textContent = voteCount(room.id, selected.id);
  viewerImage.src = selected.image;
  viewerImage.alt = `${room.name} — ${selected.title}`;
  $("#thumbnailList").innerHTML = room.concepts.map((item, index) => `
    <button type="button" class="thumbnail ${index === state.conceptIndex ? "active" : ""}" data-concept="${index}" aria-label="Ver ${item.title}" aria-pressed="${index === state.conceptIndex}">
      <img src="${item.image}" alt="" loading="lazy" />
      <span>${voteCount(room.id, item.id)}</span>
    </button>
  `).join("");
  const multiple = room.concepts.length > 1;
  $("#previousConcept").hidden = !multiple;
  $("#nextConcept").hidden = !multiple;
  applyImageTransform();
}

function renderProgram() {
  $("#programTotals").innerHTML = PROJECT_TOTALS.map(([value, label]) => `
    <article class="program-total"><strong>${value}</strong><span>${label}</span></article>
  `).join("");
  $("#furnitureTotals").innerHTML = FURNITURE_TOTALS.map(([item, total, note]) => `
    <tr><th scope="row">${item}</th><td>${total}</td><td>${note}</td></tr>
  `).join("");
  $("#programFloors").innerHTML = floors.map((floor) => `
    <section class="program-floor">
      <header><div><span>${floor.shortName}</span><h3>${floor.title}</h3></div><strong>${floor.rooms.length} ambientes</strong></header>
      <div class="program-room-grid">
        ${floor.rooms.map((room) => `
          <article class="program-room-card">
            <div class="program-room-title"><div><h4>${room.name}</h4><span>${room.area}</span></div><span class="program-status">${room.program.status}</span></div>
            <div class="program-room-meta"><span>${room.program.type}</span><strong>${room.program.capacity}</strong></div>
            ${room.program.technicalContext ? `<p>${room.program.technicalContext}</p>` : ""}
            <ul>${room.program.furniture.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function openProgram() {
  hidePhotoPreview();
  renderProgram();
  if (!programDialog.open) programDialog.showModal();
}

function closeProgram() { programDialog.close(); }

function changeConcept(delta) {
  if (!state.room) return;
  const total = state.room.concepts.length;
  state.conceptIndex = (state.conceptIndex + delta + total) % total;
  resetImageZoom();
  renderGallery();
  updateHash();
}

function selectConcept(index) {
  state.conceptIndex = index;
  resetImageZoom();
  renderGallery();
  updateHash();
}

function voteCount(roomId, conceptId) {
  return state.votes.get(`${roomId}:${conceptId}`) || 0;
}

function createVoteUrl() {
  const floor = floors[state.floorIndex];
  const room = state.room;
  const selected = room.concepts[state.conceptIndex];
  const title = `[VOTO] ${room.name} — ${selected.title}`;
  const body = [
    `**Pavimento:** ${floor.shortName}`,
    `**Ambiente:** ${room.name}`,
    `**Área:** ${room.area}`,
    `**Conceito escolhido:** ${selected.title}`,
    "",
    "Este registro representa um voto a favor do conceito acima.",
    "",
    `<!-- vote:${room.id}:${selected.id} -->`,
  ].join("\n");
  return `https://github.com/${GITHUB_REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}

function registerVote() {
  const url = createVoteUrl();
  window.open(url, "_blank", "noopener,noreferrer");
  const selected = state.room.concepts[state.conceptIndex];
  localStorage.setItem(`cp2b-pending-${state.room.id}`, selected.id);
  showToast("Voto preparado no GitHub. Confirme o envio para ele entrar na contagem.");
}

async function loadVotes() {
  const status = $("#syncStatus");
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues?state=all&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error("GitHub indisponível");
    const issues = await response.json();
    const seen = new Set();
    const votes = new Map();
    for (const issue of issues) {
      if (issue.pull_request || !issue.body) continue;
      const match = issue.body.match(/<!--\s*vote:([a-z0-9-]+):([a-z0-9-]+)\s*-->/i);
      if (!match) continue;
      const voter = issue.user?.login || `issue-${issue.number}`;
      const voterRoom = `${voter}:${match[1]}`;
      if (seen.has(voterRoom)) continue;
      seen.add(voterRoom);
      const key = `${match[1]}:${match[2]}`;
      votes.set(key, (votes.get(key) || 0) + 1);
    }
    state.votes = votes;
    status.textContent = `${seen.size} ${seen.size === 1 ? "voto registrado" : "votos registrados"}`;
    status.classList.add("success");
    if (state.room) renderGallery();
  } catch (error) {
    status.textContent = "Contagem de votos indisponível";
    status.classList.remove("success");
  }
}

function updateHash() {
  const floor = floors[state.floorIndex];
  if (!state.room) {
    history.replaceState(null, "", `${location.pathname}${location.search}#${floor.id}`);
    return;
  }
  history.replaceState(null, "", `${location.pathname}${location.search}#${floor.id}/${state.room.id}/${state.conceptIndex + 1}`);
}

function restoreHash() {
  const [floorId, roomId, conceptNumber] = location.hash.slice(1).split("/");
  const floorIndex = floors.findIndex((floor) => floor.id === floorId);
  if (floorIndex >= 0) state.floorIndex = floorIndex;
  renderFloor();
  if (roomId) {
    const room = findRoom(roomId);
    if (room) openGallery(room, Number(conceptNumber || 1) - 1);
  }
}

function applyPlanZoom() {
  $("#planCanvas").style.zoom = state.planZoom;
  $("#planZoomLabel").textContent = `${Math.round(state.planZoom * 100)}%`;
}

function setPlanZoom(next) {
  state.planZoom = Math.max(0.7, Math.min(2, next));
  applyPlanZoom();
}

function resetImageZoom() {
  state.imageZoom = 1;
  state.imageX = 0;
  state.imageY = 0;
  applyImageTransform();
}

function applyImageTransform() {
  imagePan.style.transform = `translate(${state.imageX}px, ${state.imageY}px) scale(${state.imageZoom})`;
  $("#imageZoomLabel").textContent = `${Math.round(state.imageZoom * 100)}%`;
}

function setImageZoom(next) {
  state.imageZoom = Math.max(1, Math.min(4, next));
  if (state.imageZoom === 1) { state.imageX = 0; state.imageY = 0; }
  applyImageTransform();
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4200);
}

floorNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-floor]");
  if (!button) return;
  state.floorIndex = Number(button.dataset.floor);
  state.planZoom = 1;
  renderFloor();
  updateHash();
});

document.addEventListener("pointerover", (event) => {
  const anchor = event.target.closest("[data-preview-room]");
  if (!anchor || anchor.contains(event.relatedTarget)) return;
  const room = findRoom(anchor.dataset.previewRoom);
  if (room) showPhotoPreview(anchor, room);
});

document.addEventListener("pointerout", (event) => {
  const anchor = event.target.closest("[data-preview-room]");
  if (!anchor || anchor.contains(event.relatedTarget)) return;
  hidePhotoPreview();
});

document.addEventListener("focusin", (event) => {
  const anchor = event.target.closest("[data-preview-room]");
  if (anchor) showPhotoPreview(anchor, findRoom(anchor.dataset.previewRoom));
});

document.addEventListener("focusout", (event) => {
  if (event.target.closest("[data-preview-room]")) hidePhotoPreview();
});

window.addEventListener("resize", hidePhotoPreview);
window.addEventListener("scroll", hidePhotoPreview, true);

document.addEventListener("click", (event) => {
  const roomButton = event.target.closest("[data-room]");
  if (roomButton) {
    const room = findRoom(roomButton.dataset.room);
    if (room) openGallery(room);
  }
  const thumb = event.target.closest("[data-concept]");
  if (thumb) selectConcept(Number(thumb.dataset.concept));
});

$("#closeGallery").addEventListener("click", closeGallery);
galleryDialog.addEventListener("click", (event) => { if (event.target === galleryDialog) closeGallery(); });
$("#programButton").addEventListener("click", openProgram);
$("#closeProgram").addEventListener("click", closeProgram);
programDialog.addEventListener("click", (event) => { if (event.target === programDialog) closeProgram(); });
$("#previousConcept").addEventListener("click", () => changeConcept(-1));
$("#nextConcept").addEventListener("click", () => changeConcept(1));
$("#voteButton").addEventListener("click", registerVote);
$("#planZoomOut").addEventListener("click", () => setPlanZoom(state.planZoom - 0.15));
$("#planZoomIn").addEventListener("click", () => setPlanZoom(state.planZoom + 0.15));
$("#planZoomReset").addEventListener("click", () => setPlanZoom(1));
$("#imageZoomOut").addEventListener("click", () => setImageZoom(state.imageZoom - 0.25));
$("#imageZoomIn").addEventListener("click", () => setImageZoom(state.imageZoom + 0.25));
$("#imageZoomReset").addEventListener("click", resetImageZoom);

$("#imageViewer").addEventListener("wheel", (event) => {
  event.preventDefault();
  setImageZoom(state.imageZoom + (event.deltaY < 0 ? 0.2 : -0.2));
}, { passive: false });

$("#imageViewer").addEventListener("pointerdown", (event) => {
  if (state.imageZoom <= 1) return;
  state.dragging = true;
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  event.currentTarget.classList.add("dragging");
  event.currentTarget.setPointerCapture(event.pointerId);
});

$("#imageViewer").addEventListener("pointermove", (event) => {
  if (!state.dragging) return;
  state.imageX += event.clientX - state.pointerX;
  state.imageY += event.clientY - state.pointerY;
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  applyImageTransform();
});

function endDrag(event) {
  state.dragging = false;
  $("#imageViewer").classList.remove("dragging");
  if (event?.pointerId !== undefined && event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.releasePointerCapture(event.pointerId);
  }
}
$("#imageViewer").addEventListener("pointerup", endDrag);
$("#imageViewer").addEventListener("pointercancel", endDrag);

document.addEventListener("keydown", (event) => {
  if (!galleryDialog.open) return;
  if (event.key === "ArrowLeft") changeConcept(-1);
  if (event.key === "ArrowRight") changeConcept(1);
  if (event.key === "+" || event.key === "=") setImageZoom(state.imageZoom + 0.25);
  if (event.key === "-") setImageZoom(state.imageZoom - 0.25);
});

window.addEventListener("hashchange", restoreHash);
restoreHash();
loadVotes();
