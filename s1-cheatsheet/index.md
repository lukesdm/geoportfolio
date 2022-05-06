# Sentinel-1 Cheatsheet

A rough guide to choosing appropriate Copernicus [Sentinel-1](https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-1) synthetic aperture radar (SAR) data products and [SNAP/Sentinel-1 Toolbox](https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1) pre-processing steps. Some of these are mutually exclusive. Please feel free to submit corrections or clarifications.  

<table>
<thead>
  <tr>
    <th rowspan="2"></th>
    <th rowspan="2">Option</th>
    <th rowspan="2">Description</th>
    <th rowspan="2">Typical usage</th>
    <th colspan="3">Availability</th>
  </tr>
  <tr>
    <th><a href="https://scihub.copernicus.eu/">ESA</a></th>
    <th><a href="https://asf.alaska.edu/">ASF</a></th>
    <th><a href="https://www.sentinel-hub.com/">SH</a></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="7"><b>Product Selection</b> [refer to Sentinel-1 <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar">User Guide</a> or <a href="https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-1-sar">Technical Guide</a> for details]</td>
  </tr>
  <tr>
    <td rowspan="3">Product Type</td>
    <td>GRD</td>
    <td>Ground range, multi-look, detected; reduced speckle, but lower resolution; no phase information.</td>
    <td>Applications that don't require phase; visualization</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>SLC</td>
    <td>Slant-range single-look, complex</td>
    <td>Interferometry, change detection</td>
    <td>Y</td>
    <td>Y</td>
    <td>N</td>
  </tr>
  <tr>
    <td>OCN</td>
    <td>Sea surface and wind speed estimates</td>
    <td>Ocean</td>
    <td>Y</td>
    <td>Y</td>
    <td>N</td>
  </tr>
  <tr>
    <td rowspan="4">Acq. Mode</td>
    <td>IW</td>
    <td>Interfometric wide swath</td>
    <td>Land (except polar regions)</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>EW</td>
    <td>Extra-wide swath</td>
    <td>Polar regions</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>WV</td>
    <td>Wave mode</td>
    <td>Ocean</td>
    <td>Y</td>
    <td>Y</td>
    <td>N</td>
  </tr>
  <tr>
    <td>SM</td>
    <td>Strip-map; targeted, narrow coverage</td>
    <td>Special events</td>
    <td>Y</td>
    <td>Y</td>
    <td>N</td>
  </tr>
  <tr>
    <td rowspan="2">Orbit</td>
    <td>Ascending</td>
    <td rowspan="2">S1A or S1B image; different acquisition dates</td>
    <td rowspan="2">Like for like: Change detection, interferometry <br>Different: Visualization; flat terrain</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>Descending</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td rowspan="4">Polarization</td>
    <td>HH</td>
    <td rowspan="4">A crucial radar parameter; different surface types/objects have different polarimetric responses</td>
    <td rowspan="4">Highly application-dependent; Literature, background theory and experimentation required. But, a dual-pol., e.g. VV+VH, is a good general-purpose starting point as it covers both surface and volume scatterers</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>VV</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>VV+VH</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>HH+HV</td>
    <td>Y</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td colspan="7"><b>Pre-processing</b> [the <a href="http://step.esa.int/main/doc/tutorials/">SNAP and Sentinel 1 Toolbox tutorials</a> cover these in detail]</td>
  </tr>
  <tr>
    <td rowspan="2">Orthorectification<br>(GRD only)</td>
    <td>None</td>
    <td rowspan="2">DEM correction to apply; offers georeferencing, but with possible distortion</td>
    <td>Changing terrain e.g. volcanic eruption; distortion-free image preferred; will perform custom DEM processing</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>DEM (10, 30, 90m)</td>
    <td> No major terrain changes; geo-referencing benefits outweigh drawbacks of distortion</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>Backscatter Coefficient</td>
    <td>beta0</td>
    <td>Basic radiometric calibration</td>
    <td>No DEM-correction has been applied, but will be</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td></td>
    <td>sigma0</td>
    <td>Calibrated according to incidence angle</td>
    <td>No DEM-correction, but flat terrain</td>
    <td>-</td>
    <td>N</td>
    <td>Y</td>
  </tr>
  <tr>
    <td></td>
    <td>gamma0</td>
    <td>Calibrated according to surface normal</td>
    <td>DEM-correction has been applied</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>Speckle Filter</td>
    <td>None</td>
    <td rowspan="2">Whether to apply a spatial feature-preserving, speckle-reducing Lee Filter</td>
    <td>Custom filtering preferred</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
  <tr>
    <td></td>
    <td>Lee</td>
    <td>General purpose; visualization</td>
    <td>-</td>
    <td>Y</td>
    <td>Y</td>
  </tr>
</tbody>
</table>

Created by Luke McQuade. License: [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)
