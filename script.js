function openTab(tabId) {
  const tabs = document.getElementsByClassName("popup-tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "grid";
}

function closeTab(element) {
  element.style.display = "none";
}
