import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

@NgModule({
  declarations: [AppComponent, NotfoundComponent, WeatherTableComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
