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
import {NotFoundComponent} from './web/components/pages/not-found/not-found.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BannerComponent} from './web/components/components/banner/banner.component';
import {ProductComponent} from "./web/components/components/product/product.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductListComponent,
        AboutComponent,
        ContactComponent,
        ProductDetailComponent,
        NotFoundComponent,
        BannerComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        CarouselModule,
        AvatarModule,
        AvatarGroupModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
