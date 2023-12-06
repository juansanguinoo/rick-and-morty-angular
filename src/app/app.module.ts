import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { RouterModule } from '@angular/router';
import { LocationsModule } from './locations/locations.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    HttpClientModule,
    EpisodesModule,
    RouterModule,
    LocationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
