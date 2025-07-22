import "../components/header/header.js";
import { loadCategories } from "./components/main-categories/main-categories.js";




async function loadComponent(id, htmlFile, cssFile = null) {
    const res = await fetch(htmlFile);
    document.getElementById(id).innerHTML = await res.text();

    // Load CSS if provided
    if (cssFile) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFile;
        document.head.appendChild(link);
    }

        if (id === "main-categories") {
            loadCategories();
        }
}

// Load components
loadComponent("header", "components/header/header.html");
loadComponent(
    "main-categories",
    "components/main-categories/main-categories.html",
    "components/main-categories/main-categories.css"
);