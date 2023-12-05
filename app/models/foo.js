import Model from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default class FooModel extends Model {
  @hasMany('bar', { async: true, inverse: 'foos' }) bars;
}
