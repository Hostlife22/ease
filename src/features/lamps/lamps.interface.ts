export interface ILamp {
  electrification: string;
  height: number;
  id: number;
  image: string;
  isDarkMode: false;
  material: string;
  name: string;
  published_at: Date;
  weight: number;
  width: number;
}

export interface ILampsState {
  lamps: ILamp[];
  selectedLamp: ILamp | null;
  loading: boolean;
  error: string;
}
