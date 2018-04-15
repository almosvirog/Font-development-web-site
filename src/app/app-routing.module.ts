import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BookComponent } from "./book/book.component";
import { AboutComponent } from "./about/about.component";
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/book' },
  { path: 'book', component: BookComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
