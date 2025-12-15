async function fetchServices() {
  try {
    const response = await fetch("/api/services");
    const data = await response.json();

    const grid = document.getElementById("services-grid");
    grid.innerHTML = "";

    data.services.forEach(service => {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.innerHTML = `
        <h3>${service.name}</h3>
        <p>Tipo: ${service.type}</p>
        <p>Status: <strong class="${service.status}">${service.status}</strong></p>
        <p>Versão: ${service.version}</p>
        <p>Último deploy: ${service.lastDeploy}</p>
      `;

      grid.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
  }
}

document.getElementById("btn-refresh").addEventListener("click", fetchServices);

// carregar ao abrir
fetchServices();
