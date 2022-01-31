function makeEntriesForRaster(rEntries) {
    return rEntries.map(rEntry => ({ symbol: `<span style="color:${rEntry.color}">&nbsp;█</span>`, description: rEntry.description }));
}

function buildLegend(entries) {
    entriesMarkup = entries.reduce((acc, entry) => acc + `<tr><td>${entry.symbol}</td><td>${entry.description}</td></tr>`, "");
    return `<table>${entriesMarkup}</table>`
}

let suitabilityEntries = [
    { color: "#FEDF9A", description: "1" },
    { color: "#F59053", description: "2" },
    { color: "#E9F025", description: "3" },
    { color: "#00DBA4", description: "4" },
    { color: "#00CC52", description: "4.5" },
    { color: "#00FF00", description: "5" },
];

function addLegend() {
    entryIndex = 1; // TODO: Parameterize
    const container =  document.querySelector(`div.leaflet-control-layers-overlays > label:nth-child(${entryIndex}) > div > span`);
    container.innerHTML = container.innerHTML + buildLegend(makeEntriesForRaster(suitabilityEntries));
    
}

addLegend();