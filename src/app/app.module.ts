import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';
import { SearchComponent } from './search/search.component';

import { WeatherService } from './weather.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WeatherResultComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    WeatherService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
