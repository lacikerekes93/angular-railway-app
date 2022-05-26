import { createAction, props } from '@ngrx/store';
import {Carriage} from "./carriage.model";

export enum CarriageActionTypes {
  carriagesRequested = '[Carriage] Carriages Requested',
  carriagesLoaded = '[Carriage] Carriages Loaded'
}

export const carriagesRequestedAction = createAction(
  CarriageActionTypes.carriagesRequested
);
export const carriagesLoadedAction = createAction(
  CarriageActionTypes.carriagesLoaded,
  props<{carriages: Carriage[]}>()
);

export const deleteCarriage = createAction(
  '[Carriage] Delete Carriage',
  props<{carriageId: string}>()
);
