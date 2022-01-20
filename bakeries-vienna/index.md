---
layout: story
---

<!-- An example of a A HTML-markdown hybrid approach for more complex layouts. For GitHub Pages/Jekyll, you can embed markdown in elements by setting the 'markdown="1"' attribute (see https://stackoverflow.com/questions/29368902/how-can-i-wrap-my-markdown-in-an-html-div) but it seems the closing tag can't be indented, and you lose syntax highlighting. -->

<section class="banner style1 orient-right content-align-left image-position-right onload-image-fade-in onload-content-fade-in fullscreen">
<div class="content" markdown="1">
# Bakeries of Vienna
This is a simple demonstration of a map-based story.  
Image: [Pretzels, Morten Nisker Toppenberg][Prz], licensed under [CC BY-NC 2.0][CCBNC2].  
</div>
<div class="image" markdown="1">
![A stack of fresh pretzels](pretzels.jpg)  
</div>
</section>

<section class="banner style1 orient-left content-align-left image-position-center onscroll-content-fade-in onscroll-image-fade-in fullscreen">
<div class="content" markdown="1">
## The Map
This is a map of the bakeries of Vienna, using:
* [Leaflet][LL], with an [OpenStreetMap][OSM] basemap.
* A [Web Feature Service (WFS) layer][WFS] provided by the Austrian open Spatial Data Infrastucture. Data source: [City of Vienna][DV], licensed under [Creative Commons Attribution 4.0 International][CCB4].
</div>
<div class="image">
    <iframe src="bakeries-vienna-map.html"></iframe>
</div>
</section>

<section class="spotlight style1 content-align-center onscroll-content-fade-in">
<div class="content" markdown="1">
## The Template
Based on ['Story' by HTML5 UP][H5S], licensed under [Creative Commons Attribution 3.0][CCB3].
</div>
</section>

[Prz]:https://www.flickr.com/photos/94211698@N00/3917161112
[LL]:https://leafletjs.com/
[OSM]:https://www.openstreetmap.org/
[WFS]:https://www.data.gv.at/katalog/dataset/stadt-wien_webfeatureservicewfswien
[DV]:https://data.wien.gv.at
[H5S]:https://html5up.net/story
[CCB4]:https://creativecommons.org/licenses/by/4.0/deed.de
[CCB3]:https://creativecommons.org/licenses/by/3.0/
[CCBNC2]:https://creativecommons.org/licenses/by-nc/2.0/
