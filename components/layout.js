async function loadLayout(activePath, backLink=null){

  /* HEADER */
  const h = await fetch("/components/header.html");
  document.body.insertAdjacentHTML("afterbegin", await h.text());

  if(backLink){
    document.getElementById("backBtn").onclick = ()=> location.href = backLink;
  }else{
    document.getElementById("backBtn").style.visibility="hidden";
  }

  /* TABS */
  const t = await fetch("/components/tabs.html");
  document.body.insertAdjacentHTML("beforeend", await t.text());

  document.querySelectorAll(".tab").forEach(tab=>{
    if(tab.dataset.link === activePath){
      tab.classList.add("active");
    }
    tab.onclick = ()=> location.href = tab.dataset.link;
  });


  /* FOOTER */
  const f = await fetch("/components/footer.html");
  document.body.insertAdjacentHTML("beforeend", await f.text());
  console.log("Layout loaded");


}


function goHome(){
  window.location.href = "/index.html";
}