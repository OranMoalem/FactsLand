import { FactsComponent } from './components/facts/facts.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "facts", component: FactsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMath - exact empty string.
    { path: "**", component: HomeComponent } // Must be the last route!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
