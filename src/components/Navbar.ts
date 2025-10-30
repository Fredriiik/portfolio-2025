export function Navbar(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
  nav.innerHTML = `
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><a class="nav-link" href="#work">Work</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  `;
  return nav;
}
