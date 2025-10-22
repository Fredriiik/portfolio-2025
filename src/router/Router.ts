import { About } from "../pages/About.js";
import { Contact } from "../pages/Contact.js";
import { Home } from "../pages/Home.js";
import { Work } from "../pages/Work.js";


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
