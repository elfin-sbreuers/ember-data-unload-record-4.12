import Model from '@ember-data/model';
import { hasMany, belongsTo } from '@ember-data/model';

export default class FooModel extends Model {
  @belongsTo('bar', { async: true, inverse: 'foos' }) bar;
  @hasMany('baz', { async: true, inverse: 'foos' }) bazs;
}
