# Z_GIS Summer School 2022: Multi-Sensor Earth Observation in Practice

The Z_GIS ([^zgis]) Summer School, led by Dr. Zhara Dabiri and A. Prof. Stefan Lang, with a host of additional instructors, took place from 28th June to 5th July 2022. 

## Policy

The summer school opened with a session on international climate policies and conventions. I was five years old when the United Nations Framework Convention on Climate Change ([^unfcc]) was ratified. The session outlined the UNFCC, and the landscape of related initiatives developed in the years following this, covering topics such as biodiversity, energy and humanitarian action. It was a solid reminder of the foundations of the CDE programme.   


## Landslide analysis with Sen2Cube

Hannah Augustin and Dr. Martin Sudmanns from the EO Analytics lab ([^eo]), led a session on analysing landslides/rockfall with the sen2cube ([^sen2cube]) Semantic Datacube system. Observing landcover time-series in the area-of-interest showed a clear change as rock covered a vegetated area during a rockfall event. It was possible to estimate the area this covered using the platform's graphical tools to build a model, and run the query. 


## Finding glaciers with CNNs

Prof. Benjamin Robson from the University of Bergen talked to us about the glacier mapping, and the particularly gnarly challenges posed by rock glaciers ([^rock-glaciers]), which led to his group's research on employing recurrent convolutional neural networks (RCNNs) to try and identify them. In short, the top layer of rock 'hides' the glacial ice from detection by standard approaches for ice mapping; there are however, subtle surface patterns that may be detected, especially when a time-series of images is available. This was followed by a practical session using the machine learning tools of eCogntion to try and identify glaciers ourselves.

## Sentinel-1 DEM generation

As part of the SliDEM ([^slidem]) landslide analysis project, The Risk, Hazard and Climate lab has been investigating using Sentinel-1 synthetic aperture radar interferometry (InSAR) to generate digital elevation models (DEMs). The quality of the results of these DEMs are highly variable, and the team is working on presenting ways of choosing parameters to create optimal DEMs.

We first took a practical session on creating DEMs using Alaska Satellite Facility (ASF) data portal ([^asf]) and SNAP (with the Sentinel-1 Toolbox and Snaphu ([^snaphu]) extension), and measuring the quality according to a reference DEM.

Due to illness, I had to skip some sessions, and instead complete a take-home project. My take-home project was to try out the SliDEM-developed Python tools ([^slidem-tools]) for a landslide event in Guarujá, Brazil ([^guaruja]). This hit a snag, however, and a debugging session led to reveal that the high-resolution strip-map (SM) acquistion mode ([^stripmap]) had had been activated for the event, which was not yet supported by the scripts.


## Summary

The Summer School was a great chance to put into practice some of the tool and techniques we had been learning about over the past couple of semesters, and some new ones.

A huge thanks to Dr. Dabiri and the team for putting this on!


## Footnotes

[^zgis]: https://www.plus.ac.at/geoinformatik/?lang=en

[^sen2cube]: https://sen2cube.at/

[^eo]: https://www.plus.ac.at/geoinformatik/research/research-areas/eo-analytics/?lang=en

[^unfcc]: https://en.wikipedia.org/wiki/United_Nations_Framework_Convention_on_Climate_Change

[^slidem]: https://www.researchgate.net/project/SliDEM-Assessing-the-suitability-of-DEMs-derived-from-Sentinel-1-for-landslide-volume-estimation

[^rock-glaciers]: https://en.wikipedia.org/wiki/Rock_glacier

[^asf]: https://search.asf.alaska.edu/#/

[^snaphu]: https://web.stanford.edu/group/radar/softwareandlinks/sw/snaphu/

[^slidem-tools]: https://github.com/SliDEM-project/SliDEM-python

[^stripmap]: https://sentinels.copernicus.eu/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes/stripmap

[^guaruja]: https://www.abc.net.au/news/2020-03-04/brazils-deadly-landslides-kill-23-people-rescue-works-continue/12025460

