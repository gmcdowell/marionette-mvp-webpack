/**
 * Created by greg on 11/09/15.
 */

import {Model, Collection} from 'backbone';
import _ from 'lodash';

export default Model.extend({
  defaults: {
    name: 'D3 Base Chart',
    type: 'base'
  }
});