import { Carriage } from "../../data/carriages.data";

export class CarriageModel implements Carriage {
  id!: string;
  manufacturedYear!: number;
  railId!: string;
  owner!: string;
  siteId!: number;
  siteName?: string;
  deleted!: boolean;
}
