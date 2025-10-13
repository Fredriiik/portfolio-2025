import "bootstrap";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Router } from "./router/Router";

const app = document.getElementById("app")!;

app.appendChild(Navbar());
app.appendChild(Router());
app.appendChild(Footer());
