import { Component, OnInit } from '@angular/core';
import { RootObject, WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss'],
})
export class WeatherTableComponent implements OnInit {
  public city: string = 'Tehran';

  public temp: number = 0;
  public humidity: number = 0;
  public wind_kph: number = 0;
  public condition: string = 'cloudy';

  public isDay: number = 0;
  public conditionImage: string = '';

  constructor(private weatherService: WeatherService) {}

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        this.humidity = response.current.humidity;
        this.wind_kph = response.current.wind_kph;
        this.condition = response.current.condition.text;
        this.temp = response.current.temp_c;
        this.isDay = response.current.is_day;
        this.conditionImage = response.current.condition.icon;
      },
    });
  }

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  onSubmit() {
    this.getWeatherData(this.city);
  }
}
