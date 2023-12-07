import Model from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class BarModel extends Model {
  @hasMany('foo', { async: true, inverse: 'bars' }) foos;
  @hasMany('baz', { async: true, inverse: 'bars' }) bazs;
}
