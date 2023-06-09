import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { FuncionesPrincipalesArrayComponent } from './funciones-principales-array/funciones-principales-array.component';
import { DirectivasComponent } from './directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    FuncionesPrincipalesArrayComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
