import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class WeatherService {
    private openWeatherMap_url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?';
    private openWeatherMap_key = '985b733b5749f621ad8ca0d0fa9f6dcc';
    constructor (
        private http: HttpClient
    ) {

    }
    public getWeather(location) {
        return this.http.get(`${this.openWeatherMap_url}lat=${location.lat}&lon=${location.lng}&APPID=${this.openWeatherMap_key}&units=metric`);
    }
}
