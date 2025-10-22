export function Contact(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container text-light py-5";

  el.innerHTML = `
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold mb-3">HELLO</h1>
      <p class="lead mb-4">
        Please feel free to contact me for anything — I'm here to help and eager to connect with you!
      </p>
    </div>

    <div class="text-center mb-4">
      <h5 class="fw-bold text-uppercase mb-2">Email</h5>
      <p>
        <a href="mailto:fredrik.mhakansson@gmail.com" class="link-light text-decoration-underline">
          fredrik.mhakansson@gmail.com
        </a>
      </p>
    </div>

    <div class="text-center">
      <h5 class="fw-bold text-uppercase mb-2">On the internet</h5>
      <p>
        <a href="https://www.linkedin.com/in/fredrik-mohag-h%C3%A5kansson-a427ab255"
           class="link-light text-decoration-underline me-2">LinkedIn</a> /
        <a href="https://github.com/Fredriiik"
           class="link-light text-decoration-underline mx-2">GitHub</a> /
        <a href="https://www.instagram.com/fyrklang/?igsh=MXF0a2hxem05bndqdg%3D%3D&utm_source=qr"
           class="link-light text-decoration-underline mx-2">Instagram</a> /
        <a href="https://www.facebook.com/fredrik.m.hakansson"
           class="link-light text-decoration-underline ms-2">Facebook</a>
      </p>
    </div>
  `;

  return el;
}
