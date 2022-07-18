import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./web/components/pages/home/home.component";
import {ProductListComponent} from "./web/components/pages/product-list/product-list.component";
import {ProductDetailComponent} from "./web/components/pages/product-detail/product-detail.component";
import {ContactComponent} from "./web/components/pages/contact/contact.component";
import {AboutComponent} from "./web/components/pages/about/about.component";
import {NotFoundComponent} from "./web/components/pages/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product-list', component: ProductListComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about-us', component: AboutComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
