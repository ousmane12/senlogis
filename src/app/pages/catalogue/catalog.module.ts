import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbRatingModule, NgbTooltipModule, NgbCollapseModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Youtube Player
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Component
import { CatalogRoutingModule } from "./catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { RentComponent } from './louer/rent.component';
import { SingleV1Component } from './detail/single-v1.component';
import { SingleV2Component } from './single-v2/single-v2.component';
import { SaleComponent } from './acheter/sale.component';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    RentComponent,
    SingleV1Component,
    SingleV2Component,
    SaleComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgxYoutubePlayerModule,
    NgxSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    CatalogRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule
  ]
})
export class CatalogModule { }
