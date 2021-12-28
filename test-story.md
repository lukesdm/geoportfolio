---
layout: story
---

<!-- An example of a A HTML-markdown hybrid approach for more complex layouts. For GitHub Pages/Jekyll, you can embed markdown in elements by setting the 'markdown="1"' attribute (see https://stackoverflow.com/questions/29368902/how-can-i-wrap-my-markdown-in-an-html-div) but it seems the closing tag can't be indented, and you lose syntax highlighting. -->

<section class="banner style1 orient-right content-align-left image-position-right onload-image-fade-in onload-content-fade-in fullscreen">
<div class="content" markdown="1">
# Bakeries of Vienna
This is a simple demonstration of a map-based story.  
Image: [Pretzels, Morten Nisker Toppenberg](https://www.flickr.com/photos/94211698@N00/3917161112), licensed under [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/).  
</div>
<div class="image" markdown="1">
![A stack of fresh pretzels](images/pretzels.jpg)  
</div>
</section>

<section class="banner style1 orient-left content-align-left image-position-center onscroll-content-fade-in onscroll-image-fade-in fullscreen">
<div class="content" markdown="1">
## The Map
This is a map of the bakeries of Vienna, using:
* [Leaflet](https://leafletjs.com/), with an [OpenStreetMap](https://www.openstreetmap.org/) basemap.
* A [Web Feature Service (WFS) layer](https://www.data.gv.at/katalog/dataset/stadt-wien_webfeatureservicewfswien) provided by the Austrian open Spatial Data Infrastucture. Data source: [City of Vienna](https://data.wien.gv.at), licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/deed.de).
</div>
<div class="image">
    <iframe src="maps/bakeries-vienna-map.html"></iframe>
</div>

<section class="spotlight style1 content-align-center onscroll-content-fade-in">
<div class="content" markdown="1">
## The Template
Based on ['Story' by HTML5 UP](https://html5up.net/story), licensed under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/).
</div>