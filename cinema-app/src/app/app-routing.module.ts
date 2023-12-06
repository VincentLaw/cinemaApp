import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'detail/:id', component: MovieDetailComponent}, {path: '', component: LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
