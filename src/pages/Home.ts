export function Home(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container mt-5";
  el.innerHTML = `<h1>Home</h1><p>Välkommen till min portfolio.</p>`;
  return el;
}
