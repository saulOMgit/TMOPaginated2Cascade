const statusEl = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

function updateUI(enabled) {
  statusEl.textContent = `Redirección: ${enabled ? "Activada" : "Desactivada"}`;
  toggleBtn.textContent = enabled ? "Desactivar" : "Activar";
}

chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled === undefined) enabled = true;
  updateUI(enabled);
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.local.get("enabled", ({ enabled }) => {
    const newState = !(enabled !== false);
    chrome.storage.local.set({ enabled: newState }, () => {
      updateUI(newState);
    });
  });
});
