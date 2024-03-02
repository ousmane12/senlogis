import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { RentComponent } from "./louer/rent.component";
import { SingleV1Component } from "./detail/single-v1.component";
import { SingleV2Component } from "./single-v2/single-v2.component";
import { SaleComponent } from "./acheter/sale.component";

const routes: Routes = [
  {
    path: "louer",
    component: RentComponent
  },
  {
    path: "acheter",
    component: SaleComponent
  },
  {
    path: "detail/:id",
    component: SingleV1Component
  },
  {
    path:"single-v2",
    component: SingleV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatalogRoutingModule { }
