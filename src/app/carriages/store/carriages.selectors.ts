import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../app.module';
import {carriagesFeatureKey, CarriagesFeatureState} from './carriages.reducer';

export const selectAllCarriages = createFeatureSelector<CarriagesFeatureState>(carriagesFeatureKey);

export const selectCarriages = createSelector(
  selectAllCarriages,
  (state: CarriagesFeatureState) => {
    return state.carriages;
  }
)
