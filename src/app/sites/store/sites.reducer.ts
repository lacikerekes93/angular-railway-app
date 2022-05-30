import { createReducer, on, Action } from '@ngrx/store';

import { sitesLoadedAction } from './sites.actions';
import { siteCreateAction } from './sites.actions';
import { siteLoadedAction } from './sites.actions';
import { SiteModel } from './sites.model';

export const sitesFeatureKey = 'sitesFeature';

export interface SitesFeatureState {
  sites: Array<SiteModel>;
  loadedSite: SiteModel;
}

export const initialState: SitesFeatureState = {
  sites: [],
  loadedSite: null!
};

export const sitesReducer = createReducer(
  initialState,
  on(sitesLoadedAction, (state, {sites}) => ({...state, sites})),
  on(siteLoadedAction, (state, {site}) => ({...state, loadedSite: site})),
  on(siteCreateAction, (state) => ({...state}))
)
