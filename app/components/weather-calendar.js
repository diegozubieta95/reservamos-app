import Component from '@glimmer/component';

export default class WeatherCalendarComponent extends Component {
  constructor() {
    super(...arguments);
    this.temp = this.args.weather.map((temp) => {
      return temp.temp.day;
    });
    this.max = this.temp.indexOf(Math.max(...this.temp));
  }
}
