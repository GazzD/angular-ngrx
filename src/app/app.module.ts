import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { characterReducer } from './state/reducers/characters.reducer';
import { ROOT_REDUCERS } from './state/app.state';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffect } from './state/effects/characters.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterListComponent,
    CharactersPageComponent,
    CharacterFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CharactersEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
