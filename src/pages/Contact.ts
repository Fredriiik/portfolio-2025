export function Contact(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container mt-5";
  el.innerHTML = `<h1>Contact</h1><p>Kontakta mig här.</p>`;
  return el;
}
