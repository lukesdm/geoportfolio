---
layout: story
---

<section class="banner style1 orient-right fullscreen">
<div class="content" markdown="1">
# Surface Runoff
## Methods in Spatial Analysis
## Assignment #5


Luke McQuade, January 2022

</div>
<div class="image" markdown="1">
![rainy hilly road](assets/vlad-bagacian-serbia-resized.jpg)
</div>
</section>

<section class="banner style1 orient-left content-align-left image-position-center onscroll-content-fade-in onscroll-image-fade-in fullscreen">
<div class="content" markdown="1">

## Introduction
The [previous assignment][Terrain] (needs login) covered some terrain analyis around the town of Mittersill, Salzburg, where the river Felber meets the Salzach.

Here, some basic hydrological analysis is performed, using [QGIS](TODO) and the integrated [SAGA](TODO) tools.

Per the [exercise guidance](TODO) (needs login?), the idea is to create a rough flow model based on the upslope distance for the given pour point, i.e. rainfall at equal upslope distances reaches the outflow at the same time. Based on its distribution, an approximate unit hydrograph can be created.

## Results

TODO: Histogram

### Q: *What are the most critical zones in the catchment area, and how might land cover/use decisions influence the risk of floods?*



The land can be zoned accordingly. The map shows.  






### Q: *What are some of the limitations of this model?*
* No groundwater
* No slope, land cover
* The larger the area, the less reliable (uniform rainfall) 

## Method

TODO: Link to QGIS tutorial
TODO: QGIS model.

### Generating upslope distance from pour point
There doesn't seem to be a tool in QGIS explictly designed for this, but it can be achieved with an unconventional use of the *Overland flow distance to channel network* operation. This expects a channel network raster layer to be fed into it. Instead, create a single pixel raster of the pour point, and use that in its place.

### Pour point
Conceptually, the pour point would be at the confluence of the Felber and Salzach. But, here it is placed on the Felber slightly upstream of where they meet. The reason for this is that the upslope area would otherwise include the catchment of the Salzach also. Remember, this point is rasterized to a grid cell - keep in mind the cell size, and that it doesn't fall into the same cell as the actual confluence.
![Pour Point](assets/pour-point.png)  

### Q: *What is the significance of the channel initiation threshold?*
The channel initiation threshold is probably the most important parameter of the model. It is the value of flow accumulation at which a cell is designated a channel/stream,
and this determines the stream network and sub-basin structure. It is not a straight-forward parameter to 'guess' - it depends on the cell size, terrain, study area and use case.
You can see the resultant stream network and sub-basins for a variety of values on the map (1, 2 and 5 million) (toggle the layers). The area zones were calculated based on an initiation of 5M.  

### Q: *What are the effects if the 'Fill sinks' step is not performed?*
The fill sinks step guarantees there is a continuous, downslope path for every cell in an area. Without this, it would result in a patchy, disconnected stream network.
None of the subsequent calculations would then make sense.

</div>
<div class="image lm-sticky">
    <iframe src="map/index.html"></iframe>
</div>
</section>



As per the [exercise guidance][Ex], a basic unit hydrograph can be created using the upslope distance from the point at which the Felber joins the Salzach (the pour-point, or outflow). There are several steps required to achieve this. Starting with a digital elevation model (DEM) of the area, 
* Fill sinks
* Generate flow accumulation surface
* Generate upslope distance from pour point surface



## Notes


## Tips
Here are some tips should you wish to attempt something similar.

### QGIS
* The tools often don't communicate problems very clearly, i.e. silent fails. Often this is due to an issue with the input data or parameters*, but use the latest LTS version of QGIS to rule out major software bugs. (I started out with v3.20, and then moved back to v3.16.)
* *Check the default values make sense for your input, e.g. cell size 'Not Set' (meaning 'guess from input') vs 0.0.
* For similar reasons, when using the model builder, don't try do too much at once - test frequently.

### qgis2web
[qgis2web](TODO) was used to create the above Leaflet map. I was *very* happy with the results. But, I encountered some issues:
* It doesn't support layer grouping (See issue [#989](https://github.com/tomchadwin/qgis2web/issues/989)).
* The rendering of composite styles (patterns etc.) is hit and miss.
* It was pretty unstable - 50% of the time it would fail to export or preview, with error `AttributeError: 'QgsFillSymbol' object has no attribute 'width'`. This would put QGIS in an unstable state - it would look like it was hanging, and that a restart was needed. But, you can still operate it, despite the cursor saying otherwise, and attempt exporting again without losing your settings. Will follow up on this issue when possible.

### General
TODO

### Channel creation
* A coarser DEM (e.g. 20m vs 5m) can give cleaner-looking results, e.g. wide channels may appear in the model as two separate channels using a finer DEM. (TODO: Move into main) 


## Resources
A nicely presented guide to the hydrological concepts in play here e.g. catchments, sub-basins, stream order. (TODO)

QGIS guide on this (TODO)


[Terrain]: TODO
[Ex]: TODO