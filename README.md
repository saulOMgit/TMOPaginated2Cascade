
# TMO Paginated 2 Cascade

Una extensión para navegadores basada en Chromium (Chrome, Brave, Edge, etc.) que te permite redirigir automáticamente los capítulos de zonatmo.com entre los modos de lectura `paginated` y `cascade`, según tu preferencia.

---

## 📌 Características

- 🔁 Redirección automática al modo de lectura preferido (`cascade` o `paginated`).
- 📥 Configurable desde el botón de extensión.
- 💾 Guarda tu elección para futuras visitas.
- ⚙️ Compatible con Manifest V3.
- ✅ Funciona en Chrome, Brave, Edge, etc.

---

## 🧑‍💻 Instalación manual

1. Descarga o clona este repositorio. (o mas comodo a traves de [Releases](https://github.com/saulOMgit/TMOPaginated2Cascade/releases)
2. Abre tu navegador Chrome o compatible.
3. Ve a `chrome://extensions/`.
4. Activa el modo de **Desarrollador** (arriba a la derecha).
5. Haz clic en **“Cargar descomprimida”**.
6. Selecciona la carpeta del proyecto que contiene el archivo `manifest.json`.

---

## 🧭 Cómo usar

1. Accede a un capítulo en zonatmo.com, por ejemplo:
   ```
   https://zonatmo.com/viewer/ID_DEL_CAPITULO/paginated
   ```
2. La extensión redirigirá automáticamente a:
   ```
   https://zonatmo.com/viewer/ID_DEL_CAPITULO/cascade
   ```
   (o viceversa, según tu preferencia).

3. Para cambiar el modo preferido:
   - Haz clic en el icono de la extensión.
   - Pulsa el botón “Cambiar a ...”.
   - La redirección se hará de inmediato si estás en una página de capítulo.

---

## 📁 Estructura

```
tmo-paginated-cascade/
├── manifest.json
├── README.md
├── popup.html
├── js/
│   ├── background.js
│   ├── content.js
│   └── popup.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🧠 Autor

**saulOMgit**  
GitHub: [https://github.com/saulOMgit](https://github.com/saulOMgit)

---

## 🛡️ Permisos requeridos

- `storage`: Para guardar tu modo preferido.
- `https://zonatmo.com/viewer/*/paginated`: Para ejecutar el content script en capítulos.

---

## ✅ Compatibilidad

| Navegador | Compatible |
|-----------|------------|
| Chrome    | ✅         |
| Brave     | ✅         |
| Edge      | ✅         |
| Firefox   | ❌ (Manifest V3 no 100% compatible aún) |

---

## 📄 Licencia

Este proyecto es de uso personal y libre. Puedes modificarlo para adaptarlo a tus necesidades.
