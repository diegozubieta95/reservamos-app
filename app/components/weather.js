import GlimmerComponent from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class WeatherComponent extends GlimmerComponent {
  @tracked weather = null;
  constructor() {
    super(...arguments);
    if (this.args.city.long) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.args.city.lat}&lon=${this.args.city.long}&appid=a5a47c18197737e8eeca634cd6acb581`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          this.weather = response;
        });
    }
  }
}
