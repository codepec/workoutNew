document.addEventListener("DOMContentLoaded", () => {

  const routeMap = {
    cards: "../pages/cards.html",
    preview: "../pages/preview.html",
    history: "../pages/history.html",
    settings: "../pages/settings.html"
  };

  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop().replace(".html","");

  const initTabs = () => {

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

      const route = tab.dataset.route;

      // ACTIVE MARKER
      if(route === currentFile){
        tab.classList.add("active");
      }

      // NAVIGATION
      tab.addEventListener("click", () => {
        window.location.href = routeMap[route];
      });

    });

  };

  // Warten bis Tabs geladen sind
  const interval = setInterval(() => {
    if(document.querySelector(".tab")){
      clearInterval(interval);
      initTabs();
    }
  }, 50);

});