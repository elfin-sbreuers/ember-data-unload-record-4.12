import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TestRoute extends Route {
  @service store;
  model() {
    this.store.push({
      data: [
        {
          id: '1',
          type: 'foo',
          relationships: { bars: { data: [{ id: '1', type: 'bar' }] } },
        },
        /*{
          id: '1',
          type: 'bar',
          relationships: { foos: { data: [{ id: '1', type: 'foo' }] } },
        }*/,
      ],
    });
    ['foo', 'bar'].forEach((modelName) => this.store.unloadAll(modelName));
    return this.store.peekAll('foo');
  }
}
