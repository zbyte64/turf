# @turf/transform-scale

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## transformScale

Scale a GeoJSON from a given point by a factor of scaling (ex: factor=2 would make the GeoJSON 200% larger).
If a FeatureCollection is provided, the origin point will be calculated based on each individual Feature.

**Parameters**

-   `geojson` **[GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects)** GeoJSON to be scaled
-   `factor` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** of scaling, positive or negative values greater than 0
-   `origin` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Geometry](http://geojson.org/geojson-spec.html#geometry) \| [Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;[Point](http://geojson.org/geojson-spec.html#point)> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>)** Point from which the scaling will occur (string options: sw/se/nw/ne/center/centroid) (optional, default `"centroid"`)
-   `mutate` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** allows GeoJSON input to be mutated (significant performance increase if true) (optional, default `false`)

**Examples**

```javascript
var poly = turf.polygon([[[0,29],[3.5,29],[2.5,32],[0,29]]]);
var scaledPoly = turf.transformScale(poly, 3);

//addToMap
var addToMap = [poly, scaledPoly];
scaledPoly.properties = {stroke: '#F00', 'stroke-width': 4};
```

Returns **[GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects)** scaled GeoJSON

<!-- This file is automatically generated. Please don't edit it directly:
if you find an error, edit the source file (likely index.js), and re-run
./scripts/generate-readmes in the turf project. -->

---

This module is part of the [Turfjs project](http://turfjs.org/), an open source
module collection dedicated to geographic algorithms. It is maintained in the
[Turfjs/turf](https://github.com/Turfjs/turf) repository, where you can create
PRs and issues.

### Installation

Install this module individually:

```sh
$ npm install @turf/transform-scale
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```
