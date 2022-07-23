export interface ILamp {
  electrification: string;
  height: number;
  id: number;
  image: string;
  isDarkMode: boolean;
  material: string;
  name: string;
  published_at: string;
  weight: number;
  width: number;
}

export interface ILampsState {
  lamps: ILamp[];
  selectedLamp: ILamp | null;
  loading: boolean;
  error: string;
}
