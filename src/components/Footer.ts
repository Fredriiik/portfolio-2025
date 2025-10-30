export function Footer(): HTMLElement {
  const footer = document.createElement("footer");
  const navLeft = document.createElement("nav");

  navLeft.className = "d-flex flex-column-reverse align-items-center position-fixed bottom-0 start-0 m-3";

  const line = document.createElement("div");
  line.className = "bg-secondary mb-2";
  line.style.width = "1px";
  line.style.height = "60px";

  const copy = document.createElement("div");
  copy.textContent = "©/2025";
  copy.className = "text-secondary small text-center mb-2";

  // Helper: skapa nav-länk
  function createNavItem(text: string, href: string, onClick?: () => void): HTMLElement {
    const div = document.createElement("div");
    div.className = "mb-2";

    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className = "text-white text-decoration-none fw-bold";
    a.addEventListener("mouseenter", () => (a.style.opacity = "0.6"));
    a.addEventListener("mouseleave", () => (a.style.opacity = "1"));

    if (onClick) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        onClick();
      });
    }

    div.appendChild(a);
    return div;
  }

  // === Rendering functions ===
  function renderSocialLinks() {
    navLeft.innerHTML = "";
    navLeft.appendChild(copy);
    navLeft.appendChild(line);
    navLeft.appendChild(createNavItem("GI", "https://github.com/Fredriiik"));
    navLeft.appendChild(
      createNavItem("LI", "https://www.linkedin.com/in/fredrik-mohag-håkansson-a427ab255")
    );
    navLeft.appendChild(
      createNavItem("IN", "https://www.instagram.com/fyrklang/?igsh=MXF0a2hxem05bndqdg%3D%3D&utm_source=qr")
    );
  }

  function renderHomeLink() {
    navLeft.innerHTML = "";
    navLeft.appendChild(copy);
    navLeft.appendChild(line);
    navLeft.appendChild(
      createNavItem("HOME", "#", () => {
        window.location.hash = "#";
        renderSocialLinks();
      })
    );
  }

  // === Funktion som uppdaterar footern dynamiskt ===
  function updateFooter() {
    const currentHash = window.location.hash;
    if (!currentHash || currentHash === "#") {
      renderSocialLinks();
    } else {
      renderHomeLink();
    }
  }

  // Lyssna på hashändringar (när man navigerar)
  window.addEventListener("hashchange", updateFooter);

  // Kör första gången direkt
  updateFooter();

  footer.appendChild(navLeft);
  return footer;
}
