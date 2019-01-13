import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NvBarComponent } from './nv-bar.component';
import { InfoPriceComponent } from './info-price/info-price.component';
import { CardsInfoComponent } from './info-price/cards-info.component';
import { CardInfoTwoComponent } from './info-price/card-info-two.component';
import { CardInfoThreeComponent } from './info-price/card-info-three.component';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NvBarComponent,
    InfoPriceComponent,
    CardsInfoComponent,
    CardInfoTwoComponent,
    CardInfoThreeComponent,
    FooterComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
