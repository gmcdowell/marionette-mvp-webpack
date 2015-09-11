/**
 * Created by greg on 11/09/15.
 */
import _ from 'lodash';
import {Collection} from 'backbone';
import Base from './chart_base.js';
import Circle from './chart_circle.js';
import Square from './chart_square.js';

const BASE = 'base';
const CIRCLE = 'circle';
const SQUARE = 'square';

export default Collection.extend({
  
  model: Circle,
  
  parse: function (rawData) {
    return rawData.map(d => {
      switch(d.type){
        case CIRCLE:
          return new Circle(d);
        case SQUARE:
          return new Square(d);
        default:
          return new Base(d);
      }
    });
  }
});