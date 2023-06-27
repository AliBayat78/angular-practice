import { Component, HostListener, OnInit } from '@angular/core';
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

  isDragging = false;
  trackPosition = 0;
  dragStartPosition = 0;
  isGrabbing = false;

  getCursorType() {
    return {
      grab: !this.isGrabbing,
      grabbing: this.isGrabbing,
    };
  }
  onDragStart(event: PointerEvent) {
    this.isDragging = true;
    this.dragStartPosition = event.clientX;
    this.isGrabbing = true;
  }

  onDrag(event: PointerEvent) {
    if (this.isDragging) {
      const dragDistance = event.clientX - this.dragStartPosition;
      this.trackPosition += dragDistance;
      this.dragStartPosition = event.clientX;
      this.isGrabbing = true;
    }
  }

  onDragEnd(event: PointerEvent) {
    this.isDragging = false;
    this.isGrabbing = false;
  }
  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        console.log(response);
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
