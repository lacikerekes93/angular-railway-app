import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../app.module';
import {carriagesFeatureKey, CarriagesFeatureState} from './carriages.reducer';
import {CarriageModel} from "./carriages.model";

export const selectFeature = createFeatureSelector<CarriagesFeatureState>(carriagesFeatureKey);

export const selectCarriages = createSelector(
  selectFeature,
  (state: CarriagesFeatureState) => {
    return state.carriages;
  }
)
export const selectLoadedCarriage = createSelector(
  selectFeature,
  (state: CarriagesFeatureState) => {
    return state.loadedCarriage;
  }
)
export const selectNextCarriageId = createSelector(
  selectCarriages,
  (carriages: CarriageModel[]) => {
    return carriages.length + 1;
  }
)
