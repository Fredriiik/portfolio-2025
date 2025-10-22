
import { Footer } from "./components/Footer.js";
import { Navbar } from "./components/Navbar.js";
import { Router } from "./router/Router.js";

const app = document.getElementById("app")!;
app.appendChild(Navbar());
app.appendChild(Router());
app.appendChild(Footer());
