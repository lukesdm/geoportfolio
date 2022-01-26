let lmLegendVisible = true;

function lmAddToggleButton() {
    const container = document.querySelector(".leaflet-control-layers-overlays");
    const button = document.createElement("button");
    button.textContent = "👁";
    button.addEventListener("click", lmToggleLegend); 
    container.insertBefore(button, container.firstElementChild);
}

function lmToggleLegend() {
  lmLegendVisible = !lmLegendVisible;
  const legendLabels = document.querySelectorAll(
    ".leaflet-control-layers-list label"
  );
  for (label of legendLabels) {
    label.style["display"] = lmLegendVisible ? "block" : "none";
  } 
}

lmAddToggleButton();