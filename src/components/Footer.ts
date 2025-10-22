export function Footer(): HTMLElement {
  const footer = document.createElement("footer");

  // Skapa vänster navigering
  const navLeft = document.createElement("nav");
  // Bootstrap-klasser: flex, stapla vertikalt, fäst längst ner till vänster
  navLeft.className = "d-flex flex-column-reverse align-items-center position-fixed bottom-0 start-0 m-3";

  const currentHash = window.location.hash;

  // Helper för att skapa en nav-länk med Bootstrap
  function createNavItem(text: string, href: string): HTMLElement {
    const div = document.createElement("div");
    div.className = "mb-2"; // spacing mellan länkar

    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className = "text-white text-decoration-none fw-bold";

    // Hover-effekt
    a.addEventListener("mouseenter", () => (a.style.opacity = "0.6"));
    a.addEventListener("mouseleave", () => (a.style.opacity = "1"));

    div.appendChild(a);
    return div;
  }

  // Linje
  const line = document.createElement("div");
  line.className = "bg-secondary mb-2";
  line.style.width = "1px";
  line.style.height = "60px";

  // Copyright
  const copy = document.createElement("div");
  copy.textContent = "©/2025";
  copy.className = "text-secondary small text-center mb-2";

  // Innehåll beroende på sida
  if (!currentHash || currentHash === "#") {
    // === HOME-sidan ===
    navLeft.appendChild(copy);
    navLeft.appendChild(line);
    navLeft.appendChild(createNavItem("GI", "https://github.com/Fredriiik"));
    navLeft.appendChild(createNavItem(
      "LI",
      "https://www.linkedin.com/in/fredrik-mohag-håkansson-a427ab255"
    ));
    navLeft.appendChild(createNavItem(
      "IN",
      "https://www.instagram.com/fyrklang/?igsh=MXF0a2hxem05bndqdg%3D%3D&utm_source=qr"
    ));
  } else {
    // === Övriga sidor ===
    navLeft.appendChild(copy);
    navLeft.appendChild(line);
    navLeft.appendChild(createNavItem("HOME", "#"));
  }

  footer.appendChild(navLeft);
  return footer;
}
