/* ======================================================
   CONFIGURAÇÃO DE AMBIENTE
====================================================== */
const ENV = "DEV";

/* ======================================================
   ELEMENTOS
====================================================== */
const envBadge = document.querySelector(".env-badge");
const clusterStatus = document.querySelector(".status-indicator");
const themeToggle = document.getElementById("theme-toggle");

const grid = document.getElementById("services-grid");
const btnRefresh = document.getElementById("btn-refresh");

const metricServices = document.getElementById("metric-services");
const metricStatus = document.getElementById("metric-status");

/* ======================================================
   HEADER / TEMA
====================================================== */
envBadge.textContent = `Ambiente: ${ENV}`;

themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
};

/* ======================================================
   ÍCONES
====================================================== */
function getIcon(type) {
  return {
    nginx: "🌐",
    "node.js": "🟢",
    postgresql: "🐘",
    redis: "⚡"
  }[type.toLowerCase()] || "🛠️";
}

/* ======================================================
   CARD DE SERVIÇO
====================================================== */
function createCard(service, index) {
  const card = document.createElement("div");
  card.className = "card fade-in";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <h3>${getIcon(service.type)} ${service.name}</h3>
    <p>${service.type}</p>
    <span class="status ${service.status}">
      ${service.status.toUpperCase()}
    </span>
  `;

  return card;
}

/* ======================================================
   FETCH SERVIÇOS (API REAL)
====================================================== */
async function fetchServices() {
  try {
    btnRefresh.classList.add("loading");

    const res = await fetch("/api/services");
    const data = await res.json();

    grid.innerHTML = "";
    data.services.forEach((s, i) =>
      grid.appendChild(createCard(s, i))
    );

    metricServices.textContent = data.services.length;

    const hasDown = data.services.some(s => s.status === "down");

    metricStatus.textContent = hasDown ? "ALERTA" : "OK";
    clusterStatus.textContent = hasDown ? "ALERTA" : "CLUSTER OK";
    clusterStatus.className =
      "status-indicator " + (hasDown ? "status-down" : "status-ok");

    document.body.classList.toggle("alert-mode", hasDown);

  } catch (e) {
    console.error("Erro ao buscar serviços", e);
  } finally {
    btnRefresh.classList.remove("loading");
  }
}

/* ======================================================
   TELEMETRIA FAKE (CPU / MEM)
====================================================== */
let cpu = 30;
let mem = 45;

function updateTelemetry() {
  cpu = Math.min(100, Math.max(10, cpu + (Math.random() * 10 - 5)));
  mem = Math.min(100, Math.max(15, mem + (Math.random() * 8 - 4)));
}

/* ======================================================
   GRÁFICO CANVAS (ANIMADO)
====================================================== */
let chartData = [];
let ctx, canvas;

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = 120;
}

function initChart() {
  canvas = document.getElementById("chart");
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  setInterval(() => {
    if (chartData.length > 40) chartData.shift();
    chartData.push(cpu);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;

    chartData.forEach((v, i) => {
      const x = (i / 40) * canvas.width;
      const y = canvas.height - (v / 100) * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });

    ctx.stroke();
  }, 1000);
}

/* ======================================================
   LOGS FAKE (STREAMING)
====================================================== */
function initLogs() {
  const logs = document.getElementById("logs");
  if (!logs) return;

  const messages = [
    "Service nginx healthy",
    "Node.js API responding",
    "Healthcheck OK",
    "Swarm heartbeat",
    "Metrics collected",
    "Scheduler cycle completed"
  ];

  setInterval(() => {
    const line = document.createElement("div");
    line.textContent =
      `[${new Date().toLocaleTimeString()}] ` +
      messages[Math.floor(Math.random() * messages.length)];

    logs.appendChild(line);
    logs.scrollTop = logs.scrollHeight;

    if (logs.children.length > 60) {
      logs.removeChild(logs.firstChild);
    }
  }, 1200);
}

/* ======================================================
   EVENTOS
====================================================== */
btnRefresh.onclick = fetchServices;

/* ======================================================
   INIT
====================================================== */
fetchServices();
setInterval(fetchServices, 15000);
setInterval(updateTelemetry, 2000);

initChart();
initLogs();
