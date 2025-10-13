export function About(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container mt-5";
  el.innerHTML = `<h1>About</h1><p>Lite om mig.</p>`;
  return el;
}
