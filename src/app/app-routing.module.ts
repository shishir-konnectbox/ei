import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { TabularGridComponent } from './tabular-grid/tabular-grid.component';

const routes: Routes = [
  {path:'careers',component:CareersComponent},
  {path:'home',component:TabularGridComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
