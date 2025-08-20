import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"

const portal = document.getElementById("root")

if (portal) {
    const root = createRoot(portal)
    root.render(<App/>)
} else {
    throw new Error("No element matching with id: `root`! check and try again");
}