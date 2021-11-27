---
layout: map-page
---
# Map Test
Bakeries of Vienna

<leaflet-map map-id="map1">
  <script slot="map-script">
    var map = L.map("map1").setView({ lon: 16.37, lat: 48.2 }, 12);

    // add the OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale({ imperial: true, metric: true }).addTo(map);

    const defaultParameters = {
      service: "WFS",
      version: "2.0.0",
      request: "GetFeature",
      typeNames: "ogdwien:BUECHEREIOGD",
      outputFormat: "text/javascript",
      format_options: "callback:getJson",
      srsName: "epsg:4326",
    };

    const owsrootUrl = "https://data.wien.gv.at/daten/geo";
    const parameters = L.Util.extend(defaultParameters);
    const URL = owsrootUrl + L.Util.getParamString(parameters);

    ajax = $.ajax({
      url: URL,
      dataType: "jsonp",
      jsonpCallback: "getJson",
      success: function (response) {
        WFSLayer = L.geoJson(response, {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
              icon: new L.DivIcon({ html: "🥖" }),
            });
          },
          onEachFeature: function (feature, layer) {
            popupOptions = { maxWidth: 200 };
            layer.bindPopup(
              "Bakery: " + feature.properties.NAME + "</br>",
              popupOptions
            );
          },
        }).addTo(map);
      },
    });
  </script>
</leaflet-map>

Feeling hungry?
