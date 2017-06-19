import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent implements OnInit {

  city: String;
  weather: {};
  forecast: {};
  loading = false;
  icon_url: string;
  countryId: string;
  timezone: string;
  date: Date;

  constructor(private route: ActivatedRoute, private WeatherService: WeatherService) { }

  getWeatherResults(city) {
    this.WeatherService.getWeatherByCity(city).subscribe((res) => {
      this.weather = res;
      console.log(this.weather);

      this.WeatherService.getForecastByCity(city).subscribe((res) => {
        this.forecast = res;
        console.log(res);
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['cityName']) {
        this.city = params['cityName'];
        this.getWeatherResults(this.city);
      }
    });

    this.date = new Date();

    console.log(this.date);
  }

}
