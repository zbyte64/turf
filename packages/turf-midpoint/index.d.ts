import { Feature, Point, Coord } from '@turf/helpers'

/**
 * http://turfjs.org/docs/#midpoint
 */
export default function (
    point1: Coord,
    point2: Coord
): Feature<Point>;