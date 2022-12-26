import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ForfaitsComponent } from './forfaits/forfaits.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitsComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'forfaits', component: ForfaitsComponent},
      {path: '', redirectTo: 'accueil', pathMatch:'full'},
      {path: 'accueil', component: AccueilComponent},
      {path: '**', component: AccueilComponent},
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
