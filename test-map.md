<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

# A test page with a map
<div id="map"></div>
<script>
  // initialize Leaflet
  var map = L.map('map').setView({lon: 0, lat: 0}, 2);

  // add the OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  // show the scale bar on the lower left corner
  L.control.scale({imperial: true, metric: true}).addTo(map);

  // show a marker on the map
  L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
</script>
    
Source:
https://switch2osm.org/using-tiles/getting-started-with-leaflet/
    
