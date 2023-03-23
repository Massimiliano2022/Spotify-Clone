const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
console.log("SELECTED ID: ", selectedId);