import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Work } from "../pages/Work";

export function Router(): HTMLElement {
  const container = document.createElement("div");
  container.id = "page-container";

  function navigate(path: string) {
    container.innerHTML = "";
    switch (path) {
      case "#work":
        container.appendChild(Work());
        break;
      case "#about":
        container.appendChild(About());
        break;
      case "#contact":
        container.appendChild(Contact());
        break;
      default:
        container.appendChild(Home());
    }
  }

  window.addEventListener("hashchange", () => navigate(location.hash));
  navigate(location.hash); // initial load

  return container;
}
