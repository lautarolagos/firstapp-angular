import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

// Definicion de rutas:

const app_routes: Routes = [

    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true}) // esta es la constante que declare arriba y el useHash para el HTAccess
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}