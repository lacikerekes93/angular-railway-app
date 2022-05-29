export interface Site {
  id: number;
  name: string;
  owner: string;
  address: string;
  code: string;
}

export class SiteTable {
  public static sites: Site[] = [
    {
      id: 1,
      name: "Bp1",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "011234"
    },
    {
      id: 2,
      name: "Bp1",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "345345"
    },
    {
      id: 3,
      name: "Bp1",
      owner: "MÁV",
      address: "Bp. Mozdony utca 11",
      code: "435645"
    }
  ];
}
