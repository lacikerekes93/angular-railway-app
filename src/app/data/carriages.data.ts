import {SiteTable} from "./sites.data";

export interface Carriage {
  id: string;
  manufacturedYear: number;
  railId: string;
  owner: string;
  siteId: number;
}

export class CarriageTable {
  private static _carriages: Carriage[] = [
    {
      id: 'Bhv',
      manufacturedYear: 2020,
      railId: '50 55 20-05 555-7',
      owner: 'MÁV',
      siteId: 1
    },
    {
      id: 'BDbhv',
      manufacturedYear: 2021,
      railId: '50 55 20-05 555-7',
      owner: 'MÁV',
      siteId: 2
    },
    {
      id: 'AcBc',
        manufacturedYear: 2022,
      railId: '50 55 20-05 555-7',
      owner: 'MÁV',
      siteId: 3
    }
];
public static carriages: Carriage[] = CarriageTable._carriages.map(carriage => {
  const site = SiteTable.sites.find(a => a.id === carriage.siteId);
  return carriage;
});
}

