import { Component, Input } from '@angular/core'
import { Itoys } from '../../models/toysinterface'

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html'
})
export class toyslist {
  @Input()
  toyslist!: Itoys;
}

/*export class toyscomponent {
  public forecasts: toys[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
*/
