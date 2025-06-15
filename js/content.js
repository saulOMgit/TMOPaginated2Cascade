chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled !== false) {  // por defecto está activo
    if (window.location.pathname.endsWith("/paginated")) {
      window.location.href = window.location.href.replace("/paginated", "/cascade");
    }
  }
});
