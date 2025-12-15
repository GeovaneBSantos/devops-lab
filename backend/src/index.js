const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simulação de serviços (dados reais em breve)
const services = [
  {
    id: 1,
    name: "Frontend Web",
    type: "Nginx",
    status: "up",
    version: "1.0.0",
    lastDeploy: "2025-12-01 22:10"
  },
  {
    id: 2,
    name: "Backend API",
    type: "Node.js",
    status: "up",
    version: "1.0.0",
    lastDeploy: "2025-12-01 21:45"
  },
  {
    id: 3,
    name: "Database",
    type: "PostgreSQL",
    status: "up",
    version: "14.1",
    lastDeploy: "2025-12-01 21:00"
  },
  {
    id: 4,
    name: "Redis Cache",
    type: "Redis",
    status: "down",
    version: "7.0",
    lastDeploy: "2025-11-28 18:20"
  }
];

// Rota de status geral
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    servicesOnline: services.filter(s => s.status === "up").length,
    totalServices: services.length
  });
});

// Rota de serviços
app.get("/api/services", (req, res) => {
  res.json({
    updatedAt: new Date().toISOString(),
    services
  });
});

// Início do servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
