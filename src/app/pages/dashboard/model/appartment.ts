import { FileHandle } from "./file-handles";

export class Appartment {
    idAppartement: number | undefined;
    porte: string | undefined;
    niveau!: number;
    type!: string;
    state: any;
    loyerHt!: number;
    loyerTtc!: number;
    commission!: number;
    tom!: number;
    idLocataire: number | undefined;
    dateEdit!: Date;
    dateCreated!: Date;
    images!: FileHandle[];
    description: any;
}
