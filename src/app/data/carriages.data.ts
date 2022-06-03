import {SiteTable} from "./sites.data";

export interface Carriage {
  id: string;
  manufacturedYear: number;
  railId: string;
  owner: string;
  siteId: number;
  siteName?: string
  deleted: boolean;
}

export class CarriageTable {
  private static _carriages: Carriage[] = [
    {
      id: 'Bhv',
      manufacturedYear: 2020,
      railId: '505520-05555-7',
      owner: 'MÁV',
      siteId: 1,
      deleted: false,
    },
    {
      id: 'BDbhv',
      manufacturedYear: 2021,
      railId: '515-5393-00167',
      owner: 'MÁV',
      siteId: 2,
      deleted: false,
    },
    {
      id: 'AcBc',
        manufacturedYear: 2022,
      railId: '505520-  05555-   7',
      owner: 'MÁV',
      siteId: 3,
      deleted: false,
    }
];
public static carriages: Carriage[] = CarriageTable._carriages.map(carriage => {
  const site = SiteTable.sites.find(s => s.id === carriage.siteId);
  // @ts-ignore
  carriage.siteName = site.name;
  return carriage;
});
}

