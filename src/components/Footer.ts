export function Footer(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "text-center py-3 bg-dark text-light";
  footer.innerHTML = `<p>© 2025 Fredrik Mohag Håkansson</p>`;
  return footer;
}
