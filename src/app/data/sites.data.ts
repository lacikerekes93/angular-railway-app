export interface Site {
  id: number;
  name: string;
  owner: string;
  address: string;
  code: string;
  deleted: boolean;
}

export class SiteTable {
  public static sites: Site[] = [
    {
      id: 1,
      name: "Bp1",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "011234",
      deleted: false
    },
    {
      id: 2,
      name: "Bp2",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "345345",
      deleted: false
    },
    {
      id: 3,
      name: "Bp3",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "435645",
      deleted: false
    }
  ];
}
