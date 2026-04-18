import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/montserrat"; 
import "@fontsource/playfair-display"; 

// Die Zeile "document.title = ..." wurde hier komplett gelöscht!

createRoot(document.getElementById("root")!).render(<App />);