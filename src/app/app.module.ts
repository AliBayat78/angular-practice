import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
