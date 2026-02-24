// layout.js
export async function loadLayout(activeRoute = null, backLink = null){

  /* =========================
     HEADER
  ======================== */
  const h = await fetch("../components/header.html");
  document.body.insertAdjacentHTML("afterbegin", await h.text());

  if(backLink){
    const backBtn = document.getElementById("backBtn");
    if(backBtn) backBtn.onclick = ()=> location.href = backLink;
  } else {
    const backBtn = document.getElementById("backBtn");
    if(backBtn) backBtn.style.visibility="hidden";
  }

  /* =========================
     TABS
  ======================== */
  const t = await fetch("../components/tabs.html");
  document.body.insertAdjacentHTML("beforeend", await t.text());

  const routeMap = {
    cards: "../pages/cards.html",
    preview: "../pages/preview.html",
    history: "../pages/history.html",
    settings: "../pages/settings.html"
  };

  const currentPath = activeRoute || window.location.pathname;
  const currentFile = currentPath.split('/').pop().replace(".html","");

  document.querySelectorAll(".tab").forEach(tab=>{
    const route = tab.dataset.route;

    // active markieren
    if(route === currentFile){
      tab.classList.add("active");
    }

    // navigation
    tab.onclick = () => {
      window.location.href = routeMap[route];
    };
  });

  /* =========================
     FOOTER
  ======================== */
  const f = await fetch("../components/footer.html");
  document.body.insertAdjacentHTML("beforeend", await f.text());

  console.log("Layout loaded");
}

/* =========================
   QUICK HOME
========================= */
window.goHome = function() {
  window.location.href = "../index.html";
}