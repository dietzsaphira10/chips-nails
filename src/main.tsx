import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/montserrat"; 
import "@fontsource/playfair-display"; 

document.title = "Chip's Nails & Beauty | Singen";
createRoot(document.getElementById("root")!).render(<App />);