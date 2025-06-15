chrome.storage.local.get("mode", ({ mode }) => {
  if (!mode) mode = "cascade"; // Por defecto: cascade

  if (window.location.pathname.endsWith("/paginated") && mode === "cascade") {
    window.location.href = window.location.href.replace("/paginated", "/cascade");
  } else if (window.location.pathname.endsWith("/cascade") && mode === "paginated") {
    window.location.href = window.location.href.replace("/cascade", "/paginated");
  }
});
