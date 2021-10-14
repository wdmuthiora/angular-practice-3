import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';


//the router holds the routes to the various classes/components. Of course, they also have to be imported.
const routes: Routes = [
  { path: 'goals', component: GoalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'goals/:id', component: GoalDetailComponent },

  // The wildcards define a route that is not present in our routes array.
  { path: '**', component: NotFoundComponent },
  //  We can implement a redirect in our app so that when a user loads an empty path, they don't have an empty screen but instead see the goals
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
