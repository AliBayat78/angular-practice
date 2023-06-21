import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    const {
      weatherAPIBaseUrl,
      XRapidAPIHostName,
      XRapidApiHostValue,
      XRapidAPIKeyName,
      XRapidApiKeyValue,
    } = environment;

    const headers = new HttpHeaders()
      .set(XRapidAPIHostName, XRapidApiHostValue)
      .set(XRapidAPIKeyName, XRapidApiKeyValue);

    const apiUrl = weatherAPIBaseUrl + encodeURIComponent(city);

    return this.http.get<WeatherData>(apiUrl, {
      headers,
    });
  }
}
