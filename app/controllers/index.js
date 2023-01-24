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
    // let city = fetch(`https://search.reservamos.mx/api/v2/places?q=${val}`);
    // console.log(city);
    // let event = [...arguments].lastObject;
    // let beforeWork = this.args.beforeWork;
    // let work = this.args.work;
    // let afterWork = this.args.afterWork;
    // let askToConfirm = this.args.askToConfirm;
    // let confirmPrompt = this.args.confirmPrompt;
    // let onError = this.args.onError;

    // let result;

    // //confirm before excecuting any action
    // if (askToConfirm) {
    //   assert(
    //     '@string confirmPrompt needs to be provided',
    //     confirmPrompt !== null
    //   );

    //   if (!confirm(confirmPrompt)) {
    //     event.stopPropagation();
    //     return;
    //   }
    // }

    // try {
    //   //run a validation action, return FALSE to cancel task
    //   let shouldCancel = yield beforeWork?.(...arguments) === false;

    //   if (shouldCancel) {
    //     return;
    //   }

    //   //main action to run
    //   result = yield work?.(...arguments);

    //   //an action to excecute after work
    //   yield afterWork?.(...arguments);

    //   return result;
    // } catch (e) {
    //   console.error(e);
    //   onError?.(e);
    // }
  }
}
