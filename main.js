import "../components/header/header.js";



async function loadComponent(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}

// Load components
loadComponent("header", "components/header/header.html");