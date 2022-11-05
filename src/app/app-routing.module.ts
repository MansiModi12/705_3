import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTypeComponent } from './data-type/data-type.component';
import { InputFormmComponent } from './input-formm/input-formm.component';

const routes: Routes = [
  {
    path:"DataType",
    component:DataTypeComponent
  },
  {
    path:"UserInput",
    component:InputFormmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
