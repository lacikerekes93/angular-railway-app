import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SiteModel } from './sites.model';
import {sitesFeatureKey, SitesFeatureState} from './sites.reducer';

export const selectFeature = createFeatureSelector<SitesFeatureState>(sitesFeatureKey);

export const selectSites = createSelector(
  selectFeature,
  (state: SitesFeatureState) => {
    return state.sites;
  }
)
export const selectLoadedSite = createSelector(
  selectFeature,
  (state: SitesFeatureState) => {
    return state.loadedSite;
  }
)
export const selectNextSiteId = createSelector(
  selectSites,
  (sites: SiteModel[]) => {
    return sites.length + 1;
  }
)
