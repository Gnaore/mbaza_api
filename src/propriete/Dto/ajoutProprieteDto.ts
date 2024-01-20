import { IsNotEmpty } from 'class-validator';
export class AjoutProprieteDto {
  @IsNotEmpty()
  readonly proprieteAdresse: string;
  @IsNotEmpty()
  readonly proprieteAnnee: number;
  readonly proprieteSurface: number;
  readonly proprieteNbrEtage: number;
  readonly proprieteNbrChambre: number;
  readonly proprieteNbreSalleBain: number;
  readonly proprieteDescription: string;
  @IsNotEmpty()
  readonly proprieteStatu: string;
  @IsNotEmpty()
  readonly proprietePrix: number;
  readonly proprietePret: number;
  readonly proprieteJardin: boolean;
  readonly proprietePiscine: boolean;
  readonly proprieteGarage: boolean;
  readonly proprieteBalcon: boolean;
  readonly proprieteChemine: boolean;
  readonly proprieteClimatisation: boolean;
  readonly proprieteEquipement: boolean;
  readonly proprieteequipementdetails: string;
  readonly proprieteLongitude: number;
  readonly proprieteLatitude: number;
  readonly proprieteQuartier: string;
  @IsNotEmpty()
  readonly proprieteLienPhoto: string;
  @IsNotEmpty()
  readonly bailleurId: number;
  @IsNotEmpty()
  readonly typebienId: number;
}
