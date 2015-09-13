/**
 * Created by greg on 11/09/15.
 */
import _ from 'lodash';
import {Collection} from 'backbone';
import Base from './chart_base.js';
import Circle from './chart_circle.js';
import Square from './chart_square.js';
import Ellipse from './chart_ellipse.js';
import Line from './chart_line.js';
import Polyline from './chart_polyline.js';
import Polygon from './chart_polygon.js';

const BASE = 'base';
const CIRCLE = 'circle';
const SQUARE = 'square';
const ELLIPSE = 'ellipse';
const LINE = 'line';
const POLYLINE = 'polyline';
const POLYGON = 'polygon';

export default Collection.extend({

    model: Circle,

    parse: function (rawData, opts) {
        return rawData.map(d => {
            switch (d.type) {
                default:
                    return new Circle(d, opts);
                case SQUARE:
                    return new Square(d, opts);
                case ELLIPSE:
                    return new Ellipse(d, opts);
                case LINE:
                    return new Line(d, opts);
                case POLYLINE:
                    return new Polyline(d, opts);
                case POLYGON:
                    return new Polygon(d, opts);
            }
        });
    }
});