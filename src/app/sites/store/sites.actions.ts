import { createAction, props } from '@ngrx/store';
import { SiteModel } from './sites.model';

export enum SiteActionTypes {
  sitesRequested = '[Sites] Sites Requested',
  sitesLoaded = '[Sites] Sites Loaded',
  siteCreate = '[Sites] Site Create',
  siteCreated = '[Sites] Site Created',
  siteRequested = '[Sites] Site Requested',
  siteLoaded = '[Sites] Site Loaded',
  siteUpdate = '[Sites] Site Update',
  siteUpdated = '[Sites] Site Updated',
  siteDelete = '[Sites] Site Delete',
  siteDeleted = '[Sites] Site Deleted'
}

export const sitesRequestedAction = createAction(
  SiteActionTypes.sitesRequested
);
export const sitesLoadedAction = createAction(
  SiteActionTypes.sitesLoaded,
  props<{sites: SiteModel[]}>()
);
export const siteCreateAction = createAction(
  SiteActionTypes.siteCreate,
  props<{site: SiteModel}>()
);
export const siteCreatedAction = createAction(
  SiteActionTypes.siteCreated,
  props<{site: SiteModel}>()
);
export const siteRequestedAction = createAction(
  SiteActionTypes.siteRequested,
  props<{siteId: number}>()
);
export const siteLoadedAction = createAction(
  SiteActionTypes.siteLoaded,
  props<{site: SiteModel}>()
);
export const siteUpdateAction = createAction(
  SiteActionTypes.siteUpdate,
  props<{site: SiteModel}>()
);
export const siteUpdatedAction = createAction(
  SiteActionTypes.siteUpdated,
  props<{site: SiteModel}>()
);
export const siteDeleteAction = createAction(
  SiteActionTypes.siteDelete,
  props<{site: SiteModel}>()
);
export const siteDeletedAction = createAction(
  SiteActionTypes.siteDeleted,
  props<{site: SiteModel}>()
);

/*export const deleteEvent = createAction(
  '[Events] Delete Event',
  props<{eventId}>()
);*/
