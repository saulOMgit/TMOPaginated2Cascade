const statusEl = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

function updateUI(mode) {
  statusEl.textContent = `Modo preferido: ${mode}`;
  toggleBtn.textContent = mode === "cascade" ? "Cambiar a paginated" : "Cambiar a cascade";
}

chrome.storage.local.get("mode", ({ mode }) => {
  if (!mode) mode = "cascade";
  updateUI(mode);
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.local.get("mode", ({ mode }) => {
    const newMode = mode === "cascade" ? "paginated" : "cascade";

    // Guardar el nuevo modo
    chrome.storage.local.set({ mode: newMode }, () => {
      updateUI(newMode);

      // Redirigir si estamos en una pestaña válida
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (!tab || !tab.url) return;

        let newUrl = null;

        if (newMode === "cascade" && tab.url.endsWith("/paginated")) {
          newUrl = tab.url.replace("/paginated", "/cascade");
        } else if (newMode === "paginated" && tab.url.endsWith("/cascade")) {
          newUrl = tab.url.replace("/cascade", "/paginated");
        }

        if (newUrl) {
          chrome.tabs.update(tab.id, { url: newUrl });
        }
      });
    });
  });
});
