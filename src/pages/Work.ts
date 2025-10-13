export function Work(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container mt-5";
  el.innerHTML = `<h1>Work</h1><p>Projekt jag jobbat på.</p>`;
  return el;
}
