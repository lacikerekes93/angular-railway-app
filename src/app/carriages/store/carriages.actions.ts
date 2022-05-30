import { createAction, props } from '@ngrx/store';
import {CarriageModel} from "./carriages.model";

export enum CarriageActionTypes {
  carriagesRequested = '[Carriages] Carriages Requested',
  carriageRequested = '[Carriages] Carriage Requested',
  carriagesLoaded = '[Carriages] Carriages Loaded',
  carriageLoaded = '[Carriages] Carriage Loaded',
  carriageCreate = '[Carriages] Carriage Create',
  carriageCreated = '[Carriages] Carriage Created',
  carriageUpdate = '[Carriages] Carriage Update',
  carriageDelete = '[Carriages] Carriage Delete',
  carriageDeleted = '[Carriages] Carriage Deleted'
}

export const carriagesRequestedAction = createAction(
  CarriageActionTypes.carriagesRequested
);
export const carriageRequestedAction = createAction(
  CarriageActionTypes.carriageRequested,
  props<{carriageId: string}>()
);
export const carriagesLoadedAction = createAction(
  CarriageActionTypes.carriagesLoaded,
  props<{carriages: CarriageModel[]}>()
);
export const carriageLoadedAction = createAction(
  CarriageActionTypes.carriageLoaded,
  props<{carriage: CarriageModel}>()
);
export const carriageCreateAction = createAction(
  CarriageActionTypes.carriageCreate,
  props<{carriage: CarriageModel}>()
);
export const carriageCreatedAction = createAction(
  CarriageActionTypes.carriageCreated,
  props<{carriage: CarriageModel}>()
);
export const carriageUpdateAction = createAction(
  CarriageActionTypes.carriageUpdate,
  props<{carriage: CarriageModel}>()
);
export const carriageDeleteAction = createAction(
  CarriageActionTypes.carriageDelete,
  props<{carriage: CarriageModel}>()
);
