export class Pet {
    id: number;
    isAdopted: boolean;
    dueno?: string;
    static createId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(public name: string, public race: string) {
        this.id = Pet.createId();
        this.isAdopted = false;
    }
}
