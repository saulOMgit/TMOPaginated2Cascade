const statusEl = document.getElementById("status");
const buttonEl = document.getElementById("toggleBtn");

chrome.storage.local.get("enabled", (data) => {
  const enabled = data.enabled !== false; // default: true
  updateUI(enabled);
});

function updateUI(enabled) {
  statusEl.innerHTML = `Estado: <strong>${enabled ? "Activo" : "Inactivo"}</strong>`;
  buttonEl.textContent = enabled ? "Desactivar" : "Activar";
}

buttonEl.addEventListener("click", () => {
  chrome.storage.local.get("enabled", (data) => {
    const newState = !(data.enabled !== false);
    chrome.storage.local.set({ enabled: newState }, () => {
      updateUI(newState);
    });
  });
});
