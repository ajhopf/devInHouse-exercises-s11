import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePhillipsPipe } from './pipes/capitalize-phillips.pipe';
import { CapitalizeComponent } from './components/capitalize/capitalize.component';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FotosComponent } from './components/fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhillipsPipe,
    CapitalizeComponent,
    NavbarComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
