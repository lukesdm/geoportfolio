function buildLegend(entries) {
    entriesMarkup = entries.reduce((acc, entry) => acc + `<tr><td>${entry.symbol}</td><td>${entry.description}</td></tr>`, "");
    return `<table>${entriesMarkup}</table>`
}

let suitabilityEntries = [
    { symbol: "🐍", description: "snake" },
    { symbol: "🐻", description: "bear" },
    { symbol: "🐪", description: "camel" },
];

function addLegend() {
    entryIndex = 1; // TODO: Parameterize
    const container =  document.querySelector(`div.leaflet-control-layers-overlays > label:nth-child(${entryIndex}) > div > span`);
    container.innerHTML = container.innerHTML + buildLegend(suitabilityEntries);
    
}

addLegend();