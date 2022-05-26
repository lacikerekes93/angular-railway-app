import { createReducer, on, Action } from '@ngrx/store';

import { carriagesLoadedAction, deleteCarriage } from './carriage.actions';
import { Carriage } from './carriage.model';

export const carriagesFeatureKey = 'carriages';

export interface CarriagesFeatureState {
  carriages: Array<Carriage>;
}

export const initialState: CarriagesFeatureState = {
  carriages: []
};

export const carriagesReducer = createReducer(
  initialState,
  on(carriagesLoadedAction, (state, {carriages}) => ({...state, carriages})),
  on(deleteCarriage, (state, { carriageId }) => {
    return {
      carriages: state.carriages.filter(car => car.carriageId !== carriageId)
    }
  })
)
