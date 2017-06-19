import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherByCity(cityName: string){
    let api = "http://api.openweathermap.org/data/2.5/weather?q=";
    let city = cityName;
    let units = "&units=metric";
    let apiKey = "&appid=1b72250886c66f6c2bae50f266123af1"

    let url = api + city + units + apiKey;

    return this.http.get(url).map((data)=>{
      return data.json();
    })
    
  };

  getForecastByCity(cityName: string){
    let api = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14&q=";
    let city = cityName;
    let units = "&units=metric";
    let apiKey = "&appid=1b72250886c66f6c2bae50f266123af1";

    let url = api+city+units+apiKey;

    return this.http.get(url).map((data) => {
      return data.json();
    });
  }

}
