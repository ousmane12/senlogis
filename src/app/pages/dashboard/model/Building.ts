import { FileHandle } from "./file-handles";

export class Building {
    idBuilding: number | undefined;
    nom: String | undefined;
    adresse: String | undefined;
    ville: String | undefined;
    contact: String | undefined;
    nomGardien: String | undefined;
    nombreLogement: number | undefined;
    idAgence: number | undefined;
    nombreNiveau: number | undefined;
    images: FileHandle[] | undefined;
    status: any;
}
