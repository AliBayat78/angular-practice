import { Component, OnInit } from '@angular/core';
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
  public conditionImage: string = ''

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.city).subscribe({
      next: (response) => {
        console.log(response);
        this.humidity = response.current.humidity;
        this.wind_kph = response.current.wind_kph;
        this.condition = response.current.condition.text;
        this.temp = response.current.temp_c;
        this.isDay = response.current.is_day;
        this.conditionImage = response.current.condition.icon
      },
    });
  }
}
