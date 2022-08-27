import { createRoot } from "react-dom/client";
import Apps from "./Apps";

const root = createRoot(document.querySelector("#root"))

root.render(<Apps />)