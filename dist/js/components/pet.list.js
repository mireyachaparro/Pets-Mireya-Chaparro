import { pets } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...pets];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handleEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
        <h2>Pet List</h2>
        <slot id="add-pet"></slot>
        <ul>`;
        this.pets.forEach((item) => {
            template += `<li>${item.id} - ${item.name} - ${item.race}<span class ="eraser" data-id="${item.id}">✖️</span></li>`;
        });
        template += `</ul>
        </section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const name = document.querySelector('#name')
            .value;
        const race = document.querySelector('#race')
            .value;
        this.pets.push(new Pet(name, race));
        this.manageComponent();
    }
    handleEraser(ev) {
        const deleteId = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id != +deleteId);
        this.manageComponent();
    }
}
