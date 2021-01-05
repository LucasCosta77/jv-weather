import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './container/home/home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { RouterModule } from '@angular/router';
import { UnitSelectorComponent } from './container/unit-selector/unit-selector.component';



@NgModule({
  declarations: [HomePage, CurrentWeatherComponent, UnitSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home',homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { }
