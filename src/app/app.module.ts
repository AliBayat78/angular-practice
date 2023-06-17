import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './services/employee.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailedComponentComponent } from './detailed-component/detailed-component.component';

@NgModule({
  declarations: [AppComponent, TestComponent, NotfoundComponent, DetailedComponentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
