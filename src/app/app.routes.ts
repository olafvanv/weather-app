import { RouterModule, Routes } from '@angular/router';

import {SearchComponent}  from 'app/search/search.component';
import {WeatherResultComponent}  from 'app/weather-result/weather-result.component';

export const routes: Routes = [
    {path: 'results/:cityName', component: WeatherResultComponent}     
];

export const routing = RouterModule.forRoot(routes);