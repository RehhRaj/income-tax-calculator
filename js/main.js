import { updateUI } from "./ui.js";

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateUI);
});
