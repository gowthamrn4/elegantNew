import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SmartHomePackagesComponent } from './smarthomepackages/smarthomepackages.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    AboutusComponent,
    FooterComponent,
    ProductsComponent,
    SmartHomePackagesComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSqAUwW9nYP3PzXitxmEnLysEKPz2V9NM'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'product', component: ProductsComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'about', component: AboutusComponent},
      {path: 'smarthomepackages', component: SmartHomePackagesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
