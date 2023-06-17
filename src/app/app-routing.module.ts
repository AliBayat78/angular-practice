import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { DetailedComponentComponent } from './detailed-component/detailed-component.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'test/:id', component: DetailedComponentComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
