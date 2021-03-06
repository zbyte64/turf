# @turf/circle

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## circle

Takes a [Point](http://geojson.org/geojson-spec.html#point) and calculates the circle polygon given a radius in degrees, radians, miles, or kilometers; and steps for precision.

**Parameters**

-   `center` **([Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;[Point](http://geojson.org/geojson-spec.html#point)> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>)** center point
-   `radius` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** radius of the circle
-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional parameters
-   `steps` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of steps (optional, default `64`)
-   `units` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** miles, kilometers, degrees, or radians (optional, default `"kilometers"`)
-   `properties` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** properties (optional, default `{}`)

**Examples**

```javascript
var center = [-75.343, 39.984];
var radius = 5;
var steps = 10;
var units = 'kilometers';
var properties = {foo: 'bar'};

var circle = turf.circle(center, radius, steps, units, properties);

//addToMap
var addToMap = [turf.point(center), circle]
```

Returns **[Feature](http://geojson.org/geojson-spec.html#feature-objects)&lt;[Polygon](http://geojson.org/geojson-spec.html#polygon)>** circle polygon

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
$ npm install @turf/circle
```

Or install the Turf module that includes it as a function:

```sh
$ npm install @turf/turf
```
