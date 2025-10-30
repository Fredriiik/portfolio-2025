export function Home(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container text-center mt-5";

  el.innerHTML = `
    <div class="d-flex flex-column justify-content-center align-items-center" style="min-height: 70vh;">
      <p class="h2 fw-bold mb-2">FREDRIK MOHAG HÅKANSSON</p>
      <p class="lead text-secondary mb-3">Frontend Developer / Web Designer</p>
      <p class="w-75 mx-auto text-muted">
        Currently studying full-time Frontend Development program at Noroff
        School of Technology and Digital Media.
      </p>
    </div>
  `;

  return el;
}
