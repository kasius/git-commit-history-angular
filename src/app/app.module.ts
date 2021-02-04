import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromCommit from './store/commit.reducer';
import { CommitEffects } from './store/commit.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Modules needed to work with Reactive forms
    FormsModule,
    ReactiveFormsModule,
    // We declare what is necessary to work with NGRX and provide our
    // application with a STORE and a single source of truth
    StoreModule.forRoot(
      { router: routerReducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    EffectsModule.forFeature([CommitEffects]),
    StoreModule.forFeature(fromCommit.commitFeatureKey, fromCommit.reducerCommits)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
