import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class BarModel extends Model {
  @hasMany('foo', { async: true, inverse: 'bars' }) foos;
}
