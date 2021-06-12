import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {AccordionModule} from 'primeng/accordion';
// import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import {GalleriaModule} from 'primeng/galleria';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { HttpClientModule } from '@angular/common/http';
import { HowHelpedComponent } from './home/how-helped/how-helped.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { Approutes } from './app-routing.module';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    LatestNewsComponent,
    HowHelpedComponent,
    FooterComponent,
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    GalleriaModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes, { onSameUrlNavigation: 'reload', useHash: false, scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
