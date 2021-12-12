import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { CodeforjavaComponent } from './codeforjava/codeforjava.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {path:"", redirectTo :"codeforjava", pathMatch : "full"},
  {path:"search" ,component:SearchComponent},
  {path:"Allusers",component:AllusersComponent},
  {path:"Register",component:RegisterComponent},
  {path:"codeforjava",component:CodeforjavaComponent},
  {path:"update",component:EditComponent},
  {path:"**", component:CodeforjavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
