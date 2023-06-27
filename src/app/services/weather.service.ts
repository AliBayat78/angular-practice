import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RootObject } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<RootObject> {
    const { weatherAPIBaseUrl } = environment;

    // const headers = new HttpHeaders()
    //   .set(XRapidAPIHostName, XRapidApiHostValue)
    //   .set(XRapidAPIKeyName, XRapidApiKeyValue);

    const params = new HttpParams().set('q', city);

    return this.http.get<RootObject>(weatherAPIBaseUrl, {
      params,
    });
  }
}
