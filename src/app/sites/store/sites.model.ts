import { Site } from "../../data/sites.data";

export class SiteModel implements Site {
  id!: number;
  name!: string;
  owner!: string;
  address!: string;
  code!: string;
  deleted!: boolean;
}
