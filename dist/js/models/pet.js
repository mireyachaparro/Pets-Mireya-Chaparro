export class Pet {
    constructor(name, race) {
        this.name = name;
        this.race = race;
        this.id = Pet.createId();
        this.isAdopted = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
