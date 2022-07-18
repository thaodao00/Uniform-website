import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './web/components/pages/home/home.component';
import {ProductListComponent} from './web/components/pages/product-list/product-list.component';
import {AboutComponent} from './web/components/pages/about/about.component';
import {ContactComponent} from './web/components/pages/contact/contact.component';
import {ProductDetailComponent} from './web/components/pages/product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './web/components/pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductListComponent,
        AboutComponent,
        ContactComponent,
        ProductDetailComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
