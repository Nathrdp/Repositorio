const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

toggleTheme.addEventListener("click", () => {
  const dark = body.getAttribute("data-theme") === "dark";
  body.setAttribute("data-theme", dark ? "light" : "dark");
  toggleTheme.textContent = dark ? "🌙 Modo escuro" : "☀️ Modo claro";
});



// flex-column position-fixed top-0 start-0 vh-100 d-flex justify-content-center align-items-center
