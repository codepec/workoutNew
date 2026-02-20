export async function loadLayout(activePath, backLink=null){
  // HEADER
  const h = await fetch("../components/header.html");
  document.body.insertAdjacentHTML("afterbegin", await h.text());

  // Back-Button einrichten
  if(backLink){
    document.getElementById("backBtn").onclick = ()=> location.href = backLink;
    document.getElementById("backBtn").style.visibility = "visible";
  } else {
    document.getElementById("backBtn").style.visibility = "hidden";
  }

  // Home-Button ausblenden, falls index.html
  const homeBtn = document.getElementById("homeBtn");
  if(activePath.endsWith("index.html") || window.location.pathname.endsWith("index.html")){
    homeBtn.style.display = "none";
  } else {
    homeBtn.style.display = "flex";
    homeBtn.onclick = goHome;
  }

  // TABS
  const t = await fetch("../components/tabs.html");
  document.body.insertAdjacentHTML("beforeend", await t.text());

  document.querySelectorAll(".tab").forEach(tab=>{
    if(tab.dataset.link === activePath || window.location.pathname.endsWith(tab.dataset.link.split('/').pop())){
      tab.classList.add("active");
    }
    tab.onclick = ()=> location.href = tab.dataset.link;
  });

  // FOOTER
  const f = await fetch("../components/footer.html");
  document.body.insertAdjacentHTML("beforeend", await f.text());
  console.log("Layout loaded");
}

export function goHome(){
  location.href = "../index.html"; // navigiert zur Startseite
}