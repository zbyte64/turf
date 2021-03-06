import bearing from '@turf/bearing';
import destination from '@turf/destination';
import measureDistance from '@turf/distance';
import { point, isNumber } from '@turf/helpers';

/**
 * Takes a {@link LineString|line} and returns a {@link Point|point} at a specified distance along the line.
 *
 * @name along
 * @param {Feature<LineString>} line input line
 * @param {number} distance distance along the line
 * @param {Object} [options] Optional parameters
 * @param {string} [options.units="kilometers"] can be degrees, radians, miles, or kilometers
 * @returns {Feature<Point>} Point `distance` `units` along the line
 * @example
 * var line = turf.lineString([[-83, 30], [-84, 36], [-78, 41]]);
 *
 * var along = turf.along(line, 200, 'miles');
 *
 * //addToMap
 * var addToMap = [along, line]
 */
function along(line, distance, options) {
    // Backwards compatible with v4.0
    var units = (typeof options === 'object') ? options.units : options;

    // Validation
    var coords;
    if (line.type === 'Feature') coords = line.geometry.coordinates;
    else if (line.type === 'LineString') coords = line.coordinates;
    else throw new Error('input must be a LineString Feature or Geometry');
    if (!isNumber(distance)) throw new Error('distance must be a number');

    var travelled = 0;
    for (var i = 0; i < coords.length; i++) {
        if (distance >= travelled && i === coords.length - 1) break;
        else if (travelled >= distance) {
            var overshot = distance - travelled;
            if (!overshot) return point(coords[i]);
            else {
                var direction = bearing(coords[i], coords[i - 1]) - 180;
                var interpolated = destination(coords[i], overshot, direction, units);
                return interpolated;
            }
        } else {
            travelled += measureDistance(coords[i], coords[i + 1], units);
        }
    }
    return point(coords[coords.length - 1]);
}

export default along;
