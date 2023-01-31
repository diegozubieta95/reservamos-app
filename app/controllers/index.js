import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { timeout, restartableTask } from 'ember-concurrency';
// import fetch from 'ember-fetch';

export default class IndexController extends Controller {
  @tracked cities = [];
  @restartableTask
  *executeSearchEndpoint() {
    yield timeout(300);
    let val = document.querySelector('input').value;
    fetch(`https://search.reservamos.mx/api/v2/places?q=${val}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.cities = response;
      });
  }
}
