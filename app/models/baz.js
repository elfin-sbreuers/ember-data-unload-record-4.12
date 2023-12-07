import Model from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class BazModel extends Model {
  @hasMany('bar', { async: true, inverse: 'bazs' }) bars;
  @hasMany('foo', { async: true, inverse: 'bazs' }) foos;
}
