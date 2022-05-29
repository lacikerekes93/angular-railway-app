import { createReducer, on, Action } from '@ngrx/store';

import {carriagesLoadedAction, carriageCreateAction, carriageLoadedAction} from './carriages.actions';
import { CarriageModel } from './carriages.model';

export const carriagesFeatureKey = 'carriagesFeature';

export interface CarriagesFeatureState {
  carriages: Array<CarriageModel>;
  loadedCarriage: CarriageModel;
}

export const initialState: CarriagesFeatureState = {
  carriages: [],
  loadedCarriage: null!
};

export const carriagesReducer = createReducer(
  initialState,
  on(carriagesLoadedAction, (state, {carriages}) => ({...state, carriages})),
  on(carriageLoadedAction, (state, {carriage}) => ({...state, loadedCarriage: carriage})),
  on(carriageCreateAction, (state) => ({...state})),
)
